import React from 'react';
import { Link } from 'react-router-dom';

export const ProtectionSpotlightSection: React.FC = () => {
  return (
    <section id="protection-spotlight" className="w-full py-20 md:py-32 bg-[#050505] text-white">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* ============================================================ */}
        {/* ZONE A: CERAMIC COATING */}
        {/* ============================================================ */}
        <div className="flex flex-col gap-8 order-2 md:order-1 pr-0 md:pr-12 font-manrope">
          <h2 className="font-intertight font-extrabold text-4xl sm:text-6xl text-white leading-none uppercase tracking-tight">
            CERAMIC<br />
            <span className="text-[#FF4B00] font-editorial italic normal-case font-normal">Coating</span>
          </h2>
          
          <p className="text-base sm:text-lg text-white/70 max-w-md leading-relaxed font-normal">
            Molecular level protection that enhances gloss, repels water, and shields against environmental contaminants. The ultimate liquid armor.
          </p>

          <Link
            to="/services/ceramic-coating"
            className="border border-white/20 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 w-max flex items-center gap-4 hover:bg-white hover:text-black transition-colors duration-300 rounded-none"
            aria-label="Explore Ceramic Coating details"
          >
            <span>EXPLORE CERAMIC</span>
            <span className="text-base">↗</span>
          </Link>
        </div>

        <div className="order-1 md:order-2 h-[360px] sm:h-[480px] lg:h-[500px] w-full mb-4 md:mb-0 ml-0 md:ml-6 overflow-hidden group relative bg-[#111111] border border-white/10">
          <img
            src="/images/protection/protection-hero.webp"
            alt="Macro shot of hydrophobic ceramic coating water beading at TMR Car Care"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Divider */}
        <div className="col-span-1 md:col-span-2 h-px bg-white/10 my-8 md:my-16" />

        {/* ============================================================ */}
        {/* ZONE B: PAINT PROTECTION FILM (PPF) */}
        {/* ============================================================ */}
        <div className="order-3 h-[360px] sm:h-[480px] lg:h-[500px] w-full mb-4 md:mb-0 mr-0 md:mr-6 overflow-hidden group relative bg-[#111111] border border-white/10">
          <img
            src="/images/ppf/ppf-surface.webp"
            alt="Clear Paint Protection Film TPU installation at TMR Car Care Studio"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="flex flex-col gap-8 order-4 pl-0 md:pl-12 font-manrope">
          <h2 className="font-intertight font-extrabold text-4xl sm:text-6xl text-white leading-none uppercase tracking-tight">
            PAINT PROTECTION<br />
            <span className="text-[#FF4B00] font-editorial italic normal-case font-normal">Film</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 max-w-md leading-relaxed font-normal">
            A physical, self-healing barrier against rock chips, scratches, and road debris. Invisible armor for your high-impact areas.
          </p>

          <Link
            to="/services/ppf-paint-protection"
            className="border border-white/20 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 w-max flex items-center gap-4 hover:bg-white hover:text-black transition-colors duration-300 rounded-none"
            aria-label="Explore Paint Protection Film details"
          >
            <span>EXPLORE PPF</span>
            <span className="text-base">↗</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
