import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/Container';
import { GalleryRevealItem } from './GalleryRevealItem';

interface TeaserGalleryItem {
  id: string;
  number: string;
  title: string;
  service: string;
  image: string;
  aspect: string;
  gridSpan: string;
  overlapClass?: string;
}

const homepageGalleryItems: TeaserGalleryItem[] = [
  {
    id: 'xuv700',
    number: '01',
    title: 'MAHINDRA XUV700',
    service: 'FEATURE // PAINT CORRECTION + CERAMIC',
    image: '/images/gallery/gallery-01.webp',
    aspect: 'aspect-[16/9]',
    gridSpan: 'lg:col-span-12',
  },
  {
    id: 'scorpio',
    number: '02',
    title: 'SCORPIO-N',
    service: 'DETAIL // WATER BEADING',
    image: '/images/gallery/gallery-07.webp',
    aspect: 'aspect-[4/5]',
    gridSpan: 'lg:col-span-5',
  },
  {
    id: 'safari',
    number: '03',
    title: 'TATA SAFARI',
    service: 'PROTECTION // PPF INSTALLATION',
    image: '/images/gallery/gallery-04.webp',
    aspect: 'aspect-[3/4]',
    gridSpan: 'lg:col-span-7',
    overlapClass: 'lg:-mt-8',
  },
  {
    id: 'tucson',
    number: '04',
    title: 'HYUNDAI TUCSON',
    service: 'CRAFT // INTERIOR RESTORATION',
    image: '/images/gallery/gallery-06.webp',
    aspect: 'aspect-[16/9]',
    gridSpan: 'lg:col-span-12',
  },
];

export const GalleryShowcaseSection: React.FC = () => {
  return (
    <section
      id="gallery-showcase"
      className="w-full bg-[#070809] text-[#F5F4EF] border-t border-b border-white/10 py-16 md:py-24 relative overflow-hidden isolate font-intertight"
      style={{ backgroundColor: '#070809' }}
    >
      <div className="absolute inset-0 pointer-events-none z-10 opacity-6 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:18px_18px]" />

      <Container className="relative z-20 pt-2">
        <div className="w-full border-t border-white/10" />
      </Container>

      {/* MAIN CONTENT COMPOSITION */}
      <Container className="relative z-20 my-auto py-8 lg:py-12 space-y-12">
        {/* EDITORIAL HEADER GROUP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7 space-y-3">
            <h2 className="font-intertight font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase text-white leading-[0.9] tracking-[-0.04em]">
              THE GALLERY <br />
              <span className="text-[#FF4B00]">PROOF IN THE REFLECTION.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="font-editorial text-lg sm:text-2xl italic text-white/85 leading-tight">
              "Every vehicle that leaves our facility carries our signature gloss and protective matrix."
            </p>
          </div>
        </div>

        {/* 4-IMAGE ASYMMETRICAL EDITORIAL TEASER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {homepageGalleryItems.map((item) => (
            <GalleryRevealItem
              key={item.id}
              number={item.number}
              title={item.title}
              service={item.service}
              image={item.image}
              aspect={item.aspect}
              gridSpan={item.gridSpan}
              overlapClass={item.overlapClass}
            />
          ))}
        </div>

        {/* EDITORIAL GALLERY CTA LINK TO FULL PORTFOLIO */}
        <div className="pt-4 flex items-center justify-between border-t border-white/10 font-intertight">
          <Link
            to="/gallery"
            className="group inline-flex flex-col gap-1 text-xs font-extrabold uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors"
          >
            <span className="inline-flex items-center gap-2">
              <span>VIEW FULL GALLERY ARCHIVE</span>
              <span className="text-[#FF4B00] group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
            </span>
            <span className="h-[1.5px] w-10 group-hover:w-full bg-[#FF4B00] transition-all duration-300" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
