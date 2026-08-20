import React from 'react';
import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { galleryData } from '@/data/gallery';

export const GalleryPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="space-y-4 mb-12">
          <SectionLabel>Portfolio Archive</SectionLabel>
          <h1 className="font-manrope font-extrabold text-4xl md:text-6xl text-tmr-softblack">
            Gallery of Works
          </h1>
          <p className="font-editorial text-2xl text-tmr-muted max-w-2xl">
            Transformation portfolios, ceramic coatings, and PPF installs completed at our studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map((item) => (
            <div key={item.id} className="bg-white border border-tmr-concrete/60 p-6 rounded-tmr space-y-3">
              <div className="flex items-center justify-between text-xs font-manrope font-bold text-tmr-orange uppercase tracking-wider">
                <span>{item.category}</span>
                <span className="text-tmr-muted">{item.completionDate}</span>
              </div>
              <h2 className="font-manrope font-bold text-lg text-tmr-softblack">{item.title}</h2>
              <p className="font-manrope text-xs text-tmr-muted">{item.vehicleModel}</p>
              <p className="font-manrope text-xs text-tmr-softblack/80">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
