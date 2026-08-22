import React, { useState, useEffect } from 'react';
import { companyData } from '@/data/company';

export const CarAccessoriesPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Car Accessories & Studio Upgrades in Tiruppur | TMR Car Care";
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { name: "CABIN COMFORT", desc: "Custom 7D/9D floor liners, ergonomic memory foam neck cushions, and premium seat upholstery upgrades." },
    { name: "PRECISION MATTING", desc: "Laser-measured all-weather floor mats engineered for perfect edge retention and spill containment." },
    { name: "UTILITY & LIGHTING", desc: "OEM-fit LED illumination upgrades, ambient cabin lighting, and heavy-duty boot organizers." },
    { name: "CAR CARE KITS", desc: "Curated studio-grade detailing microfibres, pH-neutral maintenance shampoos, and ceramic detailers." },
  ];

  const faqs = [
    { q: "Are accessories custom-fitted for specific car models?", a: "Yes. All floor liners, seat covers, and interior accessories are vehicle-specific for seamless OEM fitment." },
    { q: "Do you provide installation at the Tiruppur studio?", a: "Yes. Our technicians fit all accessories in our clean studio environment to ensure clean wiring and zero panel clips damage." },
    { q: "How can I check if an accessory fits my car model?", a: "Send your vehicle make, model, and year to our studio team on WhatsApp for immediate compatibility confirmation." },
  ];

  return (
    <div className="w-full bg-[#fff8f6] text-[#111111] font-manrope selection:bg-[#FF4B00] selection:text-white pt-20">
      
      {/* SECTION 01 — HERO */}
      <section className="w-full bg-[#050505] text-white py-24 sm:py-32 relative overflow-hidden border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block">
              SERVICE 06 // STUDIO ACCESSORIES
            </span>
            <h1 className="font-manrope font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
              EDITORIAL<br />
              <span className="text-[#FF4B00]">CATALOGUE.</span>
            </h1>
            <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed max-w-xl">
              Curated premium automotive interior accessories, precision floor matting, and studio maintenance equipment available at TMR Car Care in Tiruppur.
            </p>
            <div className="pt-4">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#FF4B00] text-white font-bold text-xs uppercase tracking-widest px-8 py-5 hover:bg-white hover:text-[#111111] transition-all duration-300"
              >
                <span>ENQUIRE ON ACCESSORIES</span>
                <span className="text-base">↗</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border border-white/10 bg-[#111111]">
              <img
                src="/images/services/diagnostic/diagnostic-interior.jpg"
                alt="Premium car accessories and interior detailing at TMR Car Care Tiruppur"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — CATEGORIES */}
      <section className="w-full py-20 sm:py-28 border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-14">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              EQUIPMENT CATEGORIES
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#111111]">
              PRECISION FITTED EQUIPMENT.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="border-t border-[#D8D8D5] pt-6 space-y-3">
                <span className="font-editorial text-xl italic text-[#FF4B00] block">0{idx + 1}</span>
                <h3 className="font-intertight font-extrabold text-lg uppercase tracking-wider text-[#111111]">
                  {cat.name}
                </h3>
                <p className="text-xs text-[#858585] leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — FAQ */}
      <section className="w-full py-20 sm:py-28 border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              FITMENT GUIDANCE
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl uppercase tracking-tight text-[#111111]">
              ACCESSORIES &amp; FITMENT.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="border-b border-[#D8D8D5] pb-4 cursor-pointer"
                >
                  <div className="flex justify-between items-center py-2">
                    <h3 className="font-manrope font-bold text-base text-[#111111]">
                      {faq.q}
                    </h3>
                    <span className="text-xl text-[#FF4B00]">{isOpen ? "−" : "+"}</span>
                  </div>
                  {isOpen && (
                    <p className="text-xs sm:text-sm text-[#858585] pt-2 leading-relaxed">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 04 — CTA */}
      <section className="w-full bg-[#050505] text-white py-20 sm:py-28 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block">
            NEED CUSTOM FITMENT?
          </span>
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white">
            ENQUIRE ON ACCESSORIES.
          </h2>
          <p className="text-xs sm:text-sm text-white/70">
            Share your vehicle details on WhatsApp to receive fitment availability and studio pricing.
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
