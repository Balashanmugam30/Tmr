import React, { useState, useEffect } from 'react';
import { companyData } from '@/data/company';

export const SunControlFilmsPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Sun-Control Solar Films in Tiruppur | TMR Car Care";
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: "INFRARED HEAT REJECTION", desc: "Nano-ceramic technology engineered to block harsh solar heat without darkening window glass." },
    { title: "99% UV SHIELD", desc: "Prevents harmful ultraviolet rays from aging interior leather, dashboard plastics, and cabin materials." },
    { title: "GLARE REDUCTION", desc: "Enhances daytime visibility and reduces headlight glare during night driving." },
    { title: "SIGNAL FRIENDLY", desc: "100% non-metallic construction ensuring zero interference with GPS, cellular, or RFID signals." },
  ];

  const faqs = [
    { q: "Do sun control films affect GPS or mobile reception?", a: "No. TMR installs 100% non-metallic nano-ceramic films that do not interfere with cell signals, radio, or satellite navigation." },
    { q: "Will solar film make the car interior dark at night?", a: "We offer optical-grade high VLT (Visible Light Transmission) ceramic films designed to maximize heat rejection while maintaining legal clarity." },
    { q: "How long does installation take?", a: "Complete glass tinting for all windows takes approximately 3 to 4 hours in our dust-controlled studio." },
  ];

  return (
    <div className="w-full bg-[#fff8f6] text-[#111111] font-manrope selection:bg-[#FF4B00] selection:text-white pt-20">
      
      {/* SECTION 01 — HERO */}
      <section className="w-full bg-[#050505] text-white py-24 sm:py-32 relative overflow-hidden border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block">
              SERVICE 05 // SOLAR PROTECTION
            </span>
            <h1 className="font-manrope font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
              LIGHT &amp;<br />
              <span className="text-[#FF4B00]">GLASS STUDY.</span>
            </h1>
            <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed max-w-xl">
              Advanced nano-ceramic solar control films installed in Tiruppur for thermal heat rejection, UV protection, and cabin comfort.
            </p>
            <div className="pt-4">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#FF4B00] text-white font-bold text-xs uppercase tracking-widest px-8 py-5 hover:bg-white hover:text-[#111111] transition-all duration-300"
              >
                <span>ENQUIRE ON SUN-CONTROL</span>
                <span className="text-base">↗</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border border-white/10 bg-[#111111]">
              <img
                src="/images/services/feature/ceramic-feature.jpg"
                alt="Sun control solar film glass installation at TMR Car Care Tiruppur"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — PERFORMANCE */}
      <section className="w-full py-20 sm:py-28 border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-14">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              THERMAL BARRIER
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#111111]">
              CABIN COMFORT REDEFINED.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="border-t border-[#D8D8D5] pt-6 space-y-3">
                <span className="font-editorial text-xl italic text-[#FF4B00] block">0{idx + 1}</span>
                <h3 className="font-intertight font-extrabold text-lg uppercase tracking-wider text-[#111111]">
                  {feat.title}
                </h3>
                <p className="text-xs text-[#858585] leading-relaxed">{feat.desc}</p>
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
              SOLAR FILM GUIDANCE
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl uppercase tracking-tight text-[#111111]">
              REGULATIONS &amp; CARE.
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
            READY TO SHIELD YOUR CABIN?
          </span>
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white">
            ENQUIRE ON SUN-CONTROL.
          </h2>
          <p className="text-xs sm:text-sm text-white/70">
            Contact TMR Car Care Tiruppur on WhatsApp for shade recommendations and fitment pricing.
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
