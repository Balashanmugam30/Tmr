import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface DiagnosticItem {
  id: string;
  indexNumber: string;
  question: string;
  serviceTitle: string;
  slug: string;
  previewImage: string;
}

export const DiagnosticsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const diagnosticItems: DiagnosticItem[] = [
    {
      id: "wash",
      indexNumber: "01",
      question: "NEED A CLEANER FINISH?",
      serviceTitle: "CAR WASH & CLEANING",
      slug: "car-wash-cleaning",
      previewImage: "/images/manifesto/manifesto-editorial.webp",
    },
    {
      id: "detailing",
      indexNumber: "02",
      question: "PAINT LOST ITS SHINE?",
      serviceTitle: "DETAILING & PAINT CARE",
      slug: "detailing-paint-care",
      previewImage: "/images/transformation/after.webp",
    },
    {
      id: "ppf",
      indexNumber: "03",
      question: "WORRIED ABOUT SCRATCHES?",
      serviceTitle: "PPF & PAINT PROTECTION",
      slug: "ppf-paint-protection",
      previewImage: "/images/ppf/ppf-surface.webp",
    },
    {
      id: "accessories",
      indexNumber: "04",
      question: "INTERIOR FEELS DUSTY?",
      serviceTitle: "CAR ACCESSORIES",
      slug: "car-accessories",
      previewImage: "/images/gallery/gallery-06.webp",
    },
  ];

  return (
    <section className="w-full bg-[#fff8f6] text-[#111111] py-20 md:py-32 border-b border-[#D8D8D5] relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16 font-manrope">
        
        {/* Section Header Intro */}
        <div className="mb-12">
          <span className="font-manrope font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
            WHAT DOES YOUR CAR NEED?
          </span>
          <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#111111] mb-3">
            WHAT NEEDS ATTENTION?
          </h2>
          <p className="font-manrope text-sm sm:text-base text-[#858585] max-w-md font-normal leading-relaxed">
            Choose what you're noticing and we'll point you to the right service.
          </p>
        </div>

        {/* 4 Editorial Diagnostic Rows Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-[#D8D8D5]">
          
          {/* Left Column: 4 Interactive Rows (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col">
            {diagnosticItems.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`group border-b border-[#D8D8D5] py-7 sm:py-9 cursor-pointer transition-all duration-300 ${
                    isActive ? 'opacity-100 pl-2 sm:pl-4' : 'opacity-60 hover:opacity-100 hover:pl-2'
                  }`}
                >
                  <Link
                    to={`/services/${item.slug}`}
                    className="block w-full"
                    aria-label={`Explore ${item.serviceTitle} for ${item.question}`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      
                      {/* Number & Question */}
                      <div className="flex items-baseline gap-4 sm:gap-6">
                        <span
                          className={`font-editorial text-2xl sm:text-3xl italic font-normal transition-colors duration-300 ${
                            isActive ? 'text-[#FF4B00]' : 'text-[#858585]'
                          }`}
                        >
                          {item.indexNumber}
                        </span>

                        <div>
                          <h3
                            className={`font-intertight font-extrabold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight transition-colors duration-300 ${
                              isActive ? 'text-[#111111]' : 'text-[#111111]'
                            }`}
                          >
                            {item.question}
                          </h3>

                          {/* Mapped Service Title (Revealed on active/hover) */}
                          <div
                            className={`overflow-hidden transition-all duration-300 ease-out ${
                              isActive ? 'max-h-12 opacity-100 pt-2' : 'max-h-0 opacity-0'
                            }`}
                          >
                            <span className="font-manrope font-bold text-xs sm:text-sm uppercase tracking-widest text-[#FF4B00] inline-flex items-center gap-2">
                              <span>RECOMMENDED: {item.serviceTitle}</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Arrow Link */}
                      <span
                        className={`text-2xl sm:text-3xl text-[#FF4B00] transition-all duration-300 ${
                          isActive
                            ? 'opacity-100 translate-x-1'
                            : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                        }`}
                      >
                        ↗
                      </span>
                    </div>

                    {/* Mobile Inline Preview Frame */}
                    {isActive && (
                      <div className="lg:hidden pt-4">
                        <div className="aspect-[16/10] w-full overflow-hidden relative border border-[#D8D8D5]">
                          <img
                            src={item.previewImage}
                            alt={`Preview for ${item.question}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right Column: Restrained Floating Media Preview Stage (4 Cols Desktop) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-36">
            <div className="relative aspect-[16/11] w-full overflow-hidden border border-[#D8D8D5] bg-[#111111] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              {diagnosticItems.map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div
                    key={item.id}
                    className={`absolute inset-0 transition-all duration-500 ease-out ${
                      isActive
                        ? 'opacity-100 scale-100 translate-x-0 z-10'
                        : 'opacity-0 scale-98 translate-x-2 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={item.previewImage}
                      alt={`Visual preview for ${item.question}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white font-manrope">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF4B00]">
                        {item.serviceTitle}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Minimal Footer Consultation Action Link */}
        <div className="pt-12 flex items-center justify-between border-t border-[#D8D8D5] mt-12 font-manrope">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#858585]">
            NOT SURE WHICH SERVICE IS RIGHT?
          </span>
          <a
            href="https://wa.me/919944335520"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-manrope font-bold text-xs sm:text-sm uppercase tracking-widest text-[#FF4B00] hover:text-[#111111] transition-colors"
            aria-label="Talk to TMR on WhatsApp"
          >
            <span>TALK TO TMR</span>
            <span className="text-base">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};
