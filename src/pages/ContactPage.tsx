import React, { useState, useEffect } from 'react';
import { companyData } from '@/data/company';

export const ContactPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    service: 'Detailing & Paint Care',
    message: '',
  });

  useEffect(() => {
    document.title = "Contact TMR Car Care | Detailing Studio in Tiruppur";
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "Do I need to book an appointment in advance?",
      a: "Yes, we operate strictly by appointment for detailing, ceramic coating, and PPF installations to allocate dedicated studio time to each vehicle. Car wash services are subject to daily bay availability.",
    },
    {
      q: "Where is the studio located in Tiruppur?",
      a: "Our studio is located on Avinashi Road, Near Hope College Junction, Tiruppur. Full directions and Google Maps links are available on this page.",
    },
    {
      q: "Can I get a quote before bringing my car?",
      a: "Absolutely. You can send us photographs and vehicle details via WhatsApp or our enquiry form below for an initial consultation and estimate.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept UPI, cash, credit/debit cards, and direct bank transfers.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello TMR Car Care!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nVehicle: ${formData.vehicle}\nService Interest: ${formData.service}\nNotes: ${formData.message}`;
    const url = `https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="w-full bg-[#F5F4EF] text-[#050505] font-manrope selection:bg-[#FF4B00] selection:text-white pt-20">
      
      {/* 01 / PREMIUM EDITORIAL DUAL-TONE CONTACT CONSOLE HERO */}
      <section className="relative w-full min-h-[70vh] lg:min-h-[78vh] flex flex-col justify-center border-b border-[#D8D8D5]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[70vh] lg:min-h-[78vh]">
          
          {/* LEFT PANEL: DEEP CHARCOAL / NEAR-BLACK (#0A0A0A) */}
          <div className="lg:col-span-6 bg-[#0A0A0A] text-white p-8 sm:p-14 lg:p-20 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle micro noise texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />

            <div className="relative z-10 space-y-6 max-w-lg my-auto pt-6 lg:pt-0">
              {/* Display Headline */}
              <h1 className="font-['Syncopate'] font-bold text-5xl sm:text-7xl lg:text-[84px] text-white uppercase tracking-[0.08em] leading-[0.96] select-none">
                <span className="block text-white">LET'S</span>
                <span className="block font-['Bricolage_Grotesque'] font-extrabold italic text-[#FF4B00] lowercase tracking-normal transform -rotate-1 inline-block">
                  talk.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] leading-relaxed max-w-md font-normal pt-2 border-l-2 border-[#FF4B00] pl-4">
                Tell us what your vehicle needs. We'll help you find the right next step.
              </p>

              {/* Primary Compact Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp}?text=Hello%20TMR%20Car%20Care`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF4B00] text-white px-8 py-4 font-manrope font-extrabold text-xs uppercase tracking-widest hover:bg-white hover:text-[#0A0A0A] transition-colors shadow-lg"
                >
                  WHATSAPP NOW →
                </a>
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="border border-white/20 text-white px-8 py-4 font-manrope font-extrabold text-xs uppercase tracking-widest hover:bg-white hover:text-[#0A0A0A] transition-colors"
                >
                  CALL TMR →
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: WARM OFF-WHITE / IVORY (#F3F0E9) */}
          <div className="lg:col-span-6 bg-[#F3F0E9] text-[#0A0A0A] p-8 sm:p-14 lg:p-20 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-[#D8D8D5]">
            <div className="space-y-6 max-w-lg w-full mx-auto my-auto">
              
              {/* Row 01: WHATSAPP */}
              <div className="pt-2 pb-4 border-b border-[#D8D8D5]">
                <span className="text-[11px] font-mono font-bold text-[#FF4B00] uppercase tracking-widest block mb-1">
                  01 / WHATSAPP
                </span>
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-manrope font-extrabold text-xl sm:text-2xl text-[#0A0A0A] hover:text-[#FF4B00] transition-colors inline-flex items-center gap-3 group"
                >
                  <span>{companyData.contact.whatsappFormatted}</span>
                  <span className="text-base group-hover:translate-x-1 transition-transform">↗</span>
                </a>
              </div>

              {/* Row 02: CALL */}
              <div className="pb-4 border-b border-[#D8D8D5]">
                <span className="text-[11px] font-mono font-bold text-[#FF4B00] uppercase tracking-widest block mb-1">
                  02 / CALL
                </span>
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="font-manrope font-extrabold text-xl sm:text-2xl text-[#0A0A0A] hover:text-[#FF4B00] transition-colors inline-flex items-center gap-3 group"
                >
                  <span>{companyData.contact.phoneFormatted}</span>
                  <span className="text-base group-hover:translate-x-1 transition-transform">↗</span>
                </a>
              </div>

              {/* Row 03: EMAIL */}
              <div className="pb-4 border-b border-[#D8D8D5]">
                <span className="text-[11px] font-mono font-bold text-[#FF4B00] uppercase tracking-widest block mb-1">
                  03 / EMAIL
                </span>
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="font-manrope font-extrabold text-lg sm:text-xl text-[#0A0A0A] hover:text-[#FF4B00] transition-colors inline-flex items-center gap-3 group"
                >
                  <span>{companyData.contact.email}</span>
                  <span className="text-base group-hover:translate-x-1 transition-transform">↗</span>
                </a>
              </div>

              {/* Row 04: STUDIO ADDRESS & DIRECTIONS */}
              <div className="pb-4 border-b border-[#D8D8D5]">
                <span className="text-[11px] font-mono font-bold text-[#FF4B00] uppercase tracking-widest block mb-1">
                  04 / STUDIO
                </span>
                <p className="font-manrope font-bold text-sm sm:text-base text-[#0A0A0A] leading-relaxed">
                  {companyData.address.fullText}
                </p>
                <div className="pt-2">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(companyData.address.fullText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono font-bold text-xs uppercase tracking-widest text-[#FF4B00] hover:text-[#0A0A0A] transition-colors group"
                  >
                    <span>GET DIRECTIONS</span>
                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                  </a>
                </div>
              </div>

              {/* Row 05: HOURS */}
              <div className="pb-2">
                <span className="text-[11px] font-mono font-bold text-[#FF4B00] uppercase tracking-widest block mb-1">
                  05 / HOURS
                </span>
                <p className="font-manrope font-bold text-xs sm:text-sm text-[#0A0A0A]">{companyData.hours.weekdays}</p>
                <p className="font-manrope text-xs text-[#666666] pt-0.5">{companyData.hours.sunday}</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 02 / SERVICE ENQUIRY FORM */}
      <section className="py-20 sm:py-32 px-5 md:px-16 max-w-[1360px] mx-auto border-b border-[#D8D8D5]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5 space-y-4">
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#050505]">
              DIRECT STUDIO INQUIRY.
            </h2>
            <p className="text-sm text-[#858585] leading-relaxed">
              Select your service interest and vehicle details to begin a consultation with our studio team.
            </p>
          </div>

          <div className="col-span-12 md:col-span-7 bg-[#050505] text-white p-8 sm:p-12 border border-[#D8D8D5]">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D8D8D5] mb-2">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-white/5 border border-white/20 p-4 text-sm text-white focus:border-[#FF4B00] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D8D8D5] mb-2">
                  PHONE / WHATSAPP NUMBER
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full bg-white/5 border border-white/20 p-4 text-sm text-white focus:border-[#FF4B00] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D8D8D5] mb-2">
                  VEHICLE MAKE &amp; MODEL
                </label>
                <input
                  type="text"
                  required
                  value={formData.vehicle}
                  onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                  placeholder="e.g. BMW M4 / Porsche 911"
                  className="w-full bg-white/5 border border-white/20 p-4 text-sm text-white focus:border-[#FF4B00] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D8D8D5] mb-2">
                  SERVICE INTEREST
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#111111] border border-white/20 p-4 text-sm text-white focus:border-[#FF4B00] focus:outline-none"
                >
                  <option value="Car Wash & Cleaning">Car Wash &amp; Cleaning</option>
                  <option value="Detailing & Paint Care">Detailing &amp; Paint Care</option>
                  <option value="Ceramic Coating">Ceramic Coating</option>
                  <option value="PPF & Paint Protection">PPF &amp; Paint Protection</option>
                  <option value="Sun-Control Films">Sun-Control Films</option>
                  <option value="Car Accessories">Car Accessories</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D8D8D5] mb-2">
                  MESSAGE / SPECIFIC REQUIREMENTS
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your vehicle's current condition or specific services needed..."
                  className="w-full bg-white/5 border border-white/20 p-4 text-sm text-white focus:border-[#FF4B00] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-[#FF4B00] text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#050505] transition-colors"
              >
                SUBMIT ENQUIRY VIA WHATSAPP →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 03 / FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 sm:py-32 px-5 md:px-16 max-w-[1360px] mx-auto border-b border-[#D8D8D5]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4 space-y-4">
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#050505]">
              CONTACT FAQ.
            </h2>
          </div>

          <div className="col-span-12 md:col-span-8 flex flex-col border-t border-[#D8D8D5]">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border-b border-[#D8D8D5]">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-6 flex justify-between items-center text-left group"
                  >
                    <span className="font-manrope font-bold text-base sm:text-xl text-[#050505] group-hover:text-[#FF4B00] transition-colors">
                      {faq.q}
                    </span>
                    <span className="text-2xl text-[#FF4B00] transition-transform duration-300">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-6">
                      <p className="font-manrope text-sm sm:text-base text-[#858585] leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};
