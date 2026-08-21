import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/Container';
import { companyData } from '@/data/company';

gsap.registerPlugin(ScrollTrigger);

export const FinalCtaSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = `https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent(
    'Hello TMR Car Care! I would like to book a consultation or request a detailing quote.'
  )}`;

  useEffect(() => {
    if (!sectionRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: 'power4.out' },
      });

      if (contentRef.current) {
        const items = contentRef.current.querySelectorAll('.finalcta-anim-item');
        tl.fromTo(
          items,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.85, stagger: 0.1 },
          0
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
      id="final-cta"
      className="w-full py-20 md:py-32 bg-[#080909] text-[#F5F4EF] border-t border-b border-white/10 relative overflow-hidden isolate font-intertight flex flex-col justify-between"
      style={{ backgroundColor: '#080909' }}
    >
      {/* SUBTLE NOISE & ATMOSPHERIC GLOW */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-6 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:18px_18px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF4B00]/10 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* TOP ARCHITECTURAL METADATA ROW */}
      <Container className="relative z-20 pt-2">
        <div className="w-full border-t border-white/10 pt-4 flex items-center justify-between font-intertight font-bold text-xs uppercase tracking-[0.14em] text-white">
          <div className="flex items-center gap-2.5">
            <span className="text-[#FF4B00]">10</span>
            <span className="text-white/30">/</span>
            <span>FINAL DECISION</span>
          </div>
          <span className="text-white/40 tracking-[0.2em] hidden sm:inline-block">
            TMR STUDIO // TIRUPPUR, TAMIL NADU
          </span>
        </div>
      </Container>

      {/* MAIN EDITORIAL CTA INVITATION */}
      <Container className="relative z-20 my-auto py-12 md:py-16">
        <div ref={contentRef} className="max-w-[1000px] space-y-8">
          
          {/* EYEBROW */}
          <div className="finalcta-anim-item font-intertight font-extrabold text-[11px] uppercase tracking-[0.22em] text-[#FF4B00]">
            PRECISION AUTOMOTIVE CARE — TIRUPPUR, TAMIL NADU
          </div>

          {/* MAIN HEADLINE */}
          <h2 className="finalcta-anim-item font-intertight font-extrabold text-5xl sm:text-7xl lg:text-[110px] uppercase text-white leading-[0.85] tracking-[-0.04em]">
            YOUR CAR <br />
            DESERVES <span className="text-[#FF4B00]">BETTER.</span>
          </h2>

          {/* ACTIONS */}
          <div className="finalcta-anim-item pt-4 flex flex-wrap items-center gap-8 font-intertight">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#FF4B00] text-white font-extrabold text-xs uppercase tracking-[0.18em] px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-[0_10px_30px_rgba(255,75,0,0.3)]"
            >
              <span>BOOK A CONSULTATION</span>
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </a>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(companyData.address.fullText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white/70 hover:text-white transition-colors"
            >
              <span>GET DIRECTIONS</span>
              <span className="text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">↗</span>
            </a>
          </div>

        </div>
      </Container>

      {/* BOTTOM TECHNICAL LINE */}
      <Container className="relative z-20 pb-2">
        <div className="w-full border-t border-white/10 pt-4 flex items-center justify-between font-intertight text-[10px] font-bold text-white/40 uppercase tracking-widest">
          <span>TMR / TIRUPPUR</span>
          <span>PRECISION / PROTECTION / PERFECTION</span>
        </div>
      </Container>
    </section>
  );
};
