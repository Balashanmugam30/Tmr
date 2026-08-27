import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '@/data/company';

export const SunControlFilmsPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Sun-Control & Car Window Film in Tiruppur | TMR Car Care";
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: "faq-what-are-sun-films",
      q: "What are sun-control films for cars?",
      a: "Automotive sun-control film is a specialized transparent micro-layered optical film applied to vehicle glass. It is engineered to help manage solar heat entering the cabin, reduce harsh driving glare, filter ultraviolet rays, and enhance overall passenger thermal comfort.",
      plainAnswer: "Automotive sun-control film is a specialized transparent optical film applied to vehicle glass engineered to manage solar heat, reduce glare, filter UV rays, and improve cabin comfort.",
    },
    {
      id: "faq-availability-tiruppur",
      q: "Is sun-control film service available in Tiruppur?",
      a: "Yes. TMR Car Care offers professional automotive sun-control and window film installation services at our facility on Avinashi Road, Tiruppur, suited for the demanding solar heat of Tamil Nadu.",
      plainAnswer: "Yes. TMR Car Care offers professional automotive sun-control and window film installation services at our facility on Avinashi Road, Tiruppur.",
    },
    {
      id: "faq-heat-reduction",
      q: "Do automotive sun-control films reduce heat inside the car?",
      a: "Yes. Sun-control films help reduce solar heat transfer through vehicle glass, helping keep the interior cabin cooler and reducing the workload on your car's air conditioning system during hot Tiruppur afternoons.",
      plainAnswer: "Yes. Sun-control films help reduce solar heat transfer through vehicle glass, keeping the interior cooler and reducing air conditioning workload.",
    },
    {
      id: "faq-uv-protection",
      q: "Do sun-control films block UV rays?",
      a: "Yes. Quality automotive window films are engineered to filter harmful ultraviolet (UV) radiation, helping protect cabin occupants and preventing premature fading or cracking of interior leather, vinyl, and dashboard materials.",
      plainAnswer: "Yes. Quality automotive window films filter harmful UV radiation, protecting cabin occupants and preventing fading of interior materials.",
    },
    {
      id: "faq-night-visibility",
      q: "Do car window films affect visibility at night?",
      a: "Visibility depends on the selected Visible Light Transmission (VLT) level. Selecting an appropriately calibrated optical film ensures clear daytime glare reduction while maintaining safe, unobstructed night-time visibility.",
      plainAnswer: "Visibility depends on the selected Visible Light Transmission (VLT) level. Selecting an appropriately calibrated film maintains safe night-time visibility.",
    },
    {
      id: "faq-choosing-film",
      q: "How do I choose the right sun-control film for my car?",
      a: "Film choice depends on your priorities—such as maximum heat rejection, glare control, visual clarity, privacy preference, and regulatory compliance. TMR can guide you through lighter, balanced, and deeper film options during consultation.",
      plainAnswer: "Film choice depends on your priorities—such as heat rejection, glare control, visual clarity, and regulatory compliance. TMR can guide you during consultation.",
    },
    {
      id: "faq-installation-time",
      q: "How long does sun-control film installation take?",
      a: "A typical automotive window film installation takes approximately 3 to 5 hours depending on vehicle glass complexity, panel prep, and the number of windows receiving film.",
      plainAnswer: "A typical automotive window film installation takes approximately 3 to 5 hours depending on glass complexity and number of windows.",
    },
    {
      id: "faq-cleaning-guidance",
      q: "How should I clean car windows after sun-control film installation?",
      a: "Allow the film to complete its initial curing period. Once cured, clean using soft microfiber towels and non-abrasive, ammonia-free glass cleaners. Avoid sharp objects or harsh scrubbing pads on filmed surfaces.",
      plainAnswer: "Allow the film to complete its initial curing period. Once cured, clean using soft microfiber towels and non-abrasive, ammonia-free glass cleaners.",
    },
    {
      id: "faq-cost-factors",
      q: "How much does sun-control film cost in Tiruppur?",
      a: "Sun-control film installation cost varies based on vehicle type, glass area, film optical technology, and heat rejection specifications. Contact TMR Car Care for a vehicle-specific quotation.",
      plainAnswer: "Sun-control film installation cost varies based on vehicle type, glass area, film technology, and specifications. Contact TMR Car Care for a customized quote.",
    },
    {
      id: "faq-vs-ceramic",
      q: "What is the difference between sun-control film and ceramic coating?",
      a: (
        <>
          Sun-control film is an optical barrier applied specifically to vehicle glass for solar heat, glare, and UV reduction. In contrast,{' '}
          <a href="/services/ceramic-coating" className="text-[#FF4B00] font-bold underline hover:text-[#0A0A0A] transition-colors">
            ceramic coating
          </a>{' '}
          is a liquid surface treatment applied to exterior painted bodywork for gloss and hydrophobic paint protection.
        </>
      ),
      plainAnswer: "Sun-control film is an optical barrier applied to vehicle glass for heat and UV reduction, whereas ceramic coating is a liquid treatment applied to exterior painted bodywork.",
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
              CONTROL THE HEAT. <br />
              <span className="font-['Bricolage_Grotesque',serif] font-extrabold italic text-[#FF4B00] lowercase pr-4 inline-block transform -rotate-1">
                keep the view.
              </span>
            </h1>
          </div>

          <div className="col-span-1 md:col-span-8 space-y-6">
            <h2 className="font-manrope font-extrabold text-lg sm:text-xl text-[#0A0A0A] uppercase tracking-wider">
              SUN-CONTROL FILMS FOR CARS IN TIRUPPUR.
            </h2>
            <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed max-w-2xl">
              Automotive sun-control film is applied to vehicle glass to help manage solar heat, UV exposure, driving glare, and cabin comfort while preserving clear visibility in the demanding Tiruppur climate.
            </p>
            
            {/* Minimal Editorial Text Link CTAs — NO Box / Rectangle */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
              <a
                href="#selection"
                className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF4B00] transition-colors group cursor-pointer"
              >
                <span>EXPLORE FILMS</span>
                <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </a>
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=Enquiry%20regarding%20Sun-Control%20Films`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF4B00] transition-colors group cursor-pointer"
              >
                <span>BOOK CONSULTATION</span>
                <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Dedicated Hero Image 1 of 2 — Clean Photography Only */}
        <div className="mt-12 sm:mt-16 w-full h-[360px] sm:h-[520px] md:h-[640px] relative overflow-hidden rounded-2xl border border-[#D8D8D5] shadow-2xl bg-[#0A0A0A] group">
          <img
            src="/images/services/sun-control/sun-control-hero.jpg"
            alt="Professional automotive sun-control film installation on a car window at TMR Car Care in Tiruppur"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      </section>

      {/* 02. WHAT SUN-CONTROL FILM DOES — CONTROL THE LIGHT. KEEP THE COMFORT */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            CONTROL THE LIGHT. KEEP THE COMFORT.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            Automotive sun-control film is applied to vehicle glass to help manage solar heat, UV exposure, glare, and cabin comfort while preserving appropriate visibility.
          </p>
        </div>

        {/* 4 Editorial Principles — NO Cards, NO Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              01 — HEAT
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              SOLAR HEAT REDUCTION
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Helps reduce solar infrared heat entering the cabin, creating a cooler interior environment.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              02 — UV
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              ULTRAVIOLET PROTECTION
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Helps filter harmful UV exposure according to verified film optical specifications.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              03 — GLARE
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              DRIVING GLARE CONTROL
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Helps reduce harsh reflected sunlight and intense daytime glare for safer driving.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              04 — COMFORT
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              CABIN COMFORT
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Supports a more comfortable cabin environment during strong, direct sunlight exposure.
            </p>
          </div>
        </div>
      </section>

      {/* 03. WHERE THE FILM WORKS */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            WHERE THE FILM WORKS.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            Application areas across vehicle glass designed for heat management and passenger comfort.
          </p>
        </div>

        {/* Open Editorial Rows — NO Dashboard Widgets */}
        <div className="border-t border-[#D8D8D5] divide-y divide-[#D8D8D5]">
          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-4 font-manrope font-extrabold text-xl uppercase text-[#0A0A0A]">
              WINDSHIELD
            </div>
            <div className="md:col-span-8 font-manrope text-sm sm:text-base text-[#5F5E5E]">
              Heat management and glare reduction where film application is offered and legally compliant.
            </div>
          </div>

          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-4 font-manrope font-extrabold text-xl uppercase text-[#0A0A0A]">
              SIDE WINDOWS
            </div>
            <div className="md:col-span-8 font-manrope text-sm sm:text-base text-[#5F5E5E]">
              Solar heat control, driving glare reduction, and refined cabin privacy.
            </div>
          </div>

          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-4 font-manrope font-extrabold text-xl uppercase text-[#0A0A0A]">
              REAR GLASS
            </div>
            <div className="md:col-span-8 font-manrope text-sm sm:text-base text-[#5F5E5E]">
              Thermal comfort and overall cabin solar heat reduction.
            </div>
          </div>

          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-4 font-manrope font-extrabold text-xl uppercase text-[#0A0A0A]">
              SUNROOF
            </div>
            <div className="md:col-span-8 font-manrope text-sm sm:text-base text-[#5F5E5E]">
              Overhead solar heat management where sunroof film application is offered.
            </div>
          </div>
        </div>
      </section>

      {/* 04. FILM SELECTION — CHOOSE THE RIGHT LEVEL OF LIGHT */}
      <section id="selection" className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            CHOOSE THE RIGHT LEVEL OF LIGHT.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            Film selection depends on Visible Light Transmission (VLT), heat rejection requirements, driving visibility, and regulatory compliance. Film selection should comply with applicable vehicle-glass regulations and visibility requirements.
          </p>
        </div>

        {/* 3 Simple Editorial Choices — NO Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              OPTION 01
            </span>
            <h3 className="font-manrope font-bold text-lg uppercase text-[#0A0A0A]">
              LIGHTER
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Prioritizes clearer visibility with a lighter optical appearance while offering solar heat control.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              OPTION 02
            </span>
            <h3 className="font-manrope font-bold text-lg uppercase text-[#0A0A0A]">
              BALANCED
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Balances cabin comfort, glare control, and everyday driving visibility.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              OPTION 03
            </span>
            <h3 className="font-manrope font-bold text-lg uppercase text-[#0A0A0A]">
              DEEPER
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Provides a darker visual appearance and greater privacy where the selected film legally allows it.
            </p>
          </div>
        </div>
      </section>

      {/* 05. INSTALLATION PROCESS — INSTALLED WITH PRECISION */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A]">
              INSTALLED WITH PRECISION.
            </h2>
            <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
              A precise multi-stage installation process executed at our Tiruppur studio for clean glass fitting.
            </p>

            {/* 4 Compact Editorial Stages — NO Cards */}
            <div className="pt-6 space-y-6 border-t border-[#D8D8D5]">
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
                  01 — INSPECT
                </span>
                <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
                  GLASS INSPECTION
                </h3>
                <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
                  Check glass condition and identify the correct film application area.
                </p>
              </div>

              <div className="space-y-1 pt-4 border-t border-[#D8D8D5]">
                <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
                  02 — PREPARE
                </span>
                <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
                  GLASS DECONTAMINATION
                </h3>
                <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
                  Clean and prepare the glass surface thoroughly prior to film placement.
                </p>
              </div>

              <div className="space-y-1 pt-4 border-t border-[#D8D8D5]">
                <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
                  03 — FIT
                </span>
                <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
                  ACCURATE POSITIONING
                </h3>
                <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
                  Position and fit the film accurately for the selected glass panel contours.
                </p>
              </div>

              <div className="space-y-1 pt-4 border-t border-[#D8D8D5]">
                <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
                  04 — FINISH
                </span>
                <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
                  SQUEEGEE &amp; INSPECTION
                </h3>
                <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
                  Squeegee out application fluid, complete edge-finishing, and inspect before handover.
                </p>
              </div>
            </div>
          </div>

          {/* Dedicated Supporting Image 2 of 2 — Clean Installation Detail Photography Only */}
          <div className="lg:col-span-7 h-[380px] sm:h-[500px] bg-[#0A0A0A] overflow-hidden rounded-2xl border border-[#D8D8D5] shadow-xl relative group">
            <img
              src="/images/services/sun-control/sun-control-detail.jpg"
              alt="Technician fitting window film to a vehicle side glass during professional installation at TMR Car Care"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

        </div>
      </section>

      {/* 06. AFTERCARE — KEEP THE FILM LOOKING RIGHT */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            KEEP THE FILM LOOKING RIGHT.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            Following simple care guidelines ensures long-term film performance and glass clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              01 — INITIAL CURING
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              SETTLING PERIOD
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Allow initial curing and settling according to the selected film manufacturer's instructions.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              02 — GENTLE CLEANING
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              SOFT MICROFIBER
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Clean glass using soft microfiber towels and non-abrasive, ammonia-free glass cleaners.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              03 — SURFACE CARE
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              PREVENT ABRASION
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Avoid sharp objects or aggressive scrubbing tools on film-coated glass surfaces.
            </p>
          </div>
        </div>
      </section>

      {/* 07. LOCAL-SEO SUN-CONTROL FAQ SECTION */}
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
                SUN-CONTROL <br />
                FILMS <br />
                <span className="font-['Bricolage_Grotesque',serif] font-extrabold italic text-[#FF4B00] lowercase pr-2 inline-block transform -rotate-1">
                  faq.
                </span>
              </h2>

              <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed max-w-md">
                Find clear answers about automotive sun-control film installation, heat rejection, UV protection, and glass maintenance in Tiruppur.
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
                      id={`sun-faq-btn-${idx}`}
                      aria-expanded={isOpen}
                      aria-controls={`sun-faq-ans-${idx}`}
                      onClick={() => toggleFaq(idx)}
                      className="w-full py-7 px-2 flex items-center justify-between text-left group cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#FF4B00]/40"
                    >
                      <div className="flex items-baseline gap-4 pr-6">
                        <span className="font-mono text-xs font-bold text-[#FF4B00] shrink-0">
                          {idx < 9 ? `0${idx + 1}` : idx + 1}
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
                        id={`sun-faq-ans-${idx}`}
                        role="region"
                        aria-labelledby={`sun-faq-btn-${idx}`}
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

      {/* 08. FINAL CTA — READY TO CONTROL THE LIGHT? */}
      <section className="relative w-full py-24 sm:py-32 bg-[#0B0B0B] text-white border-b border-[#222222] overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#181210] via-[#0B0B0B] to-[#050505]">
        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_45%,_rgba(0,0,0,0.65)_100%)]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
            READY TO CONTROL <br />
            <span className="font-['Bricolage_Grotesque',serif] font-extrabold italic text-[#FF4B00] lowercase tracking-normal inline-block">
              the light?
            </span>
          </h2>

          <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] max-w-xl mx-auto leading-relaxed">
            Tell us what you want from your vehicle's windows and we'll help you choose the right film.
          </p>

          {/* Minimal Editorial Text Link CTAs — NO Box / Rectangle */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-4">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors group cursor-pointer"
            >
              <span>BOOK CONSULTATION</span>
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
