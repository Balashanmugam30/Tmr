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
  const bottomMetaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Top Divider Line Draw
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
              start: 'top 78%',
            },
          }
        );
      }

      // 2. Top Meta Row Fade-In
      if (metaRef.current) {
        gsap.fromTo(
          metaRef.current,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 78%',
            },
          }
        );
      }

      // 3. Vertical Orange Rule Scale
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

      // 4. Headline Lines Staggered Reveal
      if (headlineRef.current) {
        const lines = headlineRef.current.querySelectorAll('.manifesto-line');
        if (lines.length > 0) {
          gsap.fromTo(
            lines,
            { opacity: 0, y: 24, clipPath: 'inset(100% 0 0 0)' },
            {
              opacity: 1,
              y: 0,
              clipPath: 'inset(0% 0 0 0)',
              duration: 0.75,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 72%',
              },
            }
          );
        }

        // Differential Line Parallax Depth
        lines.forEach((line, index) => {
          const depth = -14 - index * 3; // -14px, -17px, -20px, -23px
          gsap.to(line, {
            y: depth,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        });
      }

      // 5. Image Entrance Reveal & Subtle Scroll Parallax
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, scale: 1.06, y: 30, clipPath: 'inset(8% 0 8% 0)' },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            clipPath: 'inset(0% 0 0% 0)',
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 68%',
            },
          }
        );

        // Parallax Scroll Effect (-30px)
        gsap.to(imageRef.current, {
          y: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // 6. Bottom Meta Row Entrance
      if (bottomMetaRef.current) {
        gsap.fromTo(
          bottomMetaRef.current,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
            },
          }
        );
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
          className="flex items-center justify-between font-intertight font-bold text-xs uppercase tracking-[0.12em] mb-12 md:mb-16 text-[#050505]"
        >
          <div className="flex items-center gap-2.5">
            <span className="text-[#FF4B00]">01</span>
            <span className="text-black/30">/</span>
            <span className="text-[#050505]">TMR</span>
          </div>
          <span className="text-[#777777] tracking-[0.2em]">MANIFESTO</span>
        </div>

        {/* STRICT 12-COLUMN EDITORIAL GRID (COLLISION-FREE BETWEEN TEXT & IMAGE) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative min-h-[480px]">
          
          {/* LEFT / HEADLINE COLUMN (COLUMNS 1–7, STRICT Z-10 HIGH PRIORITY) */}
          <div className="lg:col-span-7 flex gap-6 md:gap-8 items-start relative z-10 max-w-[700px]">
            {/* VERTICAL ORANGE ACCENT RULE */}
            <div
              ref={ruleRef}
              className="w-1.5 h-32 md:h-44 bg-[#FF4B00] rounded-full shrink-0 mt-3"
            />

            {/* UNIFIED #050505 TYPOGRAPHIC STATEMENT */}
            <h2
              ref={headlineRef}
              className="font-intertight font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[92px] uppercase text-[#050505] leading-[0.90] tracking-[-0.05em]"
            >
              <span className="manifesto-line block text-[#050505]">FOR PEOPLE</span>
              <span className="manifesto-line block ml-4 sm:ml-8 md:ml-12 text-[#050505]">
                WHO CARE
              </span>
              <span className="manifesto-line block ml-8 sm:ml-14 md:ml-20 text-[#050505]">
                ABOUT THEIR
              </span>
              <span className="manifesto-line flex items-center gap-2.5 ml-12 sm:ml-20 md:ml-28 text-[#050505]">
                <span>CARS.</span>
                <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#FF4B00] inline-block shrink-0" />
              </span>
            </h2>
          </div>

          {/* RIGHT / DEDICATED MANIFESTO PHOTOGRAPH (COLUMNS 8–12, STRICT Z-0 NON-COLLIDING) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 z-0">
            <div
              ref={imageRef}
              className="relative rounded-[16px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.14)] border border-black/10 aspect-[4/5] max-w-[460px] mx-auto lg:max-w-none group"
            >
              <img
                src="/images/manifesto/manifesto-editorial.webp"
                alt="TMR Car Care studio detailing craftsmanship"
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.025] group-hover:brightness-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="bg-[#050505]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full font-intertight text-[10px] font-bold uppercase tracking-widest text-white">
                  STUDIO CRAFT / TMR
                </span>
                <span className="text-[#FF4B00] font-intertight text-xs font-bold">
                  TIRUPPUR
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM SUPPORTING STATEMENT ROW */}
        <div
          ref={bottomMetaRef}
          className="mt-16 md:mt-24 border-t border-black/10 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 font-intertight text-[11px] font-semibold uppercase tracking-wider text-[#555555]"
        >
          <span className="text-[#050505]">
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
