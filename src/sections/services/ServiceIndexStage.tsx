import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface ServiceVideoItem {
  id: string;
  slug: string;
  indexNumber: string;
  title: string;
  shortDesc: string;
  videoSrc: string;
  posterSrc: string;
}

export const ServiceIndexStage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const servicesList: ServiceVideoItem[] = [
    {
      id: "car-wash-cleaning",
      slug: "car-wash-cleaning",
      indexNumber: "01",
      title: "CAR WASH & CLEANING",
      shortDesc: "Exterior and interior cleaning designed to maintain a clean, well-presented vehicle.",
      videoSrc: "/videos/services/car-wash.mp4",
      posterSrc: "/videos/services/car-wash-poster.jpg",
    },
    {
      id: "detailing-paint-care",
      slug: "detailing-paint-care",
      indexNumber: "02",
      title: "DETAILING & PAINT CARE",
      shortDesc: "Paint correction and detailing designed to restore gloss and surface clarity.",
      videoSrc: "/videos/services/detailing.mp4",
      posterSrc: "/videos/services/detailing-poster.jpg",
    },
    {
      id: "ceramic-coating",
      slug: "ceramic-coating",
      indexNumber: "03",
      title: "CERAMIC COATING",
      shortDesc: "Hydrophobic surface protection that enhances gloss and simplifies maintenance.",
      videoSrc: "/videos/services/ceramic-coating.mp4",
      posterSrc: "/videos/services/ceramic-coating-poster.jpg",
    },
    {
      id: "ppf-paint-protection",
      slug: "ppf-paint-protection",
      indexNumber: "04",
      title: "PPF & PAINT PROTECTION",
      shortDesc: "Physical paint protection against stone chips, scratches and road debris.",
      videoSrc: "/videos/services/ppf.mp4",
      posterSrc: "/videos/services/ppf-poster.jpg",
    },
    {
      id: "sun-control-films",
      slug: "sun-control-films",
      indexNumber: "05",
      title: "SUN-CONTROL FILMS",
      shortDesc: "Window films designed to reduce solar heat, glare and UV exposure.",
      videoSrc: "/videos/services/sun-control.mp4",
      posterSrc: "/videos/services/sun-control-poster.jpg",
    },
    {
      id: "car-accessories",
      slug: "car-accessories",
      indexNumber: "06",
      title: "CAR ACCESSORIES",
      shortDesc: "Practical interior and exterior upgrades selected for everyday use.",
      videoSrc: "/videos/services/accessories.mp4",
      posterSrc: "/videos/services/accessories-poster.jpg",
    },
  ];

  // Play active video & pause all inactive videos whenever activeIndex changes
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;

      if (idx === activeIndex) {
        // Play active video with exception handling for autoplay restrictions
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay safety fallback
          });
        }
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

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

                    {/* Mobile Inline Video Container (Accordion pattern on mobile) */}
                    {isActive && (
                      <div className="md:hidden pt-4">
                        <div className="aspect-[16/10] w-full overflow-hidden relative border border-[#D8D8D5] bg-[#111111]">
                          <video
                            src={item.videoSrc}
                            poster={item.posterSrc}
                            muted
                            loop
                            playsInline
                            autoPlay
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

          {/* RIGHT: Clean Sticky Video Stage (7 Cols Desktop, ONLY Video, NO text overlays or dark boxes) */}
          <div className="hidden md:block md:col-span-7 sticky top-28">
            <div className="relative aspect-[4/3] lg:aspect-[16/11] w-full overflow-hidden border border-[#D8D8D5] bg-[#111111] shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
              {servicesList.map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div
                    key={item.id}
                    className={`absolute inset-0 transition-all duration-600 ease-out ${
                      isActive
                        ? 'opacity-100 scale-100 z-10'
                        : 'opacity-0 scale-103 z-0 pointer-events-none'
                    }`}
                  >
                    {/* Seamless Loop Video */}
                    <video
                      ref={(el) => (videoRefs.current[idx] = el)}
                      src={item.videoSrc}
                      poster={item.posterSrc}
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
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
