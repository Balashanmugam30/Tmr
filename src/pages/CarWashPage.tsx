import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '@/data/company';

export const CarWashPage: React.FC = () => {
  useEffect(() => {
    document.title = "Professional Car Wash & Car Cleaning in Tiruppur | TMR Car Care";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#F5F4EF] text-[#0A0A0A] font-manrope selection:bg-[#FF4B00] selection:text-white pt-20">
      
      {/* 01. HERO — RESTRAINED EDITORIAL HERO */}
      <section data-navbar-theme="light" className="relative w-full py-16 sm:py-24 md:py-32 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5] overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FAF8F5] via-[#F1EEE7] to-[#E8E4DB]">
        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_50%,_rgba(0,0,0,0.04)_100%)]" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="col-span-1 md:col-span-12">
            <h1 className="font-['Instrument_Serif','Editorial_New',serif] font-normal text-5xl sm:text-7xl lg:text-[88px] text-[#0A0A0A] uppercase tracking-tight leading-[0.96] mb-6">
              RESET THE <br />
              <span className="font-['Bricolage_Grotesque',serif] font-extrabold italic text-[#FF4B00] lowercase pr-4 inline-block transform -rotate-1">
                surface.
              </span>
            </h1>
          </div>

          <div className="col-span-1 md:col-span-7 space-y-6">
            <h2 className="font-manrope font-extrabold text-lg sm:text-xl text-[#0A0A0A] uppercase tracking-wider">
              PROFESSIONAL CAR WASH &amp; CAR CLEANING IN TIRUPPUR.
            </h2>
            <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed max-w-2xl">
              We deliver a meticulous, multi-stage wash process designed to safely remove road grime and environmental contamination while preserving your vehicle's delicate clear coat. Using pH-neutral snow foams, two-bucket contact washing, and scratch-free microfiber drying, a cleaner, refined vehicle starts here.
            </p>
            
            {/* Minimal Editorial Text Link CTAs — NO Box / Rectangle */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF4B00] transition-colors group cursor-pointer"
              >
                <span>WHATSAPP US</span>
                <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </a>
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=Enquiry%20regarding%20Car%20Wash%20Services`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF4B00] transition-colors group cursor-pointer"
              >
                <span>ENQUIRE NOW</span>
                <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Dedicated Hero Image — Single Visual Anchor on Page */}
        <div className="mt-12 sm:mt-16 w-full h-[360px] sm:h-[520px] md:h-[640px] relative overflow-hidden rounded-2xl border border-[#D8D8D5] shadow-2xl bg-[#0A0A0A] group">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlbWfNBbXZiRfj_iyMazjo6pjswUyteC5B9uSch2E1_55FSRvxRZ9Y7L1YuRi8ip-Lf310NUFJZXstmjYy93Vgt3ZGSY2H-qGsuBC892JvVkqTRAiPf--YvG8rT0Z3MaGA57DHjP97nX5eNAAMc_fvHXFar-1ALpz0G-qbWOqMpa3kvhS2IuBw6IUmzZoaXMHNOCSGxIdbK-jY_2AXGkuIUFUGEVT5g3Q_B4aoBU_TJlvnb9csk7x8"
            alt="Professional safe snow foam car wash and vehicle cleaning at TMR Car Care Tiruppur studio"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#FF4B00] block mb-1">
              pH-NEUTRAL SNOW FOAM WASH
            </span>
            <p className="font-manrope font-bold text-sm text-white">
              TMR Car Care Studio — Avinashi Road, Tiruppur
            </p>
          </div>
        </div>
      </section>

      {/* 02. WHAT'S INCLUDED — EVERY SURFACE MATTERS */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            EVERY SURFACE MATTERS.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            Complete exterior and interior care designed to clean thoroughly without causing surface wear or swirl marks.
          </p>
        </div>

        {/* Editorial Inclusions Rail — Typography + Thin Dividers */}
        <div className="border-t border-[#D8D8D5] divide-y divide-[#D8D8D5]">
          
          {/* Item 01 */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-white/40 px-3 transition-colors duration-300">
            <div className="md:col-span-4 flex items-center gap-4">
              <span className="font-mono text-xs font-bold text-[#FF4B00]">01</span>
              <h3 className="font-manrope font-extrabold text-xl sm:text-2xl uppercase tracking-wider text-[#0A0A0A] group-hover:text-[#FF4B00] transition-colors">
                EXTERIOR BODY
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="font-manrope text-sm sm:text-base text-[#5F5E5E] leading-relaxed">
                Safe exterior wash, badge and trim cleaning, contamination removal, and a clean protective finish. For deeper swirl mark removal, see our{' '}
                <a href="/services/detailing-paint-care" className="text-[#FF4B00] font-bold underline hover:text-[#0A0A0A] transition-colors">
                  paint correction &amp; detailing service
                </a>.
              </p>
            </div>
          </div>

          {/* Item 02 */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-white/40 px-3 transition-colors duration-300">
            <div className="md:col-span-4 flex items-center gap-4">
              <span className="font-mono text-xs font-bold text-[#FF4B00]">02</span>
              <h3 className="font-manrope font-extrabold text-xl sm:text-2xl uppercase tracking-wider text-[#0A0A0A] group-hover:text-[#FF4B00] transition-colors">
                WHEELS &amp; TYRES
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="font-manrope text-sm sm:text-base text-[#5F5E5E] leading-relaxed">
                Wheel-face and barrel cleaning, brake-dust removal, non-acidic iron decontamination, and satin tyre finishing.
              </p>
            </div>
          </div>

          {/* Item 03 */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-white/40 px-3 transition-colors duration-300">
            <div className="md:col-span-4 flex items-center gap-4">
              <span className="font-mono text-xs font-bold text-[#FF4B00]">03</span>
              <h3 className="font-manrope font-extrabold text-xl sm:text-2xl uppercase tracking-wider text-[#0A0A0A] group-hover:text-[#FF4B00] transition-colors">
                GLASS
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="font-manrope text-sm sm:text-base text-[#5F5E5E] leading-relaxed">
                Interior and exterior glass cleaning for clear, streak-free visibility and mineral spot prevention.
              </p>
            </div>
          </div>

          {/* Item 04 */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-white/40 px-3 transition-colors duration-300">
            <div className="md:col-span-4 flex items-center gap-4">
              <span className="font-mono text-xs font-bold text-[#FF4B00]">04</span>
              <h3 className="font-manrope font-extrabold text-xl sm:text-2xl uppercase tracking-wider text-[#0A0A0A] group-hover:text-[#FF4B00] transition-colors">
                INTERIOR REFRESH
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="font-manrope text-sm sm:text-base text-[#5F5E5E] leading-relaxed">
                Vacuuming of carpets and upholstery, dashboard and surface wipe-down, air vent dusting, and cabin refresh.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 03. THE WASH PROCESS — A SAFER WAY TO WASH */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            A SAFER WAY TO WASH.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            Our systematic multi-stage process minimizes clear-coat friction and prevents swirl marks.
          </p>
        </div>

        {/* Unboxed Open Editorial Process Grid — NO Cards / Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Stage 01 */}
          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] block">01</span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A] tracking-wider">
              PRE-RINSE
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Remove loose dirt and heavy grime with a high-pressure flush before any contact washing begins.
            </p>
          </div>

          {/* Stage 02 */}
          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] block">02</span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A] tracking-wider">
              SNOW FOAM
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Use pH-neutral foam to loosen and encapsulate remaining surface contaminants safely.
            </p>
          </div>

          {/* Stage 03 */}
          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] block">03</span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A] tracking-wider">
              CONTACT WASH
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Use the two-bucket method and soft microfiber wash media to reduce the risk of swirl marks.
            </p>
          </div>

          {/* Stage 04 */}
          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] block">04</span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A] tracking-wider">
              DRY &amp; FINISH
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Rinse thoroughly and dry carefully with ultra-soft plush towels for a clean, spot-free finish.
            </p>
          </div>

        </div>
      </section>

      {/* 04. WHY TMR — CARE STARTS WITH THE WASH */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            CARE STARTS WITH THE WASH.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            Proper car washing protects long-term paint health and preserves existing ceramic coatings or paint protection films.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="space-y-3 p-6 border-l-2 border-[#FF4B00]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              01 — CLEAR-COAT SAFE
            </span>
            <h3 className="font-manrope font-bold text-lg uppercase text-[#0A0A0A]">
              MINIMIZED ABRASION
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Appropriate wash methods and dedicated microfiber media help minimize unnecessary surface abrasion and swirl marks.
            </p>
          </div>

          <div className="space-y-3 p-6 border-l-2 border-[#FF4B00]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              02 — CONTROLLED PROCESS
            </span>
            <h3 className="font-manrope font-bold text-lg uppercase text-[#0A0A0A]">
              DELIBERATE STEPS
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Each stage is performed deliberately using fresh, grit-free wash equipment rather than rushed through automated brushes.
            </p>
          </div>

          <div className="space-y-3 p-6 border-l-2 border-[#FF4B00]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              03 — DETAILING STANDARD
            </span>
            <h3 className="font-manrope font-bold text-lg uppercase text-[#0A0A0A]">
              FOUNDATIONAL CARE
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              The wash is treated as essential automotive care, creating the optimal foundation for{' '}
              <Link to="/services/ceramic-coating" className="text-[#FF4B00] font-bold underline hover:text-[#0A0A0A] transition-colors">
                ceramic coatings
              </Link>{' '}
              or{' '}
              <Link to="/services/ppf-paint-protection" className="text-[#FF4B00] font-bold underline hover:text-[#0A0A0A] transition-colors">
                PPF installations
              </Link>.
            </p>
          </div>

        </div>
      </section>

      {/* 05. FINAL CTA — READY FOR A CLEANER FINISH? */}
      <section className="relative w-full py-24 sm:py-32 bg-[#0B0B0B] text-white border-b border-[#222222] overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#181210] via-[#0B0B0B] to-[#050505]">
        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_45%,_rgba(0,0,0,0.65)_100%)]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
            READY FOR A <br />
            <span className="font-['Bricolage_Grotesque',serif] font-extrabold italic text-[#FF4B00] lowercase tracking-normal inline-block">
              cleaner finish?
            </span>
          </h2>

          <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] max-w-xl mx-auto leading-relaxed">
            Book a professional car wash and cleaning service in Tiruppur and let TMR Car Care take care of the details.
          </p>

          {/* Minimal Editorial Text Link CTAs — NO Box / Rectangle */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-4">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors group cursor-pointer"
            >
              <span>BOOK VIA WHATSAPP</span>
              <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </a>
            <a
              href={`tel:${companyData.contact.phone}`}
              className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors group cursor-pointer"
            >
              <span>CALL TMR</span>
              <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
