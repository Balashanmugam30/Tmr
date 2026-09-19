import React, { useState, useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { X, Maximize2, Phone, MessageSquare, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';
import { companyData } from '@/data/company';

// --- PHOTO CARD INTERFACE ---
interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: 'STUDIO' | 'TEAM' | 'WORKSHOP' | 'SHOWROOM';
  categoryName: string;
  caption: string;
  aspectRatio: string;
  objectPosition: string;
}

// --- AUTHENTIC PHOTO CARD WITH REPEATABLE CENTER-OUT 0% -> 100% IMAGE REVEAL ANIMATION ---
// Replays on every viewport entry; resets when leaving viewport; no layout shifts, no CLS
const AuthenticPhotoCard = React.memo<{
  photo: PhotoItem;
  index: number;
  photoCategory: string;
  onClick: () => void;
}>(({ photo, index, photoCategory, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const isInViewRef = useRef<boolean>(false);

  useEffect(() => {
    const card = cardRef.current;
    const revealEl = revealRef.current;
    if (!card || !revealEl) return;

    isInViewRef.current = false;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) {
      gsap.set(revealEl, {
        clipPath: 'inset(0 0% 0 0%)',
        opacity: 1,
        scale: 1,
        clearProps: 'transform',
      });
      return;
    }

    // Initialize to narrow vertical center strip (instant, no black flash)
    gsap.set(revealEl, {
      clipPath: 'inset(0 49.5% 0 49.5%)',
      scale: 0.985,
      opacity: 0.75,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // ENTER VIEWPORT: Trigger center-out reveal animation
          if (entry.isIntersecting && entry.intersectionRatio >= 0.12) {
            if (!isInViewRef.current) {
              isInViewRef.current = true;
              gsap.fromTo(
                revealEl,
                {
                  clipPath: 'inset(0 49.5% 0 49.5%)',
                  scale: 0.985,
                  opacity: 0.75,
                },
                {
                  clipPath: 'inset(0 0% 0 0%)',
                  scale: 1,
                  opacity: 1,
                  duration: 0.85,
                  ease: 'power3.out',
                  delay: (index % 4) * 0.08,
                  overwrite: 'auto',
                }
              );
            }
          } else if (!entry.isIntersecting || entry.intersectionRatio === 0) {
            // LEAVE VIEWPORT: Reset to narrow center strip state so it replays on next entry
            if (isInViewRef.current) {
              isInViewRef.current = false;
              gsap.killTweensOf(revealEl);
              gsap.set(revealEl, {
                clipPath: 'inset(0 49.5% 0 49.5%)',
                scale: 0.985,
                opacity: 0.75,
              });
            }
          }
        });
      },
      { threshold: [0, 0.12] }
    );

    observer.observe(card);

    return () => {
      gsap.killTweensOf(revealEl);
      observer.disconnect();
    };
  }, [photo.id, photoCategory, index]);

  return (
    <div
      ref={cardRef}
      className="break-inside-avoid mb-6 w-full"
    >
      <div
        onClick={onClick}
        tabIndex={0}
        role="button"
        aria-label={`View full image: ${photo.title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        }}
        className="w-full relative block overflow-hidden rounded-xl border border-white/10 hover:border-[#FF4B00]/60 shadow-[0_12px_36px_rgba(0,0,0,0.6)] bg-[#0d0d0d] cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#FF4B00] transition-colors duration-300"
      >
        {/* Layout container reserving exact aspect ratio space to prevent CLS */}
        <div className={`w-full ${photo.aspectRatio} relative overflow-hidden bg-[#0d0d0d]`}>
          {/* Center-out curtain reveal container */}
          <div
            ref={revealRef}
            className="w-full h-full relative overflow-hidden will-change-[clip-path,transform,opacity]"
            style={{
              clipPath: 'inset(0 49.5% 0 49.5%)',
              opacity: 0.75,
              transform: 'scale(0.985)',
            }}
          >
            <img
              ref={imgRef}
              src={photo.src}
              alt={photo.alt}
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              style={{ objectPosition: photo.objectPosition }}
            />
          </div>
        </div>

        {/* Minimalist Hover Overlay - Clean title & expand icon only */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/15 text-white/90">
              {photo.categoryName}
            </span>
            <div className="w-8 h-8 rounded-full bg-black/75 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 group-hover:text-[#FF4B00] group-hover:scale-110 transition-all duration-300 shadow-md">
              <Maximize2 className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="font-manrope font-extrabold text-xs sm:text-sm text-white tracking-tight drop-shadow-md">
              {photo.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
});

AuthenticPhotoCard.displayName = 'AuthenticPhotoCard';

export const GalleryPage: React.FC = () => {
  // Category state for interactive filtering
  const [photoCategory, setPhotoCategory] = useState<'ALL' | 'STUDIO' | 'TEAM' | 'WORKSHOP' | 'SHOWROOM'>('ALL');

  // Lightbox Modal state (active index in the filtered array, or null)
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Hero Section Parallax state
  const [heroParallax, setHeroParallax] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // DOM Refs
  const transSectionRef = useRef<HTMLElement>(null);
  const processSectionRef = useRef<HTMLElement>(null);
  const processLineRef = useRef<HTMLDivElement>(null);

  const isReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  // HERO DEDICATED AUTHENTIC VISUAL (1 unique establishing photograph)
  const heroVisual = {
    src: '/images/gallery/studio/tmr-ai-car-care-facility-overview.jpg',
    alt: 'Panoramic establishing view of TMR AI Car Care facility, entrance totem sign, and forecourt in Arulpuram, Tiruppur',
    title: 'AUTOMOTIVE CRAFTSMANSHIP',
    caption: 'Establishing panoramic view of TMR AI Car Care in Arulpuram, Tiruppur, showing the roadside entrance totem, customer driveway, and studio building.',
  };

  // MAIN UNIQUE PHOTO ARCHIVE (28 unique authentic real photographs across studio, team, workshop, showroom)
  // Strict rule: zero duplicates across sections, aspect-ratio intelligent layout preserving full visual content
  const realStudioPhotos: PhotoItem[] = [
    // --- STUDIO & FACILITY (3 photos) ---
    {
      id: 'studio-facade',
      src: '/images/gallery/studio/tmr-ai-car-care-studio-facade.jpg',
      alt: 'TMR AI Car Care glass showroom facade with customer vehicle inside, illuminated 3D branding, and service badges in Tiruppur',
      title: 'Showroom Elevation & Detailing Bay',
      category: 'STUDIO',
      categoryName: 'Studio & Facility',
      caption: 'Front elevation displaying floor-to-ceiling glass showroom with customer vehicle inside, illuminated 3D branding, and service menu.',
      aspectRatio: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 25%',
    },
    {
      id: 'roadside-totem',
      src: '/images/gallery/studio/tmr-ai-car-care-roadside-totem.jpg',
      alt: 'Roadside landmark totem sign for TMR AI Car Care displaying foam wash, ceramic, PPF, germ interiors, and exterior treatments in Tiruppur',
      title: 'Roadside Landmark Entrance Totem',
      category: 'STUDIO',
      categoryName: 'Studio & Facility',
      caption: 'Official roadside entrance pylon totem with illuminated logo and service capsules along the approach road in Tiruppur.',
      aspectRatio: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 20%',
    },
    {
      id: 'brand-signage',
      src: '/images/gallery/studio/tmr-ai-car-care-brand-signage.png',
      alt: 'Architectural close-up of the official 3D illuminated TMR AI Car Care facade signage header and service badges against blue sky',
      title: 'Architectural Storefront Signage',
      category: 'STUDIO',
      categoryName: 'Studio & Facility',
      caption: 'Close-up architectural detail of the 3D illuminated storefront header with service badges including Graphene, Ceramic, PPF, and Sun Film.',
      aspectRatio: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[2/1]',
      objectPosition: 'center 50%',
    },

    // --- TEAM & CRAFT (7 photos) ---
    {
      id: 'full-detailing-team',
      src: '/images/gallery/team/tmr-ai-car-care-full-detailing-team.png',
      alt: 'Full detailing team of TMR AI Car Care standing in the workshop bay giving thumbs-up gestures in Tiruppur',
      title: 'TMR AI Car Care Detailing Crew',
      category: 'TEAM',
      categoryName: 'Team & Craft',
      caption: 'The complete TMR AI Car Care detailing staff and technicians in uniform gathered inside the workshop facility.',
      aspectRatio: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[2/1]',
      objectPosition: 'center 45%',
    },
    {
      id: 'detailing-technicians-thumbs-up',
      src: '/images/gallery/team/tmr-ai-car-care-detailing-technicians-thumbs-up.jpg',
      alt: 'Three TMR AI Car Care detailing technicians giving thumbs up between vehicles in the workshop in Tiruppur',
      title: 'Detailing Specialists in Workshop',
      category: 'TEAM',
      categoryName: 'Team & Craft',
      caption: 'Three detailing specialists in uniform standing between customer vehicles inside the active Tiruppur workshop.',
      aspectRatio: 'aspect-[4/3] sm:aspect-[16/10]',
      objectPosition: 'center 30%',
    },
    {
      id: 'technician-masking',
      src: '/images/gallery/team/tmr-ai-car-care-technician-masking.png',
      alt: 'TMR AI Car Care detailing technician applying protective surface masking tape to white SUV wheel arch and rear fender in Tiruppur',
      title: 'Precision Surface Masking',
      category: 'TEAM',
      categoryName: 'Team & Craft',
      caption: 'Detailing technician in official uniform applying protective masking tape to wheel arches and body trim before compound polishing.',
      aspectRatio: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 35%',
    },
    {
      id: 'team-workshop',
      src: '/images/gallery/team/tmr-ai-car-care-team-workshop.jpg',
      alt: 'TMR AI Car Care detailing team and technicians standing inside the workshop bay alongside customer vehicle in Tiruppur',
      title: 'Workshop Team Alongside Customer Vehicle',
      category: 'TEAM',
      categoryName: 'Team & Craft',
      caption: 'Detailing specialists in uniform positioned beside customer vehicle inside the active workshop bay.',
      aspectRatio: 'aspect-[16/10] sm:aspect-[16/9]',
      objectPosition: 'center 35%',
    },
    {
      id: 'technician-door-jamb-cleaning',
      src: '/images/gallery/team/tmr-ai-car-care-technician-door-jamb-cleaning.png',
      alt: 'TMR AI Car Care technician cleaning vehicle door jamb and latch with microfiber cloth in Tiruppur',
      title: 'Door Jamb & Latch Detailing',
      category: 'TEAM',
      categoryName: 'Team & Craft',
      caption: 'Technician meticulously cleaning door jambs, hinges, and weatherstripping using dedicated microfibers and cleaners.',
      aspectRatio: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[2/1]',
      objectPosition: 'center 50%',
    },
    {
      id: 'technician-microfibre-prep',
      src: '/images/gallery/team/tmr-ai-car-care-technician-microfibre-prep.jpg',
      alt: 'TMR AI Car Care technician in uniform with microfiber cloth preparing car door and interior during detailing in Tiruppur',
      title: 'Interior & Door Panel Preparation',
      category: 'TEAM',
      categoryName: 'Team & Craft',
      caption: 'Detailing specialist in official 3M uniform prepping door panels and glass surfaces during comprehensive interior detailing.',
      aspectRatio: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 30%',
    },
    {
      id: '3m-uniform-embroidery',
      src: '/images/gallery/team/tmr-ai-car-care-3m-uniform-embroidery.jpg',
      alt: 'Official 3M Car Care embroidered insignia on black technician uniform polo at TMR AI Car Care Tiruppur',
      title: 'Official 3M Uniform Insignia',
      category: 'TEAM',
      categoryName: 'Team & Craft',
      caption: 'Close-up macro detail of the official 3M Car Care embroidered logo on the chest of our technician polo uniform.',
      aspectRatio: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 45%',
    },

    // --- WORKSHOP & TOOLS (6 photos) ---
    {
      id: 'workshop-innova-xuv700-bay',
      src: '/images/gallery/workshop/tmr-ai-car-care-workshop-innova-xuv700-bay.jpg',
      alt: 'TMR AI Car Care detailing technician working between a Toyota Innova Hycross and Mahindra XUV700 inside the workshop bay in Tiruppur',
      title: 'Innova Hycross & XUV700 Detailing Bay',
      category: 'WORKSHOP',
      categoryName: 'Workshop & Tools',
      caption: 'TMR AI Car Care technician in uniform working between two customer vehicles, a Toyota Innova Hycross and Mahindra XUV700, inside the detailing bay.',
      aspectRatio: 'aspect-[16/10] sm:aspect-[16/9]',
      objectPosition: 'center 50%',
    },
    {
      id: 'detailing-trolley-supplies',
      src: '/images/gallery/workshop/tmr-ai-car-care-detailing-trolley-supplies.jpg',
      alt: 'Professional 3M mobile detailing cart loaded with cleaning chemicals, spray bottles, and tools at TMR AI Car Care in Tiruppur',
      title: 'Mobile Detailing Trolley & Supplies',
      category: 'WORKSHOP',
      categoryName: 'Workshop & Tools',
      caption: 'Mobile detailing trolley loaded with professional 3M spray compounds, cleaners, detailing brushes, and microfiber cloths against the workshop wall.',
      aspectRatio: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 40%',
    },
    {
      id: 'fortuner-swift-workshop-bay',
      src: '/images/gallery/workshop/tmr-ai-car-care-fortuner-swift-workshop-bay.jpg',
      alt: 'Two TMR AI Car Care technicians detailing a white Toyota Fortuner and silver Maruti Suzuki Swift inside the workshop bay in Tiruppur',
      title: 'Fortuner & Swift Detailing Bay',
      category: 'WORKSHOP',
      categoryName: 'Workshop & Tools',
      caption: 'Two detailing technicians working simultaneously on a white Toyota Fortuner SUV and silver Maruti Swift hatchback in the workshop bay.',
      aspectRatio: 'aspect-[16/10] sm:aspect-[16/9]',
      objectPosition: 'center 45%',
    },
    {
      id: 'polisher-compound',
      src: '/images/gallery/workshop/tmr-ai-car-care-polisher-compound.jpg',
      alt: 'Professional dual-action orbital machine polisher with wool pad laid beside a bottle of 3M Perfect-It compound on TMR workshop floor in Tiruppur',
      title: 'Orbital Machine Polisher & 3M Compound',
      category: 'WORKSHOP',
      categoryName: 'Workshop & Tools',
      caption: 'Professional dual-action orbital polisher equipped with wool cutting pad resting beside 3M Perfect-It rubbing compound.',
      aspectRatio: 'aspect-square',
      objectPosition: 'center 50%',
    },
    {
      id: 'wash-bay-ramp',
      src: '/images/gallery/workshop/tmr-ai-car-care-wash-bay-ramp.jpg',
      alt: 'Dedicated vehicle wash bay ramp with commercial yellow drive-on hydraulic lift at TMR AI Car Care in Tiruppur',
      title: 'Hydraulic Wash Bay Ramp',
      category: 'WORKSHOP',
      categoryName: 'Workshop & Tools',
      caption: 'Commercial hydraulic yellow drive-on ramp designed for underbody wash, chassis cleaning, and anti-rust treatment in the wash bay.',
      aspectRatio: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 40%',
    },
    {
      id: '3m-cleaner-chemicals-cart',
      src: '/images/gallery/workshop/tmr-ai-car-care-3m-cleaner-chemicals-cart.jpg',
      alt: 'Close-up of official 3M car care cleaning compounds, 5L auto parts cleaner jugs, and detailing products in TMR workshop',
      title: '3M Auto Care Cleaning Compounds',
      category: 'WORKSHOP',
      categoryName: 'Workshop & Tools',
      caption: 'Official 3M auto parts cleaner jugs, air conditioner treatment canisters, and professional detailing chemicals on the mobile cart.',
      aspectRatio: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 40%',
    },

    // --- SHOWROOM & RECEPTION (12 photos) ---
    {
      id: 'reception-lounge-standees',
      src: '/images/gallery/studio/tmr-ai-car-care-reception-lounge-standees.png',
      alt: 'TMR AI Car Care customer reception and consultation lounge with 3M PPF standees and customer vehicle in Tiruppur',
      title: 'Customer Reception & Consultation Lounge',
      category: 'SHOWROOM',
      categoryName: 'Showroom & Reception',
      caption: 'Glass-partitioned customer consultation lounge with comfortable seating, 3M PPF informational standees, and direct view into the bay.',
      aspectRatio: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[2/1]',
      objectPosition: 'center 50%',
    },
    {
      id: 'retail-showroom-inventory-wall',
      src: '/images/gallery/studio/tmr-ai-car-care-retail-showroom-inventory-wall.png',
      alt: 'Panoramic view of customer reception showroom with retail display shelves and car care inventory at TMR AI Car Care Tiruppur',
      title: 'Retail Showroom Display Wall',
      category: 'SHOWROOM',
      categoryName: 'Showroom & Reception',
      caption: "Customer showroom featuring illuminated glass display cases stocked with Meguiar's ceramic kits, 3M car care products, and accessories.",
      aspectRatio: 'aspect-[16/10] sm:aspect-[16/9]',
      objectPosition: 'center 50%',
    },
    {
      id: 'product-display-shelves',
      src: '/images/gallery/studio/tmr-ai-car-care-product-display-shelves.jpg',
      alt: 'Showroom retail display shelving with 3M Sun Control Window Film boxes and detailing supplies at TMR AI Car Care in Tiruppur',
      title: '3M Sun Control & Product Display',
      category: 'SHOWROOM',
      categoryName: 'Showroom & Reception',
      caption: "Product display shelves showing official 3M Sun Control Window Film rolls, Meguiar's waxes, and interior detailing sprays.",
      aspectRatio: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 35%',
    },
    {
      id: 'retail-inventory-shelving-wall',
      src: '/images/gallery/studio/tmr-ai-car-care-retail-inventory-shelving-wall.png',
      alt: 'Comprehensive showroom retail inventory wall stocked with Meguiars clay bars, 3M aerosol cleaners, and detailing microfibers at TMR AI Car Care',
      title: 'Detailing Inventory & Product Wall',
      category: 'SHOWROOM',
      categoryName: 'Showroom & Reception',
      caption: "Extensive inventory wall stocked with Meguiar's synthetic clay bars, 3M aerosol foaming cleaners, and ultra-plush detailing towels.",
      aspectRatio: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[2/1]',
      objectPosition: 'center 50%',
    },
    {
      id: 'dashboard-dresser-ceramic-display',
      src: '/images/gallery/studio/tmr-ai-car-care-dashboard-dresser-ceramic-display.png',
      alt: '3M Dashboard Dresser bottles and Meguiars M688 Beyond Ceramic Paint Coating kit displayed on glass shelves at TMR AI Car Care Tiruppur',
      title: '3M Dashboard Dresser & Ceramic Coating Kit',
      category: 'SHOWROOM',
      categoryName: 'Showroom & Reception',
      caption: "Showroom display counter showing 3M Dashboard Dresser spray bottles and the flagship Meguiar's M688 Beyond Ceramic coating system.",
      aspectRatio: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[2/1]',
      objectPosition: 'center 50%',
    },
    {
      id: 'undershield-protective-coating-shelf',
      src: '/images/gallery/studio/tmr-ai-car-care-undershield-protective-coating-shelf.png',
      alt: 'Bottles of 3M UnderShield protective undercoating and underseal cans neatly arranged on showroom shelves at TMR AI Car Care',
      title: '3M UnderShield Protective Undercoating',
      category: 'SHOWROOM',
      categoryName: 'Showroom & Reception',
      caption: 'Stock of official 3M UnderShield protective underbody coating canisters and anti-rust treatments on display shelves.',
      aspectRatio: 'aspect-[16/10] sm:aspect-[16/9]',
      objectPosition: 'center 50%',
    },
    {
      id: '3m-plastic-restorer-display',
      src: '/images/gallery/studio/tmr-ai-car-care-3m-plastic-restorer-display.jpg',
      alt: 'Official 3M Car Care Black Plastic Restorer before and after demonstration display counter at TMR AI Car Care in Tiruppur',
      title: '3M Plastic Restorer Demonstration Counter',
      category: 'SHOWROOM',
      categoryName: 'Showroom & Reception',
      caption: 'Counter display demonstrating the restorative rejuvenation of faded exterior vehicle trim using 3M Black Plastic Restorer.',
      aspectRatio: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 40%',
    },
    {
      id: '3m-undershield-display-shelves',
      src: '/images/gallery/studio/tmr-ai-car-care-3m-undershield-display-shelves.png',
      alt: '3M UnderShield Rust free treatment bottles and car care products displayed on glass showroom shelves at TMR AI Car Care Tiruppur',
      title: '3M Rust Free Protective Treatments',
      category: 'SHOWROOM',
      categoryName: 'Showroom & Reception',
      caption: 'Display of 3M Rust Free treatment and protective coating solutions engineered for automotive underchassis longevity.',
      aspectRatio: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[2/1]',
      objectPosition: 'center 50%',
    },
    {
      id: 'ceramic-coating-shampoo-shelves',
      src: '/images/gallery/studio/tmr-ai-car-care-ceramic-coating-shampoo-shelves.jpg',
      alt: 'Meguiars Beyond Ceramic Paint Coating kits, 3M Car Wash Shampoo bottles, and detailing aerosols on showroom shelves at TMR AI Car Care',
      title: 'Ceramic Coating & Detailing Shampoo',
      category: 'SHOWROOM',
      categoryName: 'Showroom & Reception',
      caption: "Curated retail shelf with Meguiar's Beyond Ceramic kits, 3M Car Wash Shampoo, and premium automotive aerosol treatments.",
      aspectRatio: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 35%',
    },
    {
      id: 'anti-rust-display',
      src: '/images/gallery/studio/tmr-ai-car-care-anti-rust-display.png',
      alt: '3M Car Care Anti-Rust Coating banner standee inside the glass showroom bay at TMR AI Car Care in Tiruppur',
      title: '3M Anti-Rust Treatment Standee',
      category: 'SHOWROOM',
      categoryName: 'Showroom & Reception',
      caption: 'Official 3M Car Care Anti-Rust Coating promotional standee standing beside the showroom glass partition.',
      aspectRatio: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 30%',
    },
    {
      id: '3m-microfibre-cloth-display',
      src: '/images/gallery/studio/tmr-ai-car-care-3m-microfibre-cloth-display.jpg',
      alt: '3M Auto Care Microfibre Cloth packet display hanging on retail showroom shelf beside Meguiars NXT Top Coat at TMR AI Car Care',
      title: '3M Microfibre Cloth Retail Rack',
      category: 'SHOWROOM',
      categoryName: 'Showroom & Reception',
      caption: "Hanging retail display featuring 3M Auto Care microfibre cloths, applicator pads, and Meguiar's polymer sealants.",
      aspectRatio: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 40%',
    },
    {
      id: 'showroom-displays',
      src: '/images/gallery/studio/tmr-ai-car-care-showroom-displays.jpg',
      alt: 'TMR AI Car Care showroom interior view showing 3M Protection Treatments and Exterior Accentuation Program banner standees and product display shelves',
      title: 'Showroom Interior & Program Displays',
      category: 'SHOWROOM',
      categoryName: 'Showroom & Reception',
      caption: 'Customer showroom viewing area featuring official 3M treatment informational standees, product displays, and ceiling illumination.',
      aspectRatio: 'aspect-[3/4] sm:aspect-[4/5]',
      objectPosition: 'center 35%',
    },
  ];

  // SECTION 04: Dedicated Before & After Transformation Slider assets
  // Using matched real TMR AI Car Care vehicles (Innova Hycross & Mahindra XUV700) inside the Tiruppur workshop bay
  const transformationVisuals = {
    before: {
      src: '/images/gallery/gallery-tmr-vehicle-before.jpg',
      alt: 'Toyota Innova Hycross and Mahindra XUV700 with road dust, surface haze, and water spotting before detailing at TMR AI Car Care in Tiruppur',
      label: 'BEFORE',
    },
    after: {
      src: '/images/gallery/gallery-tmr-vehicle-after.jpg',
      alt: 'Toyota Innova Hycross and Mahindra XUV700 with deep gloss finish and ceramic coating at TMR AI Car Care in Tiruppur',
      label: 'AFTER',
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
      'Explore authentic photographs of TMR AI Car Care studio in Tiruppur. Real workshop bays, ceramic coating, precision surface refinement, wash ramps, 3M products & detailing team.'
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

  // Section 03 Process IntersectionObserver for Connecting Line
  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

  // Filtered photography items based on selected category
  const filteredPhotos = useMemo(() => {
    return photoCategory === 'ALL'
      ? realStudioPhotos
      : realStudioPhotos.filter((p) => p.category === photoCategory);
  }, [photoCategory]);

  // Lightbox circular navigation
  const handlePrev = () => {
    setActiveLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + filteredPhotos.length) % filteredPhotos.length;
    });
  };

  const handleNext = () => {
    setActiveLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % filteredPhotos.length;
    });
  };

  // Keyboard accessibility and body scroll lock for Lightbox
  useEffect(() => {
    if (activeLightboxIndex !== null) {
      document.body.classList.add('lightbox-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('lightbox-open');
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') {
        setActiveLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('lightbox-open');
      document.body.style.overflow = '';
    };
  }, [activeLightboxIndex, filteredPhotos.length]);

  const currentLightboxPhoto = activeLightboxIndex !== null ? filteredPhotos[activeLightboxIndex] : null;

  return (
    <div className="w-full bg-[#050505] text-[#F5F4EF] font-manrope selection:bg-[#FF4B00] selection:text-white">
      
      {/* SECTION 01 — GALLERY HERO (FULLSCREEN 100svh VIEWPORT WITH ZERO BOTTOM GAP) */}
      <section
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="relative w-full min-h-[100svh] h-[100svh] flex flex-col justify-end overflow-hidden border-b border-white/10 bg-[#050505]"
      >
        {/* Layer 1: Dedicated Authentic Establishing Photograph — Bright & Recognizable */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={heroVisual.src}
            alt={heroVisual.alt}
            fetchPriority="high"
            className="w-full h-full object-cover will-change-transform scale-105 brightness-105 contrast-105"
            style={{
              transform: isReducedMotion
                ? 'none'
                : `translate3d(${heroParallax.x * 0.4}px, ${heroParallax.y * 0.4}px, 0)`,
              transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              objectPosition: 'center 40%',
            }}
          />
        </div>

        {/* Targeted Smooth Multi-Stop Gradient: Dark text zone on left -> smooth transition -> clear facility on right */}
        <div
          className="absolute inset-0 z-10 pointer-events-none block md:hidden"
          style={{
            background: 'linear-gradient(0deg, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.75) 45%, rgba(5,5,5,0.2) 75%, transparent 100%)',
          }}
        />
        <div
          className="absolute inset-0 z-10 pointer-events-none hidden md:block"
          style={{
            background: 'linear-gradient(90deg, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.85) 28%, rgba(5,5,5,0.45) 55%, rgba(5,5,5,0.12) 78%, rgba(5,5,5,0.0) 100%)',
          }}
        />
        <div
          className="absolute inset-0 z-10 pointer-events-none hidden md:block"
          style={{
            background: 'linear-gradient(0deg, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.2) 25%, transparent 50%)',
          }}
        />

        {/* Layer 3: Editorial Typography Content - Cleaned of legacy scaffolding tags */}
        <div className="relative z-20 max-w-[1360px] w-full mx-auto px-5 md:px-16 pb-16 sm:pb-24 flex flex-col justify-end space-y-6">
          <div className="flex flex-col space-y-4 max-w-2xl">
            <h1 className="font-manrope font-extrabold text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tighter text-white leading-[0.92] drop-shadow-2xl">
              AUTOMOTIVE <br />
              <span className="font-editorial italic font-normal text-[#FF4B00] lowercase tracking-normal">in</span> FOCUS.
            </h1>

            <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] max-w-md border-l pl-4 border-white/20 leading-relaxed font-normal">
              An authentic visual archive of TMR AI Car Care's professional detailing studio, multi-stage machine polishing, ceramic coating, and wash craftsmanship in Tiruppur, Tamil Nadu.
            </p>

            <div className="pt-4 flex items-center gap-6">
              <a
                href="#studio-archive"
                className="inline-flex items-center font-bold text-xs text-white tracking-widest uppercase group hover:text-[#FF4B00] transition-colors"
              >
                <span>VIEW PHOTO COLLECTION</span>
                <span className="ml-2 text-base group-hover:translate-y-1 transition-transform">↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — MAIN PHOTO ARCHIVE (CLEAN MASONRY LAYOUT — STAGGERED GSAP ENTRANCE & HOVER ZOOM) */}
      <section
        id="studio-archive"
        className="relative bg-[#050505] py-20 sm:py-32 overflow-hidden border-b border-white/10"
      >
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 space-y-12 sm:space-y-16">
          {/* Header & Filter Controls Bar */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-8">
            <div className="space-y-4 max-w-2xl">
              <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.05]">
                STUDIO, WORKSHOP &amp; <br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">craft</span> GALLERY.
              </h2>
              <p className="font-manrope text-sm sm:text-base text-[#D8D8D5] leading-relaxed max-w-xl">
                High-resolution visual evidence of our active vehicle detailing bays, certified craftsmanship, customer showroom, and equipment in Arulpuram, Tiruppur.
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
                  label: `SHOWROOM & RECEPTION (${realStudioPhotos.filter((p) => p.category === 'SHOWROOM').length})`,
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

          {/* Masonry Columns Layout — Adapts to Natural Heights with Zero Empty Voids */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {filteredPhotos.map((photo, index) => (
              <AuthenticPhotoCard
                key={photo.id}
                photo={photo}
                index={index}
                photoCategory={photoCategory}
                onClick={() => setActiveLightboxIndex(index)}
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

      {/* SECTION 04 — TRANSFORMATION (BEFORE & AFTER COMPARISON ON REAL TMR VEHICLES) */}
      <section
        ref={transSectionRef}
        className="relative bg-[#050505] py-20 sm:py-32 overflow-hidden border-b border-white/10"
      >
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-4 max-w-xl">
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight leading-[1.05]">
                FROM PREP <br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">to mirror finish.</span>
              </h2>
              <p className="font-manrope text-sm sm:text-base text-[#D8D8D5] max-w-md border-l pl-4 border-white/20 leading-relaxed">
                Drag the interactive slider to inspect the removal of road film, surface haze, and swirl marks followed by high-gloss ceramic paint sealing on customer vehicles inside our Tiruppur workshop bay.
              </p>
            </div>
          </div>

          {/* Mature ReactCompareSlider with custom polished handle & BEFORE/AFTER badges */}
          <div className="w-full relative select-none">
            <ReactCompareSlider
              itemOne={
                <div className="relative w-full h-full">
                  <ReactCompareSliderImage
                    src={transformationVisuals.before.src}
                    alt={transformationVisuals.before.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10 px-3 sm:px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-white/90 uppercase pointer-events-none shadow-lg">
                    {transformationVisuals.before.label}
                  </div>
                </div>
              }
              itemTwo={
                <div className="relative w-full h-full">
                  <ReactCompareSliderImage
                    src={transformationVisuals.after.src}
                    alt={transformationVisuals.after.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 px-3 sm:px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#FF4B00] uppercase pointer-events-none shadow-lg">
                    {transformationVisuals.after.label}
                  </div>
                </div>
              }
              handle={
                <ReactCompareSliderHandle
                  buttonStyle={{
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    backgroundColor: 'rgba(15, 15, 15, 0.92)',
                    border: '1.5px solid rgba(255, 255, 255, 0.4)',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.7), 0 0 16px rgba(255, 75, 0, 0.4)',
                    color: '#FF4B00',
                    width: '44px',
                    height: '44px',
                    borderRadius: '9999px',
                  }}
                  linesStyle={{
                    width: '2px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    boxShadow: '0 0 8px rgba(0, 0, 0, 0.8)',
                  }}
                />
              }
              defaultPosition={50}
              className="w-full aspect-[16/10] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.85)]"
            />
          </div>
        </div>
      </section>

      {/* SECTION 05 — GALLERY FINAL CTA (AUTHENTIC WORKSHOP VISUAL & CONSULTATION) */}
      <section className="relative w-full min-h-[75vh] md:min-h-[85vh] flex flex-col justify-end bg-[#050505] text-white overflow-hidden py-20 sm:py-32 font-intertight border-t border-white/10">
        {/* Layer 1: Dedicated Authentic Indian Detailing Bay Photograph */}
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

        {/* Layer 3: Editorial Content Box - Free of legacy editorial tags */}
        <div className="relative z-20 max-w-[1360px] w-full mx-auto px-5 md:px-16 flex flex-col justify-end space-y-8 my-auto">
          <div className="max-w-2xl space-y-6">
            {/* Small Premium Status Bubble */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-white/90 uppercase shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#FF4B00] animate-pulse shadow-[0_0_8px_#FF4B00]" />
              <span>BOOK YOUR VEHICLE SERVICE</span>
            </div>

            <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase text-white leading-[0.92] tracking-tighter">
              EXPERIENCE THE <br />
              <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">finish.</span>
            </h2>
            <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] leading-relaxed max-w-xl">
              Bring your vehicle to our studio in Arulpuram, Tiruppur for genuine 3M detailing, graphene ceramic coating, and precision paint care.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 pt-2">
              {/* Primary: Book Inspection */}
              <a
                href={`tel:${companyData.contact.phone.replace(/\s+/g, '')}`}
                aria-label={`Call TMR AI Car Care at ${companyData.contact.phoneFormatted} to book an inspection`}
                className="group relative inline-flex items-center gap-4 px-6 sm:px-7 py-3.5 min-h-[58px] sm:min-h-[64px] rounded-2xl bg-gradient-to-r from-[#FF4B00] via-[#FF5500] to-[#E04200] text-white border border-[#FF7A3D]/70 shadow-[0_12px_32px_rgba(255,75,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_18px_44px_rgba(255,75,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_8px_20px_rgba(255,75,0,0.3)] transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-[#FF4B00] focus:ring-offset-2 focus:ring-offset-black cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-black/20 border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:scale-105 group-hover:rotate-6 transition-all duration-200">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-manrope font-extrabold text-xs sm:text-sm uppercase tracking-wider text-white flex items-center gap-1.5">
                    <span>BOOK AN INSPECTION</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </span>
                  <span className="font-mono text-[10px] sm:text-[11px] font-medium text-white/90 tracking-wider">
                    {companyData.contact.phoneFormatted}
                  </span>
                </div>
              </a>

              {/* Secondary: WhatsApp Consultation */}
              <a
                href={`https://wa.me/${companyData.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello TMR AI Car Care, I saw your studio gallery and would like to book a car detailing consultation.")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with TMR AI Car Care on WhatsApp for consultation"
                className="group relative inline-flex items-center gap-4 px-6 sm:px-7 py-3.5 min-h-[58px] sm:min-h-[64px] rounded-2xl bg-gradient-to-b from-[#1c1c1c]/90 to-[#0e0e0e]/95 backdrop-blur-md text-white border border-white/15 hover:border-white/35 shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:shadow-[0_14px_36px_rgba(0,0,0,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-black cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/25 flex items-center justify-center text-[#25D366] shrink-0 group-hover:bg-[#25D366]/20 group-hover:border-[#25D366]/40 transition-all duration-200 shadow-sm">
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-manrope font-extrabold text-xs sm:text-sm uppercase tracking-wider text-white">
                    CHAT ON WHATSAPP
                  </span>
                  <span className="font-mono text-[10px] sm:text-[11px] font-medium text-white/50 tracking-wider">
                    INSTANT CONSULTATION
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FULLSCREEN IMMERSIVE LIGHTBOX MODAL */}
      {/* Covers 100% of viewport, hides navbar, locks scroll, near-black clean background (NO blurred duplicate), compact floating caption bubble */}
      {currentLightboxPhoto && activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={() => setActiveLightboxIndex(null)}
          onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStartX !== null) {
              const touchEndX = e.changedTouches[0].clientX;
              const diff = touchStartX - touchEndX;
              if (Math.abs(diff) > 50) {
                if (diff > 0) handleNext();
                else handlePrev();
              }
              setTouchStartX(null);
            }
          }}
          className="fixed inset-0 z-[99999] bg-[#070707] bg-[radial-gradient(ellipse_at_center,_rgba(25,25,25,0.7)_0%,_rgba(7,7,7,0.98)_100%)] flex flex-col justify-between p-4 sm:p-6 select-none animate-in fade-in duration-200"
        >
          {/* Top Bar: Counter on Left, Clean Title in Center, Close on Right */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-7xl mx-auto flex items-center justify-between pb-3 border-b border-white/10 z-10"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="font-mono text-xs sm:text-sm font-bold text-[#FF4B00] tracking-widest">
                {activeLightboxIndex + 1} / {filteredPhotos.length}
              </span>
              <span className="h-4 w-px bg-white/20" />
              <h3 className="font-manrope font-bold text-xs sm:text-sm md:text-base text-white/90 tracking-tight truncate max-w-[200px] sm:max-w-md">
                {currentLightboxPhoto.title}
              </h3>
            </div>
            <button
              onClick={() => setActiveLightboxIndex(null)}
              aria-label="Close fullscreen view"
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#FF4B00] text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF4B00]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Stage: Image with Previous / Next navigation controls */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full flex-1 flex items-center justify-between my-auto relative px-1 sm:px-4 py-2"
          >
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous photograph"
              className="z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/75 hover:bg-[#FF4B00] border border-white/20 hover:border-[#FF4B00] text-white flex items-center justify-center transition-all duration-200 shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#FF4B00] shrink-0 mr-2 sm:mr-4"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Centered Image (object-contain — full visual preserved, clean subtle shadow) */}
            <div className="flex-1 flex items-center justify-center h-full max-h-[70vh] sm:max-h-[74vh] px-1 sm:px-6">
              <img
                key={currentLightboxPhoto.id}
                src={currentLightboxPhoto.src}
                alt={currentLightboxPhoto.alt}
                className="max-h-[68vh] sm:max-h-[72vh] max-w-[85vw] object-contain rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] border border-white/15 animate-in fade-in zoom-in-95 duration-200"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next photograph"
              className="z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/75 hover:bg-[#FF4B00] border border-white/20 hover:border-[#FF4B00] text-white flex items-center justify-center transition-all duration-200 shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#FF4B00] shrink-0 ml-2 sm:ml-4"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption: Compact floating translucent matte-black bubble */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl mx-auto px-5 py-3 rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)] text-center flex flex-col items-center gap-1 shrink-0 z-10"
          >
            <h4 className="font-manrope font-bold text-xs sm:text-sm text-white tracking-wide">
              {currentLightboxPhoto.title}
            </h4>
            <p className="font-manrope text-[11px] sm:text-xs text-[#A8A8A5] leading-relaxed max-w-lg">
              {currentLightboxPhoto.caption}
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
