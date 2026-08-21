import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/Container';
import { companyData } from '@/data/company';

gsap.registerPlugin(ScrollTrigger);

export const FinalCtaSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const ctaForegroundRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = `https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent(
    'Hello TMR Car Care! I would like to book a consultation or request a detailing quote.'
  )}`;

  useEffect(() => {
    if (!sectionRef.current) return;

    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. UNIFIED FOREGROUND ENTRANCE REVEAL ("ENTIRE CTA COMPOSITION RISES FROM BELOW" OVER FAQ)
      if (ctaForegroundRef.current) {
        gsap.fromTo(
          ctaForegroundRef.current,
          { yPercent: 100 },
          {
            yPercent: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'top top',
              scrub: true,
            },
          }
        );
      }

      // 2. SUBTLE FAQ RECESSION WHILE CTA FOREGROUND RISES
      const faqSection = document.getElementById('faq-section');
      if (faqSection) {
        gsap.fromTo(
          faqSection,
          { scale: 1, y: 0 },
          {
            scale: 0.985,
            y: -15,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'top top',
              scrub: true,
            },
          }
        );
      }

      // 3. CONTENT FADE & STAGGERED ENTRANCE TIMELINE
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: 'power3.out' },
      });

      if (contentRef.current) {
        const items = contentRef.current.querySelectorAll('.cta-anim-item');
        tl.fromTo(
          items,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.75, stagger: 0.08 },
          0
        );
      }

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'bottom 20%',
        onEnter: () => {
          tl.restart();
          if (videoRef.current && videoRef.current.paused) {
            videoRef.current.play().catch(() => {});
          }
        },
        onEnterBack: () => {
          tl.restart();
          if (videoRef.current && videoRef.current.paused) {
            videoRef.current.play().catch(() => {});
          }
        },
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
      className="w-full min-h-[100svh] h-[100svh] bg-[#050505] text-[#F5F4EF] border-t border-b border-white/10 relative overflow-hidden isolate font-intertight z-20"
      style={{ backgroundColor: '#050505' }}
    >
      {/* UNIFIED CTA FOREGROUND LAYER (VIDEO + OVERLAY + TEXT CONTENT + METADATA) */}
      <div
        ref={ctaForegroundRef}
        className="relative w-full h-full min-h-[100svh] flex flex-col justify-between overflow-hidden"
      >
        {/* 4K FULL BLEED CINEMATIC VIDEO BACKGROUND */}
        <div className="absolute inset-0 z-0 overflow-hidden w-full h-full pointer-events-none">
          <video
            ref={videoRef}
            src="/videos/cta/cta-cinematic.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover object-center scale-105"
          />

          {/* SUBTLE CINEMATIC READABILITY GRADIENT OVERLAY (KEEPING VIDEO DOMINANT) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/25 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent z-10 pointer-events-none" />
        </div>

        {/* REFINED EDITORIAL CONVERTING CONTENT CONTAINER */}
        <Container className="relative z-20 max-w-[1380px] mx-auto w-full h-full flex flex-col justify-between py-12 md:py-16">
          {/* TOP SPACE HOLDER */}
          <div className="w-full h-8" />

          {/* LOWER-LEFT EDITORIAL CONVERTING TEXT COMPOSITION */}
          <div ref={contentRef} className="w-full max-w-[700px] space-y-6 text-left my-auto pt-16 md:pt-24 pl-0 sm:pl-4">
            {/* EYEBROW */}
            <div className="cta-anim-item flex items-center gap-3 font-intertight font-extrabold text-[11px] uppercase tracking-[0.22em] text-[#FF4B00]">
              <span className="w-8 h-[1.5px] bg-[#FF4B00]" />
              <span>FINAL STEP // TMR CAR CARE</span>
            </div>

            {/* EDITORIAL RESTRAINED HEADLINE */}
            <h2 className="cta-anim-item font-intertight font-extrabold text-4xl sm:text-6xl lg:text-[72px] uppercase text-white leading-[0.90] tracking-[-0.03em] max-w-[620px] text-left">
              THE FINISH MATTERS<span className="text-[#FF4B00]">.</span>
            </h2>

            {/* ONE SHORT SUPPORTING SENTENCE */}
            <p className="cta-anim-item font-intertight text-sm sm:text-base text-white/75 font-medium leading-relaxed max-w-[440px] text-left">
              Precision care for the vehicle you care about.
            </p>

            {/* CONVERSIONS: ARCHITECTURAL PRIMARY CTA & SECONDARY LINK */}
            <div className="cta-anim-item pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-6 font-intertight">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[#FF4B00] text-white font-extrabold text-xs uppercase tracking-widest px-8 h-[54px] rounded-[14px] border border-white/20 hover:bg-white hover:text-black transition-all duration-300 shadow-[0_8px_24px_rgba(255,75,0,0.35)] hover:-translate-y-0.5"
              >
                <span>BOOK A CONSULTATION</span>
                <span className="group-hover:translate-x-1.5 transition-transform">↗</span>
              </a>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(companyData.address.fullText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-white/70 hover:text-white transition-colors py-2"
              >
                <span>GET DIRECTIONS</span>
                <span className="text-[#FF4B00] group-hover:translate-x-1 transition-transform">↗</span>
              </a>
            </div>
          </div>

          {/* BOTTOM METADATA STRIP */}
          <div className="cta-anim-item w-full pt-6 border-t border-white/15 flex items-center justify-between text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/50 relative z-20">
            <span>TMR / TIRUPPUR STUDIO</span>
            <span className="hidden sm:inline">PRECISION / PROTECTION / PERFECTION</span>
            <span>EST. 2024</span>
          </div>
        </Container>
      </div>
    </section>
  );
};
