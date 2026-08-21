import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Container } from '@/components/Container';
import { PpfInteractiveSurface } from './PpfInteractiveSurface';

export const PpfSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);
  
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [pointerPos, setPointerPos] = useState<{ x: number; y: number }>({ x: 0.5, y: 0.5 });
  const [velocity, setVelocity] = useState<number>(0);
  
  const lastMouseRef = useRef<{ x: number; y: number; time: number }>({ x: 0.5, y: 0.5, time: 0 });

  useEffect(() => {
    if (!sectionRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    // ONE-TIME ELEGANT MOUNT ENTRANCE ANIMATION (RUNS ONCE ON MOUNT, NOT SCROLLTRIGGER)
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (textGroupRef.current) {
        const textItems = textGroupRef.current.querySelectorAll('.ppf-anim-item');
        tl.fromTo(
          textItems,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.75, stagger: 0.09 },
          0.1
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Pointer interaction captured across the entire section viewport
  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setPointerPos({ x, y });

    const now = performance.now();
    const dt = Math.max(1, now - lastMouseRef.current.time);
    const dx = x - lastMouseRef.current.x;
    const dy = y - lastMouseRef.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const speed = dist / dt;

    setVelocity((prev) => Math.min(1.0, prev * 0.9 + speed * 10.0));
    lastMouseRef.current = { x, y, time: now };
  };

  return (
    <section
      ref={sectionRef}
      id="ppf-protection"
      className="relative w-full min-h-[100svh] h-[100svh] bg-[#070809] text-[#F5F4EF] overflow-hidden border-t border-b border-white/10 selection:bg-[#FF4B00] selection:text-white flex flex-col justify-center py-8 lg:py-12 isolate cursor-crosshair"
      style={{ backgroundColor: '#070809' }}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onPointerMove={handlePointerMove}
    >
      {/* 1. FULLVIEWPORT WEBGL INTERACTIVE PPF MATERIAL SURFACE (BACKGROUND) */}
      <PpfInteractiveSurface
        imageSrc="/images/ppf/ppf-surface.webp"
        isHovered={isHovered}
        pointerPos={pointerPos}
        velocity={velocity}
      />

      {/* DARK EDITORIAL GRADIENT OVERLAYS FOR CRISP READABILITY & DEPTH */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070809] via-[#070809]/85 to-transparent pointer-events-none z-10 w-full lg:w-8/12" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070809] via-transparent to-[#070809]/60 pointer-events-none z-10" />

      {/* 2. MAIN EDITORIAL COMPOSITION (ANCHORED IN LOWER-LEFT VIEWPORT) */}
      <Container className="relative z-20 my-auto py-6 lg:py-8">
        <div ref={textGroupRef} className="max-w-[560px] space-y-6">
          
          {/* MAIN HEADLINE */}
          <h2 className="ppf-anim-item font-intertight font-extrabold text-5xl sm:text-7xl lg:text-[100px] uppercase text-white leading-[0.88] tracking-[-0.045em]">
            THE INVISIBLE <br />
            SHIELD<span className="text-[#FF4B00]">.</span>
          </h2>

          {/* SHORT EDITORIAL STATEMENT */}
          <p className="ppf-anim-item font-editorial text-xl sm:text-2xl lg:text-3xl italic text-white/90 leading-tight max-w-[480px]">
            "Protection you don't notice. Performance that stays."
          </p>

          {/* SHORT BODY COPY */}
          <p className="ppf-anim-item font-intertight text-xs sm:text-sm text-white/65 leading-relaxed max-w-[420px]">
            A transparent protection layer engineered to preserve the original finish against road debris, scratches and environmental exposure.
          </p>

          {/* EDITORIAL CTA GROUP */}
          <div className="ppf-anim-item pt-4 flex items-center gap-8 font-intertight">
            <Link
              to="/services"
              aria-label="Explore TMR self-healing paint protection film packages"
              className="group inline-flex flex-col gap-1 text-xs font-extrabold uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors"
            >
              <span className="inline-flex items-center gap-2">
                <span>EXPLORE PPF</span>
                <span className="text-[#FF4B00] group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
              </span>
              <span className="h-[1.5px] w-10 group-hover:w-full bg-[#FF4B00] transition-all duration-300" />
            </Link>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
            >
              WHATSAPP TMR
            </a>
          </div>

        </div>
      </Container>
    </section>
  );
};
