import React from 'react';
import { Container } from '@/components/Container';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Button } from '@/components/Button';
import { companyData } from '@/data/company';

const homeFaqs = [
  {
    question: 'How long does a ceramic coating last?',
    answer:
      'Depending on the package chosen and maintenance routine, our coatings last between 3 to 7 years.',
  },
  {
    question: 'Do you need to keep my car overnight?',
    answer:
      'Yes, most major services like Paint Correction + Ceramic Coating or PPF installation require 2-4 days to ensure perfection and proper curing times.',
  },
  {
    question: 'What is the difference between PPF and Ceramic Coating?',
    answer:
      "PPF is a physical film that prevents rock chips and deep scratches. Ceramic coating is a liquid polymer that provides gloss, chemical resistance, and makes cleaning easier, but won't stop rock chips.",
  },
  {
    question: 'Do you offer pick-up and drop services?',
    answer:
      'Yes, we offer secure enclosed transport for premium vehicles within a certain radius of our Tiruppur studio.',
  },
];

export const FaqCtaSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent(
    'Hello TMR Car Care! I would like to book a consultation for my vehicle.'
  )}`;

  return (
    <section className="w-full bg-tmr-warmwhite">
      {/* FAQ Block */}
      <div className="max-w-[800px] mx-auto px-mobile-margin md:px-desktop-margin py-24 md:py-section-gap">
        <h2 className="font-manrope font-black text-3xl sm:text-5xl uppercase text-center mb-12 tracking-tighter text-tmr-softblack">
          Frequently Asked Questions
        </h2>
        <FAQAccordion items={homeFaqs} />
      </div>

      {/* Massive Final CTA Section */}
      <div className="w-full bg-tmr-softblack py-28 md:py-48 px-mobile-margin md:px-desktop-margin text-center flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-tmr-orange/5 mix-blend-overlay pointer-events-none" />

        <h2 className="font-manrope font-black text-5xl sm:text-7xl md:text-8xl lg:text-[130px] text-white uppercase leading-[0.85] tracking-tighter relative z-10 mb-12">
          YOUR CAR
          <br />
          <span className="text-tmr-orange">DESERVES</span>
          <br />
          BETTER.
        </h2>

        <div className="relative z-10">
          <Button
            variant="primary"
            size="lg"
            className="bg-white text-tmr-softblack hover:bg-tmr-orange hover:text-white px-10 md:px-14 py-4 md:py-5 font-bold tracking-widest"
            href={whatsappUrl}
            target="_blank"
          >
            Book Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
