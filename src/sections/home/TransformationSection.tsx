import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/Container';

gsap.registerPlugin(ScrollTrigger);

export const TransformationSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Handle Drag / Touch Movement for Before/After Slider
  const handleMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    percentage = Math.max(0, Math.min(100, percentage));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 78%',
        end: 'bottom 20%',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="transformation"
      className="w-full bg-[#070809] text-white py-16 md:py-24 border-b border-white/10 relative overflow-hidden isolate font-intertight flex flex-col justify-between"
      style={{ backgroundColor: '#070809' }}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="absolute inset-0 pointer-events-none z-0 opacity-4 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:18px_18px]" />

      <Container className="relative z-10 pt-2">
        <div className="w-full border-t border-white/10" />
      </Container>

      {/* MAIN CONTENT AREA */}
      <Container className="relative z-10 my-auto py-8 lg:py-12">
        {/* HEADLINE */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="font-intertight font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase text-white leading-[0.92] tracking-[-0.045em]">
            FROM DEFECT TO <br />
            <span className="text-[#FF4B00]">REFLECTION.</span>
          </h2>
        </div>

        {/* INTERACTIVE BEFORE/AFTER SLIDER CONTAINER */}
        <div
          ref={sliderContainerRef}
          className="relative w-full max-w-[1200px] mx-auto aspect-[16/9] max-h-[70vh] rounded-2xl overflow-hidden border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.8)] select-none cursor-ew-resize group bg-black"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* AFTER IMAGE (FULL UNDERNEATH LAYER) */}
          <img
            src="/images/transformation/trans-after.webp"
            alt="TMR Paint Correction Refined Clearcoat Finish"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-6 right-6 z-10 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full font-intertight text-xs font-extrabold uppercase tracking-widest text-[#FF4B00] border border-[#FF4B00]/40">
            AFTER // TMR CORRECTION
          </div>

          {/* BEFORE IMAGE (CLIPPED OVERLAY LAYER) */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src="/images/transformation/trans-before.webp"
              alt="Vehicle Paint Swirl Marks Defect Clearcoat"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6 z-10 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full font-intertight text-xs font-extrabold uppercase tracking-widest text-white/70 border border-white/15">
              BEFORE // SWIRL DEFECTS
            </div>
          </div>

          {/* DRAGGABLE VERTICAL SLIDER HANDLE LINE */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-[#FF4B00] z-20 cursor-ew-resize shadow-[0_0_15px_rgba(255,75,0,0.8)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FF4B00] text-white flex items-center justify-center font-bold text-xs shadow-lg border-2 border-white">
              ↔
            </div>
          </div>
        </div>
      </Container>

      <Container className="relative z-10 pb-2">
        <div className="w-full border-t border-white/10" />
      </Container>
    </section>
  );
};
