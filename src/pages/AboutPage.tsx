import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '@/data/company';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    // Primary Page Title — Brand + Local Identity + Experience Intent
    document.title = "About TMR AI Car Care | Automotive Detailing in Tiruppur | Experience Since 2009";
    window.scrollTo(0, 0);

    // Dynamic Meta Description for SEO Intent
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Learn about TMR AI Car Care in Tiruppur. Automotive-care experience dating back to 2009, founded by Meenakshi Sundharam, specializing in detailing, ceramic coating, and PPF."
      );
    }

    // Dynamic Open Graph Metadata
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'About TMR AI Car Care | Automotive Detailing in Tiruppur | Experience Since 2009');
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute(
        'content',
        "Learn about TMR AI Car Care in Tiruppur. Automotive-care experience dating back to 2009, founded by Meenakshi Sundharam, specializing in detailing, ceramic coating, and PPF."
      );
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://tmrcarcare.com/about');
    }

    // Inject About Page JSON-LD Structured Data (Organization + BreadcrumbList + LocalBusiness)
    const scriptId = 'about-jsonld-schema';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["AutoRepair", "LocalBusiness"],
          "@id": "https://tmrcarcare.com/about/#organization",
          "name": "TMR AI Car Care",
          "url": "https://tmrcarcare.com/about",
          "logo": "https://tmrcarcare.com/images/tmr-ai-car-care-logo.png",
          "image": "https://tmrcarcare.com/images/about/about-hero-static.jpg",
          "description": "TMR AI Car Care is Tiruppur's premier automotive detailing studio founded by Meenakshi Sundharam, built on automotive-care experience dating back to 2009. Specialized in professional car care, paint correction, ceramic coating, and PPF protection.",
          "founder": {
            "@type": "Person",
            "name": "Meenakshi Sundharam"
          },
          "telephone": "+919876543210",
          "email": "enquiry@tmrcarcare.com",
          "priceRange": "₹₹₹",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Avinashi Road, Near Hope College Junction",
            "addressLocality": "Tiruppur",
            "addressRegion": "Tamil Nadu",
            "postalCode": "641602",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 11.1085,
            "longitude": 77.3411
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "20:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Sunday",
              "opens": "10:00",
              "closes": "17:00"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://tmrcarcare.com/about/#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://tmrcarcare.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "About TMR AI Car Care",
              "item": "https://tmrcarcare.com/about"
            }
          ]
        }
      ]
    };

    scriptEl.text = JSON.stringify(schemaData);

    return () => {
      if (scriptEl && scriptEl.parentNode) {
        scriptEl.parentNode.removeChild(scriptEl);
      }
    };
  }, []);

  return (
    <div className="w-full bg-[#050505] text-[#F5F4EF] font-manrope selection:bg-[#FF4B00] selection:text-white">
      
      {/* ============================================================
          HERO — COMPLETELY LOCKED — DO NOT MODIFY
          ============================================================ */}
      <section data-navbar-theme="dark" className="relative w-full min-h-[90vh] lg:min-h-screen flex flex-col justify-start pt-28 sm:pt-36 pb-16 px-6 md:px-16 overflow-hidden border-b border-white/10 bg-[#050505] text-white selection:bg-[#FF4B00]">
        
        {/* Layer 1: Dedicated Static Cinematic Automotive Hero Photo */}
        <img
          src="/images/about/about-hero-static.jpg"
          alt="TMR AI Car Care detailing studio in Tiruppur"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0"
        />

        {/* Layer 2: Subtle Left Readability Gradient & Fine Film Grain Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/92 via-[#050505]/45 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/85 via-transparent to-black/35 z-10 pointer-events-none" />
        <div
          className="absolute inset-0 z-10 opacity-[0.035] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Layer 3: Upper-Left Editorial Content Stack */}
        <div className="relative z-20 max-w-[1360px] w-full mx-auto flex flex-col justify-start pt-4 sm:pt-8">
          
          <div className="max-w-xl flex flex-col space-y-5 sm:space-y-6">
            
            {/* Display Headline */}
            <h1 className="font-['Syncopate'] font-bold text-4xl sm:text-6xl md:text-[68px] lg:text-[76px] text-white uppercase tracking-[0.14em] leading-[1.05] select-none max-w-xl">
              <span className="block font-medium tracking-[0.16em] text-white">BUILT</span>
              <span className="block font-bold tracking-[0.12em] text-white">AROUND</span>
              <span className="block font-['Bricolage_Grotesque'] font-extrabold italic text-[#FF4B00] lowercase pr-4 tracking-normal transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                THE craft.
              </span>
            </h1>

            {/* Small Supporting Copy Statement */}
            <p className="font-editorial text-base sm:text-lg text-[#E5E5E0] leading-relaxed max-w-md font-normal pt-1">
              Care isn't only about the finish. <br className="hidden sm:inline" />
              It's about the attention that gets you there.
            </p>
            
            {/* Single Editorial CTA Link */}
            <div className="pt-2">
              <a
                href="#story"
                className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-[0.2em] text-white hover:text-[#FF4B00] transition-colors group"
              >
                <span>DISCOVER THE TMR STORY</span>
                <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </a>
            </div>

          </div>

        </div>

      </section>
      {/* ============================================================
          END HERO — LOCKED
          ============================================================ */}


      {/* ============================================================
          SECTION 1 — COMBINED OUR STORY + FOUNDER
          Job: Integrated narrative connecting 2009 roots, hands-on
               scale, Meenakshi Sundharam's leadership, and today's studio.
          ============================================================ */}
      <section data-navbar-theme="light" className="bg-[#F5F4EF] text-[#111111] relative w-full overflow-hidden py-20 sm:py-28 lg:py-32 border-b border-[#D8D8D5]" id="story">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left 55% — Story & Founder Integrated Narrative */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF4B00] block">
                  OUR STORY
                </span>
                <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tighter uppercase text-[#111111] leading-[0.95]">
                  FROM YEARS OF REAL VEHICLE CARE <br />
                  <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">to TMR AI Car Care.</span>
                </h2>
              </div>

              <div className="space-y-5 font-manrope text-base sm:text-lg text-[#5f5e5e] leading-relaxed max-w-2xl border-l-2 border-[#FF4B00] pl-6">
                <p>
                  The experience behind TMR AI Car Care began in 2009 with a straightforward commitment to looking after vehicles properly. Long before the modern studio opened on Avinashi Road, the work was built directly on the shop floor—learning how factory clear coats respond to different machine compounds, managing humidity during curing, and developing the patience required for genuine paint refinement.
                </p>
                <p>
                  Over more than a decade of steady hands-on work, that operational background handled approximately 500 vehicles in a typical month across daily drivers, family sedans, and luxury imports. Every surface challenge encountered across that volume built a disciplined, repeatable standard of care.
                </p>
                <p>
                  Founded and actively directed by Meenakshi Sundharam, TMR AI Car Care carries that real-world knowledge into daily studio operations. Rather than managing from behind a desk, the founder personally inspects vehicle paint condition before work begins, supervises multi-stage correction, and verifies the final finish before customer handover.
                </p>
              </div>

            </div>

            {/* Right 45% — Prominent Real Founder Photograph */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
              <div className="w-full max-w-[460px] bg-white rounded-2xl overflow-hidden shadow-xl border border-[#E5E5E0] p-3 sm:p-4 transition-all duration-500 hover:shadow-2xl">
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#111111]">
                  <img
                    src="/images/about/tmr-ai-car-care-founder-meenakshi-sundharam.jpg"
                    alt="Meenakshi Sundharam, founder of TMR AI Car Care"
                    className="w-full h-full object-cover object-top filter brightness-[1.01]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />
                  
                  {/* Clean Bottom Overlay Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="font-mono text-[10px] tracking-widest text-[#FF4B00] uppercase font-bold block mb-1">
                      Founder &amp; Lead Specialist
                    </span>
                    <h3 className="font-manrope font-extrabold text-xl sm:text-2xl tracking-wide uppercase leading-tight">
                      Meenakshi Sundharam
                    </h3>
                    <p className="text-xs text-white/80 font-normal mt-0.5">
                      TMR AI Car Care • Tiruppur
                    </p>
                  </div>
                </div>

                {/* Sub-Card Identifier */}
                <div className="pt-3 px-2 pb-1 flex items-center justify-between text-xs font-mono text-[#777777] uppercase tracking-wider">
                  <span>Leadership &amp; Studio Operations</span>
                  <span className="text-[#FF4B00] font-bold">Avinashi Road</span>
                </div>
              </div>
            </div>

          </div>

          {/* Supporting Credibility Strip */}
          <div className="pt-10 sm:pt-12 border-t border-[#D8D8D5] grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            <div className="flex flex-col space-y-1.5">
              <span className="font-['Syncopate'] font-bold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                2009
              </span>
              <span className="font-manrope font-extrabold text-[11px] uppercase tracking-widest text-[#FF4B00]">
                EXPERIENCE ROOTS
              </span>
              <p className="text-xs text-[#666666] leading-relaxed font-normal">
                Automotive-care experience dating back to 2009.
              </p>
            </div>

            <div className="flex flex-col space-y-1.5 border-t md:border-t-0 md:border-l border-[#D8D8D5] pt-4 md:pt-0 md:pl-8">
              <span className="font-['Syncopate'] font-bold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                ~500 / MONTH
              </span>
              <span className="font-manrope font-extrabold text-[11px] uppercase tracking-widest text-[#FF4B00]">
                TYPICAL OPERATING SCALE
              </span>
              <p className="text-xs text-[#666666] leading-relaxed font-normal">
                Approximate vehicle volume handled during the long-running operation.
              </p>
            </div>

            <div className="flex flex-col space-y-1.5 border-t md:border-t-0 md:border-l border-[#D8D8D5] pt-4 md:pt-0 md:pl-8">
              <span className="font-['Syncopate'] font-bold text-xl sm:text-2xl text-[#111111] tracking-tight uppercase">
                TIRUPPUR
              </span>
              <span className="font-manrope font-extrabold text-[11px] uppercase tracking-widest text-[#FF4B00]">
                CURRENT STUDIO
              </span>
              <p className="text-xs text-[#666666] leading-relaxed font-normal">
                Avinashi Road, near Hope College Junction.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ============================================================
          SECTION 2 — HOW WE WORK
          Job: Practical working sequence. Inspect, Prepare, Finish.
          ============================================================ */}
      <section className="relative w-full overflow-hidden bg-[#050505] text-white border-b border-white/10 selection:bg-[#FF4B00]" id="method">
        
        {/* Full-Width Video Frame */}
        <div className="relative w-full h-[540px] sm:h-[620px] lg:h-[680px] overflow-hidden bg-black flex flex-col justify-between">
          
          {/* Layer 0: Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/about/about-belief-video-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0"
            aria-label="Machine polishing and paint refinement inside TMR AI Car Care studio"
          >
            <source src="/videos/about/about-belief-cinematic.mp4" type="video/mp4" />
            <img
              src="/images/about/about-belief-video-poster.jpg"
              alt="Machine polishing and paint refinement inside TMR AI Car Care studio"
              className="w-full h-full object-cover"
            />
          </video>

          {/* Layer 1: Left-Heavy Dark Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/65 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/50 z-10 pointer-events-none" />

          {/* Layer 2: Section Content */}
          <div className="relative z-20 max-w-[1360px] w-full mx-auto px-6 md:px-16 pt-10 sm:pt-14 md:pt-16 flex flex-col space-y-4 sm:space-y-5">
            
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF4B00] block">
                METHODOLOGY
              </span>
              <h2 className="font-['Plus_Jakarta_Sans','Geist','Inter_Tight',sans-serif] font-normal text-3xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[78px] leading-[1.04] tracking-[-0.015em] uppercase text-white select-none max-w-[540px] xl:max-w-[620px]">
                <span className="block font-normal text-white">HOW</span>
                <span className="block font-normal text-white">WE</span>
                <span className="block font-normal italic text-[#FF4B00] relative inline-block border-b-2 border-[#FF4B00]/70 pb-1">
                  WORK.
                </span>
              </h2>
            </div>

            <p className="font-['Geist','Manrope',sans-serif] text-xs sm:text-sm text-[#D8D8D5] leading-relaxed max-w-[480px] font-normal pt-1">
              Every vehicle follows the same structured sequence—surface evaluation, disciplined preparation, and lasting protection.
            </p>

            {/* Single Minimal CTA Link */}
            <div className="pt-1">
              <Link
                to="/services/detailing-paint-care"
                className="inline-flex items-center gap-3 font-['Geist','Manrope',sans-serif] font-bold text-xs uppercase tracking-[0.2em] text-[#FF4B00] hover:text-white transition-colors group"
              >
                <span>EXPLORE OUR SERVICES</span>
                <span className="text-base group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </Link>
            </div>

          </div>

          {/* Layer 3: Bottom 3-Step Rail */}
          <div className="relative z-20 max-w-[1360px] w-full mx-auto px-6 md:px-16 pb-8 sm:pb-12 pt-6">
            <div className="pt-6 border-t border-white/15 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
              
              {/* Step 01 — Inspect */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center gap-3">
                  <span className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-semibold text-xl sm:text-2xl text-[#FF4B00]">
                    01
                  </span>
                  <h3 className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-bold text-xs sm:text-sm uppercase tracking-wider text-white">
                    INSPECT
                  </h3>
                </div>
                <p className="font-['Geist','Manrope',sans-serif] text-xs text-[#A0A0A0] leading-relaxed">
                  Understand the vehicle—surface condition, clear-coat thickness, existing defects, and what the owner needs.
                </p>
              </div>

              {/* Step 02 — Prepare */}
              <div className="flex flex-col space-y-1 border-t md:border-t-0 md:border-l border-white/15 pt-4 md:pt-0 md:pl-8">
                <div className="flex items-center gap-3">
                  <span className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-semibold text-xl sm:text-2xl text-[#FF4B00]">
                    02
                  </span>
                  <h3 className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-bold text-xs sm:text-sm uppercase tracking-wider text-white">
                    PREPARE
                  </h3>
                </div>
                <p className="font-['Geist','Manrope',sans-serif] text-xs text-[#A0A0A0] leading-relaxed">
                  Decontaminate, correct, and refine the surface using the right compounds and methods for that specific paint.
                </p>
              </div>

              {/* Step 03 — Finish */}
              <div className="flex flex-col space-y-1 border-t md:border-t-0 md:border-l border-white/15 pt-4 md:pt-0 md:pl-8">
                <div className="flex items-center gap-3">
                  <span className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-semibold text-xl sm:text-2xl text-[#FF4B00]">
                    03
                  </span>
                  <h3 className="font-['Plus_Jakarta_Sans','Geist',sans-serif] font-bold text-xs sm:text-sm uppercase tracking-wider text-white">
                    FINISH
                  </h3>
                </div>
                <p className="font-['Geist','Manrope',sans-serif] text-xs text-[#A0A0A0] leading-relaxed">
                  Apply the appropriate coating, film, or sealant—and allow proper curing before the vehicle is returned.
                </p>
              </div>

            </div>
          </div>

        </div>

      </section>


      {/* ============================================================
          SECTION 3 — VISIT THE STUDIO
          Job: Location and practical visit information. No history.
          ============================================================ */}
      {/* ============================================================
          SECTION 3 — VISIT THE STUDIO
          Job: Location and practical visit information. No history.
          ============================================================ */}
      <section data-navbar-theme="light" id="studio" className="bg-[#F5F4EF] text-[#111111] relative w-full overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-[#D8D8D5] scroll-mt-24">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column — Editorial Heading, Details, Info Rail, Paired Actions */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF4B00] block">
                  FACILITY LOCATION
                </span>
                <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl lg:text-[52px] tracking-tight uppercase text-[#111111] leading-[1.02]">
                  SEE WHERE THE WORK <br className="hidden sm:inline" />
                  <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">happens.</span>
                </h2>
              </div>

              <p className="font-manrope text-sm sm:text-base text-[#5f5e5e] leading-relaxed border-l-2 border-[#FF4B00] pl-4">
                Our TMR AI Car Care studio is located on Avinashi Road, near Hope College Junction in Tiruppur. We welcome vehicle owners for paint assessments, protective film consultations, and scheduled detailing appointments.
              </p>

              {/* Compact Information Rail */}
              <div id="location" className="pt-2 border-t border-[#D8D8D5] grid grid-cols-1 sm:grid-cols-3 gap-4 text-left scroll-mt-24">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#FF4B00] block">
                    LOCATION
                  </span>
                  <p className="font-manrope font-bold text-xs sm:text-sm text-[#111111] leading-snug">
                    Avinashi Road
                  </p>
                  <p className="text-[11px] text-[#666666] leading-tight">
                    Near Hope College Jxn, Tiruppur — 641602
                  </p>
                </div>

                <div className="space-y-1 sm:border-l sm:border-[#D8D8D5] sm:pl-4">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#FF4B00] block">
                    OPERATING HOURS
                  </span>
                  <p className="font-manrope font-bold text-xs sm:text-sm text-[#111111] leading-snug">
                    9:00 AM – 8:00 PM
                  </p>
                  <p className="text-[11px] text-[#666666] leading-tight">
                    Mon – Sat (Sun by appt)
                  </p>
                </div>

                <div className="space-y-1 sm:border-l sm:border-[#D8D8D5] sm:pl-4">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#FF4B00] block">
                    STUDIO LINE
                  </span>
                  <a
                    href={`tel:${companyData.contact.phone}`}
                    className="font-manrope font-bold text-xs sm:text-sm text-[#111111] hover:text-[#FF4B00] transition-colors leading-snug block"
                  >
                    {companyData.contact.phoneFormatted}
                  </a>
                  <p className="text-[11px] text-[#666666] leading-tight">
                    Direct / WhatsApp Available
                  </p>
                </div>
              </div>

              {/* Action Buttons: Directions (Maps) + Contact Studio */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(companyData.address.fullText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-7 py-3.5 bg-[#111111] text-white font-manrope font-extrabold text-xs uppercase tracking-widest hover:bg-[#FF4B00] transition-colors rounded-md shadow-md inline-flex items-center justify-center gap-2 group text-center"
                >
                  <span>GET DIRECTIONS</span>
                  <span className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                </a>

                <Link
                  to="/contact"
                  className="px-6 sm:px-7 py-3.5 bg-transparent border border-[#111111]/30 text-[#111111] font-manrope font-extrabold text-xs uppercase tracking-widest hover:border-[#111111] hover:bg-[#111111] hover:text-white transition-colors rounded-md inline-flex items-center justify-center gap-2 group text-center"
                >
                  <span>CONTACT STUDIO</span>
                  <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Right Column — Dominant Real Studio Facility Photograph */}
            <div className="lg:col-span-7 group relative h-[380px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden border border-[#D8D8D5] bg-[#111111] shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                src="/images/about/tmr-ai-car-care-about-facility-tiruppur.jpg"
                alt="TMR AI Car Care detailing studio facility on Avinashi Road, Tiruppur"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>

          </div>

        </div>
      </section>


      {/* ============================================================
          SECTION 4 — FINAL CTA
          Job: Conversion. Short. No repeated history or biography.
          ============================================================ */}
      <section className="relative w-full min-h-[70vh] flex flex-col justify-end bg-[#050505] text-white overflow-hidden py-20 sm:py-28 font-manrope">
        {/* Layer 1: Full-Bleed Background Visual */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/about/about-final-cta.jpg"
            alt="Detailed vehicle with mirror finish inside TMR AI Car Care studio"
            className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-[10000ms] ease-out hover:scale-105"
          />
        </div>

        {/* Layer 2: Fixed Dark Cinematic Overlay Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/95 via-black/80 to-black/40 pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none" />

        {/* Layer 3: CTA Content */}
        <div className="relative z-20 max-w-[1360px] w-full mx-auto px-5 md:px-16 flex flex-col justify-end space-y-8 my-auto">
          <div className="max-w-2xl space-y-6">
            <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase text-white leading-[0.92] tracking-tighter">
              READY FOR THE <br />
              RIGHT <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">next step?</span>
            </h2>

            <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] leading-relaxed font-normal border-l pl-4 border-white/20 max-w-xl">
              Talk to the TMR AI Car Care team about{' '}
              <Link to="/services/detailing-paint-care" className="text-[#FF4B00] font-bold hover:underline">
                detailing
              </Link>,{' '}
              <Link to="/services/ceramic-coating" className="text-[#FF4B00] font-bold hover:underline">
                ceramic coating
              </Link>, or{' '}
              <Link to="/services/ppf-paint-protection" className="text-[#FF4B00] font-bold hover:underline">
                PPF protection
              </Link>{' '}
              for your vehicle.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=About%20Page%20Enquiry`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#FF4B00] text-white rounded-md font-extrabold text-xs uppercase tracking-widest hover:bg-white hover:text-[#050505] transition-colors shadow-2xl text-center inline-flex items-center justify-center gap-2"
              >
                <span>WHATSAPP THE TEAM</span>
                <span className="text-base">→</span>
              </a>

              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-md font-extrabold text-xs uppercase tracking-widest hover:bg-white hover:text-[#050505] transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                <span>BOOK AN INSPECTION</span>
                <span className="text-base">→</span>
              </Link>
            </div>

            {/* Location & Gallery Links Line */}
            <div className="pt-6 border-t border-white/15 text-xs text-[#858585] uppercase tracking-widest font-semibold flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF4B00] animate-pulse" />
                <span>Tiruppur, Tamil Nadu • Avinashi Road • TMR AI Car Care Studio</span>
              </div>
              <span className="text-white/30">•</span>
              <Link to="/gallery" className="text-[#FF4B00] hover:underline flex items-center gap-1">
                <span>VIEW STUDIO GALLERY</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
