import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/Container';

gsap.registerPlugin(ScrollTrigger);

export const CeramicSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const innerWrapperRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !innerWrapperRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    // TARGET ONLY THE STICKY VIEWPORT INSIDE #process-theatre (NEVER TRANSFORM THE 500VH ROOT CONTAINER)
    const processSticky = document.querySelector('#process-theatre .sticky');

    const ctx = gsap.context(() => {
      // 1. TEMPORARY VISUAL PROCESS -> PROTECTION HANDOFF TIMELINE (TARGETS STICKY VIEWPORT ONLY)
      const boundaryTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom', // Begins as Protection top reaches bottom of viewport while Process sticky viewport is active
          end: 'top top', // Completes when Protection fills viewport cleanly
          scrub: 0.1,
        },
      });

      if (processSticky) {
        // Sticky viewport subtly recedes behind (leaves #process-theatre 500vh root geometry 100% untouched)
        boundaryTl.to(
          processSticky,
          { scale: 0.97, y: '-2vh', opacity: 0.88, ease: 'none' },
          0
        );
      }

      // Protection inner visual layer rises cleanly in foreground as a 100% SOLID OPAQUE sheet (opacity=1 ALWAYS)
      boundaryTl.fromTo(
        innerWrapperRef.current,
        { translateY: '100vh', scale: 1.01 },
        { translateY: '0vh', scale: 1.00, ease: 'none' },
        0
      );

      // 2. PROTECTION INTERNAL EDITORIAL ENTRANCE ONCE SETTLED IN VIEWPORT
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
      className="w-full bg-[#070809] text-[#F5F4EF] overflow-hidden relative z-30 border-t border-b border-white/10 selection:bg-[#FF4B00] selection:text-white min-h-screen isolate"
      style={{ opacity: 1, backgroundColor: '#070809' }}
    >
      {/* INNER VISUAL LAYER FOR TEMPORARY FOREGROUND SLIDE HANDOFF (OPACITY = 1 ALWAYS SOLID) */}
      <div
        ref={innerWrapperRef}
        className="w-full min-h-screen flex flex-col justify-between py-12 md:py-20 relative z-10 bg-[#070809]"
        style={{ opacity: 1 }}
      >
        {/* SUBTLE NOISE OVERLAY */}
        <div className="absolute inset-0 pointer-events-none z-10 opacity-6 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:18px_18px]" />

        {/* TOP ARCHITECTURAL METADATA ROW */}
        <Container className="relative z-20 pt-2">
          <div className="w-full border-t border-white/10 pt-6 flex items-center justify-between font-intertight font-bold text-xs uppercase tracking-[0.14em] text-white">
            <div className="flex items-center gap-2.5">
              <span className="text-[#FF4B00]">03</span>
              <span className="text-white/30">/</span>
              <span>PROTECTION</span>
            </div>
            <span className="text-white/40 tracking-[0.2em] hidden sm:inline-block">
              NANO-CERAMIC MOLECULAR MATRIX // TIRUPPUR
            </span>
          </div>
        </Container>

        {/* MAIN CINEMATIC COMPOSITION: LEFT EDITORIAL TEXT (5 COLS) / RIGHT HERO CAMPAIGN VISUAL (7 COLS) */}
        <Container className="relative z-20 my-auto py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT / RESTRAINED EDITORIAL COPY GROUP (COLUMNS 1–5) */}
            <div ref={textGroupRef} className="lg:col-span-5 space-y-6 max-w-[440px]">
              {/* EYEBROW */}
              <div className="prot-editorial-item font-intertight font-extrabold text-[11px] uppercase tracking-[0.22em] text-[#FF4B00]">
                03 // PROTECTION
              </div>

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
                  <span className="block text-[10px] text-white/40 font-bold">GLOSS LEVEL</span>
                  <span className="font-extrabold text-white text-sm">+95%</span>
                </div>
                <div>
                  <span className="block text-[10px] text-white/40 font-bold">HYDROPHOBIC</span>
                  <span className="font-extrabold text-[#FF4B00] text-sm">ACTIVE</span>
                </div>
                <div>
                  <span className="block text-[10px] text-white/40 font-bold">DURABILITY</span>
                  <span className="font-extrabold text-white text-sm">5 YEARS</span>
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
                  alt="TMR Ceramic Coating Hydrophobic Surface Protection"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* REFINED GLASSMORPHIC BADGE */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3 pointer-events-none font-intertight">
                  <span className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
                    NANO-SiO2 MOLECULAR MATRIX // CERAMIC
                  </span>
                </div>
              </div>
            </div>

          </div>
        </Container>

        {/* BOTTOM TECHNICAL DIRECTION FOOTER */}
        <Container className="relative z-20 pb-2">
          <div className="w-full border-t border-white/10 pt-4 flex items-center justify-between font-intertight text-[10px] font-bold text-white/40 uppercase tracking-widest">
            <span>SURFACE PREPARATION → PROTECTIVE SHIELD</span>
            <span>TMR / AUTOMOTIVE CARE</span>
          </div>
        </Container>
      </div>
    </section>
  );
};
