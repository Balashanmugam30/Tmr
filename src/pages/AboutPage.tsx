import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, MapPin, CheckCircle2 } from 'lucide-react';
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
          "image": "https://tmrcarcare.com/images/about/tmr-ai-car-care-about-workshop-craft-tiruppur.jpg",
          "description": "TMR AI Car Care is Tiruppur's premier automotive detailing studio, founded by Meenakshi Sundharam with automotive-care experience dating back to 2009. Specialized in professional vehicle care, paint correction, ceramic coating, and PPF protection.",
          "founder": {
            "@type": "Person",
            "name": "Meenakshi Sundharam"
          },
          "telephone": companyData.contact.phone,
          "email": companyData.contact.email,
          "priceRange": "₹₹₹",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": companyData.address.street,
            "addressLocality": companyData.address.city,
            "addressRegion": companyData.address.state,
            "postalCode": companyData.address.pincode,
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
      
      {/* 01 / EDITORIAL AUTOMOTIVE HERO — HTML5 VIDEO BACKGROUND (PRESERVED) */}
      <section data-navbar-theme="dark" className="relative w-full min-h-[90vh] lg:min-h-screen flex flex-col justify-start pt-28 sm:pt-36 pb-16 px-6 md:px-16 overflow-hidden border-b border-white/10 bg-[#050505] text-white selection:bg-[#FF4B00]">
        
        {/* Layer 1: Native HTML5 Headlights Background Video (Untouched & Preserved) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/about/about-hero-orange.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0"
          aria-label="TMR AI Car Care automotive headlights and studio atmosphere"
        >
          <source src="/videos/about/about-hero-headlights.mp4" type="video/mp4" />
          <img
            src="/images/about/about-hero-orange.jpg"
            alt="TMR AI Car Care automotive headlights in burnt orange atmosphere"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Layer 2: Subtle Left Readability Gradient & Fine Film Grain Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/60 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-black/40 z-10 pointer-events-none" />
        <div
          className="absolute inset-0 z-10 opacity-[0.035] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Layer 3: Upper-Left Editorial Content Stack */}
        <div className="relative z-20 max-w-[1360px] w-full mx-auto flex flex-col justify-start pt-4 sm:pt-8">
          
          <div className="max-w-2xl flex flex-col space-y-5 sm:space-y-6">
            
            {/* Small Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-white/90 uppercase shadow-lg w-fit">
              <span className="w-2 h-2 rounded-full bg-[#FF4B00] animate-pulse shadow-[0_0_8px_#FF4B00]" />
              <span>AUTOMOTIVE-CARE EXPERIENCE SINCE 2009</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-['Syncopate'] font-bold text-3xl sm:text-5xl md:text-[56px] lg:text-[64px] text-white uppercase tracking-[0.10em] leading-[1.08] select-none max-w-2xl">
              <span className="block font-medium tracking-[0.12em] text-white">BUILT FROM</span>
              <span className="block font-bold tracking-[0.08em] text-white">YEARS OF REAL</span>
              <span className="block font-['Bricolage_Grotesque'] font-extrabold italic text-[#FF4B00] lowercase pr-4 tracking-normal transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                experience.
              </span>
            </h1>

            {/* Supporting Copy Statement */}
            <p className="font-manrope text-base sm:text-lg text-[#E5E5E0] leading-relaxed max-w-xl font-normal pt-1">
              Before TMR AI Car Care took its present studio form in Tiruppur, our work grew through years of looking after vehicles properly. A studio built on genuine clear-coat respect, hands-on craft, and long-term protection.
            </p>
            
            {/* Editorial CTA Link */}
            <div className="pt-2">
              <a
                href="#story"
                className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-[0.2em] text-white hover:text-[#FF4B00] transition-colors group"
              >
                <span>DISCOVER OUR STORY</span>
                <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </a>
            </div>

          </div>

        </div>

      </section>

      {/* 02 / OUR STORY — FACTUAL NARRATIVE & CRAFTSMANSHIP */}
      <section data-navbar-theme="light" className="bg-[#F5F4EF] text-[#111111] relative w-full overflow-hidden py-20 sm:py-32 border-b border-[#D8D8D5]" id="story">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Story Content Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-xs text-[#FF4B00] font-bold uppercase tracking-widest">
                  01 // THE JOURNEY
                </span>
                <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-7xl leading-[0.94] tracking-tighter uppercase text-[#111111]">
                  OUR STORY. <br />
                  <span className="font-editorial italic font-normal text-[#FF4B00] lowercase pr-4">built through experience.</span>
                </h2>
              </div>

              <div className="space-y-6 font-manrope text-base sm:text-lg text-[#4a4949] leading-relaxed max-w-2xl border-l-2 border-[#FF4B00] pl-6">
                <p>
                  Long before TMR AI Car Care took its present form, the work behind it began with a simple commitment to looking after vehicles properly.
                </p>
                <p>
                  Since 2009, founder Meenakshi Sundharam and the team have built hands-on automotive-care experience through real-world vehicle care, serving around 500 vehicles in a typical month over the course of that operating journey.
                </p>
                <p>
                  That high-volume practical experience became the foundation for TMR AI Car Care — established later as a dedicated studio on Avinashi Road, Tiruppur, focused on precision paint correction, genuine ceramic protection, PPF shielding, and disciplined automotive care.
                </p>
                <p className="text-sm pt-2 text-[#333333]">
                  Explore our specialized{' '}
                  <Link to="/services/detailing-paint-care" className="text-[#FF4B00] font-bold hover:underline">
                    paint correction and detailing services
                  </Link>{' '}
                  or our advanced{' '}
                  <Link to="/services/ceramic-coating" className="text-[#FF4B00] font-bold hover:underline">
                    graphene ceramic coating systems
                  </Link>.
                </p>
              </div>
            </div>

            {/* Right Story Photographic Asset — Dedicated About Visual */}
            <div className="lg:col-span-5 relative border border-[#D8D8D5] rounded-2xl overflow-hidden shadow-2xl bg-[#111111] group">
              <img
                src="/images/about/tmr-ai-car-care-about-workshop-craft-tiruppur.jpg"
                alt="Automotive detailing specialist machine-polishing vehicle finish at TMR AI Car Care studio"
                className="w-full h-[380px] sm:h-[500px] object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-white/90 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B00]" />
                <span>HANDS-ON PAINT CORRECTION • TIRUPPUR</span>
              </div>
            </div>

          </div>

          {/* Bottom Large Editorial Metrics Row */}
          <div className="pt-12 border-t border-[#D8D8D5] grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="flex flex-col space-y-2 p-2">
              <span className="font-['Syncopate'] font-bold text-4xl sm:text-5xl text-[#111111] tracking-tight">
                2009
              </span>
              <span className="font-manrope font-extrabold text-xs uppercase tracking-widest text-[#FF4B00]">
                EXPERIENCE ROOTS
              </span>
              <p className="text-xs text-[#707070] leading-relaxed">
                Automotive-care knowledge and surface craft cultivated since 2009.
              </p>
            </div>

            <div className="flex flex-col space-y-2 p-2 border-t md:border-t-0 md:border-l border-[#D8D8D5] md:pl-8">
              <span className="font-['Syncopate'] font-bold text-4xl sm:text-5xl text-[#111111] tracking-tight">
                ~500 / MO
              </span>
              <span className="font-manrope font-extrabold text-xs uppercase tracking-widest text-[#FF4B00]">
                TYPICAL MONTHLY SCALE
              </span>
              <p className="text-xs text-[#707070] leading-relaxed">
                Hands-on volume managed across long-running vehicle-care operations.
              </p>
            </div>

            <div className="flex flex-col space-y-2 p-2 border-t md:border-t-0 md:border-l border-[#D8D8D5] md:pl-8">
              <span className="font-['Syncopate'] font-bold text-3xl sm:text-4xl text-[#111111] tracking-tight uppercase">
                TIRUPPUR
              </span>
              <span className="font-manrope font-extrabold text-xs uppercase tracking-widest text-[#FF4B00]">
                TAMIL NADU, INDIA
              </span>
              <p className="text-xs text-[#707070] leading-relaxed">
                Flagship studio on Avinashi Road, Near Hope College Junction.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 03 / DEDICATED FOUNDER SECTION — MEENAKSHI SUNDHARAM */}
      <section className="bg-[#0A0A0A] text-white relative w-full overflow-hidden py-20 sm:py-28 border-b border-white/10" id="founder">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Founder Real Photographic Portrait Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#1c1c1c] to-[#0d0d0d] p-3 shadow-2xl group">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-black">
                  <img
                    src="/images/about/tmr-ai-car-care-founder-meenakshi-sundharam-about.jpg"
                    alt="Meenakshi Sundharam, founder of TMR AI Car Care"
                    className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />
                  
                  {/* Floating Identity Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="px-4 py-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 flex flex-col">
                      <span className="font-manrope font-extrabold text-sm uppercase tracking-wider text-white">
                        MEENAKSHI SUNDHARAM
                      </span>
                      <span className="font-mono text-[11px] text-[#FF4B00] uppercase tracking-widest font-semibold">
                        FOUNDER • TMR AI CAR CARE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Biography & Philosophy Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-[#FF4B00] uppercase tracking-widest">
                  <span>02 // LEADERSHIP</span>
                </div>
                <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter text-white leading-tight">
                  MEENAKSHI SUNDHARAM
                </h2>
                <p className="font-editorial italic text-lg sm:text-xl text-[#FF4B00]">
                  Founder &amp; Managing Director
                </p>
              </div>

              <blockquote className="border-l-2 border-[#FF4B00] pl-5 text-base sm:text-lg text-[#E5E5E0] leading-relaxed font-manrope font-medium">
                &ldquo;An automotive-care journey that began in 2009 and grew through years of hands-on work with real vehicles and real customers across Tamil Nadu.&rdquo;
              </blockquote>

              <div className="space-y-4 font-manrope text-sm sm:text-base text-[#B0B0A8] leading-relaxed">
                <p>
                  For Meenakshi Sundharam, automotive care has always been grounded in the reality of the vehicle in front of you. Through years of directing vehicle operations handling approximately 500 cars per month, he developed a deep respect for clear-coat integrity, correct chemical decontamination, and long-term surface preservation.
                </p>
                <p>
                  Today, he remains actively involved in daily studio operations at TMR AI Car Care in Tiruppur. Every detailing process, paint correction schedule, and ceramic coating application follows his direct standard: inspect carefully, refine with precision, and never compromise clear-coat thickness for a quick cosmetic shine.
                </p>
              </div>

              {/* Direct Touchpoints */}
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono text-[#999999] uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4B00]" />
                  <span>DAILY STUDIO INVOLVEMENT</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4B00]" />
                  <span>CLEAR-COAT CONSCIOUS METHOD</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4B00]" />
                  <span>TIRUPPUR STUDIO BASE</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 04 / HOW WE WORK — CINEMATIC VIDEO BACKGROUND & PRACTICAL PHILOSOPHY (PRESERVED) */}
      <section className="relative w-full overflow-hidden bg-[#050505] text-white border-b border-white/10 selection:bg-[#FF4B00]" id="belief">
        
        {/* Full-Width Video Frame */}
        <div className="relative w-full min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] overflow-hidden bg-black flex flex-col justify-between py-12 sm:py-16">
          
          {/* Layer 0: Video Background (Untouched & Preserved) */}
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/60 z-10 pointer-events-none" />

          {/* Layer 2: Floating Editorial UI Stack */}
          <div className="relative z-20 max-w-[1360px] w-full mx-auto px-6 md:px-16 pt-6 sm:pt-10 flex flex-col space-y-4 sm:space-y-6">
            
            <span className="font-mono text-xs text-[#FF4B00] font-bold uppercase tracking-widest">
              03 // OUR METHOD
            </span>

            {/* Geometric Display Headline */}
            <h2 className="font-['Plus_Jakarta_Sans','Geist','Inter_Tight',sans-serif] font-normal text-3xl sm:text-5xl md:text-6xl lg:text-[70px] leading-[1.04] tracking-[-0.015em] uppercase text-white select-none max-w-[580px]">
              <span className="block font-normal text-white">GREAT CARE</span>
              <span className="block font-normal text-white">BEGINS LONG</span>
              <span className="block font-normal text-white">BEFORE THE</span>
              <span className="block font-normal italic text-[#FF4B00] relative inline-block border-b-2 border-[#FF4B00]/70 pb-1">
                POLISHER.
              </span>
            </h2>

            {/* Supporting Paragraph */}
            <p className="font-manrope text-sm sm:text-base text-[#D8D8D5] leading-relaxed max-w-[520px] font-normal pt-1">
              At TMR AI Car Care, true quality starts before any machine touches the vehicle. We study the surface, inspect clear-coat depth under multi-spectrum lighting, and choose the exact correction process suited to that specific paint finish.
            </p>

            {/* Minimal CTA Link */}
            <div className="pt-2">
              <Link
                to="/services/detailing-paint-care"
                className="inline-flex items-center gap-3 font-manrope font-bold text-xs uppercase tracking-[0.2em] text-[#FF4B00] hover:text-white transition-colors group"
              >
                <span>EXPLORE OUR DETAILING PROCESS</span>
                <span className="text-base group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </Link>
            </div>

          </div>

          {/* Layer 3: Bottom Practical Philosophy Rail */}
          <div className="relative z-20 max-w-[1360px] w-full mx-auto px-6 md:px-16 pt-10">
            <div className="pt-8 border-t border-white/20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
              
              {/* Pillar 01 */}
              <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-2xl text-[#FF4B00]">
                    01
                  </span>
                  <h3 className="font-manrope font-extrabold text-sm uppercase tracking-wider text-white">
                    INSPECT
                  </h3>
                </div>
                <p className="font-manrope text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                  Understand the vehicle, paint condition, clear-coat thickness, and customer requirement before treatment begins.
                </p>
              </div>

              {/* Pillar 02 */}
              <div className="flex flex-col space-y-2 border-t md:border-t-0 md:border-l border-white/20 pt-4 md:pt-0 md:pl-8">
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-2xl text-[#FF4B00]">
                    02
                  </span>
                  <h3 className="font-manrope font-extrabold text-sm uppercase tracking-wider text-white">
                    PREPARE
                  </h3>
                </div>
                <p className="font-manrope text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                  Use appropriate multi-stage decontamination, masking, and clear-coat-conscious machine paint correction.
                </p>
              </div>

              {/* Pillar 03 */}
              <div className="flex flex-col space-y-2 border-t md:border-t-0 md:border-l border-white/20 pt-4 md:pt-0 md:pl-8">
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-2xl text-[#FF4B00]">
                    03
                  </span>
                  <h3 className="font-manrope font-extrabold text-sm uppercase tracking-wider text-white">
                    PROTECT
                  </h3>
                </div>
                <p className="font-manrope text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                  Finish with the right long-term protection — graphene ceramic coating or PPF shielding matched to intended use.
                </p>
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* 05 / WHAT SETS TMR APART — FACTUAL DIFFERENTIATION */}
      <section id="standard" className="bg-[#0D0D0D] text-white relative w-full overflow-hidden py-20 sm:py-32 border-b border-white/10 scroll-mt-24">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs text-[#FF4B00] font-bold uppercase tracking-widest">
              04 // DIFFERENTIATION
            </span>
            <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-white leading-[0.92]">
              WHAT SETS TMR <br />
              <span className="font-['Bricolage_Grotesque'] font-extrabold italic text-[#FF4B00] lowercase pr-4 tracking-normal inline-block transform -rotate-1">apart.</span>
            </h2>
            <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] leading-relaxed border-l-2 border-[#FF4B00] pl-5">
              What sets TMR apart isn't marketing slogans — it's the disciplined standard applied to every vehicle that enters our studio.
            </p>
          </div>

          {/* 4 Differentiation Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
            
            <div className="p-8 rounded-2xl border border-white/10 bg-[#141414] flex flex-col justify-between space-y-6 hover:border-[#FF4B00] transition-colors group shadow-lg">
              <span className="font-mono text-xs text-[#FF4B00] uppercase tracking-widest font-bold">01</span>
              <div className="space-y-3">
                <h3 className="font-manrope font-extrabold text-lg uppercase tracking-wide text-white group-hover:text-[#FF4B00] transition-colors">
                  EXPERIENCE ROOTS
                </h3>
                <p className="text-xs text-[#A0A0A0] leading-relaxed font-normal">
                  Grounded in automotive-care experience dating back to 2009, bringing over a decade of surface knowledge and clear-coat expertise.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-white/10 bg-[#141414] flex flex-col justify-between space-y-6 hover:border-[#FF4B00] transition-colors group shadow-lg">
              <span className="font-mono text-xs text-[#FF4B00] uppercase tracking-widest font-bold">02</span>
              <div className="space-y-3">
                <h3 className="font-manrope font-extrabold text-lg uppercase tracking-wide text-white group-hover:text-[#FF4B00] transition-colors">
                  OPERATIONAL SCALE
                </h3>
                <p className="text-xs text-[#A0A0A0] leading-relaxed font-normal">
                  Work discipline refined through caring for around 500 vehicles in a typical month across long-term vehicle operations.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-white/10 bg-[#141414] flex flex-col justify-between space-y-6 hover:border-[#FF4B00] transition-colors group shadow-lg">
              <span className="font-mono text-xs text-[#FF4B00] uppercase tracking-widest font-bold">03</span>
              <div className="space-y-3">
                <h3 className="font-manrope font-extrabold text-lg uppercase tracking-wide text-white group-hover:text-[#FF4B00] transition-colors">
                  SPECIALIZED STUDIO
                </h3>
                <p className="text-xs text-[#A0A0A0] leading-relaxed font-normal">
                  Focused exclusively on multi-stage paint correction, graphene ceramic coatings, and high-clarity paint protection film.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-white/10 bg-[#141414] flex flex-col justify-between space-y-6 hover:border-[#FF4B00] transition-colors group shadow-lg">
              <span className="font-mono text-xs text-[#FF4B00] uppercase tracking-widest font-bold">04</span>
              <div className="space-y-3">
                <h3 className="font-manrope font-extrabold text-lg uppercase tracking-wide text-white group-hover:text-[#FF4B00] transition-colors">
                  FOUNDER LEADERSHIP
                </h3>
                <p className="text-xs text-[#A0A0A0] leading-relaxed font-normal">
                  Founder Meenakshi Sundharam oversees daily studio processes, ensuring uncompromised preparation and finishing standards.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 06 / ROOTED IN TIRUPPUR — LOCAL STUDIO IDENTITY */}
      <section id="workshop" className="bg-[#F5F4EF] text-[#111111] relative w-full overflow-hidden py-20 sm:py-32 border-b border-[#D8D8D5] scroll-mt-24">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#FF4B00] font-bold uppercase tracking-widest">
                  05 // LOCATION
                </span>
                <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl tracking-tighter uppercase text-[#111111] leading-[0.95]">
                  ROOTED IN <br />
                  <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">tiruppur.</span>
                </h2>
              </div>

              <p className="font-manrope text-sm sm:text-base text-[#4a4949] leading-relaxed border-l-2 border-[#FF4B00] pl-4">
                Located on Avinashi Road near Hope College Junction, TMR AI Car Care serves vehicle owners from across Tiruppur and Tamil Nadu with meticulous detailing, paint correction, and durable surface protection.
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
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#111111] text-white font-extrabold text-xs uppercase tracking-widest hover:bg-[#FF4B00] transition-colors rounded-xl shadow-lg"
                >
                  <span>VIEW LOCATION &amp; CONTACT STUDIO</span>
                  <span className="text-base">→</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 relative h-[340px] sm:h-[460px] border border-[#D8D8D5] rounded-2xl overflow-hidden bg-[#111111] shadow-2xl group">
              <img
                src="/images/about/tmr-ai-car-care-about-tiruppur-studio.jpg"
                alt="TMR AI Car Care studio facility on Avinashi Road, Tiruppur"
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-white/90 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#FF4B00]" />
                  <span>AVINASHI ROAD FACILITY • TIRUPPUR</span>
                </div>
                <span className="text-[#FF4B00] font-semibold">TMR AI CAR CARE</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 07 / FINAL CTA — START HERE (DEDICATED ABOUT CTA VISUAL) */}
      <section className="relative w-full min-h-[70vh] flex flex-col justify-end bg-[#050505] text-white overflow-hidden py-20 sm:py-28 font-manrope">
        {/* Layer 1: Dedicated About CTA Background Visual */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/about/tmr-ai-car-care-about-cta-finish.jpg"
            alt="Ceramic-coated luxury vehicle with mirror gloss finish inside TMR AI Car Care studio"
            className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-[10000ms] ease-out hover:scale-105"
          />
        </div>

        {/* Layer 2: Fixed Dark Cinematic Overlay Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/95 via-black/80 to-black/45 pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black/55 pointer-events-none" />

        {/* Layer 3: Editorial Content Box */}
        <div className="relative z-20 max-w-[1360px] w-full mx-auto px-5 md:px-16 flex flex-col justify-end space-y-8 my-auto">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-white/90 uppercase shadow-lg w-fit">
              <span className="w-2 h-2 rounded-full bg-[#FF4B00] animate-pulse shadow-[0_0_8px_#FF4B00]" />
              <span>CONSULT WITH OUR DETAILING TEAM</span>
            </div>

            <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase text-white leading-[0.92] tracking-tighter">
              YOUR CAR DESERVES <br />
              THE RIGHT <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">care.</span>
            </h2>

            <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] leading-relaxed font-normal border-l pl-4 border-white/20 max-w-xl">
              Talk to our team about the right next step for your vehicle. Explore our{' '}
              <Link to="/services/detailing-paint-care" className="text-[#FF4B00] font-bold hover:underline">
                paint correction and detailing
              </Link>,{' '}
              <Link to="/services/ceramic-coating" className="text-[#FF4B00] font-bold hover:underline">
                ceramic coating
              </Link>, or{' '}
              <Link to="/services/ppf-paint-protection" className="text-[#FF4B00] font-bold hover:underline">
                PPF paint protection
              </Link>.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent("Hello TMR AI Car Care, I would like to consult about detailing and paint care for my vehicle.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#FF4B00] text-white rounded-xl font-extrabold text-xs uppercase tracking-widest hover:bg-[#e04200] transition-colors shadow-[0_10px_30px_rgba(255,75,0,0.35)] text-center inline-flex items-center justify-center gap-2.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WHATSAPP TMR</span>
              </a>

              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-extrabold text-xs uppercase tracking-widest hover:bg-white hover:text-[#050505] transition-colors text-center inline-flex items-center justify-center gap-2.5"
              >
                <span>CONTACT STUDIO</span>
                <span className="text-base">→</span>
              </Link>
            </div>

            {/* Location & Gallery Links Line */}
            <div className="pt-6 border-t border-white/15 text-xs text-[#858585] uppercase tracking-widest font-semibold flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF4B00] animate-pulse" />
                <span>Tiruppur, Tamil Nadu • Avinashi Road Studio</span>
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
