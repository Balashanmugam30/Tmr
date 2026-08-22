import React, { useEffect } from 'react';
import { companyData } from '@/data/company';

export const CeramicCoatingPage: React.FC = () => {
  useEffect(() => {
    document.title = "10H Ceramic Coating Protection in Tiruppur | TMR Car Care";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', "Semi-permanent nanostructured ceramic coating for extreme gloss, hydrophobic water beading, UV resistance, and easy vehicle maintenance at TMR Car Care Tiruppur.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#fff8f6] text-[#111111] font-manrope selection:bg-[#FF4B00] selection:text-white pt-20 overflow-x-hidden">
      
      {/* 01 HERO SECTION */}
      <section className="w-full bg-[#050505] text-white py-24 sm:py-32 relative overflow-hidden border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block">
              03 CERAMIC COATING
            </span>
            <h1 className="font-manrope font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
              PROTECT THE FINISH.
            </h1>
            <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed max-w-xl">
              Semi-permanent 10H nanostructured quartz matrix bonding to clearcoat for deep glass optics, hydrophobic repellency, and UV resistance.
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
                src="/images/services/feature/ceramic-feature.jpg"
                alt="PROTECT THE FINISH. at TMR Car Care Studio Tiruppur"
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
              SURFACE, REFINED.
            </h2>
            <p className="text-sm sm:text-base text-[#858585] leading-relaxed">
              Ceramic coating fills microscopic pores in vehicle paint, creating a slick hydrophobic shield that repels mud, bird acid, and environmental fallout.
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
                <img src="/images/services/feature/ceramic-feature.jpg" alt="EXTREME GLOSS at TMR Car Care Studio Tiruppur" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-intertight font-extrabold text-xl uppercase tracking-wider text-white">
                EXTREME GLOSS
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                Deepens paint optics to create a wet-look reflective shine.
              </p>
            </div>
            <div className="border-t border-white/10 pt-6 space-y-4 font-manrope">
              <span className="font-editorial text-2xl italic text-[#FF4B00] block">02</span>
              <div className="aspect-[16/10] w-full overflow-hidden border border-white/10 bg-[#111111] mb-4">
                <img src="/images/protection/prot-repel.webp" alt="HYDROPHOBIC REPELLENCY at TMR Car Care Studio Tiruppur" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-intertight font-extrabold text-xl uppercase tracking-wider text-white">
                HYDROPHOBIC REPELLENCY
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                High-angle water beading that sheds rain and road grime.
              </p>
            </div>
            <div className="border-t border-white/10 pt-6 space-y-4 font-manrope">
              <span className="font-editorial text-2xl italic text-[#FF4B00] block">03</span>
              <div className="aspect-[16/10] w-full overflow-hidden border border-white/10 bg-[#111111] mb-4">
                <img src="/images/protection/prot-bond.webp" alt="UV & CHEMICAL SHIELD at TMR Car Care Studio Tiruppur" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-intertight font-extrabold text-xl uppercase tracking-wider text-white">
                UV & CHEMICAL SHIELD
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                Prevents sun oxidation, acid rain etchings, and tree sap damage.
              </p>
            </div>
            <div className="border-t border-white/10 pt-6 space-y-4 font-manrope">
              <span className="font-editorial text-2xl italic text-[#FF4B00] block">04</span>
              <div className="aspect-[16/10] w-full overflow-hidden border border-white/10 bg-[#111111] mb-4">
                <img src="/images/protection/prot-finish.webp" alt="EASIER MAINTENANCE at TMR Car Care Studio Tiruppur" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-intertight font-extrabold text-xl uppercase tracking-wider text-white">
                EASIER MAINTENANCE
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                Reduces wash effort as contamination cannot easily bond.
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
                BODY PAINT
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#858585]">
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>10H Ceramic Matrix</span></li>
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Multi-Year Warranty</span></li>
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Optical Gloss Boost</span></li>
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Scratch Resistance</span></li>
              </ul>
            </div>
            <div className="border-t border-[#D8D8D5] pt-6 space-y-4 font-manrope">
              <h3 className="font-manrope font-extrabold text-sm uppercase tracking-widest text-[#111111]">
                WHEELS & GLASS
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#858585]">
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>High-Temp Caliper Coat</span></li>
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Hydrophobic Windshield</span></li>
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Trim Sealer</span></li>
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Alloy Shield</span></li>
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
              THE FINISH IN DETAIL.
            </h2>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              Unmatched optical clarity, depth, and hydrophobic water repellency engineered for Tiruppur drivers.
            </p>
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
                How long does ceramic coating last?
              </h3>
              <p className="text-xs sm:text-sm text-[#858585] leading-relaxed">
                Depending on maintenance, TMR ceramic coatings provide durable gloss and hydrophobic protection for 3 to 5 years.
              </p>
            </div>
            <div className="border-b border-[#D8D8D5] pb-6 font-manrope">
              <h3 className="font-manrope font-bold text-base sm:text-lg text-[#111111] mb-2">
                Does ceramic coating prevent scratches?
              </h3>
              <p className="text-xs sm:text-sm text-[#858585] leading-relaxed">
                It increases clearcoat hardness against micro-marring, but physical stone chip protection requires Paint Protection Film (PPF).
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

export default CeramicCoatingPage;
