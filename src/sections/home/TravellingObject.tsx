import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TravellingObjectProps {
  containerRef?: React.RefObject<HTMLDivElement>;
  progress?: number;
  isVisible?: boolean;
  isReducedMotion?: boolean;
}

export const TravellingObject: React.FC<TravellingObjectProps> = ({
  containerRef,
  isReducedMotion = false,
}) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isReducedMotion || !mounted || !containerRef?.current) return;

    const applyProgress = (progress: number) => {
      const el = domRef.current;
      if (!el) return;

      if (progress <= 0 || progress >= 1) {
        el.style.opacity = '0';
        el.style.visibility = 'hidden';
        return;
      }

      el.style.visibility = 'visible';
      let opacity = 1.0;
      if (progress < 0.03) {
        opacity = progress / 0.03;
      } else if (progress > 0.96) {
        opacity = Math.max(0, 1 - (progress - 0.96) / 0.04);
      }
      el.style.opacity = String(opacity);

      // Continuous Waypoint Trajectory (Top-Left -> Center Hero -> Bottom-Right)
      let xPos = 8;
      let yPos = 18;
      let scale = 0.68;
      let rotation = -5;

      if (progress <= 0.15) {
        const t = progress / 0.15;
        xPos = 8 + t * 16;
        yPos = 18 + t * 12;
        scale = 0.68 + t * 0.20;
        rotation = -5 + t * 3;
      } else if (progress <= 0.30) {
        const t = (progress - 0.15) / 0.15;
        xPos = 24 + t * 26;
        yPos = 30 + t * 15;
        scale = 0.88 + t * 0.40;
        rotation = -2 + t * 4;
      } else if (progress <= 0.38) {
        const t = (progress - 0.30) / 0.08;
        xPos = 50 + t * 16;
        yPos = 45 - t * 7;
        scale = 1.28 - t * 0.28;
        rotation = 2 - t * 2;
      } else if (progress <= 0.45) {
        const t = (progress - 0.38) / 0.07;
        xPos = 66 + t * 6;
        yPos = 38 + t * 7;
        scale = 1.00 - t * 0.06;
        rotation = 0 - t * 1;
      } else if (progress <= 0.65) {
        const t = (progress - 0.45) / 0.20;
        xPos = 72 + t * 8;
        yPos = 45 + t * 13;
        scale = 0.94 - t * 0.06;
        rotation = -1 + t * 2;
      } else if (progress <= 0.85) {
        const t = (progress - 0.65) / 0.20;
        xPos = 80 + t * 7;
        yPos = 58 + t * 10;
        scale = 0.88 - t * 0.08;
        rotation = 1 - t * 3;
      } else {
        const t = Math.min(1.0, (progress - 0.85) / 0.15);
        xPos = 87 + t * 4;
        yPos = 68 + t * 12;
        scale = 0.80 - t * 0.10;
        rotation = -2 + t * 2;
      }

      el.style.transform = `translate3d(${xPos}vw, ${yPos}vh, 0) rotate(${rotation}deg) scale(${scale})`;
    };

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 0.1,
        onUpdate: (self) => {
          applyProgress(self.progress);
        },
        onLeaveBack: () => {
          if (domRef.current) {
            domRef.current.style.opacity = '0';
            domRef.current.style.visibility = 'hidden';
          }
        },
        onLeave: () => {
          if (domRef.current) {
            domRef.current.style.opacity = '0';
            domRef.current.style.visibility = 'hidden';
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [mounted, isReducedMotion, containerRef]);

  if (isReducedMotion || !mounted) {
    return null;
  }

  const content = (
    <div
      ref={domRef}
      data-travelling-object="true"
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[120] transition-transform duration-75 ease-out"
      style={{
        opacity: 0,
        visibility: 'hidden',
        transform: 'translate3d(8vw, 18vh, 0) rotate(-5deg) scale(0.68)',
      }}
    >
      <div className="relative max-w-[280px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[560px]">
        {/* Soft specular drop shadow layer */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-black/70 blur-2xl rounded-full scale-y-50 pointer-events-none" />
        
        {/* Isolated Transparent Polisher Object Image Element */}
        <picture>
          <source srcSet="/images/process/polisher-object.webp" type="image/webp" />
          <img
            src="/images/process/polisher-object.png"
            alt=""
            draggable={false}
            className="w-full h-auto object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]"
          />
        </picture>

        {/* LED Status Glow Indicator on Polisher Handle */}
        <div className="absolute top-[38%] left-[28%] w-2.5 h-2.5 rounded-full bg-[#FF4B00] animate-pulse shadow-[0_0_14px_#FF4B00]" />
      </div>
    </div>
  );

  return createPortal(content, document.body);
};
