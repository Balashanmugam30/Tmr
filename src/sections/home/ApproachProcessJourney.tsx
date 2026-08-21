import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ApproachSection } from './ApproachSection';
import { ProcessTheatreSection } from './ProcessTheatreSection';
import { TravellingObject } from './TravellingObject';

gsap.registerPlugin(ScrollTrigger);

export const ApproachProcessJourney: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [masterProgress, setMasterProgress] = useState<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      // SINGLE MASTER SCROLLTRIGGER TRACKING COMBINED APPROACH + PROCESS THEATRE SCROLL TERRITORY
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.1,
        onUpdate: (self) => {
          setMasterProgress(self.progress);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* SHARED TRAVELLING OBJECT (SINGLE DOM INSTANCE ACROSS BOTH SECTIONS) */}
      <TravellingObject progress={masterProgress} />

      {/* SECTION 03: APPROACH */}
      <ApproachSection />

      {/* SECTION 04: PROCESS THEATRE */}
      <ProcessTheatreSection />
    </div>
  );
};
