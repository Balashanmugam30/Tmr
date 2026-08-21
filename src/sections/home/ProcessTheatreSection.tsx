import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/Container';
import { processStages, ProcessStage } from './processSceneData';

gsap.registerPlugin(ScrollTrigger);

interface ProcessTheatreSectionProps {
  onProgressUpdate?: (stageProgress: number) => void;
}

export const ProcessTheatreSection: React.FC<ProcessTheatreSectionProps> = ({
  onProgressUpdate,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

  const currentStage: ProcessStage = processStages[activeStageIndex] || processStages[0];

  useEffect(() => {
    if (!containerRef.current || !stickyRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    let lastIndex = -1;

    const ctx = gsap.context(() => {
      // SINGLE STABLE SCROLLTRIGGER CREATED ONCE ON MOUNT (500VH TOTAL SCROLL TERRITORY = 100VH PER STAGE)
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.1,
        onUpdate: (self) => {
          const progress = Math.max(0, Math.min(1, self.progress));

          if (onProgressUpdate) {
            onProgressUpdate(progress);
          }

          // 5 PROCESS STAGES EQUALLY DISTRIBUTED ACROSS 500VH (20% PROGRESS PER STAGE)
          const index = Math.min(
            processStages.length - 1,
            Math.floor(progress * processStages.length)
          );

          // Update React state ONLY when active index actually changes
          if (index !== lastIndex) {
            lastIndex = index;
            setActiveStageIndex(index);
          }

          // Smooth background color update on stickyRef.current
          if (stickyRef.current) {
            const targetColor = processStages[index].bgColor;
            stickyRef.current.style.backgroundColor = targetColor;
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="process-theatre"
      className="relative w-full h-[500vh] z-20 selection:bg-[#FF4B00] selection:text-white"
    >
      {/* 100VH FULLSCREEN STICKY LIGHT PASTEL THEATRE VIEWPORT CONTAINER */}
      <div
        ref={stickyRef}
        className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-center transition-colors duration-700 ease-out text-[#111111]"
        style={{
          backgroundColor: currentStage.bgColor,
        }}
      >
        <Container className="h-full flex flex-col justify-center py-4 md:py-6 lg:py-8 relative z-10 overflow-hidden">
          {/* MAIN 12-COLUMN LIGHT EDITORIAL THEATRE GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center flex-1 min-h-0 my-auto relative overflow-hidden py-2 sm:py-4">
            
            {/* LEFT / EDITORIAL STAGE RAIL NAVIGATION (COLUMNS 1–5) */}
            <div className="lg:col-span-5 relative z-10 space-y-3 sm:space-y-4 lg:space-y-5">
              {/* ACTIVE STAGE DESCRIPTOR STATEMENT */}
              <p className="font-intertight font-extrabold text-sm sm:text-base md:text-lg lg:text-xl uppercase leading-tight tracking-wide text-[#111111] max-w-[400px]">
                "{currentStage.description}"
              </p>

              {/* SEMI-CIRCULAR CLOCK / INSTRUMENT-DIAL STAGE SELECTOR */}
              <div className="relative w-full max-w-[360px] h-[190px] sm:h-[220px] my-2 select-none overflow-hidden flex items-center justify-center">
                
                {/* UNDERSTATED INSTRUMENT DIAL ARC TRACK & PRECISION TICKS */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
                  viewBox="0 0 360 220"
                  fill="none"
                >
                  {/* Subtle Curved Instrument Gauge Arc */}
                  <path
                    d="M 40 190 A 150 150 0 0 1 320 190"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 6"
                    className="text-black/30"
                  />
                  
                  {/* Outer Faint Guide Ring */}
                  <path
                    d="M 60 185 A 130 130 0 0 1 300 185"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-black/15"
                  />

                  {/* Focal Top Center Active Marker Needle Line */}
                  <line x1="180" y1="12" x2="180" y2="28" stroke="#FF4B00" strokeWidth="2.5" strokeLinecap="round" />
                </svg>

                {/* DYNAMIC STAGE DIAL ITEMS (ANIMATED ALONG THE ARC BASED ON ACTIVE STAGE INDEX) */}
                <div className="relative w-full h-full">
                  {processStages.map((stage, idx) => {
                    const offset = idx - activeStageIndex; // Relative offset from active stage (-2, -1, 0, 1, 2)
                    const isActive = offset === 0;

                    // Polar angle mapping along open top arc
                    // Focal center = 0 deg, Offset 1 = +32 deg, Offset -1 = -32 deg
                    const angleDeg = offset * 34;
                    const angleRad = (angleDeg * Math.PI) / 180;
                    const radius = 135; // Responsive pixel radius for arc trajectory

                    // Calculate arc coordinates (Focal point centered at top x=0, y=0)
                    const x = Math.sin(angleRad) * radius;
                    const y = (1 - Math.cos(angleRad)) * (radius * 0.65);

                    // Scale & Opacity based on distance from focal center
                    let scale = 1.12;
                    let opacity = 1.0;
                    let zIndex = 30;

                    if (Math.abs(offset) === 1) {
                      scale = 0.86;
                      opacity = 0.52;
                      zIndex = 20;
                    } else if (Math.abs(offset) === 2) {
                      scale = 0.70;
                      opacity = 0.22;
                      zIndex = 10;
                    } else if (Math.abs(offset) > 2) {
                      opacity = 0;
                      scale = 0.5;
                      zIndex = 0;
                    }

                    return (
                      <div
                        key={stage.id}
                        onClick={() => setActiveStageIndex(idx)}
                        className={`absolute left-1/2 top-4 -translate-x-1/2 cursor-pointer transition-all duration-700 ease-out font-intertight uppercase tracking-wider flex items-center gap-2 px-3 py-1.5 rounded-full ${
                          isActive
                            ? 'bg-black/10 border border-black/15 shadow-sm text-[#111111]'
                            : 'text-black/60 hover:text-black hover:opacity-80'
                        }`}
                        style={{
                          transform: `translate(calc(-50% + ${x}px), ${y}px) scale(${scale})`,
                          opacity,
                          zIndex,
                        }}
                      >
                        {/* ACTIVE STAGE ORANGE PULSE POINT */}
                        <span
                          className={`font-black text-xs transition-colors ${
                            isActive ? 'text-[#FF4B00]' : 'text-black/40'
                          }`}
                        >
                          {stage.number}
                        </span>

                        <span
                          className={`font-extrabold text-xs sm:text-sm whitespace-nowrap transition-colors ${
                            isActive ? 'text-[#111111]' : 'text-black/60'
                          }`}
                        >
                          {stage.title}
                        </span>

                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#FF4B00] animate-pulse ml-0.5" />
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>

            {/* RIGHT / RESPONSIVE ACTIVE DISPLAY TITLE & CINEMATIC STAGE VISUAL (COLUMNS 6–12) */}
            <div className="lg:col-span-7 relative w-full flex flex-col items-start lg:items-end justify-center">
              
              {/* RESPONSIVE CLAMPED DISPLAY TITLE */}
              <h2 className="font-intertight font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] uppercase text-[#111111] leading-[0.85] tracking-[-0.05em] mb-2 sm:mb-3 text-left lg:text-right w-full shrink-0">
                <span className="text-[#FF4B00]">0{activeStageIndex + 1}</span>{' '}
                <span className="text-[#111111]">{currentStage.title}</span>
              </h2>

              {/* VIEWPORT-HEIGHT CONSTRAINED STAGE IMAGE FRAME */}
              <div className="w-full aspect-[16/10] max-h-[32vh] sm:max-h-[36vh] lg:max-h-[42vh] max-h-[420px] relative overflow-hidden rounded-2xl border border-black/15 shadow-[0_20px_50px_rgba(0,0,0,0.12)] bg-black shrink-0">
                {processStages.map((stage, idx) => {
                  const isActive = activeStageIndex === idx;
                  return (
                    <div
                      key={stage.id}
                      className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out ${
                        isActive
                          ? 'opacity-100 scale-100 clip-path-full z-10'
                          : 'opacity-0 scale-105 clip-path-inset z-0'
                      }`}
                    >
                      <img
                        src={stage.image}
                        alt={stage.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </Container>
      </div>
    </div>
  );
};
