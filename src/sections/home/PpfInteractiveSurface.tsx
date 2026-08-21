import React, { useEffect, useRef, useState } from 'react';

interface PpfInteractiveSurfaceProps {
  imageSrc: string;
  isHovered: boolean;
  pointerPos: { x: number; y: number };
  velocity: number;
}

export const PpfInteractiveSurface: React.FC<PpfInteractiveSurfaceProps> = ({
  imageSrc,
  isHovered,
  pointerPos,
  velocity,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);

  // Shader refs for 60fps performance without React re-renders
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0.5, y: 0.5 });
  const velocityRef = useRef<number>(0);

  useEffect(() => {
    mouseRef.current = pointerPos;
    velocityRef.current = velocity;
  }, [pointerPos, velocity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);
    if (!gl) {
      setWebglSupported(false);
      return;
    }

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) {
      setWebglSupported(false);
      return;
    }

    // VERTEX SHADER
    const vsSource = `
      attribute vec2 a_position;
      attribute vec2 a_texCoord;
      varying vec2 v_texCoord;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        v_texCoord = a_texCoord;
      }
    `;

    // FRAGMENT SHADER (FULL-VIEWPORT PPF OPTICAL REFRACTION & SPECULAR SHADOW SHADER)
    const fsSource = `
      precision mediump float;
      uniform sampler2D u_image;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_velocity;
      uniform float u_time;
      uniform float u_hover;
      varying vec2 v_texCoord;

      void main() {
        vec2 uv = v_texCoord;
        
        // Aspect ratio correction
        vec2 aspectUV = uv;
        aspectUV.x *= (u_resolution.x / u_resolution.y);
        vec2 aspectMouse = u_mouse;
        aspectMouse.x *= (u_resolution.x / u_resolution.y);

        // Distance from pointer
        float dist = distance(aspectUV, aspectMouse);

        // Optical PPF clear-film wave refraction
        float ripple = sin(dist * 32.0 - u_time * 3.5) * exp(-dist * 5.5) * (0.008 + u_velocity * 0.025) * u_hover;
        
        // Refracted UV sampling
        vec2 dir = normalize(aspectUV - aspectMouse + vec2(0.0001));
        vec2 distortedUV = uv + dir * ripple;
        distortedUV = clamp(distortedUV, 0.0, 1.0);

        // Base image texture
        vec4 color = texture2D(u_image, distortedUV);

        // Soft specular light streak moving across clearcoat
        float specular = exp(-dist * 9.0) * (0.08 + u_velocity * 0.25) * u_hover;
        vec3 specularColor = vec3(1.0, 0.96, 0.92) * specular;

        // Subtle dark vignette near viewport edges
        float vignette = 1.0 - length(uv - 0.5) * 0.45;
        color.rgb *= vignette;

        // Add specular light
        color.rgb += specularColor;

        gl_FragColor = color;
      }
    `;

    function createShader(glCtx: WebGLRenderingContext, type: number, source: string) {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.warn('Shader compile error:', glCtx.getShaderInfoLog(shader));
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vertShader || !fragShader) {
      setWebglSupported(false);
      return;
    }

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      setWebglSupported(false);
      return;
    }

    gl.useProgram(program);

    const positionLoc = gl.getAttribLocation(program, 'a_position');
    const texCoordLoc = gl.getAttribLocation(program, 'a_texCoord');
    const resolutionLoc = gl.getUniformLocation(program, 'u_resolution');
    const mouseLoc = gl.getUniformLocation(program, 'u_mouse');
    const velocityLoc = gl.getUniformLocation(program, 'u_velocity');
    const timeLoc = gl.getUniformLocation(program, 'u_time');
    const hoverLoc = gl.getUniformLocation(program, 'u_hover');

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1,
      ]),
      gl.STATIC_DRAW
    );

    const texCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        0, 1,
        1, 1,
        0, 0,
        0, 0,
        1, 1,
        1, 0,
      ]),
      gl.STATIC_DRAW
    );

    const texture = gl.createTexture();
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = imageSrc;
    let imageLoaded = false;

    image.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      imageLoaded = true;
    };

    let animationFrameId: number;
    let hoverValue = 0;
    let currentMouse = { x: 0.5, y: 0.5 };

    const render = (time: number) => {
      if (canvas.parentElement) {
        const width = canvas.parentElement.clientWidth;
        const height = canvas.parentElement.clientHeight;
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
          gl.viewport(0, 0, width, height);
        }
      }

      currentMouse.x += (mouseRef.current.x - currentMouse.x) * 0.08;
      currentMouse.y += (mouseRef.current.y - currentMouse.y) * 0.08;

      const targetHover = isHovered ? 1.0 : 0.0;
      hoverValue += (targetHover - hoverValue) * 0.05;

      if (imageLoaded) {
        gl.useProgram(program);

        gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
        gl.uniform2f(mouseLoc, currentMouse.x, currentMouse.y);
        gl.uniform1f(velocityLoc, velocityRef.current);
        gl.uniform1f(timeLoc, time * 0.001);
        gl.uniform1f(hoverLoc, hoverValue);

        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.enableVertexAttribArray(positionLoc);
        gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
        gl.enableVertexAttribArray(texCoordLoc);
        gl.vertexAttribPointer(texCoordLoc, 2, gl.FLOAT, false, 0, 0);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [imageSrc, isHovered]);

  if (!webglSupported) {
    return (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
    );
  }

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover block pointer-events-none z-0" />;
};
