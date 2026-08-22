import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const PpfPage: React.FC = () => {
  const [activeZone, setActiveZone] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Scroll to top on page load & SEO Title / Meta setup
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Paint Protection Film (PPF) in Tiruppur — Impact Protection | TMR Car Care";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'High-clarity Paint Protection Film (PPF) installation in Tiruppur. Protects car body panels against stone chips, scratches, and road debris.'
      );
    }
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const impactZones = [
    {
      title: "FRONT BUMPER & GRILLE",
      desc: "The primary point of contact for high-velocity gravel, stone chips, and insect acid during highway driving."
    },
    {
      title: "FULL HOOD & BONNET",
      desc: "Expansive horizontal surface vulnerable to road debris, bird droppings, and direct UV oxidation."
    },
    {
      title: "FRONT FENDERS & WINGS",
      desc: "Side impact areas susceptible to tire fling, gravel spray, and tight parking brush marks."
    },
    {
      title: "SIDE MIRROR CAPS",
      desc: "Leading edge projections exposed to head-on debris, tight garage clearances, and side scrapes."
    },
    {
      title: "ROCKER PANELS & DOOR SILLS",
      desc: "Lower body panels continuously blasted by road grit, kick-up gravel, and shoe scuffs during ingress."
    }
  ];

  const faqItems = [
    {
      q: "What is Paint Protection Film (PPF)?",
      a: "Paint Protection Film (PPF) is a high-clarity, thermoplastic polyurethane (TPU) film applied directly to vehicle paintwork to absorb physical impacts from gravel, stone chips, and scratches."
    },
    {
      q: "What does PPF protect against?",
      a: "PPF provides physical shield defense against rock chips, flying road debris, minor scratches, bug acid, tree sap, and light abrasions encountered during everyday driving."
    },
    {
      q: "Can PPF be installed on a new car?",
      a: "Yes. Installing PPF on a brand new car preserves the untouched factory paint from day one, maximizing long-term vehicle resale value."
    },
    {
      q: "Which parts of a car are normally protected?",
      a: "Packages range from partial high-impact coverage (front bumper, hood, mirrors, fenders) to full-vehicle body wraps depending on driving conditions and protection goals."
    },
    {
      q: "How is PPF maintained?",
      a: "PPF can be washed normally using pH-neutral automotive shampoo. Avoid high-pressure washer nozzles closer than 12 inches to film edges."
    },
    {
      q: "Can ceramic coating be applied over PPF?",
      a: "Yes. Applying ceramic coating on top of PPF enhances hydrophobic water-beading, slickness, and ease of cleaning while maintaining physical impact resistance."
    }
  ];

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Paint Protection Film (PPF)",
        "serviceType": "Automotive Paint Protection Film",
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
        "description": "High-clarity Paint Protection Film (PPF) installation protecting against stone chips and scratches in Tiruppur."
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
                PHYSICAL PROTECTION
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-none">
              Paint Protection Film <br />
              <span className="text-white/60 font-editorial italic font-normal text-3xl sm:text-5xl block pt-2">
                (PPF) in Tiruppur
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 max-w-xl font-normal leading-relaxed">
              High-clarity thermoplastic film applied to high-impact body panels, absorbing road debris, stone chips, and everyday scratches to preserve factory paint.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="https://wa.me/919944335520"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF4B00] hover:bg-[#e04200] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 transition-colors shadow-lg"
                aria-label="Book PPF consultation on WhatsApp"
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
                src="/videos/services/ppf.mp4"
                poster="/images/ppf/ppf-hero.webp"
                muted
                loop
                playsInline
                autoPlay
                className="w-full h-full object-cover block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs uppercase tracking-widest text-white/70">
                High-Clarity TPU Film // Impact Shield
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
              PHYSICAL SHIELD DEFENSE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              PROTECTION WHERE IT MATTERS.
            </h2>
            <p className="text-base text-white/80 font-normal leading-relaxed">
              Paint Protection Film (PPF) is an optical-grade thermoplastic polyurethane layer designed specifically to absorb kinetic impact from flying gravel, stone chips, and harsh environmental scuffs before they touch your clearcoat.
            </p>
            <p className="text-base text-white/70 font-normal leading-relaxed">
              Engineered for seamless optical clarity, our precision-cut film conforms tight to body contours without altering original paint color or metallic flake depth.
            </p>

            <div className="pt-2 flex items-center gap-6">
              <Link to="/services/ceramic-coating" className="text-xs font-bold uppercase tracking-widest text-[#FF4B00] hover:underline inline-flex items-center gap-1">
                <span>EXPLORE CERAMIC COATING</span>
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
                src="/images/ppf/ppf-surface.webp"
                alt="Paint Protection Film PPF installation on car panel at TMR Car Care Tiruppur"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 03. HIGH IMPACT ZONES */}
      <section className="w-full py-20 md:py-28 border-b border-white/10 bg-[#070809]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              TARGETED COVERAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              HIGH IMPACT PROTECTION ZONES
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Zone List */}
            <div className="lg:col-span-6 flex flex-col space-y-4">
              {impactZones.map((zone, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveZone(idx)}
                  onMouseEnter={() => setActiveZone(idx)}
                  className={`p-6 border cursor-pointer transition-all duration-300 ${
                    activeZone === idx
                      ? 'border-[#FF4B00] bg-white/5'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg uppercase text-white">
                      {zone.title}
                    </h3>
                    <span className="text-xs font-bold uppercase text-[#FF4B00]">
                      ZONE 0{idx + 1}
                    </span>
                  </div>
                  {activeZone === idx && (
                    <p className="text-sm text-white/70 pt-3 leading-relaxed">
                      {zone.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Visual Container */}
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] w-full overflow-hidden border border-white/10 bg-[#111] p-8 flex flex-col justify-center items-center text-center space-y-4">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF4B00]">
                  COVERAGE MAP // ZONE 0{activeZone + 1}
                </span>
                <h4 className="text-2xl sm:text-3xl font-extrabold uppercase text-white">
                  {impactZones[activeZone].title}
                </h4>
                <p className="text-sm text-white/70 max-w-md leading-relaxed">
                  {impactZones[activeZone].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. INSTALLATION PROCESS */}
      <section className="w-full py-20 md:py-28 border-b border-white/10 bg-[#050505]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              PRECISION FITMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              PPF INSTALLATION STEPS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#0b0d0e] p-8 border border-white/10 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF4B00]">STAGE 01</span>
              <h3 className="text-xl font-bold uppercase text-white">PREPARE</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Decontamination wash and light paint correction to establish a completely smooth substrate prior to film installation.
              </p>
            </div>

            <div className="bg-[#0b0d0e] p-8 border border-white/10 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF4B00]">STAGE 02</span>
              <h3 className="text-xl font-bold uppercase text-white">FIT</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Precision pattern alignment mapped to body panel dimensions for accurate edge wrapped fitment.
              </p>
            </div>

            <div className="bg-[#0b0d0e] p-8 border border-white/10 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF4B00]">STAGE 03</span>
              <h3 className="text-xl font-bold uppercase text-white">INSTALL</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Controlled slip-solution squeegee pass removing air bubbles and locking down optical clarity.
              </p>
            </div>

            <div className="bg-[#0b0d0e] p-8 border border-white/10 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF4B00]">STAGE 04</span>
              <h3 className="text-xl font-bold uppercase text-white">FINISH</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Edge trimming, heat setting, and surface audit under inspection lights to verify complete edge adhesion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05. PPF VS CERAMIC COATING */}
      <section className="w-full py-20 md:py-28 border-b border-white/10 bg-[#070809]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF4B00] block">
              DECISION GUIDE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              PPF OR CERAMIC COATING?
            </h2>
            <p className="text-base text-white/80 font-normal leading-relaxed">
              <strong>PPF</strong> provides a physical polyurethane barrier against rock chips and scratches. <strong>Ceramic Coating</strong> provides chemical hydrophobic water-beading, gloss enhancement, and easy cleaning.
            </p>
            <p className="text-sm text-white/60">
              For ultimate protection, many owners apply PPF to high-impact front panels and top the entire vehicle with Ceramic Coating.
            </p>
            <div className="pt-2">
              <Link
                to="/services/ceramic-coating"
                className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-[#FF4B00] hover:underline"
              >
                <span>EXPLORE CERAMIC COATING</span>
                <span>↗</span>
              </Link>
            </div>
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
              PPF FAQS
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
            PROTECT THE FINISH.
          </h2>
          <p className="text-sm text-white/70 font-normal max-w-md mx-auto">
            Book a PPF consultation and panel assessment with our specialists in Tiruppur.
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
