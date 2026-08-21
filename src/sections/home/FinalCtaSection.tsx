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
        const items = contentRef.current.querySelectorAll('.cta-anim-item');
        tl.fromTo(
          items,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 },
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="final-cta"
      className="w-full min-h-[45vh] py-16 md:py-24 bg-[#050505] text-[#F5F4EF] border-t border-b border-white/10 relative overflow-hidden isolate font-intertight flex flex-col justify-center"
      style={{ backgroundColor: '#050505' }}
    >
      {/* SUBTLE NOISE OVERLAY */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:18px_18px]" />

      <Container className="relative z-20">
        <div ref={contentRef} className="max-w-[760px] space-y-6">
          
          {/* EYEBROW & ACCENT LINE */}
          <div className="cta-anim-item flex items-center gap-3 font-intertight font-extrabold text-[11px] uppercase tracking-[0.22em] text-[#FF4B00]">
            <span className="w-10 h-[1.5px] bg-[#FF4B00]" />
            <span>FINAL STEP // TMR CAR CARE</span>
          </div>

          {/* HEADLINE */}
          <h2 className="cta-anim-item font-intertight font-extrabold text-3xl sm:text-5xl lg:text-[64px] uppercase text-white leading-[0.92] tracking-[-0.03em]">
            READY FOR THE <br />
            <span className="text-[#FF4B00]">TMR STANDARD?</span>
          </h2>

          {/* CONCISE SUPPORTING SENTENCE */}
          <p className="cta-anim-item font-intertight text-xs sm:text-sm text-white/70 max-w-[540px] leading-relaxed">
            Precision automotive care for vehicles that deserve the right environment, process and finish.
          </p>

          {/* ACTION BUTTONS */}
          <div className="cta-anim-item pt-2 flex flex-wrap items-center gap-6 font-intertight">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 bg-[#FF4B00] text-white font-extrabold text-xs uppercase tracking-widest px-7 py-3.5 rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-md"
            >
              <span>BOOK A CONSULTATION</span>
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </a>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(companyData.address.fullText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            >
              <span>GET DIRECTIONS</span>
              <span className="text-[#FF4B00] group-hover:translate-x-1 transition-transform">↗</span>
            </a>
          </div>

        </div>
      </Container>
    </section>
  );
};
