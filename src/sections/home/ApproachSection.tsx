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
    headline: 'PRECISION IN MOTION.',
    quote: '"Every surface is understood before the first correction."',
    description: 'A controlled studio process designed for zero-defect surface preservation.',
  },
  {
    number: '02',
    eyebrow: '01 // DIAGNOSE',
    headline: 'PAINT SURFACE MAPPING',
    description: 'Ultrasonic depth measurement establishes safe correction boundaries.',
  },
  {
    number: '03',
    eyebrow: '02 // PREPARE',
    headline: 'SURFACE DECONTAMINATION',
    description: 'Chemical iron extraction and synthetic clay bar deep decontamination.',
  },
  {
    number: '04',
    eyebrow: '03 // REFINE',
    headline: 'DUAL-ACTION CORRECTION',
    description: 'Multi-pass polishing eliminates 95%+ of surface defects and swirls.',
  },
  {
    number: '05',
    eyebrow: '04 // PROCESS',
    headline: 'MEASURED FINISH HANDOFF',
    description: 'Specular LED verification before handoff into Process Theatre.',
  },
];

export const ApproachSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const [activeStateIndex, setActiveStateIndex] = useState<number>(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const currentState = approachStates[activeStateIndex] || approachStates[0];

  useEffect(() => {
    if (!sectionRef.current || !stickyRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    let lastIndex = -1;

    const ctx = gsap.context(() => {
      // STICKY SCROLLTRIGGER VIEWPORT PINNING
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.1,
        onUpdate: (self) => {
          const progress = self.progress;

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
            const scale = 1.06 - progress * 0.05;
            const opacity = progress > 0.88 ? Math.max(0, 1 - (progress - 0.88) / 0.12) : 1;
            gsap.set(videoContainerRef.current, {
              scale: scale,
              opacity: opacity,
            });
          }
        },
      });

      // Video Mask Reveal on Section Entry
      if (videoContainerRef.current) {
        gsap.fromTo(
          videoContainerRef.current,
          { scale: 1.08, opacity: 0.2 },
          {
            scale: 1.0,
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

  // Subtle Pointer Parallax for Video Stage (2–3px offset)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xNorm = (e.clientX - rect.left) / rect.width - 0.5;
    const yNorm = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: xNorm * 4, y: yNorm * 4 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <section
      ref={sectionRef}
      id="approach"
      className="relative w-full h-[300vh] bg-[#050505] text-white selection:bg-[#FF4B00] selection:text-white z-20 border-b border-white/10"
    >
      {/* 100VH FULLSCREEN STICKY VIEWPORT STAGE */}
      <div
        ref={stickyRef}
        className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-between py-6 md:py-10 bg-[#050505]"
      >
        {/* FINE FILM GRAIN OVERLAY TEXTURE */}
        <div className="absolute inset-0 pointer-events-none z-20 opacity-10 mix-blend-overlay">
          <svg className="w-full h-full">
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>

        <Container className="h-full flex flex-col justify-between relative z-10 my-auto">
          
          {/* TOP SMALL TECHNICAL METADATA HEADER */}
          <div className="w-full border-t border-white/10 pt-4 flex items-center justify-between font-intertight font-bold text-[11px] uppercase tracking-[0.16em] text-white/60">
            <div className="flex items-center gap-2.5">
              <span className="text-[#FF4B00]">02</span>
              <span className="text-white/20">/</span>
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

          {/* MAIN CINEMATIC COMPOSITION (LEFT 60% VIDEO | RIGHT RESTRAINED EDITORIAL) */}
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-auto relative min-h-[75vh]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            
            {/* LEFT / CENTRAL DOMINANT CINEMATIC VIDEO STAGE (COLUMNS 1–7 / 60vw Width) */}
            <div className="lg:col-span-7 relative w-full h-full flex items-center">
              <div
                ref={videoContainerRef}
                className="w-full aspect-[16/10] max-h-[620px] relative overflow-hidden rounded-xl border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.85)] transition-transform duration-300 ease-out"
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
                  className="w-full h-full object-cover filter brightness-[0.90] contrast-[1.08]"
                />
                
                {/* DARK STUDIO GRADIENT VIGNETTE */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                {/* CORNER STUDIO LABEL */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-intertight font-bold uppercase tracking-widest text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B00] animate-pulse" />
                  <span>TMR STUDIO FILM</span>
                </div>
              </div>
            </div>

            {/* RIGHT / QUIET LOWER EDITORIAL TYPOGRAPHY (COLUMNS 8–12) */}
            <div className="lg:col-span-5 relative z-10 space-y-5 max-w-[400px] pl-0 lg:pl-6 pb-2">
              
              {/* STAGE EYEBROW & NUMBER */}
              <div className="flex items-center gap-2.5 font-intertight text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF4B00]">
                <span>{currentState.eyebrow}</span>
                <span className="text-white/20">•</span>
                <span className="text-white/40">{currentState.number} / 05</span>
              </div>

              {/* RESTRAINED EDITORIAL HEADLINE */}
              <h2 className="font-intertight font-extrabold text-2xl sm:text-3xl lg:text-[38px] uppercase text-white leading-[0.96] tracking-[-0.035em]">
                {currentState.headline}
              </h2>

              {/* SHORT EDITORIAL STATEMENT QUOTE */}
              {currentState.quote && (
                <p className="font-editorial text-lg sm:text-xl text-white/90 leading-tight italic font-normal">
                  {currentState.quote}
                </p>
              )}

              {/* SHORT SUPPORTING DESCRIPTION */}
              <p className="font-intertight text-xs text-white/60 leading-relaxed font-normal">
                {currentState.description}
              </p>

              {/* QUIET EDITORIAL LINK */}
              <div className="pt-1">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 text-[11px] font-intertight font-extrabold uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors"
                >
                  <span>DISCOVER THE TMR METHOD</span>
                  <span className="text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">↗</span>
                </Link>
              </div>

              {/* STAGE DOT INDICATORS */}
              <div className="flex items-center gap-2 pt-2">
                {approachStates.map((st, idx) => (
                  <div
                    key={st.number}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      activeStateIndex === idx ? 'w-7 bg-[#FF4B00]' : 'w-1.5 bg-white/20'
                    }`}
                  />
                ))}
              </div>

            </div>

          </div>

          {/* BOTTOM STATUS METADATA LINE */}
          <div className="w-full border-t border-white/10 pt-3 flex items-center justify-between font-intertight text-[10px] font-bold text-white/40 uppercase tracking-widest">
            <div>TMR CAR CARE // TIRUPPUR STUDIO</div>
            <div className="flex items-center gap-2 text-[#FF4B00]">
              <span>SCROLL TO CONTINUE</span>
              <span>→</span>
            </div>
          </div>

        </Container>
      </div>
    </section>
  );
};
