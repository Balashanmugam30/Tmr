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
          { opacity: 0.85, scale: 1.025 },
          { opacity: 1, scale: 1.0, duration: 1.0 },
          0
        );
      }

      if (contentRef.current) {
        const items = contentRef.current.querySelectorAll('.showroom-anim-item');
        tl.fromTo(
          items,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 },
          0.1
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
      id="flagship-studio"
      className="relative w-full min-h-[90svh] h-[90svh] bg-[#070809] text-[#F5F4EF] overflow-hidden border-t border-b border-white/10 selection:bg-[#FF4B00] selection:text-white flex flex-col justify-center isolate font-intertight scroll-mt-24"
      style={{ backgroundColor: '#070809' }}
    >
      {/* 1. REAL STOREFRONT PHOTOGRAPHY AS FULL-BLEED BACKGROUND */}
      <img
        ref={imageRef}
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrGobyku5YJCXyB2Rc0aowUUYUcvOsUHhFFYxg9qCACu7gFr-kFiwSKAx0hYp8qMGzf_D70GQMVNwX_SjbhsUI5NF9dEQPxxVHoUUsrqWESfHMzjz6XchhOZAAsG__azrHGdukeQWWcGpC7yfuCkaJ1GXFeOgV5pJMK2CLlynLo_QnKbd6Hp1BqYHhfwoeYoxHWhDlv-0pLT1VzFIAKoy1Kf8vooQeryIOsNaeWKFpFBZVQZO8MTA3"
        alt="TMR Car Care studio exterior in Tiruppur"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-1000 ease-out pointer-events-none"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="900" viewBox="0 0 1920 900"><rect width="1920" height="900" fill="%23070809"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="32" fill="%23FF4B00">TMR TIRUPPUR STUDIO FACILITY</text></svg>`;
        }}
      />

      {/* DARK CINEMATIC GRADIENT OVERLAYS FOR CRISP READABILITY & ATMOSPHERE */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070809] via-black/40 to-[#070809]/70 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070809]/95 via-[#070809]/60 to-transparent pointer-events-none z-10 w-full lg:w-8/12" />

      {/* 2. REFINED EDITORIAL LOCATION TEXT BLOCK (COMPACT, LOWER-LEFT VIEWPORT) */}
      <Container className="relative z-20 my-auto py-6 lg:py-8">
        <div ref={contentRef} className="max-w-[560px] space-y-5">
          
          {/* MAIN HEADLINE */}
          <h2 className="showroom-anim-item font-intertight font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase text-white leading-[0.88] tracking-[-0.04em]">
            COME SEE <br />
            THE <span className="text-[#FF4B00]">DIFFERENCE.</span>
          </h2>

          {/* EDITORIAL SUBTITLE */}
          <p className="showroom-anim-item font-editorial text-2xl sm:text-3xl italic text-[#FF4B00]">
            Our Tiruppur Studio.
          </p>

          {/* ONE COMPACT ADDRESS LINE */}
          <p className="showroom-anim-item font-intertight text-xs sm:text-sm text-white/80 font-semibold leading-relaxed max-w-[440px] pt-1">
            {companyData.address.fullText}
          </p>

          {/* PRIMARY & SECONDARY ACTION LINKS */}
          <div className="showroom-anim-item pt-3 flex items-center gap-8 font-intertight">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(companyData.address.fullText)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get Google Maps driving directions to TMR Car Care studio in Tiruppur"
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
    </section>
  );
};
