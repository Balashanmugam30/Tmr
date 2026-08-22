import React, { useEffect } from 'react';
import { companyData } from '@/data/company';

export const CarWashPage: React.FC = () => {
  useEffect(() => {
    document.title = "Car Wash & Cleaning Services in Tiruppur | TMR Car Care";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', "Experience precision touchless pre-rinse, safe pH-neutral snow foam, two-bucket grit-guard washing, and 360-degree vehicle cleaning at TMR Car Care in Tiruppur.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#fff8f6] text-[#111111] font-manrope selection:bg-[#FF4B00] selection:text-white pt-20 overflow-x-hidden">
      
      {/* 01 HERO SECTION */}
      <section className="w-full bg-[#050505] text-white py-24 sm:py-32 relative overflow-hidden border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block">
              01 CAR WASH & CLEANING
            </span>
            <h1 className="font-manrope font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
              RESET THE SURFACE.
            </h1>
            <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed max-w-xl">
              Touchless pre-rinse decontamination, pH-neutral snow foam, two-bucket microfibre contact wash, and non-contact air drying in Tiruppur.
            </p>
            <div className="pt-4">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#FF4B00] text-white font-bold text-xs uppercase tracking-widest px-8 py-5 hover:bg-white hover:text-[#111111] transition-all duration-300"
              >
                <span>CONSULT VIA WHATSAPP</span>
                <span className="text-base">↗</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border border-white/10 bg-[#111111] shadow-2xl">
              <img
                src="/images/services/car-wash/car-wash-stitch-01.jpg"
                alt="RESET THE SURFACE. at TMR Car Care Studio Tiruppur"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 02 PHILOSOPHY / CONCEPT SECTION */}
      <section className="w-full py-20 sm:py-28 border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="max-w-3xl space-y-4 font-manrope">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block">
              STUDIO PHILOSOPHY
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#111111]">
              EVERY SURFACE MATTERS.
            </h2>
            <p className="text-sm sm:text-base text-[#858585] leading-relaxed">
              Improper washing techniques introduce 90% of all swirl marks and clearcoat haze. Our studio wash protocol preserves surface integrity through touchless pre-rinsing and grit-guard isolation.
            </p>
          </div>
        </div>
      </section>

      {/* 03 TECHNICAL STEPS / PROCESS SECTION */}
      <section className="w-full py-20 sm:py-28 bg-[#050505] text-white border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-14">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              TECHNICAL PROTOCOLS
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white">
              SERVICE STEPS &amp; DISCIPLINE.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t border-white/10 pt-6 space-y-4 font-manrope">
              <span className="font-editorial text-2xl italic text-[#FF4B00] block">01</span>
              <div className="aspect-[16/10] w-full overflow-hidden border border-white/10 bg-[#111111] mb-4">
                <img src="/images/services/car-wash/car-wash-stitch-02.jpg" alt="PRE-RINSE at TMR Car Care Studio Tiruppur" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-intertight font-extrabold text-xl uppercase tracking-wider text-white">
                PRE-RINSE
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                High-pressure touchless rinse to dislodge heavy road grit.
              </p>
            </div>
            <div className="border-t border-white/10 pt-6 space-y-4 font-manrope">
              <span className="font-editorial text-2xl italic text-[#FF4B00] block">02</span>
              <div className="aspect-[16/10] w-full overflow-hidden border border-white/10 bg-[#111111] mb-4">
                <img src="/images/services/car-wash/car-wash-stitch-03.jpg" alt="SNOW FOAM at TMR Car Care Studio Tiruppur" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-intertight font-extrabold text-xl uppercase tracking-wider text-white">
                SNOW FOAM
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                pH-neutral foam encapsulation to lift stubborn organic grime.
              </p>
            </div>
            <div className="border-t border-white/10 pt-6 space-y-4 font-manrope">
              <span className="font-editorial text-2xl italic text-[#FF4B00] block">03</span>
              <div className="aspect-[16/10] w-full overflow-hidden border border-white/10 bg-[#111111] mb-4">
                <img src="/images/services/car-wash/car-wash-stitch-04.jpg" alt="CONTACT WASH at TMR Car Care Studio Tiruppur" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-intertight font-extrabold text-xl uppercase tracking-wider text-white">
                CONTACT WASH
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                Plush microfibre two-bucket wash isolating dirt away from clearcoat.
              </p>
            </div>
            <div className="border-t border-white/10 pt-6 space-y-4 font-manrope">
              <span className="font-editorial text-2xl italic text-[#FF4B00] block">04</span>
              <div className="aspect-[16/10] w-full overflow-hidden border border-white/10 bg-[#111111] mb-4">
                <img src="/images/services/car-wash/car-wash-stitch-05.jpg" alt="THE FINISH at TMR Car Care Studio Tiruppur" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-intertight font-extrabold text-xl uppercase tracking-wider text-white">
                THE FINISH
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                Filtered air dry, tire dressing, and streak-free optical glass clean.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 SCOPE / INCLUSIONS SECTION */}
      <section className="w-full py-20 sm:py-28 border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-14">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              COVERAGE SPECTRUM
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#111111]">
              STANDARD INCLUSIONS &amp; SCOPE.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t border-[#D8D8D5] pt-6 space-y-4 font-manrope">
              <h3 className="font-manrope font-extrabold text-sm uppercase tracking-widest text-[#111111]">
                EXTERIOR BODY
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#858585]">
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>pH-Neutral Snow Foam</span></li>
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Bug & Tar Removal</span></li>
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Door Sill & Jam Wash</span></li>
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Filter Air Dry</span></li>
              </ul>
            </div>
            <div className="border-t border-[#D8D8D5] pt-6 space-y-4 font-manrope">
              <h3 className="font-manrope font-extrabold text-sm uppercase tracking-widest text-[#111111]">
                INTERIOR REFRESH
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#858585]">
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>High-Power Vacuuming</span></li>
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Dashboard Wipe</span></li>
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Air Vent Dusting</span></li>
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Mat Cleaning</span></li>
              </ul>
            </div>
            <div className="border-t border-[#D8D8D5] pt-6 space-y-4 font-manrope">
              <h3 className="font-manrope font-extrabold text-sm uppercase tracking-widest text-[#111111]">
                WHEELS & TYRES
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#858585]">
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Non-Acidic Cleaner</span></li>
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Iron Dissolution</span></li>
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Scrub & Dressing</span></li>
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Wheel Well Rinse</span></li>
              </ul>
            </div>
            <div className="border-t border-[#D8D8D5] pt-6 space-y-4 font-manrope">
              <h3 className="font-manrope font-extrabold text-sm uppercase tracking-widest text-[#111111]">
                GLASS & FINISH
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#858585]">
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Streak-Free Clean</span></li>
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Mirror Polish</span></li>
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Exhaust Tip Wipe</span></li>
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Final Quality Inspection</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 05 INSPECTION & CHECKLIST SECTION */}
      <section className="w-full py-20 sm:py-28 bg-[#050505] text-white border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="max-w-3xl space-y-4 font-manrope">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block">
              OPTICAL QUALITY AUDIT
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white">
              360° CLEAN — INSPECTION CHECKLIST
            </h2>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              Comprehensive 24-point visual check verifying panel cleanliness, wheel arch decontamination, and cabin dust elimination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="aspect-[4/3] w-full overflow-hidden border border-white/10 bg-[#111111]"><img src="/images/services/car-wash/car-wash-stitch-06.jpg" alt="Visual inspection stage at TMR Car Care Tiruppur" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /></div><div className="aspect-[4/3] w-full overflow-hidden border border-white/10 bg-[#111111]"><img src="/images/services/car-wash/car-wash-stitch-07.jpg" alt="Visual inspection stage at TMR Car Care Tiruppur" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /></div><div className="aspect-[4/3] w-full overflow-hidden border border-white/10 bg-[#111111]"><img src="/images/services/car-wash/car-wash-stitch-08.jpg" alt="Visual inspection stage at TMR Car Care Tiruppur" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /></div><div className="aspect-[4/3] w-full overflow-hidden border border-white/10 bg-[#111111]"><img src="/images/services/car-wash/car-wash-stitch-09.jpg" alt="Visual inspection stage at TMR Car Care Tiruppur" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /></div>
          </div>
        </div>
      </section>


      {/* 06 FAQ SECTION */}
      <section className="w-full py-20 sm:py-28 border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              CLIENT GUIDANCE
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl uppercase tracking-tight text-[#111111]">
              FREQUENTLY ASKED QUESTIONS.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="border-b border-[#D8D8D5] pb-6 font-manrope">
              <h3 className="font-manrope font-bold text-base sm:text-lg text-[#111111] mb-2">
                How does your wash prevent swirl marks?
              </h3>
              <p className="text-xs sm:text-sm text-[#858585] leading-relaxed">
                We use touchless pre-rinsing, pH-neutral foam, grit-guard buckets, and plush microfibre mitts to prevent clearcoat friction.
              </p>
            </div>
            <div className="border-b border-[#D8D8D5] pb-6 font-manrope">
              <h3 className="font-manrope font-bold text-base sm:text-lg text-[#111111] mb-2">
                How long does a full studio wash take?
              </h3>
              <p className="text-xs sm:text-sm text-[#858585] leading-relaxed">
                A thorough exterior wash and interior refresh takes approximately 90 to 120 minutes.
              </p>
            </div>
            <div className="border-b border-[#D8D8D5] pb-6 font-manrope">
              <h3 className="font-manrope font-bold text-base sm:text-lg text-[#111111] mb-2">
                Are your wheel cleaners safe for diamond-cut alloys?
              </h3>
              <p className="text-xs sm:text-sm text-[#858585] leading-relaxed">
                Yes. We strictly use non-acidic, pH-balanced iron removers safe for all factory wheel finishes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 07 CTA SECTION */}
      <section className="w-full bg-[#050505] text-white py-20 sm:py-28 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6 font-manrope">
          <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block">
            ELEVATE YOUR DRIVE
          </span>
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white">
            BOOK STUDIO CONSULTATION.
          </h2>
          <p className="text-xs sm:text-sm text-white/70">
            Connect directly with our detailing specialists in Tiruppur via WhatsApp for personalized package recommendations.
          </p>
          <div className="pt-4 flex justify-center">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#FF4B00] text-white font-bold text-xs uppercase tracking-widest px-8 py-5 hover:bg-white hover:text-[#111111] transition-all duration-300"
            >
              <span>WHATSAPP CONSULTATION</span>
              <span className="text-base">↗</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CarWashPage;
