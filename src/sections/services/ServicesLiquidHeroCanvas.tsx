import React, { useEffect, useRef, useState } from 'react';

interface ServicesLiquidHeroCanvasProps {
  imageSrc: string;
}

export const ServicesLiquidHeroCanvas: React.FC<ServicesLiquidHeroCanvasProps> = ({ imageSrc }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);

  // Mouse & interaction state refs (60fps performance without React state re-renders)
  const targetMouseRef = useRef<{ x: number; y: number }>({ x: 0.5, y: 0.5 });
  const currentMouseRef = useRef<{ x: number; y: number }>({ x: 0.5, y: 0.5 });
  const isHoveredRef = useRef<boolean>(false);
  const velocityRef = useRef<number>(0);
  const lastMouseRef = useRef<{ x: number; y: number; time: number }>({ x: 0.5, y: 0.5, time: Date.now() });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = canvasRef.current?.parentElement;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const rawX = (e.clientX - rect.left) / rect.width;
      const rawY = (e.clientY - rect.top) / rect.height;

      // Only track if mouse is within or near hero container
      if (rawX >= 0 && rawX <= 1 && rawY >= 0 && rawY <= 1) {
        isHoveredRef.current = true;
        targetMouseRef.current = { x: rawX, y: rawY };

        // Calculate cursor velocity
        const now = Date.now();
        const dt = Math.max(1, now - lastMouseRef.current.time);
        const dx = rawX - lastMouseRef.current.x;
        const dy = rawY - lastMouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const speed = Math.min(1.0, (dist / dt) * 80.0);

        velocityRef.current = velocityRef.current * 0.85 + speed * 0.15;
        lastMouseRef.current = { x: rawX, y: rawY, time: now };
      } else {
        isHoveredRef.current = false;
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check WebGL support & reduced motion preference
    const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
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

    // FRAGMENT SHADER (LIQUID WATER SURFACE REFRACTION)
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
        
        // Correct aspect ratio for circular wave physics
        vec2 aspectUV = uv;
        aspectUV.x *= (u_resolution.x / u_resolution.y);
        vec2 aspectMouse = u_mouse;
        aspectMouse.x *= (u_resolution.x / u_resolution.y);

        // Distance from cursor
        float dist = distance(aspectUV, aspectMouse);

        // Ambient continuous micro-wave (slow subtle background liquid motion)
        float ambientWave = sin(uv.x * 12.0 + u_time * 0.8) * cos(uv.y * 12.0 + u_time * 0.6) * 0.0012;

        // Interactive cursor liquid displacement wave
        float waveFrequency = 28.0;
        float waveDecay = 4.8;
        float waveStrength = (0.006 + u_velocity * 0.018) * u_hover;
        
        float cursorWave = sin(dist * waveFrequency - u_time * 4.0) * exp(-dist * waveDecay) * waveStrength;

        // Combine distortions
        vec2 dir = normalize(aspectUV - aspectMouse + vec2(0.0001));
        vec2 distortedUV = uv + dir * cursorWave + vec2(ambientWave);
        distortedUV = clamp(distortedUV, 0.001, 0.999);

        // Texture sample
        vec4 color = texture2D(u_image, distortedUV);

        // Soft specular liquid highlight around cursor wave crests
        float specular = exp(-dist * 8.0) * (0.04 + u_velocity * 0.15) * u_hover;
        color.rgb += vec3(1.0, 0.96, 0.90) * specular;

        gl_FragColor = color;
      }
    `;

    function createShader(glCtx: WebGLRenderingContext, type: number, source: string) {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
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

    // Quad geometry
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const texCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0]),
      gl.STATIC_DRAW
    );

    // Texture setup
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

      // Smooth mouse position interpolation (lags naturally behind cursor)
      currentMouseRef.current.x += (targetMouseRef.current.x - currentMouseRef.current.x) * 0.07;
      currentMouseRef.current.y += (targetMouseRef.current.y - currentMouseRef.current.y) * 0.07;

      // Smooth hover interpolation
      const targetHover = isHoveredRef.current ? 1.0 : 0.0;
      hoverValue += (targetHover - hoverValue) * 0.04;

      // Smooth velocity decay
      velocityRef.current *= 0.95;

      if (imageLoaded) {
        gl.useProgram(program);
        gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
        gl.uniform2f(mouseLoc, currentMouseRef.current.x, currentMouseRef.current.y);
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
  }, [imageSrc]);

  if (!webglSupported) {
    return (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover block pointer-events-none z-0"
    />
  );
};
