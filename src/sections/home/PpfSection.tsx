import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Container } from '@/components/Container';
import { PpfInteractiveSurface } from './PpfInteractiveSurface';

export const PpfSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);
  const visualWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    // ONE-TIME ELEGANT MOUNT ENTRANCE ANIMATION (NOT SCROLLTRIGGER THEATRE)
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (textGroupRef.current) {
        const textItems = textGroupRef.current.querySelectorAll('.ppf-anim-item');
        tl.fromTo(
          textItems,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 },
          0.1
        );
      }

      if (visualWrapperRef.current) {
        tl.fromTo(
          visualWrapperRef.current,
          { opacity: 0, scale: 1.03 },
          { opacity: 1, scale: 1.00, duration: 0.9 },
          0.2
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ppf-protection"
      className="relative w-full min-h-[100svh] bg-[#070809] text-[#F5F4EF] overflow-hidden border-t border-b border-white/10 selection:bg-[#FF4B00] selection:text-white flex flex-col justify-between py-8 lg:py-12 isolate"
      style={{ backgroundColor: '#070809' }}
    >
      {/* SUBTLE NOISE OVERLAY */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-6 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:18px_18px]" />

      {/* TOP METADATA ROW */}
      <Container className="relative z-20 pt-2">
        <div className="w-full border-t border-white/10 pt-4 flex items-center justify-between font-intertight font-bold text-xs uppercase tracking-[0.14em] text-white">
          <div className="flex items-center gap-2.5">
            <span className="text-[#FF4B00]">03</span>
            <span className="text-white/30">/</span>
            <span>PROTECTION</span>
            <span className="text-white/30">•</span>
            <span className="text-white/60">THE INVISIBLE SHIELD</span>
          </div>
          <span className="text-white/40 tracking-[0.2em] hidden sm:inline-block">
            PAINT PROTECTION FILM // OPTICAL CLEAR
          </span>
        </div>
      </Container>

      {/* MAIN FULLVIEWPORT 12-COLUMN EDGE-TO-EDGE GRID */}
      <Container className="relative z-20 my-auto py-6 lg:py-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center h-full">
          
          {/* LEFT COLUMN: RESTRAINED EDITORIAL COPY GROUP (COLUMNS 1–5 / ~45% WIDTH) */}
          <div ref={textGroupRef} className="lg:col-span-5 space-y-6 max-w-[480px]">
            
            {/* EYEBROW */}
            <div className="ppf-anim-item font-intertight font-extrabold text-[11px] uppercase tracking-[0.22em] text-[#FF4B00]">
              03 // PROTECTION — THE INVISIBLE SHIELD
            </div>

            {/* MAIN HEADLINE */}
            <h2 className="ppf-anim-item font-intertight font-extrabold text-5xl sm:text-7xl lg:text-[80px] uppercase text-white leading-[0.9] tracking-[-0.04em]">
              THE INVISIBLE <br />
              <span className="text-[#FF4B00]">SHIELD.</span>
            </h2>

            {/* EDITORIAL STATEMENT */}
            <p className="ppf-anim-item font-editorial text-lg sm:text-2xl italic text-white/85 leading-tight">
              "Protection you don't notice. Performance you don't compromise."
            </p>

            {/* TECHNICAL DESCRIPTION */}
            <p className="ppf-anim-item font-intertight text-xs sm:text-sm text-white/65 leading-relaxed">
              A precision-engineered transparent polyurethane matrix designed to absorb road debris, stone chips, and environmental contamination while preserving original factory clearcoat depth.
            </p>

            {/* TECHNICAL SPECIFICATION SHEET GRID */}
            <div className="ppf-anim-item pt-4 border-t border-white/10 grid grid-cols-2 gap-4 font-intertight text-xs uppercase tracking-wider">
              <div>
                <span className="block text-[10px] text-white/40 font-bold">MATERIAL</span>
                <span className="font-extrabold text-white text-sm">TPU FILM (8-10 MIL)</span>
              </div>
              <div>
                <span className="block text-[10px] text-white/40 font-bold">PROPERTY</span>
                <span className="font-extrabold text-[#FF4B00] text-sm">SELF-HEALING MATRIX</span>
              </div>
              <div>
                <span className="block text-[10px] text-white/40 font-bold">CLARITY</span>
                <span className="font-extrabold text-white text-sm">OPTICAL ULTRA HIGH GLOSS</span>
              </div>
              <div>
                <span className="block text-[10px] text-white/40 font-bold">DURABILITY</span>
                <span className="font-extrabold text-white text-sm">10-YEAR WARRANTY</span>
              </div>
            </div>

            {/* MICRO TECHNICAL LAYER DIAGRAM */}
            <div className="ppf-anim-item pt-4 border-t border-white/10 space-y-2">
              <div className="text-[10px] font-intertight font-extrabold uppercase tracking-widest text-white/40">
                OPTICAL CROSS-SECTION DIAGRAM
              </div>
              <div className="grid grid-cols-4 gap-1.5 font-intertight text-[9px] font-bold uppercase tracking-wider text-center">
                <div className="py-1.5 px-1 bg-white/5 rounded border border-white/10 text-white/60">ROAD IMPACT</div>
                <div className="py-1.5 px-1 bg-[#FF4B00]/20 rounded border border-[#FF4B00]/40 text-[#FF4B00]">PPF FILM 8 MIL</div>
                <div className="py-1.5 px-1 bg-white/5 rounded border border-white/10 text-white/60">CLEARCOAT</div>
                <div className="py-1.5 px-1 bg-white/5 rounded border border-white/10 text-white/60">PAINT PANEL</div>
              </div>
            </div>

            {/* CTA BUTTON GROUP */}
            <div className="ppf-anim-item pt-2 flex items-center gap-6">
              <Link
                to="/services"
                className="group inline-flex flex-col gap-1 text-xs font-intertight font-extrabold uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  <span>EXPLORE PPF PACKAGES</span>
                  <span className="text-[#FF4B00] group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                </span>
                <span className="h-[1.5px] w-10 group-hover:w-full bg-[#FF4B00] transition-all duration-300" />
              </Link>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-intertight font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
              >
                WHATSAPP TMR
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: DOMINANT INTERACTIVE WEBGL PPF SURFACE (COLUMNS 6–12 / ~55% WIDTH) */}
          <div ref={visualWrapperRef} className="lg:col-span-7 relative w-full h-[52vh] sm:h-[60vh] lg:h-[72vh] flex items-center">
            <PpfInteractiveSurface
              imageSrc="/images/ppf/ppf-hero.webp"
              altText="TMR Paint Protection Film Hydrophobic Interactive Surface"
            />
          </div>

        </div>
      </Container>

      {/* BOTTOM TECHNICAL DIRECTION FOOTER */}
      <Container className="relative z-20 pb-2">
        <div className="w-full border-t border-white/10 pt-3 flex items-center justify-between font-intertight text-[10px] font-bold text-white/40 uppercase tracking-widest">
          <span>HIGH-IMPACT TPU MATRIX // THERMAL RECOVERY</span>
          <span>TMR / AUTOMOTIVE CARE</span>
        </div>
      </Container>
    </section>
  );
};
