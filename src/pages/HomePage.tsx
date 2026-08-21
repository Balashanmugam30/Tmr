import React from 'react';
import { ScrollyHero } from '@/sections/home/ScrollyHero';
import { ManifestoSection } from '@/sections/home/ManifestoSection';
import { ApproachProcessJourney } from '@/sections/home/ApproachProcessJourney';
import { PpfSection } from '@/sections/home/PpfSection';
import { TransformationSection } from '@/sections/home/TransformationSection';
import { StandardSection } from '@/sections/home/StandardSection';
import { GalleryShowcaseSection } from '@/sections/home/GalleryShowcaseSection';
import { TestimonialsSection } from '@/sections/home/TestimonialsSection';
import { ShowroomSection } from '@/sections/home/ShowroomSection';
import { FaqCtaSection } from '@/sections/home/FaqCtaSection';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full bg-tmr-warmwhite">
      {/* 1. Cinematic Scroll-Driven Hero */}
      <ScrollyHero />

      {/* 2. Manifesto: 01 / TMR */}
      <ManifestoSection />

      {/* 3, 4 & 5. Continuous Approach + Process Theatre + Overlapping Protection Journey */}
      <ApproachProcessJourney />

      {/* 6. PPF: The Invisible Shield */}
      <PpfSection />

      {/* 7. Before / After Transformation Slider */}
      <TransformationSection />

      {/* 8. TMR Standard: 04 / STANDARD */}
      <StandardSection />

      {/* 9. The Gallery Showcase */}
      <GalleryShowcaseSection />

      {/* 10. Testimonials / Customer Proof */}
      <TestimonialsSection />

      {/* 11. Tiruppur Showroom Location */}
      <ShowroomSection />

      {/* 12. FAQ & Final CTA */}
      <FaqCtaSection />
    </div>
  );
};
