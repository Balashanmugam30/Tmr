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

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.2,
        onUpdate: (self) => {
          const progress = self.progress;

          // Notify parent of stage progress (0.0 to 1.0 within process theatre)
          if (onProgressUpdate) {
            onProgressUpdate(progress);
          }

          // Calculate active stage index (0 to 4)
          const index = Math.min(
            processStages.length - 1,
            Math.floor(progress * processStages.length)
          );

          if (index !== activeStageIndex) {
            setActiveStageIndex(index);
          }

          // Smooth background color interpolation across dark TMR neutral tones (#0A0A0A -> #111315 -> #181B1D -> #25282A -> #050505)
          if (stickyRef.current) {
            const targetColor = processStages[index].bgColor;
            stickyRef.current.style.backgroundColor = targetColor;
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [activeStageIndex, onProgressUpdate]);

  return (
    <div
      ref={containerRef}
      id="process-theatre"
      className="relative w-full h-[500vh] z-20 selection:bg-[#FF4B00] selection:text-white"
    >
      {/* 100VH FULLSCREEN STICKY DARK THEATRE VIEWPORT CONTAINER */}
      <div
        ref={stickyRef}
        className="sticky top-0 left-0 w-full h-screen min-h-screen overflow-hidden flex flex-col justify-between transition-colors duration-700 ease-out text-white"
        style={{
          backgroundColor: currentStage.bgColor,
        }}
      >
        <Container className="h-full flex flex-col justify-between py-12 md:py-16 relative z-10">
          {/* HEADER BAR */}
          <div className="w-full border-t border-white/10 pt-6 flex items-center justify-between font-intertight font-bold text-xs uppercase tracking-[0.14em] text-white">
            <div className="flex items-center gap-2.5">
              <span className="text-[#FF4B00]">04</span>
              <span className="text-white/30">/</span>
              <span>THE PROCESS THEATRE</span>
            </div>
            <span className="text-white/50 tracking-[0.2em]">STAGE 0{activeStageIndex + 1} // 05</span>
          </div>

          {/* MAIN 12-COLUMN DARK CINEMATIC THEATRE GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto relative">
            
            {/* LEFT / EDITORIAL STAGE RAIL NAVIGATION (COLUMNS 1–5) */}
            <div className="lg:col-span-5 relative z-10 space-y-8">
              <div className="font-intertight font-bold text-xs text-[#FF4B00] tracking-[0.25em] uppercase">
                0{activeStageIndex + 1} // {currentStage.subtitle}
              </div>

              {/* ACTIVE STAGE DESCRIPTOR STATEMENT */}
              <p className="font-intertight font-extrabold text-lg sm:text-xl md:text-2xl uppercase leading-tight tracking-wide text-white/90 max-w-[420px]">
                "{currentStage.description}"
              </p>

              {/* LARGE EDITORIAL STAGE RAIL */}
              <div className="pt-4 border-l border-white/10 space-y-4 pl-4 sm:pl-6">
                {processStages.map((stage, idx) => {
                  const isActive = activeStageIndex === idx;
                  return (
                    <div
                      key={stage.id}
                      className={`flex items-center justify-between cursor-pointer transition-all duration-500 font-intertight uppercase tracking-wider py-1.5 ${
                        isActive
                          ? 'text-white font-extrabold translate-x-3 text-lg sm:text-xl'
                          : 'text-white/35 hover:text-white/70 text-sm'
                      }`}
                      onClick={() => setActiveStageIndex(idx)}
                    >
                      <div className="flex items-center gap-3">
                        <span className={isActive ? 'text-[#FF4B00]' : 'text-white/30'}>
                          {stage.number}
                        </span>
                        <span>{stage.title}</span>
                      </div>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#FF4B00] animate-pulse" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT / VERY LARGE ACTIVE DISPLAY TITLE & CINEMATIC STAGE VISUAL (COLUMNS 6–12) */}
            <div className="lg:col-span-7 relative w-full flex flex-col items-start lg:items-end">
              
              {/* VERY LARGE ACTIVE DISPLAY TITLE */}
              <h2 className="font-intertight font-extrabold text-6xl sm:text-8xl md:text-[140px] lg:text-[180px] uppercase text-white leading-[0.82] tracking-[-0.065em] mb-4 text-left lg:text-right w-full">
                <span className="text-[#FF4B00]">0{activeStageIndex + 1}</span>{' '}
                <span className="text-white">{currentStage.title}</span>
              </h2>

              {/* CINEMATIC STAGE IMAGE FRAME */}
              <div className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/10] max-h-[500px] relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      
                      {/* GLASSMORPHIC STAGE BADGE */}
                      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-intertight">
                        <span className="bg-black/85 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/10">
                          {stage.number} // {stage.title} — {stage.subtitle}
                        </span>
                        <span className="text-[#FF4B00] text-xs font-extrabold hidden sm:inline-block">
                          TMR STUDIO
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

          {/* BOTTOM TECHNICAL SPECIFICATION FOOTER */}
          <div className="w-full border-t border-white/10 pt-4 flex flex-col md:flex-row md:items-center justify-between gap-2 font-intertight text-[11px] font-bold uppercase tracking-wider text-white/70">
            <div className="flex items-center gap-3">
              <span className="text-[#FF4B00]">PROTOCOL:</span>
              <span>{currentStage.technicalDetails.join(' • ')}</span>
            </div>
            <div>TIRUPPUR FACILITY</div>
          </div>
        </Container>
      </div>
    </div>
  );
};
