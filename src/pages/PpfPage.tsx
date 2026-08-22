import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const PpfPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeZone, setActiveZone] = useState<number>(0);

  // SEO Page Metadata & Title
  useEffect(() => {
    document.title = "PPF Paint Protection Film Tiruppur — TMR Car Care";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Protect your vehicle with self-healing Paint Protection Film (PPF) at TMR Car Care Tiruppur. Shield factory paint against stone chips, scratches, and road debris.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const protectionZones = [
    {
      name: "FRONT BUMPER",
      desc: "Maximum impact shielding against high-velocity road gravel, flying stones, and bug splatter.",
      image: "/images/ppf/ppf-surface.webp",
    },
    {
      name: "HOOD & BONNET",
      desc: "Full seamless film coverage safeguarding the largest painted panel from stone chips and environmental fallout.",
      image: "/images/ppf/ppf-hero.webp",
    },
    {
      name: "FRONT FENDERS",
      desc: "Shields leading wheel-arch body curves against tire-thrown debris and tight parking abrasions.",
      image: "/images/protection/protection-hero.webp",
    },
    {
      name: "SIDE MIRRORS",
      desc: "Protects high-exposure mirror caps from highway debris impacts and tight-squeeze scratches.",
      image: "/images/ppf/ppf-surface.webp",
    },
    {
      name: "ROCKER PANELS",
      desc: "Guards lower door sills and side skirts against aggressive stone kick-up from front tires.",
      image: "/images/ppf/ppf-hero.webp",
    },
  ];

  const processSteps = [
    {
      index: "01",
      title: "PREPARE",
      desc: "Decontamination, clay bar, and paint correction for a pristine optical foundation.",
    },
    {
      index: "02",
      title: "FIT",
      desc: "Precision digital pattern computer-cutting for exact vehicle panel fitment without blade contact.",
    },
    {
      index: "03",
      title: "INSTALL",
      desc: "Slip-solution alignment, squeegee application, and hand-wrapped edge tucking.",
    },
    {
      index: "04",
      title: "FINISH",
      desc: "Thermal edge-setting, optical clarity audit, and final studio inspection.",
    },
  ];

  const faqs = [
    {
      question: "What is Paint Protection Film (PPF)?",
      answer:
        "PPF is an optically clear, self-healing thermoplastic polyurethane (TPU) film applied directly to painted vehicle surfaces to absorb physical impacts from stone chips, gravel, and scratches.",
    },
    {
      question: "What does PPF protect against?",
      answer:
        "PPF protects against stone chips, road debris, parking scrapes, key scratches, bug splatter acids, bird droppings, and UV clearcoat yellowing.",
    },
    {
      question: "Can PPF be installed on a new car?",
      answer:
        "Yes! Installing PPF on a new car preserves factory original paint in pristine condition, maximizing long-term vehicle resale value.",
    },
    {
      question: "Which parts of a vehicle are normally protected?",
      answer:
        "Options range from Full Front Packages (Bumper, Hood, Fenders, Mirrors) to Full Body Wraps for complete 360-degree paint defense.",
    },
    {
      question: "How is PPF maintained?",
      answer:
        "Wash normally using neutral pH shampoo and soft microfiber towels. Minor swirl marks self-heal naturally when exposed to heat or warm sunlight.",
    },
    {
      question: "Can ceramic coating be applied over PPF?",
      answer:
        "Yes. Applying a ceramic coating over PPF adds hydrophobic slickness, simplifies cleaning, and prevents environmental staining on the film.",
    },
  ];

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "PPF Paint Protection Film Tiruppur",
    "provider": {
      "@type": "AutoRepair",
      "name": "TMR Car Care Studio",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tiruppur",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    },
    "serviceType": "Car Paint Protection Film Installation",
    "areaServed": "Tiruppur, Tamil Nadu",
    "description": "Self-healing PPF paint protection film installation services in Tiruppur."
  };

  return (
    <div className="w-full bg-[#fff8f6] text-[#111111] font-manrope selection:bg-[#FF4B00] selection:text-white overflow-x-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SECTION 01 — HERO */}
      <section className="w-full border-b border-[#D8D8D5] py-16 sm:py-24 lg:py-32">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-manrope font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block">
                IMPACT DEFENSE DISCIPLINE
              </span>
              
              <h1 className="font-manrope font-extrabold text-5xl sm:text-7xl lg:text-[84px] uppercase tracking-tight leading-none text-[#111111]">
                PAINT PROTECTION
                <span className="font-editorial italic text-3xl sm:text-4xl text-[#FF4B00] block mt-2 font-normal lowercase tracking-normal">
                  Film
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#858585] max-w-lg font-normal leading-relaxed">
                Ultra-clear thermoplastic polyurethane film engineered to absorb stone chips, prevent scratches, and preserve factory paint in Tiruppur.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/919944335520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#111111] hover:bg-[#FF4B00] text-white font-manrope font-bold text-xs uppercase tracking-widest px-8 py-4 transition-colors duration-300"
                >
                  <span>BOOK A CONSULTATION</span>
                  <span>↗</span>
                </a>

                <a
                  href="https://wa.me/919944335520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#D8D8D5] hover:border-[#111111] text-[#111111] font-manrope font-bold text-xs uppercase tracking-widest px-6 py-4 transition-colors duration-300"
                >
                  <span>WHATSAPP TMR</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Right Media Stage */}
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] w-full overflow-hidden border border-[#D8D8D5] bg-[#050505] relative shadow-lg">
                <video
                  src="/videos/services/ppf.mp4"
                  poster="/videos/services/ppf-poster.jpg"
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 02 — WHAT PPF DOES */}
      <section className="w-full border-b border-[#D8D8D5] py-20 sm:py-28 bg-[#fff8f6]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block">
                ARMOR FOR FACTORY PAINT
              </span>
              <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#111111]">
                PROTECTION WHERE IT MATTERS.
              </h2>
              <p className="text-sm sm:text-base text-[#858585] font-normal leading-relaxed">
                Paint Protection Film (PPF) is an invisible high-grade elastomeric polymer layer that acts as a shock-absorbing shield over your vehicle's factory paint. Designed with heat-activated self-healing technology, minor scratches and swirl marks disappear under warm sunlight while gravel and stone impacts bounce off without damaging the underlying clearcoat.
              </p>
              <div className="pt-2">
                <Link
                  to="/services/ceramic-coating"
                  className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-[#FF4B00] hover:text-[#111111] transition-colors"
                >
                  <span>SEE HOW CERAMIC COATING WORKS</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[16/11] w-full overflow-hidden border border-[#D8D8D5]">
                <img
                  src="/images/ppf/ppf-hero.webp"
                  alt="Clear PPF paint protection film installation at TMR Car Care Tiruppur"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 03 — HIGH-IMPACT PROTECTION ZONES */}
      <section className="w-full border-b border-[#D8D8D5] py-20 sm:py-28">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-12">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              TARGETED SHIELDING
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#111111]">
              HIGH-IMPACT VEHICLE ZONES
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-t border-[#D8D8D5] pt-8">
            {/* Zone Selector Buttons */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              {protectionZones.map((z, idx) => {
                const isActive = activeZone === idx;
                return (
                  <button
                    key={z.name}
                    onClick={() => setActiveZone(idx)}
                    onMouseEnter={() => setActiveZone(idx)}
                    className={`w-full text-left py-4 px-6 border border-[#D8D8D5] transition-all duration-300 font-manrope ${
                      isActive
                        ? "bg-[#111111] text-white border-[#111111] pl-8"
                        : "hover:border-[#111111] text-[#111111]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-sm sm:text-base uppercase tracking-wider">
                        {z.name}
                      </span>
                      <span className={`text-base ${isActive ? "text-[#FF4B00]" : "text-[#858585]"}`}>
                        →
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Zone Details & Visual */}
            <div className="lg:col-span-7 space-y-6">
              <div className="aspect-[16/10] w-full overflow-hidden border border-[#D8D8D5] bg-[#111111] relative">
                <img
                  src={protectionZones[activeZone].image}
                  alt={`TMR PPF coverage for ${protectionZones[activeZone].name}`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>

              <div className="p-6 border border-[#D8D8D5] bg-[#fff8f6] font-manrope">
                <span className="font-bold text-xs uppercase tracking-widest text-[#FF4B00] block mb-2">
                  COVERAGE DETAILS // {protectionZones[activeZone].name}
                </span>
                <p className="text-sm sm:text-base text-[#858585] font-normal leading-relaxed">
                  {protectionZones[activeZone].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — INSTALLATION PROCESS */}
      <section className="w-full border-b border-[#D8D8D5] py-20 sm:py-28 bg-[#fff8f6]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-16">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              PRECISION CRAFTSMANSHIP
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#111111]">
              4-STAGE INSTALLATION PROCESS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((p) => (
              <div key={p.index} className="border-t border-[#D8D8D5] pt-6 space-y-3 font-manrope">
                <span className="font-editorial text-3xl italic text-[#FF4B00] block">
                  {p.index}
                </span>
                <h3 className="font-intertight font-extrabold text-xl uppercase tracking-tight text-[#111111]">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#858585] font-normal leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — PPF VS CERAMIC (DECISION SECTION) */}
      <section className="w-full border-b border-[#D8D8D5] py-20 sm:py-28">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-12">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              TECHNICAL COMPARISON
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#111111]">
              PPF OR CERAMIC?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-manrope">
            {/* PPF Box */}
            <div className="p-8 border border-[#111111] bg-[#111111] text-white space-y-4">
              <span className="font-bold text-xs uppercase tracking-[0.2em] text-[#FF4B00] block">
                PHYSICAL IMPACT DEFENSE
              </span>
              <h3 className="font-intertight font-extrabold text-2xl uppercase">
                PAINT PROTECTION FILM (PPF)
              </h3>
              <p className="text-sm text-white/70 font-normal leading-relaxed">
                Absorbs physical impacts from stone chips, gravel, key scratches, and road debris. Features self-healing clearcoat technology for severe environment driving.
              </p>
            </div>

            {/* Ceramic Box */}
            <div className="p-8 border border-[#D8D8D5] bg-[#fff8f6] space-y-4">
              <span className="font-bold text-xs uppercase tracking-[0.2em] text-[#FF4B00] block">
                CHEMICAL & GLOSS DEFENSE
              </span>
              <h3 className="font-intertight font-extrabold text-2xl uppercase text-[#111111]">
                CERAMIC COATING
              </h3>
              <p className="text-sm text-[#858585] font-normal leading-relaxed">
                Provides chemical resistance, UV protection, high hydrophobic water beading, and deep gloss enhancement. Simplifies routine vehicle maintenance.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 border border-[#D8D8D5] bg-[#fff8f6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-manrope">
            <p className="text-sm font-bold uppercase tracking-wider text-[#111111]">
              THE TWO CAN ALSO WORK TOGETHER — PPF ON FRONT ZONES + CERAMIC OVER ENTIRE VEHICLE.
            </p>
            <Link
              to="/services/ceramic-coating"
              className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-[#FF4B00] hover:text-[#111111] transition-colors whitespace-nowrap"
            >
              <span>EXPLORE CERAMIC COATING</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 06 — FAQ ACCORDION */}
      <section className="w-full border-b border-[#D8D8D5] py-20 sm:py-28 bg-[#fff8f6]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-12">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              CLIENT INQUIRIES
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#111111]">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="border-t border-[#D8D8D5] font-manrope">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="border-b border-[#D8D8D5]">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full py-6 flex items-center justify-between text-left group"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-intertight font-extrabold text-lg sm:text-xl uppercase tracking-tight text-[#111111] group-hover:text-[#FF4B00] transition-colors">
                      {faq.question}
                    </h3>
                    <span className="text-2xl text-[#FF4B00] transition-transform duration-300">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm sm:text-base text-[#858585] font-normal leading-relaxed max-w-3xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 07 — FINAL CTA */}
      <section className="w-full py-20 sm:py-28 bg-[#111111] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block">
              PRESERVE FACTORY ORIGINAL PAINT
            </span>
            <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl uppercase tracking-tight">
              PROTECT THE FINISH.
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-lg mx-auto font-normal leading-relaxed">
              Schedule a consultation with our certified PPF installers in Tiruppur to discuss custom coverage packages for your car.
            </p>

            <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
              <a
                href="https://wa.me/919944335520"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#FF4B00] hover:bg-white hover:text-[#111111] text-white font-manrope font-bold text-xs uppercase tracking-widest px-8 py-4 transition-colors duration-300"
              >
                <span>BOOK A CONSULTATION</span>
                <span>↗</span>
              </a>

              <a
                href="https://wa.me/919944335520"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-white font-manrope font-bold text-xs uppercase tracking-widest px-6 py-4 transition-colors duration-300"
              >
                <span>WHATSAPP TMR</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
