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
    targetWidth: 520,
    columns: [
      {
        items: [
          {
            title: 'FLAGSHIP STUDIO',
            description: 'Avinashi Road, Near Hope College, Tiruppur, Tamil Nadu — 641602.',
            href: '/#flagship-studio',
          },
        ],
      },
    ],
  },
  SERVICES: {
    id: 'services',
    label: 'SERVICES',
    eyebrow: 'SERVICES',
    headline: 'PREMIUM AUTOMOTIVE CARE.',
    description: 'Precision detailing, protection and finishing for demanding vehicles.',
    targetWidth: 980,
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
    targetWidth: 980,
    columns: [
      {
        heading: 'CLEANING & POLISHING',
        items: [
          {
            title: 'CLEANING',
            description: 'Exterior cleaners, wash solutions and maintenance products.',
            href: '/products?category=CLEANING',
          },
          {
            title: 'POLISHING',
            description: 'Compounds, finishing polishes and paint-refinement products.',
            href: '/products?category=POLISHING',
          },
        ],
      },
      {
        heading: 'PROTECTION & FILMS',
        items: [
          {
            title: 'PROTECTION',
            description: 'Ceramic, sealant and surface-protection products.',
            href: '/products?category=PROTECTION',
          },
          {
            title: 'FILMS',
            description: 'PPF and automotive protection-film products.',
            href: '/products?category=FILMS',
          },
        ],
      },
      {
        heading: 'TOOLS & ACCESSORIES',
        items: [
          {
            title: 'TOOLS',
            description: 'Polishers, pads, brushes and detailing tools.',
            href: '/products?category=TOOLS',
          },
          {
            title: 'ACCESSORIES',
            description: 'Microfibers, applicators and vehicle-care accessories.',
            href: '/products?category=ACCESSORIES',
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
    targetWidth: 720,
    columns: [
      {
        items: [
          {
            title: 'TRANSFORMATION',
            description: 'Before & after paint correction work.',
            href: '/gallery#transformation',
          },
          {
            title: 'DETAILING',
            description: 'Surface correction and gloss reflections.',
            href: '/gallery#detailing',
          },
        ],
      },
      {
        items: [
          {
            title: 'PROTECTION',
            description: 'Ceramic coating and PPF installations.',
            href: '/gallery#protection',
          },
          {
            title: 'WORKSHOP',
            description: 'The TMR studio environment & bays.',
            href: '/gallery#workshop',
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
    targetWidth: 720,
    columns: [
      {
        items: [
          {
            title: 'OUR STORY',
            description: 'How TMR began and what we stand for.',
            href: '/about#story',
          },
          {
            title: 'OUR STANDARD',
            description: 'The philosophy behind our craftsmanship.',
            href: '/about#standard',
          },
        ],
      },
      {
        items: [
          {
            title: 'OUR WORKSHOP',
            description: 'Inside the Tiruppur studio facility.',
            href: '/about#workshop',
          },
          {
            title: 'LOCATION',
            description: 'Tiruppur, Tamil Nadu studio.',
            href: '/about#location',
          },
        ],
      },
    ],
    cta: {
      label: 'VIEW ABOUT TMR →',
      href: '/about',
    },
  },
  CONTACT: {
    id: 'contact',
    label: 'CONTACT',
    eyebrow: 'CONTACT',
    headline: 'THE DOOR IS OPEN.',
    description: 'Direct location & workshop hours.',
    targetWidth: 680,
    columns: [
      {
        items: [
          {
            title: 'TIRUPPUR WORKSHOP',
            description: 'Avinashi Road, Tiruppur, Tamil Nadu.',
            href: '/contact#tiruppur-workshop',
          },
        ],
      },
      {
        items: [
          {
            title: 'WORKSHOP HOURS',
            description: 'Mon–Sat: 9:00 AM – 8:00 PM | Sun: 10:00 AM – 5:00 PM (By Appt)',
            href: '/contact#workshop-hours',
          },
        ],
      },
    ],
    cta: {
      label: 'CONTACT TMR →',
      href: '/contact',
    },
  },
};
