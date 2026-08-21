import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ApproachSection } from './ApproachSection';
import { ProcessTheatreSection } from './ProcessTheatreSection';
import { CeramicSection } from './CeramicSection';
import { TravellingObject } from './TravellingObject';

gsap.registerPlugin(ScrollTrigger);

export const ApproachProcessJourney: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const processWrapperRef = useRef<HTMLDivElement>(null);
  const protectionWrapperRef = useRef<HTMLDivElement>(null);
  const [masterProgress, setMasterProgress] = useState<number>(0);
  const [isInTerritory, setIsInTerritory] = useState<boolean>(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. SINGLE MASTER SCROLLTRIGGER TRACKING COMBINED APPROACH + PROCESS THEATRE SCROLL TERRITORY
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

      // 2. CONTROLLED PROCESS -> PROTECTION FOREGROUND COVERING TRANSITION
      if (processWrapperRef.current && protectionWrapperRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: protectionWrapperRef.current,
            start: 'top bottom', // Begins as Protection enters bottom of viewport over Process
            end: 'top top', // Completes when Protection completely covers Process
            scrub: 0.1,
          },
        });

        // Process recedes behind (remains visually solid at 88% opacity)
        tl.to(
          processWrapperRef.current,
          { scale: 0.97, y: '-2vh', opacity: 0.88, ease: 'none' },
          0
        );

        // Protection rises into foreground as a 100% SOLID OPAQUE sheet (opacity remains 1)
        tl.fromTo(
          protectionWrapperRef.current,
          { translateY: '100vh', scale: 1.01 },
          { translateY: '0vh', scale: 1.00, ease: 'none' },
          0
        );
      }
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

      {/* SECTION 02: APPROACH */}
      <ApproachSection />

      {/* STACKED CONTAINER FOR PROCESS THEATRE + OVERLAPPING PROTECTION */}
      <div className="relative w-full">
        {/* SECTION 04: PROCESS THEATRE (500VH STICKY THEATRE, Z-INDEX 10) */}
        <div ref={processWrapperRef} className="relative z-10">
          <ProcessTheatreSection />
        </div>

        {/* SECTION 03 / PROTECTION: SOLID OPAQUE FOREGROUND SHEET OVERLAP (-100VH OFFSET, Z-INDEX 30) */}
        <div
          ref={protectionWrapperRef}
          className="relative z-30 -mt-[100vh] isolate"
          style={{ opacity: 1 }}
        >
          <CeramicSection />
        </div>
      </div>
    </div>
  );
};
