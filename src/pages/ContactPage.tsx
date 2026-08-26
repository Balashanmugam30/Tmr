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
      
      {/* 01 / FULL-BLEED EDITORIAL CONTACT HERO — EXPANDED TO VERY TOP (y=0) */}
      <section className="relative w-full h-screen min-h-[680px] border-b border-[#D8D8D5] overflow-hidden">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12">
          
          {/* LEFT EDITORIAL PANEL: Muted Soft Pastel Orange / Peach (#F4C1A5) */}
          <div className="lg:col-span-6 bg-[#F4C1A5] text-[#0A0A0A] p-8 sm:p-14 lg:p-20 lg:pl-[8vw] pt-28 sm:pt-36 flex flex-col justify-center h-full relative">
            
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

      {/* 02 / EDITORIAL DIRECTORY — REACH TMR & LOCATION */}
      <section id="contact-details" className="py-20 sm:py-28 px-6 md:px-16 max-w-[1360px] mx-auto border-b border-[#D8D8D5] scroll-mt-24">
        
        {/* Section Heading & Intro */}
        <div className="max-w-2xl mb-14">
          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-[#050505] mb-4">
            REACH TMR.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            For bookings, enquiries, or a studio visit, connect directly with the TMR Car Care team in Tiruppur.
          </p>
        </div>

        {/* Directory Grid: Left Contact Rows & Info | Right Visual Anchor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (7 cols): Editorial Clickable Rows + Location & Hours */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Clickable Editorial Contact Rows */}
            <div className="border-t border-[#D8D8D5] divide-y divide-[#D8D8D5]">
              {/* WhatsApp Row */}
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group hover:pl-2 transition-all duration-300"
              >
                <div>
                  <span className="font-mono text-[11px] font-bold text-[#FF4B00] uppercase tracking-widest block mb-1">
                    01 / WHATSAPP
                  </span>
                  <span className="font-manrope font-extrabold text-xl sm:text-2xl text-[#050505] group-hover:text-[#FF4B00] transition-colors">
                    {companyData.contact.whatsappFormatted}
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest pt-2 sm:pt-0">
                  <span>CHAT NOW</span>
                  <span className="text-base group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </div>
              </a>

              {/* Call Row */}
              <a
                href={`tel:${companyData.contact.phone}`}
                className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group hover:pl-2 transition-all duration-300"
              >
                <div>
                  <span className="font-mono text-[11px] font-bold text-[#FF4B00] uppercase tracking-widest block mb-1">
                    02 / CALL DIRECT
                  </span>
                  <span className="font-manrope font-extrabold text-xl sm:text-2xl text-[#050505] group-hover:text-[#FF4B00] transition-colors">
                    {companyData.contact.phoneFormatted}
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest pt-2 sm:pt-0">
                  <span>CALL STUDIO</span>
                  <span className="text-base group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </div>
              </a>

              {/* Email Row */}
              <a
                href={`mailto:${companyData.contact.email}`}
                className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group hover:pl-2 transition-all duration-300"
              >
                <div>
                  <span className="font-mono text-[11px] font-bold text-[#FF4B00] uppercase tracking-widest block mb-1">
                    03 / EMAIL ENQUIRY
                  </span>
                  <span className="font-manrope font-extrabold text-lg sm:text-xl text-[#050505] group-hover:text-[#FF4B00] transition-colors">
                    {companyData.contact.email}
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest pt-2 sm:pt-0">
                  <span>SEND MAIL</span>
                  <span className="text-base group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </div>
              </a>
            </div>

            {/* Location & Operating Hours Info Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              {/* Studio Location */}
              <div className="space-y-3">
                <span className="font-mono text-[11px] font-bold text-[#FF4B00] uppercase tracking-widest block">
                  STUDIO LOCATION
                </span>
                <p className="font-manrope font-bold text-base text-[#050505] leading-relaxed">
                  {companyData.address.fullText}
                </p>
                <div className="pt-2">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(companyData.address.fullText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono font-bold text-xs uppercase tracking-widest text-[#FF4B00] hover:text-[#050505] transition-colors group"
                  >
                    <span>GET DIRECTIONS</span>
                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                  </a>
                </div>
              </div>

              {/* Studio Hours */}
              <div className="space-y-3">
                <span className="font-mono text-[11px] font-bold text-[#FF4B00] uppercase tracking-widest block">
                  STUDIO HOURS
                </span>
                <div>
                  <p className="font-manrope font-bold text-sm text-[#050505]">{companyData.hours.weekdays}</p>
                  <p className="font-manrope text-xs text-[#666666] pt-1">{companyData.hours.sunday}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Studio Location Visual Anchor (New Image) */}
          <div className="lg:col-span-5 h-[420px] sm:h-[500px] bg-[#0A0A0A] overflow-hidden rounded-2xl border border-[#D8D8D5] shadow-xl relative group">
            <img
              src="/images/contact/contact-location-new.jpg"
              alt="Realistic automotive detailing studio bay at TMR Car Care Tiruppur"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#FF4B00] block mb-1">
                TIRUPPUR STUDIO BAY
              </span>
              <p className="font-manrope font-bold text-sm text-white">
                Avinashi Road Studio &amp; Inspection Bay
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* 03 / DIRECT STUDIO INQUIRY — COMPACT CONSULTATION SECTION */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1360px] mx-auto border-b border-[#D8D8D5]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Editorial Introduction */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block">
              <span className="font-mono font-bold text-xs uppercase tracking-[0.2em] text-[#FF4B00] block mb-2">
                FROM WASH TO PAINT CORRECTION TO PROTECTION
              </span>
              <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#050505] leading-[1.05]">
                TELL US ABOUT <br />YOUR VEHICLE.
              </h2>
            </div>

            <p className="font-manrope text-base text-[#5F5E5E] leading-relaxed">
              Tell us what you drive, what it needs, and we'll help you choose the right service for your vehicle.
            </p>

            <div className="pt-4 space-y-3 border-t border-[#D8D8D5]">
              <div className="flex items-center gap-3 text-xs font-bold text-[#050505] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B00]" />
                <span>DIRECT WHATSAPP CONSULTATION</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-[#050505] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B00]" />
                <span>TAILORED TIME &amp; BAY ALLOCATION</span>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Premium Form Box */}
          <div className="lg:col-span-7 bg-[#0A0A0A] text-white p-8 sm:p-12 rounded-2xl border border-[#222222] shadow-2xl">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF4B00] mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-white/5 border border-white/15 rounded-lg p-3.5 text-sm text-white focus:border-[#FF4B00] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF4B00] mb-2">
                    PHONE / WHATSAPP NUMBER
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-white/5 border border-white/15 rounded-lg p-3.5 text-sm text-white focus:border-[#FF4B00] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF4B00] mb-2">
                    VEHICLE MAKE &amp; MODEL
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.vehicle}
                    onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                    placeholder="e.g. BMW M4 / Porsche 911"
                    className="w-full bg-white/5 border border-white/15 rounded-lg p-3.5 text-sm text-white focus:border-[#FF4B00] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF4B00] mb-2">
                    SERVICE INTEREST
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#141414] border border-white/15 rounded-lg p-3.5 text-sm text-white focus:border-[#FF4B00] focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Car Wash & Cleaning">Car Wash &amp; Cleaning</option>
                    <option value="Detailing & Paint Care">Detailing &amp; Paint Care</option>
                    <option value="Ceramic Coating">Ceramic Coating</option>
                    <option value="PPF & Paint Protection">PPF &amp; Paint Protection</option>
                    <option value="Sun-Control Films">Sun-Control Films</option>
                    <option value="Car Accessories">Car Accessories</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF4B00] mb-2">
                  MESSAGE / SPECIFIC REQUIREMENTS
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your vehicle's current condition or specific services needed..."
                  className="w-full bg-white/5 border border-white/15 rounded-lg p-3.5 text-sm text-white focus:border-[#FF4B00] focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 sm:py-5 bg-[#FF4B00] text-white font-manrope font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-white hover:text-[#0A0A0A] transition-colors flex items-center justify-center gap-2 group shadow-lg"
              >
                <span>SUBMIT ENQUIRY VIA WHATSAPP</span>
                <span className="text-base group-hover:translate-x-1.5 transition-transform">→</span>
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
