import React, { useState } from 'react';
import { companyData } from '@/data/company';

interface JourneyStep {
  id: string;
  indexNumber: string;
  title: string;
  desc: string;
  image: string;
  altText: string;
}

export const StudioProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: JourneyStep[] = [
    {
      id: "choose",
      indexNumber: "01",
      title: "CHOOSE",
      desc: "Tell us what your vehicle needs.",
      image: "/images/services/journey/journey-choose.jpg",
      altText: "TMR Car Care service consultation and vehicle assessment in Tiruppur",
    },
    {
      id: "enquire",
      indexNumber: "02",
      title: "ENQUIRE",
      desc: "Reach TMR through WhatsApp or phone.",
      image: "/images/services/journey/journey-enquire.jpg",
      altText: "WhatsApp service enquiry and vehicle consultation with TMR Car Care",
    },
    {
      id: "confirm",
      indexNumber: "03",
      title: "CONFIRM",
      desc: "We assess the vehicle and confirm the recommended service and appointment.",
      image: "/images/services/journey/journey-confirm.jpg",
      altText: "Vehicle inspection and paint clearcoat assessment at TMR Car Care Studio",
    },
    {
      id: "visit",
      indexNumber: "04",
      title: "VISIT",
      desc: "Bring your vehicle to the TMR studio in Tiruppur.",
      image: "/images/services/journey/journey-visit.jpg",
      altText: "Vehicle arrival inside the TMR Car Care detailing studio in Tiruppur",
    },
  ];

  return (
    <section id="studio-process" className="w-full bg-[#050505] text-white py-20 sm:py-28 border-b border-white/10 relative overflow-hidden font-manrope">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
        
        {/* Section Header Intro */}
        <div className="mb-14 max-w-2xl">
          <span className="font-manrope font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
            THE TMR JOURNEY
          </span>
          <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white mb-3">
            FROM FIRST MESSAGE TO FINAL REVEAL.
          </h2>
          <p className="font-manrope text-sm sm:text-base text-white/70 font-normal leading-relaxed">
            Choose the service that fits your vehicle, talk to our team, confirm the treatment, then bring the vehicle to our studio in Tiruppur.
          </p>
        </div>

        {/* Desktop 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Step Selector */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  onFocus={() => setActiveStep(idx)}
                  tabIndex={0}
                  className={`w-full text-left border-b border-white/10 py-5 transition-all duration-300 group outline-none ${
                    isActive ? "opacity-100 pl-2 sm:pl-4" : "opacity-50 hover:opacity-100 hover:pl-2"
                  }`}
                  aria-expanded={isActive}
                  aria-label={`Step ${step.indexNumber}: ${step.title}`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span
                        className={`font-editorial text-2xl sm:text-3xl italic transition-colors duration-300 ${
                          isActive ? "text-[#FF4B00]" : "text-white/40"
                        }`}
                      >
                        {step.indexNumber}
                      </span>
                      <div>
                        <h3 className="font-intertight font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-white">
                          {step.title}
                        </h3>
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-out ${
                            isActive ? "max-h-16 opacity-100 pt-2" : "max-h-0 opacity-0"
                          }`}
                        >
                          <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>

                    <span
                      className={`text-xl text-[#FF4B00] transition-all duration-300 ${
                        isActive ? "opacity-100 translate-x-1" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                    >
                      ↗
                    </span>
                  </div>

                  {/* Mobile Inline Preview Frame */}
                  {isActive && (
                    <div className="lg:hidden pt-4">
                      <div className="aspect-[16/9] w-full overflow-hidden border border-white/10 bg-[#111111] relative">
                        <img
                          src={step.image}
                          alt={step.altText}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Single Stable Media Stage (Desktop) */}
          <div className="hidden lg:block lg:col-span-6">
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-white/10 bg-[#111111] shadow-2xl">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.id}
                    className={`absolute inset-0 transition-all duration-500 ease-out ${
                      isActive
                        ? "opacity-100 scale-100 translate-x-0 z-10"
                        : "opacity-0 scale-98 translate-x-2 z-0 pointer-events-none"
                    }`}
                  >
                    <img
                      src={step.image}
                      alt={step.altText}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white font-manrope">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF4B00]">
                        STAGE {step.indexNumber} // {step.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Minimal Footer CTA Link */}
        <div className="pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 mt-16 font-manrope">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-white/60">
            NOT SURE WHERE TO START?
          </span>
          <a
            href={`https://wa.me/${companyData.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-white/20 hover:border-white hover:bg-white hover:text-[#111111] text-white font-manrope font-bold text-xs uppercase tracking-widest px-6 py-3.5 transition-all duration-300"
            aria-label="Contact TMR Car Care via WhatsApp"
          >
            <span>WHATSAPP TMR</span>
            <span className="text-base">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};
