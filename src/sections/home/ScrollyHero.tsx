import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 960;
const MAX_CONCURRENT_FETCHES = 4; // Strictly bounded HTTP concurrency
const RUNWAY_FORWARD = 12; // Directional contiguous runway ahead of displayedFrame
const RUNWAY_BACKWARD = 3; // Directional safety buffer behind displayedFrame
const SEQUENCE_END = 0.833333; // 500vh out of 600vh total height

type CachedFrame = ImageBitmap | HTMLImageElement;

const getAdaptiveCacheLimit = (): number => {
  if (typeof window === 'undefined') return 36;
  return window.innerWidth < 768 ? 32 : 48; // Bounded rolling decoded window
};

const getFramePath = (index: number) => {
  const paddedIndex = String(index + 1).padStart(4, '0');
  return `/hero-sequence/frame-${paddedIndex}.webp`;
};

export const ScrollyHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  // Strict State Separation: destinationFrame vs authoritative displayedFrame
  const destinationFrameRef = useRef<number>(0); // Target destination requested by scroll [0..959]
  const displayedFrameRef = useRef<number>(-1); // Authoritative frame currently visible on Canvas
  const scrollDirectionRef = useRef<number>(1); // Active playback direction (+1 forward, -1 backward)
  const previousDisplayedRef = useRef<number>(-1); // For development adjacency assertion
  const rawProgressRef = useRef<number>(0); // Raw ScrollTrigger progress [0.0 -> 1.0]
  const stateIndexRef = useRef<number>(0);
  const isVisibleRef = useRef<boolean>(true);
  const hasScrolledRef = useRef<boolean>(false);
  const dimensionsRef = useRef<{ width: number; height: number; dpr: number }>({ width: 0, height: 0, dpr: 1 });
  const rafIdRef = useRef<number | null>(null);

  // In-flight network tracking (deduplicated by frame index, NO scroll-abort churn)
  const inFlightRef = useRef<Set<number>>(new Set());
  // Bounded decoded frame cache (Map<frameIndex, CachedFrame>)
  const decodedFrameCacheRef = useRef<Map<number, CachedFrame>>(new Map());
  // Component lifecycle unmount abort controller (ONLY aborted on unmount/cleanup)
  const unmountControllerRef = useRef<AbortController>(new AbortController());

  // Low-frequency UI state only
  const [activeStateIndex, setActiveStateIndex] = useState<number>(0);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [isFirstFrameLoaded, setIsFirstFrameLoaded] = useState<boolean>(false);

  // Non-blocking, off-thread frame fetch and decode using ImageBitmap
  const fetchAndDecodeFrame = useCallback(async (index: number, signal?: AbortSignal): Promise<CachedFrame> => {
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

  // Distance-based LRU memory eviction: strictly protects active runway
  const purgeDistantFrames = useCallback((centerIndex: number, maxCache: number) => {
    if (decodedFrameCacheRef.current.size <= maxCache) return;

    const entries = Array.from(decodedFrameCacheRef.current.keys()).sort(
      (a, b) => Math.abs(b - centerIndex) - Math.abs(a - centerIndex)
    );

    while (decodedFrameCacheRef.current.size > maxCache && entries.length > 0) {
      const furthestKey = entries.shift()!;
      // Never evict frame 0 (poster) or frames within the active runway (RUNWAY_FORWARD + 2)
      if (furthestKey === 0 || Math.abs(furthestKey - centerIndex) <= RUNWAY_FORWARD + 2) continue;
      const item = decodedFrameCacheRef.current.get(furthestKey);
      if (item && 'close' in item && typeof item.close === 'function') {
        item.close();
      }
      decodedFrameCacheRef.current.delete(furthestKey);
    }
  }, []);

  // Authoritative Canvas Drawing: ENFORCES STRICT ADJACENT-FRAME INVARIANT
  // Only draws frameIdx if it is exactly adjacent to currently displayed frame (or initial frame 0)
  const drawExactFrame = useCallback((frameIdx: number): boolean => {
    const canvas = canvasRef.current;
    if (!canvas) return false;

    if (!ctxRef.current) {
      ctxRef.current = canvas.getContext('2d', { alpha: false });
    }
    const ctx = ctxRef.current;
    if (!ctx) return false;

    const img = decodedFrameCacheRef.current.get(frameIdx);
    if (!img) return false;

    // Strict Adjacency Assertion (Section 24)
    const prev = previousDisplayedRef.current;
    if (prev >= 0) {
      const delta = frameIdx - prev;
      if (delta !== 1 && delta !== -1 && delta !== 0) {
        const errorMsg = `TMR HERO FRAME VIOLATION: previous=${prev} current=${frameIdx} delta=${delta}`;
        console.error(errorMsg);
        return false;
      }
    }

    // Dimensions and DPR (capped at 1.25 on mobile to protect fill-rate)
    let { width, height, dpr } = dimensionsRef.current;
    if (width === 0 || height === 0) {
      const isMobile = window.innerWidth < 768;
      const maxDpr = isMobile ? 1.25 : 2;
      dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      width = window.innerWidth;
      height = window.innerHeight;
      dimensionsRef.current = { width, height, dpr };
    }

    const targetWidth = Math.round(width * dpr);
    const targetHeight = Math.round(height * dpr);
    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
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

    displayedFrameRef.current = frameIdx;
    previousDisplayedRef.current = frameIdx;
    return true;
  }, []);

  // Synchronize Text Overlay, Phase Indicator, and Exit Animation to the ACTUAL DISPLAYED FRAME
  const updateVisualState = useCallback((drawnFrameIdx: number) => {
    if (drawnFrameIdx < 0) return;

    // Calculate visual progress strictly from the authoritative displayed frame
    const visualCameraProgress = drawnFrameIdx / (TOTAL_FRAMES - 1);
    const visualScrollProgress = visualCameraProgress * SEQUENCE_END;

    let newState = 0;
    if (visualScrollProgress < 0.166) newState = 0;
    else if (visualScrollProgress < 0.333) newState = 1;
    else if (visualScrollProgress < 0.50) newState = 2;
    else if (visualScrollProgress < 0.666) newState = 3;
    else if (visualScrollProgress < 0.833) newState = 4;
    else newState = 5;

    if (newState !== stateIndexRef.current) {
      stateIndexRef.current = newState;
      setActiveStateIndex(newState);
    }

    // Smooth sticky exit transition when physical scroll exceeds SEQUENCE_END
    if (stickyRef.current) {
      const rawProgress = rawProgressRef.current;
      if (rawProgress > SEQUENCE_END) {
        const exitProgress = (rawProgress - SEQUENCE_END) / (1 - SEQUENCE_END);
        const scale = 1 - exitProgress * 0.04;
        const opacity = 1 - exitProgress * 0.35;
        stickyRef.current.style.transform = `scale(${scale})`;
        stickyRef.current.style.opacity = `${opacity}`;
      } else {
        stickyRef.current.style.transform = 'scale(1)';
        stickyRef.current.style.opacity = '1';
      }
    }
  }, []);

  // Forward declaration ref for playhead tick cycle
  const requestPlayheadTickRef = useRef<() => void>(() => {});

  // Contiguous Runway Preloader: Prioritizes immediate adjacent frames around displayedFrame
  // Zero Abort Churn: In-flight requests are allowed to finish naturally during scrolling
  const pumpContiguousQueue = useCallback(() => {
    if (!isVisibleRef.current || unmountControllerRef.current.signal.aborted) return;

    const current = displayedFrameRef.current >= 0 ? displayedFrameRef.current : 0;
    const destination = destinationFrameRef.current;
    const maxCache = getAdaptiveCacheLimit();

    // 1. Build contiguous directional priority runway starting strictly from current displayed frame
    const priorityList: number[] = [];

    if (destination > current) {
      // Moving forward: Priority 0 is immediate next frame (current + 1)
      const forwardLimit = Math.min(TOTAL_FRAMES - 1, Math.min(destination, current + RUNWAY_FORWARD));
      for (let i = current + 1; i <= forwardLimit; i++) {
        priorityList.push(i);
      }
      // Tight backward safety buffer
      const backwardLimit = Math.max(0, current - RUNWAY_BACKWARD);
      for (let i = current - 1; i >= backwardLimit; i--) {
        priorityList.push(i);
      }
    } else if (destination < current) {
      // Moving backward: Priority 0 is immediate next frame (current - 1)
      const backwardLimit = Math.max(0, Math.max(destination, current - RUNWAY_FORWARD));
      for (let i = current - 1; i >= backwardLimit; i--) {
        priorityList.push(i);
      }
      // Tight forward safety buffer
      const forwardLimit = Math.min(TOTAL_FRAMES - 1, current + RUNWAY_BACKWARD);
      for (let i = current + 1; i <= forwardLimit; i++) {
        priorityList.push(i);
      }
    } else {
      // Idle at destination: keep immediate surrounding buffer warm
      for (let i = 1; i <= 3; i++) {
        if (current + i < TOTAL_FRAMES) priorityList.push(current + i);
        if (current - i >= 0) priorityList.push(current - i);
      }
    }

    // 2. Dispatch fetches strictly in priority order up to MAX_CONCURRENT_FETCHES
    // Deduplication: Never re-fetch frames already decoded or in-flight
    for (const frameIdx of priorityList) {
      if (inFlightRef.current.size >= MAX_CONCURRENT_FETCHES) break;
      if (inFlightRef.current.has(frameIdx) || decodedFrameCacheRef.current.has(frameIdx)) continue;

      inFlightRef.current.add(frameIdx);

      fetchAndDecodeFrame(frameIdx, unmountControllerRef.current.signal)
        .then((bitmap) => {
          inFlightRef.current.delete(frameIdx);

          // If component unmounted while fetch was in flight, immediately release bitmap to avoid memory leak
          if (unmountControllerRef.current.signal.aborted) {
            if (bitmap && 'close' in bitmap && typeof bitmap.close === 'function') {
              bitmap.close();
            }
            return;
          }

          decodedFrameCacheRef.current.set(frameIdx, bitmap);

          // If the arrived frame is the immediate next frame the playhead needs, advance playhead!
          const cur = displayedFrameRef.current;
          const dest = destinationFrameRef.current;
          const dir = scrollDirectionRef.current;
          if (
            (dest > cur && frameIdx === cur + 1) ||
            (dest < cur && frameIdx === cur - 1) ||
            (frameIdx === cur + dir)
          ) {
            requestPlayheadTickRef.current();
          }

          if (decodedFrameCacheRef.current.size > maxCache) {
            purgeDistantFrames(cur >= 0 ? cur : 0, maxCache);
          }

          pumpContiguousQueue();
        })
        .catch((err) => {
          inFlightRef.current.delete(frameIdx);
          if (err.name !== 'AbortError' && !unmountControllerRef.current.signal.aborted) {
            pumpContiguousQueue();
          }
        });
    }
  }, [fetchAndDecodeFrame, purgeDistantFrames]);

  // Sequential Playhead Engine (Section 8)
  // Advances strictly ONE adjacent frame per visual tick. Holds if next frame is not ready.
  const advanceOneFrameIfPossible = useCallback(() => {
    rafIdRef.current = null;
    if (!isVisibleRef.current) return;

    const current = displayedFrameRef.current;
    const destination = destinationFrameRef.current;

    // Already at destination or initial frame not loaded yet
    if (current === destination || current < 0) {
      return;
    }

    // Determine immediate next adjacent frame
    const direction = destination > current ? 1 : -1;
    scrollDirectionRef.current = direction;

    const next = current + direction;

    // Hard boundary safety [0..TOTAL_FRAMES - 1]
    if (next < 0 || next >= TOTAL_FRAMES) {
      return;
    }

    // If next is not decoded and ready: HOLD current frame!
    if (!decodedFrameCacheRef.current.has(next)) {
      // Ensure next is being loaded by preloader
      pumpContiguousQueue();
      return;
    }

    // Next is ready: draw EXACTLY next
    const drawn = drawExactFrame(next);
    if (drawn) {
      // Synchronize visual editorial text and phase indicator
      updateVisualState(next);

      // Manage cache bounds
      const maxCache = getAdaptiveCacheLimit();
      if (decodedFrameCacheRef.current.size > maxCache) {
        purgeDistantFrames(next, maxCache);
      }

      // Replenish preloader runway
      pumpContiguousQueue();

      // If not yet at destination, schedule another advancement tick
      if (displayedFrameRef.current !== destinationFrameRef.current) {
        requestPlayheadTickRef.current();
      }
    }
  }, [drawExactFrame, updateVisualState, purgeDistantFrames, pumpContiguousQueue]);

  // Request Playhead Tick Scheduler
  const requestPlayheadTick = useCallback(() => {
    if (rafIdRef.current !== null || !isVisibleRef.current) return;
    rafIdRef.current = requestAnimationFrame(advanceOneFrameIfPossible);
  }, [advanceOneFrameIfPossible]);

  // Master Component Lifecycle: Fresh AbortController per mount cycle (React.StrictMode safe)
  useEffect(() => {
    const controller = new AbortController();
    unmountControllerRef.current = controller;

    return () => {
      controller.abort();
      inFlightRef.current.clear();
      for (const item of decodedFrameCacheRef.current.values()) {
        if (item && 'close' in item && typeof item.close === 'function') {
          item.close();
        }
      }
      decodedFrameCacheRef.current.clear();
    };
  }, []);

  // Keep ref up-to-date for async fetch callbacks
  useEffect(() => {
    requestPlayheadTickRef.current = requestPlayheadTick;
  }, [requestPlayheadTick]);

  // Viewport IntersectionObserver Setup (Halts work when offscreen)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
          if (entry.isIntersecting) {
            requestPlayheadTick();
            pumpContiguousQueue();
          } else {
            if (rafIdRef.current !== null) {
              cancelAnimationFrame(rafIdRef.current);
              rafIdRef.current = null;
            }
          }
        });
      },
      { threshold: 0.01 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      observer.disconnect();
    };
  }, [requestPlayheadTick, pumpContiguousQueue]);

  // Initial Load Strategy: Prioritize Frame 0 immediately
  useEffect(() => {
    let isMounted = true;

    if (decodedFrameCacheRef.current.has(0) || inFlightRef.current.has(0)) {
      if (decodedFrameCacheRef.current.has(0) && displayedFrameRef.current < 0) {
        drawExactFrame(0);
        updateVisualState(0);
      }
      return;
    }

    inFlightRef.current.add(0);

    fetchAndDecodeFrame(0, unmountControllerRef.current.signal)
      .then((bitmap) => {
        inFlightRef.current.delete(0);
        if (!isMounted || unmountControllerRef.current.signal.aborted) {
          if (bitmap && 'close' in bitmap && typeof bitmap.close === 'function') {
            bitmap.close();
          }
          return;
        }
        decodedFrameCacheRef.current.set(0, bitmap);
        setIsFirstFrameLoaded(true);
        previousDisplayedRef.current = -1; // Reset assertion baseline for initial frame
        const drawn = drawExactFrame(0);
        if (drawn) {
          updateVisualState(0);
        }
        pumpContiguousQueue();
      })
      .catch((err) => {
        inFlightRef.current.delete(0);
        if (err.name !== 'AbortError') {
          console.error('Failed to load initial frame 0:', err);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [fetchAndDecodeFrame, drawExactFrame, updateVisualState, pumpContiguousQueue]);

  // Resize Handler: Updates cached dimensions and triggers redraw via RAF
  useEffect(() => {
    let resizeRafId: number | null = null;
    const handleResize = () => {
      if (resizeRafId !== null) return;
      resizeRafId = requestAnimationFrame(() => {
        resizeRafId = null;
        const isMobile = window.innerWidth < 768;
        const maxDpr = isMobile ? 1.25 : 2;
        const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
        dimensionsRef.current = {
          width: window.innerWidth,
          height: window.innerHeight,
          dpr,
        };
        if (displayedFrameRef.current >= 0) {
          // Redraw current displayed frame with updated dimensions
          const img = decodedFrameCacheRef.current.get(displayedFrameRef.current);
          const canvas = canvasRef.current;
          const ctx = ctxRef.current;
          if (img && canvas && ctx) {
            const targetWidth = Math.round(window.innerWidth * dpr);
            const targetHeight = Math.round(window.innerHeight * dpr);
            canvas.width = targetWidth;
            canvas.height = targetHeight;
            ctx.save();
            ctx.scale(dpr, dpr);
            const imgWidth = 'naturalWidth' in img ? img.naturalWidth : (img as ImageBitmap).width || 1920;
            const imgHeight = 'naturalHeight' in img ? img.naturalHeight : (img as ImageBitmap).height || 1080;
            const scale = Math.max(window.innerWidth / imgWidth, window.innerHeight / imgHeight);
            const drawWidth = imgWidth * scale;
            const drawHeight = imgHeight * scale;
            const offsetX = (window.innerWidth - drawWidth) / 2;
            const offsetY = (window.innerHeight - drawHeight) / 2;
            ctx.drawImage(img as CanvasImageSource, offsetX, offsetY, drawWidth, drawHeight);
            ctx.restore();
          }
        }
      });
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeRafId !== null) {
        cancelAnimationFrame(resizeRafId);
      }
    };
  }, []);

  // GSAP ScrollTrigger Setup (Section 16: ScrollTrigger controls destination, not direct rendering)
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
          rawProgressRef.current = progress;

          const cameraProgress = Math.min(1, progress / SEQUENCE_END);
          const dest = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(cameraProgress * (TOTAL_FRAMES - 1))));
          destinationFrameRef.current = dest;

          // Notify sequential playhead and preloader that destination has updated
          requestPlayheadTick();
          pumpContiguousQueue();

          // Single boolean state update for scroll cue
          if (!hasScrolledRef.current && (progress > 0.02 || displayedFrameRef.current > 10)) {
            hasScrolledRef.current = true;
            setHasScrolled(true);
          } else if (hasScrolledRef.current && progress <= 0.01 && displayedFrameRef.current <= 5) {
            hasScrolledRef.current = false;
            setHasScrolled(false);
          }

          // Update sticky exit in sync with physical scroll progress
          if (displayedFrameRef.current >= 0) {
            updateVisualState(displayedFrameRef.current);
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [requestPlayheadTick, pumpContiguousQueue, updateVisualState]);

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
