export interface ServiceCategory {
  id: string;
  slug: string;
  indexNumber: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  features: string[];
  packages?: {
    name: string;
    duration: string;
    warranty?: string;
    highlights: string[];
  }[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: "car-wash-cleaning",
    slug: "car-wash-cleaning",
    indexNumber: "01",
    title: "Car Wash & Cleaning",
    shortDescription: "Precision snow foam washing, deep interior sanitization, and underbody decontamination.",
    fullDescription: "Our car washing and cleaning service transcends conventional vehicle washing. Utilizing pH-neutral snow foam, multi-bucket wash techniques, microfiber drying towels, and deep interior steam extraction, we safeguard your paintwork while restoring your vehicle's pristine interior cleanliness.",
    heroImage: "/images/car-wash-hero.jpg",
    features: [
      "pH-neutral high-density snow foam wash",
      "Two-bucket wash method with grit guards",
      "Interior deep vacuuming & steam sanitization",
      "Alloy wheel & brake dust decontamination",
      "Tire dressing & exterior trim restoration",
      "Underbody high-pressure rinse"
    ],
    packages: [
      {
        name: "Express Detail Wash",
        duration: "60 Mins",
        highlights: ["pH-neutral Foam Wash", "Interior Vacuum & Wipe", "Tire Gloss Dressing", "Glass Cleaning"]
      },
      {
        name: "Deep Interior & Exterior Clean",
        duration: "3 Hours",
        highlights: ["Full Foam Wash & Clay Bar", "Steam Sanitization", "Leather Condition & Fabric Shampoo", "Engine Bay Wash"]
      },
      {
        name: "Ultimate Decontamination Wash",
        duration: "5 Hours",
        highlights: ["Iron & Tar Removal", "Undercarriage Clean", "Deep Leather Care", "Light Surface Polish"]
      }
    ]
  },
  {
    id: "detailing-paint-care",
    slug: "detailing-paint-care",
    indexNumber: "02",
    title: "Detailing & Paint Care",
    shortDescription: "Multi-stage paint correction, swirl mark elimination, and gloss restoration.",
    fullDescription: "Paint correction is the art of permanently eliminating swirl marks, scratches, etching, and oxidation. Using dual-action polishers, specialized compound pads, and precision LED inspection lighting, we measure paint depth and systematically refine the clear coat to achieve optical clarity.",
    heroImage: "/images/detailing-hero.jpg",
    features: [
      "Ultrasonic paint depth gauge measurement",
      "Stage 1 Gloss Enhancement",
      "Stage 2 Heavy Defect & Swirl Correction",
      "Stage 3 Multi-step Mirror Finishing",
      "Headlight & Tail Light Lens Restoration",
      "Chrome & Exhaust Tip Polish"
    ],
    packages: [
      {
        name: "Stage 1 Gloss Enhancement",
        duration: "1 Day",
        highlights: ["Single-stage Machine Polish", "Eliminates Light Haze", "Restores Deep Color Depth"]
      },
      {
        name: "Stage 2 Paint Correction",
        duration: "2 Days",
        highlights: ["Compounding & Finishing Polish", "Removes 80-90% Swirl Marks", "Mirror Surface Preparation"]
      }
    ]
  },
  {
    id: "ceramic-coating",
    slug: "ceramic-coating",
    indexNumber: "03",
    title: "Ceramic Coating",
    shortDescription: "9H & 10H quartz nano-ceramic shielding with extreme hydrophobic water beading.",
    fullDescription: "TMR Ceramic Coating applies a permanent molecular bond over your car's clear coat. Producing a 9H/10H protective quartz matrix, it shields against UV rays, acid rain, bird dropping etchings, and road grime while delivering a mirror gloss and hydrophobic self-cleaning surface.",
    heroImage: "/images/ceramic-hero.jpg",
    features: [
      "9H / 10H Hardness Rating Certified",
      "Superhydrophobic water-beading angle > 110°",
      "Multi-year written warranty with annual inspection",
      "Glass, Alloy Wheel, and Trim Ceramic Protection",
      "Self-cleaning chemical resistance (pH 2 - pH 13)",
      "High UV fade prevention"
    ],
    packages: [
      {
        name: "TMR Armor 3-Year Ceramic",
        duration: "2 Days",
        warranty: "3 Years Written Warranty",
        highlights: ["9H Body Paint Coating", "Single-layer Base + Top Coat", "Windshield Rain Repellent"]
      },
      {
        name: "TMR Flagship 5-Year Ceramic",
        duration: "3 Days",
        warranty: "5 Years Written Warranty",
        highlights: ["Dual-layer 10H Nano Quartz", "Alloy Wheel Face Coating", "Interior Leather & Fabric Shield"]
      }
    ]
  },
  {
    id: "ppf-paint-protection",
    slug: "ppf-paint-protection",
    indexNumber: "04",
    title: "PPF & Paint Protection",
    shortDescription: "Self-healing TPU Paint Protection Film armor against rock chips and road debris.",
    fullDescription: "Paint Protection Film (PPF) is the ultimate physical barrier for your vehicle. Made from ultra-clear Thermoplastic Polyurethane (TPU), TMR PPF self-heals swirl marks under ambient heat, absorbs stone chip impacts, and prevents parking scuffs without altering paint color.",
    heroImage: "/images/ppf-hero.jpg",
    features: [
      "Self-healing TPU technology (heals under sun/warm water)",
      "Impact absorbing thickness (7.5 mil to 10 mil)",
      "High clarity non-yellowing adhesive formula",
      "Custom computer-cut patterns for flawless edge wrapping",
      "Gloss & Satin Matte Finish Options",
      "Up to 10 Years Manufacturer Warranty"
    ],
    packages: [
      {
        name: "Essential Front Armor",
        duration: "2 Days",
        warranty: "5 Years Warranty",
        highlights: ["Front Bumper", "Headlights", "Side Mirrors"]
      },
      {
        name: "Full Front Package",
        duration: "3 Days",
        warranty: "7 Years Warranty",
        highlights: ["Full Hood", "Full Fenders", "Front Bumper", "Mirrors & A-Pillars"]
      },
      {
        name: "Complete Vehicle Armor (Full Body)",
        duration: "5 Days",
        warranty: "10 Years Warranty",
        highlights: ["Every Exterior Painted Surface wrapped", "Self-Healing TPU Film", "Wrapped Edges"]
      }
    ]
  },
  {
    id: "sun-control-films",
    slug: "sun-control-films",
    indexNumber: "05",
    title: "Sun-Control Films",
    shortDescription: "Advanced ceramic window tints with up to 99% UV block and 95% IR heat rejection.",
    fullDescription: "Experience superior cabin cooling and privacy with TMR Sun-Control Window Films. Engineered with non-metallic ceramic nanoparticle technology, our films block solar heat and UV radiation without interfering with GPS, cell signals, or night vision.",
    heroImage: "/images/tint-hero.jpg",
    features: [
      "99% Harmful UV Ray Block",
      "Up to 95% Infrared (IR) Solar Heat Rejection",
      "Multiple VLT (Visible Light Transmission) shades available",
      "Non-metallic construction — Zero signal interference",
      "Glare reduction for safer night & bright daylight driving",
      "Shatter-resistant safety film properties"
    ],
    packages: [
      {
        name: "IR Ceramic Shield",
        duration: "4 Hours",
        warranty: "5 Years Warranty",
        highlights: ["High Heat Rejection", "99% UV Block", "Side & Rear Glasses"]
      },
      {
        name: "Ultimate Solar Shield (Full Car + Windshield)",
        duration: "6 Hours",
        warranty: "7 Years Warranty",
        highlights: ["Front Windshield High-VLT Film", "All Side & Rear Glass", "Maximum Heat Reduction"]
      }
    ]
  },
  {
    id: "car-accessories",
    slug: "car-accessories",
    indexNumber: "06",
    title: "Car Accessories",
    shortDescription: "Curated interior styling, custom 7D floor mats, ambient lighting, and utility upgrades.",
    fullDescription: "Transform your vehicle's cabin into a bespoke luxury environment. We supply and install custom-fit 7D floor mats, premium leatherette seat covers, OEM-grade ambient lighting, dash cameras, and ergonomic interior accessories tailored to your car's exact dimensions.",
    heroImage: "/images/accessories-hero.jpg",
    features: [
      "Custom 7D & 9D All-Weather Floor Mats",
      "Bespoke Leatherette & Nappa Leather Seat Covers",
      "Multi-color App-Controlled Ambient Lighting",
      "4K Dual Dash Cameras & Parking Monitors",
      "Ergonomic Memory Foam Cushions & Mounts",
      "Precision In-House Installation"
    ],
    packages: [
      {
        name: "Interior Luxury Comfort Kit",
        duration: "2 Hours",
        highlights: ["Custom 7D Floor Mats", "Memory Foam Neck Rest Pillows", "Leather Console Mount"]
      },
      {
        name: "Cockpit Ambient & Tech Pack",
        duration: "4 Hours",
        highlights: ["Multi-zone Ambient Lighting", "Front & Rear Dash Cam Install", "Concealed Wiring"]
      }
    ]
  }
];
