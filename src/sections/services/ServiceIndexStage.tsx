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
      {/* Subtle Grain Overlay (3% opacity for unified filmic feel) */}
      <div className="absolute inset-0 bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none z-0" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16 relative z-10">
        
        {/* Simple Restrained Section Heading */}
        <div className="mb-12 font-manrope">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#111111] mb-3">
            OUR SERVICES
          </h2>
          <div className="h-[2px] w-12 bg-[#FF4B00]" />
        </div>

        {/* 50/50 Asymmetric Showcase Grid (Left ~42%, Right ~58%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Service List Rail (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6 sm:space-y-8 font-manrope">
            {servicesList.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`group border-b border-[#D8D8D5] pb-6 sm:pb-8 cursor-pointer transition-all duration-300 ${
                    isActive ? 'pl-2 sm:pl-4' : 'hover:pl-2'
                  }`}
                >
                  {/* Row Header */}
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`font-editorial text-3xl sm:text-4xl italic font-normal transition-colors duration-300 ${
                        isActive ? 'text-[#FF4B00]' : 'text-[#858585] group-hover:text-[#111111]'
                      }`}
                    >
                      {item.indexNumber}
                    </span>

                    <h3
                      className={`font-intertight font-extrabold tracking-tight uppercase leading-none transition-all duration-300 ${
                        isActive
                          ? 'text-3xl sm:text-4xl md:text-5xl text-[#111111] translate-x-1'
                          : 'text-xl sm:text-2xl text-[#858585] group-hover:text-[#111111]'
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Active Service Content (Revealed ONLY when active) */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      isActive ? 'max-h-40 opacity-100 pt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-sm sm:text-base text-[#858585] font-normal leading-relaxed max-w-md">
                      {item.shortDesc}
                    </p>

                    <div className="pt-4">
                      <Link
                        to={`/services/${item.slug}`}
                        className="inline-flex items-center gap-2 font-manrope font-bold text-xs sm:text-sm uppercase tracking-widest text-[#FF4B00] hover:text-[#111111] transition-colors"
                        aria-label={`Explore ${item.title} service page`}
                      >
                        <span>EXPLORE SERVICE</span>
                        <span className="text-base group-hover:translate-x-1 transition-transform">↗</span>
                      </Link>
                    </div>
                  </div>

                  {/* Mobile Inline Video Container (Accordion pattern on mobile) */}
                  {isActive && (
                    <div className="lg:hidden pt-4">
                      <div className="aspect-[16/10] w-full overflow-hidden relative border border-[#D8D8D5] bg-[#050505]">
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
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE: Full 50% Cinematic Video Stage (7 Cols Desktop, Pure Visual, NO text boxes or dark captions) */}
          <div className="hidden lg:block lg:col-span-7 sticky top-28">
            <div className="relative aspect-[4/3] lg:aspect-[16/11] min-h-[520px] lg:min-h-[600px] w-full overflow-hidden border border-[#D8D8D5] bg-[#050505] shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
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
                    {/* Pure High-Resolution Seamless Loop Video (No text, no caption boxes) */}
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
