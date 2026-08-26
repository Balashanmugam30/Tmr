import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '@/data/company';

export const AboutPage: React.FC = () => {
  const [activeApproachStep, setActiveApproachStep] = useState<number>(0);

  useEffect(() => {
    document.title = "About TMR Car Care | Premium Detailing Studio Tiruppur";
    window.scrollTo(0, 0);
  }, []);

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
      
      {/* 01 / EDITORIAL AUTOMOTIVE HERO — STATIC PHOTOGRAPHIC BACKGROUND */}
      <section className="relative w-full min-h-[90vh] lg:min-h-screen flex flex-col justify-start pt-28 sm:pt-36 pb-16 px-6 md:px-16 overflow-hidden border-b border-white/10 bg-[#050505] text-white selection:bg-[#FF4B00]">
        
        {/* Layer 1: Dedicated Static Cinematic Automotive Hero Photo */}
        <img
          src="/images/about/about-hero-static.jpg"
          alt="TMR Car Care matte-black Dodge Challenger with lit quad halo headlights in burnt orange atmosphere"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0"
        />

        {/* Layer 2: Subtle Left Readability Gradient & Fine Film Grain Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/92 via-[#050505]/45 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/85 via-transparent to-black/35 z-10 pointer-events-none" />
        <div
          className="absolute inset-0 z-10 opacity-[0.035] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Layer 3: Upper-Left Editorial Content Stack (Anchored to Upper-Left Negative Space) */}
        <div className="relative z-20 max-w-[1360px] w-full mx-auto flex flex-col justify-start pt-4 sm:pt-8">
          
          <div className="max-w-xl flex flex-col space-y-5 sm:space-y-6">
            
            {/* Futuristic Geometric Display Headline (Syncopate + Bricolage Grotesque Italic) */}
            <h1 className="font-['Syncopate'] font-bold text-4xl sm:text-6xl md:text-[68px] lg:text-[76px] text-white uppercase tracking-[0.14em] leading-[1.05] select-none max-w-xl">
              <span className="block font-medium tracking-[0.16em] text-white">BUILT</span>
              <span className="block font-bold tracking-[0.12em] text-white">AROUND</span>
              <span className="block font-['Bricolage_Grotesque'] font-extrabold italic text-[#FF4B00] lowercase pr-4 tracking-normal transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                THE craft.
              </span>
            </h1>

            {/* Refined Small Supporting Copy Statement */}
            <p className="font-editorial text-base sm:text-lg text-[#E5E5E0] leading-relaxed max-w-md font-normal pt-1">
              Care isn't only about the finish. <br className="hidden sm:inline" />
              It's about the attention that gets you there.
            </p>
            {/* Single Minimal Editorial CTA Link */}
            <div className="pt-2">
              <a
                href="#story"
                className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-[0.2em] text-white hover:text-[#FF4B00] transition-colors group"
              >
                <span>DISCOVER THE TMR STORY</span>
                <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </a>
            </div>

          </div>

        </div>

      </section>

      {/* 02 / OUR STORY — BRAND ORIGIN & FOUNDER STATEMENT */}
      <section className="bg-[#F5F4EF] text-[#111111] relative w-full overflow-hidden py-20 sm:py-32 border-b border-[#D8D8D5]" id="story">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10 space-y-16">
          
          <div className="flex items-center gap-4">
            <span className="font-manrope font-extrabold text-xs text-[#858585] uppercase tracking-widest">
              02 / OUR STORY
            </span>
            <div className="w-16 h-px bg-[#D8D8D5]" />
            <span className="font-manrope font-extrabold text-xs text-[#FF4B00] uppercase tracking-widest">
              TMR CAR CARE • EST. 2009
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Story Content Column */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[0.92] tracking-tighter uppercase text-[#111111]">
                BUILT IN TIRUPPUR. <br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase pr-4">built on care.</span>
              </h2>

              <div className="space-y-6 font-manrope text-base sm:text-lg text-[#5f5e5e] leading-relaxed max-w-2xl border-l-2 border-[#FF4B00] pl-6">
                <p>
                  TMR Car Care began in Tiruppur in 2009 with a simple, singular purpose: to provide quality automotive care with greater attention to the vehicle, the process, and the final result.
                </p>
                <p>
                  Founded by Chandramohan Kandha Velu, the business grew from a dedication to precision paintwork into an established professional automotive detailing studio backed by a specialized team.
                </p>
                <p>
                  Today, the founder remains actively involved in daily studio operations, ensuring that every vehicle receives the same disciplined preparation, clear-coat respect, and hydrophobic finish that built the TMR reputation across 1,000+ vehicles.
                </p>
              </div>
            </div>

            {/* Right Story Photographic Asset */}
            <div className="lg:col-span-5 relative border border-[#D8D8D5] rounded-xl overflow-hidden shadow-2xl bg-[#111111] group">
              <img
                src="/images/about/about-story.jpg"
                alt="TMR Car Care professional detailing studio team working on luxury vehicle surface in Tiruppur"
                className="w-full h-[380px] sm:h-[500px] object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>

          {/* Bottom Large Editorial Statistics Row */}
          <div className="pt-12 border-t border-[#D8D8D5] grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="flex flex-col space-y-2 p-2">
              <span className="font-['Syncopate'] font-bold text-4xl sm:text-5xl text-[#111111] tracking-tight">
                EST. 2009
              </span>
              <span className="font-manrope font-extrabold text-xs uppercase tracking-widest text-[#FF4B00]">
                FOUNDED IN TIRUPPUR
              </span>
              <p className="text-xs text-[#707070] leading-relaxed">
                Built on over a decade of disciplined automotive care and surface refinement.
              </p>
            </div>

            <div className="flex flex-col space-y-2 p-2 border-t md:border-t-0 md:border-l border-[#D8D8D5] md:pl-8">
              <span className="font-['Syncopate'] font-bold text-4xl sm:text-5xl text-[#111111] tracking-tight">
                1000+
              </span>
              <span className="font-manrope font-extrabold text-xs uppercase tracking-widest text-[#FF4B00]">
                VEHICLES CARED FOR
              </span>
              <p className="text-xs text-[#707070] leading-relaxed">
                Trusted by vehicle owners across Tiruppur and surrounding districts.
              </p>
            </div>

            <div className="flex flex-col space-y-2 p-2 border-t md:border-t-0 md:border-l border-[#D8D8D5] md:pl-8">
              <span className="font-['Syncopate'] font-bold text-3xl sm:text-4xl text-[#111111] tracking-tight uppercase">
                TIRUPPUR
              </span>
              <span className="font-manrope font-extrabold text-xs uppercase tracking-widest text-[#FF4B00]">
                TAMIL NADU, INDIA
              </span>
              <p className="text-xs text-[#707070] leading-relaxed">
                Flagship studio on Avinashi Road, Near Hope College Junction.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 03 / THE BELIEF — FULL-BLEED CINEMATIC VIDEO MANIFESTO SECTION */}
      <section className="relative w-full min-h-screen min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#050505] text-white border-b border-white/10 selection:bg-[#FF4B00]" id="belief">
        
        {/* Layer 0: Full-Bleed Video Canvas Background (Fills entire 100vh Section) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/about/about-belief-video-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0"
          aria-label="Professional automotive detailing background video at TMR Car Care"
        >
          <source src="/videos/about/about-belief-cinematic.mp4" type="video/mp4" />
          <img
            src="/images/about/about-belief-video-poster.jpg"
            alt="Professional automotive detailing background"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Layer 1: Dark Cinematic Vignette & Readability Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/65 to-black/35 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/60 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#FF4B00]/15 via-transparent to-transparent z-10 pointer-events-none" />

        {/* Layer 2: Floating Editorial UI Stack (Positioned Directly Over Video Background) */}
        <div className="relative z-20 max-w-[1360px] w-full mx-auto px-6 md:px-16 pt-28 sm:pt-36 flex flex-col space-y-8">
          
          {/* Understated Top Section Marker */}
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#FF4B00] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4B00] font-bold">
              03 / THE BELIEF
            </span>
            <span className="text-white/30">•</span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">
              TMR PHILOSOPHY
            </span>
          </div>

          {/* Upper-Left Editorial Typography Stack */}
          <div className="max-w-3xl space-y-6">
            <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[0.92] tracking-tighter uppercase text-white select-none">
              GOOD AUTOMOTIVE <br />
              CARE STARTS <br />
              BEFORE THE <br />
              <span className="font-['Bricolage_Grotesque'] font-extrabold italic text-[#FF4B00] lowercase pr-4 tracking-normal inline-block transform -rotate-1 hover:rotate-0 transition-transform duration-300">polisher.</span>
            </h2>

            {/* Small Editorial Paragraph */}
            <p className="font-manrope text-base sm:text-lg text-[#E5E5E0] leading-relaxed max-w-xl font-normal border-l-2 border-[#FF4B00] pl-6">
              At TMR Car Care in Tiruppur, quality begins before the machine touches the vehicle. We study the surface, understand its condition, and choose the right process for the finish.
            </p>

            {/* Single Minimal Editorial CTA */}
            <div className="pt-2">
              <Link
                to="/services/detailing-paint-care"
                className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-[0.2em] text-[#FF4B00] hover:text-white transition-colors group"
              >
                <span>EXPLORE TMR DETAILING</span>
                <span className="text-base group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Layer 3: Bottom Editorial Navigation Strip (Floating Over Bottom Video Edge) */}
        <div className="relative z-20 max-w-[1360px] w-full mx-auto px-6 md:px-16 pb-12 sm:pb-16 pt-12">
          <div className="pt-8 border-t border-white/15 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-['Syncopate'] font-bold text-2xl sm:text-3xl text-[#FF4B00]">01</span>
                <h3 className="font-manrope font-extrabold text-base sm:text-lg uppercase tracking-wider text-white">
                  UNDERSTAND
                </h3>
              </div>
              <p className="text-xs text-[#A0A0A0] leading-relaxed pl-1">
                Understand the vehicle and surface condition before treatment.
              </p>
            </div>

            <div className="flex flex-col space-y-2 border-t md:border-t-0 md:border-l border-white/15 pt-6 md:pt-0 md:pl-8">
              <div className="flex items-center gap-3">
                <span className="font-['Syncopate'] font-bold text-2xl sm:text-3xl text-[#FF4B00]">02</span>
                <h3 className="font-manrope font-extrabold text-base sm:text-lg uppercase tracking-wider text-white">
                  REFINE
                </h3>
              </div>
              <p className="text-xs text-[#A0A0A0] leading-relaxed pl-1">
                Choose the correct detailing and paint correction process.
              </p>
            </div>

            <div className="flex flex-col space-y-2 border-t md:border-t-0 md:border-l border-white/15 pt-6 md:pt-0 md:pl-8">
              <div className="flex items-center gap-3">
                <span className="font-['Syncopate'] font-bold text-2xl sm:text-3xl text-[#FF4B00]">03</span>
                <h3 className="font-manrope font-extrabold text-base sm:text-lg uppercase tracking-wider text-white">
                  PRESERVE
                </h3>
              </div>
              <p className="text-xs text-[#A0A0A0] leading-relaxed pl-1">
                Protect the finished surface with lasting ceramic shielding.
              </p>
            </div>

          </div>
        </div>

      </section>

      {/* 04 / THE APPROACH — METHOD & WORKFLOW */}
      <section className="bg-[#F5F4EF] text-[#111111] relative w-full overflow-hidden py-20 sm:py-32 border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10 space-y-12">
          
          <div className="flex items-center gap-4">
            <span className="font-manrope font-extrabold text-xs text-[#858585] uppercase tracking-widest">
              04 / THE APPROACH
            </span>
            <div className="w-16 h-px bg-[#D8D8D5]" />
            <span className="font-manrope font-extrabold text-xs text-[#FF4B00] uppercase tracking-widest">
              WORKFLOW & METHODOLOGY
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

      {/* 05 / THE TMR STANDARD — BRAND DIFFERENTIATION */}
      <section className="bg-[#0D0D0D] text-white relative w-full overflow-hidden py-20 sm:py-32 border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10 space-y-16">
          
          <div className="flex items-center gap-4">
            <span className="font-extrabold text-xs text-[#FF4B00] uppercase tracking-widest">
              05 / THE TMR STANDARD
            </span>
            <div className="w-16 h-px bg-white/20" />
            <span className="font-extrabold text-xs text-[#858585] uppercase tracking-widest">
              BRAND DIFFERENTIATION
            </span>
          </div>

          <div className="max-w-3xl space-y-6">
            <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-white leading-[0.92]">
              QUALITY IS IN THE <br />
              <span className="font-['Bricolage_Grotesque'] font-extrabold italic text-[#FF4B00] lowercase pr-4 tracking-normal inline-block transform -rotate-1">process.</span>
            </h2>
            <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] leading-relaxed border-l-2 border-[#FF4B00] pl-5">
              What sets TMR apart isn't marketing claims — it's the disciplined standard applied to every vehicle that enters our studio.
            </p>
          </div>

          {/* 4 Editorial Differentiation Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
            
            <div className="p-8 rounded-xl border border-white/10 bg-[#141414] flex flex-col justify-between space-y-6 hover:border-[#FF4B00] transition-colors group">
              <span className="font-mono text-xs text-[#FF4B00] uppercase tracking-widest">01 / EXPERIENCE</span>
              <div className="space-y-3">
                <h3 className="font-manrope font-extrabold text-xl uppercase tracking-wide text-white group-hover:text-[#FF4B00] transition-colors">
                  EXPERIENCE
                </h3>
                <p className="text-xs text-[#A0A0A0] leading-relaxed font-normal">
                  Established in 2009 and built around long-term automotive-care knowledge and clear-coat expertise.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-xl border border-white/10 bg-[#141414] flex flex-col justify-between space-y-6 hover:border-[#FF4B00] transition-colors group">
              <span className="font-mono text-xs text-[#FF4B00] uppercase tracking-widest">02 / QUALITY</span>
              <div className="space-y-3">
                <h3 className="font-manrope font-extrabold text-xl uppercase tracking-wide text-white group-hover:text-[#FF4B00] transition-colors">
                  QUALITY
                </h3>
                <p className="text-xs text-[#A0A0A0] leading-relaxed font-normal">
                  The focus is on doing the work properly rather than rushing the preparation or finishing stages.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-xl border border-white/10 bg-[#141414] flex flex-col justify-between space-y-6 hover:border-[#FF4B00] transition-colors group">
              <span className="font-mono text-xs text-[#FF4B00] uppercase tracking-widest">03 / SPECIALIZATION</span>
              <div className="space-y-3">
                <h3 className="font-manrope font-extrabold text-xl uppercase tracking-wide text-white group-hover:text-[#FF4B00] transition-colors">
                  SPECIALIZATION
                </h3>
                <p className="text-xs text-[#A0A0A0] leading-relaxed font-normal">
                  TMR's team is focused specifically on automotive care, paint correction, and vehicle protection.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-xl border border-white/10 bg-[#141414] flex flex-col justify-between space-y-6 hover:border-[#FF4B00] transition-colors group">
              <span className="font-mono text-xs text-[#FF4B00] uppercase tracking-widest">04 / CONSISTENCY</span>
              <div className="space-y-3">
                <h3 className="font-manrope font-extrabold text-xl uppercase tracking-wide text-white group-hover:text-[#FF4B00] transition-colors">
                  CONSISTENCY
                </h3>
                <p className="text-xs text-[#A0A0A0] leading-relaxed font-normal">
                  The same attention to preparation, execution and finish carries through every vehicle we care for.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 06 / ROOTED IN TIRUPPUR — LOCAL STUDIO IDENTITY */}
      <section className="bg-[#F5F4EF] text-[#111111] relative w-full overflow-hidden py-20 sm:py-32 border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10 space-y-12">
          
          <div className="flex items-center gap-4">
            <span className="font-manrope font-extrabold text-xs uppercase tracking-widest text-[#858585]">
              06 / TIRUPPUR
            </span>
            <div className="w-16 h-px bg-[#D8D8D5]" />
            <span className="font-manrope font-extrabold text-xs uppercase tracking-widest text-[#FF4B00]">
              TMR CAR CARE / TIRUPPUR
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl tracking-tighter uppercase text-[#111111] leading-[0.95]">
                ROOTED IN <br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">tiruppur.</span>
              </h2>

              <p className="font-manrope text-sm sm:text-base text-[#5f5e5e] leading-relaxed border-l-2 border-[#FF4B00] pl-4">
                TMR Car Care began in Tiruppur and continues to serve vehicle owners from the city and surrounding areas with professional automotive care.
              </p>

              <div className="pt-2 flex flex-col space-y-2 text-xs font-mono text-[#707070] uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF4B00]" />
                  <span>AVINASHI ROAD • NEAR HOPE COLLEGE JUNCTION</span>
                </div>
                <span className="pl-4 text-[#111111] font-bold">TIRUPPUR, TAMIL NADU 641602</span>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#111111] text-white font-extrabold text-xs uppercase tracking-widest hover:bg-[#FF4B00] transition-colors rounded-md shadow-lg"
                >
                  <span>VIEW LOCATION & CONTACT</span>
                  <span className="text-base">→</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 relative h-[340px] sm:h-[460px] border border-[#D8D8D5] rounded-xl overflow-hidden bg-[#111111] shadow-2xl">
              <img
                src="/images/about/about-tiruppur-studio.jpg"
                alt="TMR Car Care flagship detailing studio in Tiruppur Tamil Nadu"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

          </div>

        </div>
      </section>

      {/* 07 / FINAL CTA — START HERE */}
      <section className="relative w-full min-h-[70vh] flex flex-col justify-end bg-[#050505] text-white overflow-hidden py-20 sm:py-28 font-manrope">
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
              07 / START HERE
            </div>

            <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase text-white leading-[0.92] tracking-tighter">
              YOUR CAR DESERVES <br />
              THE RIGHT <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">care.</span>
            </h2>

            <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] leading-relaxed font-normal border-l pl-4 border-white/20 max-w-xl">
              Talk to the TMR Car Care team about the right next step for your vehicle.
            </p>

            {/* Action Buttons */}
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

              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-md font-extrabold text-xs uppercase tracking-widest hover:bg-white hover:text-[#050505] transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                <span>CONTACT TMR</span>
                <span className="text-base">→</span>
              </Link>
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
