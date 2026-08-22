import React from 'react';
import { ServicesLiquidHeroCanvas } from './ServicesLiquidHeroCanvas';

export const ServicesHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-svh h-svh flex items-center overflow-hidden border-b border-[#D8D8D5] bg-[#050505]">
      {/* Liquid Water Surface Canvas (GPU-accelerated WebGL Refraction) */}
      <ServicesLiquidHeroCanvas imageSrc="/images/protection/protection-hero.webp" />

      {/* Controlled Gradient Overlay for Text Contrast (Photography remains clearly visible) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/40 pointer-events-none z-[1]" />

      {/* Centered Composition Content Container */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16 w-full relative z-10 text-white font-sans">
        <div className="max-w-2xl space-y-6">
          
          {/* Eyebrow */}
          <span className="font-manrope font-bold text-[#FF4B00] uppercase tracking-[0.3em] text-xs sm:text-[13px] block">
            TMR CAR CARE / SERVICES
          </span>

          {/* Primary Minimal H1 */}
          <h1 className="font-intertight font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[96px] leading-[0.92] uppercase tracking-[-0.03em] text-white">
            SERVICES
          </h1>

          {/* Minimal 1-2 Line Supporting Statement */}
          <p className="font-manrope text-base sm:text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-normal pt-1">
            Precision automotive care, protection and finishing in Tiruppur.
          </p>

          {/* Single Understated Primary CTA */}
          <div className="pt-4">
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
