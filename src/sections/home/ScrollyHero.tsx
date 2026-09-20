import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 960;
const MAX_CONCURRENT_FETCHES = 4; // Measured optimal concurrency for HTTP/2 pipeline
const FORWARD_PRELOAD_WINDOW = 12; // Focused forward lookahead
const BACKWARD_PRELOAD_WINDOW = 3; // Tight backward safety window
const MAX_CACHE_SIZE = 80; // Bounded in-memory decoded frames
const SEQUENCE_END = 0.833333; // 500vh out of 600vh total height

type CachedFrame = ImageBitmap | HTMLImageElement;

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
  const currentDrawnIndexRef = useRef<number>(-1);
  const stateIndexRef = useRef<number>(0);
  const isVisibleRef = useRef<boolean>(true);
  const isLoopRunningRef = useRef<boolean>(false);
  const hasScrolledRef = useRef<boolean>(false);
  const scrollDirectionRef = useRef<number>(1);
  const dimensionsRef = useRef<{ width: number; height: number; dpr: number }>({ width: 0, height: 0, dpr: 1 });

  // Bounded Frame Cache & In-flight Network Request Tracking
  const imageCacheRef = useRef<Map<number, CachedFrame>>(new Map());
  const inFlightRef = useRef<Map<number, AbortController>>(new Map());

  // Low-frequency UI state only
  const [activeStateIndex, setActiveStateIndex] = useState<number>(0);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [isFirstFrameLoaded, setIsFirstFrameLoaded] = useState<boolean>(false);

  // Non-blocking, off-thread frame fetch and decode using ImageBitmap
  const fetchAndDecodeFrame = useCallback(async (index: number, signal: AbortSignal): Promise<CachedFrame> => {
    const url = getFramePath(index);
    const res = await fetch(url, { signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const blob = await res.blob();
    if (typeof createImageBitmap === 'function') {
      return await createImageBitmap(blob);
    }
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      const objectUrl = URL.createObjectURL(blob);
      img.onload = () => {
        URL.revokeObjectURL(objectUrl);
        resolve(img);
      };
      img.onerror = (err) => {
        URL.revokeObjectURL(objectUrl);
        reject(err);
      };
      img.src = objectUrl;
    });
  }, []);

  // Full-Viewport Object-Fit: Cover Canvas Rendering
  const renderCanvasFrame = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let img: CachedFrame | undefined = imageCacheRef.current.get(frameIdx);

    // If exact frame is not yet in cache, find nearest available frame without freezing
    if (!img) {
      const direction = scrollDirectionRef.current;
      for (let offset = 1; offset <= 15; offset++) {
        const preferred = direction >= 0 ? frameIdx - offset : frameIdx + offset;
        const alternate = direction >= 0 ? frameIdx + offset : frameIdx - offset;

        if (imageCacheRef.current.has(preferred)) {
          img = imageCacheRef.current.get(preferred);
          break;
        }
        if (imageCacheRef.current.has(alternate)) {
          img = imageCacheRef.current.get(alternate);
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

    if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    const imgWidth = 'naturalWidth' in img ? img.naturalWidth : (img as ImageBitmap).width || 1920;
    const imgHeight = 'naturalHeight' in img ? img.naturalHeight : (img as ImageBitmap).height || 1080;
    const scale = Math.max(width / imgWidth, height / imgHeight);

    const drawWidth = imgWidth * scale;
    const drawHeight = imgHeight * scale;
    const offsetX = (width - drawWidth) / 2;
    const offsetY = (height - drawHeight) / 2;

    ctx.drawImage(img as CanvasImageSource, offsetX, offsetY, drawWidth, drawHeight);
    ctx.restore();

    currentDrawnIndexRef.current = frameIdx;
  }, []);

  // Distance-based LRU memory eviction
  const purgeDistantFrames = useCallback((centerIndex: number) => {
    const entries = Array.from(imageCacheRef.current.keys()).sort(
      (a, b) => Math.abs(b - centerIndex) - Math.abs(a - centerIndex)
    );
    while (imageCacheRef.current.size > MAX_CACHE_SIZE && entries.length > 0) {
      const furthestKey = entries.shift()!;
      // Preserve frame 0 (initial poster) and frames within 10 of current position
      if (furthestKey === 0 || Math.abs(furthestKey - centerIndex) <= 10) continue;
      const item = imageCacheRef.current.get(furthestKey);
      if (item && 'close' in item && typeof item.close === 'function') {
        item.close();
      }
      imageCacheRef.current.delete(furthestKey);
    }
  }, []);

  // Adaptive, direction-aware priority frame scheduler
  const scheduleFrameLoads = useCallback(() => {
    if (!isVisibleRef.current) return;

    const target = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(targetFrameRef.current)));
    const direction = scrollDirectionRef.current;

    // 1. Build priority queue
    const priorityList: number[] = [];
    if (!imageCacheRef.current.has(target)) {
      priorityList.push(target);
    }

    const fwdDist = direction >= 0 ? FORWARD_PRELOAD_WINDOW : BACKWARD_PRELOAD_WINDOW;
    const bwdDist = direction >= 0 ? BACKWARD_PRELOAD_WINDOW : FORWARD_PRELOAD_WINDOW;

    if (direction >= 0) {
      for (let i = 1; i <= fwdDist; i++) {
        const idx = target + i;
        if (idx < TOTAL_FRAMES && !imageCacheRef.current.has(idx)) {
          priorityList.push(idx);
        }
      }
      for (let i = 1; i <= bwdDist; i++) {
        const idx = target - i;
        if (idx >= 0 && !imageCacheRef.current.has(idx)) {
          priorityList.push(idx);
        }
      }
    } else {
      for (let i = 1; i <= fwdDist; i++) {
        const idx = target - i;
        if (idx >= 0 && !imageCacheRef.current.has(idx)) {
          priorityList.push(idx);
        }
      }
      for (let i = 1; i <= bwdDist; i++) {
        const idx = target + i;
        if (idx < TOTAL_FRAMES && !imageCacheRef.current.has(idx)) {
          priorityList.push(idx);
        }
      }
    }

    // 2. Abort stale in-flight requests outside active window
    const activeMin = Math.max(0, target - bwdDist - 4);
    const activeMax = Math.min(TOTAL_FRAMES - 1, target + fwdDist + 4);

    for (const [idx, controller] of inFlightRef.current.entries()) {
      if (idx < activeMin || idx > activeMax) {
        controller.abort();
        inFlightRef.current.delete(idx);
      }
    }

    // 3. Dispatch new requests up to MAX_CONCURRENT_FETCHES
    for (const frameIdx of priorityList) {
      if (inFlightRef.current.size >= MAX_CONCURRENT_FETCHES) break;
      if (inFlightRef.current.has(frameIdx)) continue;

      const controller = new AbortController();
      inFlightRef.current.set(frameIdx, controller);

      fetchAndDecodeFrame(frameIdx, controller.signal)
        .then((bitmap) => {
          imageCacheRef.current.set(frameIdx, bitmap);
          inFlightRef.current.delete(frameIdx);

          // If this frame is the target frame or closer than what is currently drawn, redraw immediately
          const currentTarget = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(targetFrameRef.current)));
          if (
            frameIdx === currentTarget ||
            Math.abs(frameIdx - currentTarget) < Math.abs(currentDrawnIndexRef.current - currentTarget)
          ) {
            renderCanvasFrame(frameIdx);
          }

          if (imageCacheRef.current.size > MAX_CACHE_SIZE) {
            purgeDistantFrames(currentTarget);
          }

          scheduleFrameLoads();
        })
        .catch((err) => {
          inFlightRef.current.delete(frameIdx);
          if (err.name !== 'AbortError') {
            scheduleFrameLoads();
          }
        });
    }
  }, [fetchAndDecodeFrame, renderCanvasFrame, purgeDistantFrames]);

  // Smooth RAF Render Loop with IntersectionObserver pause/resume
  useEffect(() => {
    let animFrameId: number;

    const renderLoop = () => {
      if (!isVisibleRef.current) {
        isLoopRunningRef.current = false;
        return;
      }

      isLoopRunningRef.current = true;
      const target = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(targetFrameRef.current)));

      if (target !== currentDrawnIndexRef.current) {
        renderCanvasFrame(target);
      }

      animFrameId = requestAnimationFrame(renderLoop);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
          if (entry.isIntersecting) {
            scheduleFrameLoads();
            if (!isLoopRunningRef.current) {
              animFrameId = requestAnimationFrame(renderLoop);
            }
          } else {
            // Abort lookahead fetches when offscreen to save bandwidth
            for (const [idx, ctrl] of inFlightRef.current.entries()) {
              if (idx !== 0) {
                ctrl.abort();
                inFlightRef.current.delete(idx);
              }
            }
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
      for (const ctrl of inFlightRef.current.values()) {
        ctrl.abort();
      }
      inFlightRef.current.clear();
      for (const item of imageCacheRef.current.values()) {
        if (item && 'close' in item && typeof item.close === 'function') {
          item.close();
        }
      }
      imageCacheRef.current.clear();
    };
  }, [renderCanvasFrame, scheduleFrameLoads]);

  // Initial Load Strategy: Prioritize Frame 0 immediately
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    fetchAndDecodeFrame(0, controller.signal)
      .then((bitmap) => {
        if (!isMounted) return;
        imageCacheRef.current.set(0, bitmap);
        setIsFirstFrameLoaded(true);
        renderCanvasFrame(0);
        scheduleFrameLoads();
      })
      .catch(() => {});

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [fetchAndDecodeFrame, renderCanvasFrame, scheduleFrameLoads]);

  // Resize Handler: Updates cached dimensions
  useEffect(() => {
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      dimensionsRef.current = {
        width: window.innerWidth,
        height: window.innerHeight,
        dpr,
      };
      renderCanvasFrame(currentDrawnIndexRef.current >= 0 ? currentDrawnIndexRef.current : 0);
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
          scheduleFrameLoads();

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
  }, [scheduleFrameLoads]);

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
