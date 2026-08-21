import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/Container';

gsap.registerPlugin(ScrollTrigger);

interface ProtectionStage {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  statement: string;
  details: string[];
  image: string;
  alt: string;
}

const protectionStages: ProtectionStage[] = [
  {
    id: 'prot-surface',
    number: '01',
    title: 'SURFACE',
    subtitle: 'CLEARCOAT DIAGNOSTICS & BASE PREPARATION',
    statement: 'Protection begins when the surface clearcoat becomes immaculate and defect-free.',
    details: ['Clearcoat Thickness Mapping', 'Specular Reflection Analysis', '100% Decontaminated Base'],
    image: '/images/protection/surface.webp',
    alt: 'Extreme macro view of pristine dark graphite automotive clearcoat',
  },
  {
    id: 'prot-bond',
    number: '02',
    title: 'BOND',
    subtitle: 'NANO-CERAMIC MOLECULAR MATRIX',
    statement: 'Precision hand application creates a permanent chemical bond at a molecular level.',
    details: ['Nano-SiO2 Silica Matrix', 'Cross-Linking Curing Action', 'UV & Thermal Shielding'],
    image: '/images/protection/bond.webp',
    alt: 'Professional detailer applying liquid nano-ceramic coating onto dark car paint',
  },
  {
    id: 'prot-repel',
    number: '03',
    title: 'REPEL',
    subtitle: 'EXTREME HYDROPHOBIC SURFACE BEADING',
    statement: 'Hydrophobic surface tension turns water into motion, repelling fallout and road grime.',
    details: ['110° Water Contact Angle', 'Self-Cleaning Surface Tension', 'Chemical Resistance (pH 2-12)'],
    image: '/images/protection/repel.webp',
    alt: 'Extreme macro shot of hydrophobic water droplets beading on glossy ceramic paint',
  },
  {
    id: 'prot-finish',
    number: '04',
    title: 'FINISH',
    subtitle: '10H CERAMIC SPECULAR GLASS REVEAL',
    statement: 'Finished with intent — unlocking a deep mirror specular glass reflection.',
    details: ['+95% Specular Gloss Level', '5-Year Multi-Layer Protection', 'TIRUPPUR STUDIO WARRANTY'],
    image: '/images/protection/finish.webp',
    alt: 'Final specular mirror gloss reveal of dark luxury executive vehicle',
  },
];

export const CeramicSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

  const currentStage = protectionStages[activeStageIndex] || protectionStages[0];

  useEffect(() => {
    if (!containerRef.current || !stickyRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    let lastIndex = -1;

    const ctx = gsap.context(() => {
      // SINGLE STABLE SCROLLTRIGGER CREATED ONCE ON MOUNT
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.1,
        onUpdate: (self) => {
          const progress = self.progress;

          // Calculate active stage index (0 to 3)
          const index = Math.min(
            protectionStages.length - 1,
            Math.floor(progress * protectionStages.length)
          );

          if (index !== lastIndex) {
            lastIndex = index;
            setActiveStageIndex(index);
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="ceramic-coating-refined"
      className="relative w-full h-[350vh] z-30 selection:bg-[#FF4B00] selection:text-white bg-[#070809]"
    >
      {/* 100VH FULLSCREEN STICKY CINEMATIC PROTECTION VIEWPORT */}
      <div
        ref={stickyRef}
        className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-between text-[#F5F4EF] bg-[#070809] border-t border-white/10"
      >
        {/* SUBTLE CINEMATIC NOISE & GRADIENT OVERLAY */}
        <div className="absolute inset-0 pointer-events-none z-10 opacity-7 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:18px_18px]" />
        
        {/* MAIN CINEMATIC MACRO IMAGE BACKGROUND LAYER */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          {protectionStages.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            return (
              <div
                key={stage.id}
                className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-out ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                }`}
              >
                <img
                  src={stage.image}
                  alt={stage.alt}
                  className="w-full h-full object-cover"
                />
                {/* DARK CINEMATIC GRADIENT OVERLAY FOR READABILITY */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#070809] via-[#070809]/75 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070809] via-transparent to-[#070809]/50 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* CONTENT LAYER */}
        <Container className="h-full flex flex-col justify-between py-10 md:py-14 relative z-20">
          {/* HEADER BAR */}
          <div className="w-full border-t border-white/15 pt-6 flex items-center justify-between font-intertight font-bold text-xs uppercase tracking-[0.14em] text-white">
            <div className="flex items-center gap-2.5">
              <span className="text-[#FF4B00]">03</span>
              <span className="text-white/30">/</span>
              <span>PROTECTION</span>
            </div>
            <span className="text-white/40 tracking-[0.2em] hidden sm:inline-block">
              LIQUID SURFACE // NANO-CERAMIC MATRIX
            </span>
          </div>

          {/* MAIN 12-COLUMN CINEMATIC GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto relative">
            
            {/* LEFT / EDITORIAL TEXT PANEL (COLUMNS 1–6) */}
            <div className="lg:col-span-6 space-y-6 max-w-[540px]">
              {/* EYEBROW & STAGE INDICATOR */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 text-[11px] font-intertight font-extrabold uppercase tracking-widest text-[#FF4B00] backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B00] animate-pulse" />
                <span>03 // {currentStage.title} — {currentStage.subtitle}</span>
              </div>

              {/* RESTRAINED MAIN HEADLINE */}
              <h2 className="font-intertight font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase text-white leading-[0.9] tracking-[-0.05em]">
                PROTECT <br />
                THE <span className="text-[#FF4B00]">FINISH.</span>
              </h2>

              {/* SHORT EDITORIAL STATEMENT */}
              <p className="font-editorial text-xl sm:text-2xl lg:text-3xl italic text-white/90 leading-tight">
                "{currentStage.statement}"
              </p>

              {/* STEPPER STAGE RAIL */}
              <div className="pt-2 border-t border-white/10 flex items-center gap-6 font-intertight text-xs uppercase tracking-wider font-extrabold">
                {protectionStages.map((stage, idx) => {
                  const isActive = activeStageIndex === idx;
                  return (
                    <div
                      key={stage.id}
                      className={`flex items-center gap-2 cursor-pointer transition-all duration-300 ${
                        isActive ? 'text-[#FF4B00] scale-105' : 'text-white/40 hover:text-white/70'
                      }`}
                      onClick={() => setActiveStageIndex(idx)}
                    >
                      <span>{stage.number}</span>
                      <span className="hidden sm:inline-block">{stage.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT / TECHNICAL METADATA SPECIFICATIONS (COLUMNS 7–12) */}
            <div className="lg:col-span-6 flex flex-col justify-end items-end space-y-4 text-right">
              <div className="bg-black/70 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-3 max-w-[380px] w-full text-left">
                <div className="text-[11px] font-intertight font-extrabold text-[#FF4B00] uppercase tracking-widest border-b border-white/10 pb-2">
                  STAGE 0{activeStageIndex + 1} SPECIFICATIONS
                </div>
                {currentStage.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2.5 font-intertight text-xs font-bold text-white/80 uppercase tracking-wide">
                    <span className="w-1 h-1 rounded-full bg-[#FF4B00]" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* BOTTOM TECHNICAL DIRECTION FOOTER */}
          <div className="w-full border-t border-white/15 pt-4 flex items-center justify-between font-intertight text-[10px] font-bold text-white/50 uppercase tracking-widest">
            <div className="flex items-center gap-4">
              <span className="text-[#FF4B00]">GLOSS LEVEL: +95%</span>
              <span className="text-white/30">•</span>
              <span>HYDROPHOBIC: ACTIVE</span>
            </div>
            <div>TMR / TIRUPPUR FACILITY</div>
          </div>
        </Container>
      </div>
    </div>
  );
};
