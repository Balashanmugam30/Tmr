import React from 'react';
import { companyData } from '@/data/company';

export const ConsultationCtaSection: React.FC = () => {
  return (
    <section
      id="consultation-cta"
      className="w-full bg-[#050505] text-white py-20 sm:py-28 lg:py-32 border-t border-white/10 relative overflow-hidden font-manrope selection:bg-[#FF4B00] selection:text-white"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
        
        {/* Editorial Conversion Grid: Left ~60%, Right ~40% */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (60%): Editorial Statement, Copy, & Engineered Primary CTA */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              THE LAST DETAIL
            </span>

            <h2 className="font-manrope font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.05] text-white">
              THE RIGHT SERVICE<br />
              <span className="text-white/60">STARTS WITH</span><br />
              <span className="text-[#FF4B00]">THE RIGHT ASSESSMENT.</span>
            </h2>

            <p className="max-w-[520px] text-sm sm:text-base text-white/70 font-normal leading-relaxed pt-2">
              Tell us what you're driving, what you're noticing, and what you want to improve. We'll help you choose the right treatment for your vehicle.
            </p>

            {/* Conversion Actions Row */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              
              {/* Primary Engineered Outline CTA (Orange sweep fill on hover) */}
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-flex items-center justify-between gap-6 border border-white/30 px-8 py-5 text-xs font-bold uppercase tracking-widest text-white overflow-hidden transition-all duration-300 min-w-[280px]"
                aria-label="Book a consultation on WhatsApp with TMR Car Care Studio"
              >
                <span className="absolute inset-0 bg-[#FF4B00] w-0 group-hover:w-full transition-all duration-500 ease-out z-0" />
                <span className="relative z-10 group-hover:text-[#111111] transition-colors duration-300">
                  BOOK A CONSULTATION
                </span>
                <span className="relative z-10 text-base text-[#FF4B00] group-hover:text-[#111111] group-hover:translate-x-1.5 transition-all duration-300">
                  ↗
                </span>
              </a>

              {/* Secondary Editorial Link */}
              <a
                href="https://maps.google.com/?q=TMR+Car+Care+Avinashi+Road+Tiruppur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-300 py-2"
                aria-label="Get directions to TMR Car Care Tiruppur studio"
              >
                <span>GET DIRECTIONS</span>
                <span className="text-sm text-[#FF4B00]">↗</span>
              </a>

            </div>
          </div>

          {/* Right Column (40%): Studio Information Block (Architectural divider lines) */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10 space-y-6">
            
            {/* Studio Header */}
            <div>
              <span className="font-bold text-[11px] uppercase tracking-widest text-white/40 block mb-1">
                TMR CAR CARE
              </span>
              <h3 className="font-intertight font-extrabold text-xl uppercase tracking-tight text-white">
                TIRUPPUR STUDIO
              </h3>
            </div>

            {/* Address */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF4B00] block">
                LOCATION
              </span>
              <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
                Avinashi Road, Near Hope College Junction,<br />
                Tiruppur, Tamil Nadu – 641602
              </p>
            </div>

            {/* Direct Contact */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF4B00] block">
                CALL / WHATSAPP
              </span>
              <a
                href={`tel:${companyData.contact.phone.replace(/\s+/g, '')}`}
                className="text-xs sm:text-sm font-bold tracking-wider text-white hover:text-[#FF4B00] transition-colors"
              >
                +91 99443 35520
              </a>
            </div>

            {/* Studio Hours */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF4B00] block">
                WORKING HOURS
              </span>
              <p className="text-xs text-white/70 font-normal leading-normal">
                Monday – Saturday: 9:00 AM – 8:00 PM
              </p>
              <p className="text-xs text-white/50 font-normal leading-normal">
                Sunday: 10:00 AM – 5:00 PM (By Appointment Only)
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
