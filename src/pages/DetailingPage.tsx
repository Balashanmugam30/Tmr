import React, { useState, useEffect } from 'react';
import { companyData } from '@/data/company';

export const DetailingPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Car Detailing & Paint Care in Tiruppur | TMR Car Care";
    window.scrollTo(0, 0);
  }, []);

  const scopes = [
    { name: "EXTERIOR PAINT", desc: "Multi-stage machine compounding and finishing polish to permanently eliminate swirl marks, haze, and light scratches." },
    { name: "INTERIOR LEATHER / ALCANTARA", desc: "Deep steam extraction, organic leather conditioning, and fabric protection against oils and fading." },
    { name: "GLASS CLARITY", desc: "Hard-water mineral spot removal and hydrophobic windshield ceramic coating for night driving visibility." },
    { name: "TRIM & PLASTICS", desc: "UV restoration and ceramic trim sealing to prevent fading and discoloration." },
    { name: "WHEEL ARCHES & ALLOYS", desc: "Iron contaminant removal, wheel well dressing, and high-temp alloy sealant." },
  ];

  const faqs = [
    { q: "What is the difference between a car wash and paint detailing?", a: "A wash cleans surface dirt. Detailing restores the clearcoat by removing swirls, scratches, oxidation, and deeply conditioning interior materials." },
    { q: "Can deep scratches be removed during paint correction?", a: "Scratches that have not penetrated through the clearcoat layer into the primer can be completely leveled and removed." },
    { q: "How long does a full multi-stage detail take?", a: "Depending on vehicle size and paint defect severity, a comprehensive detail takes between 1 to 2 full studio days." },
    { q: "How often should a vehicle undergo full paint correction?", a: "When properly maintained with safe washing methods, full paint correction is typically only required once every 2 to 3 years." },
  ];

  return (
    <div className="w-full bg-[#fff8f6] text-[#111111] font-manrope selection:bg-[#FF4B00] selection:text-white pt-20">
      
      {/* SECTION 01 — HERO */}
      <section className="w-full bg-[#050505] text-white py-24 sm:py-32 relative overflow-hidden border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block">
              SERVICE 02 // PAINT CORRECTION & DETAILING
            </span>
            <h1 className="font-manrope font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
              REVEAL THE<br />
              <span className="text-[#FF4B00]">FINISH.</span>
            </h1>
            <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed max-w-xl">
              Professional car detailing and multi-stage paint correction in Tiruppur. We eliminate swirls, scratches, and oxidation to restore original showroom gloss.
            </p>
            <div className="pt-4">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#FF4B00] text-white font-bold text-xs uppercase tracking-widest px-8 py-5 hover:bg-white hover:text-[#111111] transition-all duration-300"
              >
                <span>ENQUIRE ABOUT DETAILING</span>
                <span className="text-base">↗</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border border-white/10 bg-[#111111]">
              <img
                src="/images/services/diagnostic/diagnostic-paint-correction.jpg"
                alt="Paint correction machine polishing at TMR Car Care in Tiruppur"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — STATEMENT */}
      <section className="w-full py-20 sm:py-28 border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="max-w-3xl space-y-4">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block">
              INSPECTION PROTOCOL
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#111111]">
              INSPECTION: SEE WHAT OTHERS MISS.
            </h2>
            <p className="text-sm sm:text-base text-[#858585] leading-relaxed">
              Before a single polisher touches your vehicle, our detailers inspect the clearcoat under high-intensity LED illumination to measure paint depth and identify scratch patterns.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 03 — SCOPE */}
      <section className="w-full py-20 sm:py-28 bg-[#050505] text-white border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-14">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              DETAILING SCOPE
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white">
              WHAT WE LOOK AFTER.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {scopes.map((scope, idx) => (
              <div key={idx} className="border-t border-white/10 pt-6 space-y-3">
                <span className="font-editorial text-xl italic text-[#FF4B00] block">0{idx + 1}</span>
                <h3 className="font-intertight font-extrabold text-lg uppercase tracking-wider text-white">
                  {scope.name}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed">{scope.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 — FAQ */}
      <section className="w-full py-20 sm:py-28 border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              EXPERT GUIDANCE
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl uppercase tracking-tight text-[#111111]">
              DETAILING QUESTIONS.
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

      {/* SECTION 05 — CTA */}
      <section className="w-full bg-[#050505] text-white py-20 sm:py-28 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block">
            READY TO RESTORE YOUR PAINT?
          </span>
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white">
            ENQUIRE ABOUT DETAILING.
          </h2>
          <p className="text-xs sm:text-sm text-white/70">
            Talk with our technicians in Tiruppur to discuss your vehicle's paint condition and schedule an inspection.
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
