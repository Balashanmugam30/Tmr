import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '@/data/company';

export const PpfPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Paint Protection Film (PPF) in Tiruppur | TMR Car Care";
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: "faq-what-is-ppf",
      q: "What is Paint Protection Film (PPF) for a car?",
      a: "Paint Protection Film (PPF) is a clear, durable thermoplastic polyurethane (TPU) film applied directly over a vehicle's painted surfaces. It forms a transparent barrier that helps protect the underlying factory paint from stone chips, road debris, bug splatter, and minor surface scratches.",
      plainAnswer: "Paint Protection Film (PPF) is a clear, durable thermoplastic polyurethane (TPU) film applied directly over a vehicle's painted surfaces. It forms a transparent barrier that helps protect factory paint from stone chips, road debris, and minor scratches.",
    },
    {
      id: "faq-ppf-tiruppur",
      q: "Is PPF service available in Tiruppur?",
      a: "Yes. TMR Car Care provides professional Paint Protection Film (PPF) installation services at our studio on Avinashi Road, Tiruppur, catering to luxury, executive, and daily-driven passenger vehicles.",
      plainAnswer: "Yes. TMR Car Care provides professional Paint Protection Film (PPF) installation services at our studio on Avinashi Road, Tiruppur.",
    },
    {
      id: "faq-ppf-location",
      q: "Where can I get PPF installation in Tiruppur?",
      a: "You can get professional PPF installation at TMR Car Care Studio, located on Avinashi Road, near Hope College Junction, Tiruppur, Tamil Nadu. Our facility is equipped with controlled lighting and prep bays for precision film installation.",
      plainAnswer: "You can get professional PPF installation at TMR Car Care Studio, located on Avinashi Road, near Hope College Junction, Tiruppur, Tamil Nadu.",
    },
    {
      id: "faq-ppf-cost",
      q: "How much does PPF cost in Tiruppur?",
      a: "PPF installation cost depends on your vehicle size, panel contours, film specification, and whether you choose partial high-impact coverage or full-vehicle coverage. Contact TMR Car Care for a customized quote tailored to your vehicle.",
      plainAnswer: "PPF installation cost depends on vehicle size, panel contours, film specification, and coverage options. Contact TMR Car Care for a customized quote.",
    },
    {
      id: "faq-ppf-lifespan",
      q: "How long does PPF last?",
      a: "High-quality thermoplastic polyurethane (TPU) PPF systems offer long-term clarity and durability when maintained properly. Lifespan and warranty terms depend on the specific film package selected; contact TMR for current details.",
      plainAnswer: "High-quality TPU PPF systems offer long-term clarity and durability when maintained properly. Lifespan depends on the film package selected.",
    },
    {
      id: "faq-new-car",
      q: "Is PPF worth it for a new car?",
      a: "Yes. Installing PPF on a brand-new vehicle preserves original factory paint from day one before stone chips or road damage occur. It is especially recommended for highway drivers and owners seeking to preserve vehicle resale value.",
      plainAnswer: "Yes. Installing PPF on a brand-new vehicle preserves original factory paint from day one before stone chips or road damage occur.",
    },
    {
      id: "faq-vs-ceramic",
      q: "Is PPF better than ceramic coating?",
      a: (
        <>
          They serve different primary purposes. PPF provides a physical film barrier against stone chips and road debris impact, whereas{' '}
          <a href="/services/ceramic-coating" className="text-[#FF4B00] font-bold underline hover:text-[#0A0A0A] transition-colors">
            ceramic coating
          </a>{' '}
          delivers hydrophobic water-beading and high gloss. Many owners combine both for total protection.
        </>
      ),
      plainAnswer: "PPF provides a physical film barrier against stone chips and impact, whereas ceramic coating delivers hydrophobic water-beading and high gloss.",
    },
    {
      id: "faq-ceramic-over-ppf",
      q: "Can ceramic coating be applied over PPF?",
      a: "In many cases, yes. Applying a compatible ceramic top coat over Paint Protection Film enhances hydrophobic water sheeting and simplifies routine washing. TMR can advise based on the specific film system selected.",
      plainAnswer: "In many cases, yes. Applying a compatible ceramic top coat over Paint Protection Film enhances hydrophobic water sheeting and simplifies routine washing.",
    },
    {
      id: "faq-stone-chips",
      q: "Does PPF protect against stone chips and road debris?",
      a: "Yes. PPF is engineered specifically to absorb physical impacts from gravel, small stone chips, and road debris, preventing them from penetrating through to the underlying paintwork.",
      plainAnswer: "Yes. PPF is engineered specifically to absorb physical impacts from gravel, small stone chips, and road debris, preventing them from penetrating the paint.",
    },
    {
      id: "faq-removal",
      q: "Can PPF be removed without damaging the paint?",
      a: "Professional removal of quality PPF using controlled heat releases cleanly without lifting sound factory paint. Proper removal preserves the pristine paintwork underneath.",
      plainAnswer: "Professional removal of quality PPF using controlled heat releases cleanly without lifting sound factory paint.",
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
              THE INVISIBLE <br />
              <span className="font-['Bricolage_Grotesque',serif] font-extrabold italic text-[#FF4B00] lowercase pr-4 inline-block transform -rotate-1">
                shield.
              </span>
            </h1>
          </div>

          <div className="col-span-1 md:col-span-8 space-y-6">
            <h2 className="font-manrope font-extrabold text-lg sm:text-xl text-[#0A0A0A] uppercase tracking-wider">
              PAINT PROTECTION FILM IN TIRUPPUR.
            </h2>
            <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed max-w-2xl">
              Paint Protection Film (PPF) is a transparent protective film designed to help protect painted surfaces from everyday road debris, stone chips, and environmental exposure. Preserving factory paint finish with precision edge wrapping.
            </p>
            
            {/* Minimal Editorial Text Link CTAs — NO Box / Rectangle */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=Enquiry%20regarding%20PPF%20Installation`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF4B00] transition-colors group cursor-pointer"
              >
                <span>ENQUIRE ABOUT PPF</span>
                <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </a>
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF4B00] transition-colors group cursor-pointer"
              >
                <span>WHATSAPP TMR</span>
                <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Dedicated Hero Image 1 of 2 — Clean Photography Only */}
        <div className="mt-12 sm:mt-16 w-full h-[360px] sm:h-[520px] md:h-[640px] relative overflow-hidden rounded-2xl border border-[#D8D8D5] shadow-2xl bg-[#0A0A0A] group">
          <img
            src="/images/services/ppf/ppf-hero.jpg"
            alt="Professional paint protection film installation on a vehicle at TMR Car Care in Tiruppur"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      </section>

      {/* 02. WHAT IS PPF? — A LAYER YOU BARELY SEE */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            A LAYER YOU BARELY SEE.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            Paint Protection Film (PPF) is a transparent protective film applied over painted surfaces to help defend the underlying paint from common road hazards and environmental exposure.
          </p>
        </div>

        {/* 3 Principles — NO Cards, NO Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              01 — IMPACT PROTECTION
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              ROAD DEBRIS DEFENSE
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Helps protect exposed painted areas from everyday gravel, flying stones, and highway road debris.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              02 — SURFACE PRESERVATION
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              PAINT INTEGRITY
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Helps preserve the condition and clarity of your vehicle's factory paintwork over long-term ownership.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              03 — CLEAR FINISH
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              TRANSPARENT OPTICS
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Maintains true paint reflection and gloss without distorting body color or panel appearance.
            </p>
          </div>
        </div>
      </section>

      {/* 03. IS PPF RIGHT FOR YOUR CAR? */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            IS PPF RIGHT FOR YOUR CAR?
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            Paint Protection Film is particularly relevant for vehicle owners with specific driving habits and preservation goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] block">01</span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A] tracking-wider">
              HIGHWAY DRIVERS
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Ideal for vehicles frequently driven on highways exposed to high-velocity stone chips and road debris.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] block">02</span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A] tracking-wider">
              NEW DELIVERIES
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Protects brand-new factory paintwork from day one before defects or chip damage occur.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] block">03</span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A] tracking-wider">
              HIGH-IMPACT ZONES
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Provides physical defense for vulnerable areas such as front bumpers, hoods, and mirror caps.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] block">04</span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A] tracking-wider">
              RESALE VALUE
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Preserves original factory paint finish to protect long-term vehicle condition and value.
            </p>
          </div>
        </div>
      </section>

      {/* 04. PPF INSTALLATION PROCESS — FROM PAINT TO PROTECTION */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A]">
              FROM PAINT TO PROTECTION.
            </h2>
            <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
              A precise multi-stage installation process executed at our Tiruppur studio for optimal fit and edge alignment.
            </p>

            {/* 4 Compact Editorial Stages — NO 4-Image Gallery, NO Cards */}
            <div className="pt-6 space-y-6 border-t border-[#D8D8D5]">
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
                  01 — INSPECT
                </span>
                <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
                  PAINT INSPECTION
                </h3>
                <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
                  Assess paint condition and determine the exact panel areas requiring film coverage.
                </p>
              </div>

              <div className="space-y-1 pt-4 border-t border-[#D8D8D5]">
                <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
                  02 — PREPARE
                </span>
                <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
                  SURFACE DECONTAMINATION
                </h3>
                <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
                  Clean and decontaminate the substrate so the film adheres securely to a spotless surface.
                </p>
              </div>

              <div className="space-y-1 pt-4 border-t border-[#D8D8D5]">
                <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
                  03 — ALIGN
                </span>
                <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
                  FILM POSITIONING
                </h3>
                <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
                  Position and align the film carefully around panel contours and body lines.
                </p>
              </div>

              <div className="space-y-1 pt-4 border-t border-[#D8D8D5]">
                <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
                  04 — FINISH
                </span>
                <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
                  EDGE SEALING &amp; INSPECTION
                </h3>
                <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
                  Squeegee out application fluid, wrap edges where feasible, and complete final quality inspection.
                </p>
              </div>
            </div>
          </div>

          {/* Dedicated Supporting Image 2 of 2 — Clean Installation Detail Photography Only */}
          <div className="lg:col-span-7 h-[380px] sm:h-[500px] bg-[#0A0A0A] overflow-hidden rounded-2xl border border-[#D8D8D5] shadow-xl relative group">
            <img
              src="/images/services/ppf/ppf-detail.jpg"
              alt="Technician aligning clear paint protection film on a vehicle panel during PPF installation"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

        </div>
      </section>

      {/* 05. COVERAGE & OPTIONS — PROTECT WHERE IT MATTERS */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            PROTECT WHERE IT MATTERS.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            Coverage can be selected based on vehicle exposure, driving habits, and protection requirements.
          </p>
        </div>

        {/* Open Editorial Coverage List — NO Hotspot Map, NO Cards */}
        <div className="border-t border-[#D8D8D5] divide-y divide-[#D8D8D5] mb-16">
          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-4 font-manrope font-extrabold text-xl uppercase text-[#0A0A0A]">
              FRONT BUMPER
            </div>
            <div className="md:col-span-8 font-manrope text-sm sm:text-base text-[#5F5E5E]">
              High-exposure front surface vulnerable to flying road stones and bug splatter.
            </div>
          </div>

          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-4 font-manrope font-extrabold text-xl uppercase text-[#0A0A0A]">
              FULL HOOD
            </div>
            <div className="md:col-span-8 font-manrope text-sm sm:text-base text-[#5F5E5E]">
              Protection for the leading painted bonnet area exposed to high-velocity gravel.
            </div>
          </div>

          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-4 font-manrope font-extrabold text-xl uppercase text-[#0A0A0A]">
              MIRRORS
            </div>
            <div className="md:col-span-8 font-manrope text-sm sm:text-base text-[#5F5E5E]">
              Protection for exposed side mirror caps against debris impacts.
            </div>
          </div>

          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-4 font-manrope font-extrabold text-xl uppercase text-[#0A0A0A]">
              ROCKER PANELS
            </div>
            <div className="md:col-span-8 font-manrope text-sm sm:text-base text-[#5F5E5E]">
              Protection for lower side skirts vulnerable to gravel kick-up from front tires.
            </div>
          </div>
        </div>

        {/* Buying Guide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#D8D8D5]">
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              OPTION 01
            </span>
            <h3 className="font-manrope font-bold text-lg uppercase text-[#0A0A0A]">
              PARTIAL / HIGH-IMPACT COVERAGE
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Useful for owners prioritizing protection on the most exposed painted front panels.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              OPTION 02
            </span>
            <h3 className="font-manrope font-bold text-lg uppercase text-[#0A0A0A]">
              FULL VEHICLE COVERAGE
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Suitable for owners seeking comprehensive paint protection across all painted body panels. Contact TMR for coverage options and a vehicle-specific quote.
            </p>
          </div>
        </div>
      </section>

      {/* 06. CERAMIC VS PPF — CHOOSE THE RIGHT PROTECTION */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            CHOOSE THE RIGHT PROTECTION.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            Understanding the distinct roles of physical film versus liquid surface treatment.
          </p>
        </div>

        {/* Editorial Comparison — NO Large Boxed Tables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6 border-t border-[#D8D8D5]">
          <div className="space-y-4">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              PHYSICAL BARRIER
            </span>
            <h3 className="font-manrope font-bold text-2xl uppercase text-[#0A0A0A]">
              PAINT PROTECTION FILM (PPF)
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              A transparent polyurethane film designed specifically for physical impact defense, stone-chip resistance, and surface preservation.
            </p>
          </div>

          <div className="space-y-4">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              SURFACE LIQUID COATING
            </span>
            <h3 className="font-manrope font-bold text-2xl uppercase text-[#0A0A0A]">
              CERAMIC COATING
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              A liquid coating that bonds with paint to enhance gloss, provide hydrophobic water-beading, and simplify routine maintenance. Explore our{' '}
              <a href="/services/ceramic-coating" className="text-[#FF4B00] font-bold underline hover:text-[#0A0A0A] transition-colors">
                ceramic coating services
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* 07. MAINTENANCE & AFTERCARE — PROTECTION NEEDS CARE TOO */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            PROTECTION NEEDS CARE TOO.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            Following recommended aftercare routines preserves film appearance and long-term performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              01 — FIRST DAYS
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              INITIAL CURING
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Follow the installation team's initial care guidelines to allow moisture beneath the film to settle properly.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              02 — WASHING
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              SAFE CLEANING
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Use safe washing methods with soft wash mitts and avoid aggressive brushing or automated car wash systems.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
              03 — ONGOING CARE
            </span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
              MAINTENANCE ROUTINE
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Follow recommended maintenance procedures to keep the film clean and preserve surface clarity over time.
            </p>
          </div>
        </div>
      </section>

      {/* 08. PPF LOCAL-SEO FAQ SECTION */}
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
                PPF &amp; PAINT <br />
                PROTECTION <br />
                <span className="font-['Bricolage_Grotesque',serif] font-extrabold italic text-[#FF4B00] lowercase pr-2 inline-block transform -rotate-1">
                  faq.
                </span>
              </h2>

              <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed max-w-md">
                Find clear answers about Paint Protection Film (PPF) installation, stone chip defense, coverage options, and removal in Tiruppur.
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
                      id={`ppf-faq-btn-${idx}`}
                      aria-expanded={isOpen}
                      aria-controls={`ppf-faq-ans-${idx}`}
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
                        id={`ppf-faq-ans-${idx}`}
                        role="region"
                        aria-labelledby={`ppf-faq-btn-${idx}`}
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

      {/* 09. FINAL CTA — READY TO PROTECT THE PAINT? */}
      <section className="relative w-full py-24 sm:py-32 bg-[#0B0B0B] text-white border-b border-[#222222] overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#181210] via-[#0B0B0B] to-[#050505]">
        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_45%,_rgba(0,0,0,0.65)_100%)]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
            READY TO PROTECT <br />
            <span className="font-['Bricolage_Grotesque',serif] font-extrabold italic text-[#FF4B00] lowercase tracking-normal inline-block">
              the paint?
            </span>
          </h2>

          <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] max-w-xl mx-auto leading-relaxed">
            Tell us about your vehicle and we'll help you choose the right PPF coverage.
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
