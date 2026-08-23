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

      {/* SECTION 02 — THE WORK IN MOTION (EDITORIAL ANIMATED 2-COLUMN GALLERY REDESIGN) */}
      <section
        className="relative bg-[#050505] py-20 sm:py-32 overflow-hidden border-b border-white/10"
        id="motion"
        onMouseEnter={() => setIsMotionHovered(true)}
        onMouseLeave={() => setIsMotionHovered(false)}
      >
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
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

            {/* Pagination Controls */}
            <div className="flex items-center gap-3">
              {motionPairs.map((_, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => setMotionIndex(pIdx)}
                  className={`text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded border transition-all ${
                    pIdx === motionIndex
                      ? 'bg-[#FF4B00] border-[#FF4B00] text-white'
                      : 'border-white/20 text-white/50 hover:text-white hover:border-white/40'
                  }`}
                >
                  0{pIdx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Editorial 2-Column Animated Contact Sheet Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative min-h-[440px] sm:min-h-[520px]">
            {/* LEFT COLUMN ITEM */}
            {(() => {
              const currentItem = motionPairs[motionIndex].left;
              return (
                <Link
                  key={`left-${motionIndex}`}
                  to={currentItem.link}
                  className="group block relative overflow-hidden border border-white/10 bg-[#0B0B0B] rounded-lg transition-all duration-1000 ease-out hover:border-[#FF4B00]/60 shadow-2xl"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden relative">
                    <img
                      src={currentItem.img}
                      alt={currentItem.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />
                    
                    {/* Orange Index Detail Marker */}
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 border border-white/10 rounded">
                      <span className="font-extrabold text-[10px] text-[#FF4B00] tracking-widest uppercase">
                        {currentItem.id} // STUDIO ARCHIVE
                      </span>
                    </div>
                  </div>

                  <div className="p-6 bg-[#0B0B0B] flex justify-between items-end border-t border-white/10">
                    <div>
                      <span className="font-bold text-xs text-[#FF4B00] tracking-widest uppercase block mb-1">
                        {currentItem.title}
                      </span>
                      <p className="text-xs text-[#F5F4EF]/70 max-w-sm leading-relaxed">
                        {currentItem.description}
                      </p>
                    </div>
                    <span className="text-base text-white group-hover:text-[#FF4B00] group-hover:translate-x-1 transition-all">
                      ↗
                    </span>
                  </div>
                </Link>
              );
            })()}

            {/* RIGHT COLUMN ITEM */}
            {(() => {
              const currentItem = motionPairs[motionIndex].right;
              return (
                <Link
                  key={`right-${motionIndex}`}
                  to={currentItem.link}
                  className="group block relative overflow-hidden border border-white/10 bg-[#0B0B0B] rounded-lg transition-all duration-1000 ease-out hover:border-[#FF4B00]/60 shadow-2xl"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden relative">
                    <img
                      src={currentItem.img}
                      alt={currentItem.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />
                    
                    {/* Orange Index Detail Marker */}
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 border border-white/10 rounded">
                      <span className="font-extrabold text-[10px] text-[#FF4B00] tracking-widest uppercase">
                        {currentItem.id} // STUDIO ARCHIVE
                      </span>
                    </div>
                  </div>

                  <div className="p-6 bg-[#0B0B0B] flex justify-between items-end border-t border-white/10">
                    <div>
                      <span className="font-bold text-xs text-[#FF4B00] tracking-widest uppercase block mb-1">
                        {currentItem.title}
                      </span>
                      <p className="text-xs text-[#F5F4EF]/70 max-w-sm leading-relaxed">
                        {currentItem.description}
                      </p>
                    </div>
                    <span className="text-base text-white group-hover:text-[#FF4B00] group-hover:translate-x-1 transition-all">
                      ↗
                    </span>
                  </div>
                </Link>
              );
            })()}
          </div>
        </div>
      </section>

      {/* SECTION 03 — SIGNATURE WORK (UNTOUCHED) */}
      <section className="relative bg-[#050505] py-20 sm:py-32 overflow-hidden border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="font-bold text-xs text-[#858585] tracking-widest uppercase flex items-center mb-6">
            <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
            03 / SIGNATURE WORK
          </div>
          <h2 className="font-manrope font-extrabold text-4xl sm:text-7xl text-white uppercase tracking-tighter mb-12">
            <span className="font-editorial italic font-normal text-[#FF4B00] lowercase pr-2">Signature</span> WORK.
          </h2>

          <div className="relative w-full min-h-[500px] sm:min-h-[700px]">
            {/* Dominant Image */}
            <div className="absolute right-0 top-0 w-full md:w-[70%] h-[400px] sm:h-[600px] overflow-hidden border border-white/10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLsD9SwXDLg3n9CQXzzo9uTjunwC-xEOYyPeLaCoRWa__kbCCxsY73J4feuQZJFv6d7EbaKlnOzLqIFp3Nyf6w1NT6pkUZMia37vOLqSyDj2GEX8vvoyW6lS2IdJ2ebyVIZcL5xrfQi8v4p_wbjUvBskM4DVGgHlJA-fQlGG8CTf8BGsyHQNPo_lpO5JWjqd_mZfmeBBvyJWgikR0cLrIk5fIwoYL5nM4qx8jEao0b4e_b7rSWIdQX"
                alt="Signature Detail Work"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Secondary Overlapping Image */}
            <div className="absolute left-0 top-[25%] w-[80%] md:w-[45%] h-[300px] sm:h-[420px] z-10 overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF-D8_MROHQEciDTd6rWNoDtr5Br-lWK2S2j_785jxOeMDrjSetLV8ujRsnEvT568vug32n_fK8UT_BEzQ_v2Ahm8lPzxUf_nvBpcVbjCk2Al_1mcCX4I-ISBoXNOKHrkcO2yi9ityXVbl1GkHgYA_wpjCvKgBaiex6ZicxlIoWTvjp6UxJpc7GZkRX6C_lQPxflqKvD3yzeFx5dfIR1eUXQ_27sW8toagSlehi7u6d1MS1uMKt8ya"
                alt="Signature Ceramic Coat"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — DETAIL / MACRO */}
      <section className="relative bg-[#F5F4EF] py-20 sm:py-32 overflow-hidden text-[#111111] border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="font-bold text-xs text-[#858585] tracking-widest uppercase flex items-center mb-6">
            <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
            04 / DETAIL
          </div>
          <h2 className="font-manrope font-extrabold text-4xl sm:text-7xl text-[#111111] uppercase tracking-tighter leading-none mb-16 text-center">
            DETAIL CHANGES <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">everything.</span>
          </h2>

          <div className="relative w-full h-[500px] sm:h-[700px] flex items-center justify-center">
            <div className="w-[85%] md:w-[60%] h-[80%] overflow-hidden relative shadow-2xl z-10 border border-[#D8D8D5] group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuADaJAruM7G0wRfflrKpqGKwOR-oXwr-lJodnXYqVJ59VlQ959L7jArbhRE39fziHgoUB5XO9lyuLBnKPYDWI6mreyCjRaATnqok-fPMpneC8mWSJu-sB6L2OzZDWYVOy2mgDLhMfBUVUkJmw-Bj1inM9dA-F07EFit036USwjnImMQ9GQGRPDBI-DJrrkmyM4QEGw_GR4OUpoPphrEVT8pBzaoZQ1C5Pvrf4tzJtrv9rr_80YuNAXn"
                alt="Macro Paint Reflection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
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
