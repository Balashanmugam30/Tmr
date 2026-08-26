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
      
      {/* 01 / FULL-BLEED EDITORIAL CONTACT HERO — 100% UNTOUCHED */}
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

      {/* 02 / COMBINED CONTACT + ENQUIRY SECTION (ONE PREMIUM EDITORIAL COMPOSITION) */}
      <section
        id="contact-details"
        className="relative w-full py-20 sm:py-32 border-b border-[#D8D8D5] scroll-mt-20 overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#F9F7F2] via-[#F1EEE7] to-[#E5E0D5]"
      >
        {/* Subtle Atmospheric Vignette Layer */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_45%,_rgba(0,0,0,0.05)_100%)]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN (6 cols): Editorial Contact & Info */}
            <div className="lg:col-span-6 space-y-10">
              
              {/* Editorial Headline & Intro */}
              <div className="space-y-4">
                <h2 className="font-['Instrument_Serif','Editorial_New',serif] font-normal text-5xl sm:text-7xl uppercase tracking-tight text-[#0A0A0A] leading-[0.96]">
                  TELL US WHAT <br />
                  YOUR CAR <span className="font-['Bricolage_Grotesque',serif] font-extrabold italic text-[#FF4B00] lowercase pr-2 inline-block transform -rotate-1">needs.</span>
                </h2>
                <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed max-w-lg">
                  Tell us what you drive, what it needs, and we'll help you find the right next step.
                </p>
              </div>

              {/* Editorial Clickable Contact Rows */}
              <div className="border-t border-[#D8D8D5] divide-y divide-[#D8D8D5]">
                {/* WhatsApp Row */}
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group hover:pl-3 transition-all duration-300"
                >
                  <div>
                    <span className="font-mono text-[11px] font-bold text-[#FF4B00] uppercase tracking-widest block mb-1">
                      01 / WHATSAPP DIRECT
                    </span>
                    <span className="font-manrope font-extrabold text-xl sm:text-2xl text-[#0A0A0A] group-hover:text-[#FF4B00] transition-colors">
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
                  className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group hover:pl-3 transition-all duration-300"
                >
                  <div>
                    <span className="font-mono text-[11px] font-bold text-[#FF4B00] uppercase tracking-widest block mb-1">
                      02 / CALL STUDIO
                    </span>
                    <span className="font-manrope font-extrabold text-xl sm:text-2xl text-[#0A0A0A] group-hover:text-[#FF4B00] transition-colors">
                      {companyData.contact.phoneFormatted}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest pt-2 sm:pt-0">
                    <span>CALL NOW</span>
                    <span className="text-base group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                  </div>
                </a>

                {/* Email Row */}
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group hover:pl-3 transition-all duration-300"
                >
                  <div>
                    <span className="font-mono text-[11px] font-bold text-[#FF4B00] uppercase tracking-widest block mb-1">
                      03 / EMAIL CONSULTATION
                    </span>
                    <span className="font-manrope font-extrabold text-lg sm:text-xl text-[#0A0A0A] group-hover:text-[#FF4B00] transition-colors">
                      {companyData.contact.email}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest pt-2 sm:pt-0">
                    <span>SEND MAIL</span>
                    <span className="text-base group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                  </div>
                </a>
              </div>

              {/* Factual Information Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-[#D8D8D5]">
                {/* Location Block */}
                <div className="space-y-2">
                  <span className="font-mono text-[11px] font-bold text-[#FF4B00] uppercase tracking-widest block">
                    STUDIO
                  </span>
                  <p className="font-manrope font-bold text-sm text-[#0A0A0A] leading-relaxed">
                    {companyData.address.fullText}
                  </p>
                  <div className="pt-1">
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

                {/* Hours Block */}
                <div className="space-y-2">
                  <span className="font-mono text-[11px] font-bold text-[#FF4B00] uppercase tracking-widest block">
                    HOURS
                  </span>
                  <div>
                    <p className="font-manrope font-bold text-sm text-[#0A0A0A]">{companyData.hours.weekdays}</p>
                    <p className="font-manrope text-xs text-[#666666] pt-1">{companyData.hours.sunday}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN (6 cols): Integrated Charcoal Consultation Form Container */}
            <div className="lg:col-span-6 bg-[#121212]/95 backdrop-blur-md p-8 sm:p-12 rounded-2xl border border-white/10 shadow-2xl text-white space-y-6">
              
              <div>
                <span className="font-mono text-[11px] font-bold text-[#FF4B00] uppercase tracking-widest block mb-1">
                  DIRECT CONSULTATION
                </span>
                <h3 className="font-manrope font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-white">
                  START YOUR ENQUIRY.
                </h3>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                      className="w-full bg-white/[0.04] border border-white/15 rounded-lg p-3.5 text-sm text-white focus:border-[#FF4B00] focus:bg-white/[0.08] focus:outline-none transition-all duration-300 placeholder:text-white/40"
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
                      className="w-full bg-white/[0.04] border border-white/15 rounded-lg p-3.5 text-sm text-white focus:border-[#FF4B00] focus:bg-white/[0.08] focus:outline-none transition-all duration-300 placeholder:text-white/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                      className="w-full bg-white/[0.04] border border-white/15 rounded-lg p-3.5 text-sm text-white focus:border-[#FF4B00] focus:bg-white/[0.08] focus:outline-none transition-all duration-300 placeholder:text-white/40"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF4B00] mb-2">
                      SERVICE INTEREST
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#181818] border border-white/15 rounded-lg p-3.5 text-sm text-white focus:border-[#FF4B00] focus:outline-none transition-all duration-300 cursor-pointer"
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
                    className="w-full bg-white/[0.04] border border-white/15 rounded-lg p-3.5 text-sm text-white focus:border-[#FF4B00] focus:bg-white/[0.08] focus:outline-none transition-all duration-300 placeholder:text-white/40"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 sm:py-5 bg-[#FF4B00] text-white font-manrope font-extrabold text-xs uppercase tracking-widest rounded-lg hover:bg-white hover:text-[#0A0A0A] transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl"
                >
                  <span>SUBMIT ENQUIRY VIA WHATSAPP</span>
                  <span className="text-base group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 03 / DEDICATED STUDIO LOCATION SECTION (REAL GOOGLE MAPS EMBED) */}
      <section id="studio-location" className="relative w-full py-20 sm:py-28 bg-[#0A0A0A] text-white border-b border-[#222222] overflow-hidden">
        {/* Subtle Atmospheric Vignette Layer */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_45%,_rgba(0,0,0,0.65)_100%)]" />

        <div className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-16 space-y-10">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-[0.2em] block">
                STUDIO LOCATION
              </span>
              <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white">
                VISIT THE STUDIO.
              </h2>
              <p className="font-manrope text-sm sm:text-base text-[#D8D8D5] max-w-xl">
                {companyData.address.fullText}
              </p>
            </div>

            <div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(companyData.address.fullText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF4B00] text-white px-8 py-4 font-manrope font-extrabold text-xs uppercase tracking-widest hover:bg-white hover:text-[#0A0A0A] transition-colors shadow-lg inline-flex items-center gap-2"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Real Google Maps Embed Container */}
          <div className="w-full h-[400px] sm:h-[480px] rounded-2xl border border-white/15 overflow-hidden shadow-2xl relative">
            <iframe
              title="TMR Car Care Studio Location Map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(companyData.address.fullText)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full border-0 filter contrast-125 brightness-90 hover:filter-none transition-all duration-700"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

      {/* 04 / INTERACTIVE CONTACT FAQ SECTION */}
      <section className="relative w-full py-20 sm:py-28 px-6 md:px-16 max-w-[1360px] mx-auto border-b border-[#D8D8D5]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          <div className="col-span-12 md:col-span-4 space-y-4">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-[0.2em] block">
              QUESTIONS &amp; ANSWERS
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#050505]">
              CONTACT FAQ.
            </h2>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Have questions prior to your visit? Select a question to view full appointment and pricing guidelines.
            </p>
          </div>

          <div className="col-span-12 md:col-span-8 flex flex-col border-t border-[#D8D8D5]">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border-b border-[#D8D8D5] transition-colors duration-200">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-6 flex justify-between items-center text-left group cursor-pointer"
                  >
                    <span className="font-manrope font-bold text-base sm:text-xl text-[#050505] group-hover:text-[#FF4B00] transition-colors pr-4">
                      {faq.q}
                    </span>
                    <span className="text-2xl font-mono text-[#FF4B00] transition-transform duration-300 shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-6 animate-fade-in">
                      <p className="font-manrope text-sm sm:text-base text-[#5F5E5E] leading-relaxed border-l-2 border-[#FF4B00] pl-4">
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
