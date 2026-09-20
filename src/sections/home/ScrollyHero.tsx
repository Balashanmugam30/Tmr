import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 960;
const CACHE_FORWARD_WINDOW = 18; // Preload forward window
const CACHE_BACKWARD_WINDOW = 4; // Minimal backward window
const MAX_CACHE_SIZE = 65; // Max decoded image objects in memory
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
  const isVisibleRef = useRef<boolean>(true);
  const isLoopRunningRef = useRef<boolean>(false);
  const hasScrolledRef = useRef<boolean>(false);
  const scrollDirectionRef = useRef<number>(1);
  const dimensionsRef = useRef<{ width: number; height: number; dpr: number }>({ width: 0, height: 0, dpr: 1 });

  // Rolling Cache & in-flight fetch deduplication
  const imageCacheRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const inFlightFetchesRef = useRef<Map<number, Promise<HTMLImageElement>>>(new Map());

  // Low-frequency UI state only
  const [activeStateIndex, setActiveStateIndex] = useState<number>(0);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [isFirstFrameLoaded, setIsFirstFrameLoaded] = useState<boolean>(false);

  // Single Frame Preloader with in-flight deduplication and non-blocking decode
  const loadSingleFrame = useCallback((index: number): Promise<HTMLImageElement> => {
    if (imageCacheRef.current.has(index)) {
      return Promise.resolve(imageCacheRef.current.get(index)!);
    }

    if (inFlightFetchesRef.current.has(index)) {
      return inFlightFetchesRef.current.get(index)!;
    }

    const promise = new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.src = getFramePath(index);

      img.onload = () => {
        imageCacheRef.current.set(index, img);
        inFlightFetchesRef.current.delete(index);
        resolve(img);
      };

      img.onerror = (err) => {
        inFlightFetchesRef.current.delete(index);
        reject(err);
      };

      if ('decode' in img && typeof img.decode === 'function') {
        img
          .decode()
          .then(() => {
            imageCacheRef.current.set(index, img);
            inFlightFetchesRef.current.delete(index);
            resolve(img);
          })
          .catch(() => {
            // Fallback handled by onload
          });
      }
    });

    inFlightFetchesRef.current.set(index, promise);
    return promise;
  }, []);

  // Direction-aware, throttled cache manager
  const manageCacheBucket = useCallback(
    (centerIndex: number) => {
      const bucket = Math.floor(centerIndex / 12);
      if (bucket === currentBucketRef.current) return;
      currentBucketRef.current = bucket;

      const direction = scrollDirectionRef.current;
      const minIndex = Math.max(0, centerIndex - (direction >= 0 ? CACHE_BACKWARD_WINDOW : CACHE_FORWARD_WINDOW));
      const maxIndex = Math.min(TOTAL_FRAMES - 1, centerIndex + (direction >= 0 ? CACHE_FORWARD_WINDOW : CACHE_BACKWARD_WINDOW));

      // Limit concurrent active fetches to prevent network starvation
      let activeCount = inFlightFetchesRef.current.size;
      for (let i = centerIndex; i <= maxIndex && activeCount < 6; i++) {
        if (!imageCacheRef.current.has(i) && !inFlightFetchesRef.current.has(i)) {
          activeCount++;
          loadSingleFrame(i).catch(() => {});
        }
      }
      for (let i = centerIndex - 1; i >= minIndex && activeCount < 6; i--) {
        if (!imageCacheRef.current.has(i) && !inFlightFetchesRef.current.has(i)) {
          activeCount++;
          loadSingleFrame(i).catch(() => {});
        }
      }

      // Purge distant images to keep memory bounded
      if (imageCacheRef.current.size > MAX_CACHE_SIZE) {
        for (const [key] of imageCacheRef.current.entries()) {
          if (key < centerIndex - CACHE_FORWARD_WINDOW * 2 || key > centerIndex + CACHE_FORWARD_WINDOW * 2) {
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
        // Fast search for closest available decoded frame
        for (let offset = 1; offset <= 20; offset++) {
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

      let { width, height, dpr } = dimensionsRef.current;
      if (width === 0 || height === 0) {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = window.innerWidth;
        height = window.innerHeight;
        dimensionsRef.current = { width, height, dpr };
      }

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const imgWidth = img.naturalWidth || 1920;
      const imgHeight = img.naturalHeight || 1080;
      const scale = Math.max(width / imgWidth, height / imgHeight);

      const drawWidth = imgWidth * scale;
      const drawHeight = imgHeight * scale;
      const offsetX = (width - drawWidth) / 2;
      const offsetY = (height - drawHeight) / 2;

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      ctx.restore();
    },
    []
  );

  // Smooth RAF Render Loop with IntersectionObserver pause/resume
  useEffect(() => {
    let animFrameId: number;

    const renderLoop = () => {
      if (!isVisibleRef.current) {
        isLoopRunningRef.current = false;
        return;
      }

      isLoopRunningRef.current = true;
      const diff = targetFrameRef.current - renderedFrameRef.current;
      const absDiff = Math.abs(diff);

      if (absDiff > 0.01) {
        // Dynamic lerp: catches up faster during rapid swipes to eliminate lag/stalls
        const lerpRate = absDiff > 50 ? 0.32 : absDiff > 15 ? 0.22 : 0.14;
        renderedFrameRef.current += diff * lerpRate;
        const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(renderedFrameRef.current)));

        if (frameIndex !== currentDrawIndexRef.current) {
          currentDrawIndexRef.current = frameIndex;
          renderCanvasFrame(frameIndex);
          manageCacheBucket(frameIndex);
        }
      }

      animFrameId = requestAnimationFrame(renderLoop);
    };

    // IntersectionObserver to pause the loop when offscreen and resume when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
          if (entry.isIntersecting && !isLoopRunningRef.current) {
            animFrameId = requestAnimationFrame(renderLoop);
          }
        });
      },
      { threshold: 0.01 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    animFrameId = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(animFrameId);
      observer.disconnect();
    };
  }, [renderCanvasFrame, manageCacheBucket]);

  // Initial Load Strategy: Prioritize Frame 0 immediately
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

  // Resize Handler: Updates cached dimensions
  useEffect(() => {
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      dimensionsRef.current = {
        width: window.innerWidth,
        height: window.innerHeight,
        dpr,
      };
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

    let prevProgress = 0;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.1,
        onUpdate: (self) => {
          const progress = self.progress;
          scrollDirectionRef.current = progress >= prevProgress ? 1 : -1;
          prevProgress = progress;

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

          // Single boolean state update for scroll cue instead of 100 percentage updates
          if (!hasScrolledRef.current && progress > 0.02) {
            hasScrolledRef.current = true;
            setHasScrolled(true);
          } else if (hasScrolledRef.current && progress <= 0.01) {
            hasScrolledRef.current = false;
            setHasScrolled(false);
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
            className={`absolute left-[6vw] lg:left-[8vw] top-[28vh] sm:top-[36vh] md:top-[44vh] w-[88vw] max-w-[calc(100vw-3rem)] sm:max-w-xl transition-all duration-500 ease-out ${
              activeStateIndex === 0
                ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto z-20'
                : 'opacity-0 -translate-y-4 scale-[0.98] pointer-events-none z-0'
            }`}
          >
            <h1 className="font-intertight font-extrabold text-3xl sm:text-5xl md:text-7xl lg:text-[84px] text-white uppercase leading-[0.94] tracking-[-0.045em] mb-4">
              THE ART OF CAR CARE.
            </h1>
            <p className="font-editorial text-base sm:text-xl md:text-2xl text-white/85 italic mb-6 leading-tight">
              Precision begins with the surface.
            </p>
            <div>
              <Link
                to="/services"
                aria-label="Explore TMR AI Car Care detailing services in Tiruppur"
                className="group inline-flex flex-col gap-1 text-xs font-intertight font-extrabold uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors py-2 min-h-[44px] justify-center"
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
            className={`absolute left-[6vw] lg:left-[8vw] top-[16vh] md:top-[22vh] w-[88vw] max-w-[calc(100vw-3rem)] sm:max-w-lg transition-all duration-500 ease-out ${
              activeStateIndex === 1
                ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto z-20'
                : 'opacity-0 -translate-y-4 scale-[0.98] pointer-events-none z-0'
            }`}
          >
            <h2 className="font-intertight font-extrabold text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-white uppercase leading-[0.94] tracking-[-0.045em] mb-3">
              EVERY SURFACE MATTERS.
            </h2>
            <p className="font-editorial text-base sm:text-xl md:text-2xl text-white/85 italic leading-tight">
              Paint. Reflection. Finish.
            </p>
          </div>

          {/* STATE 03 — APPROACH (RIGHT SIDE / MID-LOW: right 8vw, top 48vh) */}
          <div
            className={`absolute right-[6vw] lg:right-[8vw] top-[32vh] sm:top-[40vh] md:top-[48vh] w-[88vw] max-w-[calc(100vw-3rem)] sm:max-w-md text-left transition-all duration-500 ease-out ${
              activeStateIndex === 2
                ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto z-20'
                : 'opacity-0 -translate-y-4 scale-[0.98] pointer-events-none z-0'
            }`}
          >
            <h2 className="font-intertight font-extrabold text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-white uppercase leading-[0.94] tracking-[-0.045em] mb-3">
              PRECISION IN MOTION.
            </h2>
            <p className="font-editorial text-base sm:text-xl md:text-2xl text-white/85 italic leading-tight">
              Measured work. Controlled finish.
            </p>
          </div>

          {/* STATE 04 — CRAFT (UPPER-RIGHT CAPTION: right 8vw, top 20vh) */}
          <div
            className={`absolute right-[6vw] lg:right-[8vw] top-[16vh] md:top-[20vh] w-[88vw] max-w-[calc(100vw-3rem)] sm:max-w-md text-left transition-all duration-500 ease-out ${
              activeStateIndex === 3
                ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto z-20'
                : 'opacity-0 -translate-y-4 scale-[0.98] pointer-events-none z-0'
            }`}
          >
            <h2 className="font-intertight font-extrabold text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-white uppercase leading-[0.94] tracking-[-0.045em] mb-3">
              CRAFT, NOT COMMERCE.
            </h2>
            <p className="font-editorial text-base sm:text-xl md:text-2xl text-white/85 italic leading-tight">
              Every pass is intentional.
            </p>
          </div>

          {/* STATE 05 — FINISH (EDITORIAL BOOKEND: LOWER-LEFT ANCHOR MATCHING STATE 01) */}
          <div
            className={`absolute left-[6vw] lg:left-[8vw] top-[28vh] sm:top-[36vh] md:top-[44vh] w-[88vw] max-w-[calc(100vw-3rem)] sm:max-w-xl transition-all duration-500 ease-out ${
              activeStateIndex === 4
                ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto z-20'
                : 'opacity-0 -translate-y-4 scale-[0.98] pointer-events-none z-0'
            }`}
          >
            <h2 className="font-intertight font-extrabold text-3xl sm:text-5xl md:text-7xl lg:text-[80px] text-white uppercase leading-[0.94] tracking-[-0.045em] mb-4">
              FINISHED WITH INTENT.
            </h2>
            <p className="font-editorial text-base sm:text-xl md:text-2xl text-white/85 italic mb-6 leading-tight">
              The final surface is the standard.
            </p>
            <div>
              <Link
                to="/services"
                aria-label="Book a car detailing consultation at TMR Tiruppur"
                className="group inline-flex flex-col gap-1 text-xs font-intertight font-extrabold uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors py-2 min-h-[44px] justify-center"
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
              hasScrolled ? 'opacity-0' : 'opacity-100'
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
