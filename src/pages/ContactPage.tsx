import React from 'react';
import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { Button } from '@/components/Button';
import { companyData } from '@/data/company';
import { faqsData } from '@/data/faqs';
import { FAQAccordion } from '@/components/FAQAccordion';

export const ContactPage: React.FC = () => {
  const whatsappUrl = `https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent(
    'Hello TMR Car Care! I would like to visit the Tiruppur studio or schedule a consultation.'
  )}`;

  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <SectionLabel>The Destination</SectionLabel>
            <h1 className="font-manrope font-extrabold text-4xl md:text-6xl text-tmr-softblack">
              Visit The Studio
            </h1>
            <p className="font-editorial text-2xl text-tmr-muted">
              "The Door Is Open. Experience precision automotive care in Tiruppur."
            </p>

            <div className="space-y-4 pt-4 font-manrope text-sm">
              <div>
                <h4 className="font-bold text-xs uppercase text-tmr-orange tracking-wider">Address</h4>
                <p className="text-tmr-softblack mt-1">{companyData.address.fullText}</p>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase text-tmr-orange tracking-wider">Direct Contact</h4>
                <p className="text-tmr-softblack mt-1">Phone: {companyData.contact.phoneFormatted}</p>
                <p className="text-tmr-softblack">Email: {companyData.contact.email}</p>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase text-tmr-orange tracking-wider">Studio Hours</h4>
                <p className="text-tmr-softblack mt-1">{companyData.hours.weekdays}</p>
                <p className="text-tmr-softblack">{companyData.hours.sunday}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button variant="accent" href={whatsappUrl} target="_blank">
                WhatsApp Booking
              </Button>
              <Button variant="secondary" href={`tel:${companyData.contact.phone}`}>
                Call Now
              </Button>
            </div>
          </div>

          <div className="bg-tmr-black text-white p-8 rounded-tmr space-y-6">
            <h2 className="font-manrope font-bold text-2xl tracking-tight text-white border-b border-white/10 pb-4">
              Send an Enquiry
            </h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 font-manrope text-sm">
              <div>
                <label className="block text-xs uppercase tracking-wider text-tmr-muted mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-tmr-softblack border border-white/20 p-3 rounded-tmr text-white focus:border-tmr-orange focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-tmr-muted mb-1">Phone / WhatsApp Number</label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full bg-tmr-softblack border border-white/20 p-3 rounded-tmr text-white focus:border-tmr-orange focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-tmr-muted mb-1">Vehicle Model & Service Required</label>
                <textarea
                  rows={3}
                  placeholder="e.g. BMW M4 - 5 Year Ceramic Coating"
                  className="w-full bg-tmr-softblack border border-white/20 p-3 rounded-tmr text-white focus:border-tmr-orange focus:outline-none"
                />
              </div>

              <Button variant="accent" className="w-full">
                Submit Enquiry
              </Button>
            </form>
          </div>
        </div>

        {/* FAQs */}
        <div className="pt-12 border-t border-tmr-concrete">
          <SectionLabel className="mb-6">Frequently Asked Questions</SectionLabel>
          <FAQAccordion items={faqsData} />
        </div>
      </Container>
    </div>
  );
};
