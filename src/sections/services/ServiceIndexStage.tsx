import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface ServiceVideoItem {
  id: string;
  slug: string;
  indexNumber: string;
  title: string;
  shortDesc: string;
  videoSrc: string;
  posterSrc: string;
}

export const ServiceIndexStage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [prevIndex, setPrevIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Transition animation state refs
  const progressRef = useRef<number>(1.0);
  const animFrameRef = useRef<number | null>(null);
  const directionRef = useRef<number>(1.0); // +1.0 for forward (down), -1.0 for backward (up)
  const isTransitioningRef = useRef<boolean>(false);

  const servicesList: ServiceVideoItem[] = [
    {
      id: "car-wash-cleaning",
      slug: "car-wash-cleaning",
      indexNumber: "01",
      title: "CAR WASH & CLEANING",
      shortDesc: "Exterior and interior cleaning designed to maintain a clean, well-presented vehicle.",
      videoSrc: "/videos/services/car-wash.mp4",
      posterSrc: "/videos/services/car-wash-poster.jpg",
    },
    {
      id: "detailing-paint-care",
      slug: "detailing-paint-care",
      indexNumber: "02",
      title: "DETAILING & PAINT CARE",
      shortDesc: "Paint correction and detailing designed to restore gloss and surface clarity.",
      videoSrc: "/videos/services/detailing.mp4",
      posterSrc: "/videos/services/detailing-poster.jpg",
    },
    {
      id: "ceramic-coating",
      slug: "ceramic-coating",
      indexNumber: "03",
      title: "CERAMIC COATING",
      shortDesc: "Hydrophobic surface protection that enhances gloss and simplifies maintenance.",
      videoSrc: "/videos/services/ceramic-coating.mp4",
      posterSrc: "/videos/services/ceramic-coating-poster.jpg",
    },
    {
      id: "ppf-paint-protection",
      slug: "ppf-paint-protection",
      indexNumber: "04",
      title: "PPF & PAINT PROTECTION",
      shortDesc: "Physical paint protection against stone chips, scratches and road debris.",
      videoSrc: "/videos/services/ppf.mp4",
      posterSrc: "/videos/services/ppf-poster.jpg",
    },
    {
      id: "sun-control-films",
      slug: "sun-control-films",
      indexNumber: "05",
      title: "SUN-CONTROL FILMS",
      shortDesc: "Window films designed to reduce solar heat, glare and UV exposure.",
      videoSrc: "/videos/services/sun-control.mp4",
      posterSrc: "/videos/services/sun-control-poster.jpg",
    },
    {
      id: "car-accessories",
      slug: "car-accessories",
      indexNumber: "06",
      title: "CAR ACCESSORIES",
      shortDesc: "Practical interior and exterior upgrades selected for everyday use.",
      videoSrc: "/videos/services/accessories.mp4",
      posterSrc: "/videos/services/accessories-poster.jpg",
    },
  ];

  // Handle active service change & directional liquid trigger
  const handleServiceHover = (index: number) => {
    if (index === activeIndex) return;

    directionRef.current = index > activeIndex ? 1.0 : -1.0;
    setPrevIndex(activeIndex);
    setActiveIndex(index);
    progressRef.current = 0.0;
    isTransitioningRef.current = true;
  };

  // Play active video & pause all inactive videos whenever activeIndex changes
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;

      if (idx === activeIndex) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay safety fallback
          });
        }
      } else if (idx !== prevIndex) {
        video.pause();
      }
    });
  }, [activeIndex, prevIndex]);

  // WebGL Directional Liquid Displacement Shader Engine (Fixed Upright Orientation & Object-Fit Cover Math)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    if (!gl) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

    // FRAGMENT SHADER (Object-Fit Cover UV Transform + Directional Liquid Displacement)
    const fsSource = `
      precision mediump float;
      uniform sampler2D u_texPrev;
      uniform sampler2D u_texCurr;
      uniform float u_progress;
      uniform float u_direction;
      uniform float u_containerAspect;
      uniform float u_videoAspect;
      varying vec2 v_texCoord;

      vec2 coverUV(vec2 uv, float containerAspect, float videoAspect) {
        vec2 st = uv;
        if (containerAspect > videoAspect) {
          float scale = containerAspect / videoAspect;
          st.y = (st.y - 0.5) / scale + 0.5;
        } else {
          float scale = videoAspect / containerAspect;
          st.x = (st.x - 0.5) / scale + 0.5;
        }
        return st;
      }

      void main() {
        // Compute exact object-fit cover UV coordinates (Preserves natural 16:9 source video aspect ratio)
        vec2 st = coverUV(v_texCoord, u_containerAspect, u_videoAspect);

        if (st.x < 0.0 || st.x > 1.0 || st.y < 0.0 || st.y > 1.0) {
          discard;
        }

        if (u_progress >= 0.999) {
          gl_FragColor = texture2D(u_texCurr, st);
          return;
        }

        // Sinusoidal wave envelope
        float wavePhase = u_progress * 3.14159265;
        float waveDistortion = sin(wavePhase) * 0.035;

        // Fluid wave displacement along navigation direction
        float fluidWave = sin(st.y * 12.0 - u_progress * 7.0 * u_direction) * cos(st.x * 8.0) * waveDistortion;

        vec2 dirOffset = vec2(0.0, u_direction * waveDistortion * 0.5);
        vec2 uvPrev = clamp(st + dirOffset * (1.0 - u_progress) + vec2(0.0, fluidWave), 0.001, 0.999);
        vec2 uvCurr = clamp(st - dirOffset * u_progress + vec2(0.0, fluidWave * 0.5), 0.001, 0.999);

        vec4 colPrev = texture2D(u_texPrev, uvPrev);
        vec4 colCurr = texture2D(u_texCurr, uvCurr);

        float blendFactor = smoothstep(0.2, 0.8, u_progress);
        vec4 finalColor = mix(colPrev, colCurr, blendFactor);

        // Specular liquid sheen on fluid wave crests
        float sheen = max(0.0, fluidWave * 8.0) * sin(wavePhase);
        finalColor.rgb += vec3(1.0, 0.95, 0.88) * sheen;

        gl_FragColor = finalColor;
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
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    gl.useProgram(program);

    const positionLoc = gl.getAttribLocation(program, 'a_position');
    const texCoordLoc = gl.getAttribLocation(program, 'a_texCoord');
    const progressLoc = gl.getUniformLocation(program, 'u_progress');
    const directionLoc = gl.getUniformLocation(program, 'u_direction');
    const containerAspectLoc = gl.getUniformLocation(program, 'u_containerAspect');
    const videoAspectLoc = gl.getUniformLocation(program, 'u_videoAspect');
    const texPrevLoc = gl.getUniformLocation(program, 'u_texPrev');
    const texCurrLoc = gl.getUniformLocation(program, 'u_texCurr');

    // Standard Quad Positions (-1 to +1)
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1.0, -1.0,
         1.0, -1.0,
        -1.0,  1.0,
        -1.0,  1.0,
         1.0, -1.0,
         1.0,  1.0
      ]),
      gl.STATIC_DRAW
    );

    // Standard Texture Coordinates (Upright 0,0 Top-Left -> 1,1 Bottom-Right)
    const texCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        0.0, 1.0,
        1.0, 1.0,
        0.0, 0.0,
        0.0, 0.0,
        1.0, 1.0,
        1.0, 0.0
      ]),
      gl.STATIC_DRAW
    );

    const texPrev = gl.createTexture();
    const texCurr = gl.createTexture();

    function setupTexture(glCtx: WebGLRenderingContext, texture: WebGLTexture | null) {
      glCtx.bindTexture(glCtx.TEXTURE_2D, texture);
      glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_WRAP_S, glCtx.CLAMP_TO_EDGE);
      glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_WRAP_T, glCtx.CLAMP_TO_EDGE);
      glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_MIN_FILTER, glCtx.LINEAR);
      glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_MAG_FILTER, glCtx.LINEAR);
    }

    setupTexture(gl, texPrev);
    setupTexture(gl, texCurr);

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = (time - lastTime) / 1000.0;
      lastTime = time;

      if (isTransitioningRef.current && !isReducedMotion) {
        progressRef.current = Math.min(1.0, progressRef.current + dt * 1.25); // ~800ms duration
        if (progressRef.current >= 1.0) {
          isTransitioningRef.current = false;
        }
      } else {
        progressRef.current = 1.0;
      }

      const parent = canvas.parentElement;
      if (parent) {
        const width = parent.clientWidth;
        const height = parent.clientHeight;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const displayWidth = Math.floor(width * dpr);
        const displayHeight = Math.floor(height * dpr);

        if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
          canvas.width = displayWidth;
          canvas.height = displayHeight;
          gl.viewport(0, 0, displayWidth, displayHeight);
        }

        const containerAspect = width / (height || 1);
        const videoAspect = 16.0 / 9.0; // Source video aspect ratio (1920x1080 / 1280x720)

        if (!gl) return;

        gl.useProgram(program);
        gl.uniform1f(progressLoc, isReducedMotion ? 1.0 : progressRef.current);
        gl.uniform1f(directionLoc, directionRef.current);
        gl.uniform1f(containerAspectLoc, containerAspect);
        gl.uniform1f(videoAspectLoc, videoAspect);

        const prevVid = videoRefs.current[prevIndex];
        const currVid = videoRefs.current[activeIndex];

        // Bind outgoing video texture (UNPACK_FLIP_Y_WEBGL = true ensures upright video sampling)
        if (prevVid && prevVid.readyState >= 2) {
          gl.activeTexture(gl.TEXTURE0);
          gl.bindTexture(gl.TEXTURE_2D, texPrev);
          gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
          try {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, prevVid);
          } catch (e) {
            // Texture upload fallback
          }
          gl.uniform1i(texPrevLoc, 0);
        }

        // Bind incoming video texture
        if (currVid && currVid.readyState >= 2) {
          gl.activeTexture(gl.TEXTURE1);
          gl.bindTexture(gl.TEXTURE_2D, texCurr);
          gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
          try {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, currVid);
          } catch (e) {
            // Texture upload fallback
          }
          gl.uniform1i(texCurrLoc, 1);
        }

        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.enableVertexAttribArray(positionLoc);
        gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
        gl.enableVertexAttribArray(texCoordLoc);
        gl.vertexAttribPointer(texCoordLoc, 2, gl.FLOAT, false, 0, 0);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [activeIndex, prevIndex]);

  return (
    <section
      id="services-index"
      ref={sectionRef}
      className="w-full bg-[#fff8f6] text-[#111111] border-b border-[#D8D8D5] relative overflow-hidden"
    >
      {/* Subtle Grain Overlay (3% opacity for unified filmic feel) */}
      <div className="absolute inset-0 bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none z-0" />

      <div className="w-full max-w-[1920px] mx-auto relative z-10">
        
        {/* Full-Bleed 50/50 Layout Grid (Left ~45%, Right ~55%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-0">
          
          {/* LEFT SIDE: Service List Rail (5 Cols Desktop, text alignment & typography UNTOUCHED) */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-28 font-manrope">
            
            {/* Simple Restrained Heading */}
            <div className="mb-10 font-manrope">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#111111] mb-3">
                OUR SERVICES
              </h2>
              <div className="h-[2px] w-12 bg-[#FF4B00]" />
            </div>

            {/* Service Rows */}
            <div className="flex flex-col space-y-6 sm:space-y-8">
              {servicesList.map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => handleServiceHover(idx)}
                    className={`group border-b border-[#D8D8D5] pb-6 sm:pb-8 cursor-pointer transition-all duration-300 ${
                      isActive ? 'pl-2 sm:pl-4' : 'hover:pl-2'
                    }`}
                  >
                    {/* Row Header */}
                    <div className="flex items-baseline gap-4">
                      <span
                        className={`font-editorial text-3xl sm:text-4xl italic font-normal transition-colors duration-300 ${
                          isActive ? 'text-[#FF4B00]' : 'text-[#858585] group-hover:text-[#111111]'
                        }`}
                      >
                        {item.indexNumber}
                      </span>

                      <h3
                        className={`font-intertight font-extrabold tracking-tight uppercase leading-none transition-all duration-300 ${
                          isActive
                            ? 'text-3xl sm:text-4xl md:text-5xl text-[#111111] translate-x-1'
                            : 'text-xl sm:text-2xl text-[#858585] group-hover:text-[#111111]'
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* Active Service Content (Revealed ONLY when active) */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-out ${
                        isActive ? 'max-h-40 opacity-100 pt-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-sm sm:text-base text-[#858585] font-normal leading-relaxed max-w-md">
                        {item.shortDesc}
                      </p>

                      <div className="pt-4">
                        <Link
                          to={`/services/${item.slug}`}
                          className="inline-flex items-center gap-2 font-manrope font-bold text-xs sm:text-sm uppercase tracking-widest text-[#FF4B00] hover:text-[#111111] transition-colors"
                          aria-label={`Explore ${item.title} service page`}
                        >
                          <span>EXPLORE SERVICE</span>
                          <span className="text-base group-hover:translate-x-1 transition-transform">↗</span>
                        </Link>
                      </div>
                    </div>

                    {/* Mobile Inline Video Container (16:9 Landscape) */}
                    {isActive && (
                      <div className="lg:hidden pt-4">
                        <div className="aspect-[16/9] w-full overflow-hidden relative border border-[#D8D8D5] bg-[#050505]">
                          <video
                            src={item.videoSrc}
                            poster={item.posterSrc}
                            muted
                            loop
                            playsInline
                            autoPlay
                            className="w-full h-full object-cover block"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT SIDE: Full Edge-To-Edge 50% Video Panel (GPU-Accelerated Directional Liquid Displacement Shader Canvas) */}
          <div className="hidden lg:block lg:col-span-7 xl:col-span-7 relative h-full min-h-full">
            <div className="sticky top-20 h-[calc(100vh-5rem)] w-full overflow-hidden bg-[#050505] border-l border-[#D8D8D5] relative">
              
              {/* Hidden Video Elements (Source for WebGL Textures) */}
              <div className="absolute inset-0 opacity-0 pointer-events-none overflow-hidden">
                {servicesList.map((item, idx) => (
                  <video
                    key={item.id}
                    ref={(el) => (videoRefs.current[idx] = el)}
                    src={item.videoSrc}
                    poster={item.posterSrc}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover block"
                  />
                ))}
              </div>

              {/* WebGL Directional Liquid Displacement Canvas (Upright, Unstretched, 100% Fitted) */}
              <canvas
                ref={canvasRef}
                className="w-full h-full object-cover block absolute inset-0 z-10 pointer-events-none"
              />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
