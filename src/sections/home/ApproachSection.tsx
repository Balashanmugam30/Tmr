import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/Container';

gsap.registerPlugin(ScrollTrigger);

export const ApproachSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const statementRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      // Entrance Timeline for Technical Dark Elements
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: 'power4.out' },
      });

      if (dividerRef.current) {
        tl.fromTo(
          dividerRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, transformOrigin: 'left center' },
          0
        );
      }

      if (metaRef.current) {
        tl.fromTo(
          metaRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5 },
          0.05
        );
      }

      if (headlineRef.current) {
        const lines = headlineRef.current.querySelectorAll('.approach-dark-line');
        tl.fromTo(
          lines,
          { opacity: 0, y: 28, clipPath: 'inset(100% 0 0 0)' },
          {
            opacity: 1,
            y: 0,
            clipPath: 'inset(0% 0 0 0)',
            duration: 0.75,
            stagger: 0.1,
          },
          0.1
        );
      }

      if (statementRef.current) {
        tl.fromTo(
          statementRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.25
        );
      }

      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.dark-tech-card');
        tl.fromTo(
          cards,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          0.35
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
      id="approach"
      className="w-full bg-[#0A0A0A] text-white overflow-hidden relative z-20 border-b border-white/10 selection:bg-[#FF4B00] selection:text-white min-h-screen lg:min-h-[115vh] py-16 md:py-24 flex flex-col justify-between"
    >
      {/* TECHNICAL BACKGROUND GRID LINES & ARCHITECTURAL COORDINATES */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="w-full h-full border-b border-white/10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      <Container className="relative z-10 my-auto">
        {/* TOP DIVIDER */}
        <div ref={dividerRef} className="w-full h-px bg-white/10 mb-8 origin-left" />

        {/* TOP META ROW */}
        <div
          ref={metaRef}
          className="flex items-center justify-between font-intertight font-bold text-xs uppercase tracking-[0.14em] mb-10 md:mb-14 text-white"
        >
          <div className="flex items-center gap-2.5">
            <span className="text-[#FF4B00]">02</span>
            <span className="text-white/30">/</span>
            <span className="text-white">APPROACH</span>
          </div>
          <span className="text-white/50 tracking-[0.2em]">THE TMR METHOD // ARCHITECTURAL CHOREOGRAPHY</span>
        </div>

        {/* DARK ARCHITECTURAL HEADLINE & STATEMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: VERY LARGE DARK DISPLAY TYPOGRAPHY (COLUMNS 1–8) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-intertight font-bold uppercase tracking-widest text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B00] animate-pulse" />
              <span>TECHNICAL PROCESS ARCHITECTURE</span>
            </div>

            <h2
              ref={headlineRef}
              className="font-intertight font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[130px] uppercase text-white leading-[0.84] tracking-[-0.06em]"
            >
              <div className="overflow-hidden">
                <span className="approach-dark-line block text-white">PRECISION</span>
              </div>
              <div className="overflow-hidden">
                <span className="approach-dark-line block text-white">IS A</span>
              </div>
              <div className="overflow-hidden">
                <span className="approach-dark-line block text-[#FF4B00]">PROCESS.</span>
              </div>
            </h2>

            <p
              ref={statementRef}
              className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-white/90 leading-tight italic max-w-2xl"
            >
              "We engineer every stage around the condition of the vehicle, the surface, and the finish."
            </p>
          </div>

          {/* RIGHT: TECHNICAL SPECIFICATION PANEL (COLUMNS 9–12) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 pt-4 border-l border-white/10 pl-6 lg:pl-10">
            <div className="font-intertight text-xs uppercase tracking-widest text-white/60 space-y-3">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/40">LOCATION</span>
                <span className="font-bold text-white">TIRUPPUR STUDIO</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/40">ENVIRONMENT</span>
                <span className="font-bold text-white">CLIMATE-CONTROLLED</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/40">OBJECT PATH</span>
                <span className="font-bold text-[#FF4B00]">CONTINUOUS CHOREOGRAPHY</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/services"
                className="group inline-flex flex-col gap-1 text-xs font-intertight font-extrabold uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  <span>DISCOVER OUR METHOD</span>
                  <span className="text-[#FF4B00] group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                </span>
                <span className="h-[1.5px] w-12 group-hover:w-full bg-[#FF4B00] transition-all duration-300" />
              </Link>
            </div>
          </div>

        </div>

        {/* THREE TECHNICAL SPECIFICATION PILLARS */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-16">
          
          <div className="dark-tech-card bg-[#111315] p-6 md:p-8 rounded-2xl border border-white/10 space-y-3 hover:border-[#FF4B00]/40 transition-colors">
            <span className="text-xs font-intertight font-extrabold text-[#FF4B00] tracking-widest uppercase">
              01 // DIAGNOSTICS
            </span>
            <h3 className="font-intertight font-bold text-lg text-white uppercase">
              PAINT SURFACE MAPPING
            </h3>
            <p className="font-intertight text-xs text-white/55 leading-relaxed">
              Ultrasonic depth gauges measure clearcoat thickness across all panels to establish safe correction boundaries.
            </p>
          </div>

          <div className="dark-tech-card bg-[#111315] p-6 md:p-8 rounded-2xl border border-white/10 space-y-3 hover:border-[#FF4B00]/40 transition-colors">
            <span className="text-xs font-intertight font-extrabold text-[#FF4B00] tracking-widest uppercase">
              02 // PREPARATION
            </span>
            <h3 className="font-intertight font-bold text-lg text-white uppercase">
              DECONTAMINATION & MASKING
            </h3>
            <p className="font-intertight text-xs text-white/55 leading-relaxed">
              Iron fallout extraction, clay bar treatment, and automotive trim masking prepare every contour for refinement.
            </p>
          </div>

          <div className="dark-tech-card bg-[#111315] p-6 md:p-8 rounded-2xl border border-white/10 space-y-3 hover:border-[#FF4B00]/40 transition-colors">
            <span className="text-xs font-intertight font-extrabold text-[#FF4B00] tracking-widest uppercase">
              03 // REFINEMENT
            </span>
            <h3 className="font-intertight font-bold text-lg text-[#FFFFFF] uppercase">
              DUAL-ACTION POLISHING
            </h3>
            <p className="font-intertight text-xs text-white/55 leading-relaxed">
              Controlled multi-pass polishing eliminates swirls and scratches, unlocking true specular paint clarity.
            </p>
          </div>

        </div>
      </Container>

      {/* BOTTOM TECHNICAL DIRECTION FOOTER */}
      <div className="w-full border-t border-white/10 pt-4 pb-2 px-6 md:px-12 flex items-center justify-between font-intertight text-[10px] font-bold text-white/40 uppercase tracking-widest relative z-10 mt-12">
        <span>CONTINUOUS TOOL TRAJECTORY →</span>
        <span>APPROACH → PROCESS THEATRE HANDOFF</span>
      </div>
    </section>
  );
};
