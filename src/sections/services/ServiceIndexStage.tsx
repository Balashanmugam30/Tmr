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
  const [prevIndex, setPrevIndex] = useState<number>(0);
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

  // Handle active service change & directional transition tracking
  const handleServiceHover = (index: number) => {
    if (index === activeIndex) return;
    setPrevIndex(activeIndex);
    setActiveIndex(index);
  };

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

  // Determine directional offset for subtle 8px motion during transition
  const isMovingDown = activeIndex > prevIndex;

  return (
    <section
      id="services-index"
      ref={sectionRef}
      className="w-full bg-[#fff8f6] text-[#111111] border-b border-[#D8D8D5] relative overflow-hidden"
    >
      {/* Subtle Grain Overlay (3% opacity for unified filmic feel) */}
      <div className="absolute inset-0 bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none z-0" />

      <div className="w-full max-w-[1920px] mx-auto relative z-10">
        
        {/* Full-Bleed 50/50 Layout Grid (Left ~45%, Right ~55%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-0">
          
          {/* LEFT SIDE: Service List Rail (5 Cols Desktop, text alignment & typography UNTOUCHED) */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-28 font-manrope">
            
            {/* Simple Restrained Heading */}
            <div className="mb-10 font-manrope">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#111111] mb-3">
                OUR SERVICES
              </h2>
              <div className="h-[2px] w-12 bg-[#FF4B00]" />
            </div>

            {/* Service Rows */}
            <div className="flex flex-col space-y-6 sm:space-y-8">
              {servicesList.map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => handleServiceHover(idx)}
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

                    {/* Mobile Inline Video Container (16:9 Landscape) */}
                    {isActive && (
                      <div className="lg:hidden pt-4">
                        <div className="aspect-[16/9] w-full overflow-hidden relative border border-[#D8D8D5] bg-[#050505]">
                          <video
                            src={item.videoSrc}
                            poster={item.posterSrc}
                            muted
                            loop
                            playsInline
                            autoPlay
                            className="w-full h-full object-cover block"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT SIDE: Full Edge-To-Edge 50% Video Panel (16:9 Landscape source, Smooth Directional Transition) */}
          <div className="hidden lg:block lg:col-span-7 xl:col-span-7 relative h-full min-h-full">
            <div className="sticky top-24 h-[calc(100vh-6rem)] w-full overflow-hidden bg-[#050505] border-l border-[#D8D8D5]">
              {servicesList.map((item, idx) => {
                const isActive = activeIndex === idx;
                const isPrev = prevIndex === idx;

                // Subtle directional slide calculation (8px shift)
                let transformStyle = 'translate3d(0, 0, 0) scale(1.025)';
                if (isActive) {
                  transformStyle = 'translate3d(0, 0, 0) scale(1)';
                } else if (isPrev) {
                  transformStyle = isMovingDown
                    ? 'translate3d(0, -8px, 0) scale(0.985)'
                    : 'translate3d(0, 8px, 0) scale(0.985)';
                }

                return (
                  <div
                    key={item.id}
                    className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isActive
                        ? 'opacity-100 z-10'
                        : isPrev
                        ? 'opacity-0 z-5 pointer-events-none'
                        : 'opacity-0 z-0 pointer-events-none'
                    }`}
                    style={{ transform: transformStyle }}
                  >
                    {/* Full-Bleed 16:9 Landscape Video Element (object-fit: cover, display: block) */}
                    <video
                      ref={(el) => (videoRefs.current[idx] = el)}
                      src={item.videoSrc}
                      poster={item.posterSrc}
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover object-center block"
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
