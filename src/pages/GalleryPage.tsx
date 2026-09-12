import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { X, Maximize2 } from 'lucide-react';
import { companyData } from '@/data/company';

// --- REUSABLE HOME-PAGE GSAP REVEAL STAGE COMPONENT ---
// Reuses the EXACT GSAP reveal transition from GalleryRevealItem.tsx on the Home Page
// Fast, smooth transition duration: 0.85s (850ms) with zero cursor-proximity dependency
interface HomeStyleGalleryStageProps {
  images: { src: string; alt: string }[];
  activeIndex: number;
  aspectRatio?: string;
}

const HomeStyleGalleryStage: React.FC<HomeStyleGalleryStageProps> = ({
  images,
  activeIndex,
  aspectRatio = 'aspect-[16/9]',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const prevIndexRef = useRef<number>(activeIndex);

  // Preload all images in the sequence on mount to prevent blank frames or layout shifts
  useEffect(() => {
    images.forEach((img) => {
      const tempImg = new Image();
      tempImg.src = img.src;
    });
  }, [images]);

  useEffect(() => {
    const card = cardRef.current;
    const img = imgRef.current;
    if (!card || !img) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (isReducedMotion.matches) {
      card.style.clipPath = 'inset(0 0% 0 0)';
      card.style.opacity = '1';
      return;
    }

    if (prevIndexRef.current !== activeIndex) {
      // EXACT HOME PAGE GSAP REVEAL ANIMATION FROM GalleryRevealItem.tsx
      // Optimized 850ms reveal transition for crisp, fast, smooth editorial motion
      gsap.fromTo(
        card,
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        {
          clipPath: 'inset(0 0% 0 0)',
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          overwrite: 'auto',
        }
      );
      gsap.fromTo(
        img,
        { x: -24, scale: 1.025 },
        {
          x: 0,
          scale: 1.0,
          duration: 0.85,
          ease: 'power3.out',
          overwrite: 'auto',
        }
      );
      prevIndexRef.current = activeIndex;
    }
  }, [activeIndex]);

  return (
    <div
      className={`relative w-full ${aspectRatio} overflow-hidden rounded-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-black cursor-pointer group`}
    >
      <div
        ref={cardRef}
        className="w-full h-full relative overflow-hidden"
        style={{
          clipPath: 'inset(0 0% 0 0)',
          opacity: 1,
        }}
      >
        <img
          ref={imgRef}
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none opacity-40 group-hover:opacity-65 transition-opacity duration-500" />
      </div>
    </div>
  );
};

// --- AUTHENTIC FIRST-PARTY PHOTO CARD WITH GSAP INTERSECTIONOBSERVER REVEAL ---
// Reuses the signature GSAP clipPath reveal and hover lift from GalleryRevealItem.tsx
interface AuthenticPhotoCardProps {
  photo: {
    id: string;
    src: string;
    alt: string;
    title: string;
    category: 'STUDIO' | 'TEAM' | 'WORKSHOP' | 'SHOWROOM';
    categoryLabel: string;
    caption: string;
    colSpanDesktop: string;
    aspectDesktop: string;
    objectPosition: string;
  };
  onClick: () => void;
}

const AuthenticPhotoCard = React.memo<AuthenticPhotoCardProps>(({ photo, onClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const hasRevealedRef = useRef<boolean>(false);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    const img = imgRef.current;
    if (!container || !card || !img) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) {
      card.style.clipPath = 'inset(0 0% 0 0)';
      card.style.opacity = '1';
      hasRevealedRef.current = true;
      return;
    }

    // Set initial hidden state only once before reveal
    if (!hasRevealedRef.current) {
      gsap.set(card, { clipPath: 'inset(0 100% 0 0)', opacity: 0 });
      gsap.set(img, { x: -24, scale: 1.025 });
    }

    // Individual item IntersectionObserver with enter & leave lifecycle replay
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            hasRevealedRef.current = true;
            gsap.to(card, {
              clipPath: 'inset(0 0% 0 0)',
              opacity: 1,
              duration: 0.85,
              ease: 'power3.out',
              overwrite: 'auto',
            });
            gsap.to(img, {
              x: 0,
              scale: 1.0,
              duration: 0.85,
              ease: 'power3.out',
              overwrite: 'auto',
            });
          } else if (entry.boundingClientRect.top > window.innerHeight) {
            // Reset to masked hidden state when scrolled back up above viewport
            hasRevealedRef.current = false;
            gsap.to(card, {
              clipPath: 'inset(0 100% 0 0)',
              opacity: 0,
              duration: 0.35,
              ease: 'power2.in',
              overwrite: 'auto',
            });
            gsap.to(img, {
              x: -24,
              scale: 1.025,
              duration: 0.35,
              ease: 'power2.in',
              overwrite: 'auto',
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px 40px 0px',
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [photo.src]);

  return (
    <div
      ref={containerRef}
      className={`${photo.colSpanDesktop} w-full relative`}
    >
      <div
        ref={cardRef}
        onClick={onClick}
        tabIndex={0}
        role="button"
        aria-label={`View full resolution: ${photo.title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        }}
        className={`w-full ${photo.aspectDesktop} relative block overflow-hidden rounded-xl border border-white/10 hover:border-[#FF4B00]/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-black cursor-pointer group transition-colors duration-300 focus:outline-none focus:border-[#FF4B00]`}
      >
        <img
          ref={imgRef}
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          style={{
            objectPosition: photo.objectPosition,
          }}
        />

        {/* Subtle Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-75 group-hover:opacity-85 transition-opacity duration-500 pointer-events-none" />

        {/* Category Pill Top-Left */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold tracking-wider text-white uppercase shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B00]" />
            <span>{photo.categoryLabel}</span>
          </span>
        </div>

        {/* Maximize / Lightbox Icon Top-Right */}
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg">
            <Maximize2 className="w-3.5 h-3.5 text-white" />
          </div>
        </div>

        {/* Title & Caption Bottom Overlay */}
        <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 flex flex-col space-y-1.5 pointer-events-none">
          <h3 className="font-manrope font-extrabold text-base sm:text-lg text-white uppercase tracking-tight group-hover:text-[#FF4B00] transition-colors duration-300 drop-shadow-md">
            {photo.title}
          </h3>
          <p className="font-manrope text-xs sm:text-sm text-[#D8D8D5]/95 leading-relaxed line-clamp-2 drop-shadow-sm font-normal">
            {photo.caption}
          </p>
        </div>
      </div>
    </div>
  );
});

export const GalleryPage: React.FC = () => {
  // Existing state for Section 05 slider
  const [sliderPos, setSliderPos] = useState<number>(50);

  // --- SECTION 01: HERO MULTI-IMAGE AUTOPLAY & PARALLAX STATE ---
  const [heroIndex, setHeroIndex] = useState<number>(0);
  const [heroParallax, setHeroParallax] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  // --- REAL PHOTOGRAPHY SHOWCASE STATE & LIGHTBOX ---
  const [photoCategory, setPhotoCategory] = useState<'ALL' | 'STUDIO' | 'TEAM' | 'WORKSHOP' | 'SHOWROOM'>('ALL');
  const [activeLightboxPhoto, setActiveLightboxPhoto] = useState<{
    id: string;
    src: string;
    alt: string;
    title: string;
    category: 'STUDIO' | 'TEAM' | 'WORKSHOP' | 'SHOWROOM';
    categoryLabel: string;
    caption: string;
  } | null>(null);

  // --- SECTION 02: THE WORK IN MOTION AUTOPLAY STATE ---
  const [motionIndex, setMotionIndex] = useState<number>(0);

  // --- SECTION 03: SIGNATURE WORK AUTOPLAY STATE ---
  const [sigIndex, setSigIndex] = useState<number>(0);

  // --- SECTION 04: DETAIL TRANSFORMATION AUTOPLAY STATE ---
  const [detailIndex, setDetailIndex] = useState<number>(0);

  // Refs for Section 05 Transformation & Section 06 Process Entry Animations
  const transSectionRef = useRef<HTMLElement>(null);
  const processSectionRef = useRef<HTMLElement>(null);
  const processLineRef = useRef<HTMLDivElement>(null);
  const hasTransRevealedRef = useRef<boolean>(false);

  // Real TMR AI Car Care First-Party Studio, Team & Workshop Photographs (20 Authentic Real Photos)
  // Non-negotiable: 100% authentic, zero hallucinated text/pixels, one placement per photo
  const realStudioPhotos = [
    // 01 — STUDIO (Wide establishing)
    {
      id: 'studio-overview',
      src: '/images/gallery/studio/tmr-ai-car-care-facility-overview.jpg',
      alt: 'Wide establishing panoramic view of the TMR AI Car Care detailing facility, roadside totem sign, forecourt, and studio building in Tiruppur',
      title: 'FACILITY OVERVIEW & GROUNDS',
      category: 'STUDIO' as const,
      categoryLabel: '01 — STUDIO // GROUNDS',
      caption: 'Establishing panoramic view of the TMR AI Car Care property on Avinashi Road, Tiruppur, showing roadside entrance totem, driveway, and white studio building.',
      colSpanDesktop: 'lg:col-span-2 md:col-span-2',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.85/1]',
      objectPosition: 'center 60%',
    },
    // 02 — STUDIO (Storefront elevation)
    {
      id: 'studio-facade',
      src: '/images/gallery/studio/tmr-ai-car-care-studio-facade.jpg',
      alt: 'TMR AI Car Care glass showroom facade with customer vehicle inside, illuminated 3D branding, and service badges in Tiruppur',
      title: 'SHOWROOM ELEVATION & DETAILING BAY',
      category: 'STUDIO' as const,
      categoryLabel: '01 — STUDIO // ELEVATION',
      caption: 'Front elevation displaying floor-to-ceiling glass showroom with customer vehicle inside, illuminated 3D branding, and service menu.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.85/1]',
      objectPosition: 'center 25%',
    },
    // 03 — WORKSHOP (Innova Hycross & XUV700 dual bay)
    {
      id: 'workshop-innova-xuv700-bay',
      src: '/images/gallery/workshop/tmr-ai-car-care-workshop-innova-xuv700-bay.jpg',
      alt: 'TMR AI Car Care detailing technician working between a Toyota Innova Hycross and Mahindra XUV700 inside the workshop bay in Tiruppur',
      title: 'INNOVA HYCROSS & XUV700 DETAILING BAY',
      category: 'WORKSHOP' as const,
      categoryLabel: '03 — WORKSHOP // DUAL BAY',
      caption: 'TMR AI Car Care technician in uniform working between two customer vehicles, a Toyota Innova Hycross and Mahindra XUV700, inside the detailing bay.',
      colSpanDesktop: 'lg:col-span-2 md:col-span-2',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.85/1]',
      objectPosition: 'center 50%',
    },
    // 04 — WORKSHOP (3M mobile trolley supplies)
    {
      id: 'detailing-trolley-supplies',
      src: '/images/gallery/workshop/tmr-ai-car-care-detailing-trolley-supplies.jpg',
      alt: 'Professional 3M mobile detailing cart loaded with cleaning chemicals, spray bottles, and tools at TMR AI Car Care in Tiruppur',
      title: '3M MOBILE DETAILING TROLLEY & SUPPLIES',
      category: 'WORKSHOP' as const,
      categoryLabel: '03 — WORKSHOP // TOOLS',
      caption: 'Mobile detailing trolley loaded with professional 3M spray compounds, cleaners, detailing brushes, and microfiber cloths against the workshop wall.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.85/1]',
      objectPosition: 'center 40%',
    },
    // 05 — TEAM (Team in workshop bay)
    {
      id: 'team-workshop',
      src: '/images/gallery/team/tmr-ai-car-care-team-workshop.jpg',
      alt: 'TMR AI Car Care detailing team and technicians standing inside the workshop bay alongside customer vehicle in Tiruppur',
      title: 'WORKSHOP BAY & DETAILING TEAM',
      category: 'TEAM' as const,
      categoryLabel: '02 — TEAM // CRAFT',
      caption: 'Real TMR AI Car Care detailing technicians at work inside the studio bay alongside customer vehicle, showcasing the workshop environment.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.85/1]',
      objectPosition: 'center 35%',
    },
    // 06 — TEAM (Technician masking wheel arch)
    {
      id: 'technician-masking',
      src: '/images/gallery/team/tmr-ai-car-care-technician-masking.png',
      alt: 'TMR AI Car Care detailing technician applying protective surface masking tape to white SUV wheel arch and rear fender in Tiruppur',
      title: 'SURFACE MASKING & PAINT PREP',
      category: 'TEAM' as const,
      categoryLabel: '02 — TEAM // SURFACE PREP',
      caption: 'Detailing technician carefully applying protective masking tape to body lines and wheel arches prior to machine polishing.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.85/1]',
      objectPosition: 'center 65%',
    },
    // 07 — WORKSHOP (Orbital polisher & 3M compound)
    {
      id: 'polisher-compound',
      src: '/images/gallery/workshop/tmr-ai-car-care-polisher-compound.jpg',
      alt: 'Professional dual-action orbital machine polisher with wool pad laid beside a bottle of 3M Perfect-It compound on TMR workshop floor in Tiruppur',
      title: 'ORBITAL POLISHER & 3M COMPOUND',
      category: 'WORKSHOP' as const,
      categoryLabel: '03 — WORKSHOP // POLISHER',
      caption: 'Professional rotary and orbital polishing machine equipped with wool cutting pad alongside 3M Perfect-It compound on the studio bay floor.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.85/1]',
      objectPosition: 'center 50%',
    },
    // 08 — SHOWROOM (Panoramic retail inventory wall)
    {
      id: 'retail-showroom-inventory-wall',
      src: '/images/gallery/studio/tmr-ai-car-care-retail-showroom-inventory-wall.png',
      alt: 'Panoramic view of customer reception showroom with retail display shelves and car care inventory at TMR AI Car Care Tiruppur',
      title: 'SHOWROOM INVENTORY & CLIENT LOUNGE',
      category: 'SHOWROOM' as const,
      categoryLabel: '06 — OFFICE // SHOWROOM',
      caption: 'Wide panoramic view of customer reception showroom featuring glass shelving stocked with car care products, window films, and client seating.',
      colSpanDesktop: 'lg:col-span-2 md:col-span-2',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.85/1]',
      objectPosition: 'center 50%',
    },
    // 09 — SHOWROOM (Product & film shelving)
    {
      id: 'product-display-shelves',
      src: '/images/gallery/studio/tmr-ai-car-care-product-display-shelves.jpg',
      alt: 'Showroom retail display shelving with 3M Sun Control Window Film boxes and detailing supplies at TMR AI Car Care in Tiruppur',
      title: 'SHOWROOM PRODUCT & FILM DISPLAY',
      category: 'SHOWROOM' as const,
      categoryLabel: '06 — OFFICE // INVENTORY',
      caption: 'Showroom retail shelving stocked with authentic 3M Sun Control Window Film boxes, waxes, and rubbing compound bottles.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.85/1]',
      objectPosition: 'center 35%',
    },
    // 10 — SHOWROOM (Full retail inventory wall)
    {
      id: 'retail-inventory-wall',
      src: '/images/gallery/studio/tmr-ai-car-care-retail-inventory-shelving-wall.png',
      alt: 'Comprehensive showroom retail inventory wall stocked with Meguiar\'s clay bars, 3M aerosol cleaners, and detailing microfibers at TMR AI Car Care',
      title: 'RETAIL DETAILING INVENTORY WALL',
      category: 'SHOWROOM' as const,
      categoryLabel: '06 — OFFICE // RETAIL STOCK',
      caption: 'Multi-tier customer showroom shelving wall stocked with Meguiar\'s clay bar kits, 3M cleaners, microfiber towels, and detailing supplies.',
      colSpanDesktop: 'lg:col-span-2 md:col-span-2',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.85/1]',
      objectPosition: 'center 50%',
    },
    // 11 — SHOWROOM (3M Black Plastic Restorer demo display)
    {
      id: '3m-plastic-restorer-display',
      src: '/images/gallery/studio/tmr-ai-car-care-3m-plastic-restorer-display.jpg',
      alt: 'Official 3M Car Care Black Plastic Restorer before and after demonstration display counter at TMR AI Car Care in Tiruppur',
      title: '3M PLASTIC RESTORER DEMO DISPLAY',
      category: 'SHOWROOM' as const,
      categoryLabel: '06 — OFFICE // DEMO DISPLAY',
      caption: 'Official 3M Car Care demonstration counter display showcasing before-and-after plastic trim restoration alongside 3M glass cleaner aerosols.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.85/1]',
      objectPosition: 'center 50%',
    },
    // 12 — SHOWROOM (3M UnderShield display shelves)
    {
      id: '3m-undershield-shelves',
      src: '/images/gallery/studio/tmr-ai-car-care-3m-undershield-display-shelves.png',
      alt: '3M UnderShield Rust free treatment bottles and car care products displayed on glass showroom shelves at TMR AI Car Care Tiruppur',
      title: '3M UNDERSHIELD DISPLAY SHELVES',
      category: 'SHOWROOM' as const,
      categoryLabel: '06 — OFFICE // UNDERBODY CARE',
      caption: 'Showroom glass display shelving showcasing 3M UnderShield Rust-Free treatment bottles and professional underbody protection products.',
      colSpanDesktop: 'lg:col-span-2 md:col-span-2',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.85/1]',
      objectPosition: 'center 50%',
    },
    // 13 — SHOWROOM (Ceramic coatings & shampoo shelves)
    {
      id: 'ceramic-coating-shampoo-shelves',
      src: '/images/gallery/studio/tmr-ai-car-care-ceramic-coating-shampoo-shelves.jpg',
      alt: 'Meguiar\'s Beyond Ceramic Paint Coating kits, 3M Car Wash Shampoo bottles, and detailing aerosols on showroom shelves at TMR AI Car Care',
      title: 'CERAMIC COATINGS & CAR WASH SHAMPOO',
      category: 'SHOWROOM' as const,
      categoryLabel: '06 — OFFICE // CERAMIC & WASH',
      caption: 'Retail display shelving featuring Meguiar\'s Professional Beyond Ceramic Paint Coating (M688), 3M Car Wash Shampoo, and air conditioning treatments.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.85/1]',
      objectPosition: 'center 40%',
    },
    // 14 — SHOWROOM (3M microfibre cloth packet display)
    {
      id: '3m-microfibre-cloth-display',
      src: '/images/gallery/studio/tmr-ai-car-care-3m-microfibre-cloth-display.jpg',
      alt: '3M Auto Care Microfibre Cloth packet display hanging on retail showroom shelf beside Meguiar\'s NXT Top Coat at TMR AI Car Care',
      title: '3M MICROFIBRE CLOTH RETAIL DISPLAY',
      category: 'SHOWROOM' as const,
      categoryLabel: '06 — OFFICE // ACCESSORIES',
      caption: 'Showroom retail accessory display featuring hanging 3M Auto Care extra absorption microfiber cloths and Meguiar\'s NXT Generation Top Coat.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.85/1]',
      objectPosition: 'center 45%',
    },
    // 15 — WORKSHOP (Wash bay hydraulic lift ramp)
    {
      id: 'wash-bay-ramp',
      src: '/images/gallery/workshop/tmr-ai-car-care-wash-bay-ramp.jpg',
      alt: 'Silver Maruti Suzuki Swift customer vehicle on the hydraulic lift ramp inside the dedicated car wash bay at TMR AI Car Care Tiruppur',
      title: 'CAR WASH HYDRAULIC RAMP BAY',
      category: 'WORKSHOP' as const,
      categoryLabel: '03 — WORKSHOP // WASH BAY',
      caption: 'Dedicated foam wash and underbody wash bay featuring hydraulic lift ramp, tiled waterproof walls, and pressure spray lines.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.85/1]',
      objectPosition: 'center 40%',
    },
    // 16 — WORKSHOP (3M chemicals & 5L cleaner jugs cart)
    {
      id: '3m-cleaner-chemicals-cart',
      src: '/images/gallery/workshop/tmr-ai-car-care-3m-cleaner-chemicals-cart.jpg',
      alt: 'Close-up of official 3M car care cleaning compounds, 5L auto parts cleaner jugs, and detailing products in TMR workshop',
      title: '3M CAR CARE CHEMICALS & BULK CLEANERS',
      category: 'WORKSHOP' as const,
      categoryLabel: '03 — WORKSHOP // CHEMICALS',
      caption: 'Official 3M auto parts cleaner jugs, air conditioner treatment canisters, and professional detailing chemicals on the mobile cart.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.85/1]',
      objectPosition: 'center 40%',
    },
    // 17 — STUDIO (Roadside landmark totem sign)
    {
      id: 'roadside-totem',
      src: '/images/gallery/studio/tmr-ai-car-care-roadside-totem.jpg',
      alt: 'Roadside landmark totem sign for TMR AI Car Care displaying foam wash, ceramic, PPF, germ interiors, and exterior treatments in Tiruppur',
      title: 'ROADSIDE ENTRANCE TOTEM',
      category: 'STUDIO' as const,
      categoryLabel: '01 — STUDIO // LANDMARK',
      caption: 'Official roadside entrance pylon totem with illuminated logo and service capsules along the approach road in Tiruppur.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.85/1]',
      objectPosition: 'center 25%',
    },
    // 18 — SHOWROOM (Interior & treatment standees)
    {
      id: 'showroom-displays',
      src: '/images/gallery/studio/tmr-ai-car-care-showroom-displays.jpg',
      alt: 'TMR AI Car Care showroom interior view showing 3M Protection Treatments and Exterior Accentuation Program banner standees and product display shelves',
      title: 'SHOWROOM INTERIOR & DISPLAYS',
      category: 'SHOWROOM' as const,
      categoryLabel: '06 — OFFICE // RECEPTION',
      caption: 'Customer showroom viewing area featuring official 3M treatment informational standees, product displays, and ceiling illumination.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.85/1]',
      objectPosition: 'center 45%',
    },
    // 19 — SHOWROOM (Anti-rust display standee)
    {
      id: 'anti-rust-display',
      src: '/images/gallery/studio/tmr-ai-car-care-anti-rust-display.png',
      alt: '3M Car Care Anti-Rust Coating banner standee inside the glass showroom bay at TMR AI Car Care in Tiruppur',
      title: 'ANTI-RUST & UNDERBODY DISPLAY',
      category: 'SHOWROOM' as const,
      categoryLabel: '06 — OFFICE // STANDARDS',
      caption: 'Informational display for 3M Underbody Anti-Corrosion Treatment inside the front showroom overlooking the entrance forecourt.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.85/1]',
      objectPosition: 'center 45%',
    },
    // 20 — STUDIO (Architectural 3D facade header)
    {
      id: 'brand-signage',
      src: '/images/gallery/studio/tmr-ai-car-care-brand-signage.png',
      alt: 'Architectural close-up of the official 3D illuminated TMR AI Car Care facade signage header and service badges against blue sky',
      title: 'ARCHITECTURAL FACADE SIGNAGE',
      category: 'STUDIO' as const,
      categoryLabel: '01 — STUDIO // BRANDING',
      caption: 'Close-up architectural detail of the 3D illuminated storefront header with service badges (Graphene, Ceramic, PPF, Sun Film, Underseal, Germ Kleening).',
      colSpanDesktop: 'lg:col-span-3 md:col-span-2',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[2.5/1]',
      objectPosition: 'center 50%',
    },
  ];

  // Hero dedicated unique photographic assets (100% unique, non-duplicated)
  const heroVisuals = [
    {
      src: '/images/gallery/gallery-hero-01.jpg',
      alt: 'Luxury performance sedan undergoing 9H ceramic coating application at TMR AI Car Care in Tiruppur',
      tag: 'CERAMIC COATING // 9H ARMOR',
    },
    {
      src: '/images/gallery/gallery-hero-02.jpg',
      alt: 'Multi-stage paint correction and machine polishing on deep black clear coat at TMR AI Car Care in Tiruppur',
      tag: 'MULTI-STAGE CORRECTION',
    },
    {
      src: '/images/gallery/gallery-hero-03.jpg',
      alt: 'High-gloss hydrophobic paint protection film (PPF) installation at TMR AI Car Care in Tiruppur',
      tag: 'SELF-HEALING PPF ARMOR',
    },
    {
      src: '/images/gallery/gallery-hero-04.jpg',
      alt: 'Finished high-gloss reflection on dark luxury SUV at TMR AI Car Care detailing studio in Tiruppur',
      tag: 'REFLECTIVE CLARITY',
    },
  ];

  // Motion Section 02 dedicated 2-column paired visual datasets (100% unique, non-duplicated)
  const motionPairs = [
    {
      left: {
        id: '01',
        title: 'PAINT REFINEMENT',
        description: 'Multi-stage paint correction, swirl mark removal & deep reflection paint refinement',
        img: '/images/gallery/gallery-motion-01.jpg',
        alt: 'Paint correction and ceramic prep on dark vehicle panel at TMR AI Car Care in Tiruppur',
        link: '/services/detailing-paint-care',
      },
      right: {
        id: '02',
        title: 'CERAMIC COATING',
        description: '9H nano-ceramic surface protection, ceramic coating application & hydrophobic barrier',
        img: '/images/gallery/gallery-motion-02.jpg',
        alt: 'Ceramic coating application on luxury vehicle surface at TMR AI Car Care Tiruppur studio',
        link: '/services/ceramic-coating',
      },
    },
    {
      left: {
        id: '03',
        title: 'INTERIOR DETAILING',
        description: 'Interior car detailing, leather conditioning, cabin decontamination & deep car wash cleaning',
        img: '/images/gallery/gallery-motion-03.jpg',
        alt: 'Interior car detailing and cabin cleaning on luxury vehicle leather seats at TMR AI Car Care',
        link: '/services/car-wash-cleaning',
      },
      right: {
        id: '04',
        title: 'PPF INSTALLATION',
        description: 'Self-healing Paint Protection Film armor & PPF installation against stone chips',
        img: '/images/gallery/gallery-motion-04.jpg',
        alt: 'Paint protection film PPF installation with squeegee at TMR AI Car Care in Tiruppur',
        link: '/services/ppf-paint-protection',
      },
    },
    {
      left: {
        id: '05',
        title: 'PAINT FINISH',
        description: 'Flawless mirror gloss finish after professional machine polishing & clear coat care',
        img: '/images/gallery/gallery-motion-05.jpg',
        alt: 'Flawless mirror gloss finish on dark sports car bonnet post detailing at TMR AI Car Care',
        link: '/services/detailing-paint-care',
      },
      right: {
        id: '06',
        title: 'MIRROR GLOSS FINISH',
        description: 'Deep mirror gloss and paint depth after multi-stage ceramic coating application in Tiruppur',
        img: '/images/gallery/gallery-motion-06.jpg',
        alt: 'Finished high-gloss reflection on dark luxury vehicle after professional detailing at TMR AI Car Care',
        link: '/services/ceramic-coating',
      },
    },
  ];

  // Section 03 Signature Work datasets (Indian-market focus, 100% unique local assets & natural keywords)
  const sigVisuals = [
    {
      src: '/images/gallery/gallery-sig-xuv700.webp',
      alt: 'Professional paint correction and car detailing on Mahindra XUV700 SUV at TMR AI Car Care Tiruppur',
    },
    {
      src: '/images/gallery/gallery-sig-polishing.webp',
      alt: 'Machine polishing automotive clear coat at TMR AI Car Care detailing studio in Tiruppur',
    },
    {
      src: '/images/gallery/gallery-sig-ceramic.webp',
      alt: 'Ceramic coating application on luxury vehicle in Tiruppur Tamil Nadu',
    },
    {
      src: '/images/gallery/gallery-sig-safari.webp',
      alt: 'High-gloss paint finish on Tata Safari after professional car detailing service in Tiruppur',
    },
  ];

  // Section 04 Technical Detail Stages dataset (100% unique local assets & natural keywords)
  const detailVisuals = [
    {
      src: '/images/gallery/gallery-detail-inspection.webp',
      alt: 'Paint defect inspection and swirl mark audit under professional detailing lights at TMR AI Car Care',
    },
    {
      src: '/images/gallery/gallery-detail-polishing.webp',
      alt: 'Multi-stage machine polishing clear coat refinement at TMR AI Car Care Tiruppur',
    },
    {
      src: '/images/gallery/gallery-detail-coating.webp',
      alt: 'Applying hydrophobic 9H ceramic coating layer on vehicle door panel at TMR AI Car Care',
    },
    {
      src: '/images/gallery/gallery-detail-macro.webp',
      alt: 'Macro reflection and mirror gloss clarity on vehicle paint after detailing at TMR AI Car Care',
    },
  ];

  // Hero Section Parallax MouseMove Handler (Restricted to max +/- 12px for subtleness)
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 24;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 24;
    setHeroParallax({ x, y });
  };

  const handleHeroMouseLeave = () => {
    setHeroParallax({ x: 0, y: 0 });
  };

  // SEO Metadata Injection: Document Title, Meta Tags, Canonical Link & JSON-LD ImageGallery Schema
  useEffect(() => {
    document.title = "Car Detailing Gallery Tiruppur | Ceramic Coating, PPF & Real Studio Photos | TMR AI Car Care";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Explore authentic photographs of TMR AI Car Care studio in Tiruppur. Real workshop bays, ceramic coating, paint correction, wash ramps, 3M products & detailing team.'
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://tmrcarcare.com/gallery');

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'Car Detailing Gallery Tiruppur | Real Studio & Detailing Archive | TMR AI Car Care');

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', 'Visual portfolio of authentic car detailing, ceramic coating, paint protection film (PPF), wash bays, and workshop team at TMR AI Car Care in Tiruppur.');

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', 'https://tmrcarcare.com/gallery');

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', 'https://tmrcarcare.com/images/gallery/studio/tmr-ai-car-care-facility-overview.jpg');

    let schemaScript = document.getElementById('gallery-schema-script');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'gallery-schema-script';
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }

    const jsonLdData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
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
              "name": "Gallery",
              "item": "https://tmrcarcare.com/gallery"
            }
          ]
        },
        {
          "@type": "ImageGallery",
          "name": "TMR AI Car Care Detailing Studio & Paint Correction Gallery",
          "description": "Authentic visual archive of the TMR AI Car Care studio, workshop bays, detailing technicians, and real customer vehicles in Tiruppur, Tamil Nadu.",
          "url": "https://tmrcarcare.com/gallery",
          "provider": {
            "@type": "AutoRepair",
            "name": "TMR AI Car Care",
            "url": "https://tmrcarcare.com/"
          },
          "image": realStudioPhotos.map((photo) => ({
            "@type": "ImageObject",
            "name": photo.title,
            "contentUrl": `https://tmrcarcare.com${photo.src}`,
            "caption": photo.caption,
          }))
        }
      ]
    };
    schemaScript.textContent = JSON.stringify(jsonLdData);

    window.scrollTo(0, 0);

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(motionQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    motionQuery.addEventListener('change', handleMotionChange);
    return () => motionQuery.removeEventListener('change', handleMotionChange);
  }, []);

  // Escape key listener for lightbox modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveLightboxPhoto(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // IntersectionObserver for Section 05 Transformation & Section 06 Process Entry Animations
  useEffect(() => {
    const transObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTransRevealedRef.current) {
            hasTransRevealedRef.current = true;
            // Smooth initial reveal of Transformation from 0% to 50%
            gsap.to(
              { pos: 0 },
              {
                pos: 50,
                duration: 0.95,
                ease: 'power3.out',
                onUpdate: function () {
                  setSliderPos(this.targets()[0].pos);
                },
              }
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    if (transSectionRef.current) {
      transObserver.observe(transSectionRef.current);
    }

    const processObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && processLineRef.current) {
            processLineRef.current.style.width = '100%';
          }
        });
      },
      { threshold: 0.25 }
    );

    if (processSectionRef.current) {
      processObserver.observe(processSectionRef.current);
    }

    return () => {
      transObserver.disconnect();
      processObserver.disconnect();
    };
  }, []);

  // Hero Section 01 Autoplay Timer (4.0s sequence)
  useEffect(() => {
    if (isReducedMotion) return;
    const heroTimer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroVisuals.length);
    }, 4000);
    return () => clearInterval(heroTimer);
  }, [isReducedMotion, heroVisuals.length]);

  // Motion Section 02 Autoplay Timer (4.5s sequence)
  useEffect(() => {
    if (isReducedMotion) return;
    const motionTimer = setInterval(() => {
      setMotionIndex((prev) => (prev + 1) % motionPairs.length);
    }, 4500);
    return () => clearInterval(motionTimer);
  }, [isReducedMotion, motionPairs.length]);

  // Section 03 Signature Work Autoplay Timer (4.5s sequence)
  useEffect(() => {
    if (isReducedMotion) return;
    const sigTimer = setInterval(() => {
      setSigIndex((prev) => (prev + 1) % sigVisuals.length);
    }, 4500);
    return () => clearInterval(sigTimer);
  }, [isReducedMotion, sigVisuals.length]);

  // Section 04 Technical Detail Autoplay Timer (4.5s sequence)
  useEffect(() => {
    if (isReducedMotion) return;
    const detailTimer = setInterval(() => {
      setDetailIndex((prev) => (prev + 1) % detailVisuals.length);
    }, 4500);
    return () => clearInterval(detailTimer);
  }, [isReducedMotion, detailVisuals.length]);

  // Filter real photos by selected category
  const filteredPhotos = photoCategory === 'ALL'
    ? realStudioPhotos
    : realStudioPhotos.filter((p) => p.category === photoCategory);

  // Section 05 Instant Pointer & Touch Comparison Control Logic
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  return (
    <div className="w-full bg-[#050505] text-[#F5F4EF] font-manrope selection:bg-[#FF4B00] selection:text-white">
      
      {/* SECTION 01 — GALLERY HERO (FULL-BLEED VIEWPORT HERO WITH SAFE OVERSCAN PARALLAX) */}
      <section
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="relative w-full min-h-[90vh] lg:min-h-[100vh] flex flex-col justify-end pt-36 sm:pt-44 pb-16 px-5 md:px-16 overflow-hidden border-b border-white/10"
      >
        {/* Layer 1: Oversized Parallax Image Canvas (Moves subtly, overscanned by 40px on all edges) */}
        <div
          className="absolute -top-10 -bottom-10 -left-10 -right-10 z-0 pointer-events-none transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(${heroParallax.x}px, ${heroParallax.y}px, 0)`,
          }}
        >
          {heroVisuals.map((visual, idx) => {
            const isActive = idx === heroIndex;
            return (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={visual.src}
                  alt={visual.alt}
                  className={`w-full h-full object-cover object-center transition-transform duration-[6000ms] ease-out ${
                    isActive ? 'scale-110' : 'scale-105'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Layer 2: Static Dual-Tone Dark Overlay & Atmospheric Warmth (Never moves, locked to viewport) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/65 to-[#050505]/40 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-[#FF4B00]/10 via-transparent to-transparent opacity-40 z-10 pointer-events-none" />

        {/* Layer 3: Static Film Grain Texture Overlay (Never moves, locked to viewport) */}
        <div
          className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Layer 4: Stable Content Overlay Layer */}
        <div className="relative z-30 max-w-[1360px] w-full mx-auto flex flex-col lg:flex-row items-end justify-between gap-12 mt-auto">
          <div className="w-full lg:w-8/12 flex flex-col space-y-6">
            <h1 className="font-manrope font-extrabold text-5xl sm:text-7xl md:text-[88px] text-white leading-[0.9] tracking-tighter uppercase">
              THE WORK, <br />
              IN <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">frame.</span>
            </h1>

            <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] max-w-md border-l pl-4 border-white/20 leading-relaxed font-normal">
              A visual archive of TMR AI Car Care's professional car detailing studio, multi-stage paint correction, 9H ceramic coating, and paint protection film (PPF) craftsmanship in Tiruppur, Tamil Nadu.
            </p>

            <div className="pt-4 flex items-center gap-6">
              <a
                href="#studio-archive"
                className="inline-flex items-center font-bold text-xs text-white tracking-widest uppercase group hover:text-[#FF4B00] transition-colors"
              >
                <span>VIEW AUTHENTIC FACILITY ARCHIVE</span>
                <span className="ml-2 text-base group-hover:translate-x-2 transition-transform">→</span>
              </a>

              {/* Slide Indicator Dots */}
              <div className="flex items-center gap-2">
                {heroVisuals.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setHeroIndex(dotIdx)}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      dotIdx === heroIndex ? 'w-6 bg-[#FF4B00]' : 'w-1.5 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — AUTHENTIC STUDIO, WORKSHOP & TEAM ARCHIVE */}
      <section
        id="studio-archive"
        className="relative bg-[#050505] py-20 sm:py-32 overflow-hidden border-b border-white/10 font-manrope scroll-mt-24"
      >
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 space-y-12">
          
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF4B00] animate-pulse" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#FF4B00]">
                  AUTHENTIC PHOTOGRAPHY // TIRUPPUR STUDIO
                </span>
              </div>
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight leading-[0.95]">
                REAL STUDIO, WORKSHOP &amp; <br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">team</span> ARCHIVE.
              </h2>
              <p className="font-manrope text-sm sm:text-base text-[#D8D8D5] border-l pl-4 border-white/20 leading-relaxed font-normal">
                Authentic first-party photographs of the physical TMR AI Car Care studio, detailing technicians, customer vehicles, and workshop facility on Avinashi Road, Tiruppur.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              {(['ALL', 'STUDIO', 'TEAM', 'WORKSHOP', 'SHOWROOM'] as const).map((cat) => {
                const label =
                  cat === 'ALL'
                    ? 'ALL PHOTOS (20)'
                    : cat === 'STUDIO'
                    ? 'STUDIO & FACILITY (4)'
                    : cat === 'TEAM'
                    ? 'TEAM & CRAFT (2)'
                    : cat === 'WORKSHOP'
                    ? 'WORKSHOP & TOOLS (5)'
                    : 'SHOWROOM INTERIOR (9)';
                const isActive = photoCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setPhotoCategory(cat)}
                    type="button"
                    className={`px-4 py-2 rounded-md font-bold text-xs uppercase tracking-widest transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#FF4B00] text-white shadow-[0_0_15px_rgba(255,75,0,0.4)]'
                        : 'bg-white/5 border border-white/15 text-white/70 hover:text-white hover:border-white/40'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Balanced Editorial Grid with GSAP Reveal & Preserved Focal Framings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredPhotos.map((photo) => (
              <AuthenticPhotoCard
                key={photo.id}
                photo={photo}
                onClick={() => setActiveLightboxPhoto(photo)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 03 — THE WORK IN MOTION (AUTOMATIC HORIZONTAL REVEAL SLIDER) */}
      <section
        className="relative bg-[#050505] py-20 sm:py-32 overflow-hidden border-b border-white/10"
        id="motion"
      >
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="flex flex-col space-y-4">
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
                THE WORK IN <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">motion.</span>
              </h2>
              <p className="font-manrope text-sm sm:text-base text-[#D8D8D5] max-w-md border-l pl-4 border-white/20">
                A moving archive of professional car detailing, ceramic coating application, interior car cleaning, and PPF paint protection work in Tiruppur.
              </p>
            </div>

            {/* Auto-Updating Pagination Indicators */}
            <div className="flex items-center gap-3">
              {motionPairs.map((_, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => setMotionIndex(pIdx)}
                  aria-label={`Go to motion slide ${pIdx + 1}`}
                  className={`text-xs font-bold tracking-widest uppercase px-4 py-2 rounded border transition-all ${
                    pIdx === motionIndex
                      ? 'bg-[#FF4B00] border-[#FF4B00] text-white shadow-[0_0_15px_rgba(255,75,0,0.4)]'
                      : 'border-white/20 text-white/50 hover:text-white hover:border-white/40'
                  }`}
                >
                  0{pIdx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Editorial Horizontal Reveal Stage (Right to Left Transition, Zero Zoom) */}
          <div className="relative overflow-hidden w-full rounded-lg">
            <div
              className={`flex w-full ${
                isReducedMotion
                  ? 'transition-none'
                  : 'transition-transform duration-[850ms] ease-[cubic-bezier(0.65,0,0.35,1)]'
              }`}
              style={{
                transform: `translate3d(-${motionIndex * 100}%, 0, 0)`,
              }}
            >
              {motionPairs.map((pair, pIdx) => (
                <div
                  key={pIdx}
                  className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 p-0.5"
                >
                  {/* Left Editorial Visual */}
                  <Link
                    to={pair.left.link}
                    className="block relative overflow-hidden rounded-lg bg-[#0B0B0B] aspect-[16/10] border border-white/10 hover:border-[#FF4B00]/40 transition-colors shadow-2xl"
                  >
                    <img
                      src={pair.left.img}
                      alt={pair.left.alt}
                      className="w-full h-full object-cover scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 via-transparent to-transparent opacity-40 pointer-events-none" />
                  </Link>

                  {/* Right Editorial Visual */}
                  <Link
                    to={pair.right.link}
                    className="block relative overflow-hidden rounded-lg bg-[#0B0B0B] aspect-[16/10] border border-white/10 hover:border-[#FF4B00]/40 transition-colors shadow-2xl"
                  >
                    <img
                      src={pair.right.img}
                      alt={pair.right.alt}
                      className="w-full h-full object-cover scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 via-transparent to-transparent opacity-40 pointer-events-none" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — SIGNATURE WORK (REUSING EXACT HOME PAGE GSAP REVEAL ANIMATION) */}
      <section id="protection" className="relative bg-[#050505] py-20 sm:py-32 overflow-hidden border-b border-white/10 font-intertight scroll-mt-24">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 space-y-8">
          
          {/* EDITORIAL HEADER GROUP (OUTSIDE THE IMAGE STAGE) */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col space-y-4">
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-[0.95]">
                SIGNATURE <br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">automotive</span> WORK.
              </h2>
              <p className="font-manrope text-sm sm:text-base text-[#D8D8D5] max-w-xl border-l pl-4 border-white/20 leading-relaxed font-normal">
                A curated visual portfolio of full car detailing, multi-stage paint correction, 9H ceramic coating, and paint protection film (PPF) work completed at TMR AI Car Care in Tiruppur.
              </p>
            </div>

            {/* AUTO-UPDATING SEQUENCE INDICATORS */}
            <div className="flex items-center gap-2 shrink-0">
              {sigVisuals.map((_, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => setSigIndex(sIdx)}
                  aria-label={`Go to signature slide ${sIdx + 1}`}
                  className={`text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded border transition-all ${
                    sIdx === sigIndex
                      ? 'bg-[#FF4B00] border-[#FF4B00] text-white shadow-[0_0_15px_rgba(255,75,0,0.4)]'
                      : 'border-white/20 text-white/50 hover:text-white hover:border-white/40'
                  }`}
                >
                  0{sIdx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* LARGE CINEMATIC IMAGE STAGE USING EXACT HOME PAGE GSAP REVEAL ANIMATION */}
          <div className="w-full">
            <HomeStyleGalleryStage
              images={sigVisuals}
              activeIndex={sigIndex}
              aspectRatio="aspect-[16/9] md:aspect-[21/9]"
            />
          </div>
        </div>
      </section>

      {/* SECTION 05 — DETAIL (REUSING EXACT HOME PAGE GSAP REVEAL ANIMATION) */}
      <section id="detailing" className="relative bg-[#070809] py-20 sm:py-32 overflow-hidden text-[#F5F4EF] border-b border-white/10 font-intertight scroll-mt-24">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT SIDE TECHNICAL EDITORIAL GROUP */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight leading-[0.95]">
                PAINT CORRECTION <br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">changes everything.</span>
              </h2>

              <p className="font-manrope text-sm sm:text-base text-[#D8D8D5] leading-relaxed border-l pl-4 border-white/20">
                Close-up automotive detailing work showing paint defect inspection, swirl mark removal, multi-stage machine polishing, and clear coat surface refinement at TMR AI Car Care in Tiruppur.
              </p>

              <div className="pt-4">
                <Link
                  to="/services/detailing-paint-care"
                  className="group inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors"
                >
                  <span>SEE PAINT CORRECTION SERVICES</span>
                  <span className="text-[#FF4B00] group-hover:translate-x-1.5 transition-transform duration-300">↗</span>
                </Link>
              </div>

              {/* TECHNICAL PROGRESS STAGE BUTTONS */}
              <div className="flex items-center gap-2 pt-2">
                {detailVisuals.map((_, dIdx) => (
                  <button
                    key={dIdx}
                    onClick={() => setDetailIndex(dIdx)}
                    aria-label={`Go to detail slide ${dIdx + 1}`}
                    className={`text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded border transition-all ${
                      dIdx === detailIndex
                        ? 'bg-[#FF4B00] border-[#FF4B00] text-white'
                        : 'border-white/20 text-white/50 hover:text-white hover:border-white/40'
                    }`}
                  >
                    0{dIdx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE LARGE ANIMATED STAGE USING EXACT HOME PAGE GSAP REVEAL ANIMATION */}
            <div className="lg:col-span-7">
              <HomeStyleGalleryStage
                images={detailVisuals}
                activeIndex={detailIndex}
                aspectRatio="aspect-[4/3] sm:aspect-[16/10]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — TRANSFORMATION (INTERACTIVE BEFORE / AFTER SLIDER) */}
      <section
        ref={transSectionRef}
        className="relative bg-[#050505] py-20 sm:py-32 overflow-hidden border-b border-white/10"
      >
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-4">
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
                THE TRANSFORMATION <br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">before &amp; after.</span>
              </h2>
              <p className="font-manrope text-sm sm:text-base text-[#D8D8D5] max-w-md border-l pl-4 border-white/20">
                Move or drag across the frame to inspect the profound difference multi-stage paint correction makes on swirled clear coat at TMR AI Car Care.
              </p>
            </div>
            <div className="text-xs font-mono text-[#FF4B00] tracking-widest uppercase bg-[#FF4B00]/10 border border-[#FF4B00]/20 px-4 py-2 rounded-full w-fit">
              LIVE COMPARISON STAGE
            </div>
          </div>

          {/* Instant Responsive Touch & Mouse Split-Screen Slider */}
          <div
            className="relative w-full aspect-[16/10] sm:aspect-[21/9] rounded-xl overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            onPointerMove={handlePointerMove}
            onTouchMove={handleTouchMove}
          >
            {/* Background: AFTER Image (Corrected Deep Gloss) */}
            <img
              src="/images/gallery/gallery-transformation-after-final.jpg"
              alt="Mirror finish on car paint after multi-stage paint correction at TMR AI Car Care in Tiruppur"
              className="absolute inset-0 w-full h-full object-cover scale-100"
            />
            <div className="absolute top-6 right-6 z-10 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-bold tracking-widest text-[#FF4B00] uppercase pointer-events-none">
              AFTER CORRECTION
            </div>

            {/* Foreground: BEFORE Image (Swirled & Scratched) clipped to slider position */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src="/images/gallery/gallery-transformation-before-final.jpg"
                alt="Swirl marks and clear coat micro-scratches before paint correction at TMR AI Car Care"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="absolute top-6 left-6 z-10 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-bold tracking-widest text-white/80 uppercase pointer-events-none">
                BEFORE CORRECTION
              </div>
            </div>

            {/* Divider Line & Draggable Handle */}
            <div
              className="absolute inset-y-0 w-0.5 bg-white pointer-events-none shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#FF4B00] border-2 border-white flex items-center justify-center shadow-2xl text-white text-xs font-bold">
                ↔
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — THE PROCESS (WARM IVORY EDITORIAL HORIZONTAL TIMELINE) */}
      <section
        ref={processSectionRef}
        className="relative bg-[#FBFBFA] py-20 sm:py-32 overflow-hidden border-b border-[#E5E5E0] text-[#111111]"
      >
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E5E5E0] pb-8">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#FF4B00] uppercase">
                METHODOLOGY &amp; STANDARDS
              </span>
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl text-[#111111] uppercase tracking-tight">
                THE 3-STAGE <br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">refinement</span> PROCESS.
              </h2>
            </div>
            <p className="font-manrope text-sm text-[#5f5e5e] max-w-sm border-l pl-4 border-[#D8D8D5] leading-relaxed">
              Every vehicle undergoes our structured 3-phase decontamination, precision compounding, and surface sealing protocol in Tiruppur.
            </p>
          </div>

          {/* 3-Step Horizontal Timeline Cards */}
          <div className="relative">
            {/* Animated Horizontal Connecting Line */}
            <div className="hidden md:block absolute top-[52px] left-0 right-0 h-[1.5px] bg-[#D8D8D5] z-0">
              <div
                ref={processLineRef}
                className="h-full bg-[#FF4B00] w-0 transition-all duration-1000 ease-out"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
              {/* Stage 01 */}
              <div
                tabIndex={0}
                className="group flex flex-col space-y-4 p-6 sm:p-8 rounded-xl border border-transparent hover:border-[#D8D8D5] hover:bg-white/60 transition-all duration-300 cursor-pointer focus:outline-none focus:border-[#FF4B00]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-manrope font-extrabold text-5xl sm:text-7xl text-[#111111]/30 group-hover:text-[#FF4B00] group-focus:text-[#FF4B00] transition-colors duration-300">
                    01
                  </span>
                  <span className="text-[10px] font-extrabold text-[#FF4B00] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    STAGE ONE
                  </span>
                </div>
                <h3 className="font-manrope font-extrabold text-xl sm:text-2xl text-[#111111] uppercase tracking-tight group-hover:text-[#FF4B00] transition-colors">
                  DECONTAMINATION
                </h3>
                <p className="font-manrope text-xs sm:text-sm text-[#5f5e5e] leading-relaxed">
                  Surface preparation, chemical fallout removal, synthetic clay bar treatment, and foam car wash prep to strip road tar and old waxes.
                </p>
              </div>

              {/* Stage 02 */}
              <div
                tabIndex={0}
                className="group flex flex-col space-y-4 p-6 sm:p-8 rounded-xl border border-transparent hover:border-[#D8D8D5] hover:bg-white/60 transition-all duration-300 cursor-pointer focus:outline-none focus:border-[#FF4B00]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-manrope font-extrabold text-5xl sm:text-7xl text-[#111111]/30 group-hover:text-[#FF4B00] group-focus:text-[#FF4B00] transition-colors duration-300">
                    02
                  </span>
                  <span className="text-[10px] font-extrabold text-[#FF4B00] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    STAGE TWO
                  </span>
                </div>
                <h3 className="font-manrope font-extrabold text-xl sm:text-2xl text-[#111111] uppercase tracking-tight group-hover:text-[#FF4B00] transition-colors">
                  CORRECTION
                </h3>
                <p className="font-manrope text-xs sm:text-sm text-[#5f5e5e] leading-relaxed">
                  Multi-stage rotary and dual-action machine polishing to permanently eliminate swirl marks, light scratches, and micro-marring.
                </p>
              </div>

              {/* Stage 03 */}
              <div
                tabIndex={0}
                className="group flex flex-col space-y-4 p-6 sm:p-8 rounded-xl border border-transparent hover:border-[#D8D8D5] hover:bg-white/60 transition-all duration-300 cursor-pointer focus:outline-none focus:border-[#FF4B00]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-manrope font-extrabold text-5xl sm:text-7xl text-[#111111]/30 group-hover:text-[#FF4B00] group-focus:text-[#FF4B00] transition-colors duration-300">
                    03
                  </span>
                  <span className="text-[10px] font-extrabold text-[#FF4B00] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    STAGE THREE
                  </span>
                </div>
                <h3 className="font-manrope font-extrabold text-xl sm:text-2xl text-[#111111] uppercase tracking-tight group-hover:text-[#FF4B00] transition-colors">
                  PROTECTION
                </h3>
                <p className="font-manrope text-xs sm:text-sm text-[#5f5e5e] leading-relaxed">
                  Ceramic coating application or Paint Protection Film (PPF) installation sealing in depth, high gloss, and hydrophobic barrier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 08 — GALLERY FINAL CTA (CINEMATIC AUTOMOTIVE END FRAME) */}
      <section className="relative w-full min-h-[75vh] md:min-h-[85vh] flex flex-col justify-end bg-[#050505] text-white overflow-hidden py-20 sm:py-32 font-intertight border-t border-white/10">
        {/* Layer 1: Full-Bleed Cinematic Background Image (Unique Dedicated Asset) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/gallery/gallery-final-cta.jpg"
            alt="Freshly detailed vehicle inside TMR AI Car Care flagship studio bay in Tiruppur"
            className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-[10000ms] ease-out hover:scale-105"
          />
        </div>

        {/* Layer 2: Fixed Dark Cinematic Overlay Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/95 via-black/80 to-black/40 pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none" />

        {/* Layer 3: Editorial Content Box */}
        <div className="relative z-20 max-w-[1360px] w-full mx-auto px-5 md:px-16 flex flex-col justify-end space-y-8 my-auto">
          <div className="max-w-2xl space-y-6">
            <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase text-white leading-[0.92] tracking-tighter">
              EXPERIENCE THE <br />
              <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">finish.</span>
            </h2>

            <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] leading-relaxed font-normal border-l pl-4 border-white/20 max-w-xl">
              Professional car detailing, paint correction, ceramic coating, and paint protection film in Tiruppur, Tamil Nadu.
            </p>

            {/* Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=Booking%20Gallery%20Service`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#FF4B00] text-white rounded-md font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#050505] transition-colors shadow-2xl text-center inline-flex items-center justify-center gap-2"
              >
                <span>WHATSAPP TMR</span>
                <span className="text-base">→</span>
              </a>

              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-md font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#050505] transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                <span>BOOK APPOINTMENT</span>
                <span className="text-base">→</span>
              </Link>
            </div>

            {/* Location Line */}
            <div className="pt-6 border-t border-white/15 text-xs text-[#858585] uppercase tracking-widest font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF4B00] animate-pulse" />
              <span>Tiruppur, Tamil Nadu • Avinashi Road • TMR AI Car Care Detailing Studio</span>
            </div>
          </div>
        </div>
      </section>

      {/* FULLSCREEN REAL PHOTO LIGHTBOX MODAL */}
      {activeLightboxPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeLightboxPhoto.title}
          onClick={() => setActiveLightboxPhoto(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 select-none"
        >
          {/* Modal Header */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl mx-auto flex items-center justify-between py-3 border-b border-white/15"
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#FF4B00]" />
              <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">
                {activeLightboxPhoto.categoryLabel}
              </span>
              <span className="hidden sm:inline text-white/30">•</span>
              <span className="hidden sm:inline font-manrope font-bold text-sm text-white uppercase tracking-tight">
                {activeLightboxPhoto.title}
              </span>
            </div>

            <button
              onClick={() => setActiveLightboxPhoto(null)}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 hover:bg-[#FF4B00] text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <span>CLOSE</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Main Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex items-center justify-center p-2 sm:p-6 my-auto overflow-hidden"
          >
            <img
              src={activeLightboxPhoto.src}
              alt={activeLightboxPhoto.alt}
              className="max-h-[72vh] max-w-[92vw] object-contain rounded-lg shadow-[0_25px_60px_rgba(0,0,0,0.95)] border border-white/15"
            />
          </div>

          {/* Modal Footer Caption */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl mx-auto text-center py-3"
          >
            <p className="font-manrope text-xs sm:text-sm text-[#D8D8D5] leading-relaxed max-w-2xl mx-auto">
              {activeLightboxPhoto.caption}
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
