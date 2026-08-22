import React from 'react';
import { ServicesLiquidHeroCanvas } from './ServicesLiquidHeroCanvas';

export const ServicesHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-svh h-svh flex items-center justify-center text-center overflow-hidden border-b border-[#D8D8D5] bg-[#050505]">
      {/* GPU-Accelerated Directional Liquid Surface WebGL Canvas */}
      <ServicesLiquidHeroCanvas imageSrc="/images/services-hero-gloss.jpg" />

      {/* Restrained Readability Overlay (Background image remains rich, bright & clearly visible) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-[#050505]/80 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60 pointer-events-none z-[1]" />

      {/* Centered Minimal Editorial Composition */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16 w-full relative z-10 text-white font-sans flex flex-col items-center justify-center">
        <div className="max-w-2xl mx-auto space-y-6">
          
          {/* Eyebrow */}
          <span className="font-manrope font-bold text-[#FF4B00] uppercase tracking-[0.3em] text-xs sm:text-[13px] block">
            TMR CAR CARE / SERVICES
          </span>

          {/* Primary Centered H1 */}
          <h1 className="font-manrope font-extrabold text-6xl sm:text-8xl md:text-[96px] lg:text-[104px] leading-none uppercase tracking-[-0.03em] text-white">
            SERVICES
          </h1>

          {/* Minimal Supporting Statement (1-2 lines) */}
          <p className="font-manrope text-base sm:text-lg md:text-xl text-white/85 max-w-lg mx-auto leading-relaxed font-normal pt-1">
            Precision automotive care, protection and finishing in Tiruppur.
          </p>

          {/* Single Understated Primary CTA */}
          <div className="pt-4 flex justify-center">
            <a
              href="#services-index"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 font-manrope font-bold text-xs uppercase tracking-widest px-8 py-4 transition-all duration-300 rounded-none shadow-lg backdrop-blur-sm"
              aria-label="Scroll to view services index"
            >
              <span>VIEW SERVICES</span>
              <span className="text-base">↓</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
