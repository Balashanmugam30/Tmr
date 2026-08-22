import React, { useState, useEffect } from 'react';
import { companyData } from '@/data/company';

export const CarWashPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Car Wash & Cleaning Services in Tiruppur | TMR Car Care";
    window.scrollTo(0, 0);
  }, []);

  const washSteps = [
    { num: "01", title: "PRE-RINSE", desc: "High-pressure touchless pre-wash to dislodge heavy dirt, grit, and road grime without touching the clearcoat." },
    { num: "02", title: "SNOW FOAM", desc: "pH-neutral high-density foam encapsulation that breaks down organic film and lifts surface contaminants." },
    { num: "03", title: "CONTACT WASH", desc: "Ultra-soft microfibre mitt wash using the two-bucket grit-guard method to eliminate swirl-inducing friction." },
    { num: "04", title: "THE FINISH", desc: "Purified water rinse and non-contact warm air drying, followed by tire dressing and streak-free glass clarify." },
  ];

  const inclusions = [
    { category: "EXTERIOR BODY", items: ["pH-Neutral Foam Wash", "Bug & Tar Decontamination", "Door Jam & Sill Clean", "Microfibre Towel Dry"] },
    { category: "INTERIOR REFRESH", items: ["High-Power Vacuuming", "Dashboard & Console Wipe", "Air Vent Dusting", "Floor Mat Sanitization"] },
    { category: "WHEELS & TYRES", items: ["Non-Acidic Wheel Cleaner", "Brake Dust Dissolution", "Tire Scrub & Dressing", "Arch Pressure Wash"] },
    { category: "GLASS & FINISHING", items: ["Streak-Free Window Clean", "Mirror Polish", "Exhaust Tip Wipe", "Final Inspection Check"] },
  ];

  const faqs = [
    { q: "How does your wash process prevent swirl marks?", a: "We strictly enforce a multi-stage touchless pre-rinse, pH-neutral snow foam lubrication, and grit-guard two-bucket washing using plush microfibre mitts." },
    { q: "How long does a full wash and interior refresh take?", a: "A standard studio wash and interior refresh takes approximately 90 to 120 minutes depending on vehicle size and condition." },
    { q: "Do you use acidic or harsh chemicals on wheels?", a: "Never. We use non-acidic, pH-neutral iron-dissolving cleaners safe for all factory painted, chrome, and diamond-cut alloy wheels." },
    { q: "Can I book a studio appointment online or via WhatsApp?", a: "Yes. Click 'Book Studio Cleaning' to connect directly with our studio manager in Tiruppur." },
  ];

  return (
    <div className="w-full bg-[#fff8f6] text-[#111111] font-manrope selection:bg-[#FF4B00] selection:text-white pt-20">
      
      {/* SECTION 01 — HERO */}
      <section className="w-full bg-[#050505] text-white py-24 sm:py-32 relative overflow-hidden border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block">
              SERVICE 01 // CARE & MAINTENANCE
            </span>
            <h1 className="font-manrope font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
              RESET THE<br />
              <span className="text-[#FF4B00]">SURFACE.</span>
            </h1>
            <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed max-w-xl">
              Precision pH-neutral washing, safe contact decontamination, and interior sanitization engineered for car owners in Tiruppur who value paint integrity.
            </p>
            <div className="pt-4">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#FF4B00] text-white font-bold text-xs uppercase tracking-widest px-8 py-5 hover:bg-white hover:text-[#111111] transition-all duration-300"
              >
                <span>BOOK STUDIO CLEANING</span>
                <span className="text-base">↗</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border border-white/10 bg-[#111111]">
              <img
                src="/images/services/diagnostic/diagnostic-clean-finish.jpg"
                alt="Safe snow foam car wash and cleaning at TMR Car Care in Tiruppur"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — PHILOSOPHY */}
      <section className="w-full py-20 sm:py-28 border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="max-w-3xl space-y-4">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block">
              OUR PHILOSOPHY
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#111111]">
              EVERY SURFACE MATTERS.
            </h2>
            <p className="text-sm sm:text-base text-[#858585] leading-relaxed">
              Improper washing is the leading cause of swirl marks, micro-marring, and dulled clearcoat clarity. At TMR, every wash follows strict touchless pre-rinse protocols to guarantee surface safety.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 03 — PROCESS */}
      <section className="w-full py-20 sm:py-28 bg-[#050505] text-white border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-14">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              TECHNICAL STEPS
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white">
              THE WASH, SEEN IN MOTION.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {washSteps.map((step) => (
              <div key={step.num} className="border-t border-white/10 pt-6 space-y-3">
                <span className="font-editorial text-xl italic text-[#FF4B00] block">{step.num}</span>
                <h3 className="font-intertight font-extrabold text-lg uppercase tracking-wider text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 — INCLUSIONS */}
      <section className="w-full py-20 sm:py-28 border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-14">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              SERVICE SCOPE
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#111111]">
              STANDARD INCLUSIONS.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {inclusions.map((group) => (
              <div key={group.category} className="border-t border-[#D8D8D5] pt-6 space-y-4">
                <h3 className="font-manrope font-extrabold text-sm uppercase tracking-widest text-[#111111]">
                  {group.category}
                </h3>
                <ul className="space-y-2 text-xs text-[#858585]">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#FF4B00]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — FAQ */}
      <section className="w-full py-20 sm:py-28 border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl uppercase tracking-tight text-[#111111]">
              WASH PROTOCOL QUESTIONS.
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

      {/* SECTION 06 — CTA */}
      <section className="w-full bg-[#050505] text-white py-20 sm:py-28 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block">
            READY TO WASH?
          </span>
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white">
            BOOK STUDIO CLEANING.
          </h2>
          <p className="text-xs sm:text-sm text-white/70">
            Contact TMR Car Care in Tiruppur directly on WhatsApp to schedule your appointment.
          </p>
          <div className="pt-4 flex justify-center">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#FF4B00] text-white font-bold text-xs uppercase tracking-widest px-8 py-5 hover:bg-white hover:text-[#111111] transition-all duration-300"
            >
              <span>BOOK VIA WHATSAPP</span>
              <span className="text-base">↗</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
