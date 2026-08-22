import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const CeramicCoatingPage: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Scroll to top on page load & SEO Title / Meta setup
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Ceramic Coating in Tiruppur — Gloss & Paint Protection | TMR Car Care";
    
    // Meta description update
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Premium hydrophobic ceramic coating in Tiruppur for cars. Enhances paint gloss, simplifies maintenance, and protects clearcoat against everyday contaminants.'
      );
    }
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      q: "How long does ceramic coating last?",
      a: "Ceramic coating longevity depends on paint preparation, vehicle usage, and maintenance habits. Regular washing with pH-neutral shampoos helps maintain the hydrophobic surface over its lifespan."
    },
    {
      q: "Does ceramic coating prevent scratches?",
      a: "Ceramic coating adds surface chemical resistance and high gloss, but it is not a physical barrier against rock chips or deep key scratches. For physical impact protection, we recommend Paint Protection Film (PPF)."
    },
    {
      q: "Does the paint need correction before application?",
      a: "Yes. Ceramic coating seals the surface as-is. Paint inspection and correction remove swirls and micro-scratches prior to application so maximum clarity and gloss are locked in."
    },
    {
      q: "Can ceramic coating be applied to a new car?",
      a: "Absolutely. Applying ceramic coating to a new vehicle helps preserve the factory clearcoat from day one before environmental oxidation or road grime degrades the finish."
    },
    {
      q: "How should a ceramic-coated car be maintained?",
      a: "We recommend washing with clean microfiber mitts using pH-neutral automotive shampoo. Avoid harsh chemical degreasers or abrasive automatic brush washes."
    },
    {
      q: "Can ceramic coating be used together with PPF?",
      a: "Yes. PPF is applied first for physical impact protection, and ceramic coating can be applied on top to enhance slickness, hydrophobic water beading, and ease of cleaning."
    }
  ];

  // JSON-LD Structured Data Schema
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Ceramic Coating",
        "serviceType": "Automotive Paint Protection",
        "provider": {
          "@type": "AutoRepair",
          "name": "TMR Car Care",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tiruppur",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "IN"
          }
        },
        "areaServed": "Tiruppur",
        "description": "Premium hydrophobic ceramic coating enhancing paint gloss and clearcoat protection in Tiruppur."
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }
    ]
  };

  return (
    <div className="w-full bg-[#050505] text-[#F5F4EF] selection:bg-[#FF4B00] selection:text-white font-manrope overflow-x-hidden">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* 01. HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center pt-24 pb-16 border-b border-white/10 bg-[#070809]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <Link to="/services" className="text-xs font-bold uppercase tracking-widest text-[#FF4B00] hover:underline">
                SERVICES
              </Link>
              <span className="text-xs text-white/40">/</span>
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                PAINT PROTECTION
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-none">
              Ceramic Coating <br />
              <span className="text-white/60 font-editorial italic font-normal text-3xl sm:text-5xl block pt-2">
                for Cars in Tiruppur
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 max-w-xl font-normal leading-relaxed">
              Hydrophobic clearcoat protection engineered to enhance visual gloss, resist environmental contamination, and simplify routine maintenance.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="https://wa.me/919944335520"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF4B00] hover:bg-[#e04200] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 transition-colors shadow-lg"
                aria-label="Book Ceramic Coating consultation on WhatsApp"
              >
                <span>BOOK A CONSULTATION</span>
                <span>↗</span>
              </a>

              <a
                href="https://wa.me/919944335520"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-white font-bold text-xs uppercase tracking-widest px-8 py-4 transition-colors"
                aria-label="Contact TMR on WhatsApp"
              >
                <span>WHATSAPP TMR</span>
              </a>
            </div>
          </div>

          {/* Right Media Column */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/11] w-full overflow-hidden border border-white/10 shadow-2xl bg-[#111]">
              <video
                src="/videos/services/ceramic-coating.mp4"
                poster="/images/protection/protection-hero.webp"
                muted
                loop
                playsInline
                autoPlay
                className="w-full h-full object-cover block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs uppercase tracking-widest text-white/70">
                Hydrophobic Water-Beading // Gloss Coating
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 02. WHAT THE SERVICE DOES */}
      <section className="w-full py-20 md:py-28 border-b border-white/10 bg-[#050505]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF4B00] block">
              SURFACE HYDROPHOBICS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              A FINISH THAT STAYS CLEANER.
            </h2>
            <p className="text-base text-white/80 font-normal leading-relaxed">
              Ceramic coating forms a microscopic hydrophobic barrier over your car's exterior clearcoat. By smoothing micro-imperfections on the surface, water beads up and rolls off seamlessly, taking dust, dirt, and road grime along with it.
            </p>
            <p className="text-base text-white/70 font-normal leading-relaxed">
              In Tiruppur's environment, exposure to sunlight, industrial fallout, and hard water spots can dull factory paint. Our ceramic treatment seals the paint after thorough surface correction, keeping your vehicle glossy with significantly less wash effort.
            </p>

            <div className="pt-2 flex items-center gap-6">
              <Link to="/services/ppf-paint-protection" className="text-xs font-bold uppercase tracking-widest text-[#FF4B00] hover:underline inline-flex items-center gap-1">
                <span>COMPARE WITH PPF</span>
                <span>↗</span>
              </Link>
              <Link to="/services/detailing-paint-care" className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors">
                PAINT CORRECTION DETAILS
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] w-full overflow-hidden border border-white/10">
              <img
                src="/images/protection/prot-repel.webp"
                alt="Ceramic coating water repellency and surface hydrophobic protection at TMR Car Care Tiruppur"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 03. KEY BENEFITS */}
      <section className="w-full py-20 md:py-28 border-b border-white/10 bg-[#070809]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              ENGINEERED PROTECTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              CORE CERAMIC ADVANTAGES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t border-white/15 pt-6 space-y-3">
              <span className="text-2xl font-editorial italic text-[#FF4B00]">01</span>
              <h3 className="text-lg font-bold uppercase tracking-tight text-white">
                HYDROPHOBIC SURFACE
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Helps water bead and roll away easily, carrying loose surface contaminants off the vehicle.
              </p>
            </div>

            <div className="border-t border-white/15 pt-6 space-y-3">
              <span className="text-2xl font-editorial italic text-[#FF4B00]">02</span>
              <h3 className="text-lg font-bold uppercase tracking-tight text-white">
                GLOSS ENHANCEMENT
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Enhances visual depth, reflections, and clarity of properly prepared automotive paintwork.
              </p>
            </div>

            <div className="border-t border-white/15 pt-6 space-y-3">
              <span className="text-2xl font-editorial italic text-[#FF4B00]">03</span>
              <h3 className="text-lg font-bold uppercase tracking-tight text-white">
                ENVIRONMENTAL RESISTANCE
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Adds a sacrificial hydrophobic layer against everyday bird droppings, tree sap, and light oxidation.
              </p>
            </div>

            <div className="border-t border-white/15 pt-6 space-y-3">
              <span className="text-2xl font-editorial italic text-[#FF4B00]">04</span>
              <h3 className="text-lg font-bold uppercase tracking-tight text-white">
                EASIER MAINTENANCE
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Prevents grime from bonding strongly to the clearcoat, making routine hand washes quicker and safer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04. TMR PROCESS */}
      <section className="w-full py-20 md:py-28 border-b border-white/10 bg-[#050505]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              STUDIO PROTOCOL
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              THE APPLICATION PROCESS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#0b0d0e] p-8 border border-white/10 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF4B00]">STAGE 01</span>
              <h3 className="text-xl font-bold uppercase text-white">INSPECT</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Thorough surface evaluation under specialized inspection lights to measure paint depth and identify defects.
              </p>
            </div>

            <div className="bg-[#0b0d0e] p-8 border border-white/10 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF4B00]">STAGE 02</span>
              <h3 className="text-xl font-bold uppercase text-white">PREPARE</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Decontamination wash, iron removal, clay bar treatment, and machine paint correction to eliminate swirl marks.
              </p>
            </div>

            <div className="bg-[#0b0d0e] p-8 border border-white/10 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF4B00]">STAGE 03</span>
              <h3 className="text-xl font-bold uppercase text-white">APPLY</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Precision hand application of ceramic coating across body panels in controlled, cross-hatch micro-passes.
              </p>
            </div>

            <div className="bg-[#0b0d0e] p-8 border border-white/10 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF4B00]">STAGE 04</span>
              <h3 className="text-xl font-bold uppercase text-white">CURE</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Controlled infrared curing phase allowing the coating to bond molecularly before final surface audit and handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05. VISUAL PROOF (BEFORE / AFTER COMPARISON) */}
      <section className="w-full py-20 md:py-28 border-b border-white/10 bg-[#070809]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              SURFACE RESULTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              BEFORE & AFTER TRANSFORMATION
            </h2>
            <p className="text-sm text-white/70 max-w-lg pt-2">
              Drag the slider to compare uncorrected dull paint vs ceramic-coated corrected clarity.
            </p>
          </div>

          {/* Interactive Comparison Slider */}
          <div className="relative aspect-[16/9] max-w-4xl mx-auto overflow-hidden border border-white/15 shadow-2xl select-none">
            {/* After Image (Full width background) */}
            <img
              src="/images/transformation/after.webp"
              alt="Ceramic coated paint gloss after correction at TMR Car Care Tiruppur"
              className="absolute inset-0 w-full h-full object-cover block"
            />
            <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#FF4B00]">
              AFTER CERAMIC
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-[#FF4B00]"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/images/transformation/before.webp"
                alt="Uncorrected dull paint before ceramic coating at TMR Car Care"
                className="w-full h-full object-cover max-w-none block"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/70">
                BEFORE CORRECTION
              </div>
            </div>

            {/* Slider Drag Handle */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              aria-label="Drag before and after ceramic coating slider"
            />
          </div>
        </div>
      </section>

      {/* 06. FAQ SECTION */}
      <section className="w-full py-20 md:py-28 border-b border-white/10 bg-[#050505]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              CERAMIC COATING FAQS
            </h2>
          </div>

          <div className="max-w-3xl space-y-4 font-manrope">
            {faqItems.map((item, idx) => (
              <div key={idx} className="border-b border-white/10 pb-4">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left flex justify-between items-center py-3 text-base sm:text-lg font-bold text-white hover:text-[#FF4B00] transition-colors"
                  aria-expanded={openFaq === idx}
                >
                  <span>{item.q}</span>
                  <span className="text-xl text-[#FF4B00] ml-4">{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <p className="text-sm text-white/70 leading-relaxed pt-2 pb-2">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. SMALL FINAL CTA */}
      <section className="w-full py-20 bg-[#070809] border-b border-white/10 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-tight">
            READY FOR A BETTER FINISH?
          </h2>
          <p className="text-sm text-white/70 font-normal max-w-md mx-auto">
            Book a studio inspection with our detailing specialists in Tiruppur.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a
              href="https://wa.me/919944335520"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF4B00] hover:bg-[#e04200] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 transition-colors"
            >
              <span>BOOK A CONSULTATION</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
