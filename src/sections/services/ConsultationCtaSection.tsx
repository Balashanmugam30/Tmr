import React from 'react';
import { companyData } from '@/data/company';

export const ConsultationCtaSection: React.FC = () => {
  return (
    <section id="consultation-cta" className="w-full bg-[#050505] text-white py-20 md:py-32 px-4 sm:px-8 md:px-16 text-center border-t border-white/10 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FF4B00]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10 font-manrope">
        {/* Headline */}
        <h2 className="font-intertight font-extrabold text-3xl sm:text-5xl md:text-[72px] lg:text-[80px] leading-[0.94] uppercase tracking-tight mb-8 text-white">
          NOT SURE WHICH SERVICE IS RIGHT FOR YOU?
        </h2>

        {/* Body Description */}
        <p className="text-base sm:text-lg text-white/60 mb-12 max-w-2xl leading-relaxed font-normal">
          Speak directly with our technicians. We'll assess your vehicle's condition and recommend the precise treatment required.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center max-w-md sm:max-w-none">
          <a
            href={`https://wa.me/${companyData.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF4B00] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 flex justify-center items-center gap-3 hover:bg-white hover:text-black transition-colors duration-300 w-full sm:w-auto rounded-none shadow-md"
            aria-label="WhatsApp TMR Car Care Studio"
          >
            <span>WHATSAPP TMR</span>
            <span className="text-base">↗</span>
          </a>

          <a
            href={`tel:${companyData.contact.phone.replace(/\s+/g, '')}`}
            className="border border-white/20 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 flex justify-center items-center gap-3 hover:bg-white hover:text-black transition-colors duration-300 w-full sm:w-auto rounded-none"
            aria-label="Call TMR Car Care Studio"
          >
            <span>CALL TMR</span>
            <span className="text-base">📞</span>
          </a>
        </div>
      </div>
    </section>
  );
};
