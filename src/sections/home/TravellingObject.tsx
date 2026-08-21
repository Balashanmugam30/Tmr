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

  // Master Progress Motion Mapping (0.00 to 1.00):
  // Approach: 0.00 - 0.50 | Boundary Handoff: 0.50 | Process Theatre: 0.50 - 1.00
  
  // 1. X Position (from -25vw offscreen left -> 48vw boundary handoff -> 115vw exit right)
  let xPct = -25;
  if (progress <= 0.15) {
    xPct = -25 + (progress / 0.15) * 20; // -25vw -> -5vw
  } else if (progress <= 0.30) {
    xPct = -5 + ((progress - 0.15) / 0.15) * 25; // -5vw -> 20vw
  } else if (progress <= 0.45) {
    xPct = 20 + ((progress - 0.30) / 0.15) * 18; // 20vw -> 38vw
  } else if (progress <= 0.50) {
    xPct = 38 + ((progress - 0.45) / 0.05) * 10; // 38vw -> 48vw (seamless boundary crossing)
  } else if (progress <= 0.65) {
    xPct = 48 + ((progress - 0.50) / 0.15) * 12; // 48vw -> 60vw
  } else if (progress <= 0.80) {
    xPct = 60 + ((progress - 0.65) / 0.15) * 16; // 60vw -> 76vw (Transform polishing phase)
  } else if (progress <= 0.95) {
    xPct = 76 + ((progress - 0.80) / 0.15) * 14; // 76vw -> 90vw (Reveal phase)
  } else {
    xPct = 90 + ((progress - 0.95) / 0.05) * 25; // 90vw -> 115vw (Exit offscreen right)
  }

  // 2. Y Offset Curve (+20px -> -30px)
  const yOffset = 20 - progress * 50 + Math.sin(progress * Math.PI * 2) * 12;

  // 3. Rotation (-3deg -> 0deg -> +3deg)
  const rotation = -3 + progress * 6 + Math.cos(progress * Math.PI * 2) * 2;

  // 4. Scale (0.90 -> 1.0 -> 1.10 at Transform -> 0.95 exit)
  let scale = 0.90;
  if (progress <= 0.50) {
    scale = 0.90 + (progress / 0.50) * 0.10; // 0.90 -> 1.0
  } else if (progress <= 0.80) {
    // Peak scale (1.10) during Transform stage
    const norm = (progress - 0.50) / 0.30;
    scale = 1.00 + Math.sin(norm * Math.PI) * 0.10;
  } else {
    scale = 1.00 - ((progress - 0.80) / 0.20) * 0.10; // 1.00 -> 0.90 exit
  }

  // 5. Opacity (0.00 -> 1.0 -> 0.0 at final exit)
  let opacity = 1;
  if (progress < 0.02) {
    opacity = progress / 0.02;
  } else if (progress > 0.95) {
    opacity = Math.max(0, 1 - (progress - 0.95) / 0.05);
  }

  return (
    <div
      className="fixed top-[42vh] left-0 pointer-events-none z-30 transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${xPct}vw, ${yOffset}px, 0) rotate(${rotation}deg) scale(${scale})`,
        opacity: opacity,
      }}
    >
      <div className="relative max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[580px]">
        {/* Soft realistic specular drop shadow */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-black/60 blur-2xl rounded-full scale-y-50 pointer-events-none" />
        
        {/* Isolated Transparent Polisher Object Image */}
        <img
          src="/images/process/polisher-object.webp"
          alt="TMR Dual-Action Detailing Polisher Tool"
          className="w-full h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
        />

        {/* LED Status Glow Indicator on Polisher Handle */}
        <div className="absolute top-[38%] left-[28%] w-2.5 h-2.5 rounded-full bg-[#FF4B00] animate-pulse shadow-[0_0_12px_#FF4B00]" />
      </div>
    </div>
  );
};
