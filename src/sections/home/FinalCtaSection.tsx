import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/Container';
import { companyData } from '@/data/company';

gsap.registerPlugin(ScrollTrigger);

export const FinalCtaSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const rightDetailRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = `https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent(
    'Hello TMR Car Care! I would like to book a consultation or request a detailing quote.'
  )}`;

  useEffect(() => {
    if (!sectionRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      // ENTRANCE TIMELINE
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: 'power3.out' },
      });

      if (contentRef.current) {
        const items = contentRef.current.querySelectorAll('.cta-anim-item');
        tl.fromTo(
          items,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 },
          0
        );
      }

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 82%',
        end: 'bottom 20%',
        onEnter: () => tl.restart(),
        onEnterBack: () => tl.restart(),
        onLeave: () => tl.pause(0),
        onLeaveBack: () => tl.pause(0),
      });

      // SUBTLE MOUSE PARALLAX ON RIGHT TECHNICAL DETAIL (MAX 4px MOVEMENT)
      const handleMouseMove = (e: MouseEvent) => {
        if (!rightDetailRef.current || !sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(rightDetailRef.current, {
          x: x * 8,
          y: y * 8,
          duration: 0.6,
          ease: 'power2.out',
        });
      };

      const sectionEl = sectionRef.current;
      if (sectionEl) {
        sectionEl.addEventListener('mousemove', handleMouseMove);
      }

      return () => {
        if (sectionEl) {
          sectionEl.removeEventListener('mousemove', handleMouseMove);
        }
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="final-cta"
      className="w-full min-h-[100svh] h-[100svh] bg-[#050505] text-[#F5F4EF] border-t border-b border-white/10 relative overflow-hidden isolate font-intertight flex flex-col justify-between"
      style={{ backgroundColor: '#050505' }}
    >
      {/* SUBTLE FINE NOISE & MICRO-GRID TEXTURE */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-4 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <Container className="relative z-10 max-w-[1380px] mx-auto w-full h-full flex flex-col justify-between py-12 md:py-16">
        
        {/* ASYMMETRICAL 55/45 MAIN BODY CONTAINER */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end my-auto w-full pt-12 md:pt-16">
          
          {/* LEFT ~55%: EDITORIAL ATELIER HEADLINE & CONVERSIONS */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* EYEBROW */}
            <div className="cta-anim-item flex items-center gap-3 font-intertight font-extrabold text-[11px] uppercase tracking-[0.22em] text-[#FF4B00]">
              <span className="w-8 h-[1.5px] bg-[#FF4B00]" />
              <span>10 // FINAL DECISION</span>
            </div>

            {/* EDITORIAL HEADLINE */}
            <h2 className="cta-anim-item font-intertight font-extrabold text-5xl sm:text-7xl lg:text-[88px] xl:text-[100px] uppercase text-white leading-[0.88] tracking-[-0.03em] max-w-[760px] text-left">
              YOUR VEHICLE.<br />
              OUR <span className="text-[#FF4B00]">STANDARD.</span>
            </h2>

            {/* RESTRAINED SUPPORTING COPY */}
            <p className="cta-anim-item font-intertight text-sm sm:text-base text-white/55 font-medium leading-relaxed max-w-[480px] text-left">
              Precision automotive care, engineered around your vehicle, its surface and the finish it deserves.
            </p>

            {/* CONVERSIONS: ARCHITECTURAL PRIMARY CTA & SECONDARY LINK */}
            <div className="cta-anim-item pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-6 font-intertight">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[#FF4B00] text-white font-extrabold text-xs uppercase tracking-widest px-8 h-[56px] rounded-[14px] border border-white/20 hover:bg-white hover:text-black transition-all duration-300 shadow-[0_8px_24px_rgba(255,75,0,0.3)] hover:-translate-y-0.5"
              >
                <span>BOOK A CONSULTATION</span>
                <span className="group-hover:translate-x-1.5 transition-transform">↗</span>
              </a>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(companyData.address.fullText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-white/60 hover:text-white transition-colors py-2"
              >
                <span>GET DIRECTIONS</span>
                <span className="text-[#FF4B00] group-hover:translate-x-1 transition-transform">↗</span>
              </a>
            </div>

          </div>

          {/* RIGHT ~45%: QUIET NEGATIVE SPACE + TECHNICAL STUDIO SIGNATURE */}
          <div className="lg:col-span-5 hidden lg:flex flex-col items-end justify-end text-right pb-2">
            <div ref={rightDetailRef} className="cta-anim-item space-y-4 max-w-[280px] text-right">
              
              <div className="flex items-center justify-end gap-2 text-right">
                <span className="w-2 h-2 rounded-full bg-[#FF4B00] animate-ping" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#FF4B00]">TMR / STUDIO</span>
              </div>

              {/* LIVING HORIZONTAL ACCENT LINE */}
              <div className="w-full h-[1px] bg-white/12 relative overflow-hidden my-2">
                <div className="absolute inset-y-0 w-12 bg-gradient-to-r from-transparent via-[#FF4B00] to-transparent animate-[pulse_4s_infinite]" />
              </div>

              <div className="text-[11px] font-mono tracking-wider text-white/45 space-y-1">
                <p>11.1085° N // 77.3411° E</p>
                <p className="text-[10px] font-extrabold uppercase text-white/65 tracking-widest">TIRUPPUR, TAMIL NADU</p>
              </div>

              <div className="pt-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-white/35">
                PRECISION / PROTECTION / PERFECTION
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM METADATA STRIP */}
        <div className="cta-anim-item w-full pt-6 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/40">
          <span>TMR / TIRUPPUR STUDIO</span>
          <span className="hidden sm:inline">PRECISION / PROTECTION / PERFECTION</span>
          <span>EST. 2024</span>
        </div>

      </Container>
    </section>
  );
};
