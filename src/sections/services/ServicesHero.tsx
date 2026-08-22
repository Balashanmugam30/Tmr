import React from 'react';
import { ServicesLiquidHeroCanvas } from './ServicesLiquidHeroCanvas';

export const ServicesHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-svh h-svh flex items-center justify-center text-center overflow-hidden border-b border-[#D8D8D5] bg-[#050505]">
      {/* GPU-Accelerated Directional Liquid Surface WebGL Canvas (100% Approved & Locked) */}
      <ServicesLiquidHeroCanvas imageSrc="/images/services-hero-gloss.jpg" />

      {/* Restrained Readability Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#050505]/80 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60 pointer-events-none z-[1]" />

      {/* Centered Minimal Editorial Composition */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16 w-full relative z-10 text-white font-sans flex flex-col items-center justify-center">
        <div className="max-w-xl mx-auto flex flex-col items-center space-y-6">
          
          {/* Primary Centered H1 Headline */}
          <h1 className="font-manrope font-extrabold text-6xl sm:text-8xl md:text-[96px] lg:text-[104px] leading-none uppercase tracking-[-0.03em] text-white">
            SERVICES
          </h1>

          {/* Minimal 1-Sentence Supporting Statement */}
          <p className="font-manrope text-base sm:text-lg md:text-xl text-white/85 max-w-lg mx-auto leading-relaxed font-normal">
            Premium detailing, protection and finishing for your vehicle.
          </p>

          {/* Refined Editorial Text Action CTA (No box, no pill, thin orange expanding underline) */}
          <div className="pt-6 flex justify-center">
            <a
              href="#services-index"
              className="group inline-flex flex-col items-center gap-1.5 font-manrope font-bold text-xs sm:text-sm uppercase tracking-widest text-white hover:text-white transition-colors duration-300"
              aria-label="Scroll to explore services index"
            >
              <div className="inline-flex items-center gap-2">
                <span>EXPLORE SERVICES</span>
                <span className="text-base group-hover:translate-x-1 transition-transform duration-300">↓</span>
              </div>
              
              {/* Thin TMR Orange Underline */}
              <span className="w-10 group-hover:w-full h-[2px] bg-[#FF4B00] transition-all duration-300 ease-out" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
