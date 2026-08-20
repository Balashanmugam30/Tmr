import React from 'react';
import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { companyData } from '@/data/company';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="max-w-3xl space-y-6">
          <SectionLabel>The Craft Manifesto</SectionLabel>
          <h1 className="font-manrope font-extrabold text-4xl md:text-6xl text-tmr-softblack">
            About TMR Car Care
          </h1>
          <p className="font-editorial text-2xl md:text-3xl text-tmr-muted">
            "Precision automotive care engineered for discerning vehicle owners."
          </p>
          <p className="font-manrope text-base text-tmr-softblack/80 leading-relaxed">
            Located on Avinashi Road in Tiruppur, TMR Car Care was founded to bridge the gap between ordinary car washing and true high-end automotive detailing. Our studio is built around controlled studio lighting, climate-monitored installation bays, pH-neutral chemical standards, and certified technicians.
          </p>
          <div className="pt-6 border-t border-tmr-concrete space-y-2">
            <h3 className="font-manrope font-bold text-sm uppercase tracking-wider text-tmr-orange">
              Workshop Location
            </h3>
            <p className="font-manrope text-sm text-tmr-softblack">{companyData.address.fullText}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
