import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { SectionNumber } from '@/components/SectionNumber';
import { servicesData } from '@/data/services';

export const ServicesIndexPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="space-y-4 mb-12">
          <SectionLabel>Master Services Index</SectionLabel>
          <h1 className="font-manrope font-extrabold text-4xl md:text-6xl text-tmr-softblack">
            Automotive Care Spectrum
          </h1>
          <p className="font-editorial text-2xl text-tmr-muted max-w-2xl">
            Explore our 6 specialized detailing disciplines engineered for Tiruppur car owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              className="group bg-white border border-tmr-concrete/60 p-8 rounded-tmr transition-all duration-300 hover:border-tmr-orange hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <SectionNumber number={service.indexNumber} accent />
                  <span className="text-xs font-manrope font-bold uppercase tracking-widest text-tmr-muted group-hover:text-tmr-orange transition-colors">
                    Explore →
                  </span>
                </div>
                <h2 className="font-manrope font-bold text-xl md:text-2xl text-tmr-softblack group-hover:text-tmr-orange transition-colors mb-3">
                  {service.title}
                </h2>
                <p className="font-manrope text-sm text-tmr-muted leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};
