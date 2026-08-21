import React, { useEffect, useRef, useState } from 'react';

interface PpfInteractiveSurfaceProps {
  imageSrc: string;
  altText: string;
}

export const PpfInteractiveSurface: React.FC<PpfInteractiveSurfaceProps> = ({
  imageSrc,
  altText,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Motion refs for high 60fps performance without React state re-renders
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0.5, y: 0.5 });
  const targetMouseRef = useRef<{ x: number; y: number }>({ x: 0.5, y: 0.5 });
  const velocityRef = useRef<number>(0);
  const lastMouseRef = useRef<{ x: number; y: number; time: number }>({ x: 0.5, y: 0.5, time: 0 });

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

    // 1. VERTEX SHADER
    const vsSource = `
      attribute vec2 a_position;
      attribute vec2 a_texCoord;
      varying vec2 v_texCoord;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        v_texCoord = a_texCoord;
      }
    `;

    // 2. FRAGMENT SHADER (LIQUID PPF REFRACTION & SPECULAR REFLECTION SHADER)
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
        
        // Correct aspect ratio distortion
        vec2 aspectUV = uv;
        aspectUV.x *= (u_resolution.x / u_resolution.y);
        vec2 aspectMouse = u_mouse;
        aspectMouse.x *= (u_resolution.x / u_resolution.y);

        // Distance from cursor
        float dist = distance(aspectUV, aspectMouse);

        // PPF Liquid Ripple Refraction
        float ripple = sin(dist * 38.0 - u_time * 4.5) * exp(-dist * 6.5) * (0.012 + u_velocity * 0.035) * u_hover;
        
        // Distorted UV
        vec2 dir = normalize(aspectUV - aspectMouse + vec2(0.0001));
        vec2 distortedUV = uv + dir * ripple;
        distortedUV = clamp(distortedUV, 0.0, 1.0);

        // Sample base PPF campaign image
        vec4 color = texture2D(u_image, distortedUV);

        // Specular light highlight along transparent PPF film reflection
        float specular = exp(-dist * 12.0) * (0.15 + u_velocity * 0.4) * u_hover;
        vec3 specularColor = vec3(1.0, 0.97, 0.94) * specular;

        // Subtle clear-coat depth gradient
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

    // Look up uniforms & attributes
    const positionLoc = gl.getAttribLocation(program, 'a_position');
    const texCoordLoc = gl.getAttribLocation(program, 'a_texCoord');
    const resolutionLoc = gl.getUniformLocation(program, 'u_resolution');
    const mouseLoc = gl.getUniformLocation(program, 'u_mouse');
    const velocityLoc = gl.getUniformLocation(program, 'u_velocity');
    const timeLoc = gl.getUniformLocation(program, 'u_time');
    const hoverLoc = gl.getUniformLocation(program, 'u_hover');

    // Create quad geometry
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

    // Load Texture
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
      if (containerRef.current && canvas) {
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
          gl.viewport(0, 0, width, height);
        }
      }

      // Smooth Lerp Mouse Positions
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.08;

      // Velocity Decay
      velocityRef.current *= 0.94;

      // Hover Fade
      const targetHover = isHovered ? 1.0 : 0.0;
      hoverValue += (targetHover - hoverValue) * 0.06;

      if (imageLoaded) {
        gl.useProgram(program);

        gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
        gl.uniform2f(mouseLoc, mouseRef.current.x, mouseRef.current.y);
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

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    targetMouseRef.current = { x, y };

    const now = performance.now();
    const dt = Math.max(1, now - lastMouseRef.current.time);
    const dx = x - lastMouseRef.current.x;
    const dy = y - lastMouseRef.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const speed = dist / dt;

    velocityRef.current = Math.min(1.0, velocityRef.current + speed * 12.0);
    lastMouseRef.current = { x, y, time: now };
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[320px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.8)] group cursor-crosshair bg-black"
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onPointerMove={handlePointerMove}
    >
      {webglSupported ? (
        <canvas ref={canvasRef} className="w-full h-full object-cover block" />
      ) : (
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}

      {/* FALLBACK IMG FOR SEARCH ENGINES & NO-JS */}
      <noscript>
        <img src={imageSrc} alt={altText} className="w-full h-full object-cover" />
      </noscript>

      {/* REFINED GLASSMORPHIC PPF MATERIAL INDICATOR BADGE */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none font-intertight z-20">
        <div className="flex items-center gap-2.5 bg-black/85 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-white border border-white/15 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-[#FF4B00] animate-pulse" />
          <span>INTERACTIVE PPF SURFACE // REFRACTION ACTIVE</span>
        </div>

        <span className="text-[#FF4B00] text-[10px] font-extrabold tracking-widest hidden sm:inline-block">
          HOVER SURFACE TO DISTORT REFLECTION
        </span>
      </div>
    </div>
  );
};
