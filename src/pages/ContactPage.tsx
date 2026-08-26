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
      
      {/* 01 / FULL-BLEED EDITORIAL CONTACT HERO */}
      <section className="relative w-full lg:h-[calc(100vh-80px)] lg:min-h-[620px] lg:max-h-[860px] mt-20 border-b border-[#D8D8D5] overflow-hidden bg-[#F4C1A5]">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12">
          
          {/* LEFT EDITORIAL PANEL: Muted Soft Pastel Orange / Peach (#F4C1A5) */}
          <div className="lg:col-span-6 bg-[#F4C1A5] text-[#0A0A0A] p-8 sm:p-14 lg:p-20 lg:pl-[8vw] flex flex-col justify-center h-full relative">
            
            {/* Headline — First Major Visual Element */}
            <div>
              <h1 className="font-['Instrument_Serif','Editorial_New',serif] font-normal text-5xl sm:text-7xl lg:text-[88px] text-[#0A0A0A] uppercase tracking-tight leading-[0.96] select-none">
                GET IN <br />
                TOUCH WITH <br />
                <span className="font-['Bricolage_Grotesque',serif] font-extrabold italic text-[#FF4B00] lowercase pr-4 inline-block transform -rotate-1">
                  tmr.
                </span>
              </h1>
            </div>

            {/* Supporting Copy & CTA */}
            <div className="space-y-6 pt-8 sm:pt-12">
              <p className="font-manrope text-sm sm:text-base text-[#3A3837] leading-relaxed max-w-md font-normal border-l-2 border-[#FF4B00] pl-4">
                Tell us what your vehicle needs and we'll help you find the right next step.
              </p>

              <div>
                <a
                  href="#contact-details"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact-details')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF4B00] transition-colors group cursor-pointer"
                >
                  <span>CONTACT TMR</span>
                  <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT PHOTOGRAPHIC PANEL: Dedicated Generated Automotive Detailing Photo */}
          <div className="lg:col-span-6 relative min-h-[360px] lg:h-full bg-[#0A0A0A] overflow-hidden">
            <img
              src="/images/contact/contact-hero-generated.jpg"
              alt="Professional automotive detailing, vehicle paint care and surface refinement inside studio"
              className="w-full h-full object-cover object-center"
            />
          </div>

        </div>
      </section>

      {/* 02 / DIRECT CHANNELS & STUDIO LOCATION */}
      <section id="contact-details" className="py-16 sm:py-24 px-5 md:px-16 max-w-[1360px] mx-auto border-b border-[#D8D8D5] scroll-mt-24">
        <div className="mb-10">
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
