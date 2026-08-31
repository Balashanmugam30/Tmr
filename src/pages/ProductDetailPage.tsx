import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { companyData } from '@/data/company';
import { productsData, Product } from '@/data/products';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Find target product from data store or default to first record
  const product: Product = productsData.find((p) => p.slug === slug) || productsData[0];

  const titleText = product.seoTitle || `${product.name} (${product.sku}) | TMR Car Care Tiruppur`;
  const descText = product.seoDescription || `${product.name} (${product.sku}) at TMR Car Care Tiruppur. ${product.shortDescription}`;

  useEffect(() => {
    // Page Title Target
    document.title = titleText;

    // Meta Description Target
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', descText);

    // Canonical Link Target
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://tmrcarcare.com/products/${product.slug}`);

    // OpenGraph Title & Description Target
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', titleText);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', descText);

    // Product JSON-LD Schema (P0 Requirement)
    let productSchema = document.getElementById('product-detail-schema');
    if (!productSchema) {
      productSchema = document.createElement('script');
      productSchema.id = 'product-detail-schema';
      productSchema.setAttribute('type', 'application/ld+json');
      document.head.appendChild(productSchema);
    }
    const productLd = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      sku: product.sku,
      brand: {
        '@type': 'Brand',
        name: product.brand,
      },
      description: product.shortDescription,
      image: `https://tmrcarcare.com${product.image}`,
      url: `https://tmrcarcare.com/products/${product.slug}`,
    };
    productSchema.textContent = JSON.stringify(productLd);

    // BreadcrumbList JSON-LD Schema (P0 Requirement)
    let breadcrumbSchema = document.getElementById('breadcrumb-schema');
    if (!breadcrumbSchema) {
      breadcrumbSchema = document.createElement('script');
      breadcrumbSchema.id = 'breadcrumb-schema';
      breadcrumbSchema.setAttribute('type', 'application/ld+json');
      document.head.appendChild(breadcrumbSchema);
    }
    const breadcrumbLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://tmrcarcare.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Products',
          item: 'https://tmrcarcare.com/products',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: product.name,
          item: `https://tmrcarcare.com/products/${product.slug}`,
        },
      ],
    };
    breadcrumbSchema.textContent = JSON.stringify(breadcrumbLd);

    window.scrollTo(0, 0);
  }, [slug, product, titleText, descText]);

  // Product-specific FAQs from productsData or fallback
  const faqs = product.faqs || [
    {
      q: `What is ${product.name} used for?`,
      a: `${product.name} (${product.sku}) is a professional ${product.category.toLowerCase()} formulation engineered for paint surface preparation and automotive refinement.`,
    },
    {
      q: `Is ${product.name} safe for modern clear coat finishes?`,
      a: `Yes, ${product.name} is engineered to perform safely across modern OEM clear coats, single-stage finishes, and fresh refinish paintwork when used by trained detailing specialists.`,
    },
    {
      q: `How does TMR Car Care utilize ${product.name} in Tiruppur?`,
      a: `TMR Car Care integrates ${product.name} into our surface correction and preparation workflows in Tiruppur according to paint condition and required refinement grade.`,
    },
  ];

  // Service Target Mapping based on category
  const getServiceLink = () => {
    switch (product.category) {
      case 'POLISHING':
      case 'ABRASIVES':
        return { route: '/services/detailing-paint-care', name: 'Detailing & Paint Care' };
      case 'CLEANING':
      case 'ACCESSORIES':
        return { route: '/services/car-wash-cleaning', name: 'Car Wash & Cleaning' };
      case 'PROTECTION':
        return { route: '/services/ceramic-coating', name: 'Ceramic Coating' };
      case 'FILMS':
        return { route: '/services/ppf-paint-protection', name: 'PPF Paint Protection' };
      default:
        return { route: '/services/detailing-paint-care', name: 'Detailing & Paint Care' };
    }
  };

  const serviceTarget = getServiceLink();

  // Related products mapping
  const relatedProducts = (() => {
    if (product.relatedProductIds && product.relatedProductIds.length > 0) {
      const matched = productsData.filter((p) => product.relatedProductIds?.includes(p.id));
      if (matched.length > 0) return matched.slice(0, 3);
    }
    return productsData.filter((p) => p.id !== product.id).slice(0, 3);
  })();

  // Application spec finder for quick facts
  const applicationSpec = product.specs.find(
    (s) =>
      s.label.toLowerCase().includes('application') ||
      s.label.toLowerCase().includes('surface') ||
      s.label.toLowerCase().includes('area')
  )?.value || 'Exterior Clear Coat';

  return (
    <div data-navbar-theme="dark" className="w-full bg-[#0A0A0A] text-[#F1EEE7] font-manrope selection:bg-[#FF4B00] selection:text-white pt-24 min-h-screen relative">
      
      {/* SECTION A — PRODUCT HERO */}
      <section className="relative w-full pt-12 pb-16 sm:pb-24 overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#090909] to-[#151515]">
        <div className="w-full max-w-none px-5 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="col-span-12 md:col-span-6 flex flex-col z-10">
              
              {/* Category & Family Badge */}
              <span className="text-[11px] font-bold text-[#FF4B00] uppercase tracking-widest mb-2">
                {product.brand} — {product.category}
              </span>

              {/* Product Name H1 */}
              <h1 className="font-manrope font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white mb-4 leading-tight tracking-tighter uppercase">
                {product.seoH1 || product.name}
              </h1>

              {/* Concise Product Statement */}
              <p className="font-manrope text-sm sm:text-base text-[#D8D8D5]/80 leading-relaxed mb-4 max-w-xl">
                {product.shortDescription}
              </p>

              {/* Supporting Technical Line */}
              <span className="font-mono text-xs text-[#A0A0A0] font-bold uppercase tracking-wider mb-8 block">
                PART / SKU: <span className="text-[#FF4B00]">{product.sku}</span>
              </span>

              {/* Minimal Text/Line CTAs (NO BOXY BUTTONS) */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp}?text=Inquiry%20regarding%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white border-b-2 border-[#FF4B00] pb-1 hover:text-[#FF4B00] transition-colors"
                >
                  <span>ENQUIRE ABOUT THIS PRODUCT</span>
                  <span className="text-sm">→</span>
                </a>
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#A0A0A0] border-b-2 border-white/20 pb-1 hover:text-white hover:border-white transition-colors"
                >
                  <span>WHATSAPP TMR</span>
                  <span className="text-sm">→</span>
                </a>
              </div>
            </div>

            {/* Right Product Image Column */}
            <div className="col-span-12 md:col-span-6 relative mt-4 md:mt-0">
              <div className="relative w-full aspect-[4/3] bg-[#121212] border border-white/10 rounded-xl overflow-hidden flex items-center justify-center p-8 shadow-2xl">
                <div className="absolute inset-0 bg-radial from-[#FF4B00]/10 via-transparent to-black/80 pointer-events-none" />
                <img
                  src={product.image}
                  alt={`${product.name} ${product.sku}`}
                  className="w-4/5 h-4/5 object-contain relative z-10 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.opacity = '0.7';
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION B — QUICK PRODUCT FACTS */}
      <section className="w-full py-8 border-b border-white/10 bg-gradient-to-b from-[#151515] to-[#1C1B19]">
        <div className="w-full max-w-none px-5 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-left">
            <div>
              <span className="text-[10px] font-bold text-[#888888] uppercase tracking-widest block mb-1">
                BRAND
              </span>
              <span className="font-manrope font-extrabold text-sm sm:text-base text-white">
                {product.brand}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#888888] uppercase tracking-widest block mb-1">
                PART NUMBER
              </span>
              <span className="font-manrope font-extrabold text-sm sm:text-base text-[#FF4B00] font-mono">
                {product.sku}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#888888] uppercase tracking-widest block mb-1">
                CATEGORY
              </span>
              <span className="font-manrope font-extrabold text-sm sm:text-base text-white">
                {product.category}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#888888] uppercase tracking-widest block mb-1">
                APPLICATION
              </span>
              <span className="font-manrope font-extrabold text-sm sm:text-base text-white truncate block">
                {applicationSpec}
              </span>
            </div>
            <div className="col-span-2 md:col-span-1">
              <span className="text-[10px] font-bold text-[#888888] uppercase tracking-widest block mb-1">
                STATUS
              </span>
              <span className="font-manrope font-extrabold text-sm sm:text-base text-white">
                Studio Verified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C — WHAT IT DOES */}
      <section className="w-full py-16 sm:py-24 border-b border-white/10 bg-gradient-to-b from-[#1C1B19] to-[#20201E]">
        <div className="w-full max-w-none px-5 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <h2 className="font-manrope font-extrabold text-xs uppercase tracking-widest text-[#FF4B00] mb-2">
                WHAT IT DOES.
              </h2>
              <span className="font-manrope font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight block">
                THE PRODUCT.
              </span>
            </div>

            <div className="col-span-12 md:col-span-8">
              <p className="font-manrope text-base sm:text-lg text-[#D8D8D5]/90 leading-relaxed max-w-3xl">
                {product.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D — TECHNICAL SPECIFICATIONS */}
      {product.specs && product.specs.length > 0 && (
        <section className="w-full py-16 sm:py-24 border-b border-white/10 bg-gradient-to-b from-[#20201E] via-[#1A1917] to-[#151515]">
          <div className="w-full max-w-none px-5 sm:px-10 lg:px-16">
            <div className="mb-8">
              <h2 className="font-manrope font-extrabold text-xs uppercase tracking-widest text-[#FF4B00] mb-1">
                PRODUCT DATA.
              </h2>
              <h3 className="font-manrope font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                TECHNICAL SPECIFICATIONS.
              </h3>
            </div>

            <div className="divide-y divide-white/10 border-t border-b border-white/10 max-w-4xl">
              {product.specs.map((spec, idx) => (
                <div key={idx} className="py-4 flex justify-between items-center text-xs sm:text-sm">
                  <span className="font-bold uppercase tracking-widest text-[#888888]">
                    {spec.label}
                  </span>
                  <span className="font-bold text-white text-right">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION E — USED WITHIN THE TMR PROCESS */}
      <section className="w-full py-16 sm:py-24 border-b border-white/10 bg-gradient-to-b from-[#171716] to-[#101010]">
        <div className="w-full max-w-none px-5 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-8 space-y-4">
              <h2 className="font-manrope font-extrabold text-xs uppercase tracking-widest text-[#FF4B00]">
                WORKFLOW INTEGRATION.
              </h2>
              <h3 className="font-manrope font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight">
                USED WITHIN THE TMR PROCESS.
              </h3>
              <p className="font-manrope text-sm sm:text-base text-[#D8D8D5]/80 leading-relaxed max-w-2xl">
                This product is used as part of controlled paint correction and surface preparation at TMR Car Care in Tiruppur, selected according to paint condition, defect severity, and required refinement stage.
              </p>
              <div className="pt-2">
                <Link
                  to={serviceTarget.route}
                  className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white border-b-2 border-[#FF4B00] pb-1 hover:text-[#FF4B00] transition-colors"
                >
                  <span>EXPLORE {serviceTarget.name.toUpperCase()} SERVICE</span>
                  <span className="text-sm">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F — RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <section className="w-full py-16 sm:py-24 border-b border-white/10 bg-gradient-to-b from-[#111111] to-[#090909]">
          <div className="w-full max-w-none px-5 sm:px-10 lg:px-16">
            <div className="mb-10">
              <h2 className="font-manrope font-extrabold text-xs uppercase tracking-widest text-[#FF4B00] mb-1">
                RECOMMENDED SYSTEM.
              </h2>
              <h3 className="font-manrope font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                RELATED PRODUCTS.
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedProducts.map((relProd) => (
                <Link
                  key={relProd.id}
                  to={relProd.detailRoute}
                  className="group block bg-[#141414] border border-white/10 hover:border-[#FF4B00]/60 transition-all p-6 rounded-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-[4/3] bg-[#1A1A1A] mb-4 relative overflow-hidden flex items-center justify-center p-4 rounded border border-white/5">
                      <img
                        src={relProd.image}
                        alt={relProd.name}
                        className="w-3/4 h-3/4 object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="font-bold text-[10px] text-[#FF4B00] uppercase tracking-widest block mb-1">
                      {relProd.category} • {relProd.sku}
                    </span>
                    <h4 className="font-manrope font-extrabold text-base text-white group-hover:text-[#FF4B00] transition-colors leading-snug">
                      {relProd.name}
                    </h4>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-[#FF4B00]">
                    <span>VIEW DETAILS</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION G — PRODUCT FAQ (EXPAND ON HOVER / FOCUS / CLICK) */}
      <section className="w-full py-16 sm:py-24 border-b border-white/10 bg-gradient-to-b from-[#181816] via-[#141412] to-[#0E0E0D]">
        <div className="w-full max-w-none px-5 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <h2 className="font-manrope font-extrabold text-xs uppercase tracking-widest text-[#FF4B00] mb-1">
                KNOWLEDGE BASE.
              </h2>
              <h3 className="font-manrope font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight">
                PRODUCT FREQUENTLY ASKED QUESTIONS.
              </h3>
            </div>

            <div className="col-span-12 md:col-span-8 flex flex-col divide-y divide-white/10 border-t border-b border-white/10">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setOpenFaq(idx)}
                    onMouseLeave={() => setOpenFaq(null)}
                    className="transition-colors group py-5"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      onFocus={() => setOpenFaq(idx)}
                      aria-expanded={isOpen}
                      className="w-full flex justify-between items-center text-left focus:outline-none focus:text-[#FF4B00]"
                    >
                      <span className="font-manrope font-bold text-base sm:text-lg text-white group-hover:text-[#FF4B00] transition-colors pr-4">
                        {faq.q}
                      </span>
                      <span className="text-xl text-[#FF4B00] transition-transform duration-300 shrink-0 font-mono">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-out overflow-hidden ${
                        isOpen ? 'grid-rows-[1fr] opacity-100 pt-3' : 'grid-rows-[0fr] opacity-0 pt-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="font-manrope text-sm text-[#D8D8D5]/80 leading-relaxed max-w-2xl">
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

      {/* SECTION H — FINAL PRODUCT CTA */}
      <section className="relative w-full py-20 sm:py-28 bg-[#090909] text-center border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-radial from-[#FF4B00]/5 via-transparent to-transparent pointer-events-none" />
        <div className="w-full max-w-none px-5 sm:px-10 lg:px-16 space-y-6 relative z-10">
          <h2 className="font-manrope font-extrabold text-xs uppercase tracking-widest text-[#FF4B00]">
            STUDIO ENQUIRY.
          </h2>
          <h3 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tighter text-white leading-none max-w-3xl mx-auto">
            NEED THIS PRODUCT FOR YOUR VEHICLE?
          </h3>
          <p className="font-manrope text-sm sm:text-base text-[#D8D8D5]/80 max-w-lg mx-auto leading-relaxed">
            Talk to TMR Car Care about product availability or application for your vehicle in Tiruppur.
          </p>

          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}?text=Ordering%20${encodeURIComponent(product.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white border-b-2 border-[#FF4B00] pb-1 hover:text-[#FF4B00] transition-colors"
            >
              <span>WHATSAPP TMR STUDIO</span>
              <span className="text-sm">→</span>
            </a>
            <a
              href={`tel:${companyData.contact.phone}`}
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#A0A0A0] border-b-2 border-white/20 pb-1 hover:text-white hover:border-white transition-colors"
            >
              <span>CALL TMR CAR CARE</span>
              <span className="text-sm">→</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
