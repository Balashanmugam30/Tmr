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
  const [isInTerritory, setIsInTerritory] = useState<boolean>(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      // SINGLE MASTER SCROLLTRIGGER TRACKING COMBINED APPROACH + PROCESS THEATRE SCROLL TERRITORY
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top bottom', // Begins tracking as soon as Approach enters bottom of viewport
        end: 'bottom bottom', // Ends tracking when Process Theatre completes
        scrub: 0.1,
        onUpdate: (self) => {
          setMasterProgress(self.progress);
          // Set visible ONLY when scroll is within Approach -> Process Theatre territory
          const active = self.progress > 0.0 && self.progress < 1.0;
          setIsInTerritory(active);
        },
        onLeaveBack: () => {
          setMasterProgress(0);
          setIsInTerritory(false);
        },
        onLeave: () => {
          setMasterProgress(1);
          setIsInTerritory(false);
        },
      });
    }, containerRef);

    // Refresh ScrollTrigger geometry after mounting
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* SHARED TRAVELLING OBJECT PORTAL (SINGLE DOM INSTANCE WITH STRICT LIFECYCLE) */}
      <TravellingObject progress={masterProgress} isVisible={isInTerritory} />

      {/* SECTION 03: APPROACH (250VH STICKY TERRITORY) */}
      <ApproachSection />

      {/* SECTION 04: PROCESS THEATRE (500VH STICKY THEATRE) */}
      <ProcessTheatreSection />
    </div>
  );
};
