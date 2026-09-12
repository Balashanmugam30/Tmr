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
          SECTION 1 — OUR STORY
          Job: Tell the business history once. Where did the experience come from?
          ============================================================ */}
      <section data-navbar-theme="light" className="bg-[#F5F4EF] text-[#111111] relative w-full overflow-hidden py-20 sm:py-32 border-b border-[#D8D8D5]" id="story">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10 space-y-8">
          
          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[0.92] tracking-tighter uppercase text-[#111111]">
            OUR <br />
            <span className="font-editorial italic font-normal text-[#FF4B00] lowercase pr-4">story.</span>
          </h2>

          <div className="space-y-6 font-manrope text-base sm:text-lg text-[#5f5e5e] leading-relaxed max-w-3xl border-l-2 border-[#FF4B00] pl-6">
            <p>
              The work behind TMR AI Car Care started long before the studio opened its doors. Beginning in 2009, the focus was straightforward — learn how vehicles respond to different surface treatments, understand clear-coat behaviour across Indian climate conditions, and develop the discipline to do the job properly every time.
            </p>
            <p>
              Over the years, that hands-on work grew into a steady operation handling approximately 500 vehicles in a typical month. The practical knowledge built across those vehicles — sedans, SUVs, luxury imports, daily drivers — became the foundation for what TMR AI Car Care is today.
            </p>
            <p>
              The current studio on Avinashi Road in Tiruppur is the result of that long-running experience brought together under one roof.
            </p>
          </div>

        </div>
      </section>


      {/* ============================================================
          SECTION 2 — FOUNDER
          Job: Introduce the person behind the business.
          ============================================================ */}
      <section className="bg-[#050505] text-white relative w-full overflow-hidden py-20 sm:py-32 border-b border-white/10" id="founder">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left — Founder Content */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-7xl leading-[0.92] tracking-tighter uppercase text-white">
                MEENAKSHI <br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase pr-4">sundharam.</span>
              </h2>

              <div className="space-y-6 font-manrope text-base sm:text-lg text-[#D8D8D5] leading-relaxed max-w-2xl border-l-2 border-[#FF4B00] pl-6">
                <p>
                  Meenakshi Sundharam leads TMR AI Car Care from the shop floor. He is involved in day-to-day operations — reviewing surface conditions before work begins, supervising paint correction stages, and inspecting the final result before any vehicle leaves the studio.
                </p>
                <p>
                  His approach is practical rather than theoretical. The standards at TMR come directly from his insistence on doing the preparation work thoroughly, choosing the right compounds for each clear-coat type, and not cutting corners on curing time for coatings and films.
                </p>
              </div>
            </div>

            {/* Right — Founder Photograph */}
            <div className="lg:col-span-5 relative border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#111111] group">
              <img
                src="/images/about/tmr-ai-car-care-founder-meenakshi-sundharam-about.jpg"
                alt="Meenakshi Sundharam, founder of TMR AI Car Care"
                className="w-full h-[380px] sm:h-[500px] object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF4B00] block">Founder</span>
                <span className="font-manrope font-bold text-sm sm:text-base tracking-wide text-white block">Meenakshi Sundharam</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ============================================================
          SECTION 3 — TMR TODAY
          Job: Explain what the company is now. Current studio, current focus.
          ============================================================ */}
      <section data-navbar-theme="light" className="bg-[#F5F4EF] text-[#111111] relative w-full overflow-hidden py-20 sm:py-32 border-b border-[#D8D8D5]" id="today">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10 space-y-8">
          
          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-7xl leading-[0.92] tracking-tighter uppercase text-[#111111]">
            TMR <br />
            <span className="font-editorial italic font-normal text-[#FF4B00] lowercase pr-4">today.</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            <div className="lg:col-span-7 space-y-6 font-manrope text-base sm:text-lg text-[#5f5e5e] leading-relaxed border-l-2 border-[#FF4B00] pl-6">
              <p>
                TMR AI Car Care operates from a dedicated facility on Avinashi Road in Tiruppur. The studio is equipped for the full range of automotive surface work — from basic exterior cleaning and interior conditioning through to multi-stage paint correction, ceramic coating application, and paint protection film installation.
              </p>
              <p>
                The focus stays narrow and deliberate: detailing, paint correction, ceramic coatings, and PPF. TMR does not try to be a general garage or a tyre shop. The team works on vehicle surfaces, and that is it.
              </p>
              <p className="text-sm pt-2">
                See the full range of{' '}
                <Link to="/services/detailing-paint-care" className="text-[#FF4B00] font-bold hover:underline">
                  detailing and paint correction
                </Link>,{' '}
                <Link to="/services/ceramic-coating" className="text-[#FF4B00] font-bold hover:underline">
                  ceramic coating
                </Link>, and{' '}
                <Link to="/services/ppf-paint-protection" className="text-[#FF4B00] font-bold hover:underline">
                  PPF protection
                </Link>{' '}
                services.
              </p>
            </div>

            <div className="lg:col-span-5 relative border border-[#D8D8D5] rounded-xl overflow-hidden shadow-2xl bg-[#111111]">
              <img
                src="/images/about/about-story.jpg"
                alt="Vehicle surface inspection during automotive detailing at TMR AI Car Care"
                className="w-full h-[340px] sm:h-[460px] object-cover"
              />
            </div>

          </div>

        </div>
      </section>


      {/* ============================================================
          SECTION 4 — HOW WE WORK
          Job: Show the practical working approach. Three steps, concise.
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
            
            <h2 className="font-['Plus_Jakarta_Sans','Geist','Inter_Tight',sans-serif] font-normal text-3xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[78px] leading-[1.04] tracking-[-0.015em] uppercase text-white select-none max-w-[540px] xl:max-w-[620px]">
              <span className="block font-normal text-white">HOW</span>
              <span className="block font-normal text-white">WE</span>
              <span className="block font-normal italic text-[#FF4B00] relative inline-block border-b-2 border-[#FF4B00]/70 pb-1">
                WORK.
              </span>
            </h2>

            <p className="font-['Geist','Manrope',sans-serif] text-xs sm:text-sm text-[#D8D8D5] leading-relaxed max-w-[480px] font-normal pt-1">
              Every vehicle follows the same structured sequence — no shortcuts, no assumptions about the surface condition.
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
                  Understand the vehicle — surface condition, clear-coat thickness, existing defects, and what the owner needs.
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
                  Apply the appropriate coating, film, or sealant — and allow proper curing before the vehicle is returned.
                </p>
              </div>

            </div>
          </div>

        </div>

      </section>


      {/* ============================================================
          SECTION 5 — AT A GLANCE
          Job: Verified factual signals. Concise.
          ============================================================ */}
      <section className="bg-[#0D0D0D] text-white relative w-full overflow-hidden py-16 sm:py-24 border-b border-white/10" id="glance">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10 space-y-10">
          
          <h2 className="font-manrope font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-white leading-[0.92]">
            AT A <br />
            <span className="font-editorial italic font-normal text-[#FF4B00] lowercase pr-4">glance.</span>
          </h2>

          <div className="pt-4 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="flex flex-col space-y-2 p-2">
              <span className="font-['Syncopate'] font-bold text-4xl sm:text-5xl text-white tracking-tight">
                2009
              </span>
              <span className="font-manrope font-extrabold text-xs uppercase tracking-widest text-[#FF4B00]">
                EXPERIENCE ROOTS
              </span>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                Automotive-care knowledge and hands-on surface work dating back to 2009.
              </p>
            </div>

            <div className="flex flex-col space-y-2 p-2 border-t md:border-t-0 md:border-l border-white/10 md:pl-8">
              <span className="font-['Syncopate'] font-bold text-4xl sm:text-5xl text-white tracking-tight">
                ~500 / MO
              </span>
              <span className="font-manrope font-extrabold text-xs uppercase tracking-widest text-[#FF4B00]">
                TYPICAL MONTHLY SCALE
              </span>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                Approximate vehicle volume handled across ongoing operations.
              </p>
            </div>

            <div className="flex flex-col space-y-2 p-2 border-t md:border-t-0 md:border-l border-white/10 md:pl-8">
              <span className="font-['Syncopate'] font-bold text-3xl sm:text-4xl text-white tracking-tight uppercase">
                TIRUPPUR
              </span>
              <span className="font-manrope font-extrabold text-xs uppercase tracking-widest text-[#FF4B00]">
                CURRENT STUDIO
              </span>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                Avinashi Road, Near Hope College Junction, Tamil Nadu.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ============================================================
          SECTION 6 — VISIT THE STUDIO
          Job: Location and practical visit information. No history.
          ============================================================ */}
      <section id="studio" className="bg-[#F5F4EF] text-[#111111] relative w-full overflow-hidden py-20 sm:py-32 border-b border-[#D8D8D5] scroll-mt-24">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl tracking-tighter uppercase text-[#111111] leading-[0.95]">
                VISIT THE <br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">studio.</span>
              </h2>

              <p className="font-manrope text-sm sm:text-base text-[#5f5e5e] leading-relaxed border-l-2 border-[#FF4B00] pl-4">
                The TMR AI Car Care studio is open for inspections, consultations, and vehicle drop-offs. Walk in or get in touch before your visit.
              </p>

              <div id="location" className="pt-2 flex flex-col space-y-2 text-xs font-mono text-[#707070] uppercase tracking-widest scroll-mt-24">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF4B00]" />
                  <span>AVINASHI ROAD • NEAR HOPE COLLEGE JUNCTION</span>
                </div>
                <span className="pl-4 text-[#111111] font-bold">TIRUPPUR, TAMIL NADU 641602</span>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#111111] text-white font-extrabold text-xs uppercase tracking-widest hover:bg-[#FF4B00] transition-colors rounded-md shadow-lg"
                >
                  <span>VIEW LOCATION &amp; CONTACT STUDIO</span>
                  <span className="text-base">→</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 relative h-[340px] sm:h-[460px] border border-[#D8D8D5] rounded-xl overflow-hidden bg-[#111111] shadow-2xl">
              <img
                src="/images/about/about-tiruppur-studio.jpg"
                alt="TMR AI Car Care studio facility on Avinashi Road Tiruppur"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

          </div>

        </div>
      </section>


      {/* ============================================================
          SECTION 7 — FINAL CTA
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
                <span>WHATSAPP TMR</span>
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
