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

      {/* 03 / THE BELIEF — MASTER EDITORIAL REBUILD MATCHING REFERENCE SCREENSHOT */}
      <section className="relative w-full min-h-screen min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#050505] text-white border-b border-white/10 selection:bg-[#FF4B00]" id="belief">
        
        {/* Layer 0: Full-Bleed Video Background (Fills entire 100vh Section) */}
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

        {/* Layer 1: Left-Heavy Dark Vignette & Readability Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/65 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/50 z-10 pointer-events-none" />

        {/* Layer 2: Floating Editorial UI Stack (Matching Reference Image Typography Exactly) */}
        <div className="relative z-20 max-w-[1360px] w-full mx-auto px-6 md:px-16 pt-24 sm:pt-32 flex flex-col space-y-6">
          
          {/* Eyebrow: Slash marker + THE BELIEF | OUR PHILOSOPHY */}
          <div className="flex items-center gap-3">
            <span className="font-['Geist','Plus_Jakarta_Sans',sans-serif] text-xs uppercase tracking-[0.2em] font-bold text-[#FF4B00] flex items-center gap-2">
              <span className="inline-block w-3.5 h-0.5 bg-[#FF4B00] transform -rotate-45" />
              <span>THE BELIEF</span>
            </span>
            <span className="text-white/30 text-xs font-mono">|</span>
            <span className="font-['Geist','Plus_Jakarta_Sans',sans-serif] text-xs uppercase tracking-[0.2em] font-medium text-[#A0A0A0]">
              OUR PHILOSOPHY
            </span>
          </div>

          {/* 4-Line Refined Geometric Display Headline */}
          <h2 className="font-['Plus_Jakarta_Sans','Geist','Inter_Tight',sans-serif] font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[82px] leading-[1.04] tracking-[-0.015em] uppercase text-white select-none max-w-[540px] xl:max-w-[620px] pt-2">
            <span className="block font-normal text-white">GREAT CARE</span>
            <span className="block font-normal text-white">BEGINS LONG</span>
            <span className="block font-normal text-white">BEFORE THE</span>
            <span className="block font-normal italic text-[#FF4B00] relative inline-block border-b-2 border-[#FF4B00]/70 pb-1">
              POLISHER.
            </span>
          </h2>

          {/* Supporting Paragraph */}
          <p className="font-['Geist','Manrope',sans-serif] text-sm sm:text-base text-[#D8D8D5] leading-relaxed max-w-[480px] font-normal pt-2">
            At TMR Car Care, true quality starts before the machine touches the vehicle. We study the surface, understand its condition, and choose the right process for the finish.
          </p>

          {/* Single Minimal CTA Link */}
          <div className="pt-3">
            <Link
              to="/services/detailing-paint-care"
              className="inline-flex items-center gap-3 font-['Geist','Manrope',sans-serif] font-bold text-xs uppercase tracking-[0.2em] text-[#FF4B00] hover:text-white transition-colors group"
            >
              <span>EXPLORE OUR PROCESS</span>
              <span className="text-base group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </Link>
          </div>

        </div>

        {/* Layer 3: Bottom Three-Column Integrated Information Rail */}
        <div className="relative z-20 max-w-[1360px] w-full mx-auto px-6 md:px-16 pb-12 sm:pb-16 pt-8">
          <div className="pt-8 border-t border-white/15 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            
            {/* Column 01 */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-semibold text-2xl sm:text-3xl text-[#FF4B00]">
                  01
                </span>
                <h3 className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-bold text-base sm:text-lg uppercase tracking-wider text-white">
                  UNDERSTAND
                </h3>
              </div>
              <p className="font-['Geist','Manrope',sans-serif] text-xs text-[#A0A0A0] leading-relaxed">
                We inspect and study every detail.
              </p>
              <div className="w-8 h-0.5 bg-[#FF4B00]/60 mt-1" />
            </div>

            {/* Column 02 */}
            <div className="flex flex-col space-y-2 border-t md:border-t-0 md:border-l border-white/15 pt-6 md:pt-0 md:pl-10">
              <div className="flex items-center gap-3">
                <span className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-semibold text-2xl sm:text-3xl text-[#FF4B00]">
                  02
                </span>
                <h3 className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-bold text-base sm:text-lg uppercase tracking-wider text-white">
                  REFINE
                </h3>
              </div>
              <p className="font-['Geist','Manrope',sans-serif] text-xs text-[#A0A0A0] leading-relaxed">
                We choose the right method and perfect it.
              </p>
              <div className="w-8 h-0.5 bg-[#FF4B00]/60 mt-1" />
            </div>

            {/* Column 03 */}
            <div className="flex flex-col space-y-2 border-t md:border-t-0 md:border-l border-white/15 pt-6 md:pt-0 md:pl-10">
              <div className="flex items-center gap-3">
                <span className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-semibold text-2xl sm:text-3xl text-[#FF4B00]">
                  03
                </span>
                <h3 className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-bold text-base sm:text-lg uppercase tracking-wider text-white">
                  PRESERVE
                </h3>
              </div>
              <p className="font-['Geist','Manrope',sans-serif] text-xs text-[#A0A0A0] leading-relaxed">
                We protect the finish for lasting perfection.
              </p>
              <div className="w-8 h-0.5 bg-[#FF4B00]/60 mt-1" />
            </div>

          </div>
        </div>

      </section>

      {/* 04 / THE APPROACH — CINEMATIC AUTOMOTIVE PROCESS SECTION */}
      <section className="bg-[#111111] text-white relative w-full overflow-hidden py-24 sm:py-32 border-b border-white/10" id="approach">
        <div className="max-w-[1360px] mx-auto px-6 md:px-16 relative z-10 space-y-16">
          
          {/* Top Label Bar */}
          <div className="flex items-center gap-3">
            <span className="font-['Geist','Plus_Jakarta_Sans',sans-serif] text-xs uppercase tracking-[0.2em] font-bold text-[#FF4B00] flex items-center gap-2">
              <span className="inline-block w-3.5 h-0.5 bg-[#FF4B00] transform -rotate-45" />
              <span>04 / THE APPROACH</span>
            </span>
            <span className="text-white/30 text-xs font-mono">|</span>
            <span className="font-['Geist','Plus_Jakarta_Sans',sans-serif] text-xs uppercase tracking-[0.2em] font-medium text-[#A0A0A0]">
              WORKFLOW & METHODOLOGY
            </span>
          </div>

          {/* Large Editorial Headline & Supporting Copy Stack */}
          <div className="space-y-6 max-w-4xl">
            <h2 className="font-['Plus_Jakarta_Sans','Geist','Inter_Tight',sans-serif] font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[78px] leading-[1.02] tracking-[-0.015em] uppercase text-white select-none">
              CARE IS A PROCESS OF <br />
              <span className="font-normal italic text-[#FF4B00] relative inline-block border-b-2 border-[#FF4B00]/70 pb-1">
                attention.
              </span>
            </h2>

            <p className="font-['Geist','Manrope',sans-serif] text-base sm:text-lg text-[#D8D8D5] leading-relaxed max-w-2xl font-normal border-l-2 border-[#FF4B00] pl-6">
              At TMR Car Care, we do not follow a generic detailing routine. We study the vehicle, understand its clear coat condition, choose the appropriate correction method, and finish with the right surface protection strategy.
            </p>
          </div>

          {/* Full-Width Large Cinematic Visual Showcase (75-85% Desktop Width) */}
          <div className="relative w-full lg:w-[88%] mx-auto aspect-[16/9] lg:aspect-[2.2/1] rounded-xl overflow-hidden border border-white/15 shadow-[0_30px_70px_rgba(0,0,0,0.85)] bg-black group">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/about/about-approach-cinematic.jpg"
              className="w-full h-full object-cover object-center scale-100 group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
              aria-label="Professional automotive detailing inspection and paint correction workflow at TMR Car Care"
            >
              <source src="/videos/approach/approach-cinematic.mp4" type="video/mp4" />
              <img
                src="/images/about/about-approach-cinematic.jpg"
                alt="Professional automotive detailing technician inspecting clear coat finish at TMR Car Care studio"
                className="w-full h-full object-cover"
              />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-20 pointer-events-none">
              <div className="flex items-center gap-3 text-[11px] font-mono text-white/80 uppercase tracking-widest bg-black/75 backdrop-blur-md px-4 py-2 rounded-md border border-white/15">
                <span className="w-2 h-2 rounded-full bg-[#FF4B00] animate-pulse" />
                <span>STUDIO WORKFLOW • SURFACE DIAGNOSIS & MULTI-STAGE CORRECTION</span>
              </div>
            </div>
          </div>

          {/* Process Rail: Continuous Three-Column Editorial Sequence (NO CARDS, NO BOXES) */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-semibold text-2xl sm:text-3xl text-[#FF4B00]">
                  01
                </span>
                <span className="text-white/40 font-mono text-xs">—</span>
                <h3 className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-bold text-base sm:text-lg uppercase tracking-wider text-white">
                  OBSERVE
                </h3>
              </div>
              <span className="text-[11px] font-mono text-[#FF4B00] uppercase tracking-widest">
                SURFACE DIAGNOSIS
              </span>
              <p className="font-['Geist','Manrope',sans-serif] text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                Understand the clear coat, surface defects, and material condition before treatment.
              </p>
              <div className="w-8 h-0.5 bg-[#FF4B00]/60 mt-1" />
            </div>

            <div className="flex flex-col space-y-3 border-t md:border-t-0 md:border-l border-white/15 pt-6 md:pt-0 md:pl-10">
              <div className="flex items-center gap-3">
                <span className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-semibold text-2xl sm:text-3xl text-[#FF4B00]">
                  02
                </span>
                <span className="text-white/40 font-mono text-xs">—</span>
                <h3 className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-bold text-base sm:text-lg uppercase tracking-wider text-white">
                  CARE
                </h3>
              </div>
              <span className="text-[11px] font-mono text-[#FF4B00] uppercase tracking-widest">
                REFINEMENT & PROTECTION
              </span>
              <p className="font-['Geist','Manrope',sans-serif] text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                Use the appropriate polishing method, compound, pad and process for the vehicle.
              </p>
              <div className="w-8 h-0.5 bg-[#FF4B00]/60 mt-1" />
            </div>

            <div className="flex flex-col space-y-3 border-t md:border-t-0 md:border-l border-white/15 pt-6 md:pt-0 md:pl-10">
              <div className="flex items-center gap-3">
                <span className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-semibold text-2xl sm:text-3xl text-[#FF4B00]">
                  03
                </span>
                <span className="text-white/40 font-mono text-xs">—</span>
                <h3 className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-bold text-base sm:text-lg uppercase tracking-wider text-white">
                  FINISH
                </h3>
              </div>
              <span className="text-[11px] font-mono text-[#FF4B00] uppercase tracking-widest">
                FINAL PRESENTATION
              </span>
              <p className="font-['Geist','Manrope',sans-serif] text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                Complete the vehicle with the appropriate ceramic protection or self-healing PPF strategy.
              </p>
              <div className="w-8 h-0.5 bg-[#FF4B00]/60 mt-1" />
            </div>

          </div>

        </div>
      </section>

      {/* 05 / THE TMR STANDARD — TYPOGRAPHIC MAGAZINE EDITORIAL SECTION */}
      <section className="bg-[#050505] text-white relative w-full overflow-hidden py-24 sm:py-32 border-b border-white/10" id="standard">
        <div className="max-w-[1360px] mx-auto px-6 md:px-16 relative z-10 space-y-16">
          
          {/* Top Label Bar */}
          <div className="flex items-center gap-3">
            <span className="font-['Geist','Plus_Jakarta_Sans',sans-serif] text-xs uppercase tracking-[0.2em] font-bold text-[#FF4B00] flex items-center gap-2">
              <span className="inline-block w-3.5 h-0.5 bg-[#FF4B00] transform -rotate-45" />
              <span>05 / THE TMR STANDARD</span>
            </span>
            <span className="text-white/30 text-xs font-mono">|</span>
            <span className="font-['Geist','Plus_Jakarta_Sans',sans-serif] text-xs uppercase tracking-[0.2em] font-medium text-[#A0A0A0]">
              BRAND DIFFERENTIATION
            </span>
          </div>

          {/* Asymmetric Desktop Layout: Left Headline + Right Brand Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-8 border-b border-white/15">
            <div className="lg:col-span-7">
              <h2 className="font-['Plus_Jakarta_Sans','Geist','Inter_Tight',sans-serif] font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.02] tracking-[-0.015em] uppercase text-white select-none">
                QUALITY IS IN THE <br />
                <span className="font-normal italic text-[#FF4B00] relative inline-block border-b-2 border-[#FF4B00]/70 pb-1">
                  process.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5 pb-2">
              <p className="font-['Geist','Manrope',sans-serif] text-base sm:text-lg text-[#D8D8D5] leading-relaxed font-normal border-l-2 border-[#FF4B00] pl-6">
                What sets TMR apart isn't marketing claims — it's the disciplined standard applied to every vehicle that enters our studio. From preparation to final inspection, we prioritize precision over speed.
              </p>
            </div>
          </div>

          {/* Four Standard Principles: Magazine-Style Numbered Editorial Grid (NO CARDS, NO SHADOWS) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            
            <div className="flex flex-col space-y-3 pb-8 border-b border-white/15">
              <span className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-light text-3xl sm:text-4xl text-[#FF4B00]">
                01
              </span>
              <h3 className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-bold text-xl uppercase tracking-wider text-white">
                EXPERIENCE
              </h3>
              <p className="font-['Geist','Manrope',sans-serif] text-sm text-[#A0A0A0] leading-relaxed max-w-lg">
                Established in 2009, TMR brings more than a decade of dedicated automotive-care experience and clear-coat expertise into every vehicle we handle.
              </p>
            </div>

            <div className="flex flex-col space-y-3 pb-8 border-b border-white/15">
              <span className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-light text-3xl sm:text-4xl text-[#FF4B00]">
                02
              </span>
              <h3 className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-bold text-xl uppercase tracking-wider text-white">
                QUALITY
              </h3>
              <p className="font-['Geist','Manrope',sans-serif] text-sm text-[#A0A0A0] leading-relaxed max-w-lg">
                We prioritise correct preparation, controlled execution and a properly finished surface rather than rushing the job.
              </p>
            </div>

            <div className="flex flex-col space-y-3 pb-8 border-b md:border-b-0 border-white/15">
              <span className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-light text-3xl sm:text-4xl text-[#FF4B00]">
                03
              </span>
              <h3 className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-bold text-xl uppercase tracking-wider text-white">
                SPECIALIZATION
              </h3>
              <p className="font-['Geist','Manrope',sans-serif] text-sm text-[#A0A0A0] leading-relaxed max-w-lg">
                Our team is focused specifically on automotive care, paint refinement, ceramic protection and vehicle surface preservation.
              </p>
            </div>

            <div className="flex flex-col space-y-3">
              <span className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-light text-3xl sm:text-4xl text-[#FF4B00]">
                04
              </span>
              <h3 className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-bold text-xl uppercase tracking-wider text-white">
                CONSISTENCY
              </h3>
              <p className="font-['Geist','Manrope',sans-serif] text-sm text-[#A0A0A0] leading-relaxed max-w-lg">
                The same disciplined approach carries from initial surface inspection through multi-stage correction and final hydrophobic protection.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 06 / ROOTED IN TIRUPPUR — LIGHT EDITORIAL BRAND LOCATION SECTION */}
      <section className="bg-[#F9F8F3] text-[#111111] relative w-full overflow-hidden py-24 sm:py-36 border-b border-[#E2E1D9]" id="location">
        <div className="max-w-[1360px] mx-auto px-6 md:px-16 relative z-10 space-y-16">
          
          {/* Top Eyebrow Bar */}
          <div className="flex items-center gap-3">
            <span className="font-['Geist','Plus_Jakarta_Sans',sans-serif] text-xs uppercase tracking-[0.2em] font-bold text-[#FF4B00] flex items-center gap-2">
              <span className="inline-block w-3.5 h-0.5 bg-[#FF4B00] transform -rotate-45" />
              <span>06 / TIRUPPUR</span>
            </span>
            <span className="text-black/30 text-xs font-mono">|</span>
            <span className="font-['Geist','Plus_Jakarta_Sans',sans-serif] text-xs uppercase tracking-[0.2em] font-medium text-[#707070]">
              TMR CAR CARE / TIRUPPUR
            </span>
          </div>

          {/* Asymmetric Header: Large Headline + Immersive Indian Detailing Photographic Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-8">
              <h2 className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.02] tracking-[-0.015em] uppercase text-[#111111] select-none">
                ROOTED IN <br />
                <span className="font-normal italic text-[#FF4B00] relative inline-block border-b-2 border-[#FF4B00]/70 pb-1">
                  tiruppur.
                </span>
              </h2>

              <p className="font-['Geist','Manrope',sans-serif] text-base sm:text-lg text-[#555454] leading-relaxed font-normal border-l-2 border-[#FF4B00] pl-6">
                TMR Car Care began in Tiruppur in 2009 and continues to serve vehicle owners from the city and surrounding areas with professional automotive care, paint correction, and vehicle protection.
              </p>

              {/* Location Editorial Metadata (NO CARDS, ELEGANT METADATA RAILS) */}
              <div className="pt-4 space-y-6 border-t border-[#E2E1D9]">
                
                <div className="space-y-1">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#FF4B00] font-bold">
                    FLAGSHIP STUDIO ADDRESS
                  </span>
                  <p className="font-['Geist','Manrope',sans-serif] text-sm text-[#111111] font-semibold">
                    AVINASHI ROAD • NEAR HOPE COLLEGE JUNCTION
                  </p>
                  <p className="font-['Geist','Manrope',sans-serif] text-xs text-[#707070]">
                    TIRUPPUR, TAMIL NADU — 641602
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E1D9] space-y-1">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#FF4B00] font-bold">
                    STUDIO HOURS
                  </span>
                  <p className="font-['Geist','Manrope',sans-serif] text-sm text-[#111111] font-semibold">
                    MONDAY — SATURDAY | 9:00 AM — 8:00 PM
                  </p>
                  <p className="font-['Geist','Manrope',sans-serif] text-xs text-[#707070]">
                    SUNDAY: BY PRIOR APPOINTMENT ONLY
                  </p>
                </div>

              </div>

              {/* Single Minimal Direction CTA */}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 font-['Geist','Manrope',sans-serif] font-bold text-xs uppercase tracking-[0.2em] text-[#111111] hover:text-[#FF4B00] transition-colors group"
                >
                  <span>VIEW LOCATION & CONTACT</span>
                  <span className="text-base group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>

            {/* Right Immersive Editorial Photographic Composition (Occupying ~60% Width, Asymmetric) */}
            <div className="lg:col-span-7 relative border border-[#E2E1D9] rounded-xl overflow-hidden shadow-2xl bg-[#111111] group">
              <img
                src="/images/about/about-tiruppur-indian.jpg"
                alt="Tata Safari and Mahindra SUV professional detailing surface inspection inside TMR Car Care studio in Tiruppur"
                className="w-full h-[400px] sm:h-[560px] object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 z-20 pointer-events-none">
                <div className="flex items-center gap-3 text-[11px] font-mono text-white/90 uppercase tracking-widest bg-black/75 backdrop-blur-md px-4 py-2 rounded-md border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-[#FF4B00]" />
                  <span>TMR DETAILING STUDIO • AVINASHI ROAD, TIRUPPUR</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 07 / FINAL CTA — FULL-BLEED CINEMATIC CONVERSION SECTION */}
      <section className="relative w-full min-h-screen min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#050505] text-white border-b border-white/10 selection:bg-[#FF4B00]">
        
        {/* Layer 0: Full-Bleed Background Visual (Freshly Detailed SUV in Studio at Night) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/about/about-cta-indian.jpg"
            alt="Freshly detailed SUV inside TMR Car Care detailing bay in Tiruppur at night"
            className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-[10000ms] ease-out hover:scale-105"
          />
        </div>

        {/* Layer 1: Dark Cinematic Vignette & Atmospheric Burnt-Orange Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/95 via-black/80 to-black/45 pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#FF4B00]/20 via-transparent to-transparent pointer-events-none" />

        {/* Layer 2: Floating Editorial UI Stack (Positioned Upper-Left directly over background) */}
        <div className="relative z-20 max-w-[1360px] w-full mx-auto px-6 md:px-16 pt-28 sm:pt-36 flex flex-col space-y-8">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#FF4B00] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4B00] font-bold">
              07 / START HERE
            </span>
          </div>

          {/* Headline */}
          <div className="max-w-3xl space-y-6">
            <h2 className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.02] tracking-tighter uppercase text-white select-none">
              GIVE YOUR CAR <br />
              THE CARE IT <br />
              <span className="font-normal italic text-[#FF4B00] relative inline-block border-b-2 border-[#FF4B00]/70 pb-1">
                deserves.
              </span>
            </h2>

            <p className="font-['Geist','Manrope',sans-serif] text-base sm:text-lg text-[#E5E5E0] leading-relaxed max-w-xl font-normal border-l-2 border-[#FF4B00] pl-6">
              Talk to the TMR Car Care team about the right next step for your vehicle.
            </p>

            {/* Minimal Conversion Buttons (2 Actions Only) */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=About%20Page%20Enquiry`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#FF4B00] text-white rounded-md font-['Geist','Manrope',sans-serif] font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-[#050505] transition-colors shadow-2xl text-center inline-flex items-center justify-center gap-2"
              >
                <span>WHATSAPP TMR</span>
                <span className="text-base">→</span>
              </a>

              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-md font-['Geist','Manrope',sans-serif] font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-[#050505] transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                <span>CONTACT TMR</span>
                <span className="text-base">→</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Layer 3: Bottom Location Metadata */}
        <div className="relative z-20 max-w-[1360px] w-full mx-auto px-6 md:px-16 pb-12 sm:pb-16 pt-12">
          <div className="pt-6 border-t border-white/15 text-xs text-[#858585] uppercase tracking-widest font-semibold flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#FF4B00] animate-pulse" />
            <span>TIRUPPUR, TAMIL NADU • AVINASHI ROAD • TMR CAR CARE STUDIO</span>
          </div>
        </div>

      </section>

    </div>
  );
};
