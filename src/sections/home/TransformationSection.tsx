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
      className="relative w-full min-h-[100svh] bg-[#F3F0EA] text-[#111111] overflow-hidden border-t border-b border-black/10 selection:bg-[#FF4B00] selection:text-white py-10 lg:py-16 flex flex-col justify-center isolate font-intertight"
      style={{ backgroundColor: '#F3F0EA' }}
    >
      {/* SUBTLE FINE NOISE & WARM TECHNICAL GRID TEXTURE */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-4 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:18px_18px]" />

      {/* MAIN CONTENT COMPOSITION */}
      <Container className="relative z-20 my-auto py-6 lg:py-8 space-y-8">
        {/* EDITORIAL HEADER GROUP */}
        <div ref={textGroupRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="trans-anim-item font-intertight font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase text-[#111111] leading-[0.92] tracking-[-0.04em]">
              FROM <br />
              DEFECT <br />
              TO <span className="text-[#FF4B00]">REFLECTION.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4 lg:pb-2">
            <p className="trans-anim-item font-editorial text-lg sm:text-2xl italic text-[#333333] leading-tight">
              "Every correction starts with seeing what the surface is actually doing."
            </p>
            <div className="trans-anim-item flex items-center gap-6 font-intertight">
              <Link
                to="/gallery"
                className="group inline-flex flex-col gap-1 text-xs font-extrabold uppercase tracking-widest text-[#111111] hover:text-[#FF4B00] transition-colors"
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
    </section>
  );
};
