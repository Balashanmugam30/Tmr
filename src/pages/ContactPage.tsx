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
    <div className="w-full bg-[#F5F4EF] text-[#050505] font-manrope selection:bg-[#FF4B00] selection:text-white">
      
      {/* 01 / ONE CONTINUOUS PREMIUM EDITORIAL CONTACT HERO */}
      <section className="relative w-full min-h-[75vh] lg:min-h-[82vh] flex flex-col justify-center overflow-hidden border-b border-[#D8D8D5] bg-gradient-to-r from-[#080808] via-[#121212] via-65% to-[#F3F0E9] text-white selection:bg-[#FF4B00] selection:text-white pt-28 sm:pt-36 pb-16 lg:pb-24">
        
        {/* Subtle background noise texture */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-[1360px] w-full mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          
          {/* Left / Center-Left Editorial Column */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            
            {/* Small Eyebrow with Orange Accent Dot */}
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#FF4B00]" />
              <span className="font-mono font-bold text-xs uppercase tracking-[0.25em] text-[#FF4B00]">
                CONTACT TMR
              </span>
              <div className="h-px w-12 bg-white/20" />
            </div>

            {/* Display Headline */}
            <h1 className="font-['Syncopate'] font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[96px] text-white uppercase tracking-[0.08em] leading-[0.94] select-none max-w-3xl">
              <span className="block text-white">LET'S</span>
              <span className="block font-['Bricolage_Grotesque'] font-extrabold italic text-[#FF4B00] lowercase tracking-normal transform -rotate-1 hover:rotate-0 transition-transform duration-300 inline-block pr-4">
                talk.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="font-manrope text-base sm:text-xl text-[#D8D8D5] leading-relaxed max-w-xl font-normal border-l-2 border-[#FF4B00] pl-5 pt-1">
              Tell us what your vehicle needs. We'll help you find the right next step.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=Hello%20TMR%20Car%20Care`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF4B00] text-white px-9 py-4 sm:py-5 font-manrope font-extrabold text-xs sm:text-sm uppercase tracking-widest hover:bg-white hover:text-[#080808] transition-colors shadow-2xl inline-flex items-center gap-3"
              >
                <span>WHATSAPP TMR</span>
                <span className="text-base">→</span>
              </a>

              <a
                href={`tel:${companyData.contact.phone}`}
                className="border border-white/25 text-white px-9 py-4 sm:py-5 font-manrope font-extrabold text-xs sm:text-sm uppercase tracking-widest hover:bg-white hover:text-[#080808] transition-colors inline-flex items-center gap-3"
              >
                <span>CALL TMR</span>
                <span className="text-base">→</span>
              </a>
            </div>

          </div>

          {/* Right Side: Intentional Negative Space with Subtle Tonal Separation Line */}
          <div className="hidden lg:flex lg:col-span-4 justify-end items-center relative">
            <div className="w-px h-64 bg-gradient-to-b from-transparent via-white/15 to-transparent mr-12" />
          </div>

        </div>

      </section>

      {/* 02 / DIRECT CHANNELS & STUDIO LOCATION */}
      <section className="py-20 sm:py-28 px-5 md:px-16 max-w-[1360px] mx-auto border-b border-[#D8D8D5]">
        <div className="mb-12">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#050505]">
            DIRECT CHANNELS &amp; LOCATION.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Channels Grid & Address */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 border border-[#D8D8D5] bg-white hover:border-[#FF4B00] transition-colors flex flex-col justify-between"
              >
                <span className="font-mono text-[10px] font-bold text-[#FF4B00] uppercase tracking-widest block mb-2">
                  01 / WHATSAPP
                </span>
                <span className="font-manrope font-extrabold text-sm text-[#050505] group-hover:text-[#FF4B00] transition-colors">
                  {companyData.contact.whatsappFormatted} ↗
                </span>
              </a>

              {/* Call */}
              <a
                href={`tel:${companyData.contact.phone}`}
                className="group p-6 border border-[#D8D8D5] bg-white hover:border-[#FF4B00] transition-colors flex flex-col justify-between"
              >
                <span className="font-mono text-[10px] font-bold text-[#FF4B00] uppercase tracking-widest block mb-2">
                  02 / CALL
                </span>
                <span className="font-manrope font-extrabold text-sm text-[#050505] group-hover:text-[#FF4B00] transition-colors">
                  {companyData.contact.phoneFormatted} ↗
                </span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${companyData.contact.email}`}
                className="group p-6 border border-[#D8D8D5] bg-white hover:border-[#FF4B00] transition-colors flex flex-col justify-between"
              >
                <span className="font-mono text-[10px] font-bold text-[#FF4B00] uppercase tracking-widest block mb-2">
                  03 / EMAIL
                </span>
                <span className="font-manrope font-extrabold text-xs text-[#050505] group-hover:text-[#FF4B00] transition-colors truncate">
                  {companyData.contact.email} ↗
                </span>
              </a>
            </div>

            {/* Studio Address & Hours */}
            <div className="p-8 border border-[#D8D8D5] bg-white space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#FF4B00] uppercase tracking-widest block mb-2">
                  STUDIO ADDRESS
                </span>
                <p className="font-bold text-base text-[#050505] leading-relaxed">
                  {companyData.address.fullText}
                </p>
                <div className="pt-3">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(companyData.address.fullText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono font-bold text-xs uppercase tracking-widest text-[#FF4B00] hover:text-[#050505] transition-colors"
                  >
                    <span>OPEN IN GOOGLE MAPS</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D8D8D5]">
                <span className="text-[10px] font-mono font-bold text-[#FF4B00] uppercase tracking-widest block mb-2">
                  STUDIO HOURS
                </span>
                <p className="font-bold text-sm text-[#050505]">{companyData.hours.weekdays}</p>
                <p className="font-bold text-sm text-[#666666] pt-0.5">{companyData.hours.sunday}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Location Image */}
          <div className="lg:col-span-6 h-[340px] sm:h-[460px] border border-[#D8D8D5] bg-[#050505] overflow-hidden rounded-xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoP49MCpRS9UJoKPjDAjmcShcGcukxlYkt8tSe6V6Sn_Ef9vIECsIUs2s_9uE7qGGHqYfzyBzVT-yKx6BYQGA-XpLivEsfgWVdlJ3o2Fbd5ipckWqw0x1ZMJG3RmFKqb_-hmCGggljoPRwB-ZkSGPSU5M2c7fNtpx04lmNjDo0kO2ITw_WH2z_Z2wp252NtvRDmRnpf23awUTlqSXZKT-6g8W-G2-bBj_7AGPLU1gmBitXtyfng6nw"
              alt="TMR Car Care studio location on Avinashi Road Tiruppur"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* 03 / SERVICE ENQUIRY FORM */}
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

      {/* 04 / FREQUENTLY ASKED QUESTIONS */}
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
