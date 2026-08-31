import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '@/data/company';

export const CarWashPage: React.FC = () => {
  const [hoveredFaq, setHoveredFaq] = useState<number | null>(null);
  const [pinnedFaqs, setPinnedFaqs] = useState<Set<number>>(new Set());

  useEffect(() => {
    document.title = "Car Wash & Cleaning in Tiruppur | TMR Car Care";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Professional car wash and cleaning in Tiruppur with water wash, foam wash, hand wash and vehicle interior and exterior cleaning at TMR Car Care.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional car wash and cleaning in Tiruppur with water wash, foam wash, hand wash and vehicle interior and exterior cleaning at TMR Car Care.';
      document.head.appendChild(meta);
    }
    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      canonical.href = 'https://tmrcarcare.com/services/car-wash-cleaning';
    } else {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = 'https://tmrcarcare.com/services/car-wash-cleaning';
      document.head.appendChild(canonical);
    }
    window.scrollTo(0, 0);
    return () => {
      // Cleanup canonical on unmount
      const can = document.querySelector('link[rel="canonical"][href="https://tmrcarcare.com/services/car-wash-cleaning"]');
      if (can) can.remove();
    };
  }, []);

  const faqs = [
    {
      id: 'faq-wash-types',
      q: 'What type of car wash does TMR Car Care offer in Tiruppur?',
      a: 'TMR Car Care in Tiruppur offers three core wash formats — water wash, foam wash, and hand wash — along with comprehensive exterior and interior vehicle cleaning, wheel and tyre care, and glass cleaning.',
    },
    {
      id: 'faq-wash-difference',
      q: 'What is the difference between a water wash, foam wash and hand wash?',
      a: 'A water wash uses controlled rinsing to remove loose dirt. A foam wash applies a foam pre-wash solution to loosen surface grime before any contact. A hand wash involves careful contact cleaning using soft microfiber media to minimise unnecessary friction on the paint surface.',
    },
    {
      id: 'faq-frequency',
      q: 'How often should I wash my car?',
      a: 'For vehicles driven daily in Tiruppur, a wash every one to two weeks is generally recommended. Vehicles with ceramic coatings or PPF may benefit from a maintenance wash every two to four weeks to keep the protective layer performing correctly.',
    },
    {
      id: 'faq-foam-safe',
      q: 'Is foam washing suitable for my vehicle\'s paint?',
      a: 'Yes. Foam washing is a contactless pre-cleaning step that loosens and lifts surface contaminants before any physical contact with the paint. This helps reduce the risk of introducing swirl marks during the contact wash stage.',
    },
    {
      id: 'faq-duration',
      q: 'How long does a car wash take?',
      a: 'A standard exterior wash typically takes 30 to 45 minutes. A complete interior and exterior wash may take 60 to 90 minutes depending on the vehicle size and level of contamination.',
    },
    {
      id: 'faq-wheels',
      q: 'Do you clean wheels, tyres and wheel arches?',
      a: 'Yes. Our wash process includes wheel face and barrel cleaning, brake dust removal, tyre cleaning, and wheel arch decontamination as part of a thorough exterior clean.',
    },
    {
      id: 'faq-interior',
      q: 'Do you offer interior car cleaning?',
      a: 'Yes. Interior cleaning includes vacuuming carpets and upholstery, dashboard and trim wipe-down, air vent dusting, glass cleaning from inside, and a general cabin refresh.',
    },
    {
      id: 'faq-booking',
      q: 'Can I book a car wash in Tiruppur through WhatsApp?',
      a: 'Yes. You can reach TMR Car Care directly via WhatsApp to book a car wash appointment, enquire about services, or request a quote before visiting our studio on Avinashi Road.',
    },
    {
      id: 'faq-pricing',
      q: 'How much does a car wash cost?',
      a: 'Pricing depends on the vehicle size, wash format selected, and level of interior cleaning required. Contact TMR Car Care via WhatsApp or phone for an accurate quote.',
    },
    {
      id: 'faq-quote',
      q: 'Can I request a quote before visiting?',
      a: 'Absolutely. Send us a message on WhatsApp with your vehicle details and the services you are interested in, and we will provide you with a quote before your visit.',
    },
  ];

  const togglePinFaq = (idx: number) => {
    setPinnedFaqs((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  // FAQPage JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  // Service JSON-LD
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Car Wash & Cleaning",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TMR Car Care",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": companyData.address.street,
        "addressLocality": companyData.address.city,
        "addressRegion": companyData.address.state,
        "postalCode": companyData.address.pincode,
        "addressCountry": "IN",
      },
      "telephone": companyData.contact.phone,
    },
    "areaServed": {
      "@type": "City",
      "name": "Tiruppur",
    },
    "description": "Professional car wash and cleaning service in Tiruppur including water wash, foam wash, hand wash, interior cleaning, exterior cleaning, wheel and tyre care.",
  };

  // BreadcrumbList JSON-LD
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tmrcarcare.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://tmrcarcare.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Car Wash & Cleaning", "item": "https://tmrcarcare.com/services/car-wash-cleaning" },
    ],
  };

  return (
    <div className="w-full bg-[#F5F4EF] text-[#0A0A0A] font-manrope selection:bg-[#FF4B00] selection:text-white pt-20">

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section data-navbar-theme="light" className="relative w-full py-16 sm:py-24 md:py-32 px-6 md:px-16 max-w-[1400px] mx-auto overflow-hidden">
        {/* Subtle warm radial background */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#FAF8F5] via-[#F1EEE7] to-[#E8E4DB]" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_50%,_rgba(0,0,0,0.04)_100%)]" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="col-span-1 md:col-span-12">
            <h1 className="font-['Instrument_Serif','Editorial_New',serif] font-normal text-5xl sm:text-7xl lg:text-[88px] text-[#0A0A0A] uppercase tracking-tight leading-[0.96] mb-6">
              PROFESSIONAL CAR WASH<br />
              <span className="font-['Bricolage_Grotesque',serif] font-extrabold italic text-[#FF4B00] lowercase pr-4 inline-block transform -rotate-1">
                & cleaning.
              </span>
            </h1>
          </div>

          <div className="col-span-1 md:col-span-7 space-y-6">
            <h2 className="font-manrope font-extrabold text-lg sm:text-xl text-[#0A0A0A] uppercase tracking-wider">
              CAR WASH & CLEANING IN TIRUPPUR.
            </h2>
            <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed max-w-2xl">
              Multi-stage wash process designed to safely remove road grime and environmental contamination while preserving your vehicle's clear coat. Water wash, foam wash, and careful hand wash — exterior body, wheels, glass, and interior cabin.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=Enquiry%20about%20Car%20Wash%20%26%20Cleaning%20Services`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF4B00] transition-colors group cursor-pointer"
              >
                <span>WHATSAPP TMR</span>
                <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </a>
              <a
                href={`tel:${companyData.contact.phone}`}
                className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF4B00] transition-colors group cursor-pointer"
              >
                <span>CALL TMR</span>
                <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-12 sm:mt-16 w-full h-[360px] sm:h-[520px] md:h-[640px] relative overflow-hidden rounded-2xl border border-[#D8D8D5] shadow-2xl bg-[#0A0A0A] group">
          <img
            src="/images/services/car-wash/car-wash-stitch-01.jpg"
            alt="Professional foam wash and car cleaning at TMR Car Care"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#FF4B00] block mb-1">
              TMR CAR CARE — TIRUPPUR
            </span>
            <p className="font-manrope font-bold text-sm text-white">
              Professional foam wash and vehicle cleaning
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="w-full h-px bg-[#D8D8D5]" />
      </div>

      {/* WASH FORMATS */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            THREE WAYS TO WASH.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            Each format addresses a different level of surface contamination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#D8D8D5]">
          {/* Water Wash */}
          <div className="py-10 md:pr-10 border-b md:border-b-0 md:border-r border-[#D8D8D5] space-y-4">
            <span className="font-mono text-xs font-bold text-[#FF4B00] block">01</span>
            <h3 className="font-manrope font-extrabold text-xl uppercase tracking-wider text-[#0A0A0A]">
              WATER WASH
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Routine exterior vehicle cleaning using controlled rinsing and appropriate washing methods. Removes loose dirt, dust, and light road grime from the body, glass, and wheels.
            </p>
          </div>

          {/* Foam Wash */}
          <div className="py-10 md:px-10 border-b md:border-b-0 md:border-r border-[#D8D8D5] space-y-4">
            <span className="font-mono text-xs font-bold text-[#FF4B00] block">02</span>
            <h3 className="font-manrope font-extrabold text-xl uppercase tracking-wider text-[#0A0A0A]">
              FOAM WASH
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Foam-based pre-cleaning that loosens and lifts surface grime, road film, and contamination before any contact cleaning begins. Helps reduce unnecessary friction during the wash.
            </p>
          </div>

          {/* Hand Wash */}
          <div className="py-10 md:pl-10 space-y-4">
            <span className="font-mono text-xs font-bold text-[#FF4B00] block">03</span>
            <h3 className="font-manrope font-extrabold text-xl uppercase tracking-wider text-[#0A0A0A]">
              HAND WASH
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Careful contact washing using soft microfiber media and appropriate cleaning solutions. Each panel is cleaned deliberately to minimise the risk of introducing surface marring.
            </p>
          </div>
        </div>

        {/* Supporting Visual — Foam Wash */}
        <div className="mt-16 w-full h-[280px] sm:h-[400px] relative overflow-hidden rounded-xl border border-[#D8D8D5] group">
          <img
            src="/images/services/car-wash/car-wash-stitch-05.jpg"
            alt="Foam wash application at TMR Car Care"
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="w-full h-px bg-[#D8D8D5]" />
      </div>

      {/* WHAT WE CLEAN */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            EVERY SURFACE MATTERS.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            Exterior and interior care designed to clean thoroughly without causing surface wear.
          </p>
        </div>

        <div className="border-t border-[#D8D8D5] divide-y divide-[#D8D8D5]">
          {[
            { num: '01', title: 'EXTERIOR BODY', desc: 'Safe exterior wash including panels, bumpers, badges, and trim. Contamination removal and a clean, refined finish.' },
            { num: '02', title: 'WHEELS & TYRES', desc: 'Wheel face and barrel cleaning, brake dust removal, tyre cleaning, and wheel arch decontamination.' },
            { num: '03', title: 'WINDSHIELD & GLASS', desc: 'Interior and exterior glass cleaning for clear, streak-free visibility and mineral spot prevention.' },
            { num: '04', title: 'INTERIOR CABIN', desc: 'Vacuuming of carpets and upholstery, dashboard and surface wipe-down, air vent dusting, and cabin refresh.' },
          ].map((item) => (
            <div key={item.num} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-white/40 px-3 transition-colors duration-300">
              <div className="md:col-span-4 flex items-center gap-4">
                <span className="font-mono text-xs font-bold text-[#FF4B00]">{item.num}</span>
                <h3 className="font-manrope font-extrabold text-xl sm:text-2xl uppercase tracking-wider text-[#0A0A0A] group-hover:text-[#FF4B00] transition-colors">
                  {item.title}
                </h3>
              </div>
              <div className="md:col-span-8">
                <p className="font-manrope text-sm sm:text-base text-[#5F5E5E] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Visual — Wheel Cleaning */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-[240px] sm:h-[320px] relative overflow-hidden rounded-xl border border-[#D8D8D5] group">
            <img
              src="/images/services/car-wash/car-wash-stitch-03.jpg"
              alt="Professional wheel and tyre cleaning"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="h-[240px] sm:h-[320px] relative overflow-hidden rounded-xl border border-[#D8D8D5] group">
            <img
              src="/images/services/car-wash/car-wash-stitch-06.jpg"
              alt="Contact hand wash with microfiber media"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="w-full h-px bg-[#D8D8D5]" />
      </div>

      {/* THE PROCESS */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            A SAFER WAY TO WASH.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            A systematic multi-stage process that reduces clear-coat friction and helps prevent swirl marks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {[
            { num: '01', title: 'INSPECT', desc: 'Assess visible dirt, contamination level, and vehicle condition before beginning.' },
            { num: '02', title: 'PRE-RINSE', desc: 'Remove loose dirt and heavy grime with controlled rinsing before any contact cleaning.' },
            { num: '03', title: 'FOAM / CLEAN', desc: 'Apply foam pre-wash solution to loosen and lift remaining surface contaminants safely.' },
            { num: '04', title: 'CONTACT WASH', desc: 'Careful hand washing using soft microfiber media and fresh, grit-free wash equipment.' },
            { num: '05', title: 'RINSE', desc: 'Thorough rinsing to remove all loosened dirt, wash residue, and remaining solution.' },
            { num: '06', title: 'DRY & FINISH', desc: 'Safe drying with ultra-soft plush towels and final inspection for a clean, spot-free result.' },
          ].map((step, idx) => (
            <div
              key={step.num}
              className={`space-y-3 py-8 ${
                idx % 3 !== 2 ? 'lg:border-r border-[#D8D8D5]' : ''
              } ${idx < 3 ? 'border-b border-[#D8D8D5]' : ''} ${
                idx % 3 === 0 ? 'lg:pr-8' : idx % 3 === 1 ? 'lg:px-8' : 'lg:pl-8'
              } ${idx % 2 === 0 ? 'sm:border-r sm:pr-8 lg:border-r-0 lg:pr-0' : 'sm:pl-8 lg:pl-0'}`}
            >
              <span className="font-mono text-xs font-bold text-[#FF4B00] block">{step.num}</span>
              <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A] tracking-wider">
                {step.title}
              </h3>
              <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="w-full h-px bg-[#D8D8D5]" />
      </div>

      {/* WHY IT MATTERS */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            CARE STARTS WITH THE WASH.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            Regular washing removes road grime, helps maintain appearance, reduces contamination buildup, and prepares the vehicle for detailing or protection services.
          </p>
        </div>

        <div className="border-t border-[#D8D8D5] divide-y divide-[#D8D8D5]">
          {[
            { title: 'REMOVES ROAD GRIME & CONTAMINATION', desc: 'Dust, brake fallout, tar, insect residue, and environmental deposits are safely removed before they bond to the paint surface.' },
            { title: 'MAINTAINS APPEARANCE', desc: 'Regular professional washing keeps the vehicle looking its best and reduces the visible accumulation of dirt between deeper detailing sessions.' },
            { title: 'PRESERVES EXISTING PROTECTION', desc: 'Safe wash methods maintain the performance of existing ceramic coatings or paint protection films without causing damage to the protective layer.' },
            { title: 'PREPARES FOR DETAILING', desc: 'A clean surface is the essential foundation before any paint correction, ceramic coating, or PPF installation can be performed effectively.' },
          ].map((item, idx) => (
            <div key={idx} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-white/40 px-3 transition-colors duration-300">
              <div className="md:col-span-5">
                <h3 className="font-manrope font-extrabold text-base sm:text-lg uppercase tracking-wider text-[#0A0A0A] group-hover:text-[#FF4B00] transition-colors">
                  {item.title}
                </h3>
              </div>
              <div className="md:col-span-7">
                <p className="font-manrope text-sm sm:text-base text-[#5F5E5E] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="w-full h-px bg-[#D8D8D5]" />
      </div>

      {/* FAQ */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <div className="font-bold text-xs text-[#858585] tracking-widest uppercase flex items-center mb-6">
              <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
              CAR WASH FAQ
            </div>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] leading-none mb-6">
              QUESTIONS &<br />
              <span className="font-['Bricolage_Grotesque',serif] font-extrabold italic text-[#FF4B00] lowercase">answers.</span>
            </h2>
            <p className="font-manrope text-sm text-[#5F5E5E] max-w-sm leading-relaxed">
              Common questions about our car wash and cleaning services in Tiruppur.
            </p>
          </div>

          <div className="col-span-12 md:col-span-7 flex flex-col divide-y divide-[#D8D8D5]">
            {faqs.map((faq, idx) => {
              const isOpen = pinnedFaqs.has(idx) || hoveredFaq === idx;
              return (
                <div
                  key={faq.id}
                  onMouseEnter={() => setHoveredFaq(idx)}
                  onMouseLeave={() => setHoveredFaq(null)}
                  className="py-6 transition-colors group"
                >
                  <button
                    type="button"
                    id={`carwash-faq-btn-${idx}`}
                    aria-expanded={isOpen}
                    aria-controls={`carwash-faq-answer-${idx}`}
                    onClick={() => togglePinFaq(idx)}
                    onFocus={() => setHoveredFaq(idx)}
                    onBlur={() => setHoveredFaq(null)}
                    className="w-full flex justify-between items-center text-left focus:outline-none focus:text-[#FF4B00] cursor-pointer"
                  >
                    <span
                      className={`font-manrope font-extrabold text-base sm:text-lg uppercase transition-colors pr-4 ${
                        isOpen ? 'text-[#FF4B00]' : 'text-[#0A0A0A] group-hover:text-[#FF4B00]'
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span className="font-bold text-lg text-[#FF4B00] shrink-0 font-mono transition-transform duration-300">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    id={`carwash-faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`carwash-faq-btn-${idx}`}
                    className={`grid transition-all duration-300 ease-out overflow-hidden ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 pt-3 pb-1' : 'grid-rows-[0fr] opacity-0 pt-0 pb-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed max-w-2xl">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="w-full h-px bg-[#D8D8D5]" />
      </div>

      {/* RELATED SERVICES */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="max-w-2xl mb-12">
          <h2 className="font-manrope font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            CONTINUE THE CARE.
          </h2>
          <p className="font-manrope text-sm sm:text-base text-[#5F5E5E] leading-relaxed">
            A clean vehicle is the ideal starting point for deeper surface treatments and long-term protection.
          </p>
        </div>

        <div className="border-t border-[#D8D8D5] divide-y divide-[#D8D8D5]">
          {[
            { title: 'Detailing & Paint Care', desc: 'Machine paint correction, swirl removal, and surface refinement.', route: '/services/detailing-paint-care' },
            { title: 'Ceramic Coating', desc: 'Semi-permanent protective coatings for paint, glass, and trim.', route: '/services/ceramic-coating' },
            { title: 'PPF — Paint Protection Film', desc: 'Self-healing film to guard against stone chips, scratches, and UV.', route: '/services/ppf-paint-protection' },
          ].map((svc, idx) => (
            <Link
              key={idx}
              to={svc.route}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-white/40 px-3 transition-colors duration-300 cursor-pointer"
            >
              <div className="md:col-span-5">
                <h3 className="font-manrope font-extrabold text-lg uppercase tracking-wider text-[#0A0A0A] group-hover:text-[#FF4B00] transition-colors">
                  {svc.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
                  {svc.desc}
                </p>
              </div>
              <div className="md:col-span-1 flex justify-end">
                <span className="text-[#FF4B00] text-lg font-bold group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative w-full py-24 sm:py-32 bg-[#0B0B0B] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#181210] via-[#0B0B0B] to-[#050505]" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_45%,_rgba(0,0,0,0.65)_100%)]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
            READY FOR A<br />
            <span className="font-['Bricolage_Grotesque',serif] font-extrabold italic text-[#FF4B00] lowercase tracking-normal inline-block">
              cleaner finish?
            </span>
          </h2>

          <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] max-w-xl mx-auto leading-relaxed">
            Book a professional car wash and cleaning service at TMR Car Care, Avinashi Road, Tiruppur.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-4">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}?text=Booking%20Car%20Wash%20Service`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors group cursor-pointer"
            >
              <span>WHATSAPP TMR</span>
              <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </a>
            <a
              href={`tel:${companyData.contact.phone}`}
              className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors group cursor-pointer"
            >
              <span>CALL TMR</span>
              <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
