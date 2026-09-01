import React, { useEffect } from 'react';
import { ServicesHero } from '@/sections/services/ServicesHero';
import { ServiceIndexStage } from '@/sections/services/ServiceIndexStage';
import { DiagnosticsSection } from '@/sections/services/DiagnosticsSection';
import { ProtectionSpotlightSection } from '@/sections/services/ProtectionSpotlightSection';
import { StudioProcessTimeline } from '@/sections/services/StudioProcessTimeline';
import { ConsultationCtaSection } from '@/sections/services/ConsultationCtaSection';

export const ServicesIndexPage: React.FC = () => {
  // Page SEO Metadata & Title
  useEffect(() => {
    document.title = "Car Detailing & Protection Services in Tiruppur | TMR AI Car Care";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Explore premium automotive detailing, ceramic coating, paint protection film (PPF), sun control films, and car cleaning services at TMR AI Car Care in Tiruppur.'
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://tmrcarcare.com/services');

    window.scrollTo(0, 0);
  }, []);

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "TMR AI Car Care Studio Tiruppur",
    "url": "https://tmrcarcare.com/services",
    "telephone": "+919944335520",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Avinashi Road, Near Hope College Junction",
      "addressLocality": "Tiruppur",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641602",
      "addressCountry": "IN"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Automotive Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Car Wash & Cleaning",
            "url": "https://tmrcarcare.com/services/car-wash-cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Detailing & Paint Care",
            "url": "https://tmrcarcare.com/services/detailing-paint-care"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ceramic Coating",
            "url": "https://tmrcarcare.com/services/ceramic-coating"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PPF & Paint Protection",
            "url": "https://tmrcarcare.com/services/ppf-paint-protection"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sun-Control Films",
            "url": "https://tmrcarcare.com/services/sun-control-films"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Car Accessories",
            "url": "https://tmrcarcare.com/services/car-accessories"
          }
        }
      ]
    }
  };

  return (
    <div className="w-full bg-[#fff8f6] text-[#111111] min-h-screen selection:bg-[#FF4B00] selection:text-white font-sans overflow-x-hidden">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SECTION 01 — HERO */}
      <ServicesHero />

      {/* SECTION 02 — MASTER SERVICE INDEX (12-COL ASYMMETRIC STAGE) */}
      <ServiceIndexStage />

      {/* SECTION 03 — DIAGNOSTICS / CHOOSE BY NEED */}
      <DiagnosticsSection />

      {/* SECTION 04 — FLAGSHIP PROTECTION SPOTLIGHT (CERAMIC & PPF DUAL ZONES) */}
      <ProtectionSpotlightSection />

      {/* SECTION 05 — STUDIO PROCESS TIMELINE */}
      <StudioProcessTimeline />

      {/* SECTION 06 — FINAL CONSULTATION CTA */}
      <ConsultationCtaSection />
    </div>
  );
};

export default ServicesIndexPage;
