import React, { useRef } from 'react';
import { ApproachSection } from './ApproachSection';
import { ProcessTheatreSection } from './ProcessTheatreSection';
import { TravellingObject } from './TravellingObject';

export const ApproachProcessJourney: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* SHARED TRAVELLING OBJECT PORTAL (DIRECT DOM TRANSFORM, ZERO REACT RERENDERS) */}
      <TravellingObject containerRef={containerRef} />

      {/* SECTION 02: APPROACH */}
      <ApproachSection />

      {/* SECTION 04: PROCESS THEATRE (500VH STICKY THEATRE) */}
      <div className="relative z-10">
        <ProcessTheatreSection />
      </div>
    </div>
  );
};
