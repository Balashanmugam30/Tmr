import React, { useState, useEffect, useRef } from 'react';

interface PathStage {
  number: string;
  title: string;
  desc: string;
  image: string;
  altText: string;
}

export const StudioProcessTimeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

  const stages: PathStage[] = [
    {
      number: "01",
      title: "CHOOSE",
      desc: "Find the service that matches your vehicle's needs.",
      image: "/images/services/journey/journey-choose.jpg",
      altText: "Customer consultation for automotive detailing at TMR Car Care in Tiruppur",
    },
    {
      number: "02",
      title: "ENQUIRE",
      desc: "Reach TMR through WhatsApp or phone.",
      image: "/images/services/journey/journey-enquire.jpg",
      altText: "Professional automotive service consultation at TMR Car Care in Tiruppur",
    },
    {
      number: "03",
      title: "CONFIRM",
      desc: "Discuss the vehicle, treatment and appointment with our team.",
      image: "/images/services/journey/journey-confirm.jpg",
      altText: "Technician inspecting vehicle paint before detailing at TMR Car Care in Tiruppur",
    },
    {
      number: "04",
      title: "VISIT",
      desc: "Bring your vehicle to the TMR studio in Tiruppur.",
      image: "/images/services/journey/journey-visit.jpg",
      altText: "Premium vehicle inside the TMR Car Care detailing studio in Tiruppur",
    },
  ];

  // Synchronize active stage with scroll progress through the section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      const rawProgress = -rect.top / totalScrollable;
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));

      if (clampedProgress < 0.25) {
        setActiveStage(0);
      } else if (clampedProgress < 0.50) {
        setActiveStage(1);
      } else if (clampedProgress < 0.75) {
        setActiveStage(2);
      } else {
        setActiveStage(3);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="service-path"
      ref={sectionRef}
      className="w-full bg-[#050505] text-white py-20 sm:py-28 relative overflow-hidden font-manrope selection:bg-[#FF4B00] selection:text-white border-b border-white/10"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
        
        {/* Section 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column (45%): Statement, 4 Stages List, & Action Link */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Header Copy */}
            <div className="space-y-3">
              <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
                YOUR CAR.<br />
                YOUR NEED.<br />
                <span className="text-white/60">THE RIGHT START.</span>
              </h2>

              <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed max-w-sm pt-1">
                Choose the right service, speak with our team, confirm the treatment, and arrive at the Tiruppur studio.
              </p>
            </div>

            {/* 4 Clean Stages List */}
            <div className="border-t border-white/10 pt-6 space-y-4 font-manrope">
              {stages.map((stage, idx) => {
                const isActive = activeStage === idx;
                return (
                  <div
                    key={stage.number}
                    onMouseEnter={() => setActiveStage(idx)}
                    onClick={() => setActiveStage(idx)}
                    className={`cursor-pointer transition-all duration-300 border-l-2 pl-4 py-2 ${
                      isActive
                        ? "border-[#FF4B00] opacity-100 translate-x-1"
                        : "border-transparent opacity-40 hover:opacity-80"
                    }`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`font-editorial text-base sm:text-lg italic font-normal ${
                          isActive ? "text-[#FF4B00]" : "text-white/60"
                        }`}
                      >
                        {stage.number}
                      </span>
                      <h3
                        className={`font-intertight font-extrabold text-lg sm:text-xl uppercase tracking-wider ${
                          isActive ? "text-white" : "text-white/70"
                        }`}
                      >
                        {stage.title}
                      </h3>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        isActive ? "max-h-16 opacity-100 pt-1" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-xs text-white/70 font-normal leading-relaxed max-w-xs">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Closing Consultation Action Link */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
                NOT SURE WHERE TO START?
              </span>
              <a
                href="https://wa.me/919944335520"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-manrope font-bold text-xs uppercase tracking-widest text-[#FF4B00] hover:text-white transition-colors"
                aria-label="Talk to TMR team on WhatsApp"
              >
                <span>WHATSAPP TMR</span>
                <span className="text-sm">↗</span>
              </a>
            </div>

          </div>

          {/* Right Column (55%): Single Media Stage with Smooth Crossfade Between Dedicated Images */}
          <div className="lg:col-span-7">
            <div className="aspect-[16/9] w-full overflow-hidden border border-white/10 bg-[#111111] relative shadow-2xl">
              
              {/* 4 Dedicated Clean Stage Images (Zero text inside images, 450ms opacity crossfade) */}
              {stages.map((stage, idx) => {
                const isActive = activeStage === idx;
                return (
                  <div
                    key={stage.number}
                    className={`absolute inset-0 transition-all duration-500 ease-out ${
                      isActive
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-[1.015] z-0 pointer-events-none"
                    }`}
                  >
                    <img
                      src={stage.image}
                      alt={stage.altText}
                      className="w-full h-full object-cover block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
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
