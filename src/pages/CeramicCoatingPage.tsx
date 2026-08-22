import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const CeramicCoatingPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [sliderPos, setSliderPos] = useState<number>(50);

  // SEO Page Metadata & Title
  useEffect(() => {
    document.title = "Ceramic Coating Tiruppur — TMR Car Care";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore premium ceramic coating services at TMR Car Care Tiruppur. Hydrophobic surface protection, 10H glass finish, paint gloss enhancement, and easy maintenance.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      index: "01",
      title: "HYDROPHOBIC SURFACE",
      desc: "Repels water, mud, and road grime effortlessly, creating high-angle water beading that slides off clean.",
    },
    {
      index: "02",
      title: "GLOSS ENHANCEMENT",
      desc: "Deepens clearcoat optics, creating a wet-look reflective shine that intensifies paint depth.",
    },
    {
      index: "03",
      title: "ENVIRONMENTAL RESISTANCE",
      desc: "Shields clearcoat against harsh UV rays, bird droppings, acid rain, and chemical staining.",
    },
    {
      index: "04",
      title: "EASIER MAINTENANCE",
      desc: "Drastically reduces wash time and effort as dirt cannot bond strongly to the slick ceramic matrix.",
    },
  ];

  const processSteps = [
    {
      index: "01",
      title: "INSPECT",
      desc: "Multi-point paint depth and surface defect analysis under specialized lighting.",
    },
    {
      index: "02",
      title: "PREPARE",
      desc: "Decontamination wash, clay bar treatment, and multi-stage paint correction.",
    },
    {
      index: "03",
      title: "APPLY",
      desc: "Precision hand application of 10H ceramic matrix coat in a climate-controlled studio.",
    },
    {
      index: "04",
      title: "CURE",
      desc: "IR thermal curing and optical reflection inspection for maximum bond durability.",
    },
  ];

  const faqs = [
    {
      question: "How long does ceramic coating last?",
      answer:
        "Depending on the ceramic matrix selected and maintenance routines, TMR ceramic coatings provide durable gloss and hydrophobic protection for 3 to 5 years.",
    },
    {
      question: "Does ceramic coating prevent scratches?",
      answer:
        "Ceramic coating increases clearcoat hardness and resists micro-marring and swirl marks from washing. However, physical impact protection against stone chips requires Paint Protection Film (PPF).",
    },
    {
      question: "Does paint correction need to be done first?",
      answer:
        "Yes. Correcting paint defects, swirls, and scratches prior to coating seals the paint at peak optical clarity and ensures optimal molecular bonding.",
    },
    {
      question: "Can ceramic coating be applied to a new car?",
      answer:
        "Absolutely. Applying ceramic coating to a new vehicle locks in factory-fresh paint quality and prevents environmental damage from day one.",
    },
    {
      question: "How should a ceramic-coated vehicle be maintained?",
      answer:
        "Wash regularly using neutral pH car shampoo, soft microfiber towels, and the two-bucket method. Periodic ceramic booster sprays maintain hydrophobic slickness.",
    },
    {
      question: "Can ceramic coating be used with PPF?",
      answer:
        "Yes! Ceramic coating applied over PPF enhances the film's slickness, stain resistance, and hydrophobic self-cleaning properties.",
    },
  ];

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ceramic Coating Service Tiruppur",
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
    "serviceType": "Car Ceramic Coating & Paint Protection",
    "areaServed": "Tiruppur, Tamil Nadu",
    "description": "Hydrophobic ceramic coating and paint correction services in Tiruppur."
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
                FLAGSHIP COATING DISCIPLINE
              </span>
              
              <h1 className="font-manrope font-extrabold text-5xl sm:text-7xl lg:text-[84px] uppercase tracking-tight leading-none text-[#111111]">
                CERAMIC
                <span className="font-editorial italic text-3xl sm:text-4xl text-[#FF4B00] block mt-2 font-normal lowercase tracking-normal">
                  Coating
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#858585] max-w-lg font-normal leading-relaxed">
                Hydrophobic surface protection engineered to enhance gloss, resist environmental contamination, and simplify vehicle maintenance in Tiruppur.
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
                  src="/videos/services/ceramic-coating.mp4"
                  poster="/videos/services/ceramic-coating-poster.jpg"
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

      {/* SECTION 02 — WHAT CERAMIC COATING DOES */}
      <section className="w-full border-b border-[#D8D8D5] py-20 sm:py-28 bg-[#fff8f6]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block">
                SURFACE PERFORMANCE
              </span>
              <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#111111]">
                A FINISH THAT STAYS CLEANER.
              </h2>
              <p className="text-sm sm:text-base text-[#858585] font-normal leading-relaxed">
                TMR Ceramic Coating forms a semi-permanent nanostructured glass layer over your vehicle's clearcoat. By filling microscopic pores in the paint, it creates a slick, hydrophobic barrier that prevents dirt, water spots, UV oxidation, and road oils from bonding to the surface.
              </p>
              <div className="pt-2">
                <Link
                  to="/services/detailing-paint-care"
                  className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-[#FF4B00] hover:text-[#111111] transition-colors"
                >
                  <span>LEARN ABOUT PAINT CORRECTION FIRST</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[16/11] w-full overflow-hidden border border-[#D8D8D5]">
                <img
                  src="/images/protection/prot-repel.webp"
                  alt="Hydrophobic ceramic coating water beading at TMR Car Care Tiruppur"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 03 — KEY BENEFITS */}
      <section className="w-full border-b border-[#D8D8D5] py-20 sm:py-28">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-12">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              CORE ADVANTAGES
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#111111]">
              KEY BENEFIT SPECTRUM
            </h2>
          </div>

          <div className="border-t border-[#D8D8D5]">
            {benefits.map((b) => (
              <div
                key={b.index}
                className="group border-b border-[#D8D8D5] py-8 sm:py-10 transition-all duration-300 hover:pl-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                  <div className="md:col-span-4 flex items-baseline gap-4">
                    <span className="font-editorial text-2xl sm:text-3xl italic text-[#FF4B00]">
                      {b.index}
                    </span>
                    <h3 className="font-intertight font-extrabold text-xl sm:text-2xl uppercase tracking-tight text-[#111111] group-hover:text-[#FF4B00] transition-colors">
                      {b.title}
                    </h3>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-sm sm:text-base text-[#858585] font-normal leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 — TMR APPLICATION PROCESS */}
      <section className="w-full border-b border-[#D8D8D5] py-20 sm:py-28 bg-[#fff8f6]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-16">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              STUDIO PROTOCOL
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#111111]">
              4-STAGE APPLICATION PROCESS
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

      {/* SECTION 05 — VISUAL RESULT (BEFORE / AFTER COMPARISON SLIDER) */}
      <section className="w-full border-b border-[#D8D8D5] py-20 sm:py-28">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-12">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              CLARITY TRANSFORMATION
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#111111]">
              OPTICAL PROOF
            </h2>
          </div>

          {/* Interactive Before/After Slider */}
          <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#D8D8D5] select-none">
            {/* After Image (Full width background) */}
            <img
              src="/images/transformation/after.webp"
              alt="Ceramic coated paint gloss finish at TMR Car Care"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src="/images/transformation/before.webp"
                alt="Unprotected paint surface before ceramic coating"
                className="w-full h-full object-cover max-w-none"
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            {/* Slider Handle */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              aria-label="Before and after ceramic coating slider comparison"
            />

            <div
              className="absolute top-0 bottom-0 w-[2px] bg-[#FF4B00] z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#111111] border border-white text-white font-bold text-xs flex items-center justify-center">
                ↔
              </div>
            </div>

            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold uppercase tracking-wider z-20 pointer-events-none">
              BEFORE (UNPROTECTED)
            </div>
            <div className="absolute bottom-4 right-4 bg-[#FF4B00] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider z-20 pointer-events-none">
              AFTER (CERAMIC COATED)
            </div>
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

      {/* SECTION 07 — FINAL CTA & INTERNAL LINKS */}
      <section className="w-full py-20 sm:py-28 bg-[#111111] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block">
              ELEVATE YOUR VEHICLE
            </span>
            <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl uppercase tracking-tight">
              READY FOR A BETTER FINISH?
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-lg mx-auto font-normal leading-relaxed">
              Consult our studio specialists in Tiruppur for custom ceramic coating recommendations tailored to your car.
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

              <Link
                to="/services/ppf-paint-protection"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-white font-manrope font-bold text-xs uppercase tracking-widest px-6 py-4 transition-colors duration-300"
              >
                <span>COMPARE WITH PPF</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
