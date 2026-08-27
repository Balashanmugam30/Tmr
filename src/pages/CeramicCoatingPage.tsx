import React, { useState, useEffect } from 'react';
import { companyData } from '@/data/company';

export const CeramicCoatingPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Professional Ceramic Coating in Tiruppur | TMR Car Care";
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: "faq-what-does-it-do",
      q: "What does ceramic coating do for a car?",
      a: (
        <>
          Ceramic coating provides a transparent, hydrophobic protective layer over your vehicle's paint. It enhances color depth, increases surface gloss, and makes routine cleaning significantly easier by repelling water, road grime, and environmental contaminants.
        </>
      ),
      plainAnswer: "Ceramic coating provides a transparent, hydrophobic protective layer over your vehicle's paint. It enhances color depth, increases surface gloss, and makes routine cleaning significantly easier by repelling water, road grime, and environmental contaminants.",
    },
    {
      id: "faq-scratches",
      q: "Does ceramic coating protect against scratches?",
      a: "Ceramic coatings offer minor resistance against light wash-induced marring and fine swirl marks, but they are not scratch-proof. They will not prevent rock chips or deep physical scratches. For impact protection, explore our ",
      linkText: "PPF & paint protection film services",
      linkUrl: "/services/ppf-paint-protection",
      linkSuffix: ".",
      plainAnswer: "Ceramic coatings offer minor resistance against light wash-induced marring, but they are not scratch-proof. For physical impact protection, we recommend PPF.",
    },
    {
      id: "faq-prep-needed",
      q: "Does the paint need to be corrected before ceramic coating?",
      a: (
        <>
          Yes. Ceramic coating seals in the surface condition underneath. Any existing swirl marks, scratches, or oxidation must be removed through multi-stage{' '}
          <a href="/services/detailing-paint-care" className="text-[#FF4B00] font-bold underline hover:text-[#0A0A0A] transition-colors">
            paint correction &amp; detailing
          </a>{' '}
          before the coating is applied.
        </>
      ),
      plainAnswer: "Yes. Ceramic coating seals in the surface condition underneath. Any existing swirl marks or oxidation must be removed through paint correction before application.",
    },
    {
      id: "faq-washing",
      q: "How should a ceramic-coated car be washed?",
      a: (
        <>
          Wash using pH-neutral snow foams, soft microfiber wash mitts, and the two-bucket method. Avoid harsh abrasive cleaners or automatic brush car washes. Learn more about safe cleaning on our{' '}
          <a href="/services/car-wash-cleaning" className="text-[#FF4B00] font-bold underline hover:text-[#0A0A0A] transition-colors">
            car wash &amp; cleaning page
          </a>.
        </>
      ),
      plainAnswer: "Wash using pH-neutral snow foams, soft microfiber wash mitts, and the two-bucket method. Avoid harsh abrasive cleaners or automatic brush car washes.",
    },
    {
      id: "faq-[#duration]",
      q: "How long does the ceramic coating process take?",
      a: "A thorough ceramic coating service—including paint inspection, surface decontamination, machine polishing, coating application, and initial curing—typically takes 2 to 3 days at our Tiruppur studio.",
      plainAnswer: "A thorough ceramic coating service—including paint inspection, surface decontamination, machine polishing, coating application, and initial curing—typically takes 2 to 3 days at our Tiruppur studio.",
    },
    {
      id: "faq-vs-wax",
      q: "Is ceramic coating better than wax?",
      a: "Yes. Traditional car wax melts away after a few weeks of washing and heat exposure. Ceramic coating forms a durable surface layer that offers significantly superior hydrophobic water-beading, chemical resistance, and long-lasting gloss.",
      plainAnswer: "Yes. Traditional car wax melts away after a few weeks. Ceramic coating forms a durable surface layer that offers significantly superior hydrophobic water-beading, chemical resistance, and long-lasting gloss.",
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
              PROTECT THE <br />
              <span className="font-['Bricolage_Grotesque',serif] font-extrabold italic text-[#FF4B00] lowercase pr-4 inline-block transform -rotate-1">
                finish.
              </span>
            </h1>
          </div>

          <div className="col-span-1 md:col-span-8 space-y-6">
            <h2 className="font-manrope font-extrabold text-lg sm:text-xl text-[#0A0A0A] uppercase tracking-wider">
              CERAMIC COATING IN TIRUPPUR.
            </h2>
            <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed max-w-2xl">
              Professional automotive ceramic coating services at TMR Car Care in Tiruppur. We deliver multi-stage paint preparation, surface refinement, hydrophobic water-repellency, and long-term gloss protection designed for vehicle enthusiasts.
            </p>
            
            {/* Minimal Editorial Text Link CTAs — NO Box / Rectangle */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF4B00] transition-colors group cursor-pointer"
              >
                <span>BOOK CERAMIC COATING</span>
                <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </a>
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=Enquiry%20regarding%20Ceramic%20Coating%20Services`}
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
            src="/images/services/ceramic/ceramic-hero.jpg"
            alt="Professional ceramic coating application on a dark vehicle at TMR Car Care in Tiruppur"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      </section>

      {/* 02. PREPARATION COMES FIRST — THE COATING STARTS BEFORE THE COATING */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            THE COATING STARTS BEFORE THE COATING.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            Ceramic coating performs best when the paint is properly prepared. The surface is inspected, decontaminated, and refined before the coating layer is laid down.
          </p>
        </div>

        {/* 3 Open Principles — NO Cards, NO Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              01 — INSPECT
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              PAINT ASSESSMENT
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Assess paint condition, clear-coat thickness, contamination severity, and visible defects before treatment begins.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              02 — PREPARE
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              DECONTAMINATE &amp; REFINE
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Decontaminate the clear coat with iron fallout removers and refine the paint surface through machine polishing.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              03 — APPLY
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              CONTROLLED COATING
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Lay down the ceramic coating system under controlled lighting and temperature before completing the required curing cycle.
            </p>
          </div>
        </div>
      </section>

      {/* 03. WHY CERAMIC COATING? — BENEFITS EDITORIAL RAIL */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            WHY CERAMIC COATING?
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            Essential long-term surface benefits for drivers looking to maintain paint reflection and streamline maintenance.
          </p>
        </div>

        {/* Benefits Horizontal Rail — NO Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              01 — GLOSS &amp; DEPTH
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              ENHANCED REFLECTION
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Ceramic coating enhances the visual depth and wet-look gloss of properly prepared vehicle paintwork.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              02 — EASIER MAINTENANCE
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              STREAMLINED WASHES
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              The hydrophobic surface prevents road grime and brake dust from bonding heavily, making routine washing faster and safer.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              03 — HYDROPHOBIC BEHAVIOUR
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              WATER BEADING
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Provides water-repellent surface tension that forces water to bead up and sheet off the clear coat effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* 04. CERAMIC COATING PROCESS — FROM PREPARATION TO PROTECTION */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A]">
              FROM PREPARATION TO PROTECTION.
            </h2>
            <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
              A systematic multi-step process executed at our Tiruppur studio to ensure optimal coating adhesion and durability.
            </p>

            {/* 4 Compact Editorial Stages — NO Cards / Boxes */}
            <div className="pt-6 space-y-6 border-t border-[#D8D8D5]">
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
                  01 — INSPECT
                </span>
                <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
                  EVALUATE PAINT CONDITION
                </h3>
                <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
                  Perform paint depth checks and optical lighting audits to measure defect severity and clear-coat hardness.
                </p>
              </div>

              <div className="space-y-1 pt-4 border-t border-[#D8D8D5]">
                <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
                  02 — PREPARE
                </span>
                <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
                  DECONTAMINATE &amp; POLISH
                </h3>
                <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
                  Wash, clay bar decontaminate, and machine polish paint panels to eliminate swirl marks prior to coating.
                </p>
              </div>

              <div className="space-y-1 pt-4 border-t border-[#D8D8D5]">
                <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
                  03 — COAT
                </span>
                <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
                  APPLY COATING SYSTEM
                </h3>
                <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
                  Carefully apply the ceramic coating system across bodywork, wheels, and glass using dedicated applicator pads.
                </p>
              </div>

              <div className="space-y-1 pt-4 border-t border-[#D8D8D5]">
                <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
                  04 — CURE
                </span>
                <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
                  CONTROLLED CURING
                </h3>
                <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
                  Allow the coating layer to settle and cure under studio conditions before handover.
                </p>
              </div>
            </div>
          </div>

          {/* Dedicated Supporting Image 2 of 2 — Clean Detail Photography Only */}
          <div className="lg:col-span-7 h-[380px] sm:h-[500px] bg-[#0A0A0A] overflow-hidden rounded-2xl border border-[#D8D8D5] shadow-xl relative group">
            <img
              src="/images/services/ceramic/ceramic-detail.jpg"
              alt="Hydrophobic water beading on ceramic-coated automotive paint at TMR Car Care"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

        </div>
      </section>

      {/* 05. RELATED SERVICE LINK — PAINT CORRECTION & DETAILING */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="max-w-2xl space-y-4 mb-10">
          <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
            RECOMMENDED PREPARATION
          </span>
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A]">
            PREPARATION IS KEY.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            Depending on your vehicle's current paint condition, multi-stage paint correction may be recommended prior to ceramic coating application to remove swirl marks and restore clear-coat transparency.
          </p>
        </div>

        {/* Text-Based Editorial Link — NO Image Card, NO Box */}
        <div className="pt-4 border-t border-[#D8D8D5]">
          <a
            href="/services/detailing-paint-care"
            className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF4B00] transition-colors group cursor-pointer"
          >
            <span>PAINT CORRECTION &amp; DETAILING</span>
            <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </a>
        </div>
      </section>

      {/* 06. CERAMIC COATING FAQ SECTION */}
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
                CERAMIC <br />
                COATING <br />
                <span className="font-['Bricolage_Grotesque',serif] font-extrabold italic text-[#FF4B00] lowercase pr-2 inline-block transform -rotate-1">
                  faq.
                </span>
              </h2>

              <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed max-w-md">
                Find clear answers about ceramic coating protection, paint preparation, scratch resistance, and maintenance care.
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
                      id={`ceramic-faq-btn-${idx}`}
                      aria-expanded={isOpen}
                      aria-controls={`ceramic-faq-ans-${idx}`}
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
                        id={`ceramic-faq-ans-${idx}`}
                        role="region"
                        aria-labelledby={`ceramic-faq-btn-${idx}`}
                        className="pb-8 px-2 pl-10 animate-fade-in"
                      >
                        <p className="font-manrope text-base text-[#4A4846] leading-relaxed border-l-2 border-[#FF4B00] pl-5">
                          {faq.a}
                          {faq.linkUrl && (
                            <>
                              {' '}
                              <a href={faq.linkUrl} className="text-[#FF4B00] font-bold underline hover:text-[#0A0A0A] transition-colors">
                                {faq.linkText}
                              </a>
                              {faq.linkSuffix}
                            </>
                          )}
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

      {/* 07. FINAL CTA — READY TO PROTECT THE FINISH? */}
      <section className="relative w-full py-24 sm:py-32 bg-[#0B0B0B] text-white border-b border-[#222222] overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#181210] via-[#0B0B0B] to-[#050505]">
        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_45%,_rgba(0,0,0,0.65)_100%)]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
            READY TO PROTECT <br />
            <span className="font-['Bricolage_Grotesque',serif] font-extrabold italic text-[#FF4B00] lowercase tracking-normal inline-block">
              the finish?
            </span>
          </h2>

          <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] max-w-xl mx-auto leading-relaxed">
            Talk to TMR Car Care about ceramic coating for your vehicle and the preparation required before application.
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
            <a
              href="/contact"
              className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors group cursor-pointer"
            >
              <span>CONTACT TMR</span>
              <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
