import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '@/data/company';
import { productsData, Product } from '@/data/products';
import { ProductHeroCarousel, ProductItem } from '@/components/ProductHeroCarousel';

export const ProductsPage: React.FC = () => {
  const [activeCategoryWorld, setActiveCategoryWorld] = useState<number>(0);
  const [activePurpose, setActivePurpose] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('ALL');
  const [inspectPos, setInspectPos] = useState<{ x: number; y: number; active: boolean }>({
    x: 50,
    y: 50,
    active: false,
  });

  const trainContainerRef = useRef<HTMLDivElement>(null);
  const isTrainHoveredRef = useRef<boolean>(false);
  const animationFrameRef = useRef<number | null>(null);

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

  // Duplicated sequence for true seamless infinite continuous conveyor train
  const displayProducts = [...filteredProducts, ...filteredProducts];

  // Continuous one-way linear conveyor train effect
  useEffect(() => {
    const step = () => {
      if (trainContainerRef.current && !isTrainHoveredRef.current) {
        const el = trainContainerRef.current;
        el.scrollLeft += 1.2; // Smooth 30px/s linear velocity
        const halfWidth = el.scrollWidth / 2;
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth; // Seamless reset without any jump or flash
        }
      }
      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [filteredProducts]);

  const scrollManual = (direction: 'left' | 'right') => {
    if (trainContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      trainContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

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

  // 100% Unique Dedicated Local Product Images for Hero Runway
  const heroProducts: ProductItem[] = [
    {
      id: '3m-rubbing-compound',
      name: '3M™ Perfect-It™ EX AC Rubbing Compound',
      category: 'Compounds & Polishes',
      image: '/images/products/3m/hero-rubbing-compound.jpg',
      slug: '3m-perfect-it-ex-ac-rubbing-compound',
    },
    {
      id: '3m-trizact',
      name: '3M™ Trizact™ Performance Abrasives',
      category: 'Abrasives & Leveling',
      image: '/images/products/3m/hero-trizact.jpg',
      slug: '3m-perfect-it-ex-ac-rubbing-compound',
    },
    {
      id: 'meguiars-m210',
      name: "Meguiar's Mirror Glaze M210 Ultra Finishing Polish",
      category: 'Finishing Compounds',
      image: '/images/products/3m/hero-m210.jpg',
      slug: '3m-perfect-it-ex-ac-rubbing-compound',
    },
    {
      id: '3m-quick-wax',
      name: '3M™ Quick Wax Spray Sealant',
      category: 'Protection & Shine',
      image: '/images/products/3m/hero-quick-wax.jpg',
      slug: '3m-perfect-it-ex-ac-rubbing-compound',
    },
    {
      id: '3m-machine-polish',
      name: '3M™ Perfect-It™ Machine Polish',
      category: 'Finish Polishes',
      image: '/images/products/3m/hero-machine-polish.jpg',
      slug: '3m-perfect-it-ex-ac-rubbing-compound',
    },
  ];

  // 100% Unique Dedicated Local Product Assets for Category Worlds
  const categoryWorlds = [
    {
      id: 0,
      title: "Cleaning",
      desc: "Professional vehicle-cleaning products for wash and maintenance applications.",
      image: "/images/products/3m/cat-cleaning.jpg",
      alt: "3M professional vehicle cleaning shampoo and wash",
    },
    {
      id: 1,
      title: "Polishing",
      desc: "High-performance compounds, polishes, and pads for paint correction.",
      image: "/images/products/3m/cat-polishing.jpg",
      alt: "3M Perfect-It EX AC Rubbing Compound bottle",
    },
    {
      id: 2,
      title: "Protection",
      desc: "Nanoceramic, wax, and sealant protection treatments.",
      image: "/images/products/3m/cat-protection.jpg",
      alt: "3M Ceramic Coating paint protection kit",
    },
    {
      id: 3,
      title: "Films",
      desc: "Self-healing paint protection films and sun-control solar films.",
      image: "/images/products/3m/cat-films.jpg",
      alt: "3M Scotchgard Paint Protection Film Pro box and roll",
    },
    {
      id: 4,
      title: "Tools",
      desc: "Dual-action polishers, inspection lights, and precision detailing equipment.",
      image: "/images/products/3m/cat-tools.jpg",
      alt: "3M compounding and polishing foam pad tools",
    },
    {
      id: 5,
      title: "Accessories",
      desc: "Microfiber towels, applicators, and premium vehicle cabin accessories.",
      image: "/images/products/3m/cat-accessories.jpg",
      alt: "Premium 3M microfiber detailing accessories",
    },
  ];

  const purposeRows = [
    { id: 0, code: "01", title: "CLEAN THE VEHICLE", cat: "Category: CLEANING", img: "/images/products/3m/disc-clean.jpg" },
    { id: 1, code: "02", title: "REFINE THE PAINT", cat: "Category: POLISHING", img: "/images/products/3m/disc-refine.jpg" },
    { id: 2, code: "03", title: "PROTECT THE SURFACE", cat: "Category: PROTECTION", img: "/images/products/3m/disc-protect.jpg" },
    { id: 3, code: "04", title: "WORK WITH FILM", cat: "Category: FILMS", img: "/images/products/3m/disc-film.jpg" },
    { id: 4, code: "05", title: "GET THE RIGHT TOOLS", cat: "Category: TOOLS", img: "/images/products/3m/disc-tools.jpg" },
    { id: 5, code: "06", title: "ENHANCE THE VEHICLE", cat: "Category: ACCESSORIES", img: "/images/products/3m/disc-enhance.jpg" },
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
            Professional automotive-care products &amp; detailing compounds selected for the TMR detailing process.
          </p>

          {/* Dual Pill Action Lockup */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#product-catalogue"
              className="px-8 py-3.5 bg-[#FF4B00] text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-[#111111] transition-all duration-300 flex items-center gap-2 shadow-[0_10px_25px_rgba(255,75,0,0.3)]"
            >
              <span>EXPLORE PRODUCTS</span>
              <span className="text-base">↗</span>
            </a>
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}?text=Enquiry%20regarding%20TMR%20Product%20Vault`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-[#111111] transition-all duration-300 flex items-center gap-2"
            >
              <span>WHATSAPP TMR</span>
              <span className="text-base">→</span>
            </a>
          </div>
        </div>

        {/* Center / Bottom 3D Curved Product Runway Carousel */}
        <div className="relative z-10 w-full mt-10 md:mt-14">
          <ProductHeroCarousel products={heroProducts} />
        </div>

        {/* Scroll Indicator */}
        <div className="relative z-10 flex flex-col items-center mt-6 text-[#858585]">
          <span className="text-[10px] font-bold uppercase tracking-widest mb-1">SCROLL TO EXPLORE</span>
          <div className="w-4 h-7 border-2 border-white/20 rounded-full flex justify-center pt-1">
            <div className="w-1 h-1.5 bg-[#FF4B00] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* SECTION 02 — CATEGORY WORLDS */}
      <section className="relative w-full bg-[#111111] text-[#F5F4EF] py-20 sm:py-32 border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 w-full">
          <div className="mb-12">
            <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl uppercase tracking-tighter text-white">
              CATEGORY <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">worlds.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Category Index Selector */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-3">
              {categoryWorlds.map((world, idx) => {
                const isActive = activeCategoryWorld === idx;
                return (
                  <div
                    key={world.id}
                    onClick={() => setActiveCategoryWorld(idx)}
                    onMouseEnter={() => setActiveCategoryWorld(idx)}
                    className={`group p-6 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      isActive
                        ? "bg-white/10 border-[#FF4B00] shadow-lg"
                        : "bg-white/5 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-1">
                        <span className={`text-xs font-bold font-mono ${isActive ? "text-[#FF4B00]" : "text-white/40"}`}>
                          0{idx + 1}
                        </span>
                        <h3 className="font-manrope font-extrabold text-xl uppercase tracking-tight text-white">
                          {world.title}
                        </h3>
                      </div>
                      <p className="text-xs text-[#858585] max-w-md line-clamp-1">
                        {world.desc}
                      </p>
                    </div>
                    <span className={`text-lg transition-transform ${isActive ? "text-[#FF4B00] translate-x-1" : "text-white/20"}`}>
                      →
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Right Active Category World Visual Showcase */}
            <div className="lg:col-span-6 min-h-[380px] lg:min-h-full">
              <div className="relative w-full h-full min-h-[380px] bg-[#141414] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center p-8">
                <img
                  src={categoryWorlds[activeCategoryWorld].image}
                  alt={categoryWorlds[activeCategoryWorld].alt}
                  className="w-full h-full object-contain transition-all duration-700 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col gap-2">
                      <span className="font-bold text-[10px] text-[#FF4B00] uppercase tracking-widest">
                        Active Category Visual
                      </span>
                      <p className="text-sm text-[#D8D8D5] max-w-[280px] leading-relaxed">
                        {categoryWorlds[activeCategoryWorld].desc}
                      </p>
                    </div>
                    <a
                      href="#product-catalogue"
                      className="font-bold text-xs text-[#FF4B00] uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform"
                    >
                      <span>EXPLORE</span>
                      <span className="text-base">↗</span>
                    </a>
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
          <div className="col-span-12 md:col-span-6 relative bg-[#141414] overflow-hidden min-h-[350px] md:min-h-full flex items-center justify-center">
            <img
              src="/images/products/3m/featured-rubbing-compound.jpg"
              alt="3M™ Perfect-It™ EX AC Rubbing Compound"
              className="w-full h-full object-contain p-6 md:p-12 drop-shadow-2xl transition-transform duration-700 hover:scale-[1.03]"
            />
            <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <div className="w-2 h-2 rounded-full bg-[#FF4B00] animate-pulse" />
              <span className="font-manrope font-bold text-[10px] uppercase tracking-widest text-white">
                Verified Product Specimen
              </span>
            </div>
          </div>

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
                VIEW PRODUCT DETAILS →
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
        <video
          src="/videos/products/products-paint-correction-practice.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.01]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60 pointer-events-none" />

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
          <div className="mb-12 text-center">
            <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl text-[#111111] uppercase tracking-tighter leading-none">
              THE OBJECT,<br />
              <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">closer.</span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto mb-16">
            <div
              onMouseMove={handleMouseMoveInspect}
              onMouseLeave={handleMouseLeaveInspect}
              className="relative aspect-square md:aspect-[16/10] bg-white border border-[#D8D8D5] flex items-center justify-center p-8 overflow-hidden cursor-crosshair group shadow-sm rounded-lg"
            >
              <img
                src="/images/products/3m/specimen-rubbing-compound.jpg"
                alt="3M™ Perfect-It™ EX AC Rubbing Compound technical specimen view"
                className="w-3/5 h-3/5 object-contain transition-transform duration-300 ease-out"
                style={{
                  transform: inspectPos.active ? 'scale(1.18)' : 'scale(1)',
                  transformOrigin: `${inspectPos.x}% ${inspectPos.y}%`,
                }}
              />

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

      {/* SECTION 07 — PRODUCT COLLECTION CATALOGUE (INFINITE AUTOMATIC CONTINUOUS PRODUCT TRAIN) */}
      <section className="relative w-full bg-gradient-to-b from-[#F5F4EF] via-[#141414] to-[#050505] text-white py-20 sm:py-32 overflow-hidden" id="product-catalogue">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-10">
            <div>
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl uppercase tracking-tighter text-[#111111] leading-none mb-2">
                THE <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">products.</span>
              </h2>
              <p className="font-manrope text-xs sm:text-sm text-[#444444] font-bold uppercase tracking-widest">
                Curated 20-Product Catalogue &amp; Professional Detailing Supplies — Infinite Conveyor
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
                  className="w-full bg-white/20 border-b border-[#111111]/40 py-2.5 px-3 text-xs font-bold uppercase tracking-widest text-[#111111] placeholder-[#555555] focus:outline-none focus:border-[#FF4B00] transition-colors rounded-t"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 text-xs text-[#555555] hover:text-[#FF4B00]"
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
                    className={`text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full transition-all ${
                      selectedCategoryFilter === filter
                        ? "bg-[#FF4B00] text-white shadow-md font-bold"
                        : "bg-black/10 text-[#333333] hover:text-[#111111] hover:bg-black/20 border border-black/10 font-bold"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Infinite One-Way Continuous Conveyor Product Train Stage */}
        <div className="w-full relative px-5 md:px-16 pt-4">
          <div className="max-w-[1360px] mx-auto relative">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] font-bold text-[#A0A0A0] uppercase tracking-widest">
                Showing {filteredProducts.length} Product{filteredProducts.length === 1 ? '' : 's'} — Continuous One-Way Conveyor Train →
              </span>
              <div className="hidden sm:flex items-center gap-2">
                <button
                  onClick={() => scrollManual('left')}
                  aria-label="Scroll products left"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#FF4B00] hover:border-[#FF4B00] transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={() => scrollManual('right')}
                  aria-label="Scroll products right"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#FF4B00] hover:border-[#FF4B00] transition-colors"
                >
                  →
                </button>
              </div>
            </div>

            {displayProducts.length > 0 ? (
              <div
                ref={trainContainerRef}
                onMouseEnter={() => { isTrainHoveredRef.current = true; }}
                onMouseLeave={() => { isTrainHoveredRef.current = false; }}
                onTouchStart={() => { isTrainHoveredRef.current = true; }}
                onTouchEnd={() => { isTrainHoveredRef.current = false; }}
                className="flex gap-6 overflow-x-auto scrollbar-none pb-8 pt-2 select-none"
              >
                {displayProducts.map((product, idx) => (
                  <div
                    key={`${product.id}-${idx}`}
                    className="flex-none w-[82vw] sm:w-[320px] md:w-[360px] lg:w-[380px] bg-[#111418] border border-white/10 p-6 flex flex-col justify-between group hover:border-[#FF4B00]/60 transition-all rounded-xl shadow-xl"
                  >
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

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-center text-xs font-bold text-[#FF4B00] uppercase mb-2">
                          <span>0{(idx % filteredProducts.length) + 1}</span>
                          <span className="text-white/60 font-mono">{product.sku}</span>
                        </div>
                        <h3 className="font-manrope font-bold text-lg text-white uppercase mb-2 group-hover:text-[#FF4B00] transition-colors leading-snug">
                          {product.name}
                        </h3>
                        <p className="text-xs text-[#D0D0D0] line-clamp-2 leading-relaxed mb-6 font-normal">
                          {product.shortDescription}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/10 mt-auto">
                        {product.detailRoute.startsWith('/products/') ? (
                          <Link
                            to={product.detailRoute}
                            className="flex justify-between items-center text-xs font-bold text-[#FF4B00] uppercase tracking-widest group-hover:text-white transition-colors"
                          >
                            <span>VIEW PRODUCT DETAILS</span>
                            <span>→</span>
                          </Link>
                        ) : product.detailRoute.startsWith('/services/') ? (
                          <Link
                            to={product.detailRoute}
                            className="flex justify-between items-center text-xs font-bold text-[#FF4B00] uppercase tracking-widest group-hover:text-white transition-colors"
                          >
                            <span>EXPLORE SERVICE</span>
                            <span>→</span>
                          </Link>
                        ) : (
                          <a
                            href={`https://wa.me/919876543210?text=Enquiry%20regarding%20${encodeURIComponent(product.name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-between items-center text-xs font-bold text-[#FF4B00] uppercase tracking-widest group-hover:text-white transition-colors"
                          >
                            <span>ENQUIRE VIA WHATSAPP</span>
                            <span>→</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full py-16 px-8 bg-[#111418] border border-white/10 rounded-xl text-center space-y-4">
                <p className="font-manrope text-base text-[#D8D8D5] uppercase font-bold tracking-wider">
                  No products match your search query or filter selection.
                </p>
                <p className="text-xs text-[#A0A0A0]">
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

      {/* VERIFIED SOURCES */}
      <section className="w-full py-20 sm:py-32 bg-[#111111] text-white border-t border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="col-span-12 md:col-span-6">
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

      {/* DISCOVER / FIND BY PURPOSE */}
      <section className="w-full py-20 sm:py-32 bg-[#111111] text-white border-t border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-7">
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
                          <a
                            href="#product-catalogue"
                            className="text-xs font-bold text-[#FF4B00] uppercase tracking-widest flex items-center gap-1"
                          >
                            <span>EXPLORE PRODUCTS</span>
                            <span>↗</span>
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right side visual matching active purpose */}
            <div className="col-span-12 md:col-span-5 flex items-center justify-center">
              <div className="relative w-full aspect-square bg-[#141414] border border-white/10 rounded-xl overflow-hidden shadow-2xl p-6 flex items-center justify-center">
                <img
                  src={purposeRows[activePurpose].img}
                  alt={purposeRows[activePurpose].title}
                  className="w-full h-full object-contain transition-all duration-700 hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/80 backdrop-blur-md rounded-lg border border-white/10 text-center">
                  <span className="text-[10px] font-bold text-[#FF4B00] uppercase tracking-widest block mb-1">
                    {purposeRows[activePurpose].code} — {purposeRows[activePurpose].cat}
                  </span>
                  <p className="text-xs font-bold text-white uppercase">
                    {purposeRows[activePurpose].title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT FAQ */}
      <section className="w-full py-20 sm:py-32 bg-white border-t border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="flex flex-col md:flex-row gap-12 sm:gap-16">
            <div className="md:w-1/3 space-y-4">
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

      {/* FINAL CINEMATIC CTA */}
      <section className="relative w-full py-24 sm:py-32 bg-[#111111] text-white text-center">
        <div className="relative z-10 max-w-3xl mx-auto px-5 space-y-8">
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
