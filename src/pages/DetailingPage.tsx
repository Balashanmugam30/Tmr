import React, { useState, useEffect } from 'react';
import { companyData } from '@/data/company';

export const DetailingPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Professional Car Detailing & Paint Care in Tiruppur | TMR Car Care";
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: "faq-included",
      q: "What does a full car detailing service include at TMR Car Care?",
      a: (
        <>
          A full detail includes safe multi-stage exterior washing, paint decontamination, multi-stage machine polishing, interior vacuuming and conditioning, glass clarification, and trim restoration. Explore our{' '}
          <a href="/services/car-wash-cleaning" className="text-[#FF4B00] font-bold underline hover:text-[#0A0A0A] transition-colors">
            car wash &amp; cleaning services
          </a>{' '}
          for maintenance care.
        </>
      ),
      plainAnswer: "A full detail includes safe multi-stage exterior washing, paint decontamination, multi-stage machine polishing, interior vacuuming and conditioning, glass clarification, and trim restoration.",
    },
    {
      id: "faq-paint-correction",
      q: "How does machine paint correction work?",
      a: "Machine paint correction utilizes specialized rotary or dual-action polishers paired with targeted compounds and pad combinations. It levels clear-coat surface defects to eliminate swirl marks, light scratches, oxidation, and dullness.",
      plainAnswer: "Machine paint correction utilizes specialized rotary or dual-action polishers paired with targeted compounds and pad combinations. It levels clear-coat surface defects to eliminate swirl marks, light scratches, oxidation, and dullness.",
    },
    {
      id: "faq-scratches",
      q: "Will paint correction remove every scratch and swirl mark?",
      a: "Paint correction significantly reduces swirl marks, spider-webbing, and clear-coat defects. Deep scratches that penetrate beyond the clear-coat layer into the primer cannot be fully polished out without respraying, but their visual prominence is heavily softened.",
      plainAnswer: "Paint correction significantly reduces swirl marks, spider-webbing, and clear-coat defects. Deep scratches that penetrate beyond the clear-coat layer into the primer cannot be fully polished out without respraying, but their visual prominence is heavily softened.",
    },
    {
      id: "faq-process",
      q: "How do you determine the right polishing process for my vehicle?",
      a: "We inspect your vehicle's paint hardness, clear-coat thickness, and defect severity at our Tiruppur studio before selecting the pad and compound combination, ensuring optimal defect removal while preserving clear-coat integrity.",
      plainAnswer: "We inspect your vehicle's paint hardness, clear-coat thickness, and defect severity at our Tiruppur studio before selecting the pad and compound combination, ensuring optimal defect removal while preserving clear-coat integrity.",
    },
    {
      id: "faq-[#ceramic]",
      q: "Is ceramic coating necessary after paint correction?",
      a: (
        <>
          While not mandatory, applying a protective layer after correction locks in the glossy finish. Paint correction perfects the surface, while{' '}
          <a href="/services/ceramic-coating" className="text-[#FF4B00] font-bold underline hover:text-[#0A0A0A] transition-colors">
            ceramic coating
          </a>{' '}
          or{' '}
          <a href="/services/ppf-paint-protection" className="text-[#FF4B00] font-bold underline hover:text-[#0A0A0A] transition-colors">
            PPF
          </a>{' '}
          protects it against environmental contamination and UV degradation.
        </>
      ),
      plainAnswer: "While not mandatory, applying a protective layer after correction locks in the glossy finish. Paint correction perfects the surface, while ceramic coating or PPF protects it against environmental contamination.",
    },
    {
      id: "faq-frequency",
      q: "How often should a car be detailed?",
      a: "A major paint correction is typically a one-time service if maintained correctly with safe washing methods. We recommend routine maintenance care every 4 to 6 weeks to keep the vehicle in pristine condition.",
      plainAnswer: "A major paint correction is typically a one-time service if maintained correctly with safe washing methods. We recommend routine maintenance care every 4 to 6 weeks to keep the vehicle in pristine condition.",
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
      <section className="relative w-full py-16 sm:py-24 md:py-32 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5] overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FAF8F5] via-[#F1EEE7] to-[#E8E4DB]">
        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_50%,_rgba(0,0,0,0.04)_100%)]" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="col-span-1 md:col-span-12">
            <h1 className="font-['Instrument_Serif','Editorial_New',serif] font-normal text-5xl sm:text-7xl lg:text-[88px] text-[#0A0A0A] uppercase tracking-tight leading-[0.96] mb-6">
              REVEAL THE <br />
              <span className="font-['Bricolage_Grotesque',serif] font-extrabold italic text-[#FF4B00] lowercase pr-4 inline-block transform -rotate-1">
                finish.
              </span>
            </h1>
          </div>

          <div className="col-span-1 md:col-span-8 space-y-6">
            <h2 className="font-manrope font-extrabold text-lg sm:text-xl text-[#0A0A0A] uppercase tracking-wider">
              PROFESSIONAL CAR DETAILING &amp; PAINT CARE IN TIRUPPUR.
            </h2>
            <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed max-w-2xl">
              Professional car detailing and machine paint correction services focused on refining clear-coat clarity, eliminating surface defects, and restoring true color reflection. Every vehicle receives a tailored surface treatment based on paint hardness and condition.
            </p>
            
            {/* Minimal Editorial Text Link CTAs — NO Box / Rectangle */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF4B00] transition-colors group cursor-pointer"
              >
                <span>WHATSAPP TMR</span>
                <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </a>
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=Enquiry%20regarding%20Detailing%20%26%20Paint%20Care`}
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

        {/* Dedicated Hero Image 1 of 2 */}
        <div className="mt-12 sm:mt-16 w-full h-[360px] sm:h-[520px] md:h-[640px] relative overflow-hidden rounded-2xl border border-[#D8D8D5] shadow-2xl bg-[#0A0A0A] group">
          <img
            src="https://lh3.googleusercontent.com/aida/AP1WRLuerGKC_1ULZcPObVg8PpCBLfX_aWHLPXezoH_L7xpPXQQb-ZYzaEdS6ZUJtoZVWt8Sm7LZiytK5p3Ybb0ffrfZt6e59-PYIoY29P2352gEf0Kv2bKewzCjSC-qCRFm6Y-1bzR72-vK1zu2w23HXTJElhKGWPShqhMUl_rSoKuidJBEQCxdHnL6NHDBqOjefdqA44pdOPlh5Y_v4Pfla3tSGbU4jzT2u42hH_FVEa4kSX0_bcK1ySJt6g"
            alt="Professional automotive machine paint correction and surface detailing at TMR Car Care studio Tiruppur"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#FF4B00] block mb-1">
              PRECISION PAINT CORRECTION
            </span>
            <p className="font-manrope font-bold text-sm text-white">
              TMR Car Care Studio — Avinashi Road, Tiruppur
            </p>
          </div>
        </div>
      </section>

      {/* 02. WHAT WE INSPECT — SEE WHAT OTHERS MISS */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A]">
              SEE WHAT OTHERS MISS.
            </h2>
            <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
              Before machine correction begins, the vehicle's clear coat condition is assessed under controlled optical lights so the polishing process can be calibrated safely.
            </p>

            {/* 3 Open Editorial Principles — NO Cards, NO Tabs */}
            <div className="pt-6 space-y-6 border-t border-[#D8D8D5]">
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
                  01 — SURFACE
                </span>
                <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
                  CLEAR-COAT DEFECTS &amp; SWIRL MARKS
                </h3>
                <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
                  Evaluation of surface swirl marks, micro-marring, water-spot etching, and wash scratches under high-intensity inspection LED lights.
                </p>
              </div>

              <div className="space-y-1 pt-4 border-t border-[#D8D8D5]">
                <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
                  02 — PAINT
                </span>
                <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
                  CLEAR-COAT THICKNESS &amp; HARDNESS
                </h3>
                <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
                  Digital paint depth readings to determine clear-coat thickness, factory paint hardness, and safe polishing tolerances.
                </p>
              </div>

              <div className="space-y-1 pt-4 border-t border-[#D8D8D5]">
                <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
                  03 — TRIM
                </span>
                <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A]">
                  TRIM &amp; EDGE MASKING
                </h3>
                <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
                  Identification of sensitive rubber seals, badges, plastic trims, and panel edges for protective masking before correction.
                </p>
              </div>
            </div>
          </div>

          {/* Dedicated Supporting Image 2 of 2 — Close-Up Inspection */}
          <div className="lg:col-span-7 h-[380px] sm:h-[500px] bg-[#0A0A0A] overflow-hidden rounded-2xl border border-[#D8D8D5] shadow-xl relative group">
            <img
              src="https://lh3.googleusercontent.com/aida/AP1WRLu76ppBIHNU6AsUvNbsOnt37wVPWAr1xhQThMWyvRy413nI6wNyEz4auNmTw9sjzvmS_Utx-q2TLm7a9hYiJBKD4AtIXyRDuRt2noQIs0qw9eEmUXQ0V_wr2FD2fLApQ2YkXQ5OYkV8xDmQgu8OckOYdADqyfeO99m0JmKbEC9G84djJnQifg4rIPaHaO85d4SXqhI_rNvsSUOCWRwkNO9CuNzpB_IcusWjxYlTG2uq1LrNXFkNBdyp1OY"
              alt="Detailed paint surface defect audit under professional inspection lights at TMR Car Care"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#FF4B00] block mb-1">
                HIGH-INTENSITY OPTICAL AUDIT
              </span>
              <p className="font-manrope font-bold text-sm text-white">
                Defect Identification &amp; Paint Thickness Assessment
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 03. PAINT REFINEMENT — REFINEMENT IS THE CRAFT */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            REFINEMENT IS THE CRAFT.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            TMR selects the appropriate pad, compound, and machine-polishing process based on the vehicle's paint condition instead of using a generic correction routine.
          </p>
        </div>

        {/* 3 Horizontal Editorial Stages — NO Cards / Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] block">01 — PREPARE</span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A] tracking-wider">
              SURFACE DECONTAMINATION
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Clay bar treatment and iron fallout decontamination to remove embedded bonded particles before machine polishing begins.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] block">02 — CORRECT</span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A] tracking-wider">
              MACHINE POLISHING
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Controlled multi-stage machine polishing to reduce visible swirl marks, light scratches, oxidation, and clear-coat dullness.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#D8D8D5]">
            <span className="font-mono text-xs font-bold text-[#FF4B00] block">03 — REFINE</span>
            <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A] tracking-wider">
              GLOSS &amp; CLARITY
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Final jewel polishing to maximize clear-coat clarity, depth, and mirror reflections across all vehicle panels.
            </p>
          </div>

        </div>
      </section>

      {/* 04. AREAS WE CARE FOR — THE WHOLE VEHICLE, CONSIDERED */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            THE WHOLE VEHICLE, CONSIDERED.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            Every surface area receives specialized attention to create a cohesive, refined automotive finish.
          </p>
        </div>

        {/* Open Typographic List — NO Cards, NO Images */}
        <div className="border-t border-[#D8D8D5] divide-y divide-[#D8D8D5]">
          
          <div className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-white/40 px-3 transition-colors duration-300">
            <div className="md:col-span-4 flex items-center gap-4">
              <span className="font-mono text-xs font-bold text-[#FF4B00]">01</span>
              <h3 className="font-manrope font-extrabold text-xl sm:text-2xl uppercase tracking-wider text-[#0A0A0A] group-hover:text-[#FF4B00] transition-colors">
                EXTERIOR PAINT
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="font-manrope text-sm sm:text-base text-[#5F5E5E] leading-relaxed">
                Defect reduction, multi-stage machine polishing, clear-coat leveling, and gloss enhancement.
              </p>
            </div>
          </div>

          <div className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-white/40 px-3 transition-colors duration-300">
            <div className="md:col-span-4 flex items-center gap-4">
              <span className="font-mono text-xs font-bold text-[#FF4B00]">02</span>
              <h3 className="font-manrope font-extrabold text-xl sm:text-2xl uppercase tracking-wider text-[#0A0A0A] group-hover:text-[#FF4B00] transition-colors">
                INTERIOR
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="font-manrope text-sm sm:text-base text-[#5F5E5E] leading-relaxed">
                Detailed cabin cleaning, carpet vacuuming, leather/upholstery conditioning, and dust removal.
              </p>
            </div>
          </div>

          <div className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-white/40 px-3 transition-colors duration-300">
            <div className="md:col-span-4 flex items-center gap-4">
              <span className="font-mono text-xs font-bold text-[#FF4B00]">03</span>
              <h3 className="font-manrope font-extrabold text-xl sm:text-2xl uppercase tracking-wider text-[#0A0A0A] group-hover:text-[#FF4B00] transition-colors">
                GLASS
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="font-manrope text-sm sm:text-base text-[#5F5E5E] leading-relaxed">
                Water-spot removal, glass polishing, and hydrophobic clarity treatment for interior and exterior glass.
              </p>
            </div>
          </div>

          <div className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-white/40 px-3 transition-colors duration-300">
            <div className="md:col-span-4 flex items-center gap-4">
              <span className="font-mono text-xs font-bold text-[#FF4B00]">04</span>
              <h3 className="font-manrope font-extrabold text-xl sm:text-2xl uppercase tracking-wider text-[#0A0A0A] group-hover:text-[#FF4B00] transition-colors">
                TRIM
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="font-manrope text-sm sm:text-base text-[#5F5E5E] leading-relaxed">
                Restoration and UV protection of faded exterior plastic trims, door surrounds, and badges.
              </p>
            </div>
          </div>

          <div className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-white/40 px-3 transition-colors duration-300">
            <div className="md:col-span-4 flex items-center gap-4">
              <span className="font-mono text-xs font-bold text-[#FF4B00]">05</span>
              <h3 className="font-manrope font-extrabold text-xl sm:text-2xl uppercase tracking-wider text-[#0A0A0A] group-hover:text-[#FF4B00] transition-colors">
                WHEELS
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="font-manrope text-sm sm:text-base text-[#5F5E5E] leading-relaxed">
                Non-acidic iron fallout decontamination, inner barrel cleaning, wheel-face care, and satin tyre dressing.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 05. RELATED PROTECTION — PROTECT THE FINISH */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto border-b border-[#D8D8D5]">
        <div className="max-w-2xl space-y-4 mb-10">
          <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-widest block">
            POST-CORRECTION CARE
          </span>
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A]">
            PROTECT THE FINISH.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            Once the paint has been refined, protection can be chosen according to how the vehicle is driven, washed, and stored.
          </p>
        </div>

        {/* Text-Based Editorial Links — NO Image Cards, NO Boxes */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4 border-t border-[#D8D8D5]">
          <a
            href="/services/ceramic-coating"
            className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF4B00] transition-colors group cursor-pointer"
          >
            <span>CERAMIC COATING</span>
            <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </a>

          <a
            href="/services/ppf-paint-protection"
            className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF4B00] transition-colors group cursor-pointer"
          >
            <span>PPF &amp; PAINT PROTECTION</span>
            <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </a>
        </div>
      </section>

      {/* 06. DETAILING FAQ SECTION */}
      <section className="relative w-full min-h-[75vh] py-24 sm:py-32 border-b border-[#D8D8D5] overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FAF8F5] via-[#F1EEE7] to-[#E8E4DB]">
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
                DETAILING &amp; <br />
                PAINT CARE <br />
                <span className="font-['Bricolage_Grotesque',serif] font-extrabold italic text-[#FF4B00] lowercase pr-2 inline-block transform -rotate-1">
                  faq.
                </span>
              </h2>

              <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed max-w-md">
                Find clear answers about machine polishing, paint depth inspection, scratch reduction, and post-detail paint protection.
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
                      id={`detailing-faq-btn-${idx}`}
                      aria-expanded={isOpen}
                      aria-controls={`detailing-faq-ans-${idx}`}
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
                        id={`detailing-faq-ans-${idx}`}
                        role="region"
                        aria-labelledby={`detailing-faq-btn-${idx}`}
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

      {/* 07. FINAL CTA — READY TO REVEAL THE FINISH? */}
      <section className="relative w-full py-24 sm:py-32 bg-[#0B0B0B] text-white border-b border-[#222222] overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#181210] via-[#0B0B0B] to-[#050505]">
        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_45%,_rgba(0,0,0,0.65)_100%)]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
            READY TO REVEAL <br />
            <span className="font-['Bricolage_Grotesque',serif] font-extrabold italic text-[#FF4B00] lowercase tracking-normal inline-block">
              the finish?
            </span>
          </h2>

          <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] max-w-xl mx-auto leading-relaxed">
            Tell us about your vehicle and we'll recommend the right detailing and paint-care approach.
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
