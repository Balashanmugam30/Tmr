import React from 'react';
import { ScrollyHero } from '@/sections/home/ScrollyHero';
import { ManifestoSection } from '@/sections/home/ManifestoSection';
import { ApproachProcessJourney } from '@/sections/home/ApproachProcessJourney';
import { CeramicSection } from '@/sections/home/CeramicSection';
import { PpfSection } from '@/sections/home/PpfSection';
import { TransformationSection } from '@/sections/home/TransformationSection';
import { GalleryShowcaseSection } from '@/sections/home/GalleryShowcaseSection';
import { ShowroomSection } from '@/sections/home/ShowroomSection';
import { FaqCtaSection } from '@/sections/home/FaqCtaSection';
import { FinalCtaSection } from '@/sections/home/FinalCtaSection';

export const HomePage: React.FC = () => {
  React.useEffect(() => {
    document.title = "TMR AI Car Care | Car Detailing & Automotive Protection in Tiruppur";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      "TMR AI Car Care is Tiruppur's premier studio for professional car detailing, 10H ceramic coating, self-healing PPF & sun-control films."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://tmrcarcare.com/');

    // LocalBusiness JSON-LD Schema
    let schemaScript = document.getElementById('home-local-business-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'home-local-business-schema';
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }
    const localBusinessLd = {
      "@context": "https://schema.org",
      "@type": "AutomotiveBusiness",
      "name": "TMR AI Car Care Studio Tiruppur",
      "url": "https://tmrcarcare.com/",
      "logo": "https://tmrcarcare.com/images/tmr-ai-car-care-logo-dark.png",
      "image": "https://tmrcarcare.com/images/protection/protection-hero.webp",
      "telephone": "+919944335520",
      "priceRange": "$$",
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
        }
      ]
    };
    schemaScript.textContent = JSON.stringify(localBusinessLd);
  }, []);

  return (
    <div className="w-full bg-tmr-warmwhite">
      {/* 1. Cinematic Scroll-Driven Hero */}
      <ScrollyHero />

      {/* 2. Manifesto: 01 / TMR */}
      <ManifestoSection />

      {/* 3 & 4. Continuous Approach + Process Theatre Journey */}
      <ApproachProcessJourney />

      {/* 5. Ceramic Coating: 03 / PROTECTION */}
      <CeramicSection />

      {/* 6. PPF: The Invisible Shield */}
      <PpfSection />

      {/* 7. Before / After Transformation Slider */}
      <TransformationSection />

      {/* 8. The Gallery Showcase */}
      <GalleryShowcaseSection />

      {/* 9. Tiruppur Showroom Location */}
      <ShowroomSection />

      {/* 10. FAQ: Questions, Answered */}
      <FaqCtaSection />

      {/* 11. Final Decision CTA: Your Car Deserves Better */}
      <FinalCtaSection />
    </div>
  );
};
