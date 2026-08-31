import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { companyData } from '@/data/company';
import { productsData } from '@/data/products';
import { ProductHeroCarousel, ProductItem } from '@/components/ProductHeroCarousel';
import { EmptySearchState } from '@/components/EmptySearchState';

export const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();

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
  const isMouseDownRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const startScrollLeftRef = useRef<number>(0);
  const isInitializingRef = useRef<boolean>(false);

  // Sync category filter from URL query parameter ?category=
  useEffect(() => {
    const VALID_CATEGORIES = [
      'ALL',
      'ABRASIVES',
      'CLEANING',
      'POLISHING',
      'PROTECTION',
      'FILMS',
      'TOOLS',
      'ACCESSORIES',
    ];
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      const upperCategory = categoryParam.trim().toUpperCase();
      if (VALID_CATEGORIES.includes(upperCategory)) {
        setSelectedCategoryFilter(upperCategory);
      } else {
        setSelectedCategoryFilter('ALL');
      }

      // Smooth scroll to Section 07 Product Collection (#product-catalogue)
      const catalogueEl = document.getElementById('product-catalogue');
      if (catalogueEl) {
        setTimeout(() => {
          catalogueEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [location.search, searchParams]);

  // Continuous linear auto-drift animation loop
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const animateTrain = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (
        runwayScrollRef.current &&
        !isTrainHoveredRef.current &&
        !isMouseDownRef.current &&
        !isInitializingRef.current
      ) {
        const el = runwayScrollRef.current;
        const speed = 25; // 25 px per second continuous linear drift
        el.scrollLeft += speed * deltaTime;

        const singleSetWidth = el.scrollWidth / 3;
        if (singleSetWidth > 0 && el.scrollLeft >= singleSetWidth * 2) {
          el.scrollLeft -= singleSetWidth;
        }
      }

      animationFrameId = requestAnimationFrame(animateTrain);
    };

    animationFrameId = requestAnimationFrame(animateTrain);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Infinite reset boundary handler
  const handleRunwayScrollEvent = () => {
    if (!runwayScrollRef.current || isInitializingRef.current) return;
    const el = runwayScrollRef.current;
    const singleSetWidth = el.scrollWidth / 3;
    if (singleSetWidth > 0) {
      if (el.scrollLeft >= singleSetWidth * 2) {
        el.scrollLeft -= singleSetWidth;
      } else if (el.scrollLeft <= 10) {
        el.scrollLeft += singleSetWidth;
      }
    }
  };

  // Direct pixel step by 1 card width + gap (NO scrollBy smooth behavior)
  const scrollRunway = (direction: 'left' | 'right') => {
    if (!runwayScrollRef.current) return;
    const el = runwayScrollRef.current;
    const firstCard = el.querySelector('a');
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 380;
    const gap = 24; // 24px gap between cards
    const step = cardWidth + gap;

    if (direction === 'right') {
      el.scrollLeft += step;
      const singleSetWidth = el.scrollWidth / 3;
      if (singleSetWidth > 0 && el.scrollLeft >= singleSetWidth * 2) {
        el.scrollLeft -= singleSetWidth;
      }
    } else {
      el.scrollLeft -= step;
      const singleSetWidth = el.scrollWidth / 3;
      if (singleSetWidth > 0 && el.scrollLeft <= 10) {
        el.scrollLeft += singleSetWidth;
      }
    }
  };

  // Desktop Mouse Drag Event Handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!runwayScrollRef.current) return;
    isMouseDownRef.current = true;
    isTrainHoveredRef.current = true;
    startXRef.current = e.clientX;
    startScrollLeftRef.current = runwayScrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDownRef.current || !runwayScrollRef.current) return;
    e.preventDefault();
    const delta = e.clientX - startXRef.current;
    const el = runwayScrollRef.current;
    el.scrollLeft = startScrollLeftRef.current - delta;

    const singleSetWidth = el.scrollWidth / 3;
    if (singleSetWidth > 0) {
      if (el.scrollLeft >= singleSetWidth * 2) {
        el.scrollLeft -= singleSetWidth;
        startXRef.current = e.clientX;
        startScrollLeftRef.current = el.scrollLeft;
      } else if (el.scrollLeft <= 10) {
        el.scrollLeft += singleSetWidth;
        startXRef.current = e.clientX;
        startScrollLeftRef.current = el.scrollLeft;
      }
    }
  };

  const handleMouseUp = () => {
    isMouseDownRef.current = false;
    isTrainHoveredRef.current = false;
  };

  const handleMouseLeave = () => {
    isMouseDownRef.current = false;
    isTrainHoveredRef.current = false;
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

  // Render-time 3-sequence clone array for seamless infinite product train
  const infiniteProducts = filteredProducts.length > 0
    ? [...filteredProducts, ...filteredProducts, ...filteredProducts]
    : [];

  // Initialize scroll position at middle clone Set B (singleSetWidth) on filter/search change
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!runwayScrollRef.current) return;
      const el = runwayScrollRef.current;
      const singleSetWidth = Math.round(el.scrollWidth / 3);
      if (singleSetWidth > 0) {
        isInitializingRef.current = true;
        el.scrollLeft = singleSetWidth;
        setTimeout(() => {
          isInitializingRef.current = false;
        }, 50);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [selectedCategoryFilter, searchQuery]);

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
    document.title = "3M Car Care & Detailing Products in Tiruppur | TMR Car Care";

    // Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Explore 3M car care and professional detailing products in Tiruppur at TMR Car Care. High-performance compounds, abrasives, polishes, and surface protection.'
    );

    // Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://tmrcarcare.com/products');

    // OpenGraph Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', '3M Car Care & Detailing Products in Tiruppur | TMR Car Care');

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute(
      'content',
      'Explore 3M car care and professional detailing products in Tiruppur at TMR Car Care. High-performance compounds, abrasives, polishes, and surface protection.'
    );

    // ItemList JSON-LD Schema
    let schemaScript = document.getElementById('products-jsonld');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'products-jsonld';
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }
    const jsonLdData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "3M Car Care & Professional Detailing Products in Tiruppur",
      "description": "Curated professional 3M automotive detailing compounds, abrasives, polishes, and surface protection products at TMR Car Care Tiruppur.",
      "url": "https://tmrcarcare.com/products",
      "itemListElement": productsData.map((prod, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": prod.name,
          "sku": prod.sku,
          "brand": {
            "@type": "Brand",
            "name": prod.brand
          },
          "description": prod.shortDescription,
          "image": `https://tmrcarcare.com${prod.image}`,
          "url": `https://tmrcarcare.com${prod.detailRoute}`
        }
      }))
    };
    schemaScript.textContent = JSON.stringify(jsonLdData);

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
      slug: '3m-trizact-performance-abrasives',
    },
    {
      id: 'meguiars-m210',
      name: "Meguiar's Mirror Glaze M210 Ultra Finishing Polish",
      category: 'Finishing Compounds',
      image: '/images/products/3m/meguiars-hero-m210-v2.jpg',
      slug: 'meguiars-m210-ultra-finishing-polish',
    },
    {
      id: '3m-quick-wax',
      name: '3M™ Quick Wax Spray Sealant',
      category: 'Protection & Shine',
      image: '/images/products/3m/3m-hero-quick-wax-v2.jpg',
      slug: '3m-quick-wax-spray',
    },
    {
      id: '3m-machine-polish',
      name: '3M™ Perfect-It™ Machine Polish',
      category: 'Finish Polishes',
      image: '/images/products/3m/3m-hero-machine-polish-v2.jpg',
      slug: '3m-perfect-it-machine-polish',
    },
  ];

  const categoryWorlds = [
    {
      id: 0,
      title: "Cleaning",
      desc: "Professional vehicle-cleaning products for wash and maintenance applications.",
      image: "/images/products/3m/3m-cat-cleaning-v2.jpg",
      alt: "3M professional vehicle cleaning shampoo and quick wax spray",
      link: "/products/3m-quick-wax-spray",
    },
    {
      id: 1,
      title: "Polishing",
      desc: "High-performance compounds, polishes, and pads for paint correction.",
      image: "/images/products/3m/3m-cat-polishing-v2.jpg",
      alt: "3M Perfect-It EX AC Rubbing Compound bottle",
      link: "/products/3m-perfect-it-ex-ac-rubbing-compound",
    },
    {
      id: 2,
      title: "Protection",
      desc: "Nanoceramic, wax, and sealant protection treatments.",
      image: "/images/products/3m/3m-cat-protection-v2.jpg",
      alt: "3M Ceramic Coating paint protection kit",
      link: "/services/ceramic-coating",
    },
    {
      id: 3,
      title: "Films",
      desc: "Self-healing paint protection films and sun-control solar films.",
      image: "/images/products/3m/3m-cat-films-v2.jpg",
      alt: "3M Scotchgard Paint Protection Film Pro box and roll",
      link: "/services/ppf-paint-protection",
    },
    {
      id: 4,
      title: "Tools",
      desc: "Dual-action polishers, inspection lights, and precision detailing equipment.",
      image: "/images/products/3m/3m-cat-tools-v2.jpg",
      alt: "3M compounding and polishing foam pad tools",
      link: "/products/3m-perfect-it-foam-compounding-pad",
    },
    {
      id: 5,
      title: "Accessories",
      desc: "Microfiber towels, applicators, and premium vehicle cabin accessories.",
      image: "/images/products/3m/3m-cat-accessories-v2.jpg",
      alt: "Premium 3M microfiber detailing accessories",
      link: "/products/3m-automotive-performance-masking-tape-233",
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
          {/* Main Headline Stack (SEO H1 Target) */}
          <h1 className="flex flex-col items-center leading-[0.95] tracking-tighter mb-5">
            <span className="font-editorial italic font-normal text-white text-3xl sm:text-5xl md:text-6xl lg:text-[68px] mb-2">
              3M Car Care &amp; Professional Detailing
            </span>
            <span className="font-manrope font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[72px] uppercase text-[#F5F4EF]">
              Products in Tiruppur
            </span>
          </h1>

          {/* Sub-headline / Supporting Line */}
          <p className="font-manrope text-sm sm:text-base md:text-lg text-[#D8D8D5] max-w-xl leading-relaxed font-normal mb-8">
            Curated professional 3M automotive-care formulations to clean, correct, and protect — engineered for superior paint correction and long-term surface protection.
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
                      to={categoryWorlds[activeCategoryWorld].link}
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
      <section data-navbar-theme="light" className="relative w-full bg-[#F5F4EF] border-b border-[#D8D8D5] overflow-hidden" id="featured-product">
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
        <div className="w-full max-w-none px-5 sm:px-10 lg:px-16 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start md:items-end mb-8">
            <div className="col-span-12 md:col-span-5 lg:col-span-4">
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl uppercase tracking-tighter text-[#111111] leading-none mb-2">
                THE <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">products.</span>
              </h2>
              <p className="font-manrope text-xs sm:text-sm text-[#333333] font-semibold uppercase tracking-widest">
                Curated automotive-care products &amp; professional detailing supplies
              </p>
            </div>

            <div className="col-span-12 md:col-span-7 lg:col-span-8 flex flex-col gap-5 items-start md:items-end">
              {/* FIND A PRODUCT Search Input */}
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="FIND A PRODUCT (BY NAME, PN, OR CATEGORY)..."
                  aria-label="Find a product"
                  className="w-full bg-black/5 border-b border-[#111111]/30 py-2.5 px-3 text-xs font-bold uppercase tracking-widest text-[#222222] placeholder-[#444444] focus:outline-none focus:border-[#FF4B00] transition-colors rounded-t"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 text-xs text-[#222222] hover:text-[#FF4B00]"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Category Filter Navigation */}
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-start md:justify-end">
                {["ALL", "ABRASIVES", "CLEANING", "POLISHING", "PROTECTION", "FILMS", "TOOLS", "ACCESSORIES"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedCategoryFilter(filter)}
                    className={`px-4 py-2 rounded-full font-manrope font-bold text-xs uppercase tracking-widest transition-all ${
                      selectedCategoryFilter === filter
                        ? "bg-[#FF4B00] text-white shadow-lg"
                        : "bg-white/10 text-[#333333] hover:bg-black/10 hover:text-black"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Bar */}
        <div className="w-full max-w-none px-5 sm:px-10 lg:px-16 pb-4 flex justify-between items-center">
          <span className="text-[10px] sm:text-xs font-bold text-[#A0A0A0] uppercase tracking-widest">
            Showing {filteredProducts.length} Product{filteredProducts.length === 1 ? '' : 's'} — Drag or Swipe →
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollRunway('left')}
              aria-label="Scroll products left"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#FF4B00] hover:border-[#FF4B00] transition-colors cursor-pointer"
            >
              ←
            </button>
            <button
              onClick={() => scrollRunway('right')}
              aria-label="Scroll products right"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#FF4B00] hover:border-[#FF4B00] transition-colors cursor-pointer"
            >
              →
            </button>
          </div>
        </div>

        {/* Horizontal Product Track / Viewport — FULL-BLEED EDGE-TO-EDGE */}
        {filteredProducts.length > 0 ? (
          <div className="w-full px-0 mx-0 overflow-hidden">
            <div
              ref={runwayScrollRef}
              onScroll={handleRunwayScrollEvent}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => { isTrainHoveredRef.current = true; }}
              onTouchStart={() => { isTrainHoveredRef.current = true; }}
              onTouchEnd={() => { isTrainHoveredRef.current = false; }}
              className="flex gap-6 overflow-x-auto pb-8 pt-2 select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing w-full px-0"
            >
              {infiniteProducts.map((product, idx) => (
                <Link
                  key={`${product.id}-train-${idx}`}
                  to={product.detailRoute}
                  className="min-w-[82vw] sm:min-w-[340px] md:min-w-[380px] lg:min-w-[400px] max-w-[400px] flex-shrink-0 group flex flex-col bg-[#0F0F0F] border border-white/10 rounded-xl overflow-hidden hover:border-[#FF4B00]/60 transition-all duration-300 shadow-xl justify-between"
                >
                  <div className="relative aspect-[4/3] bg-[#141414] overflow-hidden flex items-center justify-center p-6">
                    <img
                      src={product.image}
                      alt={`${product.name} ${product.sku}`}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold text-[#FF4B00] uppercase tracking-widest border border-white/10">
                      {product.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold text-white/70 uppercase tracking-widest border border-white/10 font-mono">
                      {product.sku}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                    <div>
                      <span className="font-bold text-[10px] text-white/40 uppercase tracking-widest block mb-1">
                        {product.brand}
                      </span>
                      <h3 className="font-manrope font-extrabold text-lg uppercase text-white group-hover:text-[#FF4B00] transition-colors leading-tight mb-2">
                        {product.name}
                      </h3>
                      <p className="font-manrope text-xs text-[#D8D8D5]/70 line-clamp-2 leading-relaxed">
                        {product.shortDescription}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-[#FF4B00]">
                      <span>VIEW DETAILS &amp; FAQS</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-[1360px] mx-auto px-5 md:px-16">
            <EmptySearchState
              query={searchQuery}
              category={selectedCategoryFilter}
              onReset={() => {
                setSelectedCategoryFilter('ALL');
                setSearchQuery('');
              }}
            />
          </div>
        )}
      </section>

      {/* 08 / FAQ */}
      <section className="w-full py-20 sm:py-32 bg-[#050505] text-[#F5F4EF] border-t border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <div className="font-bold text-xs text-[#858585] tracking-widest uppercase flex items-center mb-6">
                <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
                08 / PRODUCT VAULT FAQ
              </div>
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl uppercase tracking-tighter text-white leading-none mb-6">
                QUESTIONS &amp;<br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">answers.</span>
              </h2>
              <p className="font-manrope text-sm text-[#D8D8D5] max-w-sm leading-relaxed">
                Everything you need to know about our professional 3M product selections, usage, and detailing standards in Tiruppur.
              </p>
            </div>

            <div className="col-span-12 md:col-span-7 flex flex-col divide-y divide-white/10">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="py-6 transition-colors">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex justify-between items-center text-left group"
                    >
                      <span className="font-manrope font-extrabold text-base sm:text-lg uppercase text-white group-hover:text-[#FF4B00] transition-colors pr-4">
                        {faq.q}
                      </span>
                      <span className="font-bold text-lg text-[#FF4B00] shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="font-manrope text-sm text-[#D8D8D5] pt-4 leading-relaxed max-w-xl">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 09 / FINAL CTA */}
      <section className="py-24 sm:py-32 bg-[#111111] text-white text-center">
        <div className="max-w-3xl mx-auto px-5 space-y-8">
          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl uppercase tracking-tighter text-white leading-none">
            EXPERIENCE THE PRODUCT MATRIX.
          </h2>
          <p className="text-base text-[#D8D8D5] max-w-lg mx-auto leading-relaxed">
            Elevate your vehicle's clear coat protection with professional 3M formulations at TMR Car Care in Tiruppur.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}?text=Booking%20Product%20Detailing%20Service`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF4B00] text-white px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-colors rounded"
            >
              WHATSAPP TMR
            </a>
            <Link
              to="/contact"
              className="border border-white/30 text-white px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-colors rounded"
            >
              BOOK APPOINTMENT
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
