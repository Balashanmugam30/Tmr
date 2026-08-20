import React, { useState, useRef } from 'react';
import { Container } from '@/components/Container';

export const TransformationSection: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  return (
    <section className="w-full py-24 md:py-section-gap bg-tmr-warmwhite overflow-hidden" id="transformation-slider">
      <Container>
        <div className="max-w-3xl mx-auto mb-12 text-center space-y-3">
          <h2 className="font-manrope font-black text-3xl sm:text-5xl uppercase tracking-tighter text-tmr-softblack">
            THE TRANSFORMATION
          </h2>
          <p className="font-manrope text-sm md:text-base text-tmr-muted">
            Drag the slider to reveal the transformation.
          </p>
        </div>

        {/* Before / After Drag Container */}
        <div
          ref={containerRef}
          onMouseDown={() => (isDragging.current = true)}
          onMouseUp={() => (isDragging.current = false)}
          onMouseLeave={() => (isDragging.current = false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full h-[60vh] sm:h-[70vh] min-h-[450px] cursor-ew-resize select-none overflow-hidden rounded-tmr shadow-2xl bg-tmr-black border border-tmr-concrete"
        >
          {/* Before Image (Background Layer) */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwsqfsC1bD3kYsC5GE6phmjZaTei3MTDj4y78_DBvQeTUSsWRgPtcry120UWz8DtEMb4Y7O59xSoVj1_5keYGuUVvA4s6PLsKjUOGKnQCfsLqpye0jUXRh1ZOQQgMnNuFSrLOGW3TFHASN-fgJL0w95s4ujWxzXpZUQerxQQBprFLzZ5RKgCyNHXPOLzajN1ue5xQ8LhST2yzEImx_G_d1XTGzUhpxk_9hcoSESCRKkXy6x7W5GVr5"
            alt="Before Car Detail Untouched"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-6 right-6 bg-tmr-softblack/90 text-white px-4 py-2 text-xs font-manrope font-bold uppercase tracking-widest z-10 border border-white/10 backdrop-blur-sm">
            Before / Untouched
          </div>

          {/* After Image (Clipped Reveal Layer) */}
          <div
            style={{ width: `${sliderPos}%` }}
            className="absolute inset-0 h-full overflow-hidden border-r-2 border-tmr-orange transition-all duration-75"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFT7j6VaSQ3P6MJt62TKxH_tg0GxLxrORpyqoyHw1eCUewRZ6ZHsUjwXiIF0eIQTwCJDRHVXyXsXReHqwWRBeWfGmywGxShfKrtqXLsekmw2m6X-VOyvV1v__kb9ErU9lTkFfUV9a0jwSoipXDwgr3bUSJFomPOb-NciYmiIp3QGS2gSP5SIC96aPDQi-NnDSG1TTHU4rtbFEGR348Rt6Y3LdktBbZ5a0z-TsUiyNyv_-EQK6DNRJA"
              alt="After Paint Correction Flawless Finish"
              className="absolute inset-0 w-[100vw] h-full object-cover max-w-none"
            />
            <div className="absolute bottom-6 left-6 bg-tmr-softblack/90 text-white px-4 py-2 text-xs font-manrope font-bold uppercase tracking-widest z-10 border border-white/10 backdrop-blur-sm">
              After / Flawless
            </div>
          </div>

          {/* Drag Handle Bar */}
          <div
            style={{ left: `${sliderPos}%` }}
            className="absolute top-0 bottom-0 -translate-x-1/2 w-1 bg-tmr-orange z-30 pointer-events-none"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-tmr-orange rounded-full flex items-center justify-center text-white shadow-2xl border-2 border-white">
              <span className="text-base font-bold">⇄</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
