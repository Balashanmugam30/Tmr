export interface Product {
  id: string;
  slug: string;
  sku: string;
  name: string;
  brand: string;
  category: "Wash" | "Polish" | "Coating" | "PPF" | "Maintenance" | "Accessories";
  shortDescription: string;
  fullDescription: string;
  specs: { label: string; value: string }[];
  applicationSteps: string[];
  image: string;
  sourceUrl?: string;
  isVerified: boolean;
}

export const productsData: Product[] = [
  {
    id: "3m-ceramic-coating-kit",
    slug: "3m-ceramic-coating-kit",
    sku: "3M-CC-800",
    name: "3M Ceramic Coating Paint Protection Kit",
    brand: "3M Automotive",
    category: "Coating",
    shortDescription: "Professional-grade ceramic coating formula creating a durable hydrophobic barrier.",
    fullDescription: "3M Ceramic Coating is a proprietary formulation designed for professional detailing shops. It bonds to vehicle paint surfaces to create a superhydrophobic layer, enhancing slickness, deep shine, and resistance to environmental contaminants.",
    specs: [
      { label: "Durability", value: "Up to 5 Years" },
      { label: "Hardness", value: "9H Equivalent Quartz Matrix" },
      { label: "Water Beading Angle", value: "> 105°" },
      { label: "Application Area", value: "Exterior Paint, Clear Coat, Chrome" },
      { label: "Origin", value: "3M Automotive Division" },
    ],
    applicationSteps: [
      "Decontaminate vehicle paint using clay bar and iron remover.",
      "Perform multi-stage paint correction to eliminate swirl marks.",
      "Wipe surface thoroughly with isopropyl alcohol prep cleaner.",
      "Apply 3M Ceramic Coating evenly using cross-hatch motion applicator.",
      "Buff off excess residue after flash off time using premium microfiber."
    ],
    image: "/products/3m-ceramic-kit.jpg",
    sourceUrl: "https://www.3m.com/3M/en_US/car-care-us/",
    isVerified: true,
  },
  {
    id: "meguiars-m210-ultra-finishing-polish",
    slug: "meguiars-m210-ultra-finishing-polish",
    sku: "MEG-M21032",
    name: "Meguiar's Mirror Glaze M210 Ultra Finishing Polish",
    brand: "Meguiar's Professional",
    category: "Polish",
    shortDescription: "Ultra-fine finishing compound engineered to deliver deep clarity and haze-free shine.",
    fullDescription: "Formulated specifically for soft clear coats and sensitive dark paint colors, Meguiar's M210 Ultra Finishing Polish removes micro-marring and compound hazing, leaving behind a flawless mirror reflection.",
    specs: [
      { label: "Cut Level", value: "3 / 12 (Ultra Fine)" },
      { label: "Gloss Level", value: "11 / 12 (Deep Mirror Reflection)" },
      { label: "Volume", value: "32 oz (946 ml)" },
      { label: "Compatibility", value: "Dual Action & Rotary Polishers" },
      { label: "Origin", value: "Meguiar's USA" },
    ],
    applicationSteps: [
      "Attach foam finishing pad to dual-action polisher.",
      "Apply 4-5 dime-sized drops of M210 onto pad surface.",
      "Work in a 2ft x 2ft section at medium speed using light pressure.",
      "Wipe clean with plush microfiber towel for inspection."
    ],
    image: "/products/meguiars-m210.jpg",
    sourceUrl: "https://www.meguiars.com/",
    isVerified: true,
  },
  {
    id: "koch-chemie-gentle-snow-foam",
    slug: "koch-chemie-gentle-snow-foam",
    sku: "KC-GSF-1000",
    name: "Koch Chemie Gentle Snow Foam (Gsf)",
    brand: "Koch Chemie Germany",
    category: "Wash",
    shortDescription: "High-foaming pH-neutral cleaning shampoo for safe touchless foam pre-wash.",
    fullDescription: "Koch Chemie Gsf is a premium pH-neutral snow foam developed in Germany. It creates a dense, long-clinging foam blanket that encapsulates grit, dirt, and bug spatter, allowing effortless rinse-off without stripping existing waxes or coatings.",
    specs: [
      { label: "pH Level", value: "7.5 (pH-Neutral Safe)" },
      { label: "Foam Density", value: "Ultra Thick Blanket Foam" },
      { label: "Volume", value: "1000 ml" },
      { label: "Dilution Ratio", value: "20ml per 1L Foam Lance" },
      { label: "Origin", value: "Koch Chemie GmbH, Germany" },
    ],
    applicationSteps: [
      "Mix 20-30ml of Gsf with 1L warm water in foam cannon bottle.",
      "Spray foam evenly from bottom to top of dry vehicle.",
      "Allow foam to dwell for 5 minutes to lift surface grime.",
      "Rinse thoroughly with high-pressure power washer."
    ],
    image: "/products/koch-chemie-gsf.jpg",
    sourceUrl: "https://www.koch-chemie.com/",
    isVerified: true,
  },
  {
    id: "carpro-reset-car-shampoo",
    slug: "carpro-reset-car-shampoo",
    sku: "CP-RST-1000",
    name: "CarPro Reset Intensive Car Shampoo",
    brand: "CarPro",
    category: "Wash",
    shortDescription: "Intensive maintenance shampoo formulated specifically for ceramic coated vehicles.",
    fullDescription: "CarPro Reset was created to clean and maintain nano-technology ceramic coatings. Free from gloss enhancers, silicone, or synthetic waxes, Reset breaks down traffic film and road oils while restoring the hydrophobic properties of your ceramic coating.",
    specs: [
      { label: "pH Level", value: "Intensive Clean (Safe for Coatings)" },
      { label: "Dilution Ratio", value: "1:500 (Highly Concentrated)" },
      { label: "Volume", value: "1000 ml" },
      { label: "Residue", value: "Zero Gloss Enhancers or Wax Additives" },
      { label: "Origin", value: "CarPro Global" },
    ],
    applicationSteps: [
      "Dilute 40ml of Reset in 20 liters of water in a clean bucket.",
      "Wash vehicle top-down using CarPro Microfiber Madness mitt.",
      "Rinse thoroughly with fresh water.",
      "Dry with plush twist-loop microfiber drying towel."
    ],
    image: "/products/carpro-reset.jpg",
    sourceUrl: "https://carpro.global/",
    isVerified: true,
  },
  {
    id: "3m-scotchgard-ppf-pro",
    slug: "3m-scotchgard-ppf-pro",
    sku: "3M-PPF-PRO100",
    name: "3M Scotchgard Paint Protection Film Pro Series 200",
    brand: "3M Automotive",
    category: "PPF",
    shortDescription: "High-grade self-healing TPU film providing invisible defense against rock chips.",
    fullDescription: "3M Scotchgard Pro Series 200 represents the benchmark in Paint Protection Film. Featuring self-healing heat technology, hydrophobic clear coat, and superior yellowing resistance, it shields vulnerable vehicle body panels against road stones and environmental scratches.",
    specs: [
      { label: "Thickness", value: "8.0 mil (203 microns)" },
      { label: "Material", value: "Thermoplastic Polyurethane (TPU)" },
      { label: "Self-Healing", value: "Heat-Activated Top Coat" },
      { label: "Warranty", value: "10 Year Limited Manufacturer Warranty" },
      { label: "Origin", value: "3M USA" },
    ],
    applicationSteps: [
      "Clean and decontaminate vehicle body panel completely.",
      "Spray slip solution on paint surface and adhesive side of film.",
      "Position film over panel alignment marks.",
      "Squeegee out slip solution from center outwards, wrapping edges securely."
    ],
    image: "/products/3m-ppf-pro.jpg",
    sourceUrl: "https://www.3m.com/3M/en_US/post-factory-installation-us/paint-protection-film/",
    isVerified: true,
  },
  {
    id: "gyeon-q2m-wetcoat",
    slug: "gyeon-q2m-wetcoat",
    sku: "GYE-WET-1000",
    name: "Gyeon Q²M WetCoat Spray Sealant",
    brand: "Gyeon Quartz",
    category: "Maintenance",
    shortDescription: "Instant hydrophobic spray-and-rinse silica sealant for high gloss maintenance.",
    fullDescription: "Gyeon Q²M WetCoat is a revolutionary spray-on sealant that provides instant quartz protection in seconds. Simply spray onto a freshly washed wet vehicle and rinse off with pressure washer to achieve instant hydrophobic water beading.",
    specs: [
      { label: "Durability", value: "Up to 3 Months" },
      { label: "Application", value: "Spray & Rinse on Wet Car" },
      { label: "SiO2 Content", value: "Quartz Formula" },
      { label: "Volume", value: "1000 ml" },
      { label: "Origin", value: "Gyeon Quartz Korea / International" },
    ],
    applicationSteps: [
      "Wash vehicle and rinse off shampoo while vehicle is still wet.",
      "Spray Q²M WetCoat over one panel at a time.",
      "Immediately rinse with high-pressure water to activate sealant."
    ],
    image: "/products/gyeon-wetcoat.jpg",
    sourceUrl: "https://gyeonquartz.com/",
    isVerified: true,
  }
];
