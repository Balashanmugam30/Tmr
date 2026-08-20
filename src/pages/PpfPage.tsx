import React from 'react';
import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { servicesData } from '@/data/services';

export const PpfPage: React.FC = () => {
  const service = servicesData.find((s) => s.id === 'ppf-paint-protection')!;

  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="max-w-3xl space-y-6">
          <SectionLabel>Service Category {service.indexNumber}</SectionLabel>
          <h1 className="font-manrope font-extrabold text-4xl md:text-6xl text-tmr-softblack">
            {service.title}
          </h1>
          <p className="font-editorial text-2xl text-tmr-muted">{service.shortDescription}</p>
          <p className="font-manrope text-base text-tmr-softblack/80 leading-relaxed">
            {service.fullDescription}
          </p>
        </div>
      </Container>
    </div>
  );
};
