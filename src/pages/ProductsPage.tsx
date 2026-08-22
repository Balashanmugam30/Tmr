import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '@/data/company';
import { ProductHeroCarousel, ProductItem } from '@/components/ProductHeroCarousel';

export const ProductsPage: React.FC = () => {
  const [activeCategoryWorld, setActiveCategoryWorld] = useState<number>(0);
  const [activePurpose, setActivePurpose] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('ALL');

  useEffect(() => {
    document.title = "TMR Car Care — The Product Vault";
    window.scrollTo(0, 0);
  }, []);

  const heroProducts: ProductItem[] = [
    {
      id: '3m-rubbing-compound',
      name: '3M™ Perfect-It™ EX AC Rubbing Compound',
      category: 'Compounds & Polishes',
      image: '/images/products/3m/3m-perfect-it-ex-rubbing-compound.jpg',
      slug: '3m-perfect-it-ex-ac-rubbing-compound',
    },
    {
      id: '3m-trizact',
      name: '3M™ Trizact™ Performance Abrasives',
      category: 'Abrasives & Leveling',
      image: '/images/products/3m/3m-trizact-abrasives.jpg',
      slug: '3m-perfect-it-ex-ac-rubbing-compound',
    },
    {
      id: 'meguiars-m210',
      name: "Meguiar's Mirror Glaze M210 Ultra Finishing Polish",
      category: 'Finishing Compounds',
      image: '/images/products/3m/meguiars-m210-finishing-polish.jpg',
      slug: '3m-perfect-it-ex-ac-rubbing-compound',
    },
    {
      id: '3m-quick-wax',
      name: '3M™ Quick Wax Spray Sealant',
      category: 'Protection & Shine',
      image: '/images/products/3m/3m-quick-wax-spray.jpg',
      slug: '3m-perfect-it-ex-ac-rubbing-compound',
    },
    {
      id: '3m-machine-polish',
      name: '3M™ Perfect-It™ Machine Polish',
      category: 'Finish Polishes',
      image: '/images/products/3m/meguiars-m210-finishing-polish.jpg',
      slug: '3m-perfect-it-ex-ac-rubbing-compound',
    },
  ];

  const categoryWorlds = [
    {
      id: 0,
      title: "Cleaning",
      desc: "Professional vehicle-cleaning products for wash and maintenance applications.",
      image: "/images/services/car-wash/car-wash-stitch-01.jpg",
      alt: "3M professional vehicle cleaning shampoo and wash",
    },
    {
      id: 1,
      title: "Polishing",
      desc: "High-performance compounds, polishes, and pads for paint correction.",
      image: "/images/products/3m/3m-perfect-it-ex-rubbing-compound.jpg",
      alt: "3M Perfect-It EX AC Rubbing Compound bottle",
    },
    {
      id: 2,
      title: "Protection",
      desc: "Nanoceramic, wax, and sealant protection treatments.",
      image: "/images/products/3m/3m-quick-wax-spray.jpg",
      alt: "3M Quick Wax spray sealant bottle",
    },
    {
      id: 3,
      title: "Films",
      desc: "Self-healing paint protection films and sun-control solar films.",
      image: "/images/ppf/ppf-hero.webp",
      alt: "3M Scotchgard Paint Protection Film application",
    },
    {
      id: 4,
      title: "Tools",
      desc: "Dual-action polishers, inspection lights, and precision detailing equipment.",
      image: "/images/process/polisher-object.webp",
      alt: "Dual-action orbital polisher detailing tool",
    },
    {
      id: 5,
      title: "Accessories",
      desc: "Microfiber towels, applicators, and premium vehicle cabin accessories.",
      image: "/images/services/accessories/accessories-stitch-01.jpg",
      alt: "Premium microfiber detailing accessories",
    },
  ];

  const purposeRows = [
    { id: 0, code: "01", title: "CLEAN THE VEHICLE", cat: "Category: CLEANING" },
    { id: 1, code: "02", title: "REFINE THE PAINT", cat: "Category: POLISHING" },
    { id: 2, code: "03", title: "PROTECT THE SURFACE", cat: "Category: PROTECTION" },
    { id: 3, code: "04", title: "WORK WITH FILM", cat: "Category: FILMS" },
    { id: 4, code: "05", title: "GET THE RIGHT TOOLS", cat: "Category: TOOLS" },
    { id: 5, code: "06", title: "ENHANCE THE VEHICLE", cat: "Category: ACCESSORIES" },
  ];

  const faqs = [
    {
      q: "ARE THESE PRODUCTS FOR SALE?",
      a: "We use these professional-grade products exclusively in our detailing services. Select maintenance products may be available for purchase to our service clients upon request.",
    },
    {
      q: "DO YOU USE ONLY 3M PRODUCTS?",
      a: "While 3M is our primary partner for abrasives and compounds, we also integrate specialized formulations from leading detailing brands tailored to specific vehicle surface requirements.",
    },
    {
      q: "CAN I REQUEST A SPECIFIC PRODUCT FOR MY SERVICE?",
      a: "Yes. During our initial vehicle inspection, we review compound and coating options with you to select the exact formulation suited to your vehicle's clear coat.",
    },
    {
      q: "ARE YOUR CERAMIC COATINGS CERTIFIED?",
      a: "All ceramic and PPF products applied at TMR Car Care are 100% authentic, verified by manufacturer serial numbers, and applied in a climate-controlled studio environment.",
    },
    {
      q: "HOW DO I MAINTAIN THE FINISH AFTER A SERVICE?",
      a: "We provide comprehensive post-service care guides and recommend specific pH-neutral maintenance products to maximize the longevity of your ceramic or PPF protection.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="w-full bg-[#050505] text-[#111111] font-manrope selection:bg-[#FF4B00] selection:text-white">
      
      {/* 01 / HERO */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-between bg-[#050505] text-[#F5F4EF] overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16 border-b border-white/10">
        {/* Soft Central Radial Studio Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] aspect-square rounded-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#FF4B00]/10 via-transparent to-transparent blur-3xl" />
        </div>

        {/* Top Centered Section matching reference image */}
        <div className="relative z-10 max-w-[1360px] mx-auto px-5 md:px-16 w-full flex flex-col items-center text-center">
          {/* Main Headline Stack */}
          <h1 className="flex flex-col items-center leading-[0.95] tracking-tighter mb-5">
            <span className="font-editorial italic font-normal text-white text-4xl sm:text-6xl md:text-7xl lg:text-[76px] mb-1">
              Streamline Your Detailing,
            </span>
            <span className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] uppercase text-[#F5F4EF]">
              Supercharge Your Finish
            </span>
          </h1>

          {/* Sub-headline / Paragraph */}
          <p className="font-manrope text-sm sm:text-base md:text-lg text-[#D8D8D5] max-w-xl leading-relaxed font-normal mb-8">
            All-in-one professional automotive-care products to clean, correct, and protect — faster and smarter.
          </p>

          {/* Capsule Button matching reference image button style */}
          <div className="flex flex-wrap justify-center gap-4 items-center mb-8">
            <a
              href="#product-catalogue"
              className="px-8 py-4 bg-[#FF4B00] text-white rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-white hover:text-[#050505] transition-colors inline-flex items-center gap-2 shadow-xl"
            >
              <span>EXPLORE PRODUCTS COLLECTION</span>
              <span className="text-base">→</span>
            </a>
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}?text=Enquiry%20regarding%20TMR%20Product%20Vault`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 text-[#F5F4EF] rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-white hover:text-[#050505] transition-colors inline-flex items-center gap-2"
            >
              <span>WHATSAPP TMR</span>
              <span className="text-base">→</span>
            </a>
          </div>
        </div>

        {/* Middle Portion: Full-Width 3D Curved Product Runway with corner fading */}
        <div className="relative z-10 w-full my-auto">
          <ProductHeroCarousel products={heroProducts} />
        </div>

        {/* Bottom Portion: 3 Text Containers below slider matching reference image */}
        <div className="relative z-10 max-w-[1360px] mx-auto px-5 md:px-16 w-full pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-white/10 pt-6 border-t border-white/10">
            {/* Container 1 */}
            <div className="flex flex-col items-center text-center px-4">
              <h3 className="font-manrope font-extrabold text-base sm:text-lg uppercase text-[#F5F4EF] mb-2 tracking-tight">
                Paint Correction &amp; Polishing
              </h3>
              <p className="font-manrope text-xs sm:text-sm text-[#858585] max-w-xs leading-relaxed">
                Remove P1200+ sand scratches, micro-marring, and swirl marks with 3M &amp; Meguiar's compounds.
              </p>
            </div>

            {/* Container 2 */}
            <div className="flex flex-col items-center text-center px-4">
              <h3 className="font-manrope font-extrabold text-base sm:text-lg uppercase text-[#F5F4EF] mb-2 tracking-tight">
                Surface Protection &amp; Ceramic
              </h3>
              <p className="font-manrope text-xs sm:text-sm text-[#858585] max-w-xs leading-relaxed">
                Long-lasting hydrophobic barriers, quartz coatings, and self-healing TPU protection films.
              </p>
            </div>

            {/* Container 3 */}
            <div className="flex flex-col items-center text-center px-4">
              <h3 className="font-manrope font-extrabold text-base sm:text-lg uppercase text-[#F5F4EF] mb-2 tracking-tight">
                Maintenance &amp; Wash Solutions
              </h3>
              <p className="font-manrope text-xs sm:text-sm text-[#858585] max-w-xs leading-relaxed">
                pH-neutral snow foams, quick waxes, and microfiber maintenance tools for lasting studio shine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 / CATEGORY WORLDS */}
      <section className="w-full py-20 sm:py-32 bg-[#111111] text-[#F5F4EF] border-t border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-7 flex flex-col">
              <div className="flex items-center gap-4 mb-12">
                <span className="font-manrope font-bold text-xs text-[#FF4B00] tracking-widest uppercase">
                  02 / CATEGORY WORLDS
                </span>
                <div className="flex gap-4 text-[10px] font-bold text-[#858585] uppercase tracking-widest">
                  <span>3M AUTO CARE</span>
                  <span>/</span>
                  <span>PRODUCT COLLECTION</span>
                </div>
              </div>

              <div className="flex flex-col">
                {categoryWorlds.map((world, idx) => {
                  const isActive = activeCategoryWorld === idx;
                  return (
                    <div
                      key={world.id}
                      onClick={() => setActiveCategoryWorld(idx)}
                      onMouseEnter={() => setActiveCategoryWorld(idx)}
                      className={`group py-6 sm:py-8 border-t border-white/10 flex items-baseline gap-6 sm:gap-8 cursor-pointer transition-colors ${
                        isActive ? "bg-white/5" : "hover:bg-white/5"
                      }`}
                    >
                      <span className={`font-bold text-sm ${isActive ? "text-[#FF4B00]" : "text-white/40"}`}>
                        0{idx + 1}
                      </span>
                      <h2
                        className={`font-manrope font-extrabold text-4xl sm:text-6xl uppercase tracking-tighter leading-none ${
                          isActive ? "text-[#FF4B00]" : "text-white/40 group-hover:text-white transition-colors"
                        }`}
                      >
                        {world.title}
                      </h2>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Stage Preview */}
            <div className="hidden md:flex col-span-5 flex-col justify-between pt-16">
              <div className="relative w-full aspect-[4/5] bg-white/5 border border-white/10 flex items-center justify-center group overflow-hidden">
                <img
                  src={categoryWorlds[activeCategoryWorld].image}
                  alt={categoryWorlds[activeCategoryWorld].alt}
                  className="w-full h-full object-cover opacity-90 transition-all duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/products/3m/3m-perfect-it-ex-rubbing-compound.jpg";
                  }}
                />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col gap-2">
                      <span className="font-bold text-[10px] text-[#FF4B00] uppercase tracking-widest">
                        Active Visual
                      </span>
                      <p className="text-sm text-[#D8D8D5] max-w-[240px] leading-relaxed">
                        {categoryWorlds[activeCategoryWorld].desc}
                      </p>
                    </div>
                    <Link
                      to="/products/3m-perfect-it-ex-ac-rubbing-compound"
                      className="font-bold text-xs text-[#FF4B00] uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform"
                    >
                      <span>EXPLORE</span>
                      <span className="text-base">↗</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 / FEATURED PRODUCT STAGE */}
      <section className="relative w-full py-20 sm:py-32 bg-[#F5F4EF] flex items-center overflow-hidden border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Product Visual */}
            <div className="col-span-12 md:col-span-7 relative">
              <div className="relative aspect-square md:aspect-[4/3] bg-white border border-[#D8D8D5] flex items-center justify-center overflow-hidden">
                <img
                  src="/images/products/3m/3m-perfect-it-ex-rubbing-compound.jpg"
                  alt="3M™ Perfect-It™ EX AC Rubbing Compound"
                  className="h-[85%] w-auto object-contain drop-shadow-2xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/products/3m/3m-perfect-it-ex-rubbing-compound.jpg";
                  }}
                />
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FF4B00]" />
                  <span className="font-bold text-[10px] uppercase tracking-widest text-[#111111]">
                    Verified Performance
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
              <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#FF4B00] mb-2">
                03 / FEATURED
              </span>
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl text-[#111111] uppercase tracking-tighter leading-none mb-6">
                ONE <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">object.</span><br />
                ONE <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">purpose.</span>
              </h2>

              <div className="space-y-4 mb-8">
                <span className="font-bold text-xs uppercase tracking-widest text-[#858585] block">
                  Compounds &amp; Polishes — 3M™
                </span>
                <h3 className="font-manrope font-bold text-2xl uppercase text-[#111111]">
                  3M™ Perfect-It™ EX AC Rubbing Compound
                </h3>
                <p className="text-sm sm:text-base text-[#5f5e5e] leading-relaxed">
                  A high-performance rubbing compound designed for removing P1200 or finer sand scratches. Delivering a smooth, flawless finish essential for premium paint correction before final polishing.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  to="/products/3m-perfect-it-ex-ac-rubbing-compound"
                  className="w-full py-4 bg-[#111111] text-white font-bold text-xs uppercase tracking-widest text-center hover:bg-[#FF4B00] transition-colors"
                >
                  ENQUIRE ABOUT THIS PRODUCT →
                </Link>
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp}?text=Enquiry%20regarding%203M%20Rubbing%20Compound`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 border border-[#111111] text-[#111111] font-bold text-xs uppercase tracking-widest text-center hover:bg-[#111111] hover:text-white transition-colors"
                >
                  WHATSAPP TMR →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 / THE PRODUCT RUNWAY (PRODUCT IN PRACTICE Showcase) */}
      <section className="relative w-full py-20 sm:py-32 bg-[#111111] text-white overflow-hidden" id="product-runway">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (~60%): Large Full-Height Local Cinematic Video */}
            <div className="col-span-12 md:col-span-7 relative">
              <div className="relative aspect-video md:aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl group">
                <video
                  src="/videos/products/product-runway-paint-correction.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                {/* Subtle dark gradient overlay for premium transition */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FF4B00] animate-pulse" />
                  <span className="font-manrope font-bold text-[10px] uppercase tracking-widest text-white/80">
                    Product In Practice — Paint Refinement
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column (~40%): Product Title, Factual Description, CTAs */}
            <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
              <h3 className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tighter mb-4 text-white leading-tight">
                3M™ Perfect-It™ EX AC Rubbing Compound
              </h3>

              <p className="font-manrope text-sm sm:text-base text-[#D8D8D5] mb-8 leading-relaxed font-normal">
                A high-performance rubbing compound engineered to remove P1200 or finer sand scratches during automotive paint correction while leaving a high-gloss finish on clear coats.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products/3m-perfect-it-ex-ac-rubbing-compound"
                  className="px-8 py-4 bg-[#FF4B00] text-white font-bold text-xs uppercase tracking-widest text-center hover:bg-white hover:text-[#111111] transition-colors"
                >
                  ENQUIRE ABOUT THIS PRODUCT →
                </Link>
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp}?text=Enquiry%20regarding%203M%20Rubbing%20Compound`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-white/20 text-white font-bold text-xs uppercase tracking-widest text-center hover:bg-white hover:text-[#111111] transition-colors"
                >
                  WHATSAPP TMR →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 / DOCUMENTATION */}
      <section className="relative w-full py-20 sm:py-32 bg-[#F5F4EF] border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-7">
              <div className="aspect-[4/3] bg-white border border-[#D8D8D5] flex items-center justify-center p-8 relative overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida/AP1WRLu8fvzCmL1Ys9GLkUzSU5HhD4aQ6ZLLWAHXTqenLi5WiwmIX18xcp0jlNLKmqH_e7lw5xAFHik0G5B23Vy35bkB7Q-bbDcqwUWx6q6ZM_iWwzuHS9ABBIcYXr9mMvobZk4x50XgI0oEJ3WbFhOlnuWu_W--df5DnVVCjsbbWAzd_Qeosio4qVwTQDlSt_kRCHPUhV4p6faA7WLIanV8DX3UTNd0st4LOSN8LvB-pz0llMz2N0wzl-0K6W4"
                  alt="3M Professional compound technical documentation view"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
              <span className="font-bold text-xs text-[#FF4B00] uppercase tracking-widest mb-2">
                05 / DOCUMENTATION
              </span>
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl text-[#111111] uppercase tracking-tighter leading-none mb-6">
                THE OBJECT,<br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">closer.</span>
              </h2>

              <div className="grid grid-cols-2 gap-6 py-6 border-y border-[#D8D8D5] mb-6">
                <div>
                  <span className="text-[10px] text-[#858585] uppercase tracking-widest block mb-1">Brand</span>
                  <span className="font-bold text-sm text-[#111111]">3M™ Professional</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#858585] uppercase tracking-widest block mb-1">Category</span>
                  <span className="font-bold text-sm text-[#111111]">Compounds</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#858585] uppercase tracking-widest block mb-1">Grade</span>
                  <span className="font-bold text-sm text-[#111111]">P1200+ Refinement</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#858585] uppercase tracking-widest block mb-1">Finish</span>
                  <span className="font-bold text-sm text-[#111111]">High-Gloss</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  to="/products/3m-perfect-it-ex-ac-rubbing-compound"
                  className="w-full py-4 bg-[#111111] text-white font-bold text-xs uppercase tracking-widest text-center hover:bg-[#FF4B00] transition-colors"
                >
                  VIEW PRODUCT DETAILS →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 / THE COLLECTION CATALOGUE */}
      <section className="w-full py-20 sm:py-32 bg-white border-b border-[#D8D8D5]" id="product-catalogue">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <span className="font-bold text-xs text-[#FF4B00] uppercase tracking-widest block mb-2">
                07 / THE COLLECTION
              </span>
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl uppercase tracking-tighter text-[#111111] leading-none">
                THE <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">products.</span>
              </h2>
            </div>

            <div className="w-full md:w-auto flex flex-col gap-4 items-end">
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="FIND A PRODUCT"
                  className="w-full bg-transparent border-b border-[#111111]/20 py-2 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-[#FF4B00]"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                {["ALL", "ABRASIVES", "CLEANING", "POLISHING", "PROTECTION", "FILMS", "TOOLS", "ACCESSORIES"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedCategoryFilter(filter)}
                    className={`text-[10px] font-bold uppercase tracking-widest ${
                      selectedCategoryFilter === filter
                        ? "text-[#FF4B00] border-b border-[#FF4B00]"
                        : "text-[#858585] hover:text-[#111111]"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Cards Rail */}
        <div className="w-full bg-[#111418] py-16 px-5 md:px-16">
          <div className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 01 */}
            <Link
              to="/products/3m-perfect-it-ex-ac-rubbing-compound"
              className="bg-white/5 border border-white/10 p-6 flex flex-col justify-between group hover:border-[#FF4B00]/50 transition-all"
            >
              <div className="aspect-[4/3] mb-6 relative flex items-center justify-center bg-white/5 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida/AP1WRLvJ508kwagTZ4cJpG-maozx3-ILTksKUUwh4SSqoA0kl0SKpeXWtiKENVLXE1qjYqSsd_EFhRMUKIxFDcV31DwwiHcJNX_8xh2ZjdvAEpQ6b6SGja14HHOpAygu0MYKZT5zqmcagpSmWY7rEBEzbKglhYGHOVJYKb2xYp4wPmj-J67jPJjAAZJ95dhCOEiPIEAk49bDIHNK42fafOasDXaJ5vXeJHSBSInagLdqw4EFCD6Cmbc_2aQGTw"
                  alt="3M Rubbing Compound"
                  className="w-3/4 h-3/4 object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-[#FF4B00] uppercase mb-2">
                  <span>01</span>
                  <span className="text-white/40">PN: 36060</span>
                </div>
                <h3 className="font-manrope font-bold text-lg text-white uppercase mb-2 group-hover:text-[#FF4B00] transition-colors">
                  3M™ Perfect-It™ EX AC Rubbing Compound
                </h3>
                <p className="text-xs text-[#858585] line-clamp-2 leading-relaxed">
                  High-performance paint correction for removing P1200 or finer sand scratches.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 mt-6 flex justify-between items-center text-xs font-bold text-[#FF4B00] uppercase tracking-widest">
                <span>VIEW PRODUCT</span>
                <span>→</span>
              </div>
            </Link>

            {/* Card 02 */}
            <Link
              to="/products/3m-perfect-it-ex-ac-rubbing-compound"
              className="bg-white/5 border border-white/10 p-6 flex flex-col justify-between group hover:border-[#315BFF]/50 transition-all"
            >
              <div className="aspect-[4/3] mb-6 relative flex items-center justify-center bg-white/5 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida/AP1WRLu8fvzCmL1Ys9GLkUzSU5HhD4aQ6ZLLWAHXTqenLi5WiwmIX18xcp0jlNLKmqH_e7lw5xAFHik0G5B23Vy35bkB7Q-bbDcqwUWx6q6ZM_iWwzuHS9ABBIcYXr9mMvobZk4x50XgI0oEJ3WbFhOlnuWu_W--df5DnVVCjsbbWAzd_Qeosio4qVwTQDlSt_kRCHPUhV4p6faA7WLIanV8DX3UTNd0st4LOSN8LvB-pz0llMz2N0wzl-0K6W4"
                  alt="3M Trizact"
                  className="w-3/4 h-3/4 object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-[#315BFF] uppercase mb-2">
                  <span>02</span>
                  <span className="text-white/40">PN: 02085</span>
                </div>
                <h3 className="font-manrope font-bold text-lg text-white uppercase mb-2 group-hover:text-[#315BFF] transition-colors">
                  3M™ Trizact™ Performance Abrasives
                </h3>
                <p className="text-xs text-[#858585] line-clamp-2 leading-relaxed">
                  Structured abrasive technology for uniform finish and faster polishing.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 mt-6 flex justify-between items-center text-xs font-bold text-[#315BFF] uppercase tracking-widest">
                <span>VIEW PRODUCT</span>
                <span>→</span>
              </div>
            </Link>

            {/* Card 03 */}
            <Link
              to="/products/3m-perfect-it-ex-ac-rubbing-compound"
              className="bg-white/5 border border-white/10 p-6 flex flex-col justify-between group hover:border-[#31D6B1]/50 transition-all"
            >
              <div className="aspect-[4/3] mb-6 relative flex items-center justify-center bg-white/5 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida/AP1WRLu8fvzCmL1Ys9GLkUzSU5HhD4aQ6ZLLWAHXTqenLi5WiwmIX18xcp0jlNLKmqH_e7lw5xAFHik0G5B23Vy35bkB7Q-bbDcqwUWx6q6ZM_iWwzuHS9ABBIcYXr9mMvobZk4x50XgI0oEJ3WbFhOlnuWu_W--df5DnVVCjsbbWAzd_Qeosio4qVwTQDlSt_kRCHPUhV4p6faA7WLIanV8DX3UTNd0st4LOSN8LvB-pz0llMz2N0wzl-0K6W4"
                  alt="3M Quick Wax"
                  className="w-3/4 h-3/4 object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-[#31D6B1] uppercase mb-2">
                  <span>03</span>
                  <span className="text-white/40">PN: 39034</span>
                </div>
                <h3 className="font-manrope font-bold text-lg text-white uppercase mb-2 group-hover:text-[#31D6B1] transition-colors">
                  3M™ Quick Wax Spray
                </h3>
                <p className="text-xs text-[#858585] line-clamp-2 leading-relaxed">
                  Carnauba wax formula for a deep, high-gloss shine in minutes.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 mt-6 flex justify-between items-center text-xs font-bold text-[#31D6B1] uppercase tracking-widest">
                <span>VIEW PRODUCT</span>
                <span>→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 08 / VERIFIED SOURCES */}
      <section className="w-full py-20 sm:py-32 bg-[#111111] text-white border-t border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="col-span-12 md:col-span-6">
              <span className="font-bold text-xs text-[#FF4B00] uppercase tracking-widest block mb-2">
                08 / SOURCES
              </span>
              <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tighter text-white">
                REAL PRODUCTS.<br />VERIFIED SOURCES.
              </h2>
              <p className="text-sm text-[#D8D8D5] max-w-sm mt-4 leading-relaxed">
                Product identity and imagery are based on verified manufacturer sources and client-approved product assets.
              </p>
            </div>

            <div className="col-span-12 md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="border-t border-white/10 pt-6">
                <span className="font-bold text-[10px] text-[#FF4B00] uppercase tracking-widest block mb-2">
                  OFFICIAL PRODUCT SOURCE
                </span>
                <p className="text-xs text-[#858585] leading-relaxed">
                  3M™ Automotive Aftermarket Division (AAD). All technical specifications and product identifiers are sourced from official 3M documentation.
                </p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <span className="font-bold text-[10px] text-[#FF4B00] uppercase tracking-widest block mb-2">
                  CLIENT-APPROVED ASSET
                </span>
                <p className="text-xs text-[#858585] leading-relaxed">
                  Tamilmani &amp; Co. (TMR Car Care) proprietary detailing materials and verified service equipment assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 / DISCOVER / FIND BY PURPOSE */}
      <section className="w-full py-20 sm:py-32 bg-[#111111] text-white border-t border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-7">
              <span className="font-bold text-xs text-[#FF4B00] uppercase tracking-widest block mb-2">
                06 / DISCOVER
              </span>
              <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tighter text-white mb-4">
                WHAT ARE YOU /<br />TRYING TO DO?
              </h2>
              <p className="text-sm text-[#D8D8D5] max-w-md mb-12">
                Start with the result you're looking for. We'll guide you toward the relevant product category.
              </p>

              <div className="flex flex-col border-t border-white/10">
                {purposeRows.map((row, idx) => {
                  const isActive = activePurpose === idx;
                  return (
                    <div
                      key={row.id}
                      onClick={() => setActivePurpose(idx)}
                      onMouseEnter={() => setActivePurpose(idx)}
                      className={`group py-6 border-b border-white/10 flex flex-col gap-2 cursor-pointer transition-colors ${
                        isActive ? "bg-white/5" : "hover:bg-white/5"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-6">
                          <span className="font-bold text-xs text-[#FF4B00]">{row.code}</span>
                          <h3
                            className={`font-manrope font-extrabold text-xl sm:text-3xl uppercase tracking-tight ${
                              isActive ? "text-[#FF4B00]" : "text-white/40 group-hover:text-white"
                            }`}
                          >
                            {row.title}
                          </h3>
                        </div>
                        <span className="text-xl text-white/40 group-hover:text-[#FF4B00]">↗</span>
                      </div>
                      {isActive && (
                        <div className="pl-12 pt-2 flex justify-between items-center">
                          <span className="text-xs text-[#858585] uppercase tracking-widest">{row.cat}</span>
                          <Link
                            to="/products/3m-perfect-it-ex-ac-rubbing-compound"
                            className="text-xs font-bold text-[#FF4B00] uppercase tracking-widest flex items-center gap-1"
                          >
                            <span>EXPLORE PRODUCTS</span>
                            <span>↗</span>
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 / PRODUCT FAQ */}
      <section className="w-full py-20 sm:py-32 bg-white border-t border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="flex flex-col md:flex-row gap-12 sm:gap-16">
            <div className="md:w-1/3 space-y-4">
              <span className="font-bold text-xs text-[#FF4B00] uppercase tracking-widest block">
                10 / QUESTIONS
              </span>
              <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tighter text-[#111111]">
                PRODUCT<br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">questions.</span>
              </h2>
              <p className="text-sm text-[#5f5e5e] leading-relaxed">
                Technical and service-focused answers regarding our curated product collection.
              </p>
            </div>

            <div className="md:w-2/3 flex flex-col border-t border-[#D8D8D5]">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="border-b border-[#D8D8D5]">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full py-6 flex justify-between items-center text-left group"
                    >
                      <span className="font-manrope font-bold text-base sm:text-xl text-[#111111] group-hover:text-[#FF4B00] transition-colors">
                        {faq.q}
                      </span>
                      <span className="text-2xl text-[#FF4B00] transition-transform duration-300">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pb-6">
                        <p className="font-manrope text-sm sm:text-base text-[#5f5e5e] leading-relaxed">
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

      {/* 11 / FINAL CINEMATIC CTA */}
      <section className="relative w-full py-24 sm:py-32 bg-[#111111] text-white text-center">
        <div className="relative z-10 max-w-3xl mx-auto px-5 space-y-8">
          <span className="font-bold text-xs text-[#FF4B00] uppercase tracking-widest block">
            11 / NEXT
          </span>
          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-white leading-none">
            LOOKING FOR<br />
            <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">something specific?</span>
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}?text=Product%20Vault%20Enquiry`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF4B00] text-white px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-colors"
            >
              WHATSAPP TMR →
            </a>
            <a
              href={`tel:${companyData.contact.phone}`}
              className="border border-white/20 text-white px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-colors"
            >
              CALL TMR →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
