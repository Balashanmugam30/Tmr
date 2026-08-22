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
    image: "/images/products/3m/3m-perfect-it-ex.jpg",
    detailRoute: "/products/3m-perfect-it-ex-ac-rubbing-compound",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
  },
  {
    id: "3m-perfect-it-ex-machine-polish",
    slug: "3m-perfect-it-ex-machine-polish",
    sku: "PN 06094",
    name: "3M™ Perfect-It™ EX Machine Polish",
    brand: "3M™ Automotive",
    category: "POLISHING",
    shortDescription: "Premium machine polish engineered to quickly remove compound swirl marks while producing a deep, high-gloss shine.",
    fullDescription: "Formulated to cling to foam pads, 3M Perfect-It EX Machine Polish reduces sling and leaves zero hazy residue on dark automotive finishes.",
    specs: [
      { label: "Part Number", value: "PN 06094" },
      { label: "Step", value: "Step 2 Machine Polish" },
      { label: "Volume", value: "32 oz / 946 ml" },
      { label: "Compatibility", value: "Rotary & DA Polishers" }
    ],
    applicationSteps: [
      "Apply 3-4 drops to foam polishing pad.",
      "Work at 1200-1500 RPM over 2ft x 2ft area.",
      "Wipe clean with microfiber towel."
    ],
    image: "/images/products/3m/3m-perfect-it-ex-machine-polish.jpg",
    detailRoute: "#product-catalogue",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
  },
  {
    id: "3m-perfect-it-ex-ultrafine-polish",
    slug: "3m-perfect-it-ex-ultrafine-polish",
    sku: "PN 06068",
    name: "3M™ Perfect-It™ EX Ultrafine Machine Polish",
    brand: "3M™ Automotive",
    category: "POLISHING",
    shortDescription: "Ultra-fine polish formulated specifically to eliminate micro-swirls and holograms on sensitive black and dark clear coats.",
    fullDescription: "3M Perfect-It EX Ultrafine Machine Polish is the final step in paint correction, ensuring a flawless mirror reflection without micro-marring.",
    specs: [
      { label: "Part Number", value: "PN 06068" },
      { label: "Step", value: "Step 3 Ultrafine Finish" },
      { label: "Volume", value: "32 oz / 946 ml" }
    ],
    applicationSteps: [
      "Use blue ultrafine foam pad at medium speed.",
      "Buff lightly until clear high-gloss shine emerges."
    ],
    image: "/images/products/3m/3m-perfect-it-ex-ultrafine-polish.jpg",
    detailRoute: "#product-catalogue",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
  },
  {
    id: "3m-trizact-5000",
    slug: "3m-trizact-5000",
    sku: "PN 30662",
    name: "3M™ Trizact™ Hookit™ Foam Disc P5000",
    brand: "3M™ Automotive",
    category: "ABRASIVES",
    shortDescription: "P5000 micro-replication foam abrasive disc designed for ultra-fine paint refining before compounding.",
    fullDescription: "3M Trizact P5000 foam discs reduce compounding time by refining P1500-P3000 sand scratches into a uniform satin haze.",
    specs: [
      { label: "Part Number", value: "PN 30662" },
      { label: "Grit Grade", value: "P5000 Ultra Fine" },
      { label: "Diameter", value: "6 in / 152 mm" }
    ],
    applicationSteps: [
      "Dampen disc with clean water mist.",
      "Sand with soft interface pad under light pressure."
    ],
    image: "/images/products/3m/3m-trizact-5000.jpg",
    detailRoute: "#product-catalogue",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
  },
  {
    id: "3m-trizact-3000",
    slug: "3m-trizact-3000",
    sku: "PN 02085",
    name: "3M™ Trizact™ Performance Abrasives P3000",
    brand: "3M™ Automotive",
    category: "ABRASIVES",
    shortDescription: "Structured micro-replication abrasive technology delivering uniform finish and faster polishing preparation.",
    fullDescription: "3M™ Trizact™ abrasives utilize proprietary micro-replication technology where tiny pyramids containing multiple layers of abrasive mineral are evenly distributed on a flexible backing.",
    specs: [
      { label: "Part Number", value: "PN 02085" },
      { label: "Grit Level", value: "P3000 Foam Discs" },
      { label: "Diameter", value: "6 in / 152 mm" }
    ],
    applicationSteps: [
      "Dampen abrasive disc with clean water spray.",
      "Sand in uniform overlapping passes."
    ],
    image: "/images/products/3m/3m-trizact-3000.jpg",
    detailRoute: "#product-catalogue",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
  },
  {
    id: "3m-quick-wax-spray",
    slug: "3m-quick-wax-spray",
    sku: "PN 39034",
    name: "3M™ Quick Wax Spray Sealant",
    brand: "3M™ Automotive",
    category: "CLEANING",
    shortDescription: "Carnauba wax mist formula engineered for a deep, high-gloss shine and hydrophobic protection in minutes.",
    fullDescription: "3M™ Quick Wax contains premium Carnauba wax formula for mist-on, wipe-off surface enhancement between regular wax applications.",
    specs: [
      { label: "Part Number", value: "PN 39034" },
      { label: "Wax Base", value: "Liquid Carnauba Matrix" },
      { label: "Volume", value: "16 fl oz / 473 ml" }
    ],
    applicationSteps: [
      "Mist spray lightly onto clean panel.",
      "Wipe off immediately with microfiber towel."
    ],
    image: "/images/products/3m/3m-quick-wax-spray.jpg",
    detailRoute: "#product-catalogue",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
  },
  {
    id: "3m-car-wash-soap",
    slug: "3m-car-wash-soap",
    sku: "PN 39000",
    name: "3M™ Professional Car Wash Soap Concentrate",
    brand: "3M™ Automotive",
    category: "CLEANING",
    shortDescription: "High-foaming pH-neutral car wash soap that safely removes dirt and road grime without stripping wax or ceramic protection.",
    fullDescription: "Concentrated formula creating dense lubricating suds that lift dirt particles away from paint surfaces to prevent wash swirls.",
    specs: [
      { label: "Part Number", value: "PN 39000" },
      { label: "pH Level", value: "7.0 (pH Neutral)" },
      { label: "Volume", value: "16 fl oz / 473 ml" }
    ],
    applicationSteps: [
      "Mix 1 oz soap per gallon of clean water.",
      "Wash vehicle top-down using microfiber wash mitt."
    ],
    image: "/images/products/3m/3m-car-wash-soap.jpg",
    detailRoute: "#product-catalogue",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
  },
  {
    id: "meguiars-m210",
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
      { label: "Volume", value: "32 oz / 946 ml" }
    ],
    applicationSteps: [
      "Attach foam finishing pad to DA polisher.",
      "Work in 2ft x 2ft section at medium speed."
    ],
    image: "/images/products/3m/meguiars-m210.jpg",
    detailRoute: "#product-catalogue",
    sourceUrl: "https://www.meguiars.com/",
    isVerified: true,
  },
  {
    id: "meguiars-m110",
    slug: "meguiars-m110-ultra-cut-compound",
    sku: "MEG-M11032",
    name: "Meguiar's Mirror Glaze M110 Ultra Cut Compound",
    brand: "Meguiar's Professional",
    category: "POLISHING",
    shortDescription: "Fast-cutting compound designed to eliminate P1200 or finer sanding scratches quickly with minimal dusting.",
    fullDescription: "Meguiar's M110 utilizes Super-Micro Abrasive technology (SMAT) to cut quickly while leaving a clear, high-gloss surface.",
    specs: [
      { label: "Cut Level", value: "12 / 12 (Heavy Cut)" },
      { label: "Volume", value: "32 oz / 946 ml" }
    ],
    applicationSteps: [
      "Apply to microfiber cutting pad.",
      "Buff at moderate speed until scratches clear."
    ],
    image: "/images/products/3m/meguiars-m110.jpg",
    detailRoute: "#product-catalogue",
    sourceUrl: "https://www.meguiars.com/",
    isVerified: true,
  },
  {
    id: "koch-chemie-gsf",
    slug: "koch-chemie-gentle-snow-foam",
    sku: "KC-GSF-1000",
    name: "Koch Chemie Gentle Snow Foam (Gsf)",
    brand: "Koch Chemie Germany",
    category: "CLEANING",
    shortDescription: "High-foaming pH-neutral cleaning shampoo for safe touchless foam pre-wash.",
    fullDescription: "Koch Chemie Gsf is a premium pH-neutral snow foam developed in Germany. It creates a dense, long-clinging foam blanket that encapsulates grit.",
    specs: [
      { label: "pH Level", value: "7.5 (pH Safe)" },
      { label: "Volume", value: "1000 ml" }
    ],
    applicationSteps: [
      "Mix 20ml Gsf per 1L water in foam cannon.",
      "Spray foam evenly and let dwell for 5 minutes."
    ],
    image: "/images/products/3m/koch-chemie-gsf.jpg",
    detailRoute: "#product-catalogue",
    sourceUrl: "https://www.koch-chemie.com/",
    isVerified: true,
  },
  {
    id: "carpro-reset",
    slug: "carpro-reset-car-shampoo",
    sku: "CP-RST-1000",
    name: "CarPro Reset Intensive Car Shampoo",
    brand: "CarPro",
    category: "CLEANING",
    shortDescription: "Intensive maintenance shampoo formulated specifically for ceramic coated vehicles.",
    fullDescription: "CarPro Reset breaks down road film and traffic grime without leaving gloss enhancers or synthetic waxes behind.",
    specs: [
      { label: "Dilution", value: "1:500 Highly Concentrated" },
      { label: "Volume", value: "1000 ml" }
    ],
    applicationSteps: [
      "Dilute 40ml in 20L wash bucket.",
      "Wash vehicle top-down using plush mitt."
    ],
    image: "/images/products/3m/carpro-reset.jpg",
    detailRoute: "#product-catalogue",
    sourceUrl: "https://carpro.global/",
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
      { label: "Hardness", value: "9H Quartz Matrix" }
    ],
    applicationSteps: [
      "Decontaminate paint using clay bar prep.",
      "Apply coating evenly using cross-hatch motion."
    ],
    image: "/images/products/3m/3m-ceramic-coating-kit.jpg",
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
      { label: "Material", value: "TPU Polyurethane" }
    ],
    applicationSteps: [
      "Spray slip solution on panel and film.",
      "Squeegee out solution from center outwards."
    ],
    image: "/images/products/3m/3m-scotchgard-ppf-pro.jpg",
    detailRoute: "/services/ppf-paint-protection",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
  },
  {
    id: "gyeon-wetcoat",
    slug: "gyeon-q2m-wetcoat",
    sku: "GYE-WET-1000",
    name: "Gyeon Q²M WetCoat Spray Sealant",
    brand: "Gyeon Quartz",
    category: "PROTECTION",
    shortDescription: "Instant hydrophobic spray-and-rinse silica sealant for high gloss maintenance.",
    fullDescription: "Gyeon Q²M WetCoat is a spray-on quartz sealant that provides instant hydrophobic water beading on wet vehicles.",
    specs: [
      { label: "Durability", value: "Up to 3 Months" },
      { label: "Volume", value: "1000 ml" }
    ],
    applicationSteps: [
      "Spray over wet panel after washing.",
      "Rinse immediately with high pressure water."
    ],
    image: "/images/products/3m/gyeon-wetcoat.jpg",
    detailRoute: "#product-catalogue",
    sourceUrl: "https://gyeonquartz.com/",
    isVerified: true,
  },
  {
    id: "rupes-lhr21",
    slug: "rupes-lhr21-markiii",
    sku: "RUP-LHR213",
    name: "Rupes BigFoot LHR21 MarkIII Random Orbital Polisher",
    brand: "Rupes Italy",
    category: "TOOLS",
    shortDescription: "21mm large-orbit random orbital polisher designed for maximum defect removal efficiency on large panels.",
    fullDescription: "Rupes BigFoot LHR21 MarkIII combines a 21mm orbit with ergonomic progressive trigger control for smooth, vibration-free correction.",
    specs: [
      { label: "Orbit Diameter", value: "21 mm" },
      { label: "Backing Pad", value: "6 in / 150 mm" }
    ],
    applicationSteps: [
      "Attach foam pad to backing plate.",
      "Spread polish at speed 1, buff at speed 4-5."
    ],
    image: "/images/products/3m/rupes-lhr21.jpg",
    detailRoute: "#product-catalogue",
    sourceUrl: "https://www.rupes.com/",
    isVerified: true,
  },
  {
    id: "3m-compounding-pad",
    slug: "3m-wool-compounding-pad",
    sku: "PN 05701",
    name: "3M™ Perfect-It™ Double-Sided Wool Compounding Pad 9in",
    brand: "3M™ Automotive",
    category: "TOOLS",
    shortDescription: "100% 4-ply 3M wool pad engineered for fast scratch removal with rotary polishing equipment.",
    fullDescription: "Designed for heavy cut paint correction, 3M Perfect-It Wool Compounding Pads level sanding scratches efficiently.",
    specs: [
      { label: "Part Number", value: "PN 05701" },
      { label: "Material", value: "100% 4-Ply Wool" }
    ],
    applicationSteps: [
      "Attach to 5/8in rotary adapter spindle.",
      "Apply compounding liquid directly to wool fibers."
    ],
    image: "/images/products/3m/3m-compounding-pad.jpg",
    detailRoute: "#product-catalogue",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
  },
  {
    id: "3m-foam-finishing-pad",
    slug: "3m-foam-finishing-pad",
    sku: "PN 05708",
    name: "3M™ Perfect-It™ Ultrafine Foam Finishing Pad 8in",
    brand: "3M™ Automotive",
    category: "TOOLS",
    shortDescription: "Soft blue convoluted foam pad designed to eliminate swirl marks and holograms during ultrafine polishing.",
    fullDescription: "Convoluted foam face holds polishing liquid evenly, preventing dry buffing and heat buildup on clear coat surfaces.",
    specs: [
      { label: "Part Number", value: "PN 05708" },
      { label: "Color", value: "Blue Ultrafine Foam" }
    ],
    applicationSteps: [
      "Attach to Quick Connect adapter.",
      "Polish at 1200 RPM with light pressure."
    ],
    image: "/images/products/3m/3m-foam-finishing-pad.jpg",
    detailRoute: "#product-catalogue",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
  },
  {
    id: "3m-microfiber-cloth",
    slug: "3m-microfiber-detail-cloth",
    sku: "PN 39016",
    name: "3M™ Microfiber Detail Cloth High-Performance Towels",
    brand: "3M™ Automotive",
    category: "ACCESSORIES",
    shortDescription: "Ultra-soft scratch-free microfiber detailing towels engineered to absorb polish, wax, and residue without marring.",
    fullDescription: "Unique microfiber weave lifts dust and oil particles safely, ensuring streak-free inspection clarity.",
    specs: [
      { label: "Part Number", value: "PN 39016" },
      { label: "Size", value: "12 in x 14 in" }
    ],
    applicationSteps: [
      "Fold towel into quarters.",
      "Wipe light residue using clean microfiber face."
    ],
    image: "/images/products/3m/3m-microfiber-cloth.jpg",
    detailRoute: "#product-catalogue",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
  },
  {
    id: "3m-clay-lube-kit",
    slug: "3m-cleaner-clay-kit",
    sku: "PN 38070",
    name: "3M™ Perfect-It™ Professional Cleaner Clay Bar 200g",
    brand: "3M™ Automotive",
    category: "CLEANING",
    shortDescription: "Non-abrasive detailing clay bar designed to safely pull embedded rail dust, overspray, and industrial fallout.",
    fullDescription: "Restores smooth glass-like clarity to vehicle clear coat prior to machine polishing or ceramic coating application.",
    specs: [
      { label: "Part Number", value: "PN 38070" },
      { label: "Weight", value: "200 g" }
    ],
    applicationSteps: [
      "Spray clay lubricant liberally on paint surface.",
      "Glide clay gently back and forth until smooth."
    ],
    image: "/images/products/3m/3m-clay-lube-kit.jpg",
    detailRoute: "#product-catalogue",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
  },
  {
    id: "3m-masking-tape",
    slug: "3m-automotive-masking-tape-233",
    sku: "PN 26338",
    name: "3M™ Automotive Refinish Masking Tape 233+",
    brand: "3M™ Automotive",
    category: "ACCESSORIES",
    shortDescription: "High-performance green masking tape engineered specifically for delicate trim, rubber moldings, and body lines.",
    fullDescription: "Flexible backing conforms to compound curves while resisting moisture, compound bleed, and adhesive transfer.",
    specs: [
      { label: "Part Number", value: "PN 26338" },
      { label: "Width", value: "18 mm x 55 m" }
    ],
    applicationSteps: [
      "Apply tape firmly along trim edges before polishing.",
      "Remove cleanly at 45 degree angle after service."
    ],
    image: "/images/products/3m/3m-masking-tape.jpg",
    detailRoute: "#product-catalogue",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
  }
];
