import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/Container';

gsap.registerPlugin(ScrollTrigger);

interface TestimonialItem {
  id: string;
  number: string;
  avatar: string;
  name: string;
  vehicle: string;
  service: string;
  quote: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: 'karthik',
    number: '01',
    avatar: 'KR',
    name: 'Karthik R.',
    vehicle: 'Range Rover SV',
    service: 'CERAMIC COATING + PPF MATRIX',
    quote: 'The attention to detail at TMR is unmatched. My car looks better than the day it rolled off the showroom floor. True artisans of their craft.',
  },
  {
    id: 'kumar',
    number: '02',
    avatar: 'SK',
    name: 'S. Kumar',
    vehicle: 'BMW M340i',
    service: 'CERAMIC COATING MATRIX',
    quote: 'Absolutely flawless ceramic coating job. The gloss is unbelievable and washing it now is a breeze.',
  },
  {
    id: 'arvind',
    number: '03',
    avatar: 'AT',
    name: 'Arvind T.',
    vehicle: 'Mercedes-Benz W124',
    service: 'CLASSIC INTERIOR RESTORATION',
    quote: 'Professional, punctual, and passionate. The interior restoration brought my classic back to life.',
  },
];

export const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteWrapperRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const activeItem = testimonialsData[activeIndex];

  // ANIMATED COORDINATED CONTENT TRANSITION (QUOTE, AVATAR, NAME, VEHICLE, SERVICE)
  const animateContentSwitch = useCallback((newIndex: number) => {
    if (quoteWrapperRef.current) {
      gsap.to(quoteWrapperRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.22,
        ease: 'power2.in',
        onComplete: () => {
          setActiveIndex(newIndex);
          gsap.fromTo(
            quoteWrapperRef.current,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }
          );
        },
      });
    } else {
      setActiveIndex(newIndex);
    }
  }, []);

  // MANUAL SELECTION SWITCH BY CLICKING LIST ITEM
  const selectTestimonial = useCallback((newIndex: number) => {
    if (newIndex === activeIndex) return;
    animateContentSwitch(newIndex);
  }, [activeIndex, animateContentSwitch]);

  // CONTINUOUS AUTOMATIC AUTOPLAY TIMER (5 SECONDS PER TESTIMONIAL, NO HOVER PAUSE)
  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % testimonialsData.length;
        if (quoteWrapperRef.current) {
          gsap.fromTo(
            quoteWrapperRef.current,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }
          );
        }
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // TOUCH SWIPE HANDLERS FOR MOBILE
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swipe Left -> Next
        selectTestimonial((activeIndex + 1) % testimonialsData.length);
      } else {
        // Swipe Right -> Prev
        selectTestimonial((activeIndex - 1 + testimonialsData.length) % testimonialsData.length);
      }
    }
    setTouchStartX(null);
  };

  return (
    <section
      ref={sectionRef}
      id="client-proof"
      data-navbar-theme="light"
      className="w-full min-h-[90svh] py-16 md:py-24 bg-[#F3F0EA] text-[#111111] border-t border-b border-black/10 relative overflow-hidden isolate font-intertight flex flex-col justify-between select-none"
      style={{ backgroundColor: '#F3F0EA' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* SUBTLE FINE NOISE OVERLAY */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-4 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:18px_18px]" />

      {/* TOP ARCHITECTURAL METADATA ROW */}
      <Container className="relative z-20 pt-2">
        <div className="w-full border-t border-black/15 pt-4 flex items-center justify-between font-intertight font-bold text-xs uppercase tracking-[0.14em] text-[#111111]">
          <div className="flex items-center gap-2.5">
            <span className="text-[#FF4B00]">07</span>
            <span className="text-black/30">/</span>
            <span>CLIENT PROOF</span>
          </div>
          <span className="text-black/50 tracking-[0.2em] hidden sm:inline-block">
            EDITORIAL CLIENT FOCUS SLIDER // TIRUPPUR STUDIO
          </span>
        </div>
      </Container>

      {/* MAIN CONTENT: ASYMMETRICAL 12-COLUMN EDITORIAL FOCUS SLIDER */}
      <Container className="relative z-20 my-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: ACTIVE FEATURED CLIENT TESTIMONIAL (COLUMNS 1–7 / ~60%) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* EYEBROW */}
            <div className="font-intertight font-extrabold text-[11px] uppercase tracking-[0.22em] text-[#FF4B00]">
              07 // WHAT CLIENTS NOTICE
            </div>

            {/* MAIN HEADLINE */}
            <h2 className="font-intertight font-extrabold text-4xl sm:text-6xl uppercase text-[#111111] leading-[0.90] tracking-[-0.04em]">
              WHAT CLIENTS <br />
              <span className="text-[#FF4B00]">NOTICE.</span>
            </h2>

            {/* ANIMATED FEATURED QUOTE & IDENTITY CONTAINER */}
            <div ref={quoteWrapperRef} className="space-y-6 pt-2 min-h-[260px] flex flex-col justify-between">
              
              {/* OVERSIZED EDITORIAL QUOTE MARK & QUOTE TEXT */}
              <div>
                <div className="font-editorial text-6xl sm:text-8xl text-[#FF4B00] leading-none select-none pointer-events-none -mb-6 opacity-80">
                  “
                </div>
                <blockquote className="font-editorial italic text-2xl sm:text-4xl lg:text-[42px] leading-[1.14] text-[#111111] max-w-[640px]">
                  "{activeItem.quote}"
                </blockquote>
              </div>

              {/* CLIENT IDENTITY BADGE & SERVICE METADATA */}
              <div className="pt-4 flex items-center gap-4 border-t border-black/10">
                {/* INITIAL AVATAR CIRCLE */}
                <div className="w-12 h-12 rounded-full bg-[#111111] text-white border-2 border-[#FF4B00] flex items-center justify-center font-intertight font-black text-xs tracking-wider shadow-lg shrink-0">
                  {activeItem.avatar}
                </div>

                {/* CLIENT DETAILS */}
                <div className="font-intertight">
                  <div className="font-extrabold text-sm text-[#111111] uppercase tracking-wider flex items-center gap-2">
                    <span>{activeItem.name}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B00]" />
                    <span className="text-black/50 text-xs font-semibold">{activeItem.vehicle}</span>
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#FF4B00] mt-0.5">
                    {activeItem.service}
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: INTERACTIVE CLIENT NAVIGATION LIST (COLUMNS 8–12 / ~40%) */}
          <div className="lg:col-span-5 lg:border-l border-black/15 lg:pl-10 space-y-4">
            <div className="text-[10px] font-intertight font-extrabold uppercase tracking-widest text-black/40 pb-2">
              CLIENT STORIES // SELECT TO FEATURE
            </div>

            <div className="space-y-3">
              {testimonialsData.map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-current={isActive ? 'true' : undefined}
                    onClick={() => selectTestimonial(idx)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 border ${
                      isActive
                        ? 'bg-black/5 border-[#FF4B00]/40 shadow-sm translate-x-1.5'
                        : 'border-transparent hover:bg-black/5 text-black/60'
                    }`}
                  >
                    <div className="flex items-center justify-between font-intertight mb-1">
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-extrabold ${isActive ? 'text-[#FF4B00]' : 'text-black/30'}`}>
                          {item.number}
                        </span>
                        <span className={`font-extrabold text-sm uppercase tracking-wider ${isActive ? 'text-[#111111]' : 'text-black/60'}`}>
                          {item.name}
                        </span>
                      </div>

                      <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">
                        {item.vehicle}
                      </span>
                    </div>

                    {/* ANIMATED PROGRESS BAR LINE FOR ACTIVE ITEM */}
                    {isActive && (
                      <div className="w-full h-[2px] bg-black/10 rounded-full overflow-hidden mt-2">
                        <div
                          key={`progress-${activeIndex}`}
                          className="h-full bg-[#FF4B00] animate-progress-fill"
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

          </div>

        </div>
      </Container>

      {/* BOTTOM TECHNICAL DIRECTION FOOTER */}
      <Container className="relative z-20 pb-2">
        <div className="w-full border-t border-black/15 pt-4 flex items-center justify-between font-intertight text-[10px] font-bold text-black/50 uppercase tracking-widest">
          <span>TMR / CLIENT EXPERIENCE / TIRUPPUR</span>
          <span>AUTHENTIC CLIENT VERIFICATION</span>
        </div>
      </Container>
    </section>
  );
};
