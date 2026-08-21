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
      // Entrance Timeline for Technical Elements
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
        const lines = headlineRef.current.querySelectorAll('.approach-tech-line');
        tl.fromTo(
          lines,
          { opacity: 0, y: 24, clipPath: 'inset(100% 0 0 0)' },
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
        const cards = gridRef.current.querySelectorAll('.tech-card');
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
      className="w-full py-24 md:py-36 bg-[#F5F4EF] overflow-hidden relative z-20 border-b border-black/10 selection:bg-[#FF4B00] selection:text-white min-h-[90vh] flex flex-col justify-between"
    >
      {/* TECHNICAL BACKGROUND GRID LINES & ARCHITECTURAL COORDINATES */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="w-full h-full border-b border-black/5 bg-[linear-gradient(to_right,rgba(5,5,5,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(5,5,5,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <Container>
        {/* TOP DIVIDER */}
        <div ref={dividerRef} className="w-full h-px bg-black/10 mb-8 origin-left relative z-10" />

        {/* TOP META ROW */}
        <div
          ref={metaRef}
          className="flex items-center justify-between font-intertight font-bold text-xs uppercase tracking-[0.14em] mb-16 text-[#050505] relative z-10"
        >
          <div className="flex items-center gap-2.5">
            <span className="text-[#FF4B00]">02</span>
            <span className="text-black/30">/</span>
            <span className="text-[#050505]">APPROACH</span>
          </div>
          <span className="text-[#777777] tracking-[0.2em]">THE TMR METHOD // SPECIFICATION</span>
        </div>

        {/* TECHNICAL ARCHITECTURAL HEADER & STATEMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* LEFT: MAIN TECHNICAL STATEMENT */}
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-[10px] font-intertight font-bold uppercase tracking-widest text-[#050505]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B00]" />
              <span>TECHNICAL PROCESS ARCHITECTURE</span>
            </div>

            <h2
              ref={headlineRef}
              className="font-intertight font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[92px] uppercase text-[#050505] leading-[0.90] tracking-[-0.05em]"
            >
              <div className="overflow-hidden">
                <span className="approach-tech-line block">PRECISION IS A</span>
              </div>
              <div className="overflow-hidden">
                <span className="approach-tech-line block text-[#FF4B00]">PROCESS.</span>
              </div>
            </h2>

            <p
              ref={statementRef}
              className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#050505] leading-tight italic max-w-2xl"
            >
              "We engineer every stage around the condition of the vehicle, the surface, and the finish."
            </p>
          </div>

          {/* RIGHT: TECHNICAL SPECIFICATION COORDINATES */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 pt-4 border-l border-black/10 pl-6 lg:pl-10">
            <div className="font-intertight text-xs uppercase tracking-widest text-[#666666] space-y-2">
              <div className="flex justify-between border-b border-black/10 pb-1.5">
                <span className="text-black/40">LOCATION</span>
                <span className="font-bold text-[#050505]">TIRUPPUR STUDIO</span>
              </div>
              <div className="flex justify-between border-b border-black/10 pb-1.5">
                <span className="text-black/40">FACILITY</span>
                <span className="font-bold text-[#050505]">CLIMATE-CONTROLLED</span>
              </div>
              <div className="flex justify-between border-b border-black/10 pb-1.5">
                <span className="text-black/40">TOLERANCE</span>
                <span className="font-bold text-[#FF4B00]">ZERO DEFECT</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/services"
                className="group inline-flex flex-col gap-1 text-xs font-intertight font-extrabold uppercase tracking-widest text-[#050505] hover:text-[#FF4B00] transition-colors"
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

        {/* THREE TECHNICAL PROCESS PILLAR CARDS */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-24 relative z-10">
          
          <div className="tech-card bg-white/70 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-black/10 space-y-3 hover:border-[#FF4B00]/40 transition-colors">
            <span className="text-xs font-intertight font-extrabold text-[#FF4B00] tracking-widest uppercase">
              01 // DIAGNOSTICS
            </span>
            <h3 className="font-intertight font-bold text-lg text-[#050505] uppercase">
              PAINT SURFACE MAPPING
            </h3>
            <p className="font-intertight text-xs text-[#666666] leading-relaxed">
              Ultrasonic depth gauges measure clearcoat thickness across all panels to establish safe correction boundaries.
            </p>
          </div>

          <div className="tech-card bg-white/70 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-black/10 space-y-3 hover:border-[#FF4B00]/40 transition-colors">
            <span className="text-xs font-intertight font-extrabold text-[#FF4B00] tracking-widest uppercase">
              02 // PREPARATION
            </span>
            <h3 className="font-intertight font-bold text-lg text-[#050505] uppercase">
              DECONTAMINATION & MASKING
            </h3>
            <p className="font-intertight text-xs text-[#666666] leading-relaxed">
              Iron fallout extraction, clay bar treatment, and automotive trim masking prepare every contour for refinement.
            </p>
          </div>

          <div className="tech-card bg-white/70 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-black/10 space-y-3 hover:border-[#FF4B00]/40 transition-colors">
            <span className="text-xs font-intertight font-extrabold text-[#FF4B00] tracking-widest uppercase">
              03 // REFINEMENT
            </span>
            <h3 className="font-intertight font-bold text-lg text-[#050505] uppercase">
              DUAL-ACTION POLISHING
            </h3>
            <p className="font-intertight text-xs text-[#666666] leading-relaxed">
              Controlled multi-pass polishing eliminates swirls and scratches, unlocking true specular paint clarity.
            </p>
          </div>

        </div>
      </Container>

      {/* BOTTOM TECHNICAL ACCENT LINE */}
      <div className="w-full border-t border-black/10 pt-4 pb-2 px-6 md:px-12 flex items-center justify-between font-intertight text-[10px] font-bold text-black/40 uppercase tracking-widest relative z-10">
        <span>CONTINUOUS PROCESS DIRECTION →</span>
        <span>STUDIO TOOL CHOREOGRAPHY</span>
      </div>
    </section>
  );
};
