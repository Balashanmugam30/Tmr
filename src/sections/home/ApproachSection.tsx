import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/Container';

gsap.registerPlugin(ScrollTrigger);

export const ApproachSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const statementRef = useRef<HTMLParagraphElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. MASTER ENTRANCE TIMELINE (PAUSED INITIALLY, CONTROLLED BY VIEWPORT ENTRY)
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: 'power4.out' },
      });

      // 1a. Top Divider Line (0.00s)
      if (dividerRef.current) {
        tl.fromTo(
          dividerRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, transformOrigin: 'left center' },
          0
        );
      }

      // 1b. Top Meta Row (0.05s)
      if (metaRef.current) {
        tl.fromTo(
          metaRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5 },
          0.05
        );
      }

      // 1c. Masked Headline Reveal (0.10s)
      if (headlineRef.current) {
        const lines = headlineRef.current.querySelectorAll('.approach-line');
        if (lines.length > 0) {
          tl.fromTo(
            lines,
            { opacity: 0, y: 24, clipPath: 'inset(100% 0 0 0)' },
            {
              opacity: 1,
              y: 0,
              clipPath: 'inset(0% 0 0 0)',
              duration: 0.75,
              stagger: 0.1,
            },
            0.10
          );
        }
      }

      // 1d. Primary Statement & Body Copy (0.22s)
      if (statementRef.current) {
        tl.fromTo(
          statementRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.22
        );
      }

      if (bodyRef.current) {
        tl.fromTo(
          bodyRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.30
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5 },
          0.38
        );
      }

      // 1e. Horizontal Image Mask Curtain Reveal (0.25s -> 1.1s)
      if (imageWrapperRef.current) {
        const imgEl = imageWrapperRef.current.querySelector('img');

        // Wrapper mask curtain expands horizontally from left to right
        tl.fromTo(
          imageWrapperRef.current,
          { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
          {
            opacity: 1,
            clipPath: 'inset(0 0% 0 0)',
            duration: 1.1,
            ease: 'power4.out',
          },
          0.25
        );

        // Subtle image shift inside the expanding curtain window
        if (imgEl) {
          tl.fromTo(
            imgEl,
            { x: 24 },
            { x: 0, duration: 1.1, ease: 'power4.out' },
            0.25
          );
        }
      }

      // 1f. Overlapping EST. 2024 Badge Entrance (0.60s)
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: 35, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out' },
          0.60
        );
      }

      // 2. SCROLLTRIGGER VIEWPORT ENTER / LEAVE LIFECYCLE (REPLAYS ON VIEWPORT RE-ENTRY)
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 78%',
        end: 'bottom 20%',
        onEnter: () => tl.restart(),
        onEnterBack: () => tl.restart(),
        onLeave: () => tl.pause(0),
        onLeaveBack: () => tl.pause(0),
      });

      // 3. MULTI-LAYER CONTINUOUS SCROLL PARALLAX (Foreground Badge vs Midground Image vs Background)
      if (imageWrapperRef.current) {
        gsap.to(imageWrapperRef.current, {
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

      if (badgeRef.current) {
        // Badge moves faster than image (-55px vs -30px) to establish multi-layer spatial depth
        gsap.to(badgeRef.current, {
          y: -55,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // 4. DESKTOP IMAGE HOVER MICRO-INTERACTION (scale 1.0 -> 1.025)
      if (imageWrapperRef.current) {
        const container = imageWrapperRef.current;
        const imgEl = container.querySelector('img');

        if (imgEl) {
          const handleMouseEnter = () => {
            gsap.to(imgEl, {
              scale: 1.025,
              duration: 0.5,
              ease: 'power2.out',
              overwrite: 'auto',
            });
          };

          const handleMouseLeave = () => {
            gsap.to(imgEl, {
              scale: 1.0,
              duration: 0.5,
              ease: 'power2.out',
              overwrite: 'auto',
            });
          };

          container.addEventListener('mouseenter', handleMouseEnter);
          container.addEventListener('mouseleave', handleMouseLeave);
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="approach"
      className="w-full py-24 md:py-32 bg-[#F5F4EF] overflow-hidden relative z-20 border-b border-black/10 selection:bg-[#FF4B00] selection:text-white"
    >
      <Container>
        {/* TOP DIVIDER */}
        <div ref={dividerRef} className="w-full h-px bg-black/10 mb-8 origin-left" />

        {/* TOP META ROW */}
        <div
          ref={metaRef}
          className="flex items-center justify-between font-intertight font-bold text-xs uppercase tracking-[0.12em] mb-12 md:mb-16 text-[#050505]"
        >
          <div className="flex items-center gap-2.5">
            <span className="text-[#FF4B00]">02</span>
            <span className="text-black/30">/</span>
            <span className="text-[#050505]">APPROACH</span>
          </div>
          <span className="text-[#777777] tracking-[0.2em]">ARCHITECTURE + PARALLAX</span>
        </div>

        {/* 12-COLUMN EDITORIAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          
          {/* LEFT / EDITORIAL NARRATIVE COLUMN (COLUMNS 1–6) */}
          <div className="lg:col-span-6 relative z-10 space-y-8 max-w-[620px]">
            {/* HEADLINE */}
            <h2
              ref={headlineRef}
              className="font-intertight font-extrabold text-4xl sm:text-6xl lg:text-[84px] uppercase text-[#050505] leading-[0.92] tracking-[-0.05em]"
            >
              <div className="overflow-hidden">
                <span className="approach-line block text-[#050505]">MORE THAN</span>
              </div>
              <div className="overflow-hidden">
                <span className="approach-line block text-[#FF4B00]">A CAR WASH.</span>
              </div>
            </h2>

            {/* EDITORIAL STATEMENT & BODY COPY */}
            <div className="space-y-6">
              <p
                ref={statementRef}
                className="font-editorial text-2xl sm:text-3xl lg:text-[34px] text-[#050505] leading-tight italic"
              >
                "We engineered a facility dedicated to the preservation of automotive excellence."
              </p>

              <p
                ref={bodyRef}
                className="font-intertight text-sm sm:text-base text-[#666666] leading-relaxed max-w-md"
              >
                Located in the heart of Tiruppur, our studio combines technical precision with an obsession for detail. Every vehicle receives bespoke treatment designed to protect, restore, and elevate.
              </p>

              {/* EDITORIAL CTA */}
              <div ref={ctaRef} className="pt-2">
                <Link
                  to="/services"
                  className="group inline-flex flex-col gap-1 text-xs font-intertight font-extrabold uppercase tracking-widest text-[#050505] hover:text-[#FF4B00] transition-colors"
                >
                  <span className="inline-flex items-center gap-2">
                    <span>DISCOVER OUR APPROACH</span>
                    <span className="text-[#FF4B00] group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                  </span>
                  <span className="h-[1.5px] w-12 group-hover:w-full bg-[#FF4B00] transition-all duration-300" />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT / PARALLAX FACILITY PHOTOGRAPH & BADGE COLUMN (COLUMNS 7–12) */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0">
            {/* MAIN PARALLAX IMAGE WRAPPER */}
            <div
              ref={imageWrapperRef}
              className="relative rounded-[16px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.14)] border border-black/10 aspect-[4/5] w-full max-w-[540px] mx-auto lg:max-w-none group cursor-pointer"
            >
              <img
                src="/images/approach/approach-parallax.webp"
                alt="TMR Car Care Studio Facility & Detailer Craftsmanship in Tiruppur"
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:brightness-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* OVERLAPPING FOREGROUND EST. 2024 BADGE (SPATIAL DEPTH LAYER) */}
            <div
              ref={badgeRef}
              className="absolute -bottom-8 -left-4 md:-bottom-12 md:-left-8 bg-[#FF4B00] text-white p-6 md:p-10 rounded-[14px] z-20 shadow-[0_20px_40px_rgba(255,75,0,0.3)] max-w-[280px]"
            >
              <span className="font-intertight font-extrabold text-2xl md:text-4xl leading-none block mb-1">
                EST. 2024
              </span>
              <span className="font-intertight text-[11px] font-bold uppercase tracking-widest opacity-95 block">
                TIRUPPUR STUDIO
              </span>
              <span className="font-intertight text-[9px] font-extrabold tracking-widest opacity-75 mt-1 block">
                TMR / AUTOMOTIVE CARE
              </span>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};
