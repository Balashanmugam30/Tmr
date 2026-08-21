import React from 'react';

interface TravellingObjectProps {
  progress: number; // Normalized master progress from 0.00 (start of Approach) to 1.00 (end of Process Theatre)
  isReducedMotion?: boolean;
}

export const TravellingObject: React.FC<TravellingObjectProps> = ({
  progress,
  isReducedMotion = false,
}) => {
  if (isReducedMotion) {
    return null;
  }

  // Calculate motion path parameters based on master progress (0.00 to 1.00)
  // Approach: 0.00 - 0.40 | Boundary: 0.40 - 0.50 | Process Theatre: 0.50 - 1.00
  
  // 1. X Position (from -25vw offscreen left -> 45vw at boundary -> 110vw offscreen right)
  let xPct = -25;
  if (progress <= 0.45) {
    // Approach phase: -25vw -> 35vw
    const norm = progress / 0.45;
    xPct = -25 + norm * 60;
  } else if (progress <= 0.85) {
    // Process Theatre active phase: 35vw -> 75vw
    const norm = (progress - 0.45) / 0.4;
    xPct = 35 + norm * 40;
  } else {
    // Final exit phase: 75vw -> 115vw
    const norm = (progress - 0.85) / 0.15;
    xPct = 75 + norm * 40;
  }

  // 2. Y Offset (Subtle curved path: +20px -> -15px -> +10px -> -20px)
  const yOffset = Math.sin(progress * Math.PI * 2) * 18;

  // 3. Rotation (-4deg -> 0deg -> +3deg -> -2deg)
  const rotation = Math.cos(progress * Math.PI * 2.5) * 4;

  // 4. Scale (0.85 -> 1.0 -> 1.06 during polishing transform phase -> 0.90 exit)
  let scale = 0.85;
  if (progress < 0.3) {
    scale = 0.85 + (progress / 0.3) * 0.15;
  } else if (progress < 0.7) {
    // Transform stage: peak scale (1.06)
    const norm = (progress - 0.3) / 0.4;
    scale = 1.0 + Math.sin(norm * Math.PI) * 0.06;
  } else {
    scale = 1.0 - ((progress - 0.7) / 0.3) * 0.15;
  }

  // 5. Opacity (0.00 -> 1.0 -> 0.0 at final exit)
  let opacity = 1;
  if (progress < 0.02) {
    opacity = progress / 0.02;
  } else if (progress > 0.94) {
    opacity = Math.max(0, 1 - (progress - 0.94) / 0.06);
  }

  return (
    <div
      className="fixed top-[45vh] left-0 pointer-events-none z-30 transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${xPct}vw, ${yOffset}px, 0) rotate(${rotation}deg) scale(${scale})`,
        opacity: opacity,
      }}
    >
      <div className="relative group max-w-[280px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[500px]">
        {/* Soft realistic specular drop shadow */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/40 blur-xl rounded-full scale-y-50 pointer-events-none" />
        
        {/* Isolated Transparent Polisher Object Image */}
        <img
          src="/images/process/polisher-object.webp"
          alt="TMR Dual-Action Detailing Polisher Object"
          className="w-full h-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)]"
        />

        {/* Subtle LED Status Indicator on Polisher Handle */}
        <div className="absolute top-[38%] left-[28%] w-2 h-2 rounded-full bg-[#FF4B00] animate-pulse shadow-[0_0_10px_#FF4B00]" />
      </div>
    </div>
  );
};
