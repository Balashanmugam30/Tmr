import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '@/data/faqs';

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
  dark?: boolean;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  className = '',
  dark = false,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4 w-full ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border border-tmr-concrete/60 transition-colors ${
              dark
                ? 'bg-tmr-softblack text-white border-white/10'
                : 'bg-white text-tmr-softblack'
            }`}
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-manrope font-bold text-base md:text-lg pr-4">
                {item.question}
              </span>
              <span
                className={`p-1 rounded-full transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-tmr-orange' : 'text-tmr-muted'
                }`}
              >
                <ChevronDown className="w-5 h-5" />
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm md:text-base font-manrope leading-relaxed opacity-90 border-t border-tmr-concrete/30">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
