import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '@/data/company';

export const GalleryPage: React.FC = () => {
  // Existing state for Section 05 slider
  const [sliderPos, setSliderPos] = useState<number>(50);

  // --- SECTION 01: HERO MULTI-IMAGE AUTOPLAY & PARALLAX STATE ---
  const [heroIndex, setHeroIndex] = useState<number>(0);
  const [heroParallax, setHeroParallax] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  // --- SECTION 02: THE WORK IN MOTION AUTOPLAY STATE ---
  const [motionIndex, setMotionIndex] = useState<number>(0);
  const [isMotionHovered, setIsMotionHovered] = useState<boolean>(false);

  // --- SECTION 03: SIGNATURE WORK AUTOPLAY STATE ---
  const [sigIndex, setSigIndex] = useState<number>(0);
  const [isSigHovered, setIsSigHovered] = useState<boolean>(false);

  // --- SECTION 04: DETAIL TRANSFORMATION AUTOPLAY STATE ---
  const [detailIndex, setDetailIndex] = useState<number>(0);
  const [isDetailHovered, setIsDetailHovered] = useState<boolean>(false);

  // Hero dedicated local assets (No remote URLs, no duplicates across Section 01 & 02)
  const heroVisuals = [
    {
      src: '/images/gallery/gallery-hero-01.jpg',
      alt: 'Sleek dark supercar inside TMR Car Care detailing studio in Tiruppur',
      tag: 'FLAGSHIP STUDIO // TIRUPPUR',
    },
    {
      src: '/images/gallery/gallery-hero-02.jpg',
      alt: 'Professional automotive technician inspecting paint clear coat with LED detailing light',
      tag: 'CLEAR COAT INSPECTION AUDIT',
    },
    {
      src: '/images/gallery/gallery-hero-03.jpg',
      alt: 'Close up of dual-action machine polisher refining clear coat on a dark metallic body panel',
      tag: 'MULTI-STAGE PAINT CORRECTION',
    },
    {
      src: '/images/gallery/gallery-hero-04.jpg',
      alt: 'Extreme close up macro photograph of mirror paint reflection post detailing',
      tag: 'HIGH-GLOSS REFLECTION FINISH',
    },
  ];

  // Motion Section 02 dedicated 2-column paired visual datasets
  const motionPairs = [
    {
      left: {
        id: '01',
        title: 'PAINT REFINEMENT',
        description: 'Multi-stage paint correction, swirl removal & deep reflection',
        img: '/images/gallery/gallery-motion-01.jpg',
        alt: 'Paint correction and ceramic prep on dark vehicle panel at TMR Car Care',
        link: '/services/detailing-paint-care',
      },
      right: {
        id: '02',
        title: 'CERAMIC COATING',
        description: '9H nano-ceramic surface protection & hydrophobic barrier',
        img: '/images/gallery/gallery-motion-02.jpg',
        alt: 'Ceramic coating application on dark vehicle surface at TMR Car Care',
        link: '/services/ceramic-coating',
      },
    },
    {
      left: {
        id: '03',
        title: 'INTERIOR DETAILING',
        description: 'Leather conditioning, cabin decontamination & precision cleaning',
        img: '/images/gallery/gallery-motion-03.jpg',
        alt: 'Interior cabin detailing on luxury vehicle leather seats at TMR Car Care',
        link: '/services/car-wash-cleaning',
      },
      right: {
        id: '04',
        title: 'PPF INSTALLATION',
        description: 'Self-healing Paint Protection Film armor against stone chips',
        img: '/images/gallery/gallery-motion-04.jpg',
        alt: 'Paint protection film PPF installation with squeegee at TMR Car Care',
        link: '/services/ppf-paint-protection',
      },
    },
    {
      left: {
        id: '05',
        title: 'PAINT FINISH',
        description: 'Flawless mirror finish after multi-stage machine polishing',
        img: '/images/gallery/gallery-01.webp',
        alt: 'Flawless mirror gloss finish on dark sports car bonnet at TMR Car Care',
        link: '/services/detailing-paint-care',
      },
      right: {
        id: '06',
        title: 'STUDIO CRAFT',
        description: 'Precision craftsmanship inside TMR Car Care detailing studio',
        img: '/images/gallery/gallery-02.webp',
        alt: 'High-end vehicle detailing inside TMR Tiruppur studio bay',
        link: '/services/ceramic-coating',
      },
    },
  ];

  // Section 03 Signature Work datasets
  const sigVisuals = [
    {
      primarySrc: '/images/gallery/gallery-sig-01.jpg',
      primaryAlt: 'Graphite luxury sports car after professional paint correction at TMR Car Care Tiruppur',
      secondarySrc: '/images/gallery/gallery-03.webp',
      secondaryAlt: 'Technician machine-polishing dark vehicle panel in studio',
      title: 'PAINT CORRECTION EXCELLENCE',
      tag: '01 / STAGE REFLECTION',
    },
    {
      primarySrc: '/images/gallery/gallery-07.webp',
      primaryAlt: 'Precision surface audit under detailing lights in Tiruppur studio',
      secondarySrc: '/images/gallery/gallery-sig-01.jpg',
      secondaryAlt: 'High-gloss clear coat finish after multi-stage compounding',
      title: 'CLEAR COAT SURFACE AUDIT',
      tag: '02 / INSPECTION CRAFT',
    },
    {
      primarySrc: '/images/gallery/gallery-08.webp',
      primaryAlt: 'Ceramic coated dark automotive paint with hydrophobic water bead reflection',
      secondarySrc: '/images/gallery/gallery-03.webp',
      secondaryAlt: 'Ceramic coating application on dark glossy vehicle door panel',
      title: '9H CERAMIC PROTECTION',
      tag: '03 / NANO-COATING SHIELD',
    },
    {
      primarySrc: '/images/gallery/gallery-03.webp',
      primaryAlt: 'Clear PPF paint protection film installation on luxury car bonnet at TMR Car Care',
      secondarySrc: '/images/gallery/gallery-08.webp',
      secondaryAlt: 'Finished self-healing film gloss on dark car fender',
      title: 'PPF ARMOR INSTALLATION',
      tag: '04 / PPF PRO DEFENSE',
    },
  ];

  // Section 04 Technical Detail Stages dataset
  const detailStages = [
    {
      step: '01 / CONDITION INSPECTION',
      title: 'CLEAR COAT AUDIT & DEFECT MAPPING',
      desc: 'Identifying P1200+ sand scratches, micro-marring, and compound hazing under specialized LED inspection lighting.',
      src: '/images/gallery/gallery-07.webp',
      alt: 'Paint correction inspection under detailing studio lighting in Tiruppur',
    },
    {
      step: '02 / MACHINE REFINEMENT',
      title: 'MULTI-STAGE COMPOUNDING & GLAZE',
      desc: 'Rotary and dual-action machine polishing utilizing 3M Perfect-It and Meguiar’s M210 compounds to level defects permanently.',
      src: '/images/gallery/gallery-03.webp',
      alt: 'Professional machine polishing on a dark vehicle at TMR Car Care Tiruppur',
    },
    {
      step: '03 / ULTIMATE REFLECTION',
      title: 'HAZE-FREE MIRROR FINISH',
      desc: 'Final anti-hologram refinement creating a streak-free, glassy depth ready for ceramic or PPF encapsulation.',
      src: '/images/gallery/gallery-08.webp',
      alt: 'Finished mirror-gloss automotive paint after correction at TMR Car Care Tiruppur',
    },
  ];

  useEffect(() => {
    document.title = "TMR CAR CARE — GALLERY | Tiruppur Detailing Studio";
    window.scrollTo(0, 0);

    // Check prefers-reduced-motion accessibility preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    motionQuery.addEventListener('change', handleMotionChange);
    return () => motionQuery.removeEventListener('change', handleMotionChange);
  }, []);

  // Hero Section 01 Autoplay Timer (4.5s sequence)
  useEffect(() => {
    if (isReducedMotion) return;
    const heroTimer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroVisuals.length);
    }, 4500);
    return () => clearInterval(heroTimer);
  }, [isReducedMotion, heroVisuals.length]);

  // Section 02 Motion Autoplay Timer (5s sequence, pauses when hovered)
  useEffect(() => {
    if (isReducedMotion || isMotionHovered) return;
    const motionTimer = setInterval(() => {
      setMotionIndex((prev) => (prev + 1) % motionPairs.length);
    }, 5000);
    return () => clearInterval(motionTimer);
  }, [isReducedMotion, isMotionHovered, motionPairs.length]);

  // Section 03 Signature Work Autoplay Timer (3.8s sequence)
  useEffect(() => {
    if (isReducedMotion || isSigHovered) return;
    const sigTimer = setInterval(() => {
      setSigIndex((prev) => (prev + 1) % sigVisuals.length);
    }, 3800);
    return () => clearInterval(sigTimer);
  }, [isReducedMotion, isSigHovered, sigVisuals.length]);

  // Section 04 Detail Transformation Autoplay Timer (3.5s sequence)
  useEffect(() => {
    if (isReducedMotion || isDetailHovered) return;
    const detailTimer = setInterval(() => {
      setDetailIndex((prev) => (prev + 1) % detailStages.length);
    }, 3500);
    return () => clearInterval(detailTimer);
  }, [isReducedMotion, isDetailHovered, detailStages.length]);

  // Hero Micro-Parallax Mouse Shift (Constrained X: ±6px, Y: ±4px offset)
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isReducedMotion) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12; // -6px to +6px
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;  // -4px to +4px
    setHeroParallax({ x, y });
  };

  const handleHeroMouseLeave = () => {
    setHeroParallax({ x: 0, y: 0 });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  return (
    <div className="w-full bg-[#050505] text-[#F5F4EF] font-manrope selection:bg-[#FF4B00] selection:text-white">
      
      {/* SECTION 01 — GALLERY HERO (FULL-BLEED VIEWPORT HERO WITH SAFE OVERSCAN PARALLAX) */}
      <section
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="relative w-full min-h-[90vh] lg:min-h-[100vh] flex flex-col justify-end pt-36 sm:pt-44 pb-16 px-5 md:px-16 overflow-hidden border-b border-white/10"
      >
        {/* Layer 1: Oversized Parallax Image Canvas (Moves subtly, overscanned by 40px on all edges) */}
        <div
          className="absolute -top-10 -bottom-10 -left-10 -right-10 z-0 pointer-events-none transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(${heroParallax.x}px, ${heroParallax.y}px, 0)`,
          }}
        >
          {heroVisuals.map((visual, idx) => {
            const isActive = idx === heroIndex;
            return (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={visual.src}
                  alt={visual.alt}
                  className={`w-full h-full object-cover object-center transition-transform duration-[6000ms] ease-out ${
                    isActive ? 'scale-110' : 'scale-105'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Layer 2: Static Dual-Tone Dark Overlay & Atmospheric Warmth (Never moves, locked to viewport) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/65 to-[#050505]/40 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-[#FF4B00]/10 via-transparent to-transparent opacity-40 z-10 pointer-events-none" />

        {/* Layer 3: Static Film Grain Texture Overlay (Never moves, locked to viewport) */}
        <div
          className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Layer 4: Stable Content Overlay Layer */}
        <div className="relative z-30 max-w-[1360px] w-full mx-auto flex flex-col lg:flex-row items-end justify-between gap-12 mt-auto">
          <div className="w-full lg:w-8/12 flex flex-col space-y-6">
            <h1 className="font-manrope font-extrabold text-5xl sm:text-7xl md:text-[88px] text-white leading-[0.9] tracking-tighter uppercase">
              THE WORK, <br />
              IN <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">frame.</span>
            </h1>

            <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] max-w-md border-l pl-4 border-white/20 leading-relaxed font-normal">
              A visual archive of TMR Car Care's detailing, protection and uncompromising automotive craftsmanship.
            </p>

            <div className="pt-4 flex items-center gap-6">
              <a
                href="#motion"
                className="inline-flex items-center font-bold text-xs text-white tracking-widest uppercase group hover:text-[#FF4B00] transition-colors"
              >
                <span>EXPLORE THE WORK</span>
                <span className="ml-2 text-base group-hover:translate-x-2 transition-transform">→</span>
              </a>

              {/* Slide Indicator Dots */}
              <div className="flex items-center gap-2">
                {heroVisuals.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setHeroIndex(dotIdx)}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      dotIdx === heroIndex ? 'w-6 bg-[#FF4B00]' : 'w-1.5 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — THE WORK IN MOTION (AUTOMATIC HORIZONTAL REVEAL SLIDER) */}
      <section
        className="relative bg-[#050505] py-20 sm:py-32 overflow-hidden border-b border-white/10"
        id="motion"
        onMouseEnter={() => setIsMotionHovered(true)}
        onMouseLeave={() => setIsMotionHovered(false)}
      >
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="flex flex-col space-y-4">
              <div className="font-bold text-xs text-[#858585] tracking-widest uppercase flex items-center">
                <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
                02 / THE WORK
              </div>
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
                THE WORK IN <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">motion.</span>
              </h2>
              <p className="font-manrope text-sm sm:text-base text-[#D8D8D5] max-w-md border-l pl-4 border-white/20">
                A moving archive of detailing, protection and automotive care.
              </p>
            </div>

            {/* Auto-Updating Pagination Indicators */}
            <div className="flex items-center gap-3">
              {motionPairs.map((_, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => setMotionIndex(pIdx)}
                  aria-label={`Go to motion slide ${pIdx + 1}`}
                  className={`text-xs font-bold tracking-widest uppercase px-4 py-2 rounded border transition-all ${
                    pIdx === motionIndex
                      ? 'bg-[#FF4B00] border-[#FF4B00] text-white shadow-[0_0_15px_rgba(255,75,0,0.4)]'
                      : 'border-white/20 text-white/50 hover:text-white hover:border-white/40'
                  }`}
                >
                  0{pIdx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Editorial Horizontal Reveal Stage (Right to Left Transition, Zero Zoom) */}
          <div className="relative overflow-hidden w-full rounded-lg">
            <div
              className={`flex w-full ${
                isReducedMotion
                  ? 'transition-none'
                  : 'transition-transform duration-[1100ms] ease-[cubic-bezier(0.65,0,0.35,1)]'
              }`}
              style={{
                transform: `translate3d(-${motionIndex * 100}%, 0, 0)`,
              }}
            >
              {motionPairs.map((pair, pIdx) => (
                <div
                  key={pIdx}
                  className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 p-0.5"
                >
                  {/* Left Editorial Visual */}
                  <Link
                    to={pair.left.link}
                    className="block relative overflow-hidden rounded-lg bg-[#0B0B0B] aspect-[16/10] border border-white/10 hover:border-[#FF4B00]/40 transition-colors shadow-2xl"
                  >
                    <img
                      src={pair.left.img}
                      alt={pair.left.alt}
                      className="w-full h-full object-cover scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 via-transparent to-transparent opacity-40 pointer-events-none" />
                  </Link>

                  {/* Right Editorial Visual */}
                  <Link
                    to={pair.right.link}
                    className="block relative overflow-hidden rounded-lg bg-[#0B0B0B] aspect-[16/10] border border-white/10 hover:border-[#FF4B00]/40 transition-colors shadow-2xl"
                  >
                    <img
                      src={pair.right.img}
                      alt={pair.right.alt}
                      className="w-full h-full object-cover scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 via-transparent to-transparent opacity-40 pointer-events-none" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — SIGNATURE WORK (PREMIUM AUTOMOTIVE REVEAL STAGE) */}
      <section
        className="relative bg-[#050505] py-20 sm:py-32 overflow-hidden border-b border-white/10"
        onMouseEnter={() => setIsSigHovered(true)}
        onMouseLeave={() => setIsSigHovered(false)}
      >
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="flex flex-col space-y-4">
              <div className="font-bold text-xs text-[#858585] tracking-widest uppercase flex items-center">
                <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
                03 / SIGNATURE WORK
              </div>
              <h2 className="font-manrope font-extrabold text-4xl sm:text-7xl text-white uppercase tracking-tighter">
                SIGNATURE <span className="font-editorial italic font-normal text-[#FF4B00] lowercase pr-2">automotive</span> WORK.
              </h2>
              <p className="font-manrope text-sm sm:text-base text-[#D8D8D5] max-w-xl border-l pl-4 border-white/20 leading-relaxed font-normal">
                A curated view of paint correction, ceramic coating and paint protection work completed at TMR Car Care in Tiruppur.
              </p>
            </div>

            {/* Slide Control Indicators */}
            <div className="flex items-center gap-3">
              {sigVisuals.map((_, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => setSigIndex(sIdx)}
                  aria-label={`Go to signature slide ${sIdx + 1}`}
                  className={`text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded border transition-all ${
                    sIdx === sigIndex
                      ? 'bg-[#FF4B00] border-[#FF4B00] text-white shadow-[0_0_15px_rgba(255,75,0,0.4)]'
                      : 'border-white/20 text-white/50 hover:text-white hover:border-white/40'
                  }`}
                >
                  0{sIdx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Horizontal Reveal Stage Layout (Right to Left Transition, Zero Zoom) */}
          <div className="relative overflow-hidden w-full rounded-lg min-h-[480px] sm:min-h-[600px] border border-white/10 bg-[#0B0B0B]">
            <div
              className={`flex w-full h-full ${
                isReducedMotion
                  ? 'transition-none'
                  : 'transition-transform duration-[1100ms] ease-[cubic-bezier(0.65,0,0.35,1)]'
              }`}
              style={{
                transform: `translate3d(-${sigIndex * 100}%, 0, 0)`,
              }}
            >
              {sigVisuals.map((visual, vIdx) => (
                <div
                  key={vIdx}
                  className="w-full flex-shrink-0 relative min-h-[480px] sm:min-h-[600px] flex items-center p-6 sm:p-12 overflow-hidden"
                >
                  {/* Primary Large Image */}
                  <div className="absolute right-0 top-0 w-full md:w-[75%] h-full overflow-hidden">
                    <img
                      src={visual.primarySrc}
                      alt={visual.primaryAlt}
                      className="w-full h-full object-cover scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/60 to-transparent z-10" />
                  </div>

                  {/* Secondary Overlapping Inset Visual */}
                  <div className="hidden md:block absolute left-12 bottom-12 w-[380px] h-[240px] z-20 border border-white/20 shadow-2xl overflow-hidden rounded-lg bg-[#000]">
                    <img
                      src={visual.secondarySrc}
                      alt={visual.secondaryAlt}
                      className="w-full h-full object-cover scale-100"
                    />
                    <div className="absolute top-3 left-3 bg-black/80 px-3 py-1 rounded text-[10px] text-[#FF4B00] font-bold uppercase tracking-widest border border-white/10">
                      {visual.tag}
                    </div>
                  </div>

                  {/* Overlay Text Content */}
                  <div className="relative z-30 max-w-lg space-y-4">
                    <span className="font-bold text-xs text-[#FF4B00] tracking-widest uppercase block">
                      {visual.tag}
                    </span>
                    <h3 className="font-manrope font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight">
                      {visual.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — DETAIL / PAINT CORRECTION & FINISH TRANSFORMATION */}
      <section
        className="relative bg-[#F5F4EF] py-20 sm:py-32 overflow-hidden text-[#111111] border-b border-[#D8D8D5]"
        onMouseEnter={() => setIsDetailHovered(true)}
        onMouseLeave={() => setIsDetailHovered(false)}
      >
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="font-bold text-xs text-[#858585] tracking-widest uppercase flex items-center mb-6">
            <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
            04 / DETAIL
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl text-[#111111] uppercase tracking-tighter leading-none mb-4">
                PAINT CORRECTION & <br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">finish transformation.</span>
              </h2>
              <p className="font-manrope text-sm sm:text-base text-[#5f5e5e] max-w-xl border-l pl-4 border-[#111111]/20 leading-relaxed">
                Close-up detailing work showing the inspection, refinement and final finish achieved through professional automotive paint correction and surface preparation at TMR Car Care in Tiruppur.
              </p>
            </div>

            {/* Technical Stage Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              {detailStages.map((stage, stIdx) => (
                <button
                  key={stIdx}
                  onClick={() => setDetailIndex(stIdx)}
                  aria-label={`Go to detail stage ${stIdx + 1}`}
                  className={`text-xs font-bold tracking-widest uppercase px-3.5 py-2 rounded border transition-all ${
                    stIdx === detailIndex
                      ? 'bg-[#111111] border-[#111111] text-white shadow-md'
                      : 'border-[#D8D8D5] text-[#858585] hover:text-[#111111] hover:border-[#111111]'
                  }`}
                >
                  0{stIdx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Technical Macro Visual Reveal Canvas (Right to Left Transition, Zero Zoom) */}
          <div className="relative overflow-hidden w-full rounded-lg border border-[#D8D8D5] bg-white shadow-2xl min-h-[460px] sm:min-h-[580px]">
            <div
              className={`flex w-full h-full ${
                isReducedMotion
                  ? 'transition-none'
                  : 'transition-transform duration-[1100ms] ease-[cubic-bezier(0.65,0,0.35,1)]'
              }`}
              style={{
                transform: `translate3d(-${detailIndex * 100}%, 0, 0)`,
              }}
            >
              {detailStages.map((stage, dIdx) => (
                <div
                  key={dIdx}
                  className="w-full flex-shrink-0 relative min-h-[460px] sm:min-h-[580px] grid grid-cols-1 lg:grid-cols-12 overflow-hidden"
                >
                  {/* Left Technical Description Panel */}
                  <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center bg-[#F8F7F2] border-r border-[#D8D8D5] z-10">
                    <span className="font-extrabold text-xs text-[#FF4B00] tracking-widest uppercase block mb-3">
                      {stage.step}
                    </span>
                    <h3 className="font-manrope font-extrabold text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight mb-4">
                      {stage.title}
                    </h3>
                    <p className="font-manrope text-sm text-[#5f5e5e] leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>

                  {/* Right Macro Automotive Detailing Image */}
                  <div className="lg:col-span-7 relative overflow-hidden bg-[#111111] min-h-[300px]">
                    <img
                      src={stage.src}
                      alt={stage.alt}
                      className="w-full h-full object-cover scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 — TRANSFORMATION (BEFORE / AFTER INTERACTIVE SLIDER) */}
      <section className="relative bg-[#050505] py-20 sm:py-32 overflow-hidden min-h-[650px] border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 mb-8 flex justify-between items-center">
          <div className="font-bold text-xs text-[#858585] tracking-widest uppercase flex items-center">
            <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
            05 / TRANSFORMATION
          </div>
        </div>

        <div className="text-center mb-8 px-5">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tighter leading-none">
            FROM CONDITION TO <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">finish.</span>
          </h2>
          <p className="text-xs text-[#858585] mt-2 tracking-widest uppercase">Drag slider to reveal before / after</p>
        </div>

        <div
          className="relative max-w-[1100px] mx-auto h-[350px] sm:h-[550px] overflow-hidden select-none cursor-ew-resize border border-white/20 rounded-lg shadow-2xl"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* After Image (Full background) */}
          <img
            src="/images/gallery/gallery-05.webp"
            alt="After paint correction flawless gloss finish"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Before Image (Clipped overlay) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="/images/gallery/gallery-06.webp"
              alt="Before paint correction with surface defects"
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {/* Slider Line Divider */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-[#FF4B00] z-30"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FF4B00] text-white flex items-center justify-center shadow-lg font-bold text-xs">
              ↔
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — PROCESS THEATRE */}
      <section className="relative bg-[#050505] py-20 sm:py-32 overflow-hidden border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="font-bold text-xs text-[#858585] tracking-widest uppercase flex items-center mb-6">
            <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
            06 / PROCESS
          </div>
          <h2 className="font-manrope font-extrabold text-4xl sm:text-7xl text-white uppercase tracking-tighter mb-16">
            THE CRAFT OF <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">detail.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-white/10 p-8 bg-[#0B0B0B] space-y-4">
              <span className="font-bold text-xs text-[#FF4B00] tracking-widest uppercase block">
                STAGE 01
              </span>
              <h3 className="font-manrope font-extrabold text-xl text-white uppercase">DECONTAMINATION</h3>
              <p className="text-xs text-[#D8D8D5] leading-relaxed">
                Chemical fallout removal, synthetic clay bar treatment, and foam wash prep to strip legacy waxes and tar.
              </p>
            </div>

            <div className="border border-white/10 p-8 bg-[#0B0B0B] space-y-4">
              <span className="font-bold text-xs text-[#FF4B00] tracking-widest uppercase block">
                STAGE 02
              </span>
              <h3 className="font-manrope font-extrabold text-xl text-white uppercase">CORRECTION</h3>
              <p className="text-xs text-[#D8D8D5] leading-relaxed">
                Multi-stage rotary and dual-action machine polishing to permanently eliminate swirls, scratches, and micro-marring.
              </p>
            </div>

            <div className="border border-white/10 p-8 bg-[#0B0B0B] space-y-4">
              <span className="font-bold text-xs text-[#FF4B00] tracking-widest uppercase block">
                STAGE 03
              </span>
              <h3 className="font-manrope font-extrabold text-xl text-white uppercase">PROTECTION</h3>
              <p className="text-xs text-[#D8D8D5] leading-relaxed">
                9H nano-ceramic coating or self-healing PPF application sealing in depth, reflection, and extreme hydrophobicity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — GALLERY FINAL CTA */}
      <section className="py-24 sm:py-32 bg-[#111111] text-white text-center">
        <div className="max-w-3xl mx-auto px-5 space-y-8">
          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl uppercase tracking-tighter text-white leading-none">
            EXPERIENCE THE FINISH.
          </h2>
          <p className="text-base text-[#D8D8D5] max-w-lg mx-auto leading-relaxed">
            Transform your vehicle with TMR Car Care's detailing and protection standards in Tiruppur.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}?text=Booking%20Gallery%20Service`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF4B00] text-white px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-colors rounded"
            >
              WHATSAPP TMR
            </a>
            <Link
              to="/contact"
              className="border border-white/30 text-white px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-colors rounded"
            >
              BOOK APPOINTMENT
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
