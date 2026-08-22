import React from 'react';
import { ServicesHero } from '@/sections/services/ServicesHero';
import { ContinuousServiceShowcase } from '@/sections/services/ContinuousServiceShowcase';
import { ProtectionHighlight } from '@/sections/services/ProtectionHighlight';
import { ServicesFinalCta } from '@/sections/services/ServicesFinalCta';

export const ServicesIndexPage: React.FC = () => {
  return (
    <div className="w-full bg-[#050505] text-[#F5F4EF] min-h-screen selection:bg-[#FF4B00] selection:text-white font-sans overflow-x-hidden">
      {/* SECTION 01 — HERO (Approved & Locked 100svh Liquid WebGL Hero) */}
      <ServicesHero />

      {/* SECTION 02 — CONTINUOUS CINEMATIC 50/50 SERVICE SHOWCASE (6 Services) */}
      <ContinuousServiceShowcase />

      {/* SECTION 03 — PROTECTION HIGHLIGHT (Ceramic Coating & PPF Dual Block) */}
      <ProtectionHighlight />

      {/* SECTION 04 — FINAL CONVERSION CTA (Minimal Consultation Block) */}
      <ServicesFinalCta />
    </div>
  );
};

export default ServicesIndexPage;
