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
              <div className="font-intertight font-bold text-[10px] sm:text-xs text-[#FF4B00] tracking-[0.25em] uppercase">
                0{activeStageIndex + 1} // {currentStage.subtitle}
              </div>

              {/* ACTIVE STAGE DESCRIPTOR STATEMENT */}
              <p className="font-intertight font-extrabold text-sm sm:text-base md:text-lg lg:text-xl uppercase leading-tight tracking-wide text-[#111111] max-w-[400px]">
                "{currentStage.description}"
              </p>

              {/* COMPACT EDITORIAL STAGE RAIL */}
              <div className="pt-2 sm:pt-3 border-l border-black/15 space-y-2 sm:space-y-3 pl-3 sm:pl-4">
                {processStages.map((stage, idx) => {
                  const isActive = activeStageIndex === idx;
                  return (
                    <div
                      key={stage.id}
                      className={`flex items-center justify-between cursor-pointer transition-all duration-300 font-intertight uppercase tracking-wider py-1 ${
                        isActive
                          ? 'text-[#111111] font-extrabold translate-x-2 text-base sm:text-lg'
                          : 'text-black/35 hover:text-black/70 text-xs sm:text-sm'
                      }`}
                      onClick={() => setActiveStageIndex(idx)}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={isActive ? 'text-[#FF4B00]' : 'text-black/30'}>
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
