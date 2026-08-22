import React, { useState, useEffect, useRef } from 'react';

interface JourneyStep {
  index: string;
  title: string;
  desc: string;
  image: string;
  altText: string;
}

export const StudioProcessTimeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [displayedIndex, setDisplayedIndex] = useState<number>(0);
  const [irisClosure, setIrisClosure] = useState<number>(0); // 0 = fully open, 1 = fully closed
  const sectionRef = useRef<HTMLDivElement>(null);
  const isTransitioningRef = useRef<boolean>(false);

  const journeySteps: JourneyStep[] = [
    {
      index: "01",
      title: "CHOOSE",
      desc: "Tell us what your vehicle needs.",
      image: "/images/services/journey/journey-choose.jpg",
      altText: "TMR Car Care vehicle consultation in studio Tiruppur",
    },
    {
      index: "02",
      title: "ENQUIRE",
      desc: "Reach TMR through WhatsApp or phone.",
      image: "/images/services/journey/journey-enquire.jpg",
      altText: "TMR Car Care customer inquiry and communication",
    },
    {
      index: "03",
      title: "CONFIRM",
      desc: "We assess the vehicle and confirm recommended service & appointment.",
      image: "/images/services/journey/journey-confirm.jpg",
      altText: "TMR Car Care professional vehicle inspection and paint assessment",
    },
    {
      index: "04",
      title: "VISIT",
      desc: "Bring your vehicle to the TMR studio in Tiruppur.",
      image: "/images/services/journey/journey-visit.jpg",
      altText: "Vehicle ready inside TMR Car Care detailing studio bay",
    },
  ];

  // Scroll Progress Tracking to trigger active step change & Iris animation
  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate relative scroll progress through the section (0.0 to 1.0)
      const totalDist = rect.height - viewportHeight;
      if (totalDist <= 0) return;

      const currentScroll = viewportHeight - rect.top;
      const progress = Math.min(1.0, Math.max(0.0, currentScroll / (rect.height + viewportHeight * 0.5)));

      // Map progress (0..1) to 4 step indexes (0, 1, 2, 3)
      let targetIdx = 0;
      if (progress < 0.25) targetIdx = 0;
      else if (progress < 0.50) targetIdx = 1;
      else if (progress < 0.75) targetIdx = 2;
      else targetIdx = 3;

      if (targetIdx !== activeIndex) {
        setActiveIndex(targetIdx);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  // Handle Camera Iris / Aperture Animate Transition when activeIndex changes
  useEffect(() => {
    if (activeIndex === displayedIndex) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isReducedMotion) {
      setDisplayedIndex(activeIndex);
      return;
    }

    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    let startTime: number | null = null;
    const duration = 800; // ~800ms total aperture close/open cycle

    const animateIris = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(1.0, elapsed / duration);

      if (progress < 0.5) {
        // Phase 1: Aperture closes (0 -> 1)
        const closure = progress * 2;
        setIrisClosure(closure);
      } else {
        // Midpoint: Switch displayed image underneath closed aperture
        setDisplayedIndex(activeIndex);

        // Phase 2: Aperture opens back up (1 -> 0)
        const closure = (1.0 - progress) * 2;
        setIrisClosure(closure);
      }

      if (progress < 1.0) {
        requestAnimationFrame(animateIris);
      } else {
        setIrisClosure(0);
        isTransitioningRef.current = false;
      }
    };

    requestAnimationFrame(animateIris);
  }, [activeIndex, displayedIndex]);

  // SVG 8-Blade Aperture Iris Blade Renderer (Curved leaf blades contract to center)
  const renderIrisBlades = (closurePercent: number) => {
    if (closurePercent <= 0.001) return null;

    // Radius contracts from 75 (open) to 0 (closed)
    const r = (1.0 - closurePercent) * 75;
    const rot = closurePercent * 45; // Subtle 45deg rotation during iris squeeze

    return (
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-20"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <g transform={`rotate(${rot}, 50, 50)`}>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <path
              key={i}
              transform={`rotate(${angle}, 50, 50)`}
              d={`M 50 50 L ${50 + r} 50 C ${50 + r * 0.8} ${50 - r * 0.4}, ${50 + r * 0.4} ${50 - r * 0.8}, 50 ${50 - r} Z`}
              fill="#050505"
            />
          ))}
        </g>
      </svg>
    );
  };

  return (
    <section
      id="studio-process"
      ref={sectionRef}
      className="w-full bg-[#050505] text-white py-24 sm:py-32 border-b border-white/10 relative overflow-hidden font-manrope"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
        
        {/* Section Intro */}
        <div className="mb-12">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white mb-2">
            FROM FIRST MESSAGE TO FINAL REVEAL.
          </h2>
          <p className="text-sm sm:text-base text-white/60 max-w-md font-normal leading-relaxed">
            Experience TMR's structured customer journey from initial inquiry to precision studio delivery.
          </p>
        </div>

        {/* 2-Column Grid: Journey Steps Left ↔ Stable Camera Iris Media Frame Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: 4 Step Indicators & Descriptions (5 Cols Desktop) */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            {journeySteps.map((step, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={step.index}
                  onClick={() => setActiveIndex(idx)}
                  className={`group border-l-2 pl-6 cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "border-[#FF4B00] opacity-100"
                      : "border-white/10 opacity-40 hover:opacity-80"
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span
                      className={`font-editorial text-2xl italic ${
                        isActive ? "text-[#FF4B00]" : "text-white/40"
                      }`}
                    >
                      {step.index}
                    </span>
                    <h3
                      className={`font-intertight font-extrabold text-2xl sm:text-3xl uppercase tracking-tight transition-colors ${
                        isActive ? "text-white" : "text-white/60"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isActive ? "max-h-20 opacity-100 pt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Stable Media Frame with SVG 8-Blade Aperture Mask (7 Cols Desktop) */}
          <div className="lg:col-span-7">
            <div className="aspect-[16/9] w-full overflow-hidden border border-white/10 bg-[#050505] relative shadow-2xl">
              
              {/* Displayed Step Image Layer */}
              <img
                src={journeySteps[displayedIndex].image}
                alt={journeySteps[displayedIndex].altText}
                className="w-full h-full object-cover block transition-opacity duration-300"
              />

              {/* Dynamic SVG 8-Blade Camera Iris Aperture Mask (Visually opens/closes on stage transitions) */}
              {renderIrisBlades(irisClosure)}

              {/* Subtle Vignette Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10" />

            </div>
          </div>

        </div>

        {/* Minimal Footer Action Link */}
        <div className="pt-12 flex items-center justify-between border-t border-white/10 mt-16">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-white/50">
            NOT SURE WHERE TO START?
          </span>
          <a
            href="https://wa.me/919944335520"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-manrope font-bold text-xs sm:text-sm uppercase tracking-widest text-[#FF4B00] hover:text-white transition-colors"
            aria-label="Talk to TMR on WhatsApp"
          >
            <span>WHATSAPP TMR</span>
            <span className="text-base">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};
