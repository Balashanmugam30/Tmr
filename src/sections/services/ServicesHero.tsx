import React from 'react';
import { companyData } from '@/data/company';

export const ServicesHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[640px] md:h-[716px] flex items-end pb-16 pt-32 overflow-hidden border-b border-[#D8D8D5] bg-[#050505]">
      {/* Background Image & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/protection/protection-hero.webp"
          alt="TMR Car Care Services Hero"
          className="w-full h-full object-cover opacity-60 grayscale select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-black/30 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-[1360px] mx-auto px- mobile-margin px-4 sm:px-8 md:px-16 w-full relative z-10 text-white font-sans">
        {/* Eyebrow */}
        <span className="font-manrope font-bold text-[#FF4B00] uppercase tracking-[0.3em] text-xs sm:text-[13px] block mb-4">
          TMR CAR CARE / SERVICES
        </span>

        {/* H1 Headline */}
        <h1 className="font-intertight font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[0.95] uppercase tracking-[-0.02em] mb-6 max-w-4xl text-white">
          CARE FOR EVERY PART OF YOUR CAR.
        </h1>

        {/* Body Description */}
        <p className="font-manrope text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed font-normal">
          From daily maintenance washing to multi-stage paint correction and invisible self-healing armor. Engineered for vehicles in Tiruppur.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2">
          <a
            href="#services-index"
            className="bg-[#FF4B00] text-white font-manrope font-bold text-xs uppercase tracking-widest px-8 py-4 flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-colors duration-300 rounded-none shadow-md"
            aria-label="Explore services index"
          >
            <span>EXPLORE SERVICES</span>
            <span className="text-base">↓</span>
          </a>

          <a
            href={`https://wa.me/${companyData.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 text-white font-manrope font-bold text-xs uppercase tracking-widest px-8 py-4 flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-colors duration-300 rounded-none"
            aria-label="WhatsApp TMR Car Care"
          >
            <span>WHATSAPP TMR</span>
            <span className="text-base">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};
