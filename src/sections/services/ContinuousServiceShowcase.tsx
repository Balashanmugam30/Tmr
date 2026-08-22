import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface ServiceShowcaseItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  description: string;
  videoSrc: string;
  posterSrc: string;
  theme: 'light' | 'dark';
}

const showcaseServices: ServiceShowcaseItem[] = [
  {
    id: 'car-wash-cleaning',
    slug: 'car-wash-cleaning',
    number: '01',
    title: 'CAR WASH & CLEANING',
    description: 'Precision pH-neutral snow foam washing, deep interior steam sanitization, and complete underbody decontamination engineered to maintain a pristine vehicle.',
    videoSrc: '/videos/services/car-wash.mp4',
    posterSrc: '/videos/services/car-wash-poster.jpg',
    theme: 'light',
  },
  {
    id: 'detailing-paint-care',
    slug: 'detailing-paint-care',
    number: '02',
    title: 'DETAILING & PAINT CARE',
    description: 'Multi-stage machine compounding and paint correction designed to permanently eliminate swirl marks, scratches, and restore specular paint clarity.',
    videoSrc: '/videos/services/detailing.mp4',
    posterSrc: '/videos/services/detailing-poster.jpg',
    theme: 'dark',
  },
  {
    id: 'ceramic-coating',
    slug: 'ceramic-coating',
    number: '03',
    title: 'CERAMIC COATING',
    description: 'Hydrophobic 9H & 10H quartz nano-ceramic shielding that permanently bonds over clearcoat, producing liquid reflection and self-cleaning water beading.',
    videoSrc: '/videos/services/ceramic-coating.mp4',
    posterSrc: '/videos/services/ceramic-coating-poster.jpg',
    theme: 'light',
  },
  {
    id: 'ppf-paint-protection',
    slug: 'ppf-paint-protection',
    number: '04',
    title: 'PPF & PAINT PROTECTION',
    description: 'Paint Protection Film (PPF) provides a physical, self-healing TPU barrier absorbing stone chips, scratches, and road debris without altering paint finish.',
    videoSrc: '/videos/services/ppf.mp4',
    posterSrc: '/videos/services/ppf-poster.jpg',
    theme: 'dark',
  },
  {
    id: 'sun-control-films',
    slug: 'sun-control-films',
    number: '05',
    title: 'SUN-CONTROL FILMS',
    description: 'High-performance ceramic window films engineered to block up to 99% of UV rays and 95% of solar heat for superior cabin cooling and glare reduction.',
    videoSrc: '/videos/services/sun-control.mp4',
    posterSrc: '/videos/services/sun-control-poster.jpg',
    theme: 'light',
  },
  {
    id: 'car-accessories',
    slug: 'car-accessories',
    number: '06',
    title: 'CAR ACCESSORIES',
    description: 'Bespoke cockpit styling, custom-fit 7D floor mats, multi-zone ambient lighting, and 4K dash camera installations for everyday driving luxury.',
    videoSrc: '/videos/services/accessories.mp4',
    posterSrc: '/videos/services/accessories-poster.jpg',
    theme: 'dark',
  },
];

export const ContinuousServiceShowcase: React.FC = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // IntersectionObserver for 60fps lazy video playback
  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay policy fallback
          });
        } else {
          video.pause();
        }
      });
    }, observerOptions);

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full relative overflow-hidden">
      {/* Subtle Unified Film Grain Texture Overlay (3% Opacity) */}
      <div className="fixed inset-0 pointer-events-none z-[2] opacity-[0.035] mix-blend-overlay">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="film-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#film-grain)" />
        </svg>
      </div>

      {/* 6 Continuous 50/50 Viewport Split Sections */}
      {showcaseServices.map((service, idx) => {
        const isDark = service.theme === 'dark';
        const isEven = idx % 2 === 0; // Even = Text Left / Video Right; Odd = Video Left / Text Right

        return (
          <section
            key={service.id}
            id={service.id}
            className={`w-full min-h-[85vh] lg:min-h-screen flex items-center py-16 lg:py-24 border-b ${
              isDark
                ? 'bg-[#050505] text-white border-white/10'
                : 'bg-[#fff8f6] text-[#111111] border-[#D8D8D5]'
            }`}
          >
            <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* TEXT COLUMN (5 Cols Desktop) */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center space-y-6 font-manrope ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Number Tag */}
                  <span
                    className={`font-editorial text-3xl sm:text-4xl italic ${
                      isDark ? 'text-[#FF4B00]' : 'text-[#858585]'
                    }`}
                  >
                    {service.number}
                  </span>

                  {/* Semantic Service H2 Headline */}
                  <h2 className="font-intertight font-extrabold text-3xl sm:text-5xl lg:text-[64px] uppercase leading-[0.95] tracking-tight">
                    {service.title}
                  </h2>

                  {/* Semantic Description */}
                  <p
                    className={`text-base sm:text-lg font-normal leading-relaxed max-w-md ${
                      isDark ? 'text-white/80' : 'text-[#111111]/80'
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Minimal Editorial Text Link CTA */}
                  <div className="pt-4">
                    <Link
                      to={`/services/${service.slug}`}
                      className="group inline-flex flex-col items-start gap-1 font-bold text-xs sm:text-sm uppercase tracking-widest transition-colors duration-300"
                      aria-label={`Explore ${service.title} service page`}
                    >
                      <div className="inline-flex items-center gap-2">
                        <span className={isDark ? 'text-white' : 'text-[#111111]'}>EXPLORE SERVICE</span>
                        <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">↗</span>
                      </div>
                      
                      {/* Expanding TMR Orange Underline */}
                      <span className="w-8 group-hover:w-full h-[2px] bg-[#FF4B00] transition-all duration-300 ease-out" />
                    </Link>
                  </div>
                </div>

                {/* VIDEO COLUMN (7 Cols Desktop, Pure Full-Bleed 50% Media Frame) */}
                <div
                  className={`lg:col-span-7 h-[360px] sm:h-[480px] lg:h-[600px] w-full overflow-hidden relative ${
                    isDark ? 'bg-black' : 'bg-[#111111]'
                  } ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <video
                    ref={(el) => (videoRefs.current[idx] = el)}
                    src={service.videoSrc}
                    poster={service.posterSrc}
                    playsInline
                    muted
                    loop
                    preload="none"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                  />
                  {/* Subtle Ambient Edge Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};
