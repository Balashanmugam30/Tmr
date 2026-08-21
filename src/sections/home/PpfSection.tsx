import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/Container';
import { companyData } from '@/data/company';

gsap.registerPlugin(ScrollTrigger);

export const PpfSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = `https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent(
    'Hello TMR Car Care! I would like to inquire about Paint Protection Film (PPF) packages for my vehicle.'
  )}`;

  useEffect(() => {
    if (!sectionRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: 'power3.out' },
      });

      if (visualRef.current) {
        tl.fromTo(
          visualRef.current,
          { opacity: 0, scale: 1.04, y: 24 },
          { opacity: 1, scale: 1.00, y: 0, duration: 0.9 },
          0
        );
      }

      if (textGroupRef.current) {
        const textItems = textGroupRef.current.querySelectorAll('.ppf-editorial-item');
        tl.fromTo(
          textItems,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.08 },
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
      id="ppf-matrix"
      className="w-full bg-[#050505] text-[#F5F4EF] overflow-hidden relative z-30 min-h-screen py-12 md:py-20 flex flex-col justify-between border-t border-b border-white/10 isolate"
      style={{ backgroundColor: '#050505' }}
    >
      <div className="absolute inset-0 pointer-events-none z-10 opacity-5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:18px_18px]" />

      <Container className="relative z-20 pt-2">
        <div className="w-full border-t border-white/10" />
      </Container>

      {/* MAIN EDITORIAL COMPOSITION (ASYMMETRICAL 12-COLUMN LAYOUT) */}
      <Container className="relative z-20 my-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT / HERO CAMPAIGN VISUAL (COLUMNS 1–7) */}
          <div className="lg:col-span-7 relative w-full flex justify-start order-2 lg:order-1">
            <div
              ref={visualRef}
              className="relative w-full aspect-[16/10] max-h-[75vh] overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.8)] group bg-black"
            >
              <img
                src="/images/ppf/ppf-hero.webp"
                alt="TMR Paint Protection Film (PPF) Self-Healing Optical Clarity Installation"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              <div className="absolute bottom-6 left-6 flex items-center gap-3 pointer-events-none font-intertight">
                <span className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
                  ULTRA-CLEAR ALIPHATIC TPU MATRIX // PPF
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT / RESTRAINED EDITORIAL COPY GROUP (COLUMNS 8–12) */}
          <div ref={textGroupRef} className="lg:col-span-5 space-y-6 max-w-[440px] order-1 lg:order-2">
            {/* MAIN HEADLINE */}
            <h2 className="ppf-editorial-item font-intertight font-extrabold text-4xl sm:text-6xl uppercase text-white leading-[0.92] tracking-[-0.04em]">
              THE INVISIBLE <br />
              <span className="text-[#FF4B00]">SHIELD.</span>
            </h2>

            {/* SHORT EDITORIAL STATEMENT */}
            <p className="ppf-editorial-item font-editorial text-lg sm:text-2xl italic text-white/85 leading-tight">
              "Protection you don't notice. Performance that stays."
            </p>

            {/* RESTRAINED CTA BUTTONS */}
            <div className="ppf-editorial-item pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                to="/services"
                className="group inline-flex flex-col gap-1 text-xs font-intertight font-extrabold uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  <span>EXPLORE PPF</span>
                  <span className="text-[#FF4B00] group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                </span>
                <span className="h-[1.5px] w-10 group-hover:w-full bg-[#FF4B00] transition-all duration-300" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-col gap-1 text-xs font-intertight font-extrabold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  <span>WHATSAPP TMR</span>
                  <span className="text-[#FF4B00] group-hover:translate-x-1 transition-transform duration-300">↗</span>
                </span>
                <span className="h-[1.5px] w-0 group-hover:w-full bg-white transition-all duration-300" />
              </a>
            </div>

            {/* FEATURE BADGES ROW */}
            <div className="ppf-editorial-item pt-6 border-t border-white/10 grid grid-cols-3 gap-4 font-intertight text-xs uppercase tracking-wider">
              <div>
                <span className="block text-[10px] text-white/40 font-bold">PROPERTIES</span>
                <span className="font-extrabold text-white text-xs sm:text-sm">SELF-HEALING</span>
              </div>
              <div>
                <span className="block text-[10px] text-white/40 font-bold">CLARITY</span>
                <span className="font-extrabold text-[#FF4B00] text-xs sm:text-sm">HIGH OPTICAL</span>
              </div>
              <div>
                <span className="block text-[10px] text-white/40 font-bold">DEFENSE</span>
                <span className="font-extrabold text-white text-xs sm:text-sm">IMPACT COAT</span>
              </div>
            </div>

          </div>

        </div>
      </Container>

      <Container className="relative z-20 pb-2">
        <div className="w-full border-t border-white/10" />
      </Container>
    </section>
  );
};
