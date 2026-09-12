import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { X, Maximize2, Phone, MessageSquare } from 'lucide-react';
import { companyData } from '@/data/company';

// --- AUTHENTIC FIRST-PARTY PHOTO CARD WITH GSAP INTERSECTIONOBSERVER REVEAL ---
// Clean editorial presentation: unobstructed authentic image, minimal corner badge, subtle hover title, full metadata in lightbox modal
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
          } else {
            // Only reset if user has already revealed and scrolled away
            if (hasRevealedRef.current) {
              gsap.to(card, {
                clipPath: 'inset(0 100% 0 0)',
                opacity: 0,
                duration: 0.5,
                ease: 'power3.in',
                overwrite: 'auto',
              });
              gsap.to(img, {
                x: -24,
                scale: 1.025,
                duration: 0.5,
                ease: 'power3.in',
                overwrite: 'auto',
              });
              hasRevealedRef.current = false;
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${photo.colSpanDesktop}`}
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
        className={`w-full ${photo.aspectDesktop} relative block overflow-hidden rounded-xl border border-white/10 hover:border-[#FF4B00]/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-black/60 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#FF4B00] transition-colors duration-300`}
      >
        <img
          ref={imgRef}
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          style={{ objectPosition: photo.objectPosition }}
        />

        {/* Minimal Corner Badge - Top Left */}
        <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
          <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/15 text-white/90 shadow-md">
            {photo.categoryLabel}
          </span>
        </div>

        {/* Maximize Icon - Top Right (Visible on hover) */}
        <div className="absolute top-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 group-hover:text-[#FF4B00] shadow-md">
            <Maximize2 className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Clean Editorial Title Bar - Bottom (Smooth hover reveal, no long paragraphs obscuring photograph) */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-3.5 sm:p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <h3 className="font-manrope font-extrabold text-xs sm:text-sm text-white tracking-tight uppercase line-clamp-1 drop-shadow-md">
            {photo.title}
          </h3>
        </div>
      </div>
    </div>
  );
});

AuthenticPhotoCard.displayName = 'AuthenticPhotoCard';

export const GalleryPage: React.FC = () => {
  // Category state for interactive filtering
  const [photoCategory, setPhotoCategory] = useState<'ALL' | 'STUDIO' | 'TEAM' | 'WORKSHOP' | 'SHOWROOM'>('ALL');

  // Lightbox Modal state
  const [activeLightboxPhoto, setActiveLightboxPhoto] = useState<{
    id: string;
    src: string;
    alt: string;
    title: string;
    categoryLabel: string;
    caption: string;
  } | null>(null);

  // Section 04 Transformation Slider state (Percentage 0 - 100)
  const [sliderPos, setSliderPos] = useState<number>(50);

  // Hero Section Parallax state
  const [heroParallax, setHeroParallax] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // DOM Refs
  const transSectionRef = useRef<HTMLElement>(null);
  const processSectionRef = useRef<HTMLElement>(null);
  const processLineRef = useRef<HTMLDivElement>(null);
  const hasTransRevealedRef = useRef<boolean>(false);

  const isReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  // HERO DEDICATED AUTHENTIC VISUAL (1 unique establishing photograph)
  const heroVisual = {
    src: '/images/gallery/studio/tmr-ai-car-care-facility-overview.jpg',
    alt: 'Establishing panoramic view of the TMR AI Car Care detailing facility, roadside totem sign, and forecourt on Avinashi Road, Tiruppur',
    tag: 'STUDIO GROUNDS // AVINASHI ROAD',
    title: 'FACILITY OVERVIEW & DETAILING GROUNDS',
    caption: 'Establishing panoramic view of the TMR AI Car Care property on Avinashi Road, Tiruppur, showing roadside entrance totem, driveway, and white studio building.',
  };

  // MAIN UNIQUE PHOTO ARCHIVE (28 unique authentic real photographs across studio, team, workshop, showroom)
  // Strict rule: zero duplicates across sections, aspect-ratio intelligent layout preserving full visual content
  const realStudioPhotos = [
    // --- STUDIO & FACILITY (3 photos) ---
    {
      id: 'studio-facade',
      src: '/images/gallery/studio/tmr-ai-car-care-studio-facade.jpg',
      alt: 'TMR AI Car Care glass showroom facade with customer vehicle inside, illuminated 3D branding, and service badges in Tiruppur',
      title: 'SHOWROOM ELEVATION & DETAILING BAY',
      category: 'STUDIO' as const,
      categoryLabel: '01 — STUDIO // ELEVATION',
      caption: 'Front elevation displaying floor-to-ceiling glass showroom with customer vehicle inside, illuminated 3D branding, and service menu.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 25%',
    },
    {
      id: 'roadside-totem',
      src: '/images/gallery/studio/tmr-ai-car-care-roadside-totem.jpg',
      alt: 'Roadside landmark totem sign for TMR AI Car Care displaying foam wash, ceramic, PPF, germ interiors, and exterior treatments in Tiruppur',
      title: 'ROADSIDE ENTRANCE TOTEM',
      category: 'STUDIO' as const,
      categoryLabel: '01 — STUDIO // LANDMARK',
      caption: 'Official roadside entrance pylon totem with illuminated logo and service capsules along the approach road in Tiruppur.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 20%',
    },
    {
      id: 'brand-signage',
      src: '/images/gallery/studio/tmr-ai-car-care-brand-signage.png',
      alt: 'Architectural close-up of the official 3D illuminated TMR AI Car Care facade signage header and service badges against blue sky',
      title: 'ARCHITECTURAL FACADE SIGNAGE',
      category: 'STUDIO' as const,
      categoryLabel: '01 — STUDIO // BRANDING',
      caption: 'Close-up architectural detail of the 3D illuminated storefront header with service badges (Graphene, Ceramic, PPF, Sun Film, Underseal, Germ Kleening).',
      colSpanDesktop: 'lg:col-span-1 md:col-span-2',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.85/1]',
      objectPosition: 'center 50%',
    },

    // --- TEAM & CRAFT (7 photos) ---
    {
      id: 'full-detailing-team',
      src: '/images/gallery/team/tmr-ai-car-care-full-detailing-team.png',
      alt: 'Full detailing team of TMR AI Car Care standing in the workshop bay giving thumbs-up gestures in Tiruppur',
      title: 'TMR AI CAR CARE DETAILING CREW',
      category: 'TEAM' as const,
      categoryLabel: '02 — TEAM // WORKSHOP CREW',
      caption: 'The complete TMR AI Car Care detailing staff and technicians in uniform gathered inside the workshop facility.',
      colSpanDesktop: 'lg:col-span-2 md:col-span-2',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[2.2/1]',
      objectPosition: 'center 45%',
    },
    {
      id: 'detailing-technicians-thumbs-up',
      src: '/images/gallery/team/tmr-ai-car-care-detailing-technicians-thumbs-up.jpg',
      alt: 'Three TMR AI Car Care detailing technicians giving thumbs up between vehicles in the workshop in Tiruppur',
      title: 'DETAILING TECHNICIANS AT WORK',
      category: 'TEAM' as const,
      categoryLabel: '02 — TEAM // TECHNICIANS',
      caption: 'Three detailing specialists in uniform standing between customer vehicles inside the active Tiruppur workshop.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[4/3] sm:aspect-[16/10]',
      objectPosition: 'center 30%',
    },
    {
      id: 'technician-masking',
      src: '/images/gallery/team/tmr-ai-car-care-technician-masking.png',
      alt: 'TMR AI Car Care detailing technician applying protective surface masking tape to white SUV wheel arch and rear fender in Tiruppur',
      title: 'PRECISION SURFACE MASKING PREP',
      category: 'TEAM' as const,
      categoryLabel: '02 — TEAM // MASKING CRAFT',
      caption: 'Detailing technician in official uniform applying protective masking tape to wheel arches and body trim before compound polishing.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 35%',
    },
    {
      id: 'team-workshop',
      src: '/images/gallery/team/tmr-ai-car-care-team-workshop.jpg',
      alt: 'TMR AI Car Care detailing team and technicians standing inside the workshop bay alongside customer vehicle in Tiruppur',
      title: 'WORKSHOP BAY & DETAILING TEAM',
      category: 'TEAM' as const,
      categoryLabel: '02 — TEAM // BAY SPECIALISTS',
      caption: 'Detailing specialists in uniform positioned beside customer vehicle inside the active workshop bay.',
      colSpanDesktop: 'lg:col-span-2 md:col-span-2',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.85/1]',
      objectPosition: 'center 35%',
    },
    {
      id: 'technician-door-jamb-cleaning',
      src: '/images/gallery/team/tmr-ai-car-care-technician-door-jamb-cleaning.png',
      alt: 'TMR AI Car Care technician cleaning vehicle door jamb and latch with microfiber cloth in Tiruppur',
      title: 'DOOR JAMB & LATCH DETAILING',
      category: 'TEAM' as const,
      categoryLabel: '02 — TEAM // INTERIOR DETAIL',
      caption: 'Technician meticulously cleaning door jambs, hinges, and weatherstripping using dedicated microfibers and cleaners.',
      colSpanDesktop: 'lg:col-span-2 md:col-span-2',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[2.2/1]',
      objectPosition: 'center 50%',
    },
    {
      id: 'technician-microfibre-prep',
      src: '/images/gallery/team/tmr-ai-car-care-technician-microfibre-prep.jpg',
      alt: 'TMR AI Car Care technician in uniform with microfiber cloth preparing car door and interior during detailing in Tiruppur',
      title: 'INTERIOR & DOOR PANEL PREPARATION',
      category: 'TEAM' as const,
      categoryLabel: '02 — TEAM // SURFACE PREP',
      caption: 'Detailing specialist in official 3M uniform prepping door panels and glass surfaces during comprehensive interior detailing.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 30%',
    },
    {
      id: '3m-uniform-embroidery',
      src: '/images/gallery/team/tmr-ai-car-care-3m-uniform-embroidery.jpg',
      alt: 'Official 3M Car Care embroidered insignia on black technician uniform polo at TMR AI Car Care Tiruppur',
      title: 'OFFICIAL 3M CAR CARE EMBROIDERY',
      category: 'TEAM' as const,
      categoryLabel: '02 — TEAM // UNIFORM DETAIL',
      caption: 'Close-up macro detail of the official 3M Car Care embroidered logo on the chest of our technician polo uniform.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 45%',
    },

    // --- WORKSHOP & TOOLS (6 photos) ---
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
    {
      id: 'detailing-trolley-supplies',
      src: '/images/gallery/workshop/tmr-ai-car-care-detailing-trolley-supplies.jpg',
      alt: 'Professional 3M mobile detailing cart loaded with cleaning chemicals, spray bottles, and tools at TMR AI Car Care in Tiruppur',
      title: '3M MOBILE DETAILING TROLLEY & SUPPLIES',
      category: 'WORKSHOP' as const,
      categoryLabel: '03 — WORKSHOP // TOOLS',
      caption: 'Mobile detailing trolley loaded with professional 3M spray compounds, cleaners, detailing brushes, and microfiber cloths against the workshop wall.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 40%',
    },
    {
      id: 'fortuner-swift-workshop-bay',
      src: '/images/gallery/workshop/tmr-ai-car-care-fortuner-swift-workshop-bay.jpg',
      alt: 'Two TMR AI Car Care technicians detailing a white Toyota Fortuner and silver Maruti Suzuki Swift inside the workshop bay in Tiruppur',
      title: 'FORTUNER & SWIFT DETAILING BAY',
      category: 'WORKSHOP' as const,
      categoryLabel: '03 — WORKSHOP // VEHICLE BAYS',
      caption: 'Two detailing technicians working simultaneously on a white Toyota Fortuner SUV and silver Maruti Swift hatchback in the workshop bay.',
      colSpanDesktop: 'lg:col-span-2 md:col-span-2',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.85/1]',
      objectPosition: 'center 45%',
    },
    {
      id: 'polisher-compound',
      src: '/images/gallery/workshop/tmr-ai-car-care-polisher-compound.jpg',
      alt: 'Professional dual-action orbital machine polisher with wool pad laid beside a bottle of 3M Perfect-It compound on TMR workshop floor in Tiruppur',
      title: 'ORBITAL MACHINE POLISHER & 3M COMPOUND',
      category: 'WORKSHOP' as const,
      categoryLabel: '03 — WORKSHOP // EQUIPMENT',
      caption: 'Professional dual-action orbital polisher equipped with wool cutting pad resting beside 3M Perfect-It rubbing compound.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-square',
      objectPosition: 'center 50%',
    },
    {
      id: 'wash-bay-ramp',
      src: '/images/gallery/workshop/tmr-ai-car-care-wash-bay-ramp.jpg',
      alt: 'Dedicated vehicle wash bay ramp with commercial yellow drive-on hydraulic lift at TMR AI Car Care in Tiruppur',
      title: 'HYDRAULIC WASH BAY RAMP',
      category: 'WORKSHOP' as const,
      categoryLabel: '03 — WORKSHOP // WASH BAY',
      caption: 'Commercial hydraulic yellow drive-on ramp designed for underbody wash, chassis cleaning, and anti-rust treatment in the wash bay.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 40%',
    },
    {
      id: '3m-cleaner-chemicals-cart',
      src: '/images/gallery/workshop/tmr-ai-car-care-3m-cleaner-chemicals-cart.jpg',
      alt: 'Close-up of official 3M car care cleaning compounds, 5L auto parts cleaner jugs, and detailing products in TMR workshop',
      title: '3M CAR CARE CHEMICALS & BULK CLEANERS',
      category: 'WORKSHOP' as const,
      categoryLabel: '03 — WORKSHOP // CHEMICALS',
      caption: 'Official 3M auto parts cleaner jugs, air conditioner treatment canisters, and professional detailing chemicals on the mobile cart.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 40%',
    },

    // --- SHOWROOM & OFFICE (12 photos) ---
    {
      id: 'reception-lounge-standees',
      src: '/images/gallery/studio/tmr-ai-car-care-reception-lounge-standees.png',
      alt: 'TMR AI Car Care customer reception and consultation lounge with 3M PPF standees and customer vehicle in Tiruppur',
      title: 'CUSTOMER RECEPTION & CONSULTATION LOUNGE',
      category: 'SHOWROOM' as const,
      categoryLabel: '04 — SHOWROOM // RECEPTION',
      caption: 'Glass-partitioned customer consultation lounge with comfortable seating, 3M PPF informational standees, and direct view into the bay.',
      colSpanDesktop: 'lg:col-span-2 md:col-span-2',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[2.2/1]',
      objectPosition: 'center 50%',
    },
    {
      id: 'retail-showroom-inventory-wall',
      src: '/images/gallery/studio/tmr-ai-car-care-retail-showroom-inventory-wall.png',
      alt: 'Panoramic view of customer reception showroom with retail display shelves and car care inventory at TMR AI Car Care Tiruppur',
      title: 'RETAIL SHOWROOM & PRODUCT WALL',
      category: 'SHOWROOM' as const,
      categoryLabel: '04 — SHOWROOM // RETAIL WALL',
      caption: "Customer showroom featuring illuminated glass display cases stocked with Meguiar's ceramic kits, 3M car care products, and accessories.",
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9]',
      objectPosition: 'center 50%',
    },
    {
      id: 'product-display-shelves',
      src: '/images/gallery/studio/tmr-ai-car-care-product-display-shelves.jpg',
      alt: 'Showroom retail display shelving with 3M Sun Control Window Film boxes and detailing supplies at TMR AI Car Care in Tiruppur',
      title: '3M SUN CONTROL & CARE PRODUCTS',
      category: 'SHOWROOM' as const,
      categoryLabel: '04 — SHOWROOM // PRODUCTS',
      caption: "Product display shelves showing official 3M Sun Control Window Film rolls, Meguiar's waxes, and interior detailing sprays.",
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 35%',
    },
    {
      id: 'retail-inventory-shelving-wall',
      src: '/images/gallery/studio/tmr-ai-car-care-retail-inventory-shelving-wall.png',
      alt: "Comprehensive showroom retail inventory wall stocked with Meguiar's clay bars, 3M aerosol cleaners, and detailing microfibers at TMR AI Car Care",
      title: 'DETAILING INVENTORY & SUPPLIES WALL',
      category: 'SHOWROOM' as const,
      categoryLabel: '04 — SHOWROOM // INVENTORY',
      caption: "Extensive inventory wall stocked with Meguiar's synthetic clay bars, 3M aerosol foaming cleaners, and ultra-plush detailing towels.",
      colSpanDesktop: 'lg:col-span-2 md:col-span-2',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[2.2/1]',
      objectPosition: 'center 50%',
    },
    {
      id: 'dashboard-dresser-ceramic-display',
      src: '/images/gallery/studio/tmr-ai-car-care-dashboard-dresser-ceramic-display.png',
      alt: "3M Dashboard Dresser bottles and Meguiar's M688 Beyond Ceramic Paint Coating kit displayed on glass shelves at TMR AI Car Care Tiruppur",
      title: "3M DRESSER & MEGUIAR'S CERAMIC COATING",
      category: 'SHOWROOM' as const,
      categoryLabel: '04 — SHOWROOM // CERAMIC DISPLAY',
      caption: "Showroom display counter showing 3M Dashboard Dresser spray bottles and the flagship Meguiar's M688 Beyond Ceramic coating system.",
      colSpanDesktop: 'lg:col-span-2 md:col-span-2',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[2.2/1]',
      objectPosition: 'center 50%',
    },
    {
      id: 'undershield-protective-coating-shelf',
      src: '/images/gallery/studio/tmr-ai-car-care-undershield-protective-coating-shelf.png',
      alt: 'Bottles of 3M UnderShield protective undercoating and underseal cans neatly arranged on showroom shelves at TMR AI Car Care',
      title: '3M UNDERSHIELD PROTECTIVE COATING',
      category: 'SHOWROOM' as const,
      categoryLabel: '04 — SHOWROOM // UNDERBODY CARE',
      caption: 'Stock of official 3M UnderShield protective underbody coating canisters and anti-rust treatments on display shelves.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9]',
      objectPosition: 'center 50%',
    },
    {
      id: '3m-plastic-restorer-display',
      src: '/images/gallery/studio/tmr-ai-car-care-3m-plastic-restorer-display.jpg',
      alt: 'Official 3M Car Care Black Plastic Restorer before and after demonstration display counter at TMR AI Car Care in Tiruppur',
      title: '3M BLACK PLASTIC RESTORER DEMO',
      category: 'SHOWROOM' as const,
      categoryLabel: '04 — SHOWROOM // PLASTIC RESTORER',
      caption: 'Counter display demonstrating the restorative rejuvenation of faded exterior vehicle trim using 3M Black Plastic Restorer.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 40%',
    },
    {
      id: '3m-undershield-display-shelves',
      src: '/images/gallery/studio/tmr-ai-car-care-3m-undershield-display-shelves.png',
      alt: '3M UnderShield Rust free treatment bottles and car care products displayed on glass showroom shelves at TMR AI Car Care Tiruppur',
      title: '3M RUST FREE TREATMENT PRODUCTS',
      category: 'SHOWROOM' as const,
      categoryLabel: '04 — SHOWROOM // ANTI-CORROSION',
      caption: 'Display of 3M Rust Free treatment and protective coating solutions engineered for automotive underchassis longevity.',
      colSpanDesktop: 'lg:col-span-2 md:col-span-2',
      aspectDesktop: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[2.2/1]',
      objectPosition: 'center 50%',
    },
    {
      id: 'ceramic-coating-shampoo-shelves',
      src: '/images/gallery/studio/tmr-ai-car-care-ceramic-coating-shampoo-shelves.jpg',
      alt: "Meguiar's Beyond Ceramic Paint Coating kits, 3M Car Wash Shampoo bottles, and detailing aerosols on showroom shelves at TMR AI Car Care",
      title: 'CERAMIC COATING & SHAMPOO SHELVING',
      category: 'SHOWROOM' as const,
      categoryLabel: '04 — SHOWROOM // CAR CARE',
      caption: "Curated retail shelf with Meguiar's Beyond Ceramic kits, 3M Car Wash Shampoo, and premium automotive aerosol treatments.",
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 35%',
    },
    {
      id: 'anti-rust-display',
      src: '/images/gallery/studio/tmr-ai-car-care-anti-rust-display.png',
      alt: '3M Car Care Anti-Rust Coating banner standee inside the glass showroom bay at TMR AI Car Care in Tiruppur',
      title: '3M ANTI-RUST COATING STANDEE',
      category: 'SHOWROOM' as const,
      categoryLabel: '04 — SHOWROOM // ANTI-RUST',
      caption: 'Official 3M Car Care Anti-Rust Coating promotional standee standing beside the showroom glass partition.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 30%',
    },
    {
      id: '3m-microfibre-cloth-display',
      src: '/images/gallery/studio/tmr-ai-car-care-3m-microfibre-cloth-display.jpg',
      alt: "3M Auto Care Microfibre Cloth packet display hanging on retail showroom shelf beside Meguiar's NXT Top Coat at TMR AI Car Care",
      title: '3M MICROFIBRE CLOTH RETAIL DISPLAY',
      category: 'SHOWROOM' as const,
      categoryLabel: '04 — SHOWROOM // ACCESSORIES',
      caption: "Hanging retail display featuring 3M Auto Care microfibre cloths, applicator pads, and Meguiar's polymer sealants.",
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 40%',
    },
    {
      id: 'showroom-displays',
      src: '/images/gallery/studio/tmr-ai-car-care-showroom-displays.jpg',
      alt: 'TMR AI Car Care showroom interior view showing 3M Protection Treatments and Exterior Accentuation Program banner standees and product display shelves',
      title: 'SHOWROOM INTERIOR & PROGRAM DISPLAYS',
      category: 'SHOWROOM' as const,
      categoryLabel: '04 — SHOWROOM // INTERIOR',
      caption: 'Customer showroom viewing area featuring official 3M treatment informational standees, product displays, and ceiling illumination.',
      colSpanDesktop: 'lg:col-span-1 md:col-span-1',
      aspectDesktop: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 35%',
    },
  ];

  // SECTION 04: Dedicated Before & After Transformation Slider assets
  // Unique paint correction comparison showing swirl mark defect removal vs. mirror gloss clear coat reflection
  const transformationVisuals = {
    before: {
      src: '/images/gallery/gallery-signature-before.webp',
      alt: 'Automotive clear coat paint surface with swirl marks, spider webbing, and oxidation before paint correction at TMR AI Car Care',
      label: 'BEFORE / SWIRL MARKS & DEFECTS',
    },
    after: {
      src: '/images/gallery/gallery-signature-after.webp',
      alt: 'Automotive clear coat paint surface after multi-stage machine compounding and ceramic coating at TMR AI Car Care',
      label: 'AFTER / MIRROR GLOSS FINISH',
    },
  };

  // SECTION 05: Dedicated Final CTA Background Visual
  const finalCtaVisual = {
    src: '/images/gallery/gallery-final-cta.jpg',
    alt: 'TMR AI Car Care detailing studio facade and vehicle delivery bay in Tiruppur',
  };

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
      canonical.setAttribute('link', 'canonical');
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
          "@id": "https://tmrcarcare.com/gallery/#imagegallery",
          "name": "TMR AI Car Care Tiruppur Authentic Studio & Workshop Gallery",
          "description": "Visual archive of authentic photographs from TMR AI Car Care facility, workshop bays, detailing technicians, and customer showroom in Tiruppur, Tamil Nadu.",
          "url": "https://tmrcarcare.com/gallery",
          "publisher": {
            "@type": "AutoRepair",
            "name": "TMR AI Car Care",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": companyData.address.street,
              "addressLocality": companyData.address.city,
              "addressRegion": companyData.address.state,
              "postalCode": companyData.address.pincode,
              "addressCountry": "IN"
            },
            "telephone": companyData.contact.phone
          },
          "image": [
            heroVisual.src,
            ...realStudioPhotos.map((p) => p.src)
          ]
        }
      ]
    };

    schemaScript.textContent = JSON.stringify(jsonLdData);
  }, []);

  // Section 04 Transformation & Section 03 Process IntersectionObservers
  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Transformation Reveal Observer
    const transSec = transSectionRef.current;
    if (transSec) {
      if (isReduced) {
        setSliderPos(50);
      } else {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && !hasTransRevealedRef.current) {
                hasTransRevealedRef.current = true;
                gsap.fromTo(
                  { pos: 15 },
                  { pos: 50 },
                  {
                    duration: 1.2,
                    ease: 'power2.out',
                    onUpdate: function () {
                      setSliderPos(this.targets()[0].pos);
                    },
                  }
                );
              }
            });
          },
          { threshold: 0.25 }
        );
        observer.observe(transSec);
      }
    }

    // Process Timeline Line Animation Observer
    const procSec = processSectionRef.current;
    const procLine = processLineRef.current;
    if (procSec && procLine) {
      if (isReduced) {
        procLine.style.width = '100%';
      } else {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                procLine.style.width = '100%';
              }
            });
          },
          { threshold: 0.3 }
        );
        observer.observe(procSec);
      }
    }
  }, []);

  // Section 04 Touch & Mouse Handlers for Instant, Jitter-Free Comparison Slider
  const updateSliderPosition = (clientX: number, currentTarget: HTMLElement) => {
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    updateSliderPosition(e.clientX, e.currentTarget);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      updateSliderPosition(e.touches[0].clientX, e.currentTarget);
    }
  };

  // Keyboard accessibility: Escape key closes the lightbox modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeLightboxPhoto) {
        setActiveLightboxPhoto(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxPhoto]);

  // Filtered photography items based on selected category
  const filteredPhotos =
    photoCategory === 'ALL'
      ? realStudioPhotos
      : realStudioPhotos.filter((p) => p.category === photoCategory);

  return (
    <div className="w-full bg-[#050505] text-[#F5F4EF] font-manrope selection:bg-[#FF4B00] selection:text-white">
      
      {/* SECTION 01 — GALLERY HERO (ESTABLISHING PANORAMIC VIEWPORT HERO) */}
      <section
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="relative w-full h-[88vh] sm:h-[94vh] flex flex-col justify-end overflow-hidden border-b border-white/10 bg-[#050505]"
      >
        {/* Layer 1: Dedicated Authentic Establishing Photograph */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={heroVisual.src}
            alt={heroVisual.alt}
            fetchPriority="high"
            className="w-full h-full object-cover will-change-transform scale-105"
            style={{
              transform: isReducedMotion
                ? 'none'
                : `translate3d(${heroParallax.x * 0.4}px, ${heroParallax.y * 0.4}px, 0)`,
              transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              objectPosition: 'center 45%',
            }}
          />
        </div>

        {/* Layer 2: Fixed Dark Cinematic Overlay Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/95 via-black/80 to-black/35 pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none" />

        {/* Layer 3: Editorial Typography Content */}
        <div className="relative z-20 max-w-[1360px] w-full mx-auto px-5 md:px-16 pb-16 sm:pb-24 flex flex-col justify-end space-y-6">
          <div className="flex flex-col space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF4B00] animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#FF4B00]">
                {heroVisual.tag}
              </span>
            </div>

            <h1 className="font-manrope font-extrabold text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tighter text-white leading-[0.92] drop-shadow-2xl">
              THE WORK, <br />
              <span className="font-editorial italic font-normal text-[#FF4B00] lowercase tracking-normal">in</span> FRAME.
            </h1>

            <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] max-w-md border-l pl-4 border-white/20 leading-relaxed font-normal">
              A visual archive of TMR AI Car Care's professional car detailing studio, multi-stage paint correction, ceramic coating, and wash craftsmanship in Tiruppur, Tamil Nadu.
            </p>

            <div className="pt-4 flex items-center gap-6">
              <a
                href="#studio-archive"
                className="inline-flex items-center font-bold text-xs text-white tracking-widest uppercase group hover:text-[#FF4B00] transition-colors"
              >
                <span>EXPLORE AUTHENTIC GALLERY</span>
                <span className="ml-2 text-base group-hover:translate-y-1 transition-transform">↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — AUTHENTIC PHOTOGRAPHY ARCHIVE (28 UNIQUE FIRST-PARTY REAL PHOTOS) */}
      <section
        id="studio-archive"
        className="relative bg-[#050505] py-20 sm:py-32 overflow-hidden border-b border-white/10"
      >
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 space-y-12 sm:space-y-16">
          {/* Header & Filter Controls Bar */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#FF4B00] uppercase">
                  AUTHENTIC PHOTOGRAPHY // TIRUPPUR STUDIO
                </span>
              </div>
              <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.05]">
                REAL STUDIO, WORKSHOP &amp; <br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">team</span> ARCHIVE.
              </h2>
              <p className="font-manrope text-sm sm:text-base text-[#D8D8D5] leading-relaxed max-w-xl">
                Unfiltered, high-resolution visual evidence of our actual automotive detailing bays, 3M certified craftsmanship, customer showroom, and equipment on Avinashi Road, Tiruppur.
              </p>
            </div>

            {/* Interactive Category Filter Tabs with Live Dynamic Counts */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {[
                { label: `ALL PHOTOS (${realStudioPhotos.length})`, val: 'ALL' },
                {
                  label: `STUDIO & FACILITY (${realStudioPhotos.filter((p) => p.category === 'STUDIO').length})`,
                  val: 'STUDIO',
                },
                {
                  label: `TEAM & CRAFT (${realStudioPhotos.filter((p) => p.category === 'TEAM').length})`,
                  val: 'TEAM',
                },
                {
                  label: `WORKSHOP & TOOLS (${realStudioPhotos.filter((p) => p.category === 'WORKSHOP').length})`,
                  val: 'WORKSHOP',
                },
                {
                  label: `SHOWROOM INTERIOR (${realStudioPhotos.filter((p) => p.category === 'SHOWROOM').length})`,
                  val: 'SHOWROOM',
                },
              ].map((tab) => (
                <button
                  key={tab.val}
                  onClick={() => setPhotoCategory(tab.val as any)}
                  className={`text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-2 rounded-lg border transition-all duration-300 ${
                    photoCategory === tab.val
                      ? 'bg-[#FF4B00] border-[#FF4B00] text-white shadow-[0_0_20px_rgba(255,75,0,0.4)]'
                      : 'bg-white/5 border-white/10 text-white/70 hover:text-white hover:border-white/30'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Responsive Bento Grid — Aspect-Ratio Intelligent (No Cropped Faces, Tools or Signage) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {filteredPhotos.map((photo) => (
              <AuthenticPhotoCard
                key={photo.id}
                photo={photo}
                onClick={() =>
                  setActiveLightboxPhoto({
                    id: photo.id,
                    src: photo.src,
                    alt: photo.alt,
                    title: photo.title,
                    categoryLabel: photo.categoryLabel,
                    caption: photo.caption,
                  })
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — THE PROCESS (WARM IVORY EDITORIAL HORIZONTAL TIMELINE) */}
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
                  Surface preparation, chemical fallout removal, synthetic clay bar treatment, and hydraulic ramp wash prep to strip road grime and contamination.
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
                  Multi-stage rotary and dual-action machine polishing to safely eliminate swirl marks, surface scratches, and clear coat haze.
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
                  Professional ceramic paint coating or Paint Protection Film (PPF) application sealing in gloss, optical clarity, and hydrophobic protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — TRANSFORMATION (AUTHENTIC BEFORE & AFTER REVEAL SLIDER) */}
      <section
        ref={transSectionRef}
        className="relative bg-[#050505] py-20 sm:py-32 overflow-hidden border-b border-white/10"
      >
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#FF4B00] uppercase">
                SURFACE TRANSFORMATION // CASE STUDY
              </span>
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
                PAINT CORRECTION <br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">to mirror reflection.</span>
              </h2>
              <p className="font-manrope text-sm sm:text-base text-[#D8D8D5] max-w-md border-l pl-4 border-white/20">
                Drag the interactive slider to inspect the removal of micro-marring, swirl marks, and compound haze followed by deep high-gloss ceramic paint sealing.
              </p>
            </div>
            <div className="text-xs font-mono text-[#FF4B00] tracking-widest uppercase bg-[#FF4B00]/10 border border-[#FF4B00]/20 px-4 py-2 rounded-full w-fit">
              STAGE 02 &amp; 03 REFLECTION
            </div>
          </div>

          {/* Instant Responsive Touch & Mouse Split-Screen Comparison Slider */}
          <div
            className="relative w-full aspect-[16/10] sm:aspect-[21/9] rounded-xl overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            onPointerMove={handlePointerMove}
            onPointerDown={handlePointerMove}
            onClick={handlePointerMove}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchMove}
          >
            {/* Background: AFTER Transformation Image */}
            <img
              src={transformationVisuals.after.src}
              alt={transformationVisuals.after.alt}
              className="absolute inset-0 w-full h-full object-cover scale-100"
            />
            <div className="absolute top-6 right-6 z-10 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-bold tracking-widest text-[#FF4B00] uppercase pointer-events-none shadow-md">
              {transformationVisuals.after.label}
            </div>

            {/* Foreground: BEFORE Transformation Image clipped to slider position */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={transformationVisuals.before.src}
                alt={transformationVisuals.before.alt}
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="absolute top-6 left-6 z-10 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-bold tracking-widest text-white/90 uppercase pointer-events-none shadow-md">
                {transformationVisuals.before.label}
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

      {/* SECTION 05 — GALLERY FINAL CTA (STUDIO FACADE & APPOINTMENT BOOKING) */}
      <section className="relative w-full min-h-[75vh] md:min-h-[85vh] flex flex-col justify-end bg-[#050505] text-white overflow-hidden py-20 sm:py-32 font-intertight border-t border-white/10">
        {/* Layer 1: Dedicated Authentic Facility Photograph */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={finalCtaVisual.src}
            alt={finalCtaVisual.alt}
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
            <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] leading-relaxed max-w-xl">
              Bring your vehicle to our studio on Avinashi Road, Tiruppur for genuine 3M detailing, graphene ceramic coating, and precision paint care.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href={`tel:${companyData.contact.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#FF4B00] text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#e04200] transition-colors shadow-[0_10px_30px_rgba(255,75,0,0.4)]"
              >
                <Phone className="w-4 h-4" />
                <span>BOOK INSPECTION ({companyData.contact.phone})</span>
              </a>
              <a
                href={`https://wa.me/${companyData.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello TMR AI Car Care, I saw your studio gallery and would like to book a car detailing consultation.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-white/20 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WHATSAPP CONSULTATION</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL (CLEAN FULL-RESOLUTION INSPECTION & COMPLETE CAPTION) */}
      {activeLightboxPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveLightboxPhoto(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Modal Header */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl mx-auto flex items-center justify-between py-2 border-b border-white/10"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded bg-[#FF4B00]/20 text-[#FF4B00] border border-[#FF4B00]/30">
                {activeLightboxPhoto.categoryLabel}
              </span>
              <h3 className="font-manrope font-extrabold text-sm sm:text-lg text-white uppercase tracking-tight">
                {activeLightboxPhoto.title}
              </h3>
            </div>
            <button
              onClick={() => setActiveLightboxPhoto(null)}
              aria-label="Close modal"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF4B00]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Image Display */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full flex-1 flex items-center justify-center my-auto p-2"
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
