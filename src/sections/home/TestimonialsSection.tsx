import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/Container';

gsap.registerPlugin(ScrollTrigger);

export const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);
  const sideGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: 'power4.out' },
      });

      if (textGroupRef.current) {
        const textItems = textGroupRef.current.querySelectorAll('.proof-anim-item');
        tl.fromTo(
          textItems,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.75, stagger: 0.09 },
          0
        );
      }

      if (sideGroupRef.current) {
        const sideItems = sideGroupRef.current.querySelectorAll('.proof-side-item');
        tl.fromTo(
          sideItems,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.1 },
          0.25
        );
      }

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 78%',
        end: 'bottom 20%',
        onEnter: () => tl.restart(),
        onEnterBack: () => tl.restart(),
        onLeave: () => tl.pause(0),
        onLeaveBack: () => tl.pause(0),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="client-proof"
      className="w-full min-h-[90svh] py-16 md:py-24 bg-[#F3F0EA] text-[#111111] border-t border-b border-black/10 relative overflow-hidden isolate font-intertight flex flex-col justify-between"
      style={{ backgroundColor: '#F3F0EA' }}
    >
      {/* SUBTLE NOISE & FINE GRID OVERLAY */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-4 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:18px_18px]" />

      {/* TOP ARCHITECTURAL METADATA ROW */}
      <Container className="relative z-20 pt-2">
        <div className="w-full border-t border-black/15 pt-4 flex items-center justify-between font-intertight font-bold text-xs uppercase tracking-[0.14em] text-[#111111]">
          <div className="flex items-center gap-2.5">
            <span className="text-[#FF4B00]">07</span>
            <span className="text-black/30">/</span>
            <span>CLIENT PROOF</span>
          </div>
          <span className="text-black/50 tracking-[0.2em] hidden sm:inline-block">
            VERIFIED CLIENT TESTIMONIALS // TIRUPPUR STUDIO
          </span>
        </div>
      </Container>

      {/* MAIN ASYMMETRICAL 12-COLUMN EDITORIAL PROOF COMPOSITION */}
      <Container className="relative z-20 my-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: HERO FEATURED CLIENT PROOF (COLUMNS 1–7 / ~60%) */}
          <div ref={textGroupRef} className="lg:col-span-7 space-y-6">
            
            {/* EYEBROW */}
            <div className="proof-anim-item font-intertight font-extrabold text-[11px] uppercase tracking-[0.22em] text-[#FF4B00]">
              07 // WHAT CLIENTS NOTICE
            </div>

            {/* MAIN HEADLINE */}
            <h2 className="proof-anim-item font-intertight font-extrabold text-4xl sm:text-6xl uppercase text-[#111111] leading-[0.90] tracking-[-0.04em]">
              WHAT CLIENTS <br />
              <span className="text-[#FF4B00]">NOTICE.</span>
            </h2>

            {/* OVERSIZED EDITORIAL QUOTE MARK */}
            <div className="proof-anim-item font-editorial text-7xl sm:text-9xl text-[#FF4B00] leading-none select-none pointer-events-none -mb-8 opacity-80">
              “
            </div>

            {/* HERO FEATURED QUOTE */}
            <blockquote className="proof-anim-item font-editorial italic text-2xl sm:text-4xl lg:text-[44px] leading-[1.12] text-[#111111] max-w-[640px]">
              "The attention to detail at TMR is unmatched. My car looks better than the day it rolled off the showroom floor. True artisans of their craft."
            </blockquote>

            {/* FEATURED CLIENT INITIAL AVATAR & METADATA */}
            <div className="proof-anim-item pt-4 flex items-center gap-4">
              {/* INITIAL AVATAR CIRCLE */}
              <div className="w-12 h-12 rounded-full bg-[#111111] text-white border-2 border-[#FF4B00] flex items-center justify-center font-intertight font-black text-xs tracking-wider shadow-lg shrink-0">
                KR
              </div>

              {/* CLIENT DETAILS */}
              <div className="font-intertight">
                <div className="font-extrabold text-sm text-[#111111] uppercase tracking-wider flex items-center gap-2">
                  <span>Karthik R.</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B00]" />
                  <span className="text-black/50 text-xs font-semibold">TIRUPPUR</span>
                </div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#FF4B00] mt-0.5">
                  RANGE ROVER SV // CERAMIC COATING + PPF
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: SUPPORTING CLIENT PROOF STACK (COLUMNS 8–12 / ~40%) */}
          <div ref={sideGroupRef} className="lg:col-span-5 lg:border-l border-black/15 lg:pl-10 space-y-8">
            
            {/* SUPPORTING ENTRY 1 */}
            <div className="proof-side-item space-y-3 pb-8 border-b border-black/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black/10 text-[#111111] border border-black/15 flex items-center justify-center font-intertight font-black text-[11px] shrink-0">
                  SK
                </div>
                <div>
                  <div className="font-intertight font-extrabold text-xs text-[#111111] uppercase tracking-wider">
                    S. Kumar
                  </div>
                  <div className="font-intertight text-[10px] font-bold text-black/50 uppercase tracking-widest">
                    BMW M340i
                  </div>
                </div>
              </div>

              <p className="font-intertight text-xs sm:text-sm text-[#333333] leading-relaxed">
                "Absolutely flawless ceramic coating job. The gloss is unbelievable and washing it now is a breeze."
              </p>

              <div className="inline-block text-[9px] font-extrabold text-[#FF4B00] tracking-widest uppercase bg-[#FF4B00]/10 px-2.5 py-1 rounded-full border border-[#FF4B00]/20">
                CERAMIC COATING MATRIX
              </div>
            </div>

            {/* SUPPORTING ENTRY 2 */}
            <div className="proof-side-item space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black/10 text-[#111111] border border-black/15 flex items-center justify-center font-intertight font-black text-[11px] shrink-0">
                  AT
                </div>
                <div>
                  <div className="font-intertight font-extrabold text-xs text-[#111111] uppercase tracking-wider">
                    Arvind T.
                  </div>
                  <div className="font-intertight text-[10px] font-bold text-black/50 uppercase tracking-widest">
                    Mercedes-Benz W124
                  </div>
                </div>
              </div>

              <p className="font-intertight text-xs sm:text-sm text-[#333333] leading-relaxed">
                "Professional, punctual, and passionate. The interior restoration brought my classic back to life."
              </p>

              <div className="inline-block text-[9px] font-extrabold text-[#FF4B00] tracking-widest uppercase bg-[#FF4B00]/10 px-2.5 py-1 rounded-full border border-[#FF4B00]/20">
                CLASSIC INTERIOR RESTORATION
              </div>
            </div>

          </div>

        </div>
      </Container>

      {/* BOTTOM TECHNICAL DIRECTION FOOTER */}
      <Container className="relative z-20 pb-2">
        <div className="w-full border-t border-black/15 pt-4 flex items-center justify-between font-intertight text-[10px] font-bold text-black/50 uppercase tracking-widest">
          <span>TMR / CLIENT EXPERIENCE / TIRUPPUR</span>
          <span>EVERY DETAIL IS VERIFIED</span>
        </div>
      </Container>
    </section>
  );
};
