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

  if (isVisible && progress >= 0.00 && progress <= 1.00) {
    visibilityStyle = 'visible';
    if (progress < 0.03) {
      opacity = progress / 0.03; // Smooth fade-in on Approach top-left entry
    } else if (progress > 0.96) {
      opacity = Math.max(0, 1 - (progress - 0.96) / 0.04); // Smooth fade-out at Process bottom-right exit
    } else {
      opacity = 1.0;
    }
  }

  // --- CONTINUOUS WAYPOINT TRAJECTORY (TOP-LEFT -> CENTER HERO -> BOTTOM-RIGHT) ---
  // Waypoint A (0.00): x = 8vw,  y = 18vh, scale = 0.68 (Top-Left Entry)
  // Waypoint B (0.15): x = 24vw, y = 30vh, scale = 0.88 (Approach Movement)
  // Waypoint C (0.30): x = 50vw, y = 45vh, scale = 1.28 (CENTER HERO PRODUCT MOMENT)
  // Waypoint D (0.38): x = 66vw, y = 38vh, scale = 1.00 (Approach Exit)
  // Waypoint E (0.45): x = 72vw, y = 45vh, scale = 0.94 (PROCESS ENTRY BOUNDARY HANDOFF)
  // Waypoint F (0.65): x = 80vw, y = 58vh, scale = 0.88 (Process Midpoint)
  // Waypoint G (0.85): x = 87vw, y = 68vh, scale = 0.80 (Process Late)
  // Waypoint H (1.00): x = 91vw, y = 80vh, scale = 0.70 (Process Bottom-Right Final)

  let xPos = 8; // in vw
  let yPos = 18; // in vh
  let scale = 0.68;
  let rotation = -5;

  if (progress <= 0.15) {
    const t = progress / 0.15;
    xPos = 8 + t * 16; // 8vw -> 24vw
    yPos = 18 + t * 12; // 18vh -> 30vh
    scale = 0.68 + t * 0.20; // 0.68 -> 0.88
    rotation = -5 + t * 3; // -5deg -> -2deg
  } else if (progress <= 0.30) {
    const t = (progress - 0.15) / 0.15;
    xPos = 24 + t * 26; // 24vw -> 50vw
    yPos = 30 + t * 15; // 30vh -> 45vh
    scale = 0.88 + t * 0.40; // 0.88 -> 1.28 (PEAK CENTER HERO MOMENT)
    rotation = -2 + t * 4; // -2deg -> +2deg
  } else if (progress <= 0.38) {
    const t = (progress - 0.30) / 0.08;
    xPos = 50 + t * 16; // 50vw -> 66vw
    yPos = 45 - t * 7; // 45vh -> 38vh
    scale = 1.28 - t * 0.28; // 1.28 -> 1.00
    rotation = 2 - t * 2; // +2deg -> 0deg
  } else if (progress <= 0.45) {
    const t = (progress - 0.38) / 0.07;
    xPos = 66 + t * 6; // 66vw -> 72vw (Seamless handoff across section boundary)
    yPos = 38 + t * 7; // 38vh -> 45vh
    scale = 1.00 - t * 0.06; // 1.00 -> 0.94
    rotation = 0 - t * 1; // 0deg -> -1deg
  } else if (progress <= 0.65) {
    const t = (progress - 0.45) / 0.20;
    xPos = 72 + t * 8; // 72vw -> 80vw (Process Midpoint)
    yPos = 45 + t * 13; // 45vh -> 58vh
    scale = 0.94 - t * 0.06; // 0.94 -> 0.88
    rotation = -1 + t * 2; // -1deg -> +1deg
  } else if (progress <= 0.85) {
    const t = (progress - 0.65) / 0.20;
    xPos = 80 + t * 7; // 80vw -> 87vw (Process Late)
    yPos = 58 + t * 10; // 58vh -> 68vh
    scale = 0.88 - t * 0.08; // 0.88 -> 0.80
    rotation = 1 - t * 3; // +1deg -> -2deg
  } else {
    const t = Math.min(1.0, (progress - 0.85) / 0.15);
    xPos = 87 + t * 4; // 87vw -> 91vw (Process Bottom-Right Final)
    yPos = 68 + t * 12; // 68vh -> 80vh
    scale = 0.80 - t * 0.10; // 0.80 -> 0.70
    rotation = -2 + t * 2; // -2deg -> 0deg
  }

  const content = (
    <div
      data-travelling-object="true"
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[120] transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${xPos}vw, ${yPos}vh, 0) rotate(${rotation}deg) scale(${scale})`,
        opacity: opacity,
        visibility: visibilityStyle,
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
