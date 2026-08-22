import React from 'react';
import { Link } from 'react-router-dom';

export const ProtectionHighlight: React.FC = () => {
  return (
    <section id="protection-highlight" className="w-full py-20 md:py-28 bg-[#050505] text-white border-b border-white/10">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 font-manrope">
        
        {/* Ceramic Highlight Block */}
        <div className="flex flex-col justify-between p-8 sm:p-12 border border-white/10 bg-white/[0.02] rounded-none space-y-6">
          <div className="space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#FF4B00]">NANO-QUARTZ SHIELD</span>
            <h3 className="font-intertight font-extrabold text-3xl sm:text-4xl uppercase text-white tracking-tight">
              CERAMIC COATING
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
              Hydrophobic surface protection producing extreme water-beading and deep color depth.
            </p>
          </div>

          <Link
            to="/services/ceramic-coating"
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF4B00] hover:text-white transition-colors"
            aria-label="Explore Ceramic Coating details"
          >
            <span>EXPLORE CERAMIC</span>
            <span className="group-hover:translate-x-1 transition-transform">↗</span>
          </Link>
        </div>

        {/* PPF Highlight Block */}
        <div className="flex flex-col justify-between p-8 sm:p-12 border border-white/10 bg-white/[0.02] rounded-none space-y-6">
          <div className="space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#FF4B00]">SELF-HEALING TPU ARMOR</span>
            <h3 className="font-intertight font-extrabold text-3xl sm:text-4xl uppercase text-white tracking-tight">
              PAINT PROTECTION FILM
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
              Ultra-clear physical barrier absorbing rock chips, scratches, and road debris.
            </p>
          </div>

          <Link
            to="/services/ppf-paint-protection"
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF4B00] hover:text-white transition-colors"
            aria-label="Explore Paint Protection Film details"
          >
            <span>EXPLORE PPF</span>
            <span className="group-hover:translate-x-1 transition-transform">↗</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
