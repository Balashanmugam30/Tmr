import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '@/data/company';
import { LiquidHeroCanvas } from '@/components/about/LiquidHeroCanvas';

export const AboutPage: React.FC = () => {
  const [activeApproachStep, setActiveApproachStep] = useState<number>(0);
  const [heroParallax, setHeroParallax] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    document.title = "About TMR Car Care | Premium Detailing Studio Tiruppur";
    window.scrollTo(0, 0);

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    motionQuery.addEventListener('change', handleMotionChange);
    return () => motionQuery.removeEventListener('change', handleMotionChange);
  }, []);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isReducedMotion) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14; // -7px to +7px
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;  // -5px to +5px
    setHeroParallax({ x, y });
  };

  const handleHeroMouseLeave = () => {
    setHeroParallax({ x: 0, y: 0 });
  };

  const approachSteps = [
    {
      num: "01",
      title: "Observe",
      subtitle: "SURFACE DIAGNOSIS",
      desc: "Understand the clear coat, surface defects, and material condition before deciding how it should be cared for.",
      img: "/images/about/about-approach-inspect.webp",
      alt: "Automotive detailing technician inspecting vehicle clear coat surface under studio lights",
    },
    {
      num: "02",
      title: "Care",
      subtitle: "REFINEMENT & PROTECTION",
      desc: "Work with multi-stage machine polishing, precise compound selection, and attention to every edge and emblem.",
      img: "/images/about/about-approach-care.webp",
      alt: "Close up detailing defect inspection under professional lights at TMR Car Care studio",
    },
    {
      num: "03",
      title: "Finish",
      subtitle: "FINAL PRESENTATION",
      desc: "Apply ceramic armor or self-healing PPF to seal in depth, reflection, and lasting surface hydrophobic protection.",
      img: "/images/about/about-approach-finish.webp",
      alt: "High-gloss mirror paint reflection after professional car detailing at TMR Car Care",
    },
  ];

  return (
    <div className="w-full bg-[#050505] text-[#F5F4EF] font-manrope selection:bg-[#FF4B00] selection:text-white">
      
      {/* 01 / HERO SECTION — INTERACTIVE EXPERIMENTAL LIQUID WEBGEL HERO WITH EDITORIAL IMAGE STRIPS */}
      <section
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="relative w-full min-h-[95vh] lg:min-h-screen flex flex-col justify-end pt-32 sm:pt-40 pb-16 px-5 md:px-16 overflow-hidden border-b border-white/10 bg-[#050505] text-white"
      >
        {/* Layer 1: GPU WebGL Mouse-Reactive Liquid Distortion Canvas */}
        <LiquidHeroCanvas imageSrc="/images/about/about-hero-v2-bg.jpg" />

        {/* Layer 2: Dual-Tone Dark Overlay & Atmospheric Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-[#FF4B00]/15 via-transparent to-transparent opacity-40 z-10 pointer-events-none" />

        {/* Layer 3: Film Grain Texture Overlay */}
        <div
          className="absolute inset-0 z-10 opacity-[0.035] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Layer 4: Stable Art-Directed Content Overlay & Editorial Image Strips */}
        <div className="relative z-30 max-w-[1360px] w-full mx-auto flex flex-col justify-end flex-grow my-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto pt-8 relative">
            
            {/* Left Oversized Headline & Editorial Group */}
            <div className="lg:col-span-7 flex flex-col space-y-6 z-20">
              
              {/* Expressive Display Headline */}
              <h1 className="font-manrope font-extrabold text-5xl sm:text-7xl md:text-[96px] lg:text-[108px] text-white uppercase tracking-tighter leading-[0.88] select-none">
                BUILT <br />
                AROUND <br />
                THE <span className="font-['Bricolage_Grotesque'] font-extrabold italic text-[#FF4B00] lowercase pr-4 tracking-normal inline-block transform -rotate-1 hover:rotate-0 transition-transform">craft.</span>
              </h1>

              {/* Concise Supporting Statement */}
              <p className="font-editorial text-2xl sm:text-3xl text-[#E5E5E0] leading-snug border-l-2 border-[#FF4B00] pl-5 max-w-xl font-normal">
                Care isn't only about the finish. It's about the attention that gets you there.
              </p>

              {/* Editorial CTA */}
              <div className="pt-2">
                <a
                  href="#belief"
                  className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors group"
                >
                  <span>DISCOVER THE TMR APPROACH</span>
                  <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </a>
              </div>

            </div>

            {/* Right Side: Editorial Image Strips (01 Craft, 02 Detail, 03 Finish) */}
            <div className="lg:col-span-5 relative min-h-[380px] sm:min-h-[460px] w-full flex flex-col justify-center gap-4 z-10">
              
              {/* Strip 01: 01 — THE CRAFT (Machine Polishing) */}
              <div className="w-full max-w-[420px] ml-auto h-24 sm:h-28 rounded-lg overflow-hidden shadow-2xl border border-white/15 bg-black group relative transform hover:-translate-y-1 transition-transform duration-500">
                <img
                  src="/images/about/about-hero-v2-strip01.jpg"
                  alt="01 THE CRAFT — Professional machine polishing and paint refinement"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent pointer-events-none flex items-end p-3">
                  <span className="text-[10px] font-mono text-white/90 uppercase tracking-widest bg-black/50 px-2 py-0.5 rounded border border-white/10">01 // THE CRAFT</span>
                </div>
              </div>

              {/* Strip 02: 02 — THE DETAIL (Paint Inspection & Clear-Coat Reflection) */}
              <div className="w-full max-w-[460px] ml-auto h-28 sm:h-32 rounded-lg overflow-hidden shadow-2xl border border-white/15 bg-black group relative transform lg:-translate-x-6 hover:-translate-y-1 transition-transform duration-500">
                <img
                  src="/images/about/about-hero-v2-strip02.jpg"
                  alt="02 THE DETAIL — LED paint inspection and clear coat reflection depth"
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent pointer-events-none flex items-end p-3">
                  <span className="text-[10px] font-mono text-[#FF4B00] uppercase tracking-widest bg-black/60 px-2 py-0.5 rounded border border-[#FF4B00]/30">02 // THE DETAIL</span>
                </div>
              </div>

              {/* Strip 03: 03 — THE FINISH (Completed Vehicle Surface) */}
              <div className="w-full max-w-[400px] ml-auto h-24 sm:h-28 rounded-lg overflow-hidden shadow-2xl border border-white/15 bg-black group relative transform hover:-translate-y-1 transition-transform duration-500">
                <img
                  src="/images/about/about-hero-v2-strip03.jpg"
                  alt="03 THE FINISH — High-gloss mirror paint finish inside TMR studio"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent pointer-events-none flex items-end p-3">
                  <span className="text-[10px] font-mono text-white/90 uppercase tracking-widest bg-black/50 px-2 py-0.5 rounded border border-white/10">03 // THE FINISH</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 02 / THE BELIEF — DARK CINEMATIC EDITORIAL BRAND MANIFESTO */}
      <section className="bg-[#111111] text-white relative w-full overflow-hidden py-20 sm:py-32 border-b border-white/10" id="belief">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-8 z-20">
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.92] tracking-tighter uppercase text-white">
                WE BELIEVE THE <br />
                <span className="font-['Bricolage_Grotesque'] font-extrabold italic text-[#FF4B00] lowercase pr-4 tracking-normal inline-block transform -rotate-1 hover:rotate-0 transition-transform">details</span> MATTER.
              </h2>

              <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] max-w-xl leading-relaxed font-normal border-l-2 border-[#FF4B00] pl-5">
                A vehicle is more than a machine. It is a surface, a material, a reflection of the person behind it. At TMR, care begins with attention — understanding the surface, respecting the material and taking the time to finish it properly.
              </p>
            </div>

            <div className="lg:col-span-5 relative border border-white/15 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-black group">
              <img
                src="/images/about/about-belief-web.jpg"
                alt="Macro photograph of precision automotive paint surface reflection under detailing inspection light"
                className="w-full h-[360px] sm:h-[480px] object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>

          {/* Three Editorial Principles Horizontal Sequence (Unboxed Manifesto Layout) */}
          <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/15">
            
            <div className="flex flex-col space-y-3 p-2">
              <div className="flex items-center gap-3">
                <span className="font-manrope font-extrabold text-3xl text-[#FF4B00]">01</span>
                <h3 className="font-manrope font-extrabold text-xl uppercase tracking-wider text-white">
                  ATTENTION
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#858585] leading-relaxed">
                Thorough surface inspection and paint depth diagnostics before any pad or compound touches the panel.
              </p>
            </div>

            <div className="flex flex-col space-y-3 p-2 border-t md:border-t-0 md:border-l border-white/15 md:pl-8">
              <div className="flex items-center gap-3">
                <span className="font-manrope font-extrabold text-3xl text-[#FF4B00]">02</span>
                <h3 className="font-manrope font-extrabold text-xl uppercase tracking-wider text-white">
                  PRECISION
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#858585] leading-relaxed">
                Multi-stage machine polishing tailored to specific paint hardness, eliminating defects without compromising clear coat integrity.
              </p>
            </div>

            <div className="flex flex-col space-y-3 p-2 border-t md:border-t-0 md:border-l border-white/15 md:pl-8">
              <div className="flex items-center gap-3">
                <span className="font-manrope font-extrabold text-3xl text-[#FF4B00]">03</span>
                <h3 className="font-manrope font-extrabold text-xl uppercase tracking-wider text-[#FF4B00]">
                  FINISH
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#858585] leading-relaxed">
                Application of self-healing PPF or 9H ceramic armor delivering deep gloss, hydrophobic repelling, and long-term durability.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 03 / THE APPROACH — INTERACTIVE HORIZONTAL PROGRESSION */}
      <section className="bg-[#F5F4EF] text-[#111111] relative w-full overflow-hidden py-20 sm:py-32 border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10 space-y-12">
          
          <div className="flex items-center gap-4">
            <span className="font-manrope font-extrabold text-xs text-[#858585] uppercase tracking-widest">
              03 / APPROACH
            </span>
            <div className="w-16 h-px bg-[#D8D8D5]" />
            <span className="font-manrope font-extrabold text-xs text-[#FF4B00] uppercase tracking-widest">
              HOW WE THINK ABOUT CARE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Steps Progression Group */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl uppercase tracking-tight leading-[0.95] text-[#111111]">
                CARE IS A PROCESS OF <br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">attention.</span>
              </h2>

              <div className="flex flex-col space-y-4 pt-4">
                {approachSteps.map((step, idx) => {
                  const isActive = idx === activeApproachStep;
                  return (
                    <div
                      key={step.num}
                      onClick={() => setActiveApproachStep(idx)}
                      tabIndex={0}
                      role="button"
                      aria-label={`Select stage ${step.num}: ${step.title}`}
                      className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer focus:outline-none ${
                        isActive
                          ? 'bg-white border-[#FF4B00] shadow-xl'
                          : 'bg-transparent border-[#D8D8D5] hover:border-[#111111]/30'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className={`font-manrope font-extrabold text-sm ${isActive ? 'text-[#FF4B00]' : 'text-[#858585]'}`}>
                            {step.num}
                          </span>
                          <h3 className="font-manrope font-extrabold text-xl uppercase tracking-wide text-[#111111]">
                            {step.title}
                          </h3>
                        </div>
                        <span className="text-[10px] font-bold text-[#FF4B00] uppercase tracking-widest">
                          {step.subtitle}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#5f5e5e] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Active Image Stage */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full border border-[#D8D8D5] rounded-xl overflow-hidden bg-[#111111] shadow-2xl">
                {approachSteps.map((step, idx) => {
                  const isActive = idx === activeApproachStep;
                  return (
                    <img
                      key={step.num}
                      src={step.img}
                      alt={step.alt}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    />
                  );
                })}
                <div className="absolute bottom-4 right-4 z-20 bg-black/70 backdrop-blur-md px-4 py-2 rounded text-[11px] font-mono text-white uppercase tracking-widest">
                  STAGE 0{activeApproachStep + 1} / 03
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 04 / ROOTED IN TIRUPPUR — LOCAL DETAILED STUDIO PRESENTATION */}
      <section className="bg-[#F5F4EF] text-[#111111] relative w-full overflow-hidden py-20 sm:py-32 border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10 space-y-12">
          
          <div className="flex items-center gap-4">
            <span className="font-manrope font-extrabold text-xs uppercase tracking-widest text-[#858585]">
              04 / PLACE
            </span>
            <div className="w-16 h-px bg-[#D8D8D5]" />
            <span className="font-manrope font-extrabold text-xs uppercase tracking-widest text-[#FF4B00]">
              TMR CAR CARE / TIRUPPUR
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl tracking-tighter uppercase text-[#111111] leading-[0.95]">
                ROOTED IN <br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">tiruppur.</span>
              </h2>

              <p className="font-manrope text-sm sm:text-base text-[#5f5e5e] leading-relaxed border-l pl-4 border-[#111111]/20">
                A local studio presence built around considered automotive care, precision surface refinement, and trusted client relationships in Tiruppur, Tamil Nadu.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#D8D8D5]">
                <div>
                  <span className="block text-[10px] font-extrabold text-[#858585] uppercase tracking-widest mb-1">
                    STUDIO LOCATION
                  </span>
                  <p className="font-bold text-sm text-[#111111]">{companyData.address.fullText}</p>
                </div>

                <div>
                  <span className="block text-[10px] font-extrabold text-[#858585] uppercase tracking-widest mb-1">
                    STUDIO HOURS
                  </span>
                  <p className="font-bold text-sm text-[#111111]">{companyData.hours.weekdays}</p>
                </div>

                <div>
                  <span className="block text-[10px] font-extrabold text-[#858585] uppercase tracking-widest mb-1">
                    DIRECT CONTACT
                  </span>
                  <p className="font-bold text-sm text-[#111111]">{companyData.contact.phoneFormatted}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp}?text=Directions%20to%20TMR%20Studio`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-[#111111] text-white font-extrabold text-xs uppercase tracking-widest text-center hover:bg-[#FF4B00] transition-colors rounded-md shadow-lg"
                >
                  GET DIRECTIONS →
                </a>
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 border border-[#111111] text-[#111111] font-extrabold text-xs uppercase tracking-widest text-center hover:bg-[#111111] hover:text-white transition-colors rounded-md"
                >
                  WHATSAPP TMR →
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 relative h-[380px] sm:h-[550px] border border-[#D8D8D5] rounded-xl overflow-hidden bg-[#111111] shadow-2xl">
              <img
                src="/images/about/about-tiruppur-studio.jpg"
                alt="TMR Car Care flagship detailing studio in Tiruppur Tamil Nadu"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

          </div>

        </div>
      </section>

      {/* 05 / THE CARE WE OFFER — COMPACT EDITORIAL SERVICE DIRECTORY */}
      <section className="bg-[#111111] text-white relative w-full overflow-hidden py-20 sm:py-32 border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10 space-y-12">
          
          <div className="flex items-center gap-4">
            <span className="font-extrabold text-xs text-[#FF4B00] uppercase tracking-widest">
              05 / SERVICES
            </span>
            <div className="w-16 h-px bg-white/20" />
            <span className="font-extrabold text-xs text-[#858585] uppercase tracking-widest">
              NAVIGATION DIRECTORY
            </span>
          </div>

          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl uppercase tracking-tighter text-white">
            THE CARE WE <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">offer.</span>
          </h2>

          <div className="flex flex-col border-t border-white/10">
            {[
              { title: "CAR WASH", subtitle: "FOAM WASH & CABIN CLEANING", path: "/services/car-wash-cleaning" },
              { title: "DETAILING", subtitle: "MULTI-STAGE PAINT CORRECTION", path: "/services/detailing-paint-care" },
              { title: "CERAMIC COATING", subtitle: "9H NANO-CERAMIC PROTECTION", path: "/services/ceramic-coating" },
              { title: "PPF", subtitle: "PAINT PROTECTION FILM ARMOR", path: "/services/ppf-paint-protection" },
              { title: "SUN-CONTROL", subtitle: "HEAT REJECTION WINDOW FILMS", path: "/services/sun-control-films" },
              { title: "ACCESSORIES", subtitle: "AUTOMOTIVE STYLING & CARE", path: "/services/car-accessories" },
            ].map((svc, idx) => (
              <Link
                key={svc.title}
                to={svc.path}
                className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-white/10 hover:border-[#FF4B00] transition-colors gap-4"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-extrabold text-xs text-[#858585] group-hover:text-[#FF4B00] transition-colors">
                    0{idx + 1}
                  </span>
                  <h3 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white group-hover:text-[#FF4B00] transition-colors">
                    {svc.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-6">
                  <span className="text-xs text-[#858585] uppercase tracking-widest font-mono group-hover:text-white transition-colors">
                    {svc.subtitle}
                  </span>
                  <span className="text-2xl text-[#858585] group-hover:text-[#FF4B00] group-hover:translate-x-2 transition-all">
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 06 / FINAL ENQUIRY — CINEMATIC AUTOMOTIVE CLOSING FRAME */}
      <section className="relative w-full min-h-[75vh] md:min-h-[85vh] flex flex-col justify-end bg-[#050505] text-white overflow-hidden py-20 sm:py-32 font-manrope">
        {/* Layer 1: Full-Bleed Background Visual */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/about/about-final-cta.jpg"
            alt="Freshly detailed vehicle inside TMR Car Care studio bay in Tiruppur"
            className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-[10000ms] ease-out hover:scale-105"
          />
        </div>

        {/* Layer 2: Fixed Dark Cinematic Overlay Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/95 via-black/80 to-black/40 pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none" />

        {/* Layer 3: Editorial Content Box */}
        <div className="relative z-20 max-w-[1360px] w-full mx-auto px-5 md:px-16 flex flex-col justify-end space-y-8 my-auto">
          <div className="max-w-2xl space-y-6">
            <div className="font-extrabold text-xs text-[#FF4B00] tracking-widest uppercase flex items-center">
              <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
              06 / ENQUIRY
            </div>

            <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase text-white leading-[0.92] tracking-tighter">
              READY TO START THE <br />
              <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">conversation?</span>
            </h2>

            <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] leading-relaxed font-normal border-l pl-4 border-white/20 max-w-xl">
              Tell TMR what you're looking for and we'll help you find the right service or next step for your vehicle.
            </p>

            {/* Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=About%20Page%20Enquiry`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#FF4B00] text-white rounded-md font-extrabold text-xs uppercase tracking-widest hover:bg-white hover:text-[#050505] transition-colors shadow-2xl text-center inline-flex items-center justify-center gap-2"
              >
                <span>WHATSAPP TMR</span>
                <span className="text-base">→</span>
              </a>

              <a
                href={`tel:${companyData.contact.phone}`}
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-md font-extrabold text-xs uppercase tracking-widest hover:bg-white hover:text-[#050505] transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                <span>CALL TMR</span>
                <span className="text-base">→</span>
              </a>
            </div>

            {/* Location Line */}
            <div className="pt-6 border-t border-white/15 text-xs text-[#858585] uppercase tracking-widest font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF4B00] animate-pulse" />
              <span>Tiruppur, Tamil Nadu • Avinashi Road • TMR Car Care Studio</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
