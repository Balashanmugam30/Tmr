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

  // --- SECTION 03: SIGNATURE WORK BEFORE/AFTER COMPARISON SLIDER STATE ---
  const [sigSliderPos, setSigSliderPos] = useState<number>(50);

  // --- SECTION 04: DETAIL BEFORE/AFTER COMPARISON SLIDER STATE ---
  const [detailSliderPos, setDetailSliderPos] = useState<number>(50);

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

  // Section 03 Signature Work Before/After Drag Handler
  const handleSigMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSigSliderPos(percentage);
  };

  const handleSigTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSigSliderPos(percentage);
  };

  // Section 04 Detail Before/After Drag Handler
  const handleDetailMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setDetailSliderPos(percentage);
  };

  const handleDetailTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setDetailSliderPos(percentage);
  };

  // Section 05 Interactive Slider Handlers
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

      {/* SECTION 03 — SIGNATURE WORK (FULL-WIDTH INTERACTIVE BEFORE/AFTER SLIDER) */}
      <section
        className="relative bg-[#050505] py-20 sm:py-32 overflow-hidden border-b border-white/10"
        id="signature"
      >
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="flex flex-col space-y-4 mb-12">
            <div className="font-bold text-xs text-[#858585] tracking-widest uppercase flex items-center">
              <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
              03 / SIGNATURE WORK
            </div>
            <h2 className="font-manrope font-extrabold text-4xl sm:text-7xl text-white uppercase tracking-tighter">
              SIGNATURE <span className="font-editorial italic font-normal text-[#FF4B00] lowercase pr-2">automotive</span> WORK.
            </h2>
            <p className="font-manrope text-sm sm:text-base text-[#D8D8D5] max-w-2xl border-l pl-4 border-white/20 leading-relaxed font-normal">
              A curated view of paint correction, ceramic coating and paint protection work completed at TMR Car Care in Tiruppur.
            </p>
          </div>

          {/* Full-Width Draggable Before/After Comparison Stage (Zero Text Overlap) */}
          <div
            className="relative w-full h-[400px] sm:h-[600px] md:h-[650px] overflow-hidden select-none cursor-ew-resize border border-white/15 rounded-lg shadow-2xl bg-[#0B0B0B]"
            onMouseMove={handleSigMouseMove}
            onTouchMove={handleSigTouchMove}
          >
            {/* After Image (Full background) */}
            <img
              src="/images/gallery/gallery-signature-after.webp"
              alt="After professional paint correction showing deep gloss on an Indian-market SUV"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sigSliderPos}%` }}
            >
              <img
                src="/images/gallery/gallery-signature-before.webp"
                alt="Before paint correction on a dark Indian-market SUV at TMR Car Care Tiruppur"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%' }}
              />
            </div>

            {/* Subdued Badges */}
            <div className="absolute top-4 left-4 z-20 bg-black/70 backdrop-blur-md px-3.5 py-1.5 border border-white/10 rounded text-[10px] text-white/80 font-bold uppercase tracking-widest pointer-events-none">
              BEFORE // SWIRLS & OXIDATION
            </div>
            <div className="absolute top-4 right-4 z-20 bg-[#FF4B00]/90 backdrop-blur-md px-3.5 py-1.5 border border-[#FF4B00] rounded text-[10px] text-white font-bold uppercase tracking-widest pointer-events-none">
              AFTER // REFINED MIRROR GLOSS
            </div>

            {/* Vertical Divider Line & Drag Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#FF4B00] z-30 pointer-events-none"
              style={{ left: `${sigSliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FF4B00] text-white flex items-center justify-center shadow-[0_0_20px_rgba(255,75,0,0.6)] font-bold text-xs">
                ↔
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — DETAIL / MACRO PAINT CORRECTION BEFORE/AFTER */}
      <section
        className="relative bg-[#F5F4EF] py-20 sm:py-32 overflow-hidden text-[#111111] border-b border-[#D8D8D5]"
        id="detail"
      >
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & SEO Copy */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <div className="font-bold text-xs text-[#858585] tracking-widest uppercase flex items-center">
                <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
                04 / DETAIL
              </div>
              
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl text-[#111111] uppercase tracking-tighter leading-[0.95]">
                PAINT CORRECTION <br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">changes everything.</span>
              </h2>

              <p className="font-manrope text-sm sm:text-base text-[#5f5e5e] border-l pl-4 border-[#111111]/20 leading-relaxed">
                Close-up paint inspection and refinement showing the difference between a compromised clear coat and a professionally corrected finish at TMR Car Care in Tiruppur.
              </p>

              <div className="pt-2">
                <Link
                  to="/services/detailing-paint-care"
                  className="inline-flex items-center gap-3 text-[#111111] font-bold text-xs uppercase tracking-widest border-b border-[#111111] pb-2 hover:text-[#FF4B00] hover:border-[#FF4B00] transition-colors"
                >
                  <span>EXPLORE PAINT CORRECTION SERVICES</span>
                  <span className="text-base">↗</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Macro Interactive Before/After Comparison Stage */}
            <div className="lg:col-span-7">
              <div
                className="relative w-full h-[360px] sm:h-[500px] overflow-hidden select-none cursor-ew-resize border border-[#D8D8D5] rounded-lg shadow-2xl bg-white"
                onMouseMove={handleDetailMouseMove}
                onTouchMove={handleDetailTouchMove}
              >
                {/* After Image (Full background) */}
                <img
                  src="/images/gallery/gallery-detail-after.webp"
                  alt="After paint correction showing corrected high-gloss automotive clear coat"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />

                {/* Before Image (Clipped overlay) */}
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ width: `${detailSliderPos}%` }}
                >
                  <img
                    src="/images/gallery/gallery-detail-before.webp"
                    alt="Before clear-coat swirl marks under detailing inspection lighting"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>

                {/* Subdued Badges */}
                <div className="absolute top-4 left-4 z-20 bg-black/70 backdrop-blur-md px-3.5 py-1.5 border border-white/10 rounded text-[10px] text-white/80 font-bold uppercase tracking-widest pointer-events-none">
                  BEFORE // MICRO-MARRING
                </div>
                <div className="absolute top-4 right-4 z-20 bg-[#FF4B00]/90 backdrop-blur-md px-3.5 py-1.5 border border-[#FF4B00] rounded text-[10px] text-white font-bold uppercase tracking-widest pointer-events-none">
                  AFTER // GLASS CLEAR
                </div>

                {/* Vertical Divider Line & Drag Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-[#FF4B00] z-30 pointer-events-none"
                  style={{ left: `${detailSliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FF4B00] text-white flex items-center justify-center shadow-[0_0_20px_rgba(255,75,0,0.6)] font-bold text-xs">
                    ↔
                  </div>
                </div>
              </div>
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
