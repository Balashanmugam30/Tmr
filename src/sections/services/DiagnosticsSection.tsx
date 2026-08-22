import React from 'react';
import { Link } from 'react-router-dom';

export const DiagnosticsSection: React.FC = () => {
  const diagnosticItems = [
    {
      question: "NEED A CLEANER FINISH?",
      slug: "car-wash-cleaning",
    },
    {
      question: "PAINT LOST ITS SHINE?",
      slug: "detailing-paint-care",
    },
    {
      question: "WORRIED ABOUT SCRATCHES?",
      slug: "ppf-paint-protection",
    },
    {
      question: "INTERIOR FEELS DUSTY?",
      slug: "car-accessories",
    },
  ];

  return (
    <section className="w-full bg-[#fff8f6] text-[#111111] py-20 md:py-32 border-b border-[#D8D8D5]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
        
        {/* Section Header */}
        <div className="border-t border-[#D8D8D5] pt-8 mb-12 flex justify-between font-manrope">
          <span className="font-bold text-xs uppercase tracking-widest text-[#858585]">
            DIAGNOSTICS
          </span>
        </div>

        {/* 4 Full-Width Indented Question Rows */}
        <div className="flex flex-col border-t border-[#D8D8D5] font-intertight">
          {diagnosticItems.map((item, idx) => (
            <Link
              key={idx}
              to={`/services/${item.slug}`}
              className="group block py-8 md:py-12 border-b border-[#D8D8D5] hover:pl-8 transition-all duration-300"
              aria-label={`Diagnostic option: ${item.question}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-3xl sm:text-5xl md:text-[64px] uppercase text-[#111111] group-hover:text-[#FF4B00] transition-colors leading-none tracking-tight">
                  {item.question}
                </h3>
                <span className="text-2xl md:text-4xl text-[#858585] group-hover:text-[#FF4B00] group-hover:translate-x-2 transition-all duration-300 pr-4">
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
