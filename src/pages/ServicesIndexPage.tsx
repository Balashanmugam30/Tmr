import React from 'react';
import { ServicesHero } from '@/sections/services/ServicesHero';
import { ServiceIndexStage } from '@/sections/services/ServiceIndexStage';
import { DiagnosticsSection } from '@/sections/services/DiagnosticsSection';
import { ProtectionSpotlightSection } from '@/sections/services/ProtectionSpotlightSection';
import { StudioProcessTimeline } from '@/sections/services/StudioProcessTimeline';
import { ConsultationCtaSection } from '@/sections/services/ConsultationCtaSection';

export const ServicesIndexPage: React.FC = () => {
  return (
    <div className="w-full bg-[#fff8f6] text-[#111111] min-h-screen selection:bg-[#FF4B00] selection:text-white font-sans overflow-x-hidden">
      {/* SECTION 01 — HERO */}
      <ServicesHero />

      {/* SECTION 02 — MASTER SERVICE INDEX (12-COL ASYMMETRIC STAGE) */}
      <ServiceIndexStage />

      {/* SECTION 03 — DIAGNOSTICS / CHOOSE BY NEED */}
      <DiagnosticsSection />

      {/* SECTION 04 — FLAGSHIP PROTECTION SPOTLIGHT (CERAMIC & PPF DUAL ZONES) */}
      <ProtectionSpotlightSection />

      {/* SECTION 05 — STUDIO PROCESS TIMELINE */}
      <StudioProcessTimeline />

      {/* SECTION 06 — FINAL CONSULTATION CTA */}
      <ConsultationCtaSection />
    </div>
  );
};

export default ServicesIndexPage;
