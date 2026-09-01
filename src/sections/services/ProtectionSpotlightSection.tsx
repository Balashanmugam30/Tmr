import React from 'react';
import { Link } from 'react-router-dom';

export const ProtectionSpotlightSection: React.FC = () => {
  return (
    <section id="protection-spotlight" className="w-full bg-[#050505] text-white py-20 sm:py-28 relative overflow-hidden font-manrope">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
        
        {/* ============================================================ */}
        {/* FEATURE 01 — CERAMIC COATING (TEXT LEFT ↔ MEDIA RIGHT) */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Ceramic Copy, Clean Benefits, & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-manrope font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none">
              CERAMIC<br />
              <span className="font-editorial italic font-normal text-[#FF4B00] text-3xl sm:text-4xl lg:text-5xl lowercase tracking-normal block mt-1">
                Coating
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed max-w-lg">
              Semi-permanent nanostructured surface protection engineered to deepen paint optics, create hydrophobic water beading, and simplify routine vehicle maintenance in Tiruppur.
            </p>

            {/* Clean Horizontal Benefit Line (No cards/boxes) */}
            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/80">
              <span>HYDROPHOBIC</span>
              <span className="text-[#FF4B00]">•</span>
              <span>GLOSS</span>
              <span className="text-[#FF4B00]">•</span>
              <span>EASIER MAINTENANCE</span>
            </div>

            {/* Primary CTA Link */}
            <div className="pt-4">
              <Link
                to="/services/ceramic-coating"
                className="inline-flex items-center gap-3 border border-white/20 hover:border-white hover:bg-white hover:text-[#111111] text-white font-manrope font-bold text-xs uppercase tracking-widest px-8 py-4 transition-all duration-300 group"
                aria-label="Explore Ceramic Coating details"
              >
                <span>EXPLORE CERAMIC</span>
                <span className="text-base group-hover:translate-x-1 transition-transform">↗</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Dedicated Ceramic Visual */}
          <div className="lg:col-span-6">
            <div className="aspect-[16/9] w-full overflow-hidden border border-white/10 bg-[#111111] relative group shadow-2xl">
              <img
                src="/images/services/feature/ceramic-feature.jpg"
                alt="Hydrophobic ceramic coating water beading on a dark vehicle surface at TMR AI Car Care in Tiruppur"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Thin Subtle Editorial Rule */}
        <div className="w-full h-px bg-white/10 my-16 sm:my-24" />

        {/* ============================================================ */}
        {/* FEATURE 02 — PAINT PROTECTION FILM (MEDIA LEFT ↔ TEXT RIGHT) */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column (Desktop): Dedicated PPF Visual */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="aspect-[16/9] w-full overflow-hidden border border-white/10 bg-[#111111] relative group shadow-2xl">
              <img
                src="/images/services/feature/ppf-feature.jpg"
                alt="Paint Protection Film installation on a dark vehicle panel at TMR AI Car Care in Tiruppur"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column (Desktop): PPF Copy, Clean Micro-List, & CTA */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <h2 className="font-manrope font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none">
              PAINT PROTECTION<br />
              <span className="font-editorial italic font-normal text-[#FF4B00] text-3xl sm:text-4xl lg:text-5xl lowercase tracking-normal block mt-1">
                Film
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed max-w-lg">
              Ultra-clear self-healing elastomeric armor engineered to absorb stone chips, prevent scratches, and shield high-impact vehicle body panels in Tiruppur.
            </p>

            {/* Clean Coverage Micro-List (No cards/pills) */}
            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/80">
              <span className="text-white/40 font-normal">COVERAGE:</span>
              <span>FRONT BUMPER</span>
              <span className="text-[#FF4B00]">•</span>
              <span>HOOD</span>
              <span className="text-[#FF4B00]">•</span>
              <span>FENDERS</span>
              <span className="text-[#FF4B00]">•</span>
              <span>MIRRORS</span>
            </div>

            {/* Primary CTA Link */}
            <div className="pt-4">
              <Link
                to="/services/ppf-paint-protection"
                className="inline-flex items-center gap-3 border border-white/20 hover:border-white hover:bg-white hover:text-[#111111] text-white font-manrope font-bold text-xs uppercase tracking-widest px-8 py-4 transition-all duration-300 group"
                aria-label="Explore Paint Protection Film details"
              >
                <span>EXPLORE PPF</span>
                <span className="text-base group-hover:translate-x-1 transition-transform">↗</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
