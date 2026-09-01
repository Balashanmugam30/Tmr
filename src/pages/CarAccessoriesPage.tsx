import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '@/data/company';

export const CarAccessoriesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Automotive Car Accessories in Tiruppur | TMR AI Car Care";
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: "faq-accessories-offered",
      q: "What car accessories does TMR AI Car Care offer in Tiruppur?",
      a: "TMR AI Car Care assists vehicle owners with selecting and fitting practical interior and exterior accessories—including precision-fit floor mats, boot liners, cabin organizers, utility storage, and selected lighting upgrades depending on vehicle compatibility.",
      plainAnswer: "TMR AI Car Care assists vehicle owners with selecting and fitting practical interior and exterior accessories—including precision-fit floor mats, boot liners, cabin organizers, utility storage, and selected lighting upgrades.",
    },
    {
      id: "faq-installation",
      q: "Does TMR AI Car Care install car accessories?",
      a: "Yes. For suitable accessories sourced through TMR, our technicians provide professional fitment to ensure accessories integrate cleanly with your vehicle's interior trim, seating, and existing electrical systems.",
      plainAnswer: "Yes. For suitable accessories sourced through TMR, our technicians provide professional fitment to ensure clean integration with your vehicle.",
    },
    {
      id: "faq-specific-car-model",
      q: "Can you help find accessories for my specific car model?",
      a: "Yes. Accessory fitment varies by vehicle make, model, and manufacturing year. We check exact panel contours and cabin dimensions before recommending compatible accessories for your vehicle.",
      plainAnswer: "Yes. We check exact vehicle make, model, and panel contours before recommending compatible accessories for your car.",
    },
    {
      id: "faq-interior-accessories",
      q: "Do you offer interior car accessories in Tiruppur?",
      a: "Yes. We provide interior accessories designed for daily convenience and protection—such as heavy-duty precision floor liners, seat protection, dashboard covers, and interior storage solutions.",
      plainAnswer: "Yes. We provide interior accessories designed for daily convenience and protection—such as heavy-duty floor liners, seat protection, and storage solutions.",
    },
    {
      id: "faq-mats-boot-protection",
      q: "Can I get floor mats or boot protection fitted for my car?",
      a: "Yes. Precision-fit floor mats and boot cargo liners are among our most requested practical interior accessories, helping protect original carpets from dust, mud, and liquid spills.",
      plainAnswer: "Yes. Precision-fit floor mats and boot cargo liners help protect original carpets from dust, mud, and liquid spills.",
    },
    {
      id: "faq-lighting-upgrades",
      q: "Do you offer automotive lighting or electronic accessory upgrades?",
      a: "Depending on vehicle compatibility, we assist with selected auxiliary lighting upgrades and interior ambient enhancements that respect your car's factory wiring harness.",
      plainAnswer: "Depending on vehicle compatibility, we assist with selected auxiliary lighting upgrades and interior ambient enhancements.",
    },
    {
      id: "faq-sourcing",
      q: "Can TMR help source an accessory that is not currently available?",
      a: "Yes. If you are searching for a specific practical or styling accessory for your car model, share your requirements with our team and we will check current supplier availability.",
      plainAnswer: "Yes. If you are searching for a specific accessory, share your requirements with our team and we will check current supplier availability.",
    },
    {
      id: "faq-prices-availability",
      q: "How do I ask about car accessory prices and availability?",
      a: "Reach out to TMR AI Car Care via WhatsApp or call our studio with your vehicle make, model, and the accessory type you need. Our team will verify compatibility, current stock, and fitment details.",
      plainAnswer: "Reach out to TMR AI Car Care via WhatsApp or call our studio with your vehicle make and model to verify compatibility, current stock, and pricing.",
    },
  ];

  // FAQPage JSON-LD Structured Data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.plainAnswer,
      },
    })),
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="w-full bg-[#F5F4EF] text-[#0A0A0A] font-manrope selection:bg-[#FF4B00] selection:text-white pt-20">
      
      {/* 01. HERO — RESTRAINED EDITORIAL SERVICE HERO */}
      <section data-navbar-theme="light" className="relative w-full py-16 sm:py-24 md:py-32 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5] overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FAF8F5] via-[#F1EEE7] to-[#E8E4DB]">
        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_50%,_rgba(0,0,0,0.04)_100%)]" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="col-span-1 md:col-span-12">
            <h1 className="font-['Instrument_Serif','Editorial_New',serif] font-normal text-5xl sm:text-7xl lg:text-[88px] text-[#0A0A0A] uppercase tracking-tight leading-[0.96] mb-6">
              BUILT FOR <br />
              <span className="font-['Bricolage_Grotesque',serif] font-extrabold italic text-[#FF4B00] lowercase pr-4 inline-block transform -rotate-1">
                the drive.
              </span>
            </h1>
          </div>

          <div className="col-span-1 md:col-span-8 space-y-6">
            <h2 className="font-manrope font-extrabold text-lg sm:text-xl text-[#0A0A0A] uppercase tracking-wider">
              AUTOMOTIVE ACCESSORIES &amp; FITMENT IN TIRUPPUR.
            </h2>
            <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed max-w-2xl">
              TMR AI Car Care helps vehicle owners select, source, and professionally fit practical automotive accessories based on vehicle compatibility, interior protection goals, and actual product availability.
            </p>
            
            {/* Minimal Editorial Text Link CTAs — NO Box / Rectangle */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
              <a
                href="#categories"
                className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF4B00] transition-colors group cursor-pointer"
              >
                <span>EXPLORE ACCESSORIES</span>
                <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </a>
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=Enquiry%20regarding%20Car%20Accessories`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF4B00] transition-colors group cursor-pointer"
              >
                <span>ENQUIRE NOW</span>
                <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Dedicated Hero Image 1 of 2 — Clean Photography Only */}
        <div className="mt-12 sm:mt-16 w-full h-[360px] sm:h-[520px] md:h-[640px] relative overflow-hidden rounded-2xl border border-[#D8D8D5] shadow-2xl bg-[#0A0A0A] group">
          <img
            src="/images/services/accessories/accessories-hero.jpg"
            alt="Professional automotive accessory fitment inside a vehicle at TMR AI Car Care in Tiruppur"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      </section>

      {/* 02. WHAT WE HELP WITH — ACCESSORIES THAT SERVE THE CAR */}
      <section id="categories" className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            ACCESSORIES THAT SERVE THE CAR.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            TMR helps customers identify practical and appearance-focused accessories that suit their specific vehicle and daily usage.
          </p>
        </div>

        {/* 4 Open Editorial Categories — NO Product Cards, NO E-commerce Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              01 — INTERIOR
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              CABIN ACCESSORIES
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Precision-fit floor mats, custom floor liners, seat protection, and interior cabin organizers.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              02 — PROTECTION
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              SURFACE DEFENSE
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Practical accessories that help protect high-use interior thresholds and exposed exterior surfaces.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              03 — UTILITY
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              CARGO &amp; STORAGE
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Boot cargo liners, trunk storage management, and everyday-use vehicle convenience additions.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              04 — ENHANCEMENT
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              LIGHTING &amp; STYLING
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Auxiliary lighting upgrades, interior ambient enhancements, and selected subtle exterior trims.
            </p>
          </div>
        </div>
      </section>

      {/* 03. HOW WE SELECT — THE RIGHT ACCESSORY STARTS WITH THE VEHICLE */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            THE RIGHT ACCESSORY STARTS WITH THE VEHICLE.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            Accessory selection depends on vehicle compatibility, fitment requirements, practical utility, and verified product availability.
          </p>
        </div>

        {/* 3 Editorial Principles — NO Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              PRINCIPLE 01
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              COMPATIBILITY
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              The accessory must suit the specific vehicle make, model, cabin dimensions, and manufacturing year.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              PRINCIPLE 02
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              FITMENT
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Installation should respect the vehicle's interior trim, seating, dashboard geometry, and factory wiring harness.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              PRINCIPLE 03
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              PURPOSE
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Choose upgrades that solve a real operational need or protection goal rather than adding unnecessary cabin clutter.
            </p>
          </div>
        </div>
      </section>

      {/* 04. FITMENT MATTERS */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A]">
              FITMENT MATTERS.
            </h2>
            <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
              Proper fitment ensures accessories integrate seamlessly with your vehicle's existing components without causing rattles, seat obstruction, or wiring interference.
            </p>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed pt-2 border-t border-[#D8D8D5]">
              For suitable accessories sourced through TMR AI Car Care, our studio technicians handle installation so everything is fitted cleanly according to vehicle specifications.
            </p>
          </div>

          {/* Dedicated Supporting Image 2 of 2 — Clean Accessory Detail Photography Only */}
          <div className="lg:col-span-7 h-[380px] sm:h-[500px] bg-[#0A0A0A] overflow-hidden rounded-2xl border border-[#D8D8D5] shadow-xl relative group">
            <img
              src="/images/services/accessories/accessories-detail.jpg"
              alt="Precision-fit automotive floor mat installed inside an Indian-market vehicle at TMR AI Car Care"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

        </div>
      </section>

      {/* 05. SPECIFIC ENQUIRY — LOOKING FOR SOMETHING SPECIFIC? */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="max-w-2xl space-y-4 mb-10">
          <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
            CUSTOM INQUIRY
          </span>
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A]">
            LOOKING FOR SOMETHING SPECIFIC?
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            Tell TMR what you're looking for, your vehicle model, and how you want to use the accessory. We'll advise on suitable options, compatibility, and current availability.
          </p>
        </div>

        {/* Minimal Text Link CTAs — NO Box / Rectangle */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4 border-t border-[#D8D8D5]">
          <a
            href={`https://wa.me/${companyData.contact.whatsapp}?text=Consultation%20regarding%20Car%20Accessories`}
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
      </section>

      {/* 06. LOCAL-SEO CAR ACCESSORIES FAQ SECTION */}
      <section className="relative w-full min-h-[75vh] py-24 sm:py-36 border-b border-[#D8D8D5] overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FAF8F5] via-[#F1EEE7] to-[#E8E4DB]">
        {/* FAQPage JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Soft Radial Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_50%,_rgba(0,0,0,0.05)_100%)]" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-[6vw] lg:px-[8vw]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <h2 className="font-['Instrument_Serif','Editorial_New',serif] font-normal text-5xl sm:text-7xl uppercase tracking-tight text-[#0A0A0A] leading-[0.96]">
                CAR <br />
                ACCESSORIES <br />
                <span className="font-['Bricolage_Grotesque',serif] font-extrabold italic text-[#FF4B00] lowercase pr-2 inline-block transform -rotate-1">
                  faq.
                </span>
              </h2>

              <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed max-w-md">
                Find clear answers about car accessory selection, vehicle model compatibility, fitment installation, and availability in Tiruppur.
              </p>
            </div>

            <div className="lg:col-span-7 border-t border-[#D8D8D5] divide-y divide-[#D8D8D5]">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.id}
                    className={`transition-colors duration-300 ${
                      isOpen ? 'bg-white/40' : 'hover:bg-white/20'
                    }`}
                    onMouseEnter={() => {
                      if (window.innerWidth >= 1024) {
                        setOpenFaq(idx);
                      }
                    }}
                  >
                    <button
                      type="button"
                      id={`acc-faq-btn-${idx}`}
                      aria-expanded={isOpen}
                      aria-controls={`acc-faq-ans-${idx}`}
                      onClick={() => toggleFaq(idx)}
                      className="w-full py-7 px-2 flex items-center justify-between text-left group cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#FF4B00]/40"
                    >
                      <div className="flex items-baseline gap-4 pr-6">
                        <span className="font-mono text-xs font-bold text-[#FF4B00] shrink-0">
                          0{idx + 1}
                        </span>
                        <span className={`font-manrope font-extrabold text-lg sm:text-xl transition-colors duration-300 ${
                          isOpen ? 'text-[#FF4B00]' : 'text-[#0A0A0A] group-hover:text-[#FF4B00]'
                        }`}>
                          {faq.q}
                        </span>
                      </div>

                      <span className={`font-mono text-2xl text-[#FF4B00] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : 'group-hover:scale-110'
                      }`}>
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        id={`acc-faq-ans-${idx}`}
                        role="region"
                        aria-labelledby={`acc-faq-btn-${idx}`}
                        className="pb-8 px-2 pl-10 animate-fade-in"
                      >
                        <p className="font-manrope text-base text-[#4A4846] leading-relaxed border-l-2 border-[#FF4B00] pl-5">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 07. FINAL CTA — READY TO FIND THE RIGHT UPGRADE? */}
      <section className="relative w-full py-24 sm:py-32 bg-[#0B0B0B] text-white border-b border-[#222222] overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#181210] via-[#0B0B0B] to-[#050505]">
        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_45%,_rgba(0,0,0,0.65)_100%)]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
            READY TO FIND THE <br />
            <span className="font-['Bricolage_Grotesque',serif] font-extrabold italic text-[#FF4B00] lowercase tracking-normal inline-block">
              right upgrade?
            </span>
          </h2>

          <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] max-w-xl mx-auto leading-relaxed">
            Tell us your vehicle and what you want to improve, and we'll guide you through suitable options.
          </p>

          {/* Minimal Editorial Text Link CTAs — NO Box / Rectangle */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-4">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors group cursor-pointer"
            >
              <span>WHATSAPP TMR</span>
              <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors group cursor-pointer"
            >
              <span>CONTACT TMR</span>
              <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
