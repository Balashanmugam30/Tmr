import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [progressWidth, setProgressWidth] = useState<number>(0);

  useEffect(() => {
    // Reduced motion check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      window.scrollTo(0, 0);
      return;
    }

    // Scroll to top immediately on route change
    window.scrollTo(0, 0);

    // Trigger fast page transition sequence
    setIsTransitioning(true);
    setProgressWidth(15);

    const midTimer = setTimeout(() => {
      setProgressWidth(85);
    }, 120);

    const endTimer = setTimeout(() => {
      setProgressWidth(100);
    }, 300);

    const hideTimer = setTimeout(() => {
      setIsTransitioning(false);
      setProgressWidth(0);
    }, 480);

    return () => {
      clearTimeout(midTimer);
      clearTimeout(endTimer);
      clearTimeout(hideTimer);
    };
  }, [location.pathname]);

  return (
    <>
      {/* GLOBAL FULL-VIEWPORT LOADING / TRANSITION OVERLAY */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-[9999] bg-[#090909] flex flex-col items-center justify-center transition-opacity duration-300 pointer-events-none ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* SUBTLE VIGNETTE */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#090909]/60 to-[#040404]" />

        <div className="relative z-10 flex flex-col items-center space-y-6">
          {/* COMPACT TMR WORDMARK / EMBLEM */}
          <div className="flex items-center gap-2 select-none">
            <span className="font-manrope font-black text-2xl tracking-[0.25em] text-white uppercase">
              TMR
            </span>
            <span className="w-1.5 h-1.5 bg-[#FF4B00] rounded-full" />
            <span className="font-manrope font-extrabold text-xs tracking-[0.2em] text-[#A0A09C] uppercase">
              CAR CARE
            </span>
          </div>

          {/* THIN TMR ORANGE PROGRESS TRACK */}
          <div className="w-32 sm:w-44 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-[#FF4B00] transition-all duration-300 ease-out"
              style={{ width: `${progressWidth}%` }}
            />
          </div>

          {/* SUBTLE TAGLINE */}
          <span className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-[#888885]">
            PRECISION / PROTECTION / PERFECTION
          </span>
        </div>
      </div>

      {/* PAGE CONTENT CONTAINER */}
      <div>{children}</div>
    </>
  );
};

export default PageTransition;
