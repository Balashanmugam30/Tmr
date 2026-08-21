import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/Container';
import { companyData } from '@/data/company';

gsap.registerPlugin(ScrollTrigger);

export const FinalCtaSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
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
      // SIMPLE CONTENT ENTRANCE TIMELINE (NORMAL STATIC SECTION REVEAL, NO SECTION TRANSLATION)
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: 'power3.out' },
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
        start: 'top 75%',
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
      className="w-full min-h-[100svh] h-[100svh] bg-[#050505] text-[#F5F4EF] border-t border-b border-white/10 relative overflow-hidden isolate font-intertight flex flex-col justify-center z-20"
      style={{ backgroundColor: '#050505' }}
    >
      {/* 4K FULL BLEED CINEMATIC VIDEO BACKGROUND (STATIC VIEWPORT FIT) */}
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

        {/* LIGHTENED READABILITY GRADIENT OVERLAYS (BRIGHTER, VIBRANT CINEMATIC VIDEO) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/10 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/15 to-transparent z-10 pointer-events-none" />
      </div>

      {/* REFINED EDITORIAL CONVERTING CONTENT CONTAINER */}
      <Container className="relative z-20 max-w-[1380px] mx-auto w-full h-full flex flex-col justify-center py-12 md:py-16">
        {/* LOWER-LEFT EDITORIAL CONVERTING TEXT COMPOSITION */}
        <div ref={contentRef} className="w-full max-w-[700px] space-y-6 text-left my-auto pl-0 sm:pl-4">
          {/* EDITORIAL RESTRAINED HEADLINE */}
          <h2 className="cta-anim-item font-intertight font-extrabold text-4xl sm:text-6xl lg:text-[72px] uppercase text-white leading-[0.90] tracking-[-0.03em] max-w-[620px] text-left">
            THE FINISH MATTERS<span className="text-[#FF4B00]">.</span>
          </h2>

          {/* ONE SHORT SUPPORTING SENTENCE */}
          <p className="cta-anim-item font-intertight text-sm sm:text-base text-white/80 font-medium leading-relaxed max-w-[440px] text-left">
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
              className="group inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-white/80 hover:text-white transition-colors py-2"
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
