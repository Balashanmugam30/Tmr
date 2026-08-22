import React from 'react';
import { Link } from 'react-router-dom';

export const ProtectionSpotlightSection: React.FC = () => {
  return (
    <section id="protection-spotlight" className="w-full bg-[#fff8f6] text-[#111111] border-b border-[#D8D8D5] relative overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        
        {/* ============================================================ */}
        {/* FEATURE 01 — CERAMIC COATING (TEXT LEFT ↔ IMAGE RIGHT) */}
        {/* ============================================================ */}
        <div className="w-full border-b border-[#D8D8D5] py-20 sm:py-24 lg:py-28">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Ceramic Copy & 3 Concise Benefits */}
              <div className="lg:col-span-6 space-y-6 font-manrope">
                <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block">
                  SURFACE PROTECTION // 01
                </span>

                <h2 className="font-manrope font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#111111] leading-none">
                  CERAMIC COATING
                </h2>

                <p className="text-sm sm:text-base text-[#858585] font-normal leading-relaxed max-w-lg">
                  Semi-permanent nanostructured surface protection engineered to deepen paint optics, create hydrophobic water beading, and simplify routine vehicle maintenance in Tiruppur.
                </p>

                {/* 3 Concise Benefits List */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-[#D8D8D5]">
                  <div className="space-y-1">
                    <span className="font-editorial text-xl italic text-[#FF4B00] block">01</span>
                    <h3 className="font-intertight font-extrabold text-xs uppercase tracking-wider text-[#111111]">
                      HYDROPHOBIC
                    </h3>
                    <p className="text-[12px] text-[#858585] font-normal leading-normal">
                      Extreme water & mud repellency
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-editorial text-xl italic text-[#FF4B00] block">02</span>
                    <h3 className="font-intertight font-extrabold text-xs uppercase tracking-wider text-[#111111]">
                      GLOSS
                    </h3>
                    <p className="text-[12px] text-[#858585] font-normal leading-normal">
                      Deep reflective optical clarity
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-editorial text-xl italic text-[#FF4B00] block">03</span>
                    <h3 className="font-intertight font-extrabold text-xs uppercase tracking-wider text-[#111111]">
                      MAINTENANCE
                    </h3>
                    <p className="text-[12px] text-[#858585] font-normal leading-normal">
                      Effortless routine wash care
                    </p>
                  </div>
                </div>

                {/* Primary CTA Link */}
                <div className="pt-4">
                  <Link
                    to="/services/ceramic-coating"
                    className="inline-flex items-center gap-3 bg-[#111111] hover:bg-[#FF4B00] text-white font-manrope font-bold text-xs uppercase tracking-widest px-8 py-4 transition-colors duration-300 group"
                    aria-label="Explore Ceramic Coating details"
                  >
                    <span>EXPLORE CERAMIC</span>
                    <span className="text-base group-hover:translate-x-1 transition-transform">↗</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Dedicated Ceramic Visual */}
              <div className="lg:col-span-6">
                <div className="aspect-[4/3] w-full overflow-hidden border border-[#D8D8D5] bg-[#050505] relative group shadow-md">
                  <img
                    src="/images/protection/prot-repel.webp"
                    alt="Hydrophobic ceramic coating water beading surface at TMR Car Care Studio"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* FEATURE 02 — PAINT PROTECTION FILM (IMAGE LEFT ↔ TEXT RIGHT) */}
        {/* ============================================================ */}
        <div className="w-full py-20 sm:py-24 lg:py-28">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column (Desktop): Dedicated PPF Visual */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="aspect-[4/3] w-full overflow-hidden border border-[#D8D8D5] bg-[#050505] relative group shadow-md">
                  <img
                    src="/images/ppf/ppf-hero.webp"
                    alt="Self-healing clear Paint Protection Film TPU installation at TMR Car Care"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Right Column (Desktop): PPF Copy & 4 High-Impact Areas */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 font-manrope">
                <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block">
                  IMPACT PROTECTION // 02
                </span>

                <h2 className="font-manrope font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#111111] leading-none">
                  PAINT PROTECTION FILM
                </h2>

                <p className="text-sm sm:text-base text-[#858585] font-normal leading-relaxed max-w-lg">
                  Ultra-clear self-healing elastomeric armor engineered to absorb stone chips, prevent scratches, and shield high-impact vehicle body panels in Tiruppur.
                </p>

                {/* 4 High-Impact Areas Tag Spectrum */}
                <div className="pt-2 border-t border-[#D8D8D5] space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#858585] block mb-2">
                    HIGH-IMPACT COVERAGE ZONES:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["FRONT BUMPER", "HOOD & BONNET", "FRONT FENDERS", "SIDE MIRRORS"].map((area) => (
                      <span
                        key={area}
                        className="px-3 py-1.5 border border-[#D8D8D5] bg-[#fff8f6] font-manrope font-bold text-[11px] uppercase tracking-wider text-[#111111]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary CTA Link */}
                <div className="pt-4">
                  <Link
                    to="/services/ppf-paint-protection"
                    className="inline-flex items-center gap-3 bg-[#111111] hover:bg-[#FF4B00] text-white font-manrope font-bold text-xs uppercase tracking-widest px-8 py-4 transition-colors duration-300 group"
                    aria-label="Explore Paint Protection Film details"
                  >
                    <span>EXPLORE PPF</span>
                    <span className="text-base group-hover:translate-x-1 transition-transform">↗</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
