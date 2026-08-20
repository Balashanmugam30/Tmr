export interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string; description?: string }[];
}

export const navigationItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    subItems: [
      {
        label: "Car Wash & Cleaning",
        href: "/services/car-wash-cleaning",
        description: "Express wash, deep interior detailing, snow foam decontamination",
      },
      {
        label: "Detailing & Paint Care",
        href: "/services/detailing-paint-care",
        description: "Multi-stage paint correction, swirl removal, gloss enhancement",
      },
      {
        label: "Ceramic Coating",
        href: "/services/ceramic-coating",
        description: "9H/10H nano-ceramic surface protection with multi-year warranty",
      },
      {
        label: "PPF & Paint Protection",
        href: "/services/ppf-paint-protection",
        description: "Self-healing TPU Paint Protection Film armor",
      },
      {
        label: "Sun-Control Films",
        href: "/services/sun-control-films",
        description: "High heat rejection, 99% UV block, ceramic window tints",
      },
      {
        label: "Car Accessories",
        href: "/services/car-accessories",
        description: "Curated interior comfort, ambient lighting, custom floor mats",
      },
    ],
  },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
