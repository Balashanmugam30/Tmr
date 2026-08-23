import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { companyData } from '@/data/company';

// --- REUSABLE HOME-PAGE GSAP REVEAL STAGE COMPONENT ---
// Reuses the EXACT GSAP reveal transition from GalleryRevealItem.tsx on the Home Page
// Fast, smooth transition duration: 0.85s (850ms) with zero cursor-proximity dependency
interface HomeStyleGalleryStageProps {
  images: { src: string; alt: string }[];
  activeIndex: number;
  aspectRatio?: string;
}

const HomeStyleGalleryStage: React.FC<HomeStyleGalleryStageProps> = ({
  images,
  activeIndex,
  aspectRatio = 'aspect-[16/9]',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const prevIndexRef = useRef<number>(activeIndex);

  // Preload all images in the sequence on mount to prevent blank frames or layout shifts
  useEffect(() => {
    images.forEach((img) => {
      const tempImg = new Image();
      tempImg.src = img.src;
    });
  }, [images]);

  useEffect(() => {
    const card = cardRef.current;
    const img = imgRef.current;
    if (!card || !img) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) {
      card.style.clipPath = 'inset(0 0% 0 0)';
      card.style.opacity = '1';
      return;
    }

    if (prevIndexRef.current !== activeIndex) {
      // EXACT HOME PAGE GSAP REVEAL ANIMATION FROM GalleryRevealItem.tsx
      // Optimized 850ms reveal transition for crisp, fast, smooth editorial motion
      gsap.fromTo(
        card,
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        {
          clipPath: 'inset(0 0% 0 0)',
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          overwrite: 'auto',
        }
      );
      gsap.fromTo(
        img,
        { x: -24, scale: 1.025 },
        {
          x: 0,
          scale: 1.0,
          duration: 0.85,
          ease: 'power3.out',
          overwrite: 'auto',
        }
      );
      prevIndexRef.current = activeIndex;
    }
  }, [activeIndex]);

  return (
    <div
      className={`relative w-full ${aspectRatio} overflow-hidden rounded-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-black cursor-pointer group`}
    >
      <div
        ref={cardRef}
        className="w-full h-full relative overflow-hidden"
        style={{
          clipPath: 'inset(0 0% 0 0)',
          opacity: 1,
        }}
      >
        <img
          ref={imgRef}
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none opacity-40 group-hover:opacity-65 transition-opacity duration-500" />
      </div>
    </div>
  );
};

export const GalleryPage: React.FC = () => {
  // Existing state for Section 05 slider
  const [sliderPos, setSliderPos] = useState<number>(50);

  // --- SECTION 01: HERO MULTI-IMAGE AUTOPLAY & PARALLAX STATE ---
  const [heroIndex, setHeroIndex] = useState<number>(0);
  const [heroParallax, setHeroParallax] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  // --- SECTION 02: THE WORK IN MOTION AUTOPLAY STATE ---
  const [motionIndex, setMotionIndex] = useState<number>(0);

  // --- SECTION 03: SIGNATURE WORK AUTOPLAY STATE ---
  const [sigIndex, setSigIndex] = useState<number>(0);

  // --- SECTION 04: DETAIL TRANSFORMATION AUTOPLAY STATE ---
  const [detailIndex, setDetailIndex] = useState<number>(0);

  // Refs for Section 05 Transformation & Section 06 Process Entry Animations
  const transSectionRef = useRef<HTMLElement>(null);
  const processSectionRef = useRef<HTMLElement>(null);
  const processLineRef = useRef<HTMLDivElement>(null);
  const hasTransRevealedRef = useRef<boolean>(false);

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

  // Motion Section 02 dedicated 2-column paired visual datasets (100% unique local assets)
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
        img: '/images/gallery/gallery-motion-05.jpg',
        alt: 'Flawless mirror gloss finish on dark sports car bonnet at TMR Car Care',
        link: '/services/detailing-paint-care',
      },
      right: {
        id: '06',
        title: 'STUDIO CRAFT',
        description: 'Precision craftsmanship inside TMR Car Care detailing studio',
        img: '/images/gallery/gallery-motion-06.jpg',
        alt: 'High-end vehicle detailing inside TMR Tiruppur studio bay',
        link: '/services/ceramic-coating',
      },
    },
  ];

  // Section 03 Signature Work datasets (Indian-market focus, 100% unique local assets)
  const sigVisuals = [
    {
      src: '/images/gallery/gallery-sig-xuv700.webp',
      alt: 'Professional paint correction on a Mahindra XUV700 SUV at TMR Car Care Tiruppur',
    },
    {
      src: '/images/gallery/gallery-sig-polishing.webp',
      alt: 'Machine polishing automotive clear coat at TMR Car Care detailing studio',
    },
    {
      src: '/images/gallery/gallery-sig-ceramic.webp',
      alt: 'Ceramic coating application on an Indian-market vehicle in Tiruppur',
    },
    {
      src: '/images/gallery/gallery-sig-safari.webp',
      alt: 'High-gloss paint finish on Tata Safari after professional automotive detailing',
    },
  ];

  // Section 04 Technical Detail Stages dataset (100% unique local assets)
  const detailVisuals = [
    {
      src: '/images/gallery/gallery-detail-inspection.webp',
      alt: 'Paint defect inspection under professional detailing lights at TMR Car Care Tiruppur',
    },
    {
      src: '/images/gallery/gallery-detail-polishing.webp',
      alt: 'Machine polishing clear coat refinement in Tiruppur studio bay',
    },
    {
      src: '/images/gallery/gallery-detail-macro.webp',
      alt: 'Macro photograph of refined clear coat mirror gloss finish',
    },
    {
      src: '/images/gallery/gallery-detail-coating.webp',
      alt: 'Hydrophobic ceramic coating water bead reflection after paint correction',
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

  // IntersectionObserver for Section 05 Transformation & Section 06 Process Entry Animations
  useEffect(() => {
    const transObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTransRevealedRef.current) {
            hasTransRevealedRef.current = true;
            // Smooth initial reveal of Transformation from 0% to 50%
            gsap.to(
              { pos: 0 },
              {
                pos: 50,
                duration: 0.95,
                ease: 'power3.out',
                onUpdate: function () {
                  setSliderPos(this.targets()[0].pos);
                },
              }
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    if (transSectionRef.current) {
      transObserver.observe(transSectionRef.current);
    }

    const processObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && processLineRef.current) {
            processLineRef.current.style.width = '100%';
          }
        });
      },
      { threshold: 0.25 }
    );

    if (processSectionRef.current) {
      processObserver.observe(processSectionRef.current);
    }

    return () => {
      transObserver.disconnect();
      processObserver.disconnect();
    };
  }, []);

  // Hero Section 01 Autoplay Timer (4.0s sequence)
  useEffect(() => {
    if (isReducedMotion) return;
    const heroTimer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroVisuals.length);
    }, 4000);
    return () => clearInterval(heroTimer);
  }, [isReducedMotion, heroVisuals.length]);

  // Section 02 Motion Autoplay Timer (3.5s sequence, continuous autoplay independent of cursor position)
  useEffect(() => {
    if (isReducedMotion) return;
    const motionTimer = setInterval(() => {
      setMotionIndex((prev) => (prev + 1) % motionPairs.length);
    }, 3500);
    return () => clearInterval(motionTimer);
  }, [isReducedMotion, motionPairs.length]);

  // Section 03 Signature Work Autoplay Timer (3.0s sequence, continuous autoplay independent of cursor position)
  useEffect(() => {
    if (isReducedMotion) return;
    const sigTimer = setInterval(() => {
      setSigIndex((prev) => (prev + 1) % sigVisuals.length);
    }, 3000);
    return () => clearInterval(sigTimer);
  }, [isReducedMotion, sigVisuals.length]);

  // Section 04 Detail Transformation Autoplay Timer (3.0s sequence, continuous autoplay independent of cursor position)
  useEffect(() => {
    if (isReducedMotion) return;
    const detailTimer = setInterval(() => {
      setDetailIndex((prev) => (prev + 1) % detailVisuals.length);
    }, 3000);
    return () => clearInterval(detailTimer);
  }, [isReducedMotion, detailVisuals.length]);

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

  // Section 05 Instant Pointer & Touch Comparison Control Logic
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
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
                  : 'transition-transform duration-[850ms] ease-[cubic-bezier(0.65,0,0.35,1)]'
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

      {/* SECTION 03 — SIGNATURE WORK (REUSING EXACT HOME PAGE GSAP REVEAL ANIMATION) */}
      <section className="relative bg-[#050505] py-20 sm:py-32 overflow-hidden border-b border-white/10 font-intertight">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 space-y-8">
          
          {/* EDITORIAL HEADER GROUP (OUTSIDE THE IMAGE STAGE) */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col space-y-4">
              <div className="font-bold text-xs text-[#858585] tracking-widest uppercase flex items-center">
                <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
                03 / SIGNATURE WORK
              </div>
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-[0.95]">
                SIGNATURE <br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">automotive</span> WORK.
              </h2>
              <p className="font-manrope text-sm sm:text-base text-[#D8D8D5] max-w-xl border-l pl-4 border-white/20 leading-relaxed font-normal">
                A curated view of paint correction, ceramic coating and paint protection work completed at TMR Car Care in Tiruppur.
              </p>
            </div>

            {/* AUTO-UPDATING SEQUENCE INDICATORS */}
            <div className="flex items-center gap-2 shrink-0">
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

          {/* LARGE CINEMATIC IMAGE STAGE USING EXACT HOME PAGE GSAP REVEAL ANIMATION */}
          <div className="w-full">
            <HomeStyleGalleryStage
              images={sigVisuals}
              activeIndex={sigIndex}
              aspectRatio="aspect-[16/9] md:aspect-[21/9]"
            />
          </div>
        </div>
      </section>

      {/* SECTION 04 — DETAIL (REUSING EXACT HOME PAGE GSAP REVEAL ANIMATION) */}
      <section className="relative bg-[#070809] py-20 sm:py-32 overflow-hidden text-[#F5F4EF] border-b border-white/10 font-intertight">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT SIDE TECHNICAL EDITORIAL GROUP */}
            <div className="lg:col-span-5 space-y-6">
              <div className="font-bold text-xs text-[#858585] tracking-widest uppercase flex items-center">
                <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
                04 / DETAIL
              </div>

              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight leading-[0.95]">
                PAINT CORRECTION <br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">changes everything.</span>
              </h2>

              <p className="font-manrope text-sm sm:text-base text-[#D8D8D5] leading-relaxed border-l pl-4 border-white/20">
                Close-up detailing work showing inspection, refinement and final surface quality achieved through professional automotive paint correction at TMR Car Care in Tiruppur.
              </p>

              <div className="pt-4">
                <Link
                  to="/services/detailing-paint-care"
                  className="group inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors"
                >
                  <span>SEE PAINT CORRECTION SERVICES</span>
                  <span className="text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">↗</span>
                </Link>
              </div>

              {/* TECHNICAL PROGRESS STAGE BUTTONS */}
              <div className="flex items-center gap-2 pt-2">
                {detailVisuals.map((_, dIdx) => (
                  <button
                    key={dIdx}
                    onClick={() => setDetailIndex(dIdx)}
                    aria-label={`Go to detail slide ${dIdx + 1}`}
                    className={`text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded border transition-all ${
                      dIdx === detailIndex
                        ? 'bg-[#FF4B00] border-[#FF4B00] text-white'
                        : 'border-white/20 text-white/50 hover:text-white hover:border-white/40'
                    }`}
                  >
                    0{dIdx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE LARGE ANIMATED STAGE USING EXACT HOME PAGE GSAP REVEAL ANIMATION */}
            <div className="lg:col-span-7">
              <HomeStyleGalleryStage
                images={detailVisuals}
                activeIndex={detailIndex}
                aspectRatio="aspect-[4/3] sm:aspect-[16/10]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 — TRANSFORMATION (WARM IVORY RHYTHM & INSTANT POINTER-CONTROLLED BEFORE/AFTER COMPARISON) */}
      <section
        id="transformation"
        ref={transSectionRef}
        className="relative bg-[#F5F4EF] text-[#111111] py-20 sm:py-32 overflow-hidden border-b border-[#D8D8D5] font-intertight"
      >
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 space-y-10">
          {/* Editorial Header */}
          <div className="flex flex-col space-y-4 max-w-3xl">
            <div className="font-bold text-xs text-[#858585] tracking-widest uppercase flex items-center">
              <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
              05 / TRANSFORMATION
            </div>
            <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase text-[#111111] leading-[0.95] tracking-tight">
              FROM CONDITION TO <br />
              <span className="font-editorial italic font-normal text-[#FF4B00] lowercase pr-2">finish.</span>
            </h2>
            <p className="font-manrope text-sm sm:text-base text-[#5f5e5e] leading-relaxed border-l pl-4 border-[#111111]/20">
              A true before-and-after view of professional automotive paint correction and surface refinement at TMR Car Care, Tiruppur.
            </p>
          </div>

          {/* Dominant Large Before/After Pointer-Controlled Comparison Viewer */}
          <div
            className="relative max-w-[1280px] mx-auto h-[400px] sm:h-[600px] rounded-xl border border-[#D8D8D5] shadow-2xl overflow-hidden select-none cursor-ew-resize bg-[#000] touch-none"
            onPointerMove={handlePointerMove}
            onPointerDown={handlePointerMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Full background base) */}
            <img
              src="/images/gallery/gallery-transformation-after-final.jpg"
              alt="After paint correction flawless gloss finish on vehicle bonnet at TMR Car Care Tiruppur"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Before Image (Clipped overlay controlled by sliderPos) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src="/images/gallery/gallery-transformation-before-final.jpg"
                alt="Before paint correction with surface defects and swirl marks on vehicle bonnet"
                className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                style={{ width: '100%', height: '100%' }}
              />
            </div>

            {/* TMR Orange Divider Line & Circular Control Handle */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-[#FF4B00] z-30 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FF4B00] text-white flex items-center justify-center shadow-xl font-extrabold text-xs border-2 border-white">
                ↔
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — PROCESS (WARM IVORY RHYTHM & EDITORIAL HORIZONTAL TIMELINE) */}
      <section
        id="process"
        ref={processSectionRef}
        className="relative bg-[#F5F4EF] text-[#111111] py-20 sm:py-32 overflow-hidden border-b border-[#D8D8D5] font-intertight"
      >
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 space-y-12">
          {/* Editorial Header */}
          <div className="flex flex-col space-y-4 max-w-3xl">
            <div className="font-bold text-xs text-[#858585] tracking-widest uppercase flex items-center">
              <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
              06 / PROCESS
            </div>
            <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase text-[#111111] leading-[0.95] tracking-tight">
              THE CRAFT OF <br />
              <span className="font-editorial italic font-normal text-[#FF4B00] lowercase pr-2">detail.</span>
            </h2>
            <p className="font-manrope text-sm sm:text-base text-[#5f5e5e] leading-relaxed border-l pl-4 border-[#111111]/20">
              A three-stage professional detailing workflow from surface preparation through paint correction and final protection.
            </p>
          </div>

          {/* Full-width Horizontal Timeline System */}
          <div className="relative pt-4">
            {/* Animated Horizontal Connecting Line */}
            <div className="hidden md:block absolute top-[52px] left-0 right-0 h-[1.5px] bg-[#D8D8D5] z-0">
              <div
                ref={processLineRef}
                className="h-full bg-[#FF4B00] w-0 transition-all duration-1000 ease-out"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
              {/* Stage 01 */}
              <div
                tabIndex={0}
                className="group flex flex-col space-y-4 p-6 sm:p-8 rounded-xl border border-transparent hover:border-[#D8D8D5] hover:bg-white/60 transition-all duration-300 cursor-pointer focus:outline-none focus:border-[#FF4B00]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-manrope font-extrabold text-5xl sm:text-7xl text-[#111111]/30 group-hover:text-[#FF4B00] group-focus:text-[#FF4B00] transition-colors duration-300">
                    01
                  </span>
                  <span className="text-[10px] font-extrabold text-[#FF4B00] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    STAGE ONE
                  </span>
                </div>
                <h3 className="font-manrope font-extrabold text-xl sm:text-2xl text-[#111111] uppercase tracking-tight group-hover:text-[#FF4B00] transition-colors">
                  DECONTAMINATION
                </h3>
                <p className="font-manrope text-xs sm:text-sm text-[#5f5e5e] leading-relaxed">
                  Chemical fallout removal, synthetic clay bar treatment, and foam wash prep to strip legacy waxes and road tar.
                </p>
              </div>

              {/* Stage 02 */}
              <div
                tabIndex={0}
                className="group flex flex-col space-y-4 p-6 sm:p-8 rounded-xl border border-transparent hover:border-[#D8D8D5] hover:bg-white/60 transition-all duration-300 cursor-pointer focus:outline-none focus:border-[#FF4B00]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-manrope font-extrabold text-5xl sm:text-7xl text-[#111111]/30 group-hover:text-[#FF4B00] group-focus:text-[#FF4B00] transition-colors duration-300">
                    02
                  </span>
                  <span className="text-[10px] font-extrabold text-[#FF4B00] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    STAGE TWO
                  </span>
                </div>
                <h3 className="font-manrope font-extrabold text-xl sm:text-2xl text-[#111111] uppercase tracking-tight group-hover:text-[#FF4B00] transition-colors">
                  CORRECTION
                </h3>
                <p className="font-manrope text-xs sm:text-sm text-[#5f5e5e] leading-relaxed">
                  Multi-stage rotary and dual-action machine polishing to permanently eliminate swirls, scratches, and micro-marring.
                </p>
              </div>

              {/* Stage 03 */}
              <div
                tabIndex={0}
                className="group flex flex-col space-y-4 p-6 sm:p-8 rounded-xl border border-transparent hover:border-[#D8D8D5] hover:bg-white/60 transition-all duration-300 cursor-pointer focus:outline-none focus:border-[#FF4B00]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-manrope font-extrabold text-5xl sm:text-7xl text-[#111111]/30 group-hover:text-[#FF4B00] group-focus:text-[#FF4B00] transition-colors duration-300">
                    03
                  </span>
                  <span className="text-[10px] font-extrabold text-[#FF4B00] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    STAGE THREE
                  </span>
                </div>
                <h3 className="font-manrope font-extrabold text-xl sm:text-2xl text-[#111111] uppercase tracking-tight group-hover:text-[#FF4B00] transition-colors">
                  PROTECTION
                </h3>
                <p className="font-manrope text-xs sm:text-sm text-[#5f5e5e] leading-relaxed">
                  Ceramic coating application or paint protection film installation sealing in depth, reflection, and hydrophobic barrier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — GALLERY FINAL CTA (CINEMATIC AUTOMOTIVE END FRAME) */}
      <section className="relative w-full min-h-[75vh] md:min-h-[85vh] flex flex-col justify-end bg-[#050505] text-white overflow-hidden py-20 sm:py-32 font-intertight border-t border-white/10">
        {/* Layer 1: Full-Bleed Cinematic Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/gallery/gallery-final-cta.jpg"
            alt="Freshly detailed supercar inside TMR Car Care flagship studio bay in Tiruppur"
            className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-[10000ms] ease-out hover:scale-105"
          />
        </div>

        {/* Layer 2: Fixed Dark Cinematic Overlay Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/95 via-black/80 to-black/40 pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none" />

        {/* Layer 3: Editorial Content Box */}
        <div className="relative z-20 max-w-[1360px] w-full mx-auto px-5 md:px-16 flex flex-col justify-end space-y-8 my-auto">
          <div className="max-w-2xl space-y-6">
            <div className="font-bold text-xs text-[#FF4B00] tracking-widest uppercase flex items-center">
              <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
              TMR CAR CARE STUDIO
            </div>

            <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase text-white leading-[0.92] tracking-tighter">
              EXPERIENCE THE <br />
              <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">finish.</span>
            </h2>

            <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] leading-relaxed font-normal border-l pl-4 border-white/20 max-w-xl">
              Professional detailing, paint correction and surface protection in Tiruppur.
            </p>

            {/* Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=Booking%20Gallery%20Service`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#FF4B00] text-white rounded-md font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#050505] transition-colors shadow-2xl text-center inline-flex items-center justify-center gap-2"
              >
                <span>WHATSAPP TMR</span>
                <span className="text-base">→</span>
              </a>

              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-md font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#050505] transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                <span>BOOK APPOINTMENT</span>
                <span className="text-base">→</span>
              </Link>
            </div>

            {/* Location Line */}
            <div className="pt-6 border-t border-white/15 text-xs text-[#858585] uppercase tracking-widest font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF4B00] animate-pulse" />
              <span>Tiruppur, Tamil Nadu • Avinashi Road</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
