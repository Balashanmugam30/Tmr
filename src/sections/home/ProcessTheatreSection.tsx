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

          // Smooth background color interpolation based on scroll progress
          if (stickyRef.current) {
            const targetColor = processStages[index].bgColor;
            const targetTextColor = processStages[index].textColor;

            stickyRef.current.style.backgroundColor = targetColor;
            stickyRef.current.style.color = targetTextColor;
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
      {/* 100VH STICKY VIEWPORT CONTAINER */}
      <div
        ref={stickyRef}
        className="sticky top-0 left-0 w-full h-screen min-h-screen overflow-hidden flex flex-col justify-between transition-colors duration-500 ease-out"
        style={{
          backgroundColor: currentStage.bgColor,
          color: currentStage.textColor,
        }}
      >
        <Container className="h-full flex flex-col justify-between py-12 md:py-16">
          {/* HEADER BAR */}
          <div className="w-full border-t border-current/15 pt-6 flex items-center justify-between font-intertight font-bold text-xs uppercase tracking-[0.14em]">
            <div className="flex items-center gap-2.5">
              <span className="text-[#FF4B00]">04</span>
              <span className="opacity-40">/</span>
              <span>THE PROCESS THEATRE</span>
            </div>
            <span className="opacity-60 tracking-[0.2em]">STAGE 0{activeStageIndex + 1} // 05</span>
          </div>

          {/* MAIN 12-COLUMN PROCESS CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto relative">
            
            {/* LEFT / NAVIGATION RAIL & ACTIVE STAGE NARRATIVE (COLUMNS 1–5) */}
            <div className="lg:col-span-5 relative z-10 space-y-6">
              <div className="font-intertight font-bold text-xs text-[#FF4B00] tracking-[0.25em] uppercase">
                0{activeStageIndex + 1} — {currentStage.title}
              </div>

              <h2 className="font-intertight font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase leading-[0.92] tracking-[-0.045em]">
                FROM ARRIVAL
                <br />
                <span className="text-[#FF4B00]">TO FINISH.</span>
              </h2>

              <p className="font-editorial text-xl sm:text-2xl lg:text-3xl italic opacity-90 leading-tight">
                "{currentStage.description}"
              </p>

              {/* VERTICAL STAGE NAVIGATION RAIL */}
              <div className="pt-4 border-l border-current/15 space-y-3 pl-4 sm:pl-6">
                {processStages.map((stage, idx) => {
                  const isActive = activeStageIndex === idx;
                  return (
                    <div
                      key={stage.id}
                      className={`flex items-center justify-between cursor-pointer transition-all duration-300 font-intertight text-xs uppercase tracking-wider py-1 ${
                        isActive ? 'text-[#FF4B00] font-bold pl-2' : 'opacity-40 hover:opacity-80'
                      }`}
                      onClick={() => setActiveStageIndex(idx)}
                    >
                      <div className="flex items-center gap-3">
                        <span>{stage.number}</span>
                        <span>{stage.title}</span>
                      </div>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B00]" />}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT / CINEMATIC MEDIA DISPLAY (COLUMNS 6–12) */}
            <div className="lg:col-span-7 relative w-full">
              <div className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/10] max-h-[580px] relative overflow-hidden rounded-2xl border border-current/15 shadow-[0_30px_70px_rgba(0,0,0,0.25)]">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      
                      {/* GLASSMORPHIC STAGE BADGE */}
                      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-intertight">
                        <span className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/10">
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
          <div className="w-full border-t border-current/15 pt-4 flex flex-col md:flex-row md:items-center justify-between gap-2 font-intertight text-[11px] font-bold uppercase tracking-wider opacity-70">
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
