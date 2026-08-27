import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    // 404 Page Robots Meta (NOINDEX)
    document.title = "404 — Page Not Found | TMR Car Care";

    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', 'noindex, follow');

    // Reduced motion check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full min-h-[90vh] bg-[#080808] text-[#F1EEE7] font-manrope flex flex-col justify-center items-center relative overflow-hidden text-center px-5 py-20 selection:bg-[#FF4B00] selection:text-white">
      
      {/* MOUSE-FOLLOWING SUBTLE ORANGE RADIAL GLOW & DARK VIGNETTE */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle 450px at ${mousePos.x}% ${mousePos.y}%, rgba(255, 75, 0, 0.08), transparent 70%), radial-gradient(circle at center, rgba(20, 20, 20, 0.6) 0%, rgba(8, 8, 8, 1) 90%)`,
        }}
      />

      {/* FINE NOISE TEXTURE OVERLAY */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        
        {/* SMALL STUDIO BADGE */}
        <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#FF4B00]">
          <span>TMR CAR CARE</span>
          <span>•</span>
          <span>LOCATION ERROR</span>
        </div>

        {/* HUGE 404 DISPLAY TYPOGRAPHY */}
        <div className="relative select-none group py-2">
          <h1 className="font-manrope font-black text-8xl sm:text-[140px] lg:text-[180px] text-white leading-none tracking-tighter transition-transform duration-300 group-hover:scale-[1.02]">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-8xl sm:text-[140px] lg:text-[180px] font-black text-[#FF4B00]/20 blur-sm">
            404
          </div>
        </div>

        {/* HEADLINE WITH EDITORIAL ITALIC HIGHLIGHT */}
        <h2 className="font-manrope font-extrabold text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
          THIS <span className="text-[#FF4B00] italic font-serif font-normal lowercase pr-1">road</span> DOESN&apos;T EXIST.
        </h2>

        {/* SUPPORTING STATEMENT */}
        <p className="text-sm sm:text-base text-[#D8D8D5]/80 max-w-md mx-auto leading-relaxed font-medium">
          The page you are looking for may have moved, or the web address may be incorrect.
        </p>

        {/* NON-BOXY ACTION LINKS */}
        <div className="flex flex-wrap justify-center items-center gap-8 pt-8">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white border-b-2 border-[#FF4B00] pb-1 hover:text-[#FF4B00] transition-colors"
          >
            <span>BACK TO HOME</span>
            <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
          </Link>

          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#A0A09C] border-b-2 border-white/20 pb-1 hover:text-white hover:border-white transition-colors"
          >
            <span>EXPLORE SERVICES</span>
            <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;
