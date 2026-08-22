import React from 'react';
import { companyData } from '@/data/company';

export const ServicesFinalCta: React.FC = () => {
  return (
    <section id="services-final-cta" className="w-full bg-[#050505] text-white py-20 md:py-28 px-4 sm:px-8 md:px-16 text-center relative overflow-hidden">
      <div className="max-w-2xl mx-auto flex flex-col items-center space-y-6 font-manrope">
        
        {/* Headline */}
        <h2 className="font-intertight font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white leading-none">
          NOT SURE WHERE TO START?
        </h2>

        {/* Body Text */}
        <p className="text-base sm:text-lg text-white/70 font-normal">
          Talk to TMR about your vehicle.
        </p>

        {/* Minimal WhatsApp CTA Link */}
        <div className="pt-4">
          <a
            href={`https://wa.me/${companyData.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-col items-center gap-1 font-bold text-xs sm:text-sm uppercase tracking-widest text-white hover:text-white transition-colors duration-300"
            aria-label="Talk to TMR Car Care on WhatsApp"
          >
            <div className="inline-flex items-center gap-2">
              <span>WHATSAPP TMR</span>
              <span className="text-base text-[#FF4B00] group-hover:translate-x-1 transition-transform duration-300">↗</span>
            </div>
            
            {/* Expanding TMR Orange Underline */}
            <span className="w-8 group-hover:w-full h-[2px] bg-[#FF4B00] transition-all duration-300 ease-out" />
          </a>
        </div>

      </div>
    </section>
  );
};
