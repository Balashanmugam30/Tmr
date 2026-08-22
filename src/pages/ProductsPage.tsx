import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '@/data/company';
import { productsData } from '@/data/products';
import { ProductHeroCarousel, ProductItem } from '@/components/ProductHeroCarousel';

export const ProductsPage: React.FC = () => {
  const [activeCategoryWorld, setActiveCategoryWorld] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('ALL');
  const [inspectPos, setInspectPos] = useState<{ x: number; y: number; active: boolean }>({
    x: 50,
    y: 50,
    active: false,
  });

  const runwayScrollRef = useRef<HTMLDivElement>(null);
  const isTrainHoveredRef = useRef<boolean>(false);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const animateTrain = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (runwayScrollRef.current && !isTrainHoveredRef.current) {
        const speed = 30; // 30 px per second linear speed
        runwayScrollRef.current.scrollLeft += speed * deltaTime;

        const maxScroll = runwayScrollRef.current.scrollWidth - runwayScrollRef.current.clientWidth;
        if (runwayScrollRef.current.scrollLeft >= maxScroll - 4) {
          runwayScrollRef.current.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(animateTrain);
    };

    animationFrameId = requestAnimationFrame(animateTrain);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const scrollRunway = (direction: 'left' | 'right') => {
    if (runwayScrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      runwayScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      selectedCategoryFilter === 'ALL' ||
      product.category.toUpperCase() === selectedCategoryFilter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleMouseMoveInspect = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setInspectPos({ x, y, active: true });
  };

  const handleMouseLeaveInspect = () => {
    setInspectPos((prev) => ({ ...prev, active: false }));
  };

  useEffect(() => {
    document.title = "TMR Car Care — The Product Vault";
    window.scrollTo(0, 0);
  }, []);

  const heroProducts: ProductItem[] = [
    {
      id: '3m-rubbing-compound',
      name: '3M™ Perfect-It™ EX AC Rubbing Compound',
      category: 'Compounds & Polishes',
      image: '/images/products/3m/3m-hero-rubbing-compound-v2.jpg',
      slug: '3m-perfect-it-ex-ac-rubbing-compound',
    },
    {
      id: '3m-trizact',
      name: '3M™ Trizact™ Performance Abrasives',
      category: 'Abrasives & Leveling',
      image: '/images/products/3m/3m-hero-trizact-v2.jpg',
      slug: '3m-perfect-it-ex-ac-rubbing-compound',
    },
    {
      id: 'meguiars-m210',
      name: "Meguiar's Mirror Glaze M210 Ultra Finishing Polish",
      category: 'Finishing Compounds',
      image: '/images/products/3m/meguiars-hero-m210-v2.jpg',
      slug: '3m-perfect-it-ex-ac-rubbing-compound',
    },
    {
      id: '3m-quick-wax',
      name: '3M™ Quick Wax Spray Sealant',
      category: 'Protection & Shine',
      image: '/images/products/3m/3m-hero-quick-wax-v2.jpg',
      slug: '3m-perfect-it-ex-ac-rubbing-compound',
    },
    {
      id: '3m-machine-polish',
      name: '3M™ Perfect-It™ Machine Polish',
      category: 'Finish Polishes',
      image: '/images/products/3m/3m-hero-machine-polish-v2.jpg',
      slug: '3m-perfect-it-ex-ac-rubbing-compound',
    },
  ];

  const categoryWorlds = [
    {
      id: 0,
      title: "Cleaning",
      desc: "Professional vehicle-cleaning products for wash and maintenance applications.",
      image: "/images/products/3m/3m-cat-cleaning-v2.jpg",
      alt: "3M professional vehicle cleaning shampoo and quick wax spray",
    },
    {
      id: 1,
      title: "Polishing",
      desc: "High-performance compounds, polishes, and pads for paint correction.",
      image: "/images/products/3m/3m-cat-polishing-v2.jpg",
      alt: "3M Perfect-It EX AC Rubbing Compound bottle",
    },
    {
      id: 2,
      title: "Protection",
      desc: "Nanoceramic, wax, and sealant protection treatments.",
      image: "/images/products/3m/3m-cat-protection-v2.jpg",
      alt: "3M Ceramic Coating paint protection kit",
    },
    {
      id: 3,
      title: "Films",
      desc: "Self-healing paint protection films and sun-control solar films.",
      image: "/images/products/3m/3m-cat-films-v2.jpg",
      alt: "3M Scotchgard Paint Protection Film Pro box and roll",
    },
    {
      id: 4,
      title: "Tools",
      desc: "Dual-action polishers, inspection lights, and precision detailing equipment.",
      image: "/images/products/3m/3m-cat-tools-v2.jpg",
      alt: "3M compounding and polishing foam pad tools",
    },
    {
      id: 5,
      title: "Accessories",
      desc: "Microfiber towels, applicators, and premium vehicle cabin accessories.",
      image: "/images/products/3m/3m-cat-accessories-v2.jpg",
      alt: "Premium 3M microfiber detailing accessories",
    },
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
              <div className="mb-8" />

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

      {/* SECTION 03 — FEATURED PRODUCT (TRUE 50/50 FULL-BLEED SPLIT) */}
      <section className="relative w-full bg-[#F5F4EF] border-b border-[#D8D8D5] overflow-hidden" id="featured-product">
        <div className="w-full grid grid-cols-1 md:grid-cols-12 min-h-[550px] md:min-h-[650px] items-stretch">
          {/* Left 50%: TRUE FULL-BLEED MEDIA - NO GAP, NO MARGIN, NO BORDER, NO CONTAINED CARD */}
          <div className="col-span-12 md:col-span-6 relative bg-[#141414] overflow-hidden min-h-[350px] md:min-h-full flex items-center justify-center">
            <img
              src="/images/products/3m/3m-featured-rubbing-compound-v2.jpg"
              alt="3M™ Perfect-It™ EX AC Rubbing Compound"
              className="w-full h-full object-cover md:object-contain p-6 md:p-12 drop-shadow-2xl transition-transform duration-700 hover:scale-[1.03]"
            />
            <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <div className="w-2 h-2 rounded-full bg-[#FF4B00] animate-pulse" />
              <span className="font-manrope font-bold text-[10px] uppercase tracking-widest text-white">
                Verified Product Specimen
              </span>
            </div>
          </div>

          {/* Right 50%: EDITORIAL CONTENT */}
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-24 bg-[#F5F4EF]">
            <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl text-[#111111] uppercase tracking-tighter leading-none mb-6">
              ONE <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">object.</span><br />
              ONE <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">purpose.</span>
            </h2>

            <div className="space-y-4 mb-8">
              <h3 className="font-manrope font-bold text-2xl sm:text-3xl uppercase text-[#111111] leading-tight">
                3M™ Perfect-It™ EX AC Rubbing Compound
              </h3>
              <p className="font-manrope text-sm sm:text-base text-[#5f5e5e] leading-relaxed">
                A high-performance rubbing compound designed for removing P1200 or finer sand scratches. Delivering a smooth, flawless finish essential for premium paint correction before final polishing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products/3m-perfect-it-ex-ac-rubbing-compound"
                className="w-full sm:w-auto px-8 py-4 bg-[#111111] text-white font-bold text-xs uppercase tracking-widest text-center hover:bg-[#FF4B00] transition-colors"
              >
                ENQUIRE ABOUT THIS PRODUCT →
              </Link>
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=Enquiry%20regarding%203M%20Rubbing%20Compound`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 border border-[#111111] text-[#111111] font-bold text-xs uppercase tracking-widest text-center hover:bg-[#111111] hover:text-white transition-colors"
              >
                WHATSAPP TMR →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — PRODUCT IN PRACTICE (FULL-WIDTH CINEMATIC VIDEO - EDGE TO EDGE) */}
      <section className="relative w-full min-h-[75vh] bg-black text-white overflow-hidden flex items-center justify-center" id="product-runway">
        {/* Full-bleed edge-to-edge local MP4 video */}
        <video
          src="/videos/products/products-paint-correction-practice.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.01]"
        />

        {/* Subtle dark gradient overlay for cinematic contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60 pointer-events-none" />

        {/* Centered Restrained Text Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-6 py-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-2">
            <div className="w-2 h-2 rounded-full bg-[#FF4B00] animate-pulse" />
            <span className="font-manrope font-bold text-[10px] uppercase tracking-widest text-white/90">
              Product In Practice — Automotive Paint Correction
            </span>
          </div>

          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter text-white leading-tight">
            3M™ PERFECT-IT™ EX AC<br />
            <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">rubbing compound.</span>
          </h2>

          <p className="font-manrope text-sm sm:text-base md:text-lg text-[#D8D8D5] max-w-2xl mx-auto leading-relaxed font-normal">
            A high-performance rubbing compound engineered to remove P1200 or finer sand scratches during automotive paint correction while leaving a high-gloss finish on clear coats.
          </p>

          <div className="pt-4">
            <Link
              to="/products/3m-perfect-it-ex-ac-rubbing-compound"
              className="inline-block px-10 py-4 bg-[#FF4B00] text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-colors shadow-2xl"
            >
              VIEW PRODUCT DETAILS →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 05 — TECHNICAL PRODUCT SPECIMEN / DOSSIER */}
      <section className="relative w-full py-20 sm:py-32 bg-[#F5F4EF] border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 w-full">
          {/* Section Headline */}
          <div className="mb-12 text-center">
            <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl text-[#111111] uppercase tracking-tighter leading-none">
              THE OBJECT,<br />
              <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">closer.</span>
            </h2>
          </div>

          {/* Central Specimen Stage with Callouts & Cursor Magnification */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <div
              onMouseMove={handleMouseMoveInspect}
              onMouseLeave={handleMouseLeaveInspect}
              className="relative aspect-square md:aspect-[16/10] bg-white border border-[#D8D8D5] flex items-center justify-center p-8 overflow-hidden cursor-crosshair group shadow-sm rounded-lg"
            >
              <img
                src="/images/products/3m/3m-specimen-rubbing-compound-v2.jpg"
                alt="3M™ Perfect-It™ EX AC Rubbing Compound technical specimen view"
                className="w-3/5 h-3/5 object-contain transition-transform duration-300 ease-out"
                style={{
                  transform: inspectPos.active ? 'scale(1.18)' : 'scale(1)',
                  transformOrigin: `${inspectPos.x}% ${inspectPos.y}%`,
                }}
              />

              {/* Technical Callout Markers around Specimen */}
              <div className="absolute top-6 left-6 border-l-2 border-[#FF4B00] pl-3 py-1 bg-white/80 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-[#111111] shadow-sm">
                PART NUMBER: 36060
              </div>
              <div className="absolute top-6 right-6 border-r-2 border-[#FF4B00] pr-3 py-1 bg-white/80 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-[#111111] shadow-sm text-right">
                REFINEMENT: P1200+
              </div>
              <div className="absolute bottom-6 left-6 border-l-2 border-[#111111] pl-3 py-1 bg-white/80 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-[#111111] shadow-sm">
                CATEGORY: COMPOUNDS
              </div>
              <div className="absolute bottom-6 right-6 border-r-2 border-[#111111] pr-3 py-1 bg-white/80 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-[#111111] shadow-sm text-right">
                FINISH: HIGH-GLOSS
              </div>

              {/* Floating Technical Inspection Badge following cursor */}
              {inspectPos.active && (
                <div
                  className="absolute pointer-events-none z-20 px-3 py-1.5 bg-[#111111] text-white rounded-md text-[10px] font-bold uppercase tracking-widest shadow-xl flex items-center gap-2 transition-opacity duration-200"
                  style={{
                    left: `calc(${inspectPos.x}% - 40px)`,
                    top: `calc(${inspectPos.y}% - 45px)`,
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF4B00] animate-ping" />
                  <span>PN: 36060 | P1200+ REFINEMENT</span>
                </div>
              )}
            </div>
          </div>

          {/* Structured Datasheet Grid */}
          <div className="max-w-4xl mx-auto bg-white border border-[#D8D8D5] p-8 sm:p-12 shadow-sm rounded-lg">
            <h3 className="font-manrope font-extrabold text-2xl uppercase tracking-tight text-[#111111] mb-6 pb-4 border-b border-[#D8D8D5]">
              Technical Datasheet
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 pb-8 border-b border-[#D8D8D5] mb-8">
              <div>
                <span className="text-[10px] text-[#858585] uppercase tracking-widest block mb-1">Product Name</span>
                <span className="font-bold text-xs sm:text-sm text-[#111111] leading-tight block">3M™ Perfect-It™ EX AC</span>
              </div>
              <div>
                <span className="text-[10px] text-[#858585] uppercase tracking-widest block mb-1">Part Number</span>
                <span className="font-bold text-xs sm:text-sm text-[#111111] block">PN 36060</span>
              </div>
              <div>
                <span className="text-[10px] text-[#858585] uppercase tracking-widest block mb-1">Category</span>
                <span className="font-bold text-xs sm:text-sm text-[#111111] block">Compounds &amp; Polishes</span>
              </div>
              <div>
                <span className="text-[10px] text-[#858585] uppercase tracking-widest block mb-1">Application</span>
                <span className="font-bold text-xs sm:text-sm text-[#111111] block">Paint Correction</span>
              </div>
              <div>
                <span className="text-[10px] text-[#858585] uppercase tracking-widest block mb-1">Scratch Grade</span>
                <span className="font-bold text-xs sm:text-sm text-[#111111] block">P1200 or Finer</span>
              </div>
              <div>
                <span className="text-[10px] text-[#858585] uppercase tracking-widest block mb-1">Surface Finish</span>
                <span className="font-bold text-xs sm:text-sm text-[#111111] block">High-Gloss Refinement</span>
              </div>
            </div>

            <div className="flex justify-center">
              <Link
                to="/products/3m-perfect-it-ex-ac-rubbing-compound"
                className="w-full sm:w-auto px-10 py-4 bg-[#111111] text-white font-bold text-xs uppercase tracking-widest text-center hover:bg-[#FF4B00] transition-colors block"
              >
                VIEW PRODUCT DETAILS →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THE COLLECTION CATALOGUE (DYNAMIC EDITORIAL PRODUCT RUNWAY SLIDER - VIEWPORT EDGE BLEED) */}
      <section className="relative w-full bg-gradient-to-b from-[#F5F4EF] via-[#141414] to-[#050505] text-white py-20 sm:py-32 overflow-hidden" id="product-catalogue">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-10">
            <div>
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl uppercase tracking-tighter text-[#111111] leading-none mb-2">
                THE <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">products.</span>
              </h2>
              <p className="font-manrope text-xs sm:text-sm text-[#858585] uppercase tracking-widest">
                Curated automotive-care products &amp; professional detailing supplies
              </p>
            </div>

            <div className="w-full md:w-auto flex flex-col gap-6 items-start md:items-end">
              {/* FIND A PRODUCT Search Input */}
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="FIND A PRODUCT (BY NAME, PN, OR CATEGORY)..."
                  aria-label="Find a product"
                  className="w-full bg-white/5 border-b border-[#111111]/30 md:border-white/20 py-2.5 px-3 text-xs font-bold uppercase tracking-widest text-[#111111] md:text-white placeholder-[#858585] focus:outline-none focus:border-[#FF4B00] transition-colors rounded-t"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 text-xs text-[#858585] hover:text-[#FF4B00]"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Category Filter Navigation */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["ALL", "ABRASIVES", "CLEANING", "POLISHING", "PROTECTION", "FILMS", "TOOLS", "ACCESSORIES"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedCategoryFilter(filter)}
                    aria-pressed={selectedCategoryFilter === filter}
                    className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full transition-all ${
                      selectedCategoryFilter === filter
                        ? "bg-[#FF4B00] text-white shadow-md"
                        : "bg-black/10 md:bg-white/5 text-[#5f5e5e] md:text-[#858585] hover:text-[#111111] md:hover:text-white hover:bg-black/20 md:hover:bg-white/10"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Viewport Edge Bleed Container for Train Rail (Headers stay inside max-w-[1360px], Rail extends 100vw) */}
        <div className="w-full relative overflow-hidden">
          <style>{`
            @keyframes tmrContinuousTrain {
              0% { transform: translate3d(0, 0, 0); }
              100% { transform: translate3d(-50%, 0, 0); }
            }
          `}</style>

          <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative flex justify-between items-center mb-4">
            <span className="text-[10px] font-bold text-[#858585] uppercase tracking-widest">
              Showing {filteredProducts.length} Product{filteredProducts.length === 1 ? '' : 's'} — Continuous Linear Runway →
            </span>
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scrollRunway('left')}
                aria-label="Scroll products left"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#FF4B00] hover:border-[#FF4B00] transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => scrollRunway('right')}
                aria-label="Scroll products right"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#FF4B00] hover:border-[#FF4B00] transition-colors"
              >
                →
              </button>
            </div>
          </div>

          {/* Viewport Bleed Train Track (Exact Left Screen Edge to Exact Right Screen Edge) */}
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 sm:px-8 overflow-hidden">
            {filteredProducts.length > 0 ? (
              <div className="relative w-full overflow-hidden pb-8 pt-2">
                <div
                  ref={runwayScrollRef}
                  className="flex gap-6 w-max hover:[animation-play-state:paused]"
                  style={{
                    animation: 'tmrContinuousTrain 32s linear infinite',
                    willChange: 'transform',
                  }}
                >
                  {[...filteredProducts, ...filteredProducts].map((product, idx) => {
                    const uniqueKey = `${product.id}-loop-${idx}`;
                    const isDetailRoute = product.detailRoute.startsWith('/products/');
                    const isServiceRoute = product.detailRoute.startsWith('/services/');

                    return (
                      <div
                        key={uniqueKey}
                        className="flex-none w-[82vw] sm:w-[320px] md:w-[360px] lg:w-[380px] bg-[#111418] border border-white/10 p-6 flex flex-col justify-between group hover:border-[#FF4B00]/60 transition-all rounded-xl shadow-xl"
                      >
                        {/* Product Image Stage */}
                        <div className="aspect-[4/3] mb-6 relative flex items-center justify-center bg-white/5 rounded-lg overflow-hidden p-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-4/5 h-4/5 object-contain group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              e.currentTarget.style.opacity = '0.7';
                            }}
                          />
                          <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/60 backdrop-blur-sm text-[9px] font-bold uppercase tracking-widest text-[#FF4B00] rounded">
                            {product.category}
                          </div>
                        </div>

                        {/* Meta & Title */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-center text-xs font-bold text-[#FF4B00] uppercase mb-2">
                              <span>0{(idx % filteredProducts.length) + 1}</span>
                              <span className="text-white/40">{product.sku}</span>
                            </div>
                            <h3 className="font-manrope font-bold text-lg text-white uppercase mb-2 group-hover:text-[#FF4B00] transition-colors leading-snug">
                              {product.name}
                            </h3>
                            <p className="text-xs text-[#858585] line-clamp-2 leading-relaxed mb-6 font-normal">
                              {product.shortDescription}
                            </p>
                          </div>

                          {/* Card Smart CTA Link */}
                          {isDetailRoute ? (
                            <Link
                              to={product.detailRoute}
                              className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-bold text-[#FF4B00] uppercase tracking-widest group-hover:text-white transition-colors"
                            >
                              <span>VIEW PRODUCT DETAILS</span>
                              <span>→</span>
                            </Link>
                          ) : isServiceRoute ? (
                            <Link
                              to={product.detailRoute}
                              className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-bold text-[#FF4B00] uppercase tracking-widest group-hover:text-white transition-colors"
                            >
                              <span>VIEW SERVICE</span>
                              <span>→</span>
                            </Link>
                          ) : (
                            <a
                              href={`https://wa.me/${companyData.contact.whatsapp}?text=Enquiry%20regarding%20${encodeURIComponent(product.name)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-bold text-[#FF4B00] uppercase tracking-widest group-hover:text-white transition-colors"
                            >
                              <span>ENQUIRE VIA WHATSAPP</span>
                              <span>→</span>
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* Empty Filter State */
              <div className="w-full py-16 px-8 bg-[#111418] border border-white/10 rounded-xl text-center space-y-4">
                <p className="font-manrope text-base text-[#D8D8D5] uppercase font-bold tracking-wider">
                  No products match your search query or filter selection.
                </p>
                <p className="text-xs text-[#858585]">
                  Try clearing your search keyword or switching category filters to view available items.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategoryFilter('ALL');
                    setSearchQuery('');
                  }}
                  className="px-6 py-3 bg-[#FF4B00] text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-colors"
                >
                  RESET ALL FILTERS →
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* VERIFIED SOURCES & PROVENANCE TRUST STRIP */}
      <section className="w-full py-12 sm:py-16 bg-[#0B0B0B] text-white border-t border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Section Header & Concise Summary */}
            <div className="col-span-12 md:col-span-5 lg:col-span-4">
              <span className="text-[10px] font-bold text-[#FF4B00] uppercase tracking-widest block mb-2">
                AUTHENTICITY &amp; PROVENANCE
              </span>
              <h2 className="font-manrope font-extrabold text-2xl sm:text-4xl uppercase tracking-tighter text-white leading-tight">
                REAL PRODUCTS.<br />
                <span className="text-[#FF4B00]">VERIFIED SOURCES.</span>
              </h2>
              <p className="text-xs text-[#858585] mt-3 leading-relaxed max-w-sm">
                Product identity, product identifiers and selected product imagery are based on verified manufacturer information and approved TMR assets.
              </p>
            </div>

            {/* Right: Two Provenance Columns */}
            <div className="col-span-12 md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 md:pl-4">
              {/* Column 01 */}
              <div className="group border-t border-white/10 hover:border-[#FF4B00] pt-5 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-manrope font-extrabold text-sm sm:text-base text-white uppercase tracking-tight group-hover:text-[#FF4B00] transition-colors">
                    3M™ Automotive Aftermarket
                  </span>
                  <span className="text-xs text-[#858585] group-hover:text-[#FF4B00] group-hover:translate-x-1 transition-all">↗</span>
                </div>
                <span className="font-bold text-[9px] text-[#FF4B00] uppercase tracking-widest block mb-2">
                  Official Manufacturer Source
                </span>
                <p className="text-xs text-[#858585] leading-relaxed">
                  Product identity and technical product information are verified against manufacturer documentation.
                </p>
              </div>

              {/* Column 02 */}
              <div className="group border-t border-white/10 hover:border-[#FF4B00] pt-5 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-manrope font-extrabold text-sm sm:text-base text-white uppercase tracking-tight group-hover:text-[#FF4B00] transition-colors">
                    TMR Car Care
                  </span>
                  <span className="text-xs text-[#858585] group-hover:text-[#FF4B00] group-hover:translate-x-1 transition-all">↗</span>
                </div>
                <span className="font-bold text-[9px] text-[#FF4B00] uppercase tracking-widest block mb-2">
                  Client-Approved Assets
                </span>
                <p className="text-xs text-[#858585] leading-relaxed">
                  Selected product imagery and detailing assets are maintained as part of the TMR product catalogue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT FAQ */}
      <section className="w-full py-20 sm:py-32 bg-white border-t border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
            {/* Left Zone: Heading & Context */}
            <div className="md:w-1/3 space-y-4">
              <span className="text-[10px] font-bold text-[#FF4B00] uppercase tracking-widest block">
                INFORMATION &amp; ANSWERS
              </span>
              <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tighter text-[#111111] leading-none">
                PRODUCT<br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">questions.</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#5f5e5e] leading-relaxed max-w-sm">
                Technical and service-focused answers regarding our curated product collection.
              </p>
            </div>

            {/* Right Zone: Full-Width Editorial Horizontal FAQ List */}
            <div className="md:w-2/3 flex flex-col border-t border-[#D8D8D5]">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                const numStr = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;

                return (
                  <div key={idx} className="border-b border-[#D8D8D5] transition-colors">
                    <button
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${idx}`}
                      className="w-full py-6 flex items-center justify-between text-left group gap-4"
                    >
                      <div className="flex items-center gap-6 sm:gap-8 flex-1">
                        <span className={`font-mono text-xs sm:text-sm font-bold tracking-widest transition-colors ${
                          isOpen ? 'text-[#FF4B00]' : 'text-[#858585] group-hover:text-[#111111]'
                        }`}>
                          {numStr}
                        </span>
                        <h3 className={`font-manrope font-extrabold text-base sm:text-xl uppercase tracking-tight transition-colors ${
                          isOpen ? 'text-[#FF4B00]' : 'text-[#111111] group-hover:text-[#FF4B00]'
                        }`}>
                          {faq.q}
                        </h3>
                      </div>
                      <span className="text-xl sm:text-2xl font-bold text-[#FF4B00] transition-transform duration-300 ml-2">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      id={`faq-answer-${idx}`}
                      className={`grid transition-all duration-300 ease-out overflow-hidden ${
                        isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0 pb-0'
                      }`}
                    >
                      <div className="overflow-hidden pl-12 sm:pl-16 pr-4">
                        <p className="font-manrope text-xs sm:text-sm text-[#5f5e5e] leading-relaxed max-w-2xl">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL EDITORIAL CLOSING CTA */}
      <section className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-[#0E0E0E] via-[#0A0A0A] to-[#050505] text-white border-t border-white/10 overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 65%: Large Asymmetric Statement */}
            <div className="col-span-12 md:col-span-7 space-y-4">
              <span className="text-[10px] font-bold text-[#FF4B00] uppercase tracking-widest block">
                DIRECT CONSULTATION
              </span>
              <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter text-white leading-tight">
                LOOKING FOR<br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">something specific?</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#D8D8D5] max-w-lg leading-relaxed pt-1">
                Tell us what you're looking for. We'll help you identify the right product for your treatment.
              </p>
            </div>

            {/* Right 35%: Action Area */}
            <div className="col-span-12 md:col-span-5 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8 lg:pl-12 space-y-5">
              <div>
                <span className="text-[10px] font-bold text-[#FF4B00] uppercase tracking-widest block mb-1">
                  PRODUCT ENQUIRY
                </span>
                <p className="text-xs text-[#858585]">
                  Connect directly with our detailing technicians
                </p>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp}?text=Product%20Vault%20Enquiry`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full px-6 py-4 bg-[#FF4B00] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-between hover:bg-white hover:text-[#111111] transition-all duration-300 rounded"
                >
                  <span>WHATSAPP TMR</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="group w-full px-6 py-4 border border-white/20 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-between hover:bg-white hover:text-[#111111] hover:border-white transition-all duration-300 rounded"
                >
                  <span>CALL TMR</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
