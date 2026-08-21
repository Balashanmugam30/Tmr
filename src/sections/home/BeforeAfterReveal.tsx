import React, { useState, useRef, useCallback } from 'react';

interface BeforeAfterRevealProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterReveal: React.FC<BeforeAfterRevealProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'BEFORE / PAINT DEFECTS',
  afterLabel = 'AFTER / HIGH GLOSS',
}) => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // Safe release
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      const step = e.shiftKey ? 10 : 2;
      setSliderPos((prev) => Math.max(0, prev - step));
    } else if (e.key === 'ArrowRight') {
      const step = e.shiftKey ? 10 : 2;
      setSliderPos((prev) => Math.min(100, prev + step));
    }
  };

  return (
    <div
      ref={containerRef}
      role="slider"
      aria-label="Before and after paint correction comparison slider. Click anywhere or drag to reveal changes."
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(sliderPos)}
      tabIndex={0}
      className="relative w-full aspect-[16/9] max-h-[75vh] overflow-hidden rounded-xl border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.85)] cursor-ew-resize select-none touch-none bg-black group focus:outline-none focus:ring-2 focus:ring-[#FF4B00]"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onKeyDown={handleKeyDown}
    >
      {/* 1. BEFORE IMAGE (BASE UNDERLAY) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <img
          src={beforeImage}
          alt="Vehicle paint panel showing swirl marks and defects before correction"
          className="w-full h-full object-cover"
        />
        {/* BEFORE EDITORIAL LABEL */}
        <div className="absolute top-6 left-6 font-intertight">
          <span className="bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-white/70 border border-white/10">
            {beforeLabel}
          </span>
        </div>
      </div>

      {/* 2. AFTER IMAGE (CLIPPED OVERLAY) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10"
        style={{
          clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
        }}
      >
        <img
          src={afterImage}
          alt="Vehicle paint panel showing 10H specular mirror gloss after correction"
          className="w-full h-full object-cover"
        />
        {/* AFTER EDITORIAL LABEL */}
        <div className="absolute top-6 right-6 font-intertight">
          <span className="bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-[#FF4B00] border border-[#FF4B00]/30">
            {afterLabel}
          </span>
        </div>
      </div>

      {/* 3. PRECISION TMR ORANGE DIVIDER LINE */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-[#FF4B00] z-20 pointer-events-none transition-shadow duration-300 shadow-[0_0_15px_rgba(255,75,0,0.8)]"
        style={{ left: `${sliderPos}%` }}
      >
        {/* MINIMAL CIRCULAR CAMERA INSPECTION HANDLE */}
        <div
          className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/90 border-2 border-[#FF4B00] flex items-center justify-center text-white shadow-2xl transition-transform duration-300 ${
            isDragging ? 'scale-110 shadow-[0_0_25px_rgba(255,75,0,0.9)]' : 'group-hover:scale-105'
          }`}
        >
          <span className="font-intertight text-xs font-black text-[#FF4B00] tracking-tighter">
            ↔
          </span>
        </div>
      </div>

      {/* BOTTOM DRAG INSTRUCTION BAR */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none font-intertight text-[10px] font-bold uppercase tracking-widest text-white/50 z-20">
        <span>CLICK OR DRAG ANYWHERE TO INSPECT CLEARCOAT RECOVERY</span>
        <span className="text-[#FF4B00]">MULTI-STAGE CORRECTION</span>
      </div>
    </div>
  );
};
