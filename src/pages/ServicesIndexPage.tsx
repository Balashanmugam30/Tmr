import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/Container';
import { companyData } from '@/data/company';
import { servicesData, ServiceCategory } from '@/data/services';

export const ServicesIndexPage: React.FC = () => {
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(servicesData[0].id);

  // Mapping image fallbacks for service items
  const getServiceImage = (service: ServiceCategory): string => {
    switch (service.slug) {
      case 'car-wash-cleaning':
        return '/images/manifesto/manifesto-editorial.webp';
      case 'detailing-paint-care':
        return '/images/transformation/after.webp';
      case 'ceramic-coating':
        return '/images/protection/protection-hero.webp';
      case 'ppf-paint-protection':
        return '/images/ppf/ppf-surface.webp';
      case 'sun-control-films':
        return '/images/gallery/gallery-01.webp';
      case 'car-accessories':
        return '/images/gallery/gallery-06.webp';
      default:
        return '/images/protection/protection-hero.webp';
    }
  };

  const decisionItems = [
    {
      question: "WANT A CLEANER CAR?",
      title: "Car Wash & Cleaning",
      slug: "car-wash-cleaning",
      desc: "Precision pH-neutral snow foam wash, interior steam sanitization, and iron decontamination.",
      badge: "ROUTINE CARE",
    },
    {
      question: "WANT PAINT RESTORED?",
      title: "Detailing & Paint Care",
      slug: "detailing-paint-care",
      desc: "Multi-stage machine compounding, swirl mark removal, and specular gloss restoration.",
      badge: "RESTORATION",
    },
    {
      question: "WANT LONG-TERM GLOSS?",
      title: "Ceramic Coating",
      slug: "ceramic-coating",
      desc: "9H & 10H quartz nano-ceramic shielding with superhydrophobic water beading.",
      badge: "PROTECTION",
    },
    {
      question: "WANT PHYSICAL PROTECTION?",
      title: "PPF & Paint Protection",
      slug: "ppf-paint-protection",
      desc: "Self-healing TPU film barrier protecting clearcoat against stone chips and scratches.",
      badge: "ARMOR",
    },
    {
      question: "WANT HEAT & UV SHIELDING?",
      title: "Sun-Control Films",
      slug: "sun-control-films",
      desc: "Non-metallic ceramic window tints with 99% UV block and 95% IR heat rejection.",
      badge: "CABIN COMFORT",
    },
    {
      question: "WANT COCKPIT UPGRADES?",
      title: "Car Accessories",
      slug: "car-accessories",
      desc: "Custom 7D all-weather mats, app-controlled ambient lighting, and 4K dash cameras.",
      badge: "INTERIOR LUXURY",
    },
  ];

  const protocolStages = [
    { number: "01", name: "ARRIVE & INTAKE", desc: "Vehicle intake, ultrasonic paint depth gauge measurement, and initial surface evaluation." },
    { number: "02", name: "LED INSPECTION", desc: "Defect mapping under multi-angle high-CRI LED inspection lamps to identify all swirl marks and etchings." },
    { number: "03", name: "PREPARATION", desc: "Iron decontamination, clay bar treatment, delicate masking of sensitive trim, and surface drying." },
    { number: "04", name: "CORRECTION & SHIELD", desc: "Dual-action machine compounding followed by nano-ceramic coating or self-healing TPU PPF application." },
    { number: "05", name: "FINAL REVEAL", desc: "Quality assurance inspection, gloss measurement, and handover under studio light bays." },
  ];

  return (
    <div className="bg-[#050505] text-[#F5F4EF] min-h-screen selection:bg-[#FF4B00] selection:text-white font-sans overflow-x-hidden">
      
      {/* ============================================================ */}
      {/* SECTION 01 — SERVICES HERO */}
      {/* ============================================================ */}
      <section id="services-hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/10 overflow-hidden">
        {/* Ambient Dark Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF4B00]/10 rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="max-w-4xl space-y-6">
            {/* Minimal Eyebrow Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 font-intertight text-xs font-bold uppercase tracking-widest text-[#FF4B00]">
              <span className="w-2 h-2 rounded-full bg-[#FF4B00] animate-pulse" />
              <span>AUTOMOTIVE CARE SPECTRUM</span>
            </div>

            {/* Brutalist Editorial Headline */}
            <h1 className="font-intertight font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[84px] uppercase tracking-[-0.04em] text-white leading-[0.94]">
              THE RIGHT CARE <br />
              FOR THE RIGHT <span className="text-[#FF4B00]">SURFACE.</span>
            </h1>

            {/* Supporting Editorial Paragraph */}
            <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-white/80 italic max-w-3xl leading-relaxed pt-2">
              TMR Car Care provides professional automotive cleaning, multi-stage paint correction, 10H ceramic coating, self-healing TPU protection film, sun-control films, and bespoke interior upgrades in Tiruppur.
            </p>

            {/* Hero CTAs */}
            <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 font-intertight">
              <a
                href="#services-index"
                className="group inline-flex items-center justify-center gap-3 bg-[#FF4B00] text-white font-extrabold text-xs uppercase tracking-widest px-8 h-[54px] rounded-[14px] border border-white/20 hover:bg-white hover:text-black transition-all duration-300 shadow-[0_8px_24px_rgba(255,75,0,0.35)]"
                aria-label="Scroll down to master services index"
              >
                <span>EXPLORE SERVICES</span>
                <span className="group-hover:translate-y-1 transition-transform duration-300">↓</span>
              </a>

              <a
                href={`https://wa.me/${companyData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white/80 hover:text-white transition-colors py-2"
                aria-label="Book a car detailing consultation via WhatsApp"
              >
                <span>BOOK A CONSULTATION</span>
                <span className="text-[#FF4B00] group-hover:translate-x-1 transition-transform">↗</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* SECTION 02 — MASTER SERVICE INDEX (ASYMMETRIC EDITORIAL ROWS) */}
      {/* ============================================================ */}
      <section id="services-index" className="py-20 md:py-32 border-b border-white/10 relative">
        <Container>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 font-intertight gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF4B00] block mb-2">01 // CATALOGUE</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">MASTER SERVICE INDEX</h2>
            </div>
            <p className="font-editorial text-lg italic text-white/60 max-w-sm">
              Select a specialized discipline to explore packages, warranty details, and technical specifications.
            </p>
          </div>

          {/* Asymmetric Editorial Grid: Left List (7 Cols) + Right Interactive Preview (5 Cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Interactive Service List (7 Cols) */}
            <div className="lg:col-span-7 space-y-0 divide-y divide-white/10 font-intertight border-t border-b border-white/10">
              {servicesData.map((service) => {
                const isHovered = hoveredServiceId === service.id;
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setHoveredServiceId(service.id)}
                    className={`group relative py-8 px-4 transition-all duration-300 ${
                      isHovered ? 'bg-white/[0.03]' : 'hover:bg-white/[0.02]'
                    }`}
                  >
                    <Link
                      to={`/services/${service.slug}`}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 block"
                      aria-label={`Explore ${service.title} service details`}
                    >
                      <div className="flex items-start gap-6">
                        {/* Service Number */}
                        <span className={`text-xl font-extrabold transition-colors duration-300 ${
                          isHovered ? 'text-[#FF4B00]' : 'text-white/40'
                        }`}>
                          {service.indexNumber}
                        </span>

                        {/* Title & Description */}
                        <div>
                          <h3 className={`text-xl sm:text-3xl font-extrabold uppercase tracking-tight transition-colors duration-300 ${
                            isHovered ? 'text-[#FF4B00]' : 'text-white'
                          }`}>
                            {service.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-white/70 font-medium leading-relaxed max-w-md pt-2">
                            {service.shortDescription}
                          </p>

                          {/* Quick Feature Chips */}
                          <div className="flex flex-wrap gap-2 pt-4">
                            {service.features.slice(0, 3).map((feat, idx) => (
                              <span
                                key={idx}
                                className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/80"
                              >
                                {feat}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Arrow Action */}
                      <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white/60 group-hover:text-[#FF4B00] transition-colors self-end sm:self-center shrink-0">
                        <span className="hidden sm:inline">VIEW DETAILS</span>
                        <span className="text-[#FF4B00] text-base group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Right: Sticky Image & Feature Preview (5 Cols Desktop) */}
            <div className="hidden lg:block lg:col-span-5 sticky top-28">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-black group">
                {servicesData.map((service) => {
                  const isActive = (hoveredServiceId || servicesData[0].id) === service.id;
                  return (
                    <div
                      key={service.id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        isActive ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
                      }`}
                    >
                      <img
                        src={getServiceImage(service)}
                        alt={`TMR ${service.title} in Tiruppur`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                      {/* Active Card Bottom Overlay */}
                      <div className="absolute bottom-6 left-6 right-6 font-intertight">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF4B00] bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#FF4B00]/40 inline-block mb-2">
                          DISCIPLINE {service.indexNumber}
                        </span>
                        <h4 className="text-2xl font-extrabold uppercase text-white tracking-tight">
                          {service.title}
                        </h4>
                        <p className="text-xs text-white/80 font-medium line-clamp-2 pt-1">
                          {service.fullDescription}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* SECTION 03 — FEATURED SERVICE SPOTLIGHT */}
      {/* ============================================================ */}
      <section id="featured-protection" className="py-20 md:py-32 border-b border-white/10 relative overflow-hidden bg-gradient-to-b from-[#050505] via-[#090a0c] to-[#050505]">
        <Container>
          <div className="relative rounded-3xl border border-white/15 overflow-hidden bg-black/80 shadow-[0_30px_90px_rgba(0,0,0,0.9)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              
              {/* Left Column: Visual Asset (7 Cols) */}
              <div className="lg:col-span-7 relative h-[360px] sm:h-[480px] lg:h-[560px] overflow-hidden">
                <img
                  src="/images/protection/protection-hero.webp"
                  alt="Hydrophobic 10H Ceramic Coating and PPF Armor at TMR Car Care Tiruppur"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black lg:bg-gradient-to-r lg:from-transparent lg:to-black pointer-events-none" />
                <div className="absolute top-6 left-6 font-intertight">
                  <span className="bg-black/85 backdrop-blur-md border border-[#FF4B00]/40 text-[#FF4B00] text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
                    FLAGSHIP PROTECTION
                  </span>
                </div>
              </div>

              {/* Right Column: Editorial Copy (5 Cols) */}
              <div className="lg:col-span-5 p-8 sm:p-12 space-y-6 font-intertight">
                <div className="space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF4B00]">CERAMIC &amp; PPF SHIELD</span>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white leading-[0.94] tracking-tight">
                    THE INVISIBLE <br />
                    <span className="text-[#FF4B00]">ARMOR.</span>
                  </h3>
                </div>

                <p className="font-editorial text-lg sm:text-xl italic text-white/80 leading-relaxed">
                  "Physical stone-chip impact absorption paired with molecular 10H quartz hydrophobic gloss."
                </p>

                <ul className="space-y-3 pt-2 text-xs sm:text-sm font-semibold text-white/90">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B00]" />
                    <span>Self-healing TPU film absorbs rock chips &amp; road debris</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B00]" />
                    <span>Superhydrophobic water-beading angle &gt; 110°</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B00]" />
                    <span>Up to 10-Year written warranty with studio inspection</span>
                  </li>
                </ul>

                <div className="pt-4 flex items-center gap-6">
                  <Link
                    to="/services/ceramic-coating"
                    className="group inline-flex items-center justify-center gap-3 bg-[#FF4B00] text-white font-extrabold text-xs uppercase tracking-widest px-6 h-[48px] rounded-[12px] border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
                    aria-label="Explore Ceramic Coating and PPF packages"
                  >
                    <span>EXPLORE CERAMIC &amp; PPF</span>
                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* SECTION 04 — CHOOSE BY NEED (DECISION MATRIX) */}
      {/* ============================================================ */}
      <section id="choose-by-need" className="py-20 md:py-32 border-b border-white/10 relative">
        <Container>
          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-3 font-intertight">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF4B00]">02 // DECISION MATRIX</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">CHOOSE BY VEHICLE NEED</h2>
            <p className="font-editorial text-lg italic text-white/60">
              Select your primary goal to identify the exact service package engineered for your vehicle's condition.
            </p>
          </div>

          {/* 6 Decision Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-intertight">
            {decisionItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white/[0.02] border border-white/10 p-8 rounded-2xl transition-all duration-300 hover:border-[#FF4B00]/60 hover:bg-white/[0.04] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Badge & Question */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#FF4B00]/10 text-[#FF4B00] border border-[#FF4B00]/20">
                      {item.badge}
                    </span>
                    <span className="text-xs font-bold text-white/40">0{idx + 1}</span>
                  </div>

                  <h3 className="text-lg font-extrabold uppercase tracking-wider text-[#FF4B00]">
                    {item.question}
                  </h3>

                  <h4 className="text-2xl font-extrabold uppercase text-white group-hover:text-white transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs text-white/70 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <Link
                    to={`/services/${item.slug}`}
                    className="text-xs font-extrabold uppercase tracking-widest text-white/80 group-hover:text-[#FF4B00] transition-colors inline-flex items-center gap-2"
                    aria-label={`Select ${item.title} service`}
                  >
                    <span>SELECT DISCIPLINE</span>
                    <span className="text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">↗</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* SECTION 05 — STUDIO PROTOCOL & CONTROLLED CARE */}
      {/* ============================================================ */}
      <section id="studio-protocol" className="py-20 md:py-32 border-b border-white/10 relative bg-[#070809]">
        <Container>
          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-3 font-intertight">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF4B00]">03 // METHODOLOGY</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">CONTROLLED STUDIO PROTOCOL</h2>
            <p className="font-editorial text-lg italic text-white/60">
              TMR does not offer hasty commercial washes. Every vehicle undergoes a 5-stage controlled protocol.
            </p>
          </div>

          {/* 5 Stages Horizontal Process Strip */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 font-intertight">
            {protocolStages.map((stage, idx) => (
              <div
                key={idx}
                className="relative bg-black/60 border border-white/10 p-6 rounded-2xl space-y-4 hover:border-white/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-[#FF4B00]">{stage.number}</span>
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                </div>
                <h3 className="text-sm font-extrabold uppercase text-white tracking-wider">
                  {stage.name}
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-medium">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* SECTION 06 — LOCATION & LOCAL TRUST */}
      {/* ============================================================ */}
      <section id="tiruppur-location" className="py-20 md:py-28 border-b border-white/10 relative">
        <Container>
          <div className="bg-white/[0.02] border border-white/15 p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 font-intertight">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF4B00]">TIRUPPUR STUDIO CONSULTATION</span>
              <h3 className="text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-tight">
                VISIT THE TMR FLAGSHIP STUDIO
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-medium leading-relaxed">
                {companyData.address.fullText}
              </p>
              <p className="text-xs text-white/50 font-semibold pt-1">
                {companyData.hours.weekdays} | {companyData.hours.sunday}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(companyData.address.fullText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white text-white hover:text-black font-extrabold text-xs uppercase tracking-widest px-6 h-[48px] rounded-[12px] border border-white/20 transition-all duration-300"
                aria-label="Get Google Maps directions to TMR Studio in Tiruppur"
              >
                <span>GET DIRECTIONS</span>
                <span className="text-[#FF4B00] group-hover:text-black group-hover:translate-x-1 transition-transform">↗</span>
              </a>

              <a
                href={`https://wa.me/${companyData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-[#FF4B00] text-white font-extrabold text-xs uppercase tracking-widest px-6 h-[48px] rounded-[12px] border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
                aria-label="Contact TMR Tiruppur on WhatsApp"
              >
                <span>WHATSAPP TMR</span>
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* SECTION 07 — FINAL CONVERSION CTA */}
      {/* ============================================================ */}
      <section id="services-cta" className="py-24 md:py-36 relative overflow-hidden bg-black">
        {/* Subtle Ambient Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF4B00]/15 rounded-full blur-[160px] pointer-events-none" />

        <Container className="relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6 font-intertight">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF4B00]">READY TO CARE FOR YOUR CAR?</span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase text-white tracking-tight leading-[0.92]">
              THE FINISH MATTERS<span className="text-[#FF4B00]">.</span>
            </h2>
            <p className="font-editorial text-xl sm:text-2xl italic text-white/80 max-w-xl mx-auto">
              Schedule a vehicle inspection or discuss surface protection options at our Tiruppur studio.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[#FF4B00] text-white font-extrabold text-xs uppercase tracking-widest px-8 h-[54px] rounded-[14px] border border-white/20 hover:bg-white hover:text-black transition-all duration-300 shadow-[0_8px_24px_rgba(255,75,0,0.35)]"
                aria-label="Book a consultation with TMR Car Care"
              >
                <span>BOOK A CONSULTATION</span>
                <span className="group-hover:translate-x-1.5 transition-transform">↗</span>
              </a>

              <Link
                to="/gallery"
                className="group inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white/80 hover:text-white transition-colors py-2"
                aria-label="Explore TMR full gallery archive"
              >
                <span>EXPLORE GALLERY ARCHIVE</span>
                <span className="text-[#FF4B00] group-hover:translate-x-1 transition-transform">↗</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
};

export default ServicesIndexPage;
