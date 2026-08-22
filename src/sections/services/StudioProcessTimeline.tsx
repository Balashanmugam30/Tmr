import React, { useState, useEffect, useRef } from 'react';

interface PathStage {
  number: string;
  title: string;
  desc: string;
}

export const StudioProcessTimeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

  const stages: PathStage[] = [
    {
      number: "01",
      title: "CHOOSE",
      desc: "Find the service that matches your vehicle's condition and needs.",
    },
    {
      number: "02",
      title: "ENQUIRE",
      desc: "Reach TMR through WhatsApp or phone.",
    },
    {
      number: "03",
      title: "CONFIRM",
      desc: "Discuss the vehicle, treatment and appointment with the team.",
    },
    {
      number: "04",
      title: "VISIT",
      desc: "Bring the vehicle to the TMR studio in Tiruppur.",
    },
  ];

  // Map section scroll position to continuous horizontal panning progress (0 -> 1)
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      // Calculate normalized progress (0.0 to 1.0) through the section
      const rawProgress = -rect.top / totalScrollable;
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));

      setScrollProgress(clampedProgress);

      // Determine active stage based on progress regions
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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute camera crop offset (-0% to -75% translation across 7740px image)
  const imageTranslationX = scrollProgress * 75;

  return (
    <section
      id="service-path"
      ref={sectionRef}
      className="w-full bg-[#050505] text-white py-20 sm:py-28 min-h-[140vh] relative overflow-hidden font-manrope selection:bg-[#FF4B00] selection:text-white"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16 sticky top-24">
        
        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column (45%): Service Path Editorial Statements & Architectural Rail */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Header Statement */}
            <div className="space-y-3">
              <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block">
                THE SERVICE PATH
              </span>

              <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
                YOUR CAR.<br />
                YOUR NEED.<br />
                <span className="text-white/60">THE RIGHT START.</span>
              </h2>

              <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed max-w-sm pt-1">
                Choose the right service, speak with our team, confirm the treatment, and arrive at the Tiruppur studio.
              </p>
            </div>

            {/* Architectural Stage Rail (01 -> 04) */}
            <div className="border-t border-white/10 pt-6 space-y-4">
              {stages.map((stage, idx) => {
                const isActive = activeStage === idx;
                return (
                  <div
                    key={stage.number}
                    onClick={() => {
                      setActiveStage(idx);
                      setScrollProgress(idx * 0.333);
                    }}
                    className={`cursor-pointer transition-all duration-300 border-l-2 pl-4 py-1 ${
                      isActive
                        ? "border-[#FF4B00] opacity-100 translate-x-1"
                        : "border-transparent opacity-40 hover:opacity-80"
                    }`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`font-editorial text-sm italic font-normal ${
                          isActive ? "text-[#FF4B00]" : "text-white/60"
                        }`}
                      >
                        {stage.number}
                      </span>
                      <h3
                        className={`font-intertight font-extrabold text-base sm:text-lg uppercase tracking-wider ${
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

            {/* Bottom Consultation Link */}
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

          {/* Right Column (55%): Single Continuous Studio Journey Camera Viewport */}
          <div className="lg:col-span-7">
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border border-white/10 bg-[#111111] relative shadow-2xl">
              
              {/* Single Continuous Ultra-Wide Studio Photograph (Horizontal Scroll Translation) */}
              <div
                className="absolute inset-0 h-full w-[400%] flex transition-transform duration-300 ease-out pointer-events-none motion-reduce:transform-none motion-reduce:w-full"
                style={{
                  transform: `translate3d(-${imageTranslationX}%, 0, 0)`,
                }}
              >
                <img
                  src="/images/services/journey/tmr-service-path-wide.jpg"
                  alt="Continuous TMR automotive detailing studio journey"
                  className="w-full h-full object-cover block"
                />
              </div>

              {/* Viewport Overlay & Active Stage Label */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white pointer-events-none font-manrope">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF4B00]">
                  STUDIO STAGE // {stages[activeStage].number} {stages[activeStage].title}
                </span>
                <span className="text-[11px] text-white/60 uppercase tracking-widest">
                  TIRUPPUR STUDIO
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
