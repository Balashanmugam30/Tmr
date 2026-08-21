import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/Container';

gsap.registerPlugin(ScrollTrigger);

export const ManifestoSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. MASTER REVEAL TIMELINE (PAUSED INITIALLY, CONTROLLED BY VIEWPORT ENTRY)
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: 'power4.out' },
      });

      // 1a. Top Divider (0.00s)
      if (dividerRef.current) {
        tl.fromTo(
          dividerRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, transformOrigin: 'left center' },
          0
        );
      }

      // 1b. Vertical Orange Accent Rule (0.08s)
      if (ruleRef.current) {
        tl.fromTo(
          ruleRef.current,
          { scaleY: 0 },
          { scaleY: 1, duration: 0.7, transformOrigin: 'top center' },
          0.08
        );
      }

      // 1c. Staggered Masked Headline Reveal (0.12s -> 0.40s)
      if (headlineRef.current) {
        const lines = headlineRef.current.querySelectorAll('.manifesto-line');
        if (lines.length > 0) {
          tl.fromTo(
            lines,
            { opacity: 0, y: 28, clipPath: 'inset(100% 0 0 0)' },
            {
              opacity: 1,
              y: 0,
              clipPath: 'inset(0% 0 0 0)',
              duration: 0.75,
              stagger: 0.09,
            },
            0.12
          );
        }
      }

      // 1d. Horizontal Image Mask Curtain Reveal (0.24s -> 1.1s)
      if (imageRef.current) {
        const imgEl = imageRef.current.querySelector('img');

        // Image wrapper mask curtain expands horizontally from left to right
        tl.fromTo(
          imageRef.current,
          { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
          {
            opacity: 1,
            clipPath: 'inset(0 0% 0 0)',
            duration: 1.1,
            ease: 'power4.out',
          },
          0.24
        );

        // Subtle image shift inside the expanding curtain
        if (imgEl) {
          tl.fromTo(
            imgEl,
            { x: 24 },
            { x: 0, duration: 1.1, ease: 'power4.out' },
            0.24
          );
        }
      }

      // 2. SCROLLTRIGGER VIEWPORT ENTER / LEAVE LIFECYCLE (REPLAYS ON VIEWPORT RE-ENTRY)
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 78%',
        end: 'bottom 20%',
        onEnter: () => {
          tl.restart();
        },
        onEnterBack: () => {
          tl.restart();
        },
        onLeave: () => {
          tl.pause(0);
        },
        onLeaveBack: () => {
          tl.pause(0);
        },
      });

      // 3. CONTINUOUS SCROLL PARALLAX (3-Layer Depth)
      if (headlineRef.current) {
        const lines = headlineRef.current.querySelectorAll('.manifesto-line');
        lines.forEach((line, index) => {
          const depth = -14 - index * 3;
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

      if (imageRef.current) {
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

      // 4. RESTORE DEDICATED IMAGE HOVER EFFECT (scale 1.0 -> 1.025)
      if (imageRef.current) {
        const imgContainer = imageRef.current;
        const imgEl = imgContainer.querySelector('img');

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

          imgContainer.addEventListener('mouseenter', handleMouseEnter);
          imgContainer.addEventListener('mouseleave', handleMouseLeave);
        }
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
        <div ref={dividerRef} className="w-full h-px bg-black/10 mb-12 origin-left" />

        {/* STRICT 12-COLUMN EDITORIAL GRID (COLLISION-FREE BETWEEN TEXT & IMAGE) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative min-h-[480px]">
          
          {/* LEFT / HEADLINE COLUMN (COLUMNS 1–7, STRICT Z-10 HIGH PRIORITY) */}
          <div className="lg:col-span-7 flex gap-6 md:gap-8 items-start relative z-10 max-w-[700px]">
            {/* VERTICAL ORANGE ACCENT RULE */}
            <div
              ref={ruleRef}
              className="w-1.5 h-32 md:h-44 bg-[#FF4B00] rounded-full shrink-0 mt-3 origin-top"
            />

            {/* UNIFIED #050505 TYPOGRAPHIC STATEMENT */}
            <h2
              ref={headlineRef}
              className="font-intertight font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[92px] uppercase text-[#050505] leading-[0.90] tracking-[-0.05em]"
            >
              <div className="overflow-hidden">
                <span className="manifesto-line block text-[#050505]">FOR PEOPLE</span>
              </div>
              <div className="overflow-hidden">
                <span className="manifesto-line block ml-4 sm:ml-8 md:ml-12 text-[#050505]">
                  WHO CARE
                </span>
              </div>
              <div className="overflow-hidden">
                <span className="manifesto-line block ml-8 sm:ml-14 md:ml-20 text-[#050505]">
                  ABOUT THEIR
                </span>
              </div>
              <div className="overflow-hidden">
                <span className="manifesto-line flex items-center gap-2.5 ml-12 sm:ml-20 md:ml-28 text-[#050505]">
                  <span>CARS.</span>
                  <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#FF4B00] inline-block shrink-0" />
                </span>
              </div>
            </h2>
          </div>

          {/* RIGHT / DEDICATED MANIFESTO PHOTOGRAPH (COLUMNS 8–12, STRICT Z-0 NON-COLLIDING) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 z-0">
            <div
              ref={imageRef}
              className="relative rounded-[16px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.14)] border border-black/10 aspect-[4/5] max-w-[460px] mx-auto lg:max-w-none group cursor-pointer"
            >
              <img
                src="/images/manifesto/manifesto-editorial.webp"
                alt="TMR Car Care studio detailing craftsmanship"
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:brightness-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
