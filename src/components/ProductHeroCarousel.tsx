import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  image: string;
  fallbackImage?: string;
  slug: string;
}

interface ProductHeroCarouselProps {
  products: ProductItem[];
  onSelectProduct?: (product: ProductItem) => void;
}

export const ProductHeroCarousel: React.FC<ProductHeroCarouselProps> = ({
  products,
  onSelectProduct,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const startXRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const dragDistanceRef = useRef<number>(0);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const total = products.length;

  const getRelativeOffset = useCallback(
    (index: number, active: number, count: number) => {
      let diff = index - active;
      if (diff > count / 2) diff -= count;
      if (diff < -count / 2) diff += count;
      return diff;
    },
    []
  );

  const updateLayout = useCallback(
    (activeIdx: number, animate: boolean = true) => {
      if (!itemsRef.current || itemsRef.current.length === 0) return;

      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;

      const radius = isMobile ? 360 : isTablet ? 620 : 880;
      const angleStep = isMobile ? 0.44 : isTablet ? 0.35 : 0.28;

      products.forEach((_, i) => {
        const itemEl = itemsRef.current[i];
        if (!itemEl) return;

        const offset = getRelativeOffset(i, activeIdx, total);
        const absOffset = Math.abs(offset);
        const angle = offset * angleStep;

        // 3D cylindrical perspective arc matching reference image
        const x = Math.sin(angle) * radius;
        const z = (Math.cos(angle) - 1) * (radius * 0.48);
        const rotateY = -angle * (180 / Math.PI) * 0.55;

        let scale = Math.cos(angle * 0.75);
        scale = Math.max(isMobile ? 0.5 : 0.65, scale);

        let opacity = Math.cos(angle * 0.85);
        opacity = Math.max(isMobile ? 0.2 : 0.3, opacity);

        const zIndex = 100 - Math.round(absOffset * 15);

        if (prefersReducedMotion || !animate) {
          gsap.set(itemEl, {
            x,
            z: prefersReducedMotion ? 0 : z,
            rotateY: prefersReducedMotion ? 0 : rotateY,
            scale,
            opacity,
            zIndex,
            transformPerspective: 1200,
          });
        } else {
          gsap.to(itemEl, {
            x,
            z,
            rotateY,
            scale,
            opacity,
            zIndex,
            transformPerspective: 1200,
            duration: 0.95,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }
      });
    },
    [products, total, getRelativeOffset, prefersReducedMotion]
  );

  useEffect(() => {
    updateLayout(activeIndex, true);
  }, [activeIndex, updateLayout]);

  useEffect(() => {
    const handleResize = () => updateLayout(activeIndex, false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex, updateLayout]);

  // Automatic smooth advance loop (4.2 seconds interval)
  const startAutoPlay = useCallback(() => {
    if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    autoPlayTimerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4200);
  }, [total]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  const handleDragStart = (clientX: number) => {
    isDraggingRef.current = true;
    startXRef.current = clientX;
    dragDistanceRef.current = 0;
    stopAutoPlay();
  };

  const handleDragMove = (clientX: number) => {
    if (!isDraggingRef.current) return;
    dragDistanceRef.current = clientX - startXRef.current;
  };

  const handleDragEnd = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    const threshold = 35;
    if (dragDistanceRef.current < -threshold) {
      setActiveIndex((prev) => (prev + 1) % total);
    } else if (dragDistanceRef.current > threshold) {
      setActiveIndex((prev) => (prev - 1 + total) % total);
    }
    startAutoPlay();
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full flex flex-col items-center justify-between select-none outline-none focus:outline-none overflow-hidden"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
      role="region"
      aria-roledescription="carousel"
      aria-label="TMR Product Vault Curved Runway"
    >
      {/* Both Corners Edge Fade Masks matching reference image */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-40 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-40 pointer-events-none" />

      {/* 3D Perspective Curved Arc Stage */}
      <div
        className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{ perspective: '1200px' }}
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
      >
        {/* Soft Ambient Studio Lighting Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] aspect-square rounded-full bg-[#FF4B00]/10 blur-[100px] pointer-events-none z-0" />

        {/* Curved Track Items */}
        <div className="relative w-full h-full flex items-center justify-center transform-style-3d">
          {products.map((prod, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={prod.id}
                ref={(el) => (itemsRef.current[idx] = el)}
                onClick={(e) => {
                  e.stopPropagation();
                  // Bring clicked product directly to center if not heavy drag
                  if (Math.abs(dragDistanceRef.current) < 15) {
                    setActiveIndex(idx);
                    if (onSelectProduct) onSelectProduct(prod);
                    stopAutoPlay();
                    startAutoPlay();
                  }
                }}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center cursor-pointer pointer-events-auto transition-all duration-700 ${
                  !isActive ? 'hover:scale-[1.03] hover:brightness-110' : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Reference Card Container with Rounded Corners & Dark Studio Backdrop */}
                <div
                  className={`relative w-48 sm:w-60 md:w-72 lg:w-80 h-64 sm:h-80 md:h-96 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden transition-all duration-700 ${
                    isActive
                      ? 'bg-[#141414] border-2 border-[#FF4B00]/60 shadow-[0_25px_50px_rgba(0,0,0,0.9)]'
                      : 'bg-[#111111]/90 border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.6)]'
                  }`}
                >
                  {/* Top Badge Inside Card */}
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[#858585] z-10">
                    <span>{prod.category}</span>
                    {isActive && <span className="text-[#FF4B00]">TMR VAULT</span>}
                  </div>

                  {/* Product Image Center */}
                  <div className="relative w-full h-[65%] my-auto flex items-center justify-center">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className={`max-h-full w-auto object-contain transition-all duration-700 ${
                        isActive
                          ? 'scale-105 drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)]'
                          : 'drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] filter brightness-90'
                      }`}
                      onError={(e) => {
                        // Prevent loading fallback stock photos; hide image if fails
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Bottom Title Inside Card */}
                  <div className="pt-3 border-t border-white/10 z-10">
                    <h3 className={`font-manrope font-bold text-xs sm:text-sm uppercase line-clamp-1 ${
                      isActive ? 'text-[#F5F4EF]' : 'text-white/60'
                    }`}>
                      {prod.name}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
