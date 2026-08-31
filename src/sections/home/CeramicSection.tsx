import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/Container';

gsap.registerPlugin(ScrollTrigger);

export const CeramicSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      // PROTECTION EDITORIAL & HERO VISUAL ENTRANCE TIMELINE ONCE SCROLLED INTO VIEWPORT
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
        const textItems = textGroupRef.current.querySelectorAll('.prot-editorial-item');
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
      id="ceramic-coating-refined"
      className="w-full bg-[#070809] text-[#F5F4EF] overflow-hidden relative z-30 min-h-screen py-12 md:py-20 flex flex-col justify-center isolate"
      style={{ opacity: 1, backgroundColor: '#070809' }}
    >
      {/* SUBTLE NOISE OVERLAY */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-6 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:18px_18px]" />

      {/* MAIN CINEMATIC COMPOSITION: LEFT EDITORIAL TEXT (5 COLS) / RIGHT HERO CAMPAIGN VISUAL (7 COLS) */}
      <Container className="relative z-20 my-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT / RESTRAINED EDITORIAL COPY GROUP (COLUMNS 1–5) */}
          <div ref={textGroupRef} className="lg:col-span-5 space-y-6 max-w-[440px]">
            {/* MAIN HEADLINE */}
            <h2 className="prot-editorial-item font-intertight font-extrabold text-4xl sm:text-6xl uppercase text-white leading-[0.92] tracking-[-0.04em]">
              PROTECT <br />
              THE <span className="text-[#FF4B00]">FINISH.</span>
            </h2>

            {/* SHORT EDITORIAL STATEMENT */}
            <p className="prot-editorial-item font-editorial text-lg sm:text-2xl italic text-white/85 leading-tight">
              "Protection begins when the surface clearcoat becomes the standard."
            </p>

            {/* RESTRAINED CTA */}
            <div className="prot-editorial-item pt-2">
              <Link
                to="/services"
                aria-label="Explore TMR 10H ceramic coating packages in Tiruppur"
                className="group inline-flex flex-col gap-1 text-xs font-intertight font-extrabold uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  <span>EXPLORE CERAMIC PACKAGES</span>
                  <span className="text-[#FF4B00] group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                </span>
                <span className="h-[1.5px] w-10 group-hover:w-full bg-[#FF4B00] transition-all duration-300" />
              </Link>
            </div>

            {/* MICRO METRICS ROW */}
            <div className="prot-editorial-item pt-6 border-t border-white/10 grid grid-cols-3 gap-4 font-intertight text-xs uppercase tracking-wider">
              <div>
                <span className="block text-[10px] text-white/40 font-bold">FINISH</span>
                <span className="font-extrabold text-white text-sm">HIGH-GLOSS</span>
              </div>
              <div>
                <span className="block text-[10px] text-white/40 font-bold">HYDROPHOBIC</span>
                <span className="font-extrabold text-[#FF4B00] text-sm">ACTIVE</span>
              </div>
              <div>
                <span className="block text-[10px] text-white/40 font-bold">PROTECTION</span>
                <span className="font-extrabold text-white text-sm">LONG-TERM</span>
              </div>
            </div>

          </div>

          {/* RIGHT / DOMINANT HERO CAMPAIGN VISUAL (COLUMNS 6–12) */}
          <div className="lg:col-span-7 relative w-full flex justify-end">
            <div
              ref={visualRef}
              className="relative w-full aspect-[16/10] max-h-[75vh] overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.7)] group bg-black"
            >
              <img
                src="/images/protection/protection-hero.webp"
                alt="Hydrophobic water beading on 10H ceramic coated car paint surface at TMR Studio Tiruppur"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
