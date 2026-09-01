import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 960;
const CACHE_WINDOW_SIZE = 25; // Preload window around current frame
const MAX_CACHE_SIZE = 60; // Max decoded image objects in memory
const SEQUENCE_END = 0.833333; // 500vh out of 600vh total height

const getFramePath = (index: number) => {
  const paddedIndex = String(index + 1).padStart(4, '0');
  return `/hero-sequence/frame-${paddedIndex}.webp`;
};

export const ScrollyHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Performance refs (NO React state for high-frequency updates)
  const targetFrameRef = useRef<number>(0);
  const renderedFrameRef = useRef<number>(0);
  const currentDrawIndexRef = useRef<number>(-1);
  const currentBucketRef = useRef<number>(-1);
  const stateIndexRef = useRef<number>(0);
  const progressPercentRef = useRef<number>(0);

  // Rolling Cache (Frame Index -> HTMLImageElement)
  const imageCacheRef = useRef<Map<number, HTMLImageElement>>(new Map());

  // Low-frequency UI state only
  const [activeStateIndex, setActiveStateIndex] = useState<number>(0);
  const [displayProgress, setDisplayProgress] = useState<number>(0);
  const [isFirstFrameLoaded, setIsFirstFrameLoaded] = useState<boolean>(false);

  // Single Frame Preloader with non-blocking decode
  const loadSingleFrame = useCallback((index: number): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      if (imageCacheRef.current.has(index)) {
        resolve(imageCacheRef.current.get(index)!);
        return;
      }

      const img = new Image();
      img.src = getFramePath(index);

      img.onload = () => {
        imageCacheRef.current.set(index, img);
        resolve(img);
      };
      img.onerror = (err) => reject(err);

      if ('decode' in img && typeof img.decode === 'function') {
        img
          .decode()
          .then(() => {
            imageCacheRef.current.set(index, img);
            resolve(img);
          })
          .catch(() => {
            // Fallback handled by onload
          });
      }
    });
  }, []);

  // Bucket-based cache manager
  const manageCacheBucket = useCallback(
    (centerIndex: number) => {
      const bucket = Math.floor(centerIndex / 15);
      if (bucket === currentBucketRef.current) return;
      currentBucketRef.current = bucket;

      const minIndex = Math.max(0, centerIndex - CACHE_WINDOW_SIZE);
      const maxIndex = Math.min(TOTAL_FRAMES - 1, centerIndex + CACHE_WINDOW_SIZE);

      // Preload target window
      for (let i = minIndex; i <= maxIndex; i++) {
        if (!imageCacheRef.current.has(i)) {
          loadSingleFrame(i).catch(() => {});
        }
      }

      // Purge distant images to keep cache bounded
      if (imageCacheRef.current.size > MAX_CACHE_SIZE) {
        for (const [key] of imageCacheRef.current.entries()) {
          if (key < centerIndex - CACHE_WINDOW_SIZE * 2 || key > centerIndex + CACHE_WINDOW_SIZE * 2) {
            imageCacheRef.current.delete(key);
          }
        }
      }
    },
    [loadSingleFrame]
  );

  // Full-Viewport Object-Fit: Cover Canvas Rendering
  const renderCanvasFrame = useCallback(
    (frameIdx: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let img = imageCacheRef.current.get(frameIdx);
      if (!img || !img.complete || img.naturalWidth === 0) {
        for (let offset = 1; offset <= 15; offset++) {
          const prev = imageCacheRef.current.get(frameIdx - offset);
          if (prev && prev.complete && prev.naturalWidth !== 0) {
            img = prev;
            break;
          }
          const next = imageCacheRef.current.get(frameIdx + offset);
          if (next && next.complete && next.naturalWidth !== 0) {
            img = next;
            break;
          }
        }
      }

      if (!img) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      if (canvas.width !== viewportWidth * dpr || canvas.height !== viewportHeight * dpr) {
        canvas.width = viewportWidth * dpr;
        canvas.height = viewportHeight * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, viewportWidth, viewportHeight);

      const imgWidth = img.naturalWidth || 1920;
      const imgHeight = img.naturalHeight || 1080;
      const scale = Math.max(viewportWidth / imgWidth, viewportHeight / imgHeight);

      const drawWidth = imgWidth * scale;
      const drawHeight = imgHeight * scale;
      const offsetX = (viewportWidth - drawWidth) / 2;
      const offsetY = (viewportHeight - drawHeight) / 2;

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      ctx.restore();
    },
    []
  );

  // Smooth RAF Render Loop
  useEffect(() => {
    let animFrameId: number;

    const renderLoop = () => {
      const diff = targetFrameRef.current - renderedFrameRef.current;
      if (Math.abs(diff) > 0.01) {
        renderedFrameRef.current += diff * 0.14;
        const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(renderedFrameRef.current)));

        if (frameIndex !== currentDrawIndexRef.current) {
          currentDrawIndexRef.current = frameIndex;
          renderCanvasFrame(frameIndex);
          manageCacheBucket(frameIndex);
        }
      }

      animFrameId = requestAnimationFrame(renderLoop);
    };

    animFrameId = requestAnimationFrame(renderLoop);
    return () => cancelAnimationFrame(animFrameId);
  }, [renderCanvasFrame, manageCacheBucket]);

  // Initial Load Strategy
  useEffect(() => {
    let isMounted = true;

    loadSingleFrame(0)
      .then(() => {
        if (!isMounted) return;
        setIsFirstFrameLoaded(true);
        renderCanvasFrame(0);
        manageCacheBucket(0);
      })
      .catch(() => {});

    return () => {
      isMounted = false;
    };
  }, [loadSingleFrame, renderCanvasFrame, manageCacheBucket]);

  // Resize Handler
  useEffect(() => {
    const handleResize = () => {
      renderCanvasFrame(currentDrawIndexRef.current >= 0 ? currentDrawIndexRef.current : 0);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [renderCanvasFrame]);

  // GSAP ScrollTrigger Setup
  useEffect(() => {
    if (!containerRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.1,
        onUpdate: (self) => {
          const progress = self.progress;

          const cameraProgress = Math.min(1, progress / SEQUENCE_END);
          targetFrameRef.current = cameraProgress * (TOTAL_FRAMES - 1);

          let newState = 0;
          if (progress < 0.166) newState = 0;
          else if (progress < 0.333) newState = 1;
          else if (progress < 0.50) newState = 2;
          else if (progress < 0.666) newState = 3;
          else if (progress < 0.833) newState = 4;
          else newState = 5;

          if (newState !== stateIndexRef.current) {
            stateIndexRef.current = newState;
            setActiveStateIndex(newState);
          }

          const pct = Math.round(progress * 100);
          if (pct !== progressPercentRef.current) {
            progressPercentRef.current = pct;
            setDisplayProgress(pct);
          }

          if (stickyRef.current) {
            if (progress > SEQUENCE_END) {
              const exitProgress = (progress - SEQUENCE_END) / (1 - SEQUENCE_END);
              const scale = 1 - exitProgress * 0.04;
              const opacity = 1 - exitProgress * 0.35;
              stickyRef.current.style.transform = `scale(${scale})`;
              stickyRef.current.style.opacity = `${opacity}`;
            } else {
              stickyRef.current.style.transform = 'scale(1)';
              stickyRef.current.style.opacity = '1';
            }
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[600vh] bg-tmr-black selection:bg-tmr-orange selection:text-white z-10"
    >
      {/* FULL-VIEWPORT STICKY CONTAINER */}
      <div
        ref={stickyRef}
        className="sticky top-0 left-0 w-full h-screen min-h-screen overflow-hidden flex flex-col justify-between transition-transform duration-100 ease-out origin-center"
      >
        {/* FULL-VIEWPORT CANVAS LAYER */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        />

        {/* CONTROLLABLE ATMOSPHERIC GRADIENT (Preserves vehicle paint reflections) */}
        <div className="absolute inset-0 bg-gradient-to-t from-tmr-black/70 via-tmr-black/20 to-transparent pointer-events-none z-[1]" />

        {/* MINIMAL INITIAL LOAD PLACEHOLDER */}
        {!isFirstFrameLoaded && (
          <div className="absolute inset-0 z-50 bg-tmr-black flex items-center justify-center font-intertight">
            <div className="flex items-center gap-2 font-bold text-white tracking-widest text-xs uppercase">
              <span>TMR AI CAR CARE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-tmr-orange animate-ping" />
            </div>
          </div>
        )}

        {/* CINEMATIC SPATIAL EDITORIAL OVERLAY (FRAME-AWARE POSITIONS) */}
        <div className="relative z-10 w-full h-full pointer-events-none">
          
          {/* STATE 01 — SURFACE (BOTTOM-LEFT / LOWER-LEFT ANCHOR: left 8vw, top 44vh) */}
          <div
            className={`absolute left-[6vw] lg:left-[8vw] top-[40vh] md:top-[44vh] w-[88vw] max-w-xl transition-all duration-500 ease-out ${
              activeStateIndex === 0
                ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto z-20'
                : 'opacity-0 -translate-y-4 scale-[0.98] pointer-events-none z-0'
            }`}
          >
            <h1 className="font-intertight font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[84px] text-white uppercase leading-[0.94] tracking-[-0.045em] mb-4">
              THE ART OF CAR CARE.
            </h1>
            <p className="font-editorial text-lg sm:text-2xl text-white/85 italic mb-6 leading-tight">
              Precision begins with the surface.
            </p>
            <div>
              <Link
                to="/services"
                aria-label="Explore TMR AI Car Care detailing services in Tiruppur"
                className="group inline-flex flex-col gap-1 text-xs font-intertight font-extrabold uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors"
              >
                <span className="inline-flex items-center gap-1.5">
                  <span>EXPLORE SERVICES</span>
                  <span className="text-[#FF4B00] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">↗</span>
                </span>
                <span className="h-[1.5px] w-12 group-hover:w-full bg-[#FF4B00] transition-all duration-300" />
              </Link>
            </div>
          </div>

          {/* STATE 02 — REVEAL (TOP-LEFT / UPPER THIRD: left 8vw, top 22vh) */}
          <div
            className={`absolute left-[6vw] lg:left-[8vw] top-[18vh] md:top-[22vh] w-[88vw] max-w-lg transition-all duration-500 ease-out ${
              activeStateIndex === 1
                ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto z-20'
                : 'opacity-0 -translate-y-4 scale-[0.98] pointer-events-none z-0'
            }`}
          >
            <h2 className="font-intertight font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase leading-[0.94] tracking-[-0.045em] mb-3">
              EVERY SURFACE MATTERS.
            </h2>
            <p className="font-editorial text-lg sm:text-2xl text-white/85 italic leading-tight">
              Paint. Reflection. Finish.
            </p>
          </div>

          {/* STATE 03 — APPROACH (RIGHT SIDE / MID-LOW: right 8vw, top 48vh) */}
          <div
            className={`absolute right-[6vw] lg:right-[8vw] top-[44vh] md:top-[48vh] w-[88vw] max-w-md text-left transition-all duration-500 ease-out ${
              activeStateIndex === 2
                ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto z-20'
                : 'opacity-0 -translate-y-4 scale-[0.98] pointer-events-none z-0'
            }`}
          >
            <h2 className="font-intertight font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase leading-[0.94] tracking-[-0.045em] mb-3">
              PRECISION IN MOTION.
            </h2>
            <p className="font-editorial text-lg sm:text-2xl text-white/85 italic leading-tight">
              Measured work. Controlled finish.
            </p>
          </div>

          {/* STATE 04 — CRAFT (UPPER-RIGHT CAPTION: right 8vw, top 20vh) */}
          <div
            className={`absolute right-[6vw] lg:right-[8vw] top-[16vh] md:top-[20vh] w-[88vw] max-w-md text-left transition-all duration-500 ease-out ${
              activeStateIndex === 3
                ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto z-20'
                : 'opacity-0 -translate-y-4 scale-[0.98] pointer-events-none z-0'
            }`}
          >
            <h2 className="font-intertight font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase leading-[0.94] tracking-[-0.045em] mb-3">
              CRAFT, NOT COMMERCE.
            </h2>
            <p className="font-editorial text-lg sm:text-2xl text-white/85 italic leading-tight">
              Every pass is intentional.
            </p>
          </div>

          {/* STATE 05 — FINISH (EDITORIAL BOOKEND: LOWER-LEFT ANCHOR MATCHING STATE 01) */}
          <div
            className={`absolute left-[6vw] lg:left-[8vw] top-[40vh] md:top-[44vh] w-[88vw] max-w-xl transition-all duration-500 ease-out ${
              activeStateIndex === 4
                ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto z-20'
                : 'opacity-0 -translate-y-4 scale-[0.98] pointer-events-none z-0'
            }`}
          >
            <h2 className="font-intertight font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[80px] text-white uppercase leading-[0.94] tracking-[-0.045em] mb-4">
              FINISHED WITH INTENT.
            </h2>
            <p className="font-editorial text-lg sm:text-2xl text-white/85 italic mb-6 leading-tight">
              The final surface is the standard.
            </p>
            <div>
              <Link
                to="/services"
                aria-label="Book a car detailing consultation at TMR Tiruppur"
                className="group inline-flex flex-col gap-1 text-xs font-intertight font-extrabold uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors"
              >
                <span className="inline-flex items-center gap-1.5">
                  <span>BOOK YOUR DETAIL</span>
                  <span className="text-[#FF4B00] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">↗</span>
                </span>
                <span className="h-[1.5px] w-12 group-hover:w-full bg-[#FF4B00] transition-all duration-300" />
              </Link>
            </div>
          </div>

        </div>

        {/* MINIMAL SUBTLE BOTTOM INDICATOR & INITIAL SCROLL CUE */}
        <div className="relative z-10 pb-8 px-6 md:px-12 flex items-end justify-between font-intertight pointer-events-none">
          {/* Scroll Cue (Fades out when scrolling begins) */}
          <div
            className={`flex items-center gap-2.5 transition-opacity duration-500 ${
              displayProgress > 2 ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/70">SCROLL</span>
            <span className="text-[#FF4B00] text-xs font-bold animate-bounce">↓</span>
          </div>

          {/* Minimal Phase Indicator */}
          <div className="flex items-center gap-3 text-xs font-bold text-white/60 tracking-widest uppercase">
            <span className="text-[#FF4B00]">0{Math.min(5, activeStateIndex + 1)}</span>
            <span className="w-6 h-[1.5px] bg-[#FF4B00]/60 inline-block" />
            <span>05</span>
          </div>
        </div>
      </div>
    </section>
  );
};
