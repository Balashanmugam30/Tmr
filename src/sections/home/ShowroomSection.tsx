import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/Container';
import { companyData } from '@/data/company';

gsap.registerPlugin(ScrollTrigger);

export const ShowroomSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: 'power4.out' },
      });

      if (imageRef.current) {
        tl.fromTo(
          imageRef.current,
          { opacity: 0.8, scale: 1.04 },
          { opacity: 1, scale: 1.0, duration: 1.1 },
          0
        );
      }

      if (contentRef.current) {
        const items = contentRef.current.querySelectorAll('.showroom-anim-item');
        tl.fromTo(
          items,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.75, stagger: 0.08 },
          0.15
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
      id="showroom-location"
      className="relative w-full min-h-[90svh] h-[90svh] bg-[#070809] text-[#F5F4EF] overflow-hidden border-t border-b border-white/10 selection:bg-[#FF4B00] selection:text-white flex flex-col justify-between py-8 lg:py-12 isolate font-intertight"
      style={{ backgroundColor: '#070809' }}
    >
      {/* 1. REAL STOREFRONT PHOTOGRAPHY AS FULL-BLEED BACKGROUND */}
      <img
        ref={imageRef}
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrGobyku5YJCXyB2Rc0aowUUYUcvOsUHhFFYxg9qCACu7gFr-kFiwSKAx0hYp8qMGzf_D70GQMVNwX_SjbhsUI5NF9dEQPxxVHoUUsrqWESfHMzjz6XchhOZAAsG__azrHGdukeQWWcGpC7yfuCkaJ1GXFeOgV5pJMK2CLlynLo_QnKbd6Hp1BqYHhfwoeYoxHWhDlv-0pLT1VzFIAKoy1Kf8vooQeryIOsNaeWKFpFBZVQZO8MTA3"
        alt="TMR Car Care studio exterior in Tiruppur"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-1000 ease-out"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="900" viewBox="0 0 1920 900"><rect width="1920" height="900" fill="%23070809"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="32" fill="%23FF4B00">TMR TIRUPPUR STUDIO FACILITY</text></svg>`;
        }}
      />

      {/* DARK CINEMATIC VIGNETTE & GRADIENT OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070809] via-black/50 to-[#070809]/80 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070809]/90 via-[#070809]/60 to-transparent pointer-events-none z-10 w-full lg:w-8/12" />

      {/* 2. TOP ARCHITECTURAL METADATA ROW */}
      <Container className="relative z-20 pt-2">
        <div className="w-full border-t border-white/10 pt-4 flex items-center justify-between font-intertight font-bold text-xs uppercase tracking-[0.14em] text-white">
          <div className="flex items-center gap-2.5">
            <span className="text-[#FF4B00]">08</span>
            <span className="text-white/30">/</span>
            <span>TIRUPPUR STUDIO</span>
            <span className="w-2 h-2 rounded-full bg-[#FF4B00] animate-pulse ml-1" />
          </div>
          <span className="text-white/40 tracking-[0.2em] hidden sm:inline-block">
            AVINASHI ROAD // TIRUPPUR
          </span>
        </div>
      </Container>

      {/* 3. INTEGRATED EDITORIAL LOCATION BLOCK (ANCHORED IN LOWER VIEWPORT) */}
      <Container className="relative z-20 my-auto py-6 lg:py-8">
        <div ref={contentRef} className="max-w-[620px] space-y-6">
          
          {/* EYEBROW */}
          <div className="showroom-anim-item font-intertight font-extrabold text-[11px] uppercase tracking-[0.22em] text-[#FF4B00]">
            08 // THE PHYSICAL DESTINATION
          </div>

          {/* MAIN HEADLINE */}
          <h2 className="showroom-anim-item font-intertight font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase text-white leading-[0.88] tracking-[-0.04em]">
            COME SEE <br />
            THE <span className="text-[#FF4B00]">DIFFERENCE.</span>
          </h2>

          {/* ACCENT TAGLINE */}
          <p className="showroom-anim-item font-editorial text-2xl sm:text-3xl italic text-[#FF4B00]">
            Our Tiruppur Studio
          </p>

          {/* ADDRESS & CONTACT BLOCK */}
          <div className="showroom-anim-item pt-2 border-t border-white/10 space-y-2 text-xs sm:text-sm text-white/80 font-intertight">
            <p className="font-semibold leading-relaxed max-w-[440px]">
              {companyData.address.fullText}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-[11px] font-bold text-white/50 tracking-wider uppercase pt-1">
              <span>PHONE: {companyData.contact.phoneFormatted}</span>
              <span>•</span>
              <span>MON — SAT: 09:00 — 20:00</span>
            </div>
          </div>

          {/* EDITORIAL CTA BUTTONS */}
          <div className="showroom-anim-item pt-4 flex items-center gap-8 font-intertight">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(companyData.address.fullText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-col gap-1 text-xs font-extrabold uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors"
            >
              <span className="inline-flex items-center gap-2">
                <span>GET DIRECTIONS</span>
                <span className="text-[#FF4B00] group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
              </span>
              <span className="h-[1.5px] w-10 group-hover:w-full bg-[#FF4B00] transition-all duration-300" />
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
            >
              WHATSAPP TMR
            </a>
          </div>

        </div>
      </Container>

      {/* 4. BOTTOM TECHNICAL DIRECTION FOOTER */}
      <Container className="relative z-20 pb-2">
        <div className="w-full border-t border-white/10 pt-4 flex items-center justify-between font-intertight text-[10px] font-bold text-white/40 uppercase tracking-widest">
          <span>TMR / TIRUPPUR STUDIO</span>
          <span>MONDAY — SATURDAY 09:00 — 20:00</span>
        </div>
      </Container>
    </section>
  );
};
