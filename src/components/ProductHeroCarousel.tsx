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

  // Reduced motion detection
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const total = products.length;

  // Calculate circular offset
  const getRelativeOffset = useCallback(
    (index: number, active: number, count: number) => {
      let diff = index - active;
      if (diff > count / 2) diff -= count;
      if (diff < -count / 2) diff += count;
      return diff;
    },
    []
  );

  // Update 3D Curved Cylindrical Arc layout matching reference image perspective
  const updateLayout = useCallback(
    (activeIdx: number, animate: boolean = true) => {
      if (!itemsRef.current || itemsRef.current.length === 0) return;

      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;

      // Arc radius & spacing parameters for 3D perspective curve
      const radius = isMobile ? 380 : isTablet ? 650 : 920;
      const angleStep = isMobile ? 0.42 : isTablet ? 0.34 : 0.28; // radians per item

      products.forEach((_, i) => {
        const itemEl = itemsRef.current[i];
        if (!itemEl) return;

        const offset = getRelativeOffset(i, activeIdx, total);
        const absOffset = Math.abs(offset);

        // Angle along cylinder
        const angle = offset * angleStep;

        // 3D cylindrical coordinates matching reference perspective curve
        const x = Math.sin(angle) * radius;
        const z = (Math.cos(angle) - 1) * (radius * 0.45); // depth pushing back
        const rotateY = -angle * (180 / Math.PI) * 0.55; // 3D Y-rotation inward facing center

        // Scale & Opacity hierarchy
        let scale = Math.cos(angle * 0.7);
        scale = Math.max(isMobile ? 0.5 : 0.62, scale);

        let opacity = Math.cos(angle * 0.85);
        opacity = Math.max(isMobile ? 0.25 : 0.35, opacity);

        // Z-index depth sorting
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
            duration: 0.85,
            ease: 'power3.out',
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

  // Window resize handler
  useEffect(() => {
    const handleResize = () => updateLayout(activeIndex, false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex, updateLayout]);

  // Auto-advance loop (every 3.8 seconds)
  const startAutoPlay = useCallback(() => {
    if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    autoPlayTimerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3800);
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

  // Drag & Touch interaction
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

  const activeProduct = products[activeIndex];

  return (
    <div
      ref={containerRef}
      className="relative w-full flex flex-col items-center justify-between select-none outline-none focus:outline-none"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
      role="region"
      aria-roledescription="carousel"
      aria-label="TMR Product Vault Curved Runway"
    >
      {/* 3D Perspective Curved Arc Stage */}
      <div
        className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[520px] flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden"
        style={{ perspective: '1200px' }}
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
      >
        {/* Ambient Center Studio Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] aspect-square rounded-full bg-[#FF4B00]/10 blur-[100px] pointer-events-none z-0" />

        {/* Curved Track Items */}
        <div className="relative w-full h-full flex items-center justify-center transform-style-3d">
          {products.map((prod, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={prod.id}
                ref={(el) => (itemsRef.current[idx] = el)}
                onClick={() => {
                  if (!isActive) {
                    setActiveIndex(idx);
                    if (onSelectProduct) onSelectProduct(prod);
                  }
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center cursor-pointer transition-shadow duration-700"
                style={{ transformStyle: 'preserve-3d' }}
                aria-hidden={!isActive}
              >
                {/* Real Product Studio Photography Object (No Card Border / Box) */}
                <div className="relative w-48 sm:w-64 md:w-80 lg:w-96 h-60 sm:h-76 md:h-96 flex items-center justify-center p-2">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className={`max-h-full w-auto object-contain transition-all duration-700 ${
                      isActive
                        ? 'drop-shadow-[0_25px_40px_rgba(0,0,0,0.95)]'
                        : 'drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)] filter brightness-90 contrast-105'
                    }`}
                    onError={(e) => {
                      if (prod.fallbackImage) {
                        (e.target as HTMLImageElement).src = prod.fallbackImage;
                      } else {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200';
                      }
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Restrained Active Center Product Technical Title */}
      <div className="mt-2 sm:mt-4 flex flex-col items-center text-center z-20 transition-all duration-500">
        <span className="font-manrope font-extrabold text-sm sm:text-base md:text-xl uppercase tracking-wider text-[#F5F4EF]">
          {activeProduct.name}
        </span>
        <span className="font-manrope text-xs text-[#858585] uppercase tracking-widest mt-1">
          {activeProduct.category}
        </span>
      </div>
    </div>
  );
};
