import React, { useEffect, useRef, useState } from 'react';

interface ServicesLiquidHeroCanvasProps {
  imageSrc: string;
}

export const ServicesLiquidHeroCanvas: React.FC<ServicesLiquidHeroCanvasProps> = ({ imageSrc }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);

  // Shader state refs for 60fps performance without React re-renders
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0.5, y: 0.5 });
  const targetMouseRef = useRef<{ x: number; y: number }>({ x: 0.5, y: 0.5 });
  const dirRef = useRef<{ x: number; y: number }>({ x: 1.0, y: 0.0 });
  const targetDirRef = useRef<{ x: number; y: number }>({ x: 1.0, y: 0.0 });
  const velocityRef = useRef<number>(0);
  const isHoveredRef = useRef<boolean>(false);
  const lastPosRef = useRef<{ x: number; y: number; time: number }>({ x: 0.5, y: 0.5, time: Date.now() });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = canvasRef.current?.parentElement;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const rawX = (e.clientX - rect.left) / rect.width;
      const rawY = (e.clientY - rect.top) / rect.height;

      if (rawX >= 0 && rawX <= 1 && rawY >= 0 && rawY <= 1) {
        isHoveredRef.current = true;
        targetMouseRef.current = { x: rawX, y: rawY };

        const now = Date.now();
        const dt = Math.max(1, now - lastPosRef.current.time);
        const dx = rawX - lastPosRef.current.x;
        const dy = rawY - lastPosRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 0.001) {
          // Direction vector of motion
          targetDirRef.current = { x: dx / dist, y: dy / dist };
          // Velocity impulse
          const speed = Math.min(1.5, (dist / dt) * 120.0);
          velocityRef.current = velocityRef.current * 0.7 + speed * 0.3;
        }

        lastPosRef.current = { x: rawX, y: rawY, time: now };
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

    // FRAGMENT SHADER (LARGE-SCALE DIRECTIONAL LIQUID WAVE SHADER)
    const fsSource = `
      precision mediump float;
      uniform sampler2D u_image;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform vec2 u_direction;
      uniform float u_velocity;
      uniform float u_time;
      uniform float u_hover;
      varying vec2 v_texCoord;

      void main() {
        vec2 uv = v_texCoord;

        // Aspect ratio correction for fluid physics
        vec2 aspectUV = uv;
        aspectUV.x *= (u_resolution.x / u_resolution.y);
        vec2 aspectMouse = u_mouse;
        aspectMouse.x *= (u_resolution.x / u_resolution.y);

        // Distance from cursor
        float dist = distance(aspectUV, aspectMouse);

        // Directional momentum dot product (wave pushes in motion direction)
        vec2 toCursor = aspectUV - aspectMouse;
        float dirDot = dot(normalize(toCursor + vec2(0.0001)), u_direction);

        // Ambient fluid micro-drift (slow, subtle background surface motion)
        float ambientWave = sin(uv.x * 8.0 + u_time * 0.6) * cos(uv.y * 8.0 + u_time * 0.5) * 0.0015;

        // Large directional liquid wave propagation
        // Large influence field: wave extends 20% to 50% across viewport width
        float waveRadius = 2.4; 
        float waveFreq = 16.0;
        float waveAmp = (0.015 + u_velocity * 0.045) * u_hover;

        // Wave displacement modulated by directional vector and exponential decay
        float wavePattern = sin(dist * waveFreq - u_time * 4.5) * exp(-dist * waveRadius);
        float directionalMultiplier = 0.6 + 0.4 * dirDot; // Stronger in motion direction
        float waveDisplacement = wavePattern * waveAmp * directionalMultiplier;

        // Vector displacement offset
        vec2 offset = (u_direction * waveDisplacement) + (toCursor * waveDisplacement * 0.5) + vec2(ambientWave);
        vec2 distortedUV = clamp(uv + offset, 0.001, 0.999);

        // Texture sampling
        vec4 color = texture2D(u_image, distortedUV);

        // Soft liquid specular sheen highlight on wave crests
        float sheen = max(0.0, waveDisplacement * 18.0) * exp(-dist * 3.5);
        color.rgb += vec3(1.0, 0.95, 0.88) * sheen * u_hover;

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
    const directionLoc = gl.getUniformLocation(program, 'u_direction');
    const velocityLoc = gl.getUniformLocation(program, 'u_velocity');
    const timeLoc = gl.getUniformLocation(program, 'u_time');
    const hoverLoc = gl.getUniformLocation(program, 'u_hover');

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

      // Smooth mouse position interpolation (lags behind cursor for fluid feel)
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.08;

      // Smooth motion direction interpolation
      dirRef.current.x += (targetDirRef.current.x - dirRef.current.x) * 0.1;
      dirRef.current.y += (targetDirRef.current.y - dirRef.current.y) * 0.1;

      // Velocity decay with momentum
      velocityRef.current *= 0.94;

      // Hover interpolation
      const targetHover = isHoveredRef.current ? 1.0 : 0.0;
      hoverValue += (targetHover - hoverValue) * 0.05;

      if (imageLoaded) {
        gl.useProgram(program);
        gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
        gl.uniform2f(mouseLoc, mouseRef.current.x, mouseRef.current.y);
        gl.uniform2f(directionLoc, dirRef.current.x, dirRef.current.y);
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
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-85"
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
