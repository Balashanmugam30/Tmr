import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface TravellingObjectProps {
  progress: number; // Master progress from 0.00 (start of Approach) to 1.00 (end of Process Theatre)
  isVisible: boolean; // True only when user is within Approach -> Process Theatre scroll territory
  isReducedMotion?: boolean;
}

export const TravellingObject: React.FC<TravellingObjectProps> = ({
  progress,
  isVisible,
  isReducedMotion = false,
}) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (isReducedMotion || !mounted) {
    return null;
  }

  // --- OBJECT LIFECYCLE & VISIBILITY RULES ---
  // Object MUST NOT be visible over Hero or Manifesto
  let opacity = 0;
  let visibilityStyle: 'visible' | 'hidden' = 'hidden';

  if (isVisible && progress > 0.00 && progress < 0.99) {
    visibilityStyle = 'visible';
    if (progress < 0.03) {
      opacity = (progress - 0.00) / 0.03; // Smooth fade-in on Approach entry
    } else if (progress > 0.95) {
      opacity = Math.max(0, 1 - (progress - 0.95) / 0.04); // Smooth fade-out at final Reveal exit
    } else {
      opacity = 1.0;
    }
  }

  // --- REPROPORTIONED TRAJECTORY FOR 115VH APPROACH + 500VH PROCESS THEATRE ---
  // Approach: 0.00 - 0.19 | Boundary Crossing: 0.19 - 0.24 | Process Theatre: 0.24 - 1.00

  let xPct = -30;
  let yOffset = 50;
  let scale = 0.80;
  let rotation = -4;

  if (progress <= 0.06) {
    const t = progress / 0.06;
    xPct = -30 + t * 25; // -30vw -> -5vw
    yOffset = 50 - t * 40; // +50px -> +10px
    scale = 0.80 + t * 0.15; // 0.80 -> 0.95
    rotation = -4 + t * 3; // -4deg -> -1deg
  } else if (progress <= 0.14) {
    const t = (progress - 0.06) / 0.08;
    xPct = -5 + t * 20; // -5vw -> 15vw
    yOffset = 10 - t * 45; // +10px -> -35px
    scale = 0.95 + t * 0.35; // 0.95 -> 1.30 (CENTRAL HERO MOMENT IN APPROACH)
    rotation = -1 + t * 3; // -1deg -> +2deg
  } else if (progress <= 0.19) {
    const t = (progress - 0.14) / 0.05;
    xPct = 15 + t * 20; // 15vw -> 35vw
    yOffset = -35 + t * 30; // -35px -> -5px
    scale = 1.30 - t * 0.18; // 1.30 -> 1.12
    rotation = 2 - t * 2; // +2deg -> 0deg
  } else if (progress <= 0.24) {
    const t = (progress - 0.19) / 0.05;
    xPct = 35 + t * 17; // 35vw -> 52vw (Seamless handoff across boundary)
    yOffset = -5 + t * 25; // -5px -> +20px
    scale = 1.12 - t * 0.10; // 1.12 -> 1.02
    rotation = 0 - t * 1; // 0deg -> -1deg
  } else if (progress <= 0.45) {
    const t = (progress - 0.24) / 0.21;
    xPct = 52 + t * 10; // 52vw -> 62vw (Inspect stage)
    yOffset = 20 - t * 15; // +20px -> +5px
    scale = 1.02 + t * 0.03; // 1.02 -> 1.05
    rotation = -1 + t * 2; // -1deg -> +1deg
  } else if (progress <= 0.75) {
    const t = (progress - 0.45) / 0.30;
    xPct = 62 + t * 14; // 62vw -> 76vw (Transform stage)
    yOffset = 5 - t * 30; // +5px -> -25px
    scale = 1.05 + t * 0.03; // 1.05 -> 1.08
    rotation = 1 - t * 2; // +1deg -> -1deg
  } else if (progress <= 0.92) {
    const t = (progress - 0.75) / 0.17;
    xPct = 76 + t * 16; // 76vw -> 92vw (Reveal stage)
    yOffset = -25 + t * 30; // -25px -> +5px
    scale = 1.08 - t * 0.13; // 1.08 -> 0.95
    rotation = -1 + t * 1; // -1deg -> 0deg
  } else {
    const t = Math.min(1.0, (progress - 0.92) / 0.08);
    xPct = 92 + t * 28; // 92vw -> 120vw (Exit offscreen right)
    yOffset = 5 - t * 10;
    scale = 0.95 - t * 0.10;
    rotation = 0;
  }

  const content = (
    <div
      data-travelling-object="true"
      aria-hidden="true"
      className="fixed top-[40vh] left-0 pointer-events-none z-[120] transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${xPct}vw, ${yOffset}px, 0) rotate(${rotation}deg) scale(${scale})`,
        opacity: opacity,
        visibility: visibilityStyle,
      }}
    >
      <div className="relative max-w-[320px] sm:max-w-[440px] md:max-w-[540px] lg:max-w-[620px]">
        {/* Soft specular drop shadow layer */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-black/65 blur-2xl rounded-full scale-y-50 pointer-events-none" />
        
        {/* Isolated Transparent Polisher Object Image Element */}
        <picture>
          <source srcSet="/images/process/polisher-object.webp" type="image/webp" />
          <img
            src="/images/process/polisher-object.png"
            alt=""
            draggable={false}
            className="w-full h-auto object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.65)]"
          />
        </picture>

        {/* LED Status Glow Indicator on Polisher Handle */}
        <div className="absolute top-[38%] left-[28%] w-2.5 h-2.5 rounded-full bg-[#FF4B00] animate-pulse shadow-[0_0_14px_#FF4B00]" />
      </div>
    </div>
  );

  return createPortal(content, document.body);
};
