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
      // Top Divider Line Expansion
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

      // Top Meta Row Entrance
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

      // Vertical Orange Accent Rule Scale
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

      // Headline Lines Line-by-Line Reveal
      if (headlineRef.current) {
        const lines = headlineRef.current.querySelectorAll('.manifesto-line');
        if (lines.length > 0) {
          gsap.fromTo(
            lines,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.08,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 70%',
              },
            }
          );
        }
      }

      // Dedicated Image Reveal & Subtle Parallax
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, scale: 1.04, y: 20 },
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

        // Subtle Parallax Effect (18px vertical shift)
        gsap.to(imageRef.current, {
          y: -20,
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
          className="flex items-center justify-between font-intertight font-bold text-xs uppercase tracking-[0.12em] mb-12 md:mb-16 text-[#050505]"
        >
          <div className="flex items-center gap-2.5">
            <span className="text-[#FF4B00]">01</span>
            <span className="text-black/30">/</span>
            <span className="text-[#050505]">TMR</span>
          </div>
          <span className="text-[#777777] tracking-[0.2em]">MANIFESTO</span>
        </div>

        {/* ASYMMETRIC 12-COLUMN EDITORIAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative min-h-[500px]">
          
          {/* LEFT / MAIN STATEMENT COLUMN (COLUMNS 2–8, MAX-WIDTH 820px) */}
          <div className="lg:col-span-8 flex gap-6 md:gap-8 items-start relative z-10 max-w-[820px]">
            {/* VERTICAL ORANGE ACCENT RULE */}
            <div
              ref={ruleRef}
              className="w-1.5 h-36 md:h-48 bg-[#FF4B00] rounded-full shrink-0 mt-3"
            />

            {/* UNIFIED #050505 UNIFIED TYPOGRAPHIC STATEMENT */}
            <h2
              ref={headlineRef}
              className="font-intertight font-extrabold text-4xl sm:text-6xl md:text-8xl lg:text-[108px] uppercase text-[#050505] leading-[0.90] tracking-[-0.055em]"
            >
              <span className="manifesto-line block text-[#050505]">FOR PEOPLE</span>
              <span className="manifesto-line block ml-4 sm:ml-8 md:ml-12 text-[#050505]">
                WHO CARE
              </span>
              <span className="manifesto-line block ml-10 sm:ml-20 md:ml-32 text-[#050505]">
                ABOUT THEIR
              </span>
              <span className="manifesto-line flex items-center gap-3 ml-14 sm:ml-28 md:ml-44 text-[#050505]">
                <span>CARS.</span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#FF4B00] inline-block shrink-0" />
              </span>
            </h2>
          </div>

          {/* RIGHT / OVERLAPPING DEDICATED MANIFESTO PHOTOGRAPH (COLUMNS 8–12) */}
          <div className="lg:col-span-4 relative mt-8 lg:mt-0">
            <div
              ref={imageRef}
              className="relative rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.16)] border border-black/10 aspect-[3/4] max-w-[460px] mx-auto lg:max-w-none lg:-ml-16 z-20 group"
            >
              <img
                src="/images/manifesto/manifesto-editorial.webp"
                alt="TMR Car Care studio detailing craftsmanship"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
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
        <div className="mt-16 md:mt-24 border-t border-black/10 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 font-intertight text-[11px] font-semibold uppercase tracking-wider text-[#555555]">
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
