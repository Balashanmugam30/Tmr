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
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const startXRef = useRef<number>(0);
  const dragDistanceRef = useRef<number>(0);
  const autoAdvanceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const total = products.length;

  // Calculate shortest relative offset in circular array
  const getRelativeOffset = useCallback(
    (index: number, active: number, count: number) => {
      let diff = index - active;
      if (diff > count / 2) diff -= count;
      if (diff < -count / 2) diff += count;
      return diff;
    },
    []
  );

  // Animate items along curved arc using GSAP
  const updateCarouselLayout = useCallback(
    (activeIdx: number, animate: boolean = true) => {
      if (!itemsRef.current || itemsRef.current.length === 0) return;

      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
      
      const spacing = isMobile ? 140 : isTablet ? 220 : 310;
      const curvature = isMobile ? 0.0012 : 0.00045; // parabolic y = c * x^2

      products.forEach((_, i) => {
        const itemEl = itemsRef.current[i];
        if (!itemEl) return;

        const offset = getRelativeOffset(i, activeIdx, total);
        const absOffset = Math.abs(offset);

        // Calculate positions
        const x = offset * spacing;
        const y = curvature * (x * x); // downward curve arc
        
        // Scale & Opacity hierarchy
        let scale = 1 - absOffset * (isMobile ? 0.28 : 0.22);
        scale = Math.max(isMobile ? 0.45 : 0.55, scale);

        let opacity = 1 - absOffset * 0.32;
        opacity = Math.max(0.2, opacity);

        // Z-Index ordering (center item highest)
        const zIndex = 100 - Math.round(absOffset * 20);

        if (prefersReducedMotion || !animate) {
          gsap.set(itemEl, {
            x,
            y: prefersReducedMotion ? 0 : y,
            scale,
            opacity,
            zIndex,
          });
        } else {
          gsap.to(itemEl, {
            x,
            y,
            scale,
            opacity,
            zIndex,
            duration: 0.75,
            ease: 'power3.out',
            overwrite: 'auto',
          });
        }
      });
    },
    [products, total, getRelativeOffset, prefersReducedMotion]
  );

  useEffect(() => {
    updateCarouselLayout(activeIndex, true);
  }, [activeIndex, updateCarouselLayout]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => updateCarouselLayout(activeIndex, false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex, updateCarouselLayout]);

  // Next / Prev navigation
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Gentle auto-advance when idle
  const startAutoAdvance = useCallback(() => {
    if (autoAdvanceTimerRef.current) clearInterval(autoAdvanceTimerRef.current);
    autoAdvanceTimerRef.current = setInterval(() => {
      nextSlide();
    }, 6000);
  }, [nextSlide]);

  const stopAutoAdvance = useCallback(() => {
    if (autoAdvanceTimerRef.current) {
      clearInterval(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoAdvance();
    return () => stopAutoAdvance();
  }, [startAutoAdvance, stopAutoAdvance]);

  // Drag & Touch interactions
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    startXRef.current = clientX;
    dragDistanceRef.current = 0;
    stopAutoAdvance();
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    dragDistanceRef.current = clientX - startXRef.current;
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 40;
    if (dragDistanceRef.current < -threshold) {
      nextSlide();
    } else if (dragDistanceRef.current > threshold) {
      prevSlide();
    }
    startAutoAdvance();
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  const activeProduct = products[activeIndex];

  return (
    <div
      ref={containerRef}
      className="relative w-full flex flex-col items-center justify-between select-none outline-none focus:outline-none"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={stopAutoAdvance}
      onMouseLeave={startAutoAdvance}
      role="region"
      aria-roledescription="carousel"
      aria-label="TMR Product Vault Curved Runway"
    >
      {/* Curved Runway Stage */}
      <div
        className="relative w-full h-[320px] sm:h-[400px] md:h-[460px] flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden"
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
      >
        {/* Soft Ambient Center Lighting Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 aspect-square rounded-full bg-[#FF4B00]/10 blur-[90px] pointer-events-none z-0" />

        {/* Carousel Items Track */}
        <div className="relative w-full h-full flex items-center justify-center">
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
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center transition-shadow duration-500 ${
                  isActive ? 'pointer-events-auto cursor-pointer' : 'pointer-events-auto cursor-pointer'
                }`}
                aria-hidden={!isActive}
              >
                {/* Clean Studio Product Image */}
                <div className="relative w-48 sm:w-64 md:w-80 h-56 sm:h-72 md:h-80 flex items-center justify-center p-4">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className={`max-h-full w-auto object-contain transition-all duration-700 ${
                      isActive
                        ? 'drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)]'
                        : 'drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] filter grayscale-[30%]'
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

      {/* Restrained Center Product Technical Caption */}
      <div className="mt-4 sm:mt-6 flex flex-col items-center text-center z-20">
        <span className="font-manrope font-extrabold text-sm sm:text-lg uppercase tracking-wider text-[#F5F4EF]">
          {activeProduct.name}
        </span>
        <span className="font-manrope text-xs text-[#858585] uppercase tracking-widest mt-1">
          {activeProduct.category}
        </span>
      </div>

      {/* Accessible Runway Navigation Controls */}
      <div className="flex items-center gap-6 mt-6 z-20">
        <button
          onClick={prevSlide}
          aria-label="Previous product"
          className="w-10 h-10 border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#050505] transition-colors text-sm font-bold focus:outline-none focus:border-[#FF4B00]"
        >
          ←
        </button>

        {/* Indicator Dots */}
        <div className="flex items-center gap-2">
          {products.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === activeIndex ? 'w-8 bg-[#FF4B00]' : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next product"
          className="w-10 h-10 border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#050505] transition-colors text-sm font-bold focus:outline-none focus:border-[#FF4B00]"
        >
          →
        </button>
      </div>
    </div>
  );
};
