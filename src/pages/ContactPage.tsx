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
    document.title = "Contact - TMR CAR CARE";
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "Do I need to book an appointment in advance?",
      a: "Yes, we operate strictly by appointment for detailing, ceramic coating, and PPF installations to allocate dedicated studio time to each vehicle. Car wash services are subject to daily bay availability.",
    },
    {
      q: "Where is the studio located in Tiruppur?",
      a: "Our studio is located on Avinashi Road, Near Hope College Junction, Tiruppur. Full directions and Google Maps pins are available on this page.",
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
      
      {/* 01 / HERO */}
      <section className="pt-24 pb-16 md:pt-36 md:pb-24 px-5 md:px-16 max-w-[1360px] mx-auto border-b border-[#D8D8D5]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8 space-y-6">
            <h1 className="font-manrope font-extrabold text-5xl sm:text-7xl md:text-[88px] text-[#050505] uppercase tracking-tighter leading-none">
              START THE<br />
              CONVERSATION.
            </h1>

            <p className="font-manrope text-base sm:text-lg text-[#5f5e5e] max-w-xl leading-relaxed">
              Connect with our detailing studio in Tiruppur for enquiries, appointments, and studio visits.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF4B00] text-white px-8 py-4 font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-[#050505] transition-colors"
              >
                WHATSAPP TMR →
              </a>
              <a
                href={`tel:${companyData.contact.phone}`}
                className="border border-[#050505] text-[#050505] px-8 py-4 font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-[#050505] hover:text-white transition-colors"
              >
                CALL TMR →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 02 / DIRECT CHANNELS */}
      <section className="py-20 sm:py-32 px-5 md:px-16 max-w-[1360px] mx-auto border-b border-[#D8D8D5]">
        <div className="mb-12">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#050505]">
            DIRECT CHANNELS.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${companyData.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 border border-[#D8D8D5] bg-white hover:border-[#FF4B00] transition-colors flex flex-col justify-between space-y-6"
          >
            <div>
              <h3 className="font-manrope font-extrabold text-2xl uppercase tracking-tight text-[#050505] mb-2 group-hover:text-[#FF4B00] transition-colors">
                WHATSAPP
              </h3>
            </div>
            <div className="flex justify-between items-center text-xs font-bold text-[#FF4B00] uppercase tracking-widest pt-4 border-t border-[#D8D8D5]">
              <span>{companyData.contact.whatsappFormatted}</span>
              <span className="text-base group-hover:translate-x-1 transition-transform">↗</span>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${companyData.contact.phone}`}
            className="group p-8 border border-[#D8D8D5] bg-white hover:border-[#FF4B00] transition-colors flex flex-col justify-between space-y-6"
          >
            <div>
              <h3 className="font-manrope font-extrabold text-2xl uppercase tracking-tight text-[#050505] mb-2 group-hover:text-[#FF4B00] transition-colors">
                CALL
              </h3>
            </div>
            <div className="flex justify-between items-center text-xs font-bold text-[#FF4B00] uppercase tracking-widest pt-4 border-t border-[#D8D8D5]">
              <span>{companyData.contact.phoneFormatted}</span>
              <span className="text-base group-hover:translate-x-1 transition-transform">↗</span>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${companyData.contact.email}`}
            className="group p-8 border border-[#D8D8D5] bg-white hover:border-[#FF4B00] transition-colors flex flex-col justify-between space-y-6"
          >
            <div>
              <h3 className="font-manrope font-extrabold text-2xl uppercase tracking-tight text-[#050505] mb-2 group-hover:text-[#FF4B00] transition-colors">
                EMAIL
              </h3>
            </div>
            <div className="flex justify-between items-center text-xs font-bold text-[#FF4B00] uppercase tracking-widest pt-4 border-t border-[#D8D8D5]">
              <span>{companyData.contact.email}</span>
              <span className="text-base group-hover:translate-x-1 transition-transform">↗</span>
            </div>
          </a>
        </div>
      </section>

      {/* 03 / STUDIO LOCATION & HOURS */}
      <section className="py-20 sm:py-32 px-5 md:px-16 max-w-[1360px] mx-auto border-b border-[#D8D8D5]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-5 space-y-6">
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#050505]">
              VISIT THE STUDIO.
            </h2>

            <div className="space-y-6 pt-4 border-t border-[#D8D8D5]">
              <div>
                <span className="text-[10px] font-bold text-[#858585] uppercase tracking-widest block mb-1">
                  STUDIO ADDRESS
                </span>
                <p className="font-bold text-base text-[#050505] leading-relaxed">
                  {companyData.address.fullText}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold text-[#858585] uppercase tracking-widest block mb-1">
                  STUDIO HOURS
                </span>
                <p className="font-bold text-sm text-[#050505]">{companyData.hours.weekdays}</p>
                <p className="font-bold text-sm text-[#050505]">{companyData.hours.sunday}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(companyData.address.fullText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#050505] text-white px-8 py-4 font-bold text-xs uppercase tracking-widest text-center hover:bg-[#FF4B00] transition-colors"
              >
                OPEN IN GOOGLE MAPS →
              </a>
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=Location%20and%20Directions`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#050505] text-[#050505] px-8 py-4 font-bold text-xs uppercase tracking-widest text-center hover:bg-[#050505] hover:text-white transition-colors"
              >
                WHATSAPP LOCATION →
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 h-[380px] sm:h-[550px] border border-[#D8D8D5] bg-[#050505] overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoP49MCpRS9UJoKPjDAjmcShcGcukxlYkt8tSe6V6Sn_Ef9vIECsIUs2s_9uE7qGGHqYfzyBzVT-yKx6BYQGA-XpLivEsfgWVdlJ3o2Fbd5ipckWqw0x1ZMJG3RmFKqb_-hmCGggljoPRwB-ZkSGPSU5M2c7fNtpx04lmNjDo0kO2ITw_WH2z_Z2wp252NtvRDmRnpf23awUTlqSXZKT-6g8W-G2-bBj_7AGPLU1gmBitXtyfng6nw"
              alt="TMR Car Care studio location"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 04 / SERVICE ENQUIRY FORM */}
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

      {/* 05 / FREQUENTLY ASKED QUESTIONS */}
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
