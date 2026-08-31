import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '@/data/company';

export const CarWashPage: React.FC = () => {
  const [hoveredFaq, setHoveredFaq] = useState<number | null>(null);
  const [pinnedFaqs, setPinnedFaqs] = useState<Set<number>>(new Set());

  useEffect(() => {
    document.title = "Car Wash & Cleaning in Tiruppur | TMR Car Care";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Professional car wash and cleaning in Tiruppur with water wash, foam wash, hand wash, interior cleaning and exterior vehicle care at TMR Car Care.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional car wash and cleaning in Tiruppur with water wash, foam wash, hand wash, interior cleaning and exterior vehicle care at TMR Car Care.';
      document.head.appendChild(meta);
    }

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      canonical.href = 'https://tmrcarcare.com/services/car-wash-cleaning';
    } else {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = 'https://tmrcarcare.com/services/car-wash-cleaning';
      document.head.appendChild(canonical);
    }

    window.scrollTo(0, 0);

    return () => {
      const can = document.querySelector('link[rel="canonical"][href="https://tmrcarcare.com/services/car-wash-cleaning"]');
      if (can) can.remove();
    };
  }, []);

  const faqs = [
    {
      id: 'faq-01',
      q: 'What type of car wash does TMR Car Care offer in Tiruppur?',
      a: 'TMR Car Care in Tiruppur offers three primary wash options — water wash, foam wash, and hand wash — along with comprehensive exterior body cleaning, wheel and tyre care, glass cleaning, and interior cabin vacuuming and maintenance.',
    },
    {
      id: 'faq-02',
      q: 'What is the difference between a water wash, foam wash and hand wash?',
      a: 'A water wash is a straightforward exterior rinse and cleaning for surface dirt. A foam wash applies a specialized foam pre-cleaning step to loosen surface contamination before contact washing. A hand wash involves careful contact cleaning using soft wash materials and controlled techniques to reduce unnecessary friction.',
    },
    {
      id: 'faq-03',
      q: 'How often should I wash my car?',
      a: 'For vehicles driven regularly in Tiruppur, a maintenance wash every one to two weeks helps prevent road grime, dust, and environmental contaminants from building up on the paint surface, glass, and wheels.',
    },
    {
      id: 'faq-04',
      q: 'Is foam washing suitable for a vehicle\'s exterior paint?',
      a: 'Yes. Foam washing is a contactless pre-cleaning step that encapsulates and lifts surface dirt before any contact wash, helping reduce the risk of scratching delicate clear coats during physical washing.',
    },
    {
      id: 'faq-05',
      q: 'How long does a car wash usually take?',
      a: 'A standard wash and cleaning service typically takes 45 to 75 minutes depending on the vehicle size, chosen wash format, and level of interior vacuuming and cleaning required.',
    },
    {
      id: 'faq-06',
      q: 'Do you clean wheels, tyres and wheel arches?',
      a: 'Yes. Our cleaning process includes cleaning of wheel faces, tyres, brake dust accumulation, and accessible wheel arch areas to maintain overall vehicle cleanliness.',
    },
    {
      id: 'faq-07',
      q: 'Do you offer interior car cleaning?',
      a: 'Yes. Interior cleaning covers vacuuming of carpets and seats, dusting air vents, wiping down high-touch dashboard and cabin surfaces, and cleaning interior glass.',
    },
    {
      id: 'faq-08',
      q: 'Can I book a car wash through WhatsApp?',
      a: 'Yes. You can contact TMR Car Care directly through WhatsApp or phone to check availability and arrange your visit.',
    },
    {
      id: 'faq-09',
      q: 'How much does a car wash cost?',
      a: 'Pricing depends on the vehicle and the cleaning requirements. Contact TMR Car Care for the current service quote.',
    },
    {
      id: 'faq-10',
      q: 'Can I request a quote before visiting TMR Car Care?',
      a: 'Yes. Simply send us a message on WhatsApp or give us a call with your vehicle model and required cleaning service, and we will provide you with a quote prior to your appointment.',
    },
  ];

  const togglePinFaq = (idx: number) => {
    setPinnedFaqs((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  // Structured Data (JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Car Wash & Cleaning",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TMR Car Care",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": companyData.address.street,
        "addressLocality": companyData.address.city,
        "addressRegion": companyData.address.state,
        "postalCode": companyData.address.pincode,
        "addressCountry": "IN",
      },
      "telephone": companyData.contact.phone,
    },
    "areaServed": {
      "@type": "City",
      "name": "Tiruppur",
    },
    "description": "Professional car wash and cleaning in Tiruppur with water wash, foam wash, hand wash, interior cleaning and exterior vehicle care at TMR Car Care.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tmrcarcare.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://tmrcarcare.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Car Wash & Cleaning", "item": "https://tmrcarcare.com/services/car-wash-cleaning" },
    ],
  };

  return (
    <div className="w-full bg-[#F5F4EF] text-[#0A0A0A] font-manrope selection:bg-[#FF4B00] selection:text-white pt-20">

      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* SECTION 01 — HERO */}
      <section data-navbar-theme="light" className="relative w-full py-16 sm:py-24 md:py-32 px-6 md:px-16 max-w-[1400px] mx-auto overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#FAF8F5] via-[#F1EEE7] to-[#E8E4DB]" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_50%,_rgba(0,0,0,0.04)_100%)]" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="col-span-1 md:col-span-12">
            <h1 className="font-['Instrument_Serif','Editorial_New',serif] font-normal text-4xl sm:text-6xl lg:text-[76px] text-[#0A0A0A] uppercase tracking-tight leading-[0.96] mb-6">
              PROFESSIONAL CAR WASH &amp; CLEANING<br />
              <span className="font-['Bricolage_Grotesque',serif] font-extrabold italic text-[#FF4B00] lowercase pr-4 inline-block transform -rotate-1">
                in tiruppur.
              </span>
            </h1>
          </div>

          <div className="col-span-1 md:col-span-7 space-y-4">
            <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed max-w-2xl">
              A careful vehicle wash designed to remove road grime, dust and everyday contamination while keeping the exterior, glass, wheels and cabin properly maintained.
            </p>
            <p className="font-manrope text-sm text-[#858585] font-bold uppercase tracking-wider">
              Water wash, foam wash and hand wash for everyday vehicle maintenance.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=Booking%20Car%20Wash%20%26%20Cleaning%20Service`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF4B00] transition-colors group cursor-pointer"
              >
                <span>WHATSAPP TMR</span>
                <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </a>
              <a
                href={`tel:${companyData.contact.phone}`}
                className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF4B00] transition-colors group cursor-pointer"
              >
                <span>CALL TMR</span>
                <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Image — Single Visual Anchor */}
        <div className="mt-12 sm:mt-16 w-full h-[360px] sm:h-[520px] md:h-[600px] relative overflow-hidden rounded-xl border border-[#D8D8D5] bg-[#0A0A0A] group">
          <img
            src="/images/services/car-wash/car-wash-stitch-01.jpg"
            alt="Professional foam wash at TMR Car Care"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 text-white pointer-events-none">
            <p className="font-manrope font-bold text-sm text-white">
              Professional foam wash at TMR Car Care studio, Avinashi Road, Tiruppur
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="w-full h-px bg-[#D8D8D5]" />
      </div>

      {/* SECTION 02 — THE THREE WASH OPTIONS */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            THREE WAYS TO WASH.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            Choose the wash approach that fits your vehicle's current condition and everyday maintenance needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#D8D8D5]">
          <div className="py-10 md:pr-10 border-b md:border-b-0 md:border-r border-[#D8D8D5] space-y-4">
            <span className="font-mono text-xs font-bold text-[#FF4B00] block">OPTION 01</span>
            <h3 className="font-manrope font-extrabold text-xl uppercase tracking-wider text-[#0A0A0A]">
              WATER WASH
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              A straightforward exterior wash for removing everyday dust, road grime and surface dirt.
            </p>
          </div>

          <div className="py-10 md:px-10 border-b md:border-b-0 md:border-r border-[#D8D8D5] space-y-4">
            <span className="font-mono text-xs font-bold text-[#FF4B00] block">OPTION 02</span>
            <h3 className="font-manrope font-extrabold text-xl uppercase tracking-wider text-[#0A0A0A]">
              FOAM WASH
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              A foam-based cleaning step designed to loosen surface contamination before contact washing.
            </p>
          </div>

          <div className="py-10 md:pl-10 space-y-4">
            <span className="font-mono text-xs font-bold text-[#FF4B00] block">OPTION 03</span>
            <h3 className="font-manrope font-extrabold text-xl uppercase tracking-wider text-[#0A0A0A]">
              HAND WASH
            </h3>
            <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
              Careful contact cleaning using suitable wash materials and controlled technique.
            </p>
          </div>
        </div>

        {/* Supporting Image 2 */}
        <div className="mt-16 w-full h-[260px] sm:h-[380px] relative overflow-hidden rounded-xl border border-[#D8D8D5] group">
          <img
            src="/images/services/car-wash/car-wash-stitch-05.jpg"
            alt="Foam wash pre-cleaning process at TMR Car Care"
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="w-full h-px bg-[#D8D8D5]" />
      </div>

      {/* SECTION 03 — WHAT WE CLEAN */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            EVERY SURFACE MATTERS.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            A proper vehicle clean covers more than the painted body.
          </p>
        </div>

        <div className="border-t border-[#D8D8D5] divide-y divide-[#D8D8D5]">
          {[
            { num: '01', title: 'EXTERIOR BODY', desc: 'Removal of everyday road grime, dust and surface contamination from the vehicle exterior.' },
            { num: '02', title: 'WHEELS & TYRES', desc: 'Cleaning of wheel faces, tyres and accessible wheel areas where dirt and brake dust accumulate.' },
            { num: '03', title: 'GLASS', desc: 'Exterior and interior glass cleaning for clearer visibility.' },
            { num: '04', title: 'INTERIOR', desc: 'Vacuuming and cleaning of the cabin, including common touch surfaces and interior materials.' },
            { num: '05', title: 'TRIMS & DETAILS', desc: 'Careful cleaning around trims, badges, edges and other smaller vehicle details.' },
          ].map((item) => (
            <div key={item.num} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-white/40 px-3 transition-colors duration-300">
              <div className="md:col-span-4 flex items-center gap-4">
                <span className="font-mono text-xs font-bold text-[#FF4B00]">{item.num}</span>
                <h3 className="font-manrope font-extrabold text-xl sm:text-2xl uppercase tracking-wider text-[#0A0A0A] group-hover:text-[#FF4B00] transition-colors">
                  {item.title}
                </h3>
              </div>
              <div className="md:col-span-8">
                <p className="font-manrope text-sm sm:text-base text-[#5F5E5E] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Image Grid 3 & 4 */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-[240px] sm:h-[320px] relative overflow-hidden rounded-xl border border-[#D8D8D5] group">
            <img
              src="/images/services/car-wash/car-wash-stitch-03.jpg"
              alt="Car wheel and tyre cleaning service"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="h-[240px] sm:h-[320px] relative overflow-hidden rounded-xl border border-[#D8D8D5] group">
            <img
              src="/images/services/car-wash/car-wash-stitch-06.jpg"
              alt="Vehicle exterior cleaning at TMR Car Care"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="w-full h-px bg-[#D8D8D5]" />
      </div>

      {/* SECTION 04 — THE WASH PROCESS */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            A SAFER WAY TO WASH.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            A consistent wash process helps remove contamination while reducing unnecessary friction during cleaning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {[
            { num: '01', title: 'PREPARE', desc: 'Inspect the vehicle and identify the areas requiring attention.' },
            { num: '02', title: 'PRE-RINSE', desc: 'Remove loose dirt and heavier surface contamination before contact washing.' },
            { num: '03', title: 'FOAM', desc: 'Apply the appropriate wash solution to help loosen remaining surface grime.' },
            { num: '04', title: 'CONTACT WASH', desc: 'Clean the vehicle using suitable wash materials and controlled contact.' },
            { num: '05', title: 'RINSE', desc: 'Thoroughly rinse the vehicle to remove remaining wash solution and loosened contamination.' },
            { num: '06', title: 'DRY & FINISH', desc: 'Dry the vehicle carefully and complete a final visual check.' },
          ].map((step, idx) => (
            <div
              key={step.num}
              className={`space-y-3 py-8 ${
                idx % 3 !== 2 ? 'lg:border-r border-[#D8D8D5]' : ''
              } ${idx < 3 ? 'border-b border-[#D8D8D5]' : ''} ${
                idx % 3 === 0 ? 'lg:pr-8' : idx % 3 === 1 ? 'lg:px-8' : 'lg:pl-8'
              } ${idx % 2 === 0 ? 'sm:border-r sm:pr-8 lg:border-r-0 lg:pr-0' : 'sm:pl-8 lg:pl-0'}`}
            >
              <span className="font-mono text-xs font-bold text-[#FF4B00] block">{step.num}</span>
              <h3 className="font-manrope font-bold text-base uppercase text-[#0A0A0A] tracking-wider">
                {step.title}
              </h3>
              <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="w-full h-px bg-[#D8D8D5]" />
      </div>

      {/* SECTION 05 — WHY THE WASH MATTERS */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="max-w-2xl mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            CARE STARTS WITH THE WASH.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#5F5E5E] leading-relaxed">
            Regular professional cleaning helps keep road grime, dust and environmental contamination from building up on the vehicle.
          </p>
        </div>

        <div className="border-t border-[#D8D8D5] divide-y divide-[#D8D8D5]">
          <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-3">
            <div className="md:col-span-4">
              <h3 className="font-manrope font-extrabold text-lg uppercase tracking-wider text-[#0A0A0A]">
                PREVENTS CONTAMINATION BUILDUP
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="font-manrope text-sm sm:text-base text-[#5F5E5E] leading-relaxed">
                Regular professional cleaning helps keep road grime, dust and environmental contamination from building up on the vehicle surface.
              </p>
            </div>
          </div>

          <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-3">
            <div className="md:col-span-4">
              <h3 className="font-manrope font-extrabold text-lg uppercase tracking-wider text-[#0A0A0A]">
                EASIER TO INSPECT &amp; MAINTAIN
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="font-manrope text-sm sm:text-base text-[#5F5E5E] leading-relaxed">
                A properly maintained exterior is easier to inspect, easier to maintain and better prepared for more advanced detailing or protection work.
              </p>
            </div>
          </div>

          <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-3">
            <div className="md:col-span-4">
              <h3 className="font-manrope font-extrabold text-lg uppercase tracking-wider text-[#0A0A0A]">
                CABIN &amp; INTERIOR FRESHNESS
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="font-manrope text-sm sm:text-base text-[#5F5E5E] leading-relaxed">
                Interior cleaning also helps keep the cabin, glass, trims and high-contact areas fresh and presentable for daily driving.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="w-full h-px bg-[#D8D8D5]" />
      </div>

      {/* SECTION 06 — RELATED SERVICES */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="max-w-2xl mb-12">
          <h2 className="font-manrope font-extrabold text-2xl sm:text-4xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            GO BEYOND THE WASH.
          </h2>
          <p className="font-manrope text-sm sm:text-base text-[#5F5E5E] leading-relaxed">
            When your vehicle needs more than routine cleaning, explore TMR's specialist care services.
          </p>
        </div>

        <div className="border-t border-[#D8D8D5] divide-y divide-[#D8D8D5]">
          {[
            { title: 'DETAILING & PAINT CARE', desc: 'Machine paint correction, swirl removal, and gloss enhancement.', route: '/services/detailing-paint-care' },
            { title: 'CERAMIC COATING', desc: 'Multi-year durable surface protection, hydrophobic finish, and deep reflection.', route: '/services/ceramic-coating' },
            { title: 'PPF & PAINT PROTECTION', desc: 'Self-healing TPU Paint Protection Film armor against stone chips and scratches.', route: '/services/ppf-paint-protection' },
          ].map((svc, idx) => (
            <Link
              key={idx}
              to={svc.route}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-white/40 px-3 transition-colors duration-300 cursor-pointer"
            >
              <div className="md:col-span-5">
                <h3 className="font-manrope font-extrabold text-lg uppercase tracking-wider text-[#0A0A0A] group-hover:text-[#FF4B00] transition-colors">
                  {svc.title} →
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed">
                  {svc.desc}
                </p>
              </div>
              <div className="md:col-span-1 flex justify-end">
                <span className="text-[#FF4B00] text-lg font-bold group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="w-full h-px bg-[#D8D8D5]" />
      </div>

      {/* SECTION 07 — FAQ */}
      <section className="py-20 sm:py-28 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A] leading-none mb-6">
              CAR WASH &amp; CLEANING FAQ.
            </h2>
            <p className="font-manrope text-sm text-[#5F5E5E] max-w-sm leading-relaxed">
              Clear answers to common questions about washing, maintenance and booking.
            </p>
          </div>

          <div className="col-span-12 md:col-span-7 flex flex-col divide-y divide-[#D8D8D5]">
            {faqs.map((faq, idx) => {
              const isOpen = pinnedFaqs.has(idx) || hoveredFaq === idx;
              return (
                <div
                  key={faq.id}
                  onMouseEnter={() => setHoveredFaq(idx)}
                  onMouseLeave={() => setHoveredFaq(null)}
                  className="py-6 transition-colors group"
                >
                  <button
                    type="button"
                    id={`carwash-faq-btn-${idx}`}
                    aria-expanded={isOpen}
                    aria-controls={`carwash-faq-answer-${idx}`}
                    onClick={() => togglePinFaq(idx)}
                    onFocus={() => setHoveredFaq(idx)}
                    onBlur={() => setHoveredFaq(null)}
                    className="w-full flex justify-between items-center text-left focus:outline-none focus:text-[#FF4B00] cursor-pointer"
                  >
                    <span
                      className={`font-manrope font-extrabold text-base sm:text-lg uppercase transition-colors pr-4 ${
                        isOpen ? 'text-[#FF4B00]' : 'text-[#0A0A0A] group-hover:text-[#FF4B00]'
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span className="font-bold text-lg text-[#FF4B00] shrink-0 font-mono transition-transform duration-300">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    id={`carwash-faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`carwash-faq-btn-${idx}`}
                    className={`grid transition-all duration-300 ease-out overflow-hidden ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 pt-3 pb-1' : 'grid-rows-[0fr] opacity-0 pt-0 pb-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-manrope text-sm text-[#5F5E5E] leading-relaxed max-w-2xl">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 08 — FINAL CTA */}
      <section className="relative w-full py-24 sm:py-32 bg-[#0B0B0B] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#181210] via-[#0B0B0B] to-[#050505]" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_45%,_rgba(0,0,0,0.65)_100%)]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
            READY FOR A<br />
            <span className="font-['Bricolage_Grotesque',serif] font-extrabold italic text-[#FF4B00] lowercase tracking-normal inline-block">
              cleaner finish?
            </span>
          </h2>

          <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] max-w-xl mx-auto leading-relaxed">
            Tell us what your vehicle needs and we'll help you choose the right wash and cleaning service.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-4">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}?text=Booking%20Car%20Wash%20%26%20Cleaning%20Service`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors group cursor-pointer"
            >
              <span>WHATSAPP TMR</span>
              <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </a>
            <a
              href={`tel:${companyData.contact.phone}`}
              className="inline-flex items-center gap-3 font-manrope font-extrabold text-xs uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors group cursor-pointer"
            >
              <span>CALL TMR</span>
              <span className="text-base text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
