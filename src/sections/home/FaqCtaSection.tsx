import React, { useState } from 'react';
import { Container } from '@/components/Container';
import { faqsData } from '@/data/faqs';
import { Plus, Minus } from 'lucide-react';

export const FaqCtaSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section
      id="faq-section"
      className="w-full bg-[#070809] text-[#F5F4EF] py-16 md:py-24 border-t border-b border-white/10 relative overflow-hidden isolate font-intertight"
      style={{ backgroundColor: '#070809' }}
    >
      <div className="absolute inset-0 pointer-events-none z-10 opacity-5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:18px_18px]" />

      <Container className="relative z-20 pt-2">
        <div className="w-full border-t border-white/10" />
      </Container>

      {/* MAIN CONTENT AREA */}
      <Container className="relative z-20 my-auto py-8 lg:py-12 space-y-12">
        {/* EDITORIAL HEADER GROUP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7 space-y-3">
            <h2 className="font-intertight font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase text-white leading-[0.9] tracking-[-0.04em]">
              BEFORE YOU <br />
              <span className="text-[#FF4B00]">ARRIVE.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="font-editorial text-lg sm:text-2xl italic text-white/85 leading-tight">
              "The essentials before you bring your vehicle to TMR."
            </p>
          </div>
        </div>

        {/* ACCORDION FAQ CONTAINER */}
        <div className="max-w-[960px] mx-auto divide-y divide-white/10 border-t border-b border-white/10">
          {faqsData.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div key={faq.question} className="py-5 sm:py-6 transition-colors duration-300">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left font-intertight group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 pr-4">
                    <span className="text-xs font-extrabold text-[#FF4B00]">
                      0{idx + 1}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white uppercase tracking-wide group-hover:text-[#FF4B00] transition-colors">
                      {faq.question}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white/70 group-hover:text-white group-hover:bg-[#FF4B00] group-hover:border-[#FF4B00] transition-all">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 pl-8 sm:pl-10 text-xs sm:text-sm text-white/75 leading-relaxed max-w-[800px] animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
