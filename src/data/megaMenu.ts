export type MegaMenuItem = {
  title: string;
  description: string;
  href: string;
};

export type MegaMenuColumn = {
  heading?: string;
  items: MegaMenuItem[];
};

export type MegaMenuConfig = {
  id: string;
  label: string;
  eyebrow: string;
  headline: string;
  description: string;
  targetWidth: number; // Menu-aware target desktop width in px
  columns: MegaMenuColumn[];
  cta?: {
    label: string;
    href: string;
  };
};

export const megaMenuData: Record<string, MegaMenuConfig> = {
  HOME: {
    id: 'home',
    label: 'HOME',
    eyebrow: 'TMR CAR CARE',
    headline: 'THE ART OF CAR CARE.',
    description: "Tiruppur's premium automotive detailing studio.",
    targetWidth: 560,
    columns: [
      {
        items: [
          {
            title: 'FLAGSHIP STUDIO',
            description: 'Avinashi Road, Tiruppur, Tamil Nadu.',
            href: '/',
          },
        ],
      },
    ],
    cta: {
      label: 'EXPLORE HOME →',
      href: '/',
    },
  },
  SERVICES: {
    id: 'services',
    label: 'SERVICES',
    eyebrow: 'SERVICES',
    headline: 'PREMIUM AUTOMOTIVE CARE.',
    description: 'Precision detailing, protection and finishing for demanding vehicles.',
    targetWidth: 1080,
    columns: [
      {
        heading: 'CLEANING & DETAILING',
        items: [
          {
            title: 'CAR WASH & CLEANING',
            description: 'Exterior washing, interior detailing & decontamination care.',
            href: '/services/car-wash-cleaning',
          },
          {
            title: 'DETAILING & PAINT CARE',
            description: 'Paint correction, gloss enhancement & surface restoration.',
            href: '/services/detailing-paint-care',
          },
        ],
      },
      {
        heading: 'SURFACE PROTECTION',
        items: [
          {
            title: 'CERAMIC COATING',
            description: 'Multi-year durable protection, hydrophobic finish & deep reflection.',
            href: '/services/ceramic-coating',
          },
          {
            title: 'PPF & PAINT PROTECTION',
            description: 'Paint protection film, impact armor & self-healing layer.',
            href: '/services/ppf-paint-protection',
          },
        ],
      },
      {
        heading: 'FILMS & ACCESSORIES',
        items: [
          {
            title: 'SUN-CONTROL FILMS',
            description: 'Heat rejection, solar protection & premium window tints.',
            href: '/services/sun-control-films',
          },
          {
            title: 'CAR ACCESSORIES',
            description: 'Interior upgrades, utility accessories & finishing touches.',
            href: '/services/car-accessories',
          },
        ],
      },
    ],
    cta: {
      label: 'VIEW ALL SERVICES →',
      href: '/services',
    },
  },
  PRODUCTS: {
    id: 'products',
    label: 'PRODUCTS',
    eyebrow: 'PRODUCTS',
    headline: 'THE PROFESSIONAL STANDARD.',
    description: 'Professional automotive-care products selected for finish, protection and precision work.',
    targetWidth: 1020,
    columns: [
      {
        heading: 'CLEANING & POLISHING',
        items: [
          {
            title: 'CLEANING',
            description: 'Exterior cleaners, interior care & wheel decontamination.',
            href: '/products?category=cleaning',
          },
          {
            title: 'POLISHING',
            description: 'Compounds, finishing polishes & applicators.',
            href: '/products?category=polishing',
          },
        ],
      },
      {
        heading: 'PROTECTION & FILMS',
        items: [
          {
            title: 'PROTECTION',
            description: 'Ceramic products, sealants & protective treatments.',
            href: '/products?category=protection',
          },
          {
            title: 'FILMS',
            description: 'PPF armor & sun-control window films.',
            href: '/products?category=films',
          },
        ],
      },
      {
        heading: 'TOOLS & ACCESSORIES',
        items: [
          {
            title: 'TOOLS',
            description: 'Polishers, detailing brushes & applicators.',
            href: '/products?category=tools',
          },
          {
            title: 'ACCESSORIES',
            description: 'Interior, exterior & workshop utility items.',
            href: '/products?category=accessories',
          },
        ],
      },
    ],
    cta: {
      label: 'VIEW ALL PRODUCTS →',
      href: '/products',
    },
  },
  GALLERY: {
    id: 'gallery',
    label: 'GALLERY',
    eyebrow: 'THE WORK',
    headline: 'SEE THE DIFFERENCE.',
    description: "A visual archive of TMR's detailing, restoration and protection work.",
    targetWidth: 860,
    columns: [
      {
        items: [
          {
            title: 'TRANSFORMATION',
            description: 'Before & after paint correction work.',
            href: '/gallery',
          },
          {
            title: 'DETAILING',
            description: 'Surface correction and gloss reflections.',
            href: '/gallery',
          },
          {
            title: 'PROTECTION',
            description: 'Ceramic coating and PPF installations.',
            href: '/gallery',
          },
          {
            title: 'WORKSHOP',
            description: 'The TMR studio environment & bays.',
            href: '/gallery',
          },
        ],
      },
    ],
    cta: {
      label: 'VIEW FULL GALLERY →',
      href: '/gallery',
    },
  },
  ABOUT: {
    id: 'about',
    label: 'ABOUT',
    eyebrow: 'ABOUT TMR',
    headline: 'BUILT AROUND THE DETAIL.',
    description: 'Our story, philosophy and studio standards.',
    targetWidth: 840,
    columns: [
      {
        items: [
          {
            title: 'OUR STORY',
            description: 'How TMR began and what we stand for.',
            href: '/about',
          },
          {
            title: 'OUR STANDARD',
            description: 'The philosophy behind our craftsmanship.',
            href: '/about',
          },
          {
            title: 'OUR WORKSHOP',
            description: 'Inside the Tiruppur studio facility.',
            href: '/about',
          },
          {
            title: 'LOCATION',
            description: 'Tiruppur, Tamil Nadu studio.',
            href: '/about',
          },
        ],
      },
    ],
    cta: {
      label: 'ABOUT TMR →',
      href: '/about',
    },
  },
  CONTACT: {
    id: 'contact',
    label: 'CONTACT',
    eyebrow: 'CONTACT',
    headline: 'THE DOOR IS OPEN.',
    description: 'Direct location & workshop hours.',
    targetWidth: 720,
    columns: [
      {
        items: [
          {
            title: 'TIRUPPUR WORKSHOP',
            description: 'Avinashi Road, Tiruppur, Tamil Nadu.',
            href: '/contact',
          },
          {
            title: 'WORKSHOP HOURS',
            description: 'Mon–Sat: 9:00 AM – 8:00 PM | Sun: 10:00 AM – 5:00 PM (By Appt)',
            href: '/contact',
          },
        ],
      },
    ],
    cta: {
      label: 'OPEN CONTACT →',
      href: '/contact',
    },
  },
};
