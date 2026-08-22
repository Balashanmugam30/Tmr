import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { companyData } from '@/data/company';
import { productsData } from '@/data/products';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Find target product from data store or default to first record
  const product = productsData.find((p) => p.slug === slug) || productsData[0];

  useEffect(() => {
    // Page Title Target
    document.title = `${product.name} | TMR Car Care Tiruppur`;

    // Meta Description Target
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      `${product.name} (${product.sku}) at TMR Car Care Tiruppur. ${product.shortDescription}`
    );

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
    ogTitle.setAttribute('content', `${product.name} | TMR Car Care Tiruppur`);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute(
      'content',
      `${product.name} (${product.sku}) at TMR Car Care Tiruppur. ${product.shortDescription}`
    );

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
  }, [slug, product]);

  const faqs = [
    {
      q: `What type of pads or tools are recommended for ${product.name}?`,
      a: `For optimal performance with ${product.name}, we recommend using professional-grade foam or microfiber pads tailored to ${product.category.toLowerCase()} applications.`,
    },
    {
      q: "Is this safe for modern clear coats and specialized vehicle finishes?",
      a: `Yes, ${product.name} is explicitly engineered to be safe and effective on clear coats and factory paint systems when applied by trained detailing professionals.`,
    },
    {
      q: "Does TMR Car Care use this product in studio services?",
      a: `Yes. We integrate ${product.name} directly into our professional detailing and surface prep workflows in Tiruppur.`,
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Determine service link mapping based on category
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
  const relatedProducts = productsData.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="w-full bg-[#F5F4EF] text-[#111111] font-manrope selection:bg-[#FF4B00] selection:text-white pt-20">
      
      {/* 01 / BREADCRUMB & PRODUCT HERO */}
      <header className="relative w-full pt-16 pb-24 sm:pb-32 overflow-hidden border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-6 flex flex-col z-10">
              
              {/* Visual Breadcrumb Trail */}
              <div className="mb-6 flex flex-wrap items-center gap-3 text-[#858585] font-bold uppercase tracking-wider text-xs sm:text-sm">
                <Link to="/" className="hover:text-[#FF4B00] transition-colors">
                  HOME
                </Link>
                <span className="w-1.5 h-1.5 bg-[#FF4B00] rounded-full" />
                <Link to="/products" className="hover:text-[#FF4B00] transition-colors">
                  PRODUCTS
                </Link>
                <span className="w-1.5 h-1.5 bg-[#FF4B00] rounded-full" />
                <span className="text-[#FF4B00]">{product.brand}</span>
                <span className="w-1.5 h-1.5 bg-[#FF4B00] rounded-full" />
                <span className="text-[#111111]">{product.category}</span>
              </div>

              <h1 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-[64px] text-[#111111] mb-8 leading-tight tracking-tighter uppercase">
                {product.name}
              </h1>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp}?text=Inquiry%20regarding%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#111111] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 hover:bg-[#FF4B00] transition-colors inline-flex items-center gap-2 rounded"
                >
                  <span>ENQUIRE ABOUT THIS PRODUCT</span>
                  <span className="text-base">↗</span>
                </a>
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#111111] text-[#111111] font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 hover:bg-[#111111] hover:text-white transition-colors inline-flex items-center gap-2 rounded"
                >
                  <span>WHATSAPP TMR</span>
                  <span className="text-base">↗</span>
                </a>
              </div>
            </div>

            {/* Hero Image Right */}
            <div className="col-span-12 md:col-span-6 relative mt-8 md:mt-0">
              <div className="relative w-full aspect-[4/3] sm:aspect-square bg-white border border-[#D8D8D5] overflow-hidden flex items-center justify-center p-8 rounded-lg shadow-sm">
                <img
                  src={product.image}
                  alt={`${product.name} high resolution product packaging`}
                  className="w-4/5 h-4/5 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.opacity = '0.7';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 02 / PRODUCT OVERVIEW */}
      <section className="py-20 sm:py-32 border-b border-[#D8D8D5] bg-white">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <span className="font-bold uppercase tracking-widest text-[#858585] text-xs block mb-2">
                What It Is.
              </span>
              <div className="w-12 h-1 bg-[#111111]" />
            </div>

            <div className="col-span-12 md:col-span-8">
              <p className="font-editorial text-2xl sm:text-4xl text-[#111111] leading-relaxed">
                {product.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 / VERIFIED TECHNICAL SPECIFICATIONS */}
      <section className="py-20 sm:py-24 bg-[#F5F4EF] border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="mb-12">
            <span className="font-bold uppercase tracking-widest text-[#858585] text-xs block">
              The Specifications.
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-[#D8D8D5] bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="border-r border-b md:border-b-0 border-[#D8D8D5] p-6 sm:p-8 flex flex-col justify-between">
              <span className="font-bold text-xs text-[#858585] uppercase tracking-wider mb-4">Brand</span>
              <span className="font-manrope font-extrabold text-xl sm:text-2xl text-[#111111]">{product.brand}</span>
            </div>

            <div className="border-r border-b md:border-b-0 border-[#D8D8D5] p-6 sm:p-8 flex flex-col justify-between">
              <span className="font-bold text-xs text-[#858585] uppercase tracking-wider mb-4">Part / SKU</span>
              <span className="font-manrope font-extrabold text-xl sm:text-2xl text-[#FF4B00]">{product.sku}</span>
            </div>

            <div className="border-r border-[#D8D8D5] p-6 sm:p-8 flex flex-col justify-between">
              <span className="font-bold text-xs text-[#858585] uppercase tracking-wider mb-4">Category</span>
              <span className="font-manrope font-extrabold text-xl sm:text-2xl text-[#111111]">{product.category}</span>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <span className="font-bold text-xs text-[#858585] uppercase tracking-wider mb-4">Status</span>
              <span className="font-manrope font-extrabold text-xl sm:text-2xl text-[#111111]">Studio Verified</span>
            </div>
          </div>

          {/* Technical Specs List */}
          {product.specs && product.specs.length > 0 && (
            <div className="mt-12 bg-white p-8 border border-[#D8D8D5] rounded-lg shadow-sm">
              <h3 className="font-manrope font-extrabold text-xl uppercase tracking-tight text-[#111111] mb-6 pb-4 border-b border-[#D8D8D5]">
                Verified Technical Attributes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="border-b border-[#D8D8D5]/60 pb-3">
                    <span className="text-[10px] text-[#858585] uppercase tracking-widest block mb-1">{spec.label}</span>
                    <span className="font-bold text-sm text-[#111111]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 04 / WHY IT BELONGS IN THE TMR WORKFLOW */}
      <section className="py-20 sm:py-32 bg-[#111111] text-white border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-5 order-2 md:order-1">
              <div className="relative aspect-square w-full max-w-md border border-white/20 overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={`${product.name} studio prep view`}
                  className="w-full h-full object-contain p-8 bg-white/5"
                />
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 md:col-start-7 order-1 md:order-2 space-y-6">
              <span className="font-bold uppercase tracking-widest text-[#FF4B00] text-xs block">
                Part of the TMR Workflow.
              </span>
              <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white">
                Engineered for absolute clarity.
              </h2>
              <p className="text-base text-[#D8D8D5] leading-relaxed">
                We don't just supply products; we integrate {product.name} into our high-performance detailing workflows in Tiruppur, ensuring maximum longevity and precision for your vehicle finish.
              </p>

              <div className="pt-4">
                <Link
                  to={serviceTarget.route}
                  className="inline-flex items-center gap-3 text-white font-bold text-xs uppercase tracking-widest border-b border-white pb-2 hover:text-[#FF4B00] hover:border-[#FF4B00] transition-colors"
                >
                  <span>EXPLORE {serviceTarget.name.toUpperCase()} SERVICE</span>
                  <span className="text-base">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 / RELATED PRODUCTS FROM CATALOGUE */}
      <section className="py-20 sm:py-32 bg-white border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="mb-12">
            <span className="font-bold uppercase tracking-widest text-[#858585] text-xs block mb-2">
              From the Same Collection.
            </span>
            <h3 className="font-manrope font-extrabold text-3xl sm:text-4xl text-[#111111] uppercase tracking-tight">
              Complete the system.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relProd) => (
              <Link
                key={relProd.id}
                to={relProd.detailRoute}
                className="group block border border-[#D8D8D5] p-6 hover:border-[#FF4B00] transition-colors bg-[#F5F4EF] rounded-lg"
              >
                <div className="aspect-square bg-white mb-6 relative overflow-hidden flex items-center justify-center p-4 rounded border border-[#D8D8D5]/50">
                  <img
                    src={relProd.image}
                    alt={relProd.name}
                    className="w-3/4 h-3/4 object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="font-bold text-xs text-[#FF4B00] uppercase tracking-wider block mb-1">
                  {relProd.category}
                </span>
                <h4 className="font-bold text-base text-[#111111] group-hover:text-[#FF4B00] transition-colors">
                  {relProd.name}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 06 / PRODUCT FAQ */}
      <section className="py-20 sm:py-32 bg-white border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <span className="font-bold uppercase tracking-widest text-[#858585] text-xs block mb-2">
                Questions.
              </span>
              <h3 className="font-manrope font-extrabold text-3xl sm:text-4xl text-[#111111] uppercase tracking-tight">
                Technical Details.
              </h3>
            </div>

            <div className="col-span-12 md:col-span-8 flex flex-col border-t border-[#D8D8D5]">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="border-b border-[#D8D8D5]">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full py-6 flex justify-between items-center text-left group"
                    >
                      <span className="font-manrope font-bold text-base sm:text-lg text-[#111111] group-hover:text-[#FF4B00] transition-colors">
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

      {/* 07 / PRODUCT ENQUIRY CTA */}
      <section className="py-24 sm:py-32 bg-[#111111] text-white text-center">
        <div className="max-w-3xl mx-auto px-5 space-y-8">
          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl uppercase tracking-tighter text-white leading-none">
            Enquire about {product.name}.
          </h2>
          <p className="text-base text-[#D8D8D5] max-w-lg mx-auto leading-relaxed">
            Contact our detailing team in Tiruppur to arrange application or confirm availability for your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}?text=Ordering%20${encodeURIComponent(product.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF4B00] text-white px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-colors rounded"
            >
              WHATSAPP TMR
            </a>
            <a
              href={`tel:${companyData.contact.phone}`}
              className="border border-white/30 text-white px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-colors rounded"
            >
              CALL TMR
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
