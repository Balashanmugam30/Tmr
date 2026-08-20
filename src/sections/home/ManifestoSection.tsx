import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/Container';

gsap.registerPlugin(ScrollTrigger);

export const ManifestoSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      // Top Divider Expansion
      if (dividerRef.current) {
        gsap.fromTo(
          dividerRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.8,
            ease: 'power3.out',
            transformOrigin: 'left center',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      // Meta Row Entrance
      if (metaRef.current) {
        gsap.fromTo(
          metaRef.current,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // Vertical Orange Rule Scale
      if (ruleRef.current) {
        gsap.fromTo(
          ruleRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 0.7,
            ease: 'power3.out',
            transformOrigin: 'top center',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
            },
          }
        );
      }

      // Headline Lines Staggered Reveal
      if (headlineRef.current) {
        const lines = headlineRef.current.querySelectorAll('.manifesto-line');
        if (lines.length > 0) {
          gsap.fromTo(
            lines,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.12,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 70%',
              },
            }
          );
        }
      }

      // Image Reveal & Subtle Parallax
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, scale: 1.04, y: 32 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 65%',
            },
          }
        );

        // Subtle Parallax Scroll Effect
        gsap.to(imageRef.current, {
          y: -24,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 md:py-32 bg-[#F5F4EF] overflow-hidden relative z-20 -mt-[100vh] border-b border-black/10 shadow-[0_-25px_60px_rgba(0,0,0,0.7)] selection:bg-[#FF4B00] selection:text-white"
    >
      <Container>
        {/* TOP DIVIDER */}
        <div ref={dividerRef} className="w-full h-px bg-black/10 mb-8" />

        {/* TOP META ROW */}
        <div
          ref={metaRef}
          className="flex items-center justify-between font-intertight font-bold text-xs uppercase tracking-[0.2em] mb-12 md:mb-20 text-[#050505]"
        >
          <div className="flex items-center gap-2.5">
            <span className="text-[#FF4B00]">01</span>
            <span className="text-black/30">/</span>
            <span className="text-[#050505]">TMR CAR CARE</span>
          </div>
          <span className="text-[#858585] tracking-[0.25em]">MANIFESTO</span>
        </div>

        {/* ASYMMETRIC 12-COLUMN EDITORIAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative">
          
          {/* LEFT / MAIN STATEMENT COLUMN (8 COLUMNS) */}
          <div className="lg:col-span-8 flex gap-6 md:gap-8 items-start relative z-10">
            {/* VERTICAL ORANGE RULE */}
            <div
              ref={ruleRef}
              className="w-1.5 h-36 md:h-52 bg-[#FF4B00] rounded-full shrink-0 mt-2"
            />

            {/* ASYMMETRIC TYPOGRAPHIC STATEMENT */}
            <h2
              ref={headlineRef}
              className="font-intertight font-extrabold text-4xl sm:text-6xl md:text-8xl lg:text-[108px] uppercase text-[#050505] leading-[0.88] tracking-[-0.055em]"
            >
              <span className="manifesto-line block">FOR PEOPLE</span>
              <span className="manifesto-line block ml-6 sm:ml-12 md:ml-20 text-[#050505]">
                WHO CARE
              </span>
              <span className="manifesto-line block ml-12 sm:ml-24 md:ml-40 text-[#666666]">
                ABOUT THEIR
              </span>
              <span className="manifesto-line flex items-center gap-3 ml-16 sm:ml-32 md:ml-56 text-[#050505]">
                <span>CARS.</span>
                <span className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#FF4B00] inline-block shrink-0" />
              </span>
            </h2>
          </div>

          {/* RIGHT / OVERLAPPING EDITORIAL PHOTOGRAPH (4 COLUMNS) */}
          <div className="lg:col-span-4 relative mt-8 lg:mt-0">
            <div
              ref={imageRef}
              className="relative rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.14)] border border-black/10 aspect-[4/5] lg:-ml-12 z-20 group"
            >
              <img
                src="/hero-sequence/frame-0480.webp"
                alt="TMR Car Care studio craftsmanship detailing"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="bg-[#050505]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full font-intertight text-[10px] font-extrabold uppercase tracking-widest text-white">
                  STUDIO CRAFT // 01
                </span>
                <span className="text-[#FF4B00] font-intertight text-xs font-bold">
                  TIRUPPUR
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM SUPPORTING STATEMENT ROW */}
        <div className="mt-16 md:mt-24 border-t border-black/10 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 font-intertight text-xs uppercase tracking-wider text-[#666666]">
          <span className="font-bold text-[#050505]">
            CONTROLLED ENVIRONMENT // TIRUPPUR STUDIO FACILITY
          </span>
          <span>
            EVERY PASS IS MEASURED. EVERY SURFACE IS RESTORED.
          </span>
        </div>
      </Container>
    </section>
  );
};
