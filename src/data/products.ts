export interface Product {
  id: string;
  slug: string;
  sku: string;
  name: string;
  brand: string;
  category: "ABRASIVES" | "CLEANING" | "POLISHING" | "PROTECTION" | "FILMS" | "TOOLS" | "ACCESSORIES";
  shortDescription: string;
  fullDescription: string;
  specs: { label: string; value: string }[];
  applicationSteps: string[];
  image: string;
  detailRoute: string;
  sourceUrl?: string;
  isVerified: boolean;
}

export const productsData: Product[] = [
  {
    id: "3m-perfect-it-ex",
    slug: "3m-perfect-it-ex-ac-rubbing-compound",
    sku: "PN 36060",
    name: "3M™ Perfect-It™ EX AC Rubbing Compound",
    brand: "3M™ Automotive",
    category: "POLISHING",
    shortDescription: "High-performance paint correction formula for removing P1200 or finer sand scratches while leaving a high-gloss finish.",
    fullDescription: "3M™ Perfect-It™ EX AC Rubbing Compound is engineered to perform on all clear coats. The liquid formula clings to compounding pads, reducing splatter, sling, and cleanup time during multi-stage paint correction.",
    specs: [
      { label: "Part Number", value: "PN 36060" },
      { label: "Refinement Grade", value: "P1200 or Finer" },
      { label: "Application Area", value: "Exterior Clear Coat" },
      { label: "Volume", value: "32 oz / 946 ml" },
      { label: "Origin", value: "3M Automotive Division" },
    ],
    applicationSteps: [
      "Decontaminate vehicle paint using clay bar prep.",
      "Apply 4-5 drops onto wool or foam compounding pad.",
      "Polishing at 1200-1800 RPM in 2ft x 2ft sections.",
      "Wipe clean with plush microfiber towel."
    ],
    image: "/images/products/3m/3m-perfect-it-ex-rubbing-compound.jpg",
    detailRoute: "/products/3m-perfect-it-ex-ac-rubbing-compound",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
  },
  {
    id: "3m-trizact-performance-abrasives",
    slug: "3m-trizact-performance-abrasives",
    sku: "PN 02085",
    name: "3M™ Trizact™ Performance Abrasives",
    brand: "3M™ Automotive",
    category: "ABRASIVES",
    shortDescription: "Structured micro-replication abrasive technology delivering uniform finish and faster polishing preparation.",
    fullDescription: "3M™ Trizact™ abrasives utilize proprietary micro-replication technology where tiny pyramids containing multiple layers of abrasive mineral are evenly distributed on a flexible backing.",
    specs: [
      { label: "Part Number", value: "PN 02085" },
      { label: "Grit Level", value: "P3000 / P5000 Foam Discs" },
      { label: "Application", value: "Paint Defect Leveling" },
      { label: "Diameter", value: "6 in / 152 mm" },
      { label: "Origin", value: "3M Automotive Division" },
    ],
    applicationSteps: [
      "Dampen abrasive disc with clean water spray.",
      "Attach to dual action sander using soft interface pad.",
      "Sand in uniform overlapping passes over paint nibs.",
      "Wipe surface clean to inspect uniform satin finish."
    ],
    image: "/images/products/3m/3m-trizact-abrasives.jpg",
    detailRoute: "/products/3m-perfect-it-ex-ac-rubbing-compound",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
  },
  {
    id: "3m-quick-wax-spray",
    slug: "3m-quick-wax-spray",
    sku: "PN 39034",
    name: "3M™ Quick Wax Spray",
    brand: "3M™ Automotive",
    category: "CLEANING",
    shortDescription: "Carnauba wax mist formula engineered for a deep, high-gloss shine and hydrophobic protection in minutes.",
    fullDescription: "3M™ Quick Wax contains premium Carnauba wax formula for mist-on, wipe-off surface enhancement between regular wax applications.",
    specs: [
      { label: "Part Number", value: "PN 39034" },
      { label: "Wax Base", value: "Liquid Carnauba Matrix" },
      { label: "Volume", value: "16 fl oz / 473 ml" },
      { label: "Application", value: "Spray & Wipe High Gloss" },
      { label: "Origin", value: "3M Automotive Division" },
    ],
    applicationSteps: [
      "Ensure vehicle surface is clean and dry.",
      "Mist spray lightly onto single body panel.",
      "Spread evenly with clean folded microfiber towel.",
      "Buff off immediately with dry microfiber side."
    ],
    image: "/images/products/3m/3m-quick-wax-spray.jpg",
    detailRoute: "/products/3m-perfect-it-ex-ac-rubbing-compound",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
  },
  {
    id: "meguiars-m210-ultra-finishing-polish",
    slug: "meguiars-m210-ultra-finishing-polish",
    sku: "MEG-M21032",
    name: "Meguiar's Mirror Glaze M210 Ultra Finishing Polish",
    brand: "Meguiar's Professional",
    category: "POLISHING",
    shortDescription: "Ultra-fine finishing compound engineered to deliver deep clarity and haze-free mirror gloss.",
    fullDescription: "Formulated specifically for soft clear coats and sensitive dark paint colors, Meguiar's M210 Ultra Finishing Polish eliminates micro-marring and compound hazing.",
    specs: [
      { label: "Cut Level", value: "3 / 12 (Ultra Fine)" },
      { label: "Gloss Level", value: "11 / 12 (Deep Reflection)" },
      { label: "Volume", value: "32 oz / 946 ml" },
      { label: "Compatibility", value: "DA & Rotary Polishers" },
      { label: "Origin", value: "Meguiar's USA" },
    ],
    applicationSteps: [
      "Attach foam finishing pad to dual-action polisher.",
      "Apply 4-5 dime-sized drops onto pad surface.",
      "Work in 2ft x 2ft section at medium speed.",
      "Wipe clean with plush microfiber towel."
    ],
    image: "/images/products/3m/meguiars-m210-finishing-polish.jpg",
    detailRoute: "/products/3m-perfect-it-ex-ac-rubbing-compound",
    sourceUrl: "https://www.meguiars.com/",
    isVerified: true,
  },
  {
    id: "3m-ceramic-coating-kit",
    slug: "3m-ceramic-coating-kit",
    sku: "3M-CC-800",
    name: "3M™ Ceramic Coating Paint Protection Kit",
    brand: "3M™ Automotive",
    category: "PROTECTION",
    shortDescription: "Professional-grade 9H quartz ceramic coating formula creating a durable hydrophobic clear barrier.",
    fullDescription: "3M Ceramic Coating bonds chemically to exterior vehicle paint surfaces to create a superhydrophobic barrier enhancing slickness and chemical resistance.",
    specs: [
      { label: "Durability", value: "Up to 5 Years" },
      { label: "Hardness", value: "9H Quartz Matrix" },
      { label: "Water Angle", value: "> 105°" },
      { label: "Application", value: "Clear Coat & Paint" },
      { label: "Origin", value: "3M Automotive Division" },
    ],
    applicationSteps: [
      "Decontaminate paint using clay bar and alcohol prep.",
      "Apply ceramic coating evenly using cross-hatch applicator.",
      "Buff off excess residue after flash off time."
    ],
    image: "/images/products/3m/3m-perfect-it-ex-rubbing-compound.jpg",
    detailRoute: "/services/ceramic-coating",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
  },
  {
    id: "3m-scotchgard-ppf-pro",
    slug: "3m-scotchgard-ppf-pro",
    sku: "3M-PPF-PRO200",
    name: "3M™ Scotchgard™ Paint Protection Film Pro 200",
    brand: "3M™ Automotive",
    category: "FILMS",
    shortDescription: "Self-healing clear TPU film providing invisible defense against stone chips and environmental scratches.",
    fullDescription: "3M Scotchgard Pro Series 200 represents the benchmark in Paint Protection Film with heat-activated self-healing top coat.",
    specs: [
      { label: "Thickness", value: "8.0 mil (203 microns)" },
      { label: "Material", value: "Thermoplastic Polyurethane" },
      { label: "Self-Healing", value: "Heat-Activated Top Coat" },
      { label: "Warranty", value: "10 Year Warranty" },
      { label: "Origin", value: "3M USA" },
    ],
    applicationSteps: [
      "Clean paint panel thoroughly.",
      "Spray slip solution on paint and film.",
      "Squeegee slip solution out from center."
    ],
    image: "/images/ppf/ppf-hero.webp",
    detailRoute: "/services/ppf-paint-protection",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
  }
];
