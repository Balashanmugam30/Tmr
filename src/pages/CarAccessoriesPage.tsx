import React, { useEffect } from 'react';
import { companyData } from '@/data/company';

export const CarAccessoriesPage: React.FC = () => {
  useEffect(() => {
    document.title = "Car Accessories & Interior Fitment Tiruppur | TMR Car Care";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', "Curated interior protection, custom floor matting, ambient lighting, and studio maintenance accessories fitted at TMR Car Care in Tiruppur.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#fff8f6] text-[#111111] font-manrope selection:bg-[#FF4B00] selection:text-white pt-20 overflow-x-hidden">
      
      {/* 01 HERO SECTION */}
      <section className="w-full bg-[#050505] text-white py-24 sm:py-32 relative overflow-hidden border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block">
              06 CAR ACCESSORIES
            </span>
            <h1 className="font-manrope font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
              BUILT FOR THE DRIVE.
            </h1>
            <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed max-w-xl">
              Precision fitted cabin equipment, 7D floor liners, ergonomic seating cushions, and studio-grade detailing maintenance kits in Tiruppur.
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
                src="/images/services/accessories/accessories-stitch-01.jpg"
                alt="BUILT FOR THE DRIVE. at TMR Car Care Studio Tiruppur"
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
              THE OBJECTS BEHIND THE UPGRADE.
            </h2>
            <p className="text-sm sm:text-base text-[#858585] leading-relaxed">
              Every accessory in our catalogue is selected for exact OEM fitment, high material durability, and seamless visual integration with your car's interior.
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
                <img src="/images/services/accessories/accessories-stitch-02.jpg" alt="INTERIOR PROTECTION at TMR Car Care Studio Tiruppur" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-intertight font-extrabold text-xl uppercase tracking-wider text-white">
                INTERIOR PROTECTION
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                Custom 7D floor liners & liquid-repellent seat covers.
              </p>
            </div>
            <div className="border-t border-white/10 pt-6 space-y-4 font-manrope">
              <span className="font-editorial text-2xl italic text-[#FF4B00] block">02</span>
              <div className="aspect-[16/10] w-full overflow-hidden border border-white/10 bg-[#111111] mb-4">
                <img src="/images/services/accessories/accessories-stitch-03.jpg" alt="UTILITY & CARGO at TMR Car Care Studio Tiruppur" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-intertight font-extrabold text-xl uppercase tracking-wider text-white">
                UTILITY & CARGO
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                Heavy-duty boot organizers & precision edge mats.
              </p>
            </div>
            <div className="border-t border-white/10 pt-6 space-y-4 font-manrope">
              <span className="font-editorial text-2xl italic text-[#FF4B00] block">03</span>
              <div className="aspect-[16/10] w-full overflow-hidden border border-white/10 bg-[#111111] mb-4">
                <img src="/images/services/accessories/accessories-stitch-04.jpg" alt="ENHANCEMENT & LIGHTING at TMR Car Care Studio Tiruppur" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-intertight font-extrabold text-xl uppercase tracking-wider text-white">
                ENHANCEMENT & LIGHTING
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                OEM-fit LED cabin lighting & accessories.
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
                CABIN EQUIPMENT
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#858585]">
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>7D Floor Liners</span></li>
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Memory Foam Pillows</span></li>
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Ambient Lighting</span></li>
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Care Kits</span></li>
              </ul>
            </div>
            <div className="border-t border-[#D8D8D5] pt-6 space-y-4 font-manrope">
              <h3 className="font-manrope font-extrabold text-sm uppercase tracking-widest text-[#111111]">
                STUDIO FITMENT
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#858585]">
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Clean Installation</span></li>
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Zero Clip Damage</span></li>
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>OEM Wiring</span></li>
                <li className="flex items-center gap-2"><span className="text-[#FF4B00]">•</span><span>Fitment Guarantee</span></li>
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
              IT BELONGS WITH THE CAR.
            </h2>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              Craftsmanship and fitment designed to complement your vehicle's factory interior aesthetics.
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
                Are accessories custom-fitted for specific models?
              </h3>
              <p className="text-xs sm:text-sm text-[#858585] leading-relaxed">
                Yes! All floor liners and cabin accessories are laser-measured for exact vehicle fitment.
              </p>
            </div>
            <div className="border-b border-[#D8D8D5] pb-6 font-manrope">
              <h3 className="font-manrope font-bold text-base sm:text-lg text-[#111111] mb-2">
                Do you provide studio installation?
              </h3>
              <p className="text-xs sm:text-sm text-[#858585] leading-relaxed">
                Yes. Our technicians install all equipment in our clean studio environment in Tiruppur.
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

export default CarAccessoriesPage;
