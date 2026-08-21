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
      // SINGLE STABLE SCROLLTRIGGER CREATED ONCE ON MOUNT (600VH TOTAL SCROLL TERRITORY)
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.1,
        onUpdate: (self) => {
          const progress = self.progress;

          if (onProgressUpdate) {
            onProgressUpdate(progress);
          }

          // 5 PROCESS STAGES OCCUPY THE FIRST 500VH (PROGRESS 0.00 -> 0.833333)
          const PROCESS_SEQUENCE_END = 5 / 6;

          const stageProgress = Math.min(1, progress / PROCESS_SEQUENCE_END);

          // Calculate active stage index (0 to 4)
          const index = Math.min(
            processStages.length - 1,
            Math.floor(stageProgress * processStages.length)
          );

          // Update React state ONLY when active index actually changes
          if (index !== lastIndex) {
            lastIndex = index;
            setActiveStageIndex(index);
          }

          // Smooth background color & exit recession animation on stickyRef.current
          if (stickyRef.current) {
            const targetColor = processStages[index].bgColor;
            stickyRef.current.style.backgroundColor = targetColor;

            // Exit recession logic during final 10% progress of the 600vh territory (0.90 -> 1.00)
            const EXIT_START = 0.90;
            const EXIT_END = 1.00;

            if (progress >= EXIT_START) {
              const exitProgress = (progress - EXIT_START) / (EXIT_END - EXIT_START);
              const exitScale = 1 - exitProgress * 0.04;
              const exitOpacity = 1 - exitProgress * 0.12;
              const exitY = -exitProgress * 2;
              stickyRef.current.style.transform = `translate3d(0, ${exitY}vh, 0) scale(${exitScale})`;
              stickyRef.current.style.opacity = `${exitOpacity}`;
            } else {
              stickyRef.current.style.transform = 'translate3d(0, 0, 0) scale(1)';
              stickyRef.current.style.opacity = '1';
            }
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
      className="relative w-full h-[600vh] z-20 selection:bg-[#FF4B00] selection:text-white"
    >
      {/* 100VH FULLSCREEN STICKY LIGHT PASTEL THEATRE VIEWPORT CONTAINER */}
      <div
        ref={stickyRef}
        className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-between transition-colors duration-700 ease-out text-[#111111]"
        style={{
          backgroundColor: currentStage.bgColor,
        }}
      >
        <Container className="h-full flex flex-col justify-between py-12 md:py-16 relative z-10">
          {/* HEADER BAR */}
          <div className="w-full border-t border-black/15 pt-6 flex items-center justify-between font-intertight font-bold text-xs uppercase tracking-[0.14em] text-[#111111]">
            <div className="flex items-center gap-2.5">
              <span className="text-[#FF4B00]">04</span>
              <span className="text-black/30">/</span>
              <span>THE PROCESS THEATRE</span>
            </div>
            <span className="text-black/50 tracking-[0.2em]">STAGE 0{activeStageIndex + 1} // 05</span>
          </div>

          {/* MAIN 12-COLUMN LIGHT EDITORIAL THEATRE GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto relative">
            
            {/* LEFT / EDITORIAL STAGE RAIL NAVIGATION (COLUMNS 1–5) */}
            <div className="lg:col-span-5 relative z-10 space-y-8">
              <div className="font-intertight font-bold text-xs text-[#FF4B00] tracking-[0.25em] uppercase">
                0{activeStageIndex + 1} // {currentStage.subtitle}
              </div>

              {/* ACTIVE STAGE DESCRIPTOR STATEMENT */}
              <p className="font-intertight font-extrabold text-lg sm:text-xl md:text-2xl uppercase leading-tight tracking-wide text-[#111111] max-w-[420px]">
                "{currentStage.description}"
              </p>

              {/* LARGE EDITORIAL STAGE RAIL */}
              <div className="pt-4 border-l border-black/15 space-y-4 pl-4 sm:pl-6">
                {processStages.map((stage, idx) => {
                  const isActive = activeStageIndex === idx;
                  return (
                    <div
                      key={stage.id}
                      className={`flex items-center justify-between cursor-pointer transition-all duration-500 font-intertight uppercase tracking-wider py-1.5 ${
                        isActive
                          ? 'text-[#111111] font-extrabold translate-x-3 text-lg sm:text-xl'
                          : 'text-black/35 hover:text-black/70 text-sm'
                      }`}
                      onClick={() => setActiveStageIndex(idx)}
                    >
                      <div className="flex items-center gap-3">
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

            {/* RIGHT / VERY LARGE ACTIVE DISPLAY TITLE & CINEMATIC STAGE VISUAL (COLUMNS 6–12) */}
            <div className="lg:col-span-7 relative w-full flex flex-col items-start lg:items-end">
              
              {/* VERY LARGE ACTIVE DISPLAY TITLE */}
              <h2 className="font-intertight font-extrabold text-6xl sm:text-8xl md:text-[140px] lg:text-[180px] uppercase text-[#111111] leading-[0.82] tracking-[-0.065em] mb-4 text-left lg:text-right w-full">
                <span className="text-[#FF4B00]">0{activeStageIndex + 1}</span>{' '}
                <span className="text-[#111111]">{currentStage.title}</span>
              </h2>

              {/* CINEMATIC STAGE IMAGE FRAME */}
              <div className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/10] max-h-[500px] relative overflow-hidden rounded-2xl border border-black/15 shadow-[0_25px_60px_rgba(0,0,0,0.12)] bg-black">
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
          <div className="w-full border-t border-black/15 pt-4 flex flex-col md:flex-row md:items-center justify-between gap-2 font-intertight text-[11px] font-bold uppercase tracking-wider text-[#333333]">
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
