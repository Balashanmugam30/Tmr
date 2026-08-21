import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/Container';

gsap.registerPlugin(ScrollTrigger);

interface EditorialState {
  number: string;
  eyebrow: string;
  headline: string;
  quote?: string;
  description: string;
}

const approachStates: EditorialState[] = [
  {
    number: '01',
    eyebrow: '02 / APPROACH',
    headline: 'PRECISION, IN MOTION.',
    quote: '"We engineer every stage around the condition of the vehicle, the surface, and the finish."',
    description: 'Every vehicle enters a climate-controlled studio environment designed for zero-defect surface preservation.',
  },
  {
    number: '02',
    eyebrow: '01 // DIAGNOSE',
    headline: 'PAINT MAPPING & DIAGNOSTICS',
    description: 'Understand the vehicle before touching the surface. Ultrasonic gauges measure clearcoat depth across all panels.',
  },
  {
    number: '03',
    eyebrow: '02 // PREPARE',
    headline: 'SURFACE DECONTAMINATION',
    description: 'Chemical iron extraction, clay bar treatment, and automotive masking tape protect delicate trim and rubber seals.',
  },
  {
    number: '04',
    eyebrow: '03 // REFINE',
    headline: 'DUAL-ACTION CORRECTION',
    description: 'Controlled multi-pass polishing eliminates 95%+ of surface swirls, unlocking true specular paint depth.',
  },
  {
    number: '05',
    eyebrow: '04 // PROCESS',
    headline: 'EVERY PASS IS MEASURED',
    description: 'Every panel is inspected under specular LED light arrays before handoff into Process Theatre.',
  },
];

export const ApproachSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  const [activeStateIndex, setActiveStateIndex] = useState<number>(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const currentState = approachStates[activeStateIndex] || approachStates[0];

  useEffect(() => {
    if (!sectionRef.current || !stickyRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    let lastIndex = -1;

    const ctx = gsap.context(() => {
      // 300vh STICKY SCROLLTRIGGER VIEWPORT PINNING
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.1,
        onUpdate: (self) => {
          const progress = self.progress;

          // Map progress (0.00 to 1.00) to 5 editorial text states
          const index = Math.min(
            approachStates.length - 1,
            Math.floor(progress * approachStates.length)
          );

          if (index !== lastIndex) {
            lastIndex = index;
            setActiveStateIndex(index);
          }

          // Subtle video parallax scale & opacity transition near handoff
          if (videoContainerRef.current) {
            const scale = 1.04 - progress * 0.06;
            const opacity = progress > 0.90 ? Math.max(0, 1 - (progress - 0.90) / 0.10) : 1;
            gsap.set(videoContainerRef.current, {
              scale: scale,
              opacity: opacity,
            });
          }

          // Video scroll-scrub syncing if metadata loaded
          if (videoRef.current && videoRef.current.duration) {
            const targetTime = progress * videoRef.current.duration;
            if (Math.abs(videoRef.current.currentTime - targetTime) > 0.15) {
              videoRef.current.currentTime = targetTime;
            }
          }
        },
      });

      // Video Entrance Mask Reveal on Section Entry
      if (videoContainerRef.current) {
        gsap.fromTo(
          videoContainerRef.current,
          { clipPath: 'inset(10% 10% 10% 10%)', opacity: 0.2 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Subtle 3D Mouse Parallax Tilt for Video Stage
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xNorm = (e.clientX - rect.left) / rect.width - 0.5;
    const yNorm = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: xNorm * 6, y: yNorm * 6 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <section
      ref={sectionRef}
      id="approach"
      className="relative w-full h-[300vh] bg-[#0A0A0A] text-white selection:bg-[#FF4B00] selection:text-white z-20 border-b border-white/10"
    >
      {/* 100VH STICKY VIEWPORT CONTAINER */}
      <div
        ref={stickyRef}
        className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-between py-8 md:py-12 bg-[#0A0A0A]"
      >
        {/* SUBTLE BACKGROUND ARCHITECTURAL GRID TEXTURE */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-0">
          <div className="w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:6rem_6rem]" />
        </div>

        <Container className="h-full flex flex-col justify-between relative z-10 my-auto">
          
          {/* TOP METADATA HEADER STRIP */}
          <div className="w-full border-t border-white/10 pt-5 flex items-center justify-between font-intertight font-bold text-xs uppercase tracking-[0.14em] text-white/70">
            <div className="flex items-center gap-2.5">
              <span className="text-[#FF4B00]">02</span>
              <span className="text-white/30">/</span>
              <span className="text-white">APPROACH</span>
            </div>
            <div className="flex items-center gap-6 text-white/40 text-[10px] hidden sm:flex">
              <span>TMR METHOD</span>
              <span>•</span>
              <span>TIRUPPUR STUDIO</span>
              <span>•</span>
              <span>CONTROLLED PROCESS</span>
            </div>
          </div>

          {/* MAIN DESKTOP EDITORIAL LAYOUT (35% TEXT LEFT | 65% VIDEO RIGHT) */}
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            
            {/* LEFT / QUIET EDITORIAL TYPOGRAPHY COLUMN (COLUMNS 1–5) */}
            <div className="lg:col-span-5 relative z-10 space-y-6 max-w-[440px] pl-0 lg:pl-4">
              
              {/* STAGE NUMBER & EYEBROW */}
              <div className="flex items-center gap-3 font-intertight text-xs font-bold uppercase tracking-[0.2em] text-[#FF4B00]">
                <span>{currentState.eyebrow}</span>
                <span className="text-white/20">•</span>
                <span className="text-white/50">{currentState.number} / 05</span>
              </div>

              {/* RESTRAINED HEADLINE */}
              <h2
                ref={textContainerRef}
                className="font-intertight font-extrabold text-3xl sm:text-4xl lg:text-[46px] uppercase text-white leading-[0.94] tracking-[-0.04em] transition-all duration-500 ease-out"
              >
                {currentState.headline}
              </h2>

              {/* EDITORIAL STATEMENT QUOTE */}
              {currentState.quote && (
                <p className="font-editorial text-xl sm:text-2xl text-white/90 leading-tight italic font-normal">
                  {currentState.quote}
                </p>
              )}

              {/* SUPPORTING DESCRIPTION */}
              <p className="font-intertight text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
                {currentState.description}
              </p>

              {/* QUIET EDITORIAL CTA LINK */}
              <div className="pt-2">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 text-xs font-intertight font-extrabold uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors"
                >
                  <span>DISCOVER THE TMR METHOD</span>
                  <span className="text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">↗</span>
                </Link>
              </div>

              {/* STAGE PROGRESS DOT INDICATOR */}
              <div className="flex items-center gap-2 pt-4">
                {approachStates.map((st, idx) => (
                  <div
                    key={st.number}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      activeStateIndex === idx ? 'w-8 bg-[#FF4B00]' : 'w-2 bg-white/20'
                    }`}
                  />
                ))}
              </div>

            </div>

            {/* RIGHT / DOMINANT CINEMATIC VIDEO STAGE (COLUMNS 6–12) */}
            <div className="lg:col-span-7 relative w-full flex justify-end">
              <div
                ref={videoContainerRef}
                className="w-full aspect-[16/10] max-h-[580px] relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.8)] transition-transform duration-300 ease-out"
                style={{
                  transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
                }}
              >
                <video
                  ref={videoRef}
                  src="/videos/approach/approach-cinematic.mp4"
                  poster="/videos/approach/approach-poster.webp"
                  muted
                  playsInline
                  loop
                  autoPlay
                  preload="metadata"
                  className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.05]"
                />
                
                {/* SUBTLE VIGNETTE & GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                {/* CORNER CINEMATIC WATERMARK */}
                <div className="absolute bottom-5 right-6 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-intertight font-bold uppercase tracking-widest text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B00] animate-pulse" />
                  <span>TMR CINEMATIC STUDIO // 4K</span>
                </div>
              </div>
            </div>

          </div>

          {/* BOTTOM INFORMATION STRIP */}
          <div className="w-full border-t border-white/10 pt-4 flex items-center justify-between font-intertight text-[10px] font-bold text-white/40 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span>TMR CAR CARE</span>
              <span>/</span>
              <span>PRECISION AUTOMOTIVE CARE</span>
              <span className="hidden sm:inline">/</span>
              <span className="hidden sm:inline">TIRUPPUR, TAMIL NADU</span>
            </div>
            <div className="flex items-center gap-2 text-[#FF4B00]">
              <span>SCROLL TO CONTINUE</span>
              <span>↓</span>
            </div>
          </div>

        </Container>
      </div>
    </section>
  );
};
