import React from 'react';
import { ScrollyHero } from '@/sections/home/ScrollyHero';
import { ManifestoSection } from '@/sections/home/ManifestoSection';
import { ApproachProcessJourney } from '@/sections/home/ApproachProcessJourney';
import { CeramicSection } from '@/sections/home/CeramicSection';
import { PpfSection } from '@/sections/home/PpfSection';
import { TransformationSection } from '@/sections/home/TransformationSection';
import { GalleryShowcaseSection } from '@/sections/home/GalleryShowcaseSection';
import { ShowroomSection } from '@/sections/home/ShowroomSection';
import { FaqCtaSection } from '@/sections/home/FaqCtaSection';
import { FinalCtaSection } from '@/sections/home/FinalCtaSection';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full bg-tmr-warmwhite">
      {/* 1. Cinematic Scroll-Driven Hero */}
      <ScrollyHero />

      {/* 2. Manifesto: 01 / TMR */}
      <ManifestoSection />

      {/* 3 & 4. Continuous Approach + Process Theatre Journey */}
      <ApproachProcessJourney />

      {/* 5. Ceramic Coating: 03 / PROTECTION */}
      <CeramicSection />

      {/* 6. PPF: The Invisible Shield */}
      <PpfSection />

      {/* 7. Before / After Transformation Slider */}
      <TransformationSection />

      {/* 8. The Gallery Showcase */}
      <GalleryShowcaseSection />

      {/* 9. Tiruppur Showroom Location */}
      <ShowroomSection />

      {/* 10. FAQ: Questions, Answered */}
      <FaqCtaSection />

      {/* 11. Final Decision CTA: Your Car Deserves Better */}
      <FinalCtaSection />
    </div>
  );
};
