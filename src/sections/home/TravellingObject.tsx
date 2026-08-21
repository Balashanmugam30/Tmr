import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface TravellingObjectProps {
  progress: number; // Master progress from 0.00 (start of Approach) to 1.00 (end of Process Theatre)
  isReducedMotion?: boolean;
}

export const TravellingObject: React.FC<TravellingObjectProps> = ({
  progress,
  isReducedMotion = false,
}) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (isReducedMotion || !mounted) {
    return null;
  }

  // Master Progress Trajectory Mapping (0.00 to 1.00):
  // Approach: 0.00 - 0.45 | Boundary Crossing: 0.45 - 0.55 | Process Theatre: 0.55 - 1.00
  
  // 1. X Position: -20vw (left edge of Approach) -> 48vw (boundary crossing) -> 115vw (exit right)
  let xPct = -20;
  if (progress <= 0.15) {
    xPct = -20 + (progress / 0.15) * 15; // -20vw -> -5vw
  } else if (progress <= 0.30) {
    xPct = -5 + ((progress - 0.15) / 0.15) * 23; // -5vw -> 18vw
  } else if (progress <= 0.45) {
    xPct = 18 + ((progress - 0.30) / 0.15) * 20; // 18vw -> 38vw
  } else if (progress <= 0.55) {
    xPct = 38 + ((progress - 0.45) / 0.10) * 12; // 38vw -> 50vw (seamless handoff across section boundary)
  } else if (progress <= 0.70) {
    xPct = 50 + ((progress - 0.55) / 0.15) * 15; // 50vw -> 65vw (Inspect stage)
  } else if (progress <= 0.85) {
    xPct = 65 + ((progress - 0.70) / 0.15) * 15; // 65vw -> 80vw (Transform stage)
  } else if (progress <= 0.95) {
    xPct = 80 + ((progress - 0.85) / 0.10) * 15; // 80vw -> 95vw (Reveal stage)
  } else {
    xPct = 95 + ((progress - 0.95) / 0.05) * 20; // 95vw -> 115vw (Exit offscreen right)
  }

  // 2. Y Offset Curve (+15px -> -25px)
  const yOffset = 15 - progress * 40 + Math.sin(progress * Math.PI * 2) * 10;

  // 3. Rotation (-3deg -> 0deg -> +3deg)
  const rotation = -3 + progress * 6 + Math.cos(progress * Math.PI * 2) * 2;

  // 4. Scale (0.90 -> 1.0 -> 1.08 peak during Transform polishing phase -> 0.90 exit)
  let scale = 0.90;
  if (progress <= 0.50) {
    scale = 0.90 + (progress / 0.50) * 0.10;
  } else if (progress <= 0.85) {
    const norm = (progress - 0.50) / 0.35;
    scale = 1.00 + Math.sin(norm * Math.PI) * 0.08;
  } else {
    scale = 1.00 - ((progress - 0.85) / 0.15) * 0.10;
  }

  // 5. Opacity (Visible on entry, remains 1.0 through Approach + Process, fades out at final exit)
  let opacity = 1.0;
  if (progress < 0.01) {
    opacity = 0.4; // Visually present peek for initial DOM verification
  } else if (progress > 0.96) {
    opacity = Math.max(0, 1 - (progress - 0.96) / 0.04);
  }

  const content = (
    <div
      data-travelling-object="true"
      aria-hidden="true"
      className="fixed top-[42vh] left-0 pointer-events-none z-[120] transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${xPct}vw, ${yOffset}px, 0) rotate(${rotation}deg) scale(${scale})`,
        opacity: opacity,
        visibility: 'visible',
      }}
    >
      <div className="relative max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[560px]">
        {/* Soft specular drop shadow layer */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-black/60 blur-2xl rounded-full scale-y-50 pointer-events-none" />
        
        {/* Isolated Transparent Polisher Object Image Element */}
        <picture>
          <source srcSet="/images/process/polisher-object.webp" type="image/webp" />
          <img
            src="/images/process/polisher-object.png"
            alt=""
            draggable={false}
            className="w-full h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
          />
        </picture>

        {/* LED Status Glow Indicator on Polisher Handle */}
        <div className="absolute top-[38%] left-[28%] w-2.5 h-2.5 rounded-full bg-[#FF4B00] animate-pulse shadow-[0_0_12px_#FF4B00]" />
      </div>
    </div>
  );

  return createPortal(content, document.body);
};
