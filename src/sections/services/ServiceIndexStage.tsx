import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface CustomServiceItem {
  id: string;
  slug: string;
  indexNumber: string;
  title: string;
  shortDesc: string;
  image: string;
}

export const ServiceIndexStage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Subtle mouse parallax state (5-8px max movement)
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const servicesList: CustomServiceItem[] = [
    {
      id: "car-wash-cleaning",
      slug: "car-wash-cleaning",
      indexNumber: "01",
      title: "CAR WASH & CLEANING",
      shortDesc: "Exterior and interior cleaning designed to maintain a clean, well-presented vehicle.",
      image: "/images/manifesto/manifesto-editorial.webp",
    },
    {
      id: "detailing-paint-care",
      slug: "detailing-paint-care",
      indexNumber: "02",
      title: "DETAILING & PAINT CARE",
      shortDesc: "Paint correction and detailing designed to restore gloss and surface clarity.",
      image: "/images/transformation/after.webp",
    },
    {
      id: "ceramic-coating",
      slug: "ceramic-coating",
      indexNumber: "03",
      title: "CERAMIC COATING",
      shortDesc: "Hydrophobic surface protection that enhances gloss and simplifies maintenance.",
      image: "/images/protection/protection-hero.webp",
    },
    {
      id: "ppf-paint-protection",
      slug: "ppf-paint-protection",
      indexNumber: "04",
      title: "PPF & PAINT PROTECTION",
      shortDesc: "Physical paint protection against stone chips, scratches and road debris.",
      image: "/images/ppf/ppf-surface.webp",
    },
    {
      id: "sun-control-films",
      slug: "sun-control-films",
      indexNumber: "05",
      title: "SUN-CONTROL FILMS",
      shortDesc: "Window films designed to reduce solar heat, glare and UV exposure.",
      image: "/images/gallery/gallery-01.webp",
    },
    {
      id: "car-accessories",
      slug: "car-accessories",
      indexNumber: "06",
      title: "CAR ACCESSORIES",
      shortDesc: "Practical interior and exterior upgrades selected for everyday use.",
      image: "/images/gallery/gallery-06.webp",
    },
  ];

  // Handle subtle mouse parallax on desktop
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const isOver = (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      );

      if (isOver) {
        const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
        const relativeY = (e.clientY - rect.top) / rect.height - 0.5;
        setParallax({
          x: Math.round(relativeX * 12),
          y: Math.round(relativeY * 12),
        });
      } else {
        setParallax({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="services-index"
      ref={sectionRef}
      className="w-full bg-[#fff8f6] text-[#111111] py-20 md:py-32 border-b border-[#D8D8D5] relative overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
        
        {/* Simple Restrained Heading */}
        <div className="border-b border-[#D8D8D5] pb-6 mb-12 font-manrope">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#111111]">
            OUR SERVICES
          </h2>
        </div>

        {/* 12-Column Asymmetric Layout (Left ~42%, Right ~58%) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          
          {/* LEFT: Service Rail / List (5 Cols) */}
          <div className="md:col-span-5 flex flex-col font-manrope">
            {servicesList.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`group border-b border-[#D8D8D5] py-6 sm:py-7 cursor-pointer transition-all duration-300 ${
                    isActive ? 'pl-2 sm:pl-4' : 'hover:pl-2'
                  }`}
                >
                  <Link
                    to={`/services/${item.slug}`}
                    className="block w-full"
                    aria-label={`Explore ${item.title} service page`}
                  >
                    {/* Row Main Header */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-baseline gap-4">
                        {/* Number */}
                        <span
                          className={`font-editorial text-2xl sm:text-3xl italic font-normal transition-colors duration-300 ${
                            isActive ? 'text-[#FF4B00]' : 'text-[#858585] group-hover:text-[#111111]'
                          }`}
                        >
                          {item.indexNumber}
                        </span>

                        {/* Title */}
                        <h3
                          className={`font-intertight font-extrabold text-xl sm:text-2xl md:text-[28px] uppercase tracking-tight transition-all duration-300 ${
                            isActive
                              ? 'text-[#FF4B00] translate-x-1.5'
                              : 'text-[#111111] group-hover:text-[#FF4B00]'
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>

                      {/* Revealed Arrow */}
                      <span
                        className={`text-xl sm:text-2xl text-[#FF4B00] transition-all duration-300 ${
                          isActive
                            ? 'opacity-100 translate-x-1'
                            : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                        }`}
                      >
                        ↗
                      </span>
                    </div>

                    {/* Active Description (Revealed ONLY when active) */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        isActive ? 'max-h-24 opacity-100 pt-3' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-xs sm:text-sm text-[#858585] font-normal leading-relaxed max-w-md">
                        {item.shortDesc}
                      </p>
                    </div>

                    {/* Mobile Inline Image Frame (Accordion pattern on mobile) */}
                    {isActive && (
                      <div className="md:hidden pt-4">
                        <div className="aspect-[16/10] w-full overflow-hidden relative border border-[#D8D8D5]">
                          <img
                            src={item.image}
                            alt={`TMR ${item.title} in Tiruppur`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Clean Sticky Image Stage (7 Cols Desktop, NO heavy dark footer box) */}
          <div className="hidden md:block md:col-span-7 sticky top-28">
            <div
              className="relative aspect-[4/3] lg:aspect-[16/11] w-full overflow-hidden border border-[#D8D8D5] bg-[#111111] shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-transform duration-500 ease-out"
              style={{
                transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
              }}
            >
              {servicesList.map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div
                    key={item.id}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      isActive
                        ? 'opacity-100 scale-100 z-10'
                        : 'opacity-0 scale-105 z-0 pointer-events-none'
                    }`}
                  >
                    {/* Visual Asset */}
                    <img
                      src={item.image}
                      alt={`TMR ${item.title} in Tiruppur`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-102"
                    />

                    {/* Restrained Gradient Overlay for Text Visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Minimal Text Overlay in Bottom-Left (Clean & Uncluttered, NO heavy dark box) */}
                    <div className="absolute bottom-6 left-6 right-6 font-manrope z-10 text-white">
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF4B00] block mb-1">
                        {item.indexNumber} // {item.title}
                      </span>
                      <p className="text-xs sm:text-sm text-white/80 max-w-md font-normal leading-relaxed">
                        {item.shortDesc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
