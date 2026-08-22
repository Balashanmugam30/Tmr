import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData, ServiceCategory } from '@/data/services';

export const ServiceIndexStage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const getStitchImage = (slug: string): string => {
    switch (slug) {
      case 'car-wash-cleaning':
        return '/images/manifesto/manifesto-editorial.webp';
      case 'detailing-paint-care':
        return '/images/transformation/after.webp';
      case 'ceramic-coating':
        return '/images/protection/protection-hero.webp';
      case 'ppf-paint-protection':
        return '/images/ppf/ppf-surface.webp';
      case 'sun-control-films':
        return '/images/gallery/gallery-01.webp';
      case 'car-accessories':
        return '/images/gallery/gallery-06.webp';
      default:
        return '/images/protection/protection-hero.webp';
    }
  };

  return (
    <section id="services-index" className="w-full bg-[#fff8f6] text-[#111111] py-20 md:py-32 border-b border-[#D8D8D5]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
        
        {/* Section Tag Header */}
        <div className="border-b border-[#D8D8D5] pb-6 mb-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 font-manrope">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">01 / CATALOGUE</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-[#111111] tracking-tight">THE SERVICE SPECTRUM</h2>
          </div>
          <p className="font-editorial text-lg italic text-[#858585] max-w-xs">
            Select a specialized discipline to explore details and media.
          </p>
        </div>

        {/* 12-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Left Column: Interactive 6-Item Service List (5 Cols) */}
          <div className="md:col-span-5 flex flex-col gap-6 font-manrope">
            {servicesData.map((service, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className={`group cursor-pointer border-b border-[#D8D8D5] pb-6 transition-all duration-300 ${
                    isActive ? 'pl-4 border-l-4 border-l-[#FF4B00] border-[#FF4B00]' : 'hover:pl-2'
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className={`font-editorial text-2xl sm:text-3xl italic font-normal transition-colors duration-300 ${
                      isActive ? 'text-[#FF4B00]' : 'text-[#858585] group-hover:text-[#111111]'
                    }`}>
                      {service.indexNumber}
                    </span>
                    <h3 className={`font-intertight font-extrabold text-2xl sm:text-3xl md:text-[34px] leading-none uppercase transition-colors duration-300 ${
                      isActive ? 'text-[#FF4B00]' : 'text-[#111111] group-hover:text-[#FF4B00]'
                    }`}>
                      {service.title.replace(' & Paint Protection', '').replace(' & Cleaning', '').replace(' & Paint Care', '')}
                    </h3>
                  </div>

                  {/* Mobile-only short text snippet when active */}
                  {isActive && (
                    <div className="md:hidden pt-3">
                      <p className="text-xs text-[#858585] leading-relaxed mb-3">
                        {service.shortDescription}
                      </p>
                      <Link
                        to={`/services/${service.slug}`}
                        className="text-xs font-bold uppercase tracking-widest text-[#FF4B00] inline-flex items-center gap-2"
                      >
                        <span>EXPLORE SERVICE</span>
                        <span>↗</span>
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Media Stage (7 Cols Desktop) */}
          <div className="hidden md:block md:col-span-7 sticky top-28 min-h-[560px] bg-[#111111] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-[#111111] overflow-hidden">
            {servicesData.map((service, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={service.id}
                  className={`w-full h-full flex flex-col group transition-opacity duration-500 ${
                    isActive ? 'block opacity-100 z-10' : 'hidden opacity-0 z-0'
                  }`}
                >
                  {/* High-Res Media Frame with Grayscale Hover Reveal */}
                  <div className="w-full h-[440px] lg:h-[480px] overflow-hidden relative">
                    <img
                      src={getStitchImage(service.slug)}
                      alt={`TMR ${service.title} in Tiruppur`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-40 pointer-events-none" />
                  </div>

                  {/* Bottom Dark Control Bar */}
                  <div className="bg-[#111111] text-white p-8 flex justify-between items-center z-10 relative border-t border-white/10 font-manrope">
                    <div>
                      <p className="font-bold text-[11px] text-white/50 tracking-[0.3em] uppercase mb-2">
                        {service.indexNumber} / {service.title.toUpperCase()}
                      </p>
                      <p className="text-sm md:text-base text-white/70 max-w-md font-normal leading-relaxed">
                        {service.shortDescription}
                      </p>
                    </div>

                    <Link
                      to={`/services/${service.slug}`}
                      className="text-[#FF4B00] hover:text-white transition-colors duration-300 p-3"
                      aria-label={`View ${service.title} details`}
                    >
                      <span className="text-3xl font-extrabold group-hover:translate-x-1 transition-transform inline-block">↗</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
