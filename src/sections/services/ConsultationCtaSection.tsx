import React from 'react';
import { companyData } from '@/data/company';

export const ConsultationCtaSection: React.FC = () => {
  return (
    <section
      id="consultation-cta"
      className="w-full bg-[#050505] text-white py-20 sm:py-28 lg:py-32 border-t border-white/10 relative overflow-hidden font-manrope selection:bg-[#FF4B00] selection:text-white"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
        
        {/* Asymmetrical 65/35 Editorial Conversion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (65%): Architectural Line, Eyebrow, Headline, & Supporting Copy */}
          <div className="lg:col-span-8 flex gap-6 sm:gap-8 items-start">
            
            {/* Subtle Vertical Architectural Accent Line */}
            <div className="w-[2px] self-stretch bg-[#FF4B00]/80 shrink-0 hidden sm:block" />

            <div className="space-y-6">
              <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block">
                READY TO START?
              </span>

              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-[1.02] text-white">
                START<br />
                <span className="text-white/60">WITH THE</span><br />
                <span className="text-[#FF4B00]">VEHICLE.</span>
              </h2>

              <p className="max-w-[520px] text-sm sm:text-base text-white/70 font-normal leading-relaxed pt-2">
                Tell us what you're driving, what you're noticing, and what you want to improve. We'll help you choose the right treatment for your vehicle.
              </p>
            </div>

          </div>

          {/* Right Column (35%): Dominant Primary Consultation Action & Secondary Link */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-6 pt-4 lg:pt-0">
            
            {/* Dominant Primary Outline CTA (Controlled left-to-right orange sweep fill) */}
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center justify-between gap-6 border border-white/30 px-8 py-5 text-xs font-bold uppercase tracking-widest text-white overflow-hidden transition-all duration-300 w-full sm:w-auto min-w-[260px]"
              aria-label="Book a vehicle consultation on WhatsApp with TMR Car Care Studio"
            >
              <span className="absolute inset-0 bg-[#FF4B00] w-0 group-hover:w-full transition-all duration-500 ease-out z-0" />
              <span className="relative z-10 group-hover:text-[#111111] transition-colors duration-300">
                BOOK A CONSULTATION
              </span>
              <span className="relative z-10 text-base text-[#FF4B00] group-hover:text-[#111111] group-hover:translate-x-1.5 transition-all duration-300">
                ↗
              </span>
            </a>

            {/* Secondary Editorial Action Link */}
            <a
              href="#services-index"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-300"
              aria-label="Return to top of Services list"
            >
              <span>VIEW SERVICES</span>
              <span className="text-sm text-[#FF4B00]">↗</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
