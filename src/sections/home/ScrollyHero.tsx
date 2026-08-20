import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/Button';
import { companyData } from '@/data/company';

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

  const whatsappUrl = `https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent(
    'Hello TMR Car Care! I would like to book a detailing or consultation slot.'
  )}`;

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

  // Bucket-based cache manager (only runs when targetFrame crosses into a new bucket)
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

      // Fast bounded fallback search for preloaded frame
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

      // Device Pixel Ratio & Canvas Sizing
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

      // Object-fit: cover logic
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

  // Smooth RAF Render Loop (Interpolates renderedFrame -> targetFrame)
  useEffect(() => {
    let animFrameId: number;

    const renderLoop = () => {
      // Small smoothing interpolation (~80ms visual damping)
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

  // Initial Load Strategy: Load frame 1 immediately, then trigger initial render
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

  // GSAP ScrollTrigger Setup (Decoupled from high-frequency React rerenders)
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
          const progress = self.progress; // 0 to 1

          // Map frame sequence to 0 -> 0.833333 progress (first 500vh); hold final frame 959 for 0.833333 -> 1.0 (final 100vh transition)
          const cameraProgress = Math.min(1, progress / SEQUENCE_END);
          targetFrameRef.current = cameraProgress * (TOTAL_FRAMES - 1);

          // Update low-frequency UI state for active visual phase
          let newState = 0;
          if (progress < 0.166) newState = 0;
          else if (progress < 0.333) newState = 1;
          else if (progress < 0.50) newState = 2;
          else if (progress < 0.666) newState = 3;
          else if (progress < 0.833) newState = 4;
          else newState = 5; // Exit phase (83.33% to 100%)

          if (newState !== stateIndexRef.current) {
            stateIndexRef.current = newState;
            setActiveStateIndex(newState);
          }

          // Progress Percentage update
          const pct = Math.round(progress * 100);
          if (pct !== progressPercentRef.current) {
            progressPercentRef.current = pct;
            setDisplayProgress(pct);
          }

          // Hero Exit Choreography (Final 100vh transition: 83.33% -> 100%)
          if (stickyRef.current) {
            if (progress > SEQUENCE_END) {
              const exitProgress = (progress - SEQUENCE_END) / (1 - SEQUENCE_END);
              const scale = 1 - exitProgress * 0.04; // 1 -> 0.96
              const opacity = 1 - exitProgress * 0.35; // 1 -> 0.65
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
      {/* FULL-VIEWPORT STICKY CONTAINER (Pins throughout 600vh) */}
      <div
        ref={stickyRef}
        className="sticky top-0 left-0 w-full h-screen min-h-screen overflow-hidden flex flex-col justify-between transition-transform duration-100 ease-out origin-center"
      >
        {/* FULL-VIEWPORT CANVAS LAYER */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        />

        {/* LIGHTER ATMOSPHERIC GRADIENT (Vehicle graphite paint & reflections clearly visible) */}
        <div className="absolute inset-0 bg-gradient-to-t from-tmr-black/80 via-transparent to-tmr-black/40 pointer-events-none z-[1]" />

        {/* MINIMAL INITIAL LOAD PLACEHOLDER */}
        {!isFirstFrameLoaded && (
          <div className="absolute inset-0 z-50 bg-tmr-black flex items-center justify-center font-manrope">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 font-black text-white tracking-widest text-xs uppercase">
                <span>TMR CAR CARE</span>
                <span className="w-2 h-2 rounded-full bg-tmr-orange animate-ping" />
              </div>
            </div>
          </div>
        )}

        {/* REFINED EDITORIAL TYPOGRAPHY OVERLAY (5 STRICT STATES ON A 12-COLUMN GRID) */}
        <div className="relative z-10 px-6 md:px-12 max-w-[1360px] mx-auto w-full flex-grow flex items-center pt-16">
          {/* STATE 01 — SURFACE (0% - 16.6%) */}
          <div
            className={`w-full max-w-3xl transition-all duration-500 ease-out ${
              activeStateIndex === 0
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-4 pointer-events-none absolute'
            }`}
          >
            <span className="font-manrope font-extrabold text-xs text-tmr-orange uppercase tracking-[0.3em] mb-4 block">
              01 / SURFACE
            </span>
            <h1 className="font-manrope font-black text-5xl sm:text-7xl md:text-8xl lg:text-[100px] text-white uppercase leading-[0.88] tracking-tighter mb-6">
              THE ART
              <br />
              <span className="text-tmr-orange">/</span> OF CAR CARE
            </h1>
            <p className="font-editorial text-xl sm:text-2xl text-white/80 italic mb-8 max-w-lg">
              PRECISION BEGINS WITH THE SURFACE.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="accent" size="md" href="/services">
                EXPLORE SERVICES →
              </Button>
              <Button variant="outline" size="md" href="/contact">
                VISIT WORKSHOP →
              </Button>
            </div>
          </div>

          {/* STATE 02 — REVEAL (16.6% - 33.3%) */}
          <div
            className={`w-full max-w-2xl transition-all duration-500 ease-out ${
              activeStateIndex === 1
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-4 pointer-events-none absolute'
            }`}
          >
            <span className="font-manrope font-extrabold text-xs text-tmr-orange uppercase tracking-[0.3em] mb-4 block">
              02 / REVEAL
            </span>
            <h2 className="font-manrope font-black text-4xl sm:text-6xl md:text-7xl text-white uppercase leading-[0.9] tracking-tighter mb-4">
              EVERY SURFACE
              <br />
              MATTERS.
            </h2>
            <p className="font-editorial text-xl sm:text-2xl text-white/80 italic max-w-md">
              LIGHT, PAINT AND REFLECTION TELL THE STORY.
            </p>
          </div>

          {/* STATE 03 — APPROACH (33.3% - 50%) */}
          <div
            className={`w-full max-w-2xl ml-auto text-right transition-all duration-500 ease-out ${
              activeStateIndex === 2
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-4 pointer-events-none absolute'
            }`}
          >
            <span className="font-manrope font-extrabold text-xs text-tmr-orange uppercase tracking-[0.3em] mb-4 block">
              03 / APPROACH
            </span>
            <h2 className="font-manrope font-black text-4xl sm:text-6xl md:text-7xl text-white uppercase leading-[0.9] tracking-tighter mb-4">
              PRECISION
              <br />
              IN MOTION.
            </h2>
            <p className="font-editorial text-xl sm:text-2xl text-white/80 italic ml-auto max-w-md">
              EVERY PASS IS CONTROLLED. EVERY DETAIL IS INTENTIONAL.
            </p>
          </div>

          {/* STATE 04 — CRAFT (50% - 66.6%) */}
          <div
            className={`w-full max-w-2xl transition-all duration-500 ease-out ${
              activeStateIndex === 3
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-4 pointer-events-none absolute'
            }`}
          >
            <span className="font-manrope font-extrabold text-xs text-tmr-orange uppercase tracking-[0.3em] mb-4 block">
              04 / CRAFT
            </span>
            <h2 className="font-manrope font-black text-4xl sm:text-6xl md:text-7xl text-white uppercase leading-[0.9] tracking-tighter mb-4">
              CRAFT,
              <br />
              NOT COMMERCE.
            </h2>
            <p className="font-editorial text-xl sm:text-2xl text-white/80 italic max-w-md">
              CONTROLLED TOOLS. CONTROLLED MOTION. A FINISH BUILT BY HAND.
            </p>
          </div>

          {/* STATE 05 — FINISH (66.6% - 83.3%) */}
          <div
            className={`w-full max-w-3xl transition-all duration-500 ease-out ${
              activeStateIndex === 4
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-4 pointer-events-none absolute'
            }`}
          >
            <span className="font-manrope font-extrabold text-xs text-tmr-orange uppercase tracking-[0.3em] mb-4 block">
              05 / FINISH
            </span>
            <h2 className="font-manrope font-black text-5xl sm:text-7xl md:text-8xl text-white uppercase leading-[0.9] tracking-tighter mb-6">
              FINISHED
              <br />
              WITH INTENT.
            </h2>
            <p className="font-editorial text-xl sm:text-2xl text-white/80 italic mb-8 max-w-md">
              TMR CAR CARE — TIRUPPUR
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="accent" size="md" href="/services">
                BOOK SERVICES →
              </Button>
              <Button variant="outline" size="md" href={whatsappUrl} target="_blank">
                WHATSAPP US →
              </Button>
            </div>
          </div>
        </div>

        {/* SUBTLE BOTTOM PROGRESS INDICATOR & INITIAL SCROLL CUE */}
        <div className="relative z-10 pb-8 px-6 md:px-12 flex items-end justify-between font-manrope pointer-events-none">
          {/* Scroll Cue (Fades out when scrolling begins) */}
          <div
            className={`flex items-center gap-3 transition-opacity duration-500 ${
              displayProgress > 3 ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-white/70">SCROLL</span>
            <div className="w-px h-10 bg-white/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-tmr-orange animate-pulse" />
            </div>
          </div>

          {/* Minimal Editorial State Pill */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-20 h-1 bg-white/20 rounded-full overflow-hidden">
                <div
                  style={{ width: `${displayProgress}%` }}
                  className="h-full bg-tmr-orange transition-all duration-75"
                />
              </div>
            </div>

            <div className="bg-[#0F0F0F]/80 backdrop-blur-xl border border-white/10 px-3.5 py-1.5 rounded-full font-manrope font-extrabold text-[11px] uppercase tracking-widest text-white flex items-center gap-1.5 shadow-xl">
              <span className="text-tmr-orange">0{Math.min(5, activeStateIndex + 1)}</span>
              <span className="text-white/30">/</span>
              <span className="text-white/60">05</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
