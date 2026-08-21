import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/Container';

gsap.registerPlugin(ScrollTrigger);

interface TeaserGalleryItem {
  id: string;
  number: string;
  title: string;
  service: string;
  image: string;
  aspect: string;
  gridSpan: string;
  overlapClass?: string;
  revealMask: string;
  shiftInitial: { x: number; y: number };
}

const homepageGalleryItems: TeaserGalleryItem[] = [
  {
    id: 'xuv700',
    number: '01',
    title: 'MAHINDRA XUV700',
    service: 'FEATURE // PAINT CORRECTION + CERAMIC',
    image: '/images/gallery/gallery-01.webp',
    aspect: 'aspect-[16/9]',
    gridSpan: 'lg:col-span-12',
    revealMask: 'inset(0 100% 0 0)',
    shiftInitial: { x: 24, y: 0 },
  },
  {
    id: 'scorpio',
    number: '02',
    title: 'SCORPIO-N',
    service: 'DETAIL // WATER BEADING',
    image: '/images/gallery/gallery-07.webp',
    aspect: 'aspect-[4/5]',
    gridSpan: 'lg:col-span-5',
    revealMask: 'inset(100% 0 0 0)',
    shiftInitial: { x: 0, y: 24 },
  },
  {
    id: 'safari',
    number: '03',
    title: 'TATA SAFARI',
    service: 'PROTECTION // PPF INSTALLATION',
    image: '/images/gallery/gallery-04.webp',
    aspect: 'aspect-[3/4]',
    gridSpan: 'lg:col-span-7',
    overlapClass: 'lg:-mt-8',
    revealMask: 'inset(0 0 0 100%)',
    shiftInitial: { x: -24, y: 0 },
  },
  {
    id: 'tucson',
    number: '04',
    title: 'HYUNDAI TUCSON',
    service: 'CRAFT // INTERIOR RESTORATION',
    image: '/images/gallery/gallery-06.webp',
    aspect: 'aspect-[16/9]',
    gridSpan: 'lg:col-span-12',
    revealMask: 'inset(100% 0 0 0)',
    shiftInitial: { x: 0, y: 24 },
  },
];

export const GalleryShowcaseSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. MANIFESTO-STYLE MASTER TIMELINE (PAUSED INITIALLY, CONTROLLED BY VIEWPORT ENTRY)
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: 'power4.out' },
      });

      // 1a. Header text reveal (0.00s)
      if (textGroupRef.current) {
        const textItems = textGroupRef.current.querySelectorAll('.gallery-anim-text');
        tl.fromTo(
          textItems,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 },
          0
        );
      }

      // 1b. Sequential Manifesto-Style Curtain Mask Reveal for the 4 Teaser Gallery Images
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll<HTMLDivElement>('.gallery-reveal-card');

        cards.forEach((card, index) => {
          const imgEl = card.querySelector('img');
          const maskInitial = homepageGalleryItems[index]?.revealMask || 'inset(0 100% 0 0)';
          const shift = homepageGalleryItems[index]?.shiftInitial || { x: 24, y: 0 };
          const startTime = 0.20 + index * 0.14; // Staggered arrival sequence

          // Outer mask curtain expands to reveal image
          tl.fromTo(
            card,
            { opacity: 0, clipPath: maskInitial },
            {
              opacity: 1,
              clipPath: 'inset(0 0% 0 0)',
              duration: 1.0,
              ease: 'power4.out',
            },
            startTime
          );

          // Subtle internal image shift inside expanding curtain
          if (imgEl) {
            tl.fromTo(
              imgEl,
              { x: shift.x, y: shift.y },
              { x: 0, y: 0, duration: 1.0, ease: 'power4.out' },
              startTime
            );
          }
        });
      }

      // 2. SCROLLTRIGGER LIFECYCLE MATCHING MANIFESTO (REPLAYS ON VIEWPORT RE-ENTRY)
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 78%',
        end: 'bottom 20%',
        onEnter: () => tl.restart(),
        onEnterBack: () => tl.restart(),
        onLeave: () => tl.pause(0),
        onLeaveBack: () => tl.pause(0),
      });

      // 3. IMAGE HOVER EFFECT (scale 1.0 -> 1.025)
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll<HTMLDivElement>('.gallery-reveal-card');
        cards.forEach((card) => {
          const imgEl = card.querySelector('img');
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

            card.addEventListener('mouseenter', handleMouseEnter);
            card.addEventListener('mouseleave', handleMouseLeave);
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery-showcase"
      className="w-full bg-[#070809] text-[#F5F4EF] border-t border-b border-white/10 py-16 md:py-24 relative overflow-hidden isolate font-intertight"
      style={{ backgroundColor: '#070809' }}
    >
      {/* SUBTLE NOISE OVERLAY */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-6 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:18px_18px]" />

      {/* TOP ARCHITECTURAL METADATA ROW */}
      <Container className="relative z-20 pt-2">
        <div className="w-full border-t border-white/10 pt-4 flex items-center justify-between font-intertight font-bold text-xs uppercase tracking-[0.14em] text-white">
          <div className="flex items-center gap-2.5">
            <span className="text-[#FF4B00]">06</span>
            <span className="text-white/30">/</span>
            <span>GALLERY</span>
          </div>
          <span className="text-white/40 tracking-[0.2em] hidden sm:inline-block">
            TMR STUDIO ARCHIVE // TIRUPPUR
          </span>
        </div>
      </Container>

      {/* MAIN CONTENT COMPOSITION */}
      <Container className="relative z-20 my-auto py-8 lg:py-12 space-y-12">
        {/* EDITORIAL HEADER GROUP */}
        <div ref={textGroupRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7 space-y-3">
            <div className="gallery-anim-text font-intertight font-extrabold text-[11px] uppercase tracking-[0.22em] text-[#FF4B00]">
              06 // TMR STUDIO ARCHIVE
            </div>
            <h2 className="gallery-anim-text font-intertight font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase text-white leading-[0.9] tracking-[-0.04em]">
              PROOF IN THE <br />
              <span className="text-[#FF4B00]">REFLECTION.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="gallery-anim-text font-editorial text-lg sm:text-2xl italic text-white/85 leading-tight">
              "Every vehicle that leaves our facility carries our signature gloss and protective matrix."
            </p>
          </div>
        </div>

        {/* 4-IMAGE ASYMMETRICAL EDITORIAL TEASER GRID WITH MANIFESTO MASK REVEALS */}
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {homepageGalleryItems.map((item) => (
            <div
              key={item.id}
              data-home-gallery-image="true"
              className={`${item.gridSpan} ${item.overlapClass || ''} relative w-full`}
            >
              {/* STATIC LAYOUT CONTAINER (PREVENTS VERTICAL LAYOUT SHIFTS) */}
              <div
                className={`gallery-reveal-card w-full ${item.aspect} relative overflow-hidden rounded-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-black cursor-pointer group`}
              >
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.service} by TMR Car Care`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* FLOATING GLASSMORPHIC EDITORIAL PROJECT BADGE */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between font-intertight pointer-events-none z-10">
                  <div className="flex items-center gap-2 bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-white border border-white/15 shadow-lg">
                    <span className="text-[#FF4B00]">{item.number}</span>
                    <span className="text-white/30">/</span>
                    <span>{item.title}</span>
                  </div>

                  <span className="bg-[#FF4B00]/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-white hidden sm:inline-block shadow-md">
                    {item.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EDITORIAL GALLERY CTA LINK TO FULL PORTFOLIO */}
        <div className="pt-4 flex items-center justify-between border-t border-white/10 font-intertight">
          <Link
            to="/gallery"
            className="group inline-flex flex-col gap-1 text-xs font-extrabold uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors"
          >
            <span className="inline-flex items-center gap-2">
              <span>VIEW FULL GALLERY ARCHIVE</span>
              <span className="text-[#FF4B00] group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
            </span>
            <span className="h-[1.5px] w-10 group-hover:w-full bg-[#FF4B00] transition-all duration-300" />
          </Link>

          <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 hidden sm:inline-block">
            TMR STUDIO // TIRUPPUR FACILITY
          </span>
        </div>
      </Container>
    </section>
  );
};
