import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Container } from '@/components/Container';
import { BeforeAfterReveal } from './BeforeAfterReveal';

export const TransformationSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);
  const revealWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (textGroupRef.current) {
        const textItems = textGroupRef.current.querySelectorAll('.trans-anim-item');
        tl.fromTo(
          textItems,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 },
          0.1
        );
      }

      if (revealWrapperRef.current) {
        tl.fromTo(
          revealWrapperRef.current,
          { opacity: 0, scale: 1.02 },
          { opacity: 1, scale: 1.00, duration: 0.85 },
          0.2
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="transformation"
      className="relative w-full min-h-[100svh] bg-[#080909] text-[#F5F4EF] overflow-hidden border-t border-b border-white/10 selection:bg-[#FF4B00] selection:text-white py-10 lg:py-16 flex flex-col justify-between isolate font-intertight"
      style={{ backgroundColor: '#080909' }}
    >
      {/* SUBTLE FINE NOISE & TECHNICAL GRID BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-6 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:18px_18px]" />

      {/* TOP METADATA ROW */}
      <Container className="relative z-20 pt-2">
        <div className="w-full border-t border-white/10 pt-4 flex items-center justify-between font-intertight font-bold text-xs uppercase tracking-[0.14em] text-white">
          <div className="flex items-center gap-2.5">
            <span className="text-[#FF4B00]">05</span>
            <span className="text-white/30">/</span>
            <span>RESULT</span>
          </div>
          <span className="text-white/40 tracking-[0.2em] hidden sm:inline-block">
            PAINT CORRECTION // FINAL SURFACE
          </span>
        </div>
      </Container>

      {/* MAIN CONTENT COMPOSITION */}
      <Container className="relative z-20 my-auto py-6 lg:py-8 space-y-8">
        {/* EDITORIAL HEADER GROUP */}
        <div ref={textGroupRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-6 space-y-4">
            <div className="trans-anim-item font-intertight font-extrabold text-[11px] uppercase tracking-[0.22em] text-[#FF4B00]">
              05 // TRANSFORMATION
            </div>
            <h2 className="trans-anim-item font-intertight font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase text-white leading-[0.92] tracking-[-0.04em]">
              FROM <br />
              DEFECT <br />
              TO <span className="text-[#FF4B00]">REFLECTION.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4 lg:pb-2">
            <p className="trans-anim-item font-editorial text-lg sm:text-2xl italic text-white/85 leading-tight">
              "Every correction starts with seeing what the surface is actually doing."
            </p>
            <div className="trans-anim-item flex items-center gap-6 font-intertight">
              <Link
                to="/gallery"
                className="group inline-flex flex-col gap-1 text-xs font-extrabold uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  <span>SEE OUR WORK</span>
                  <span className="text-[#FF4B00] group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                </span>
                <span className="h-[1.5px] w-10 group-hover:w-full bg-[#FF4B00] transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* DOMINANT DRAGGABLE BEFORE/AFTER REVEAL SLIDER */}
        <div ref={revealWrapperRef} className="w-full">
          <BeforeAfterReveal
            beforeImage="/images/transformation/before.webp"
            afterImage="/images/transformation/after.webp"
            beforeLabel="BEFORE / PAINT DEFECTS"
            afterLabel="AFTER / HIGH GLOSS"
          />
        </div>
      </Container>

      {/* BOTTOM TECHNICAL RESULT METRICS FOOTER */}
      <Container className="relative z-20 pb-2">
        <div className="w-full border-t border-white/10 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-intertight text-[10px] font-bold text-white/40 uppercase tracking-widest">
          <div className="flex items-center gap-4 sm:gap-6 text-white/70">
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#FF4B00]" />
              <span>PAINT CORRECTION: MULTI-STAGE</span>
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#FF4B00]" />
              <span>SURFACE: RESTORED</span>
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#FF4B00]" />
              <span>FINISH: MIRROR SPECULAR GLOSS</span>
            </span>
          </div>

          <div>TMR / AUTOMOTIVE CARE</div>
        </div>
      </Container>
    </section>
  );
};
