export interface ProductFAQ {
  q: string;
  a: string;
}

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
  seoTitle?: string;
  seoDescription?: string;
  seoH1?: string;
  faqs?: ProductFAQ[];
  relatedProductIds?: string[];
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
    seoTitle: "3M™ Perfect-It™ EX AC Rubbing Compound PN 36060 | TMR Car Care Tiruppur",
    seoDescription: "3M™ Perfect-It™ EX AC Rubbing Compound (PN 36060) at TMR Car Care Tiruppur. Precision compound for removing P1200 or finer sand scratches while leaving high-gloss finish.",
    seoH1: "3M™ PERFECT-IT™ EX AC RUBBING COMPOUND (PN 36060)",
    relatedProductIds: ["3m-perfect-it-machine-polish", "3m-perfect-it-ultrafine-machine-polish", "3m-perfect-it-foam-compounding-pad"],
    faqs: [
      {
        q: "What is 3M Perfect-It EX AC Rubbing Compound used for?",
        a: "3M Perfect-It EX AC Rubbing Compound (PN 36060) is an advanced paint correction compound formulated to rapidly remove P1200 or finer sand scratches, heavy oxidation, and surface defects."
      },
      {
        q: "What type of compounding pads are recommended for 3M EX AC?",
        a: "For optimal defect removal and minimal sling, we recommend pairing it with a 3M Perfect-It Foam Compounding Pad (PN 05706) or a wool compounding pad on a rotary or dual-action polisher."
      },
      {
        q: "Is 3M Perfect-It EX AC Rubbing Compound safe for all clear coats?",
        a: "Yes, the EX AC formulation is engineered for high performance on modern clear coats, fresh refinish paint systems, and hard OEM finishes without overheating the panel."
      },
      {
        q: "Does 3M EX AC Rubbing Compound contain fillers or silicones?",
        a: "No, it is a true abrasive compound that permanently levels paint defects rather than temporarily filling scratches."
      },
      {
        q: "What step should follow compounding with 3M EX AC?",
        a: "Following heavy compounding, proceed to Step 2 with 3M Perfect-It Machine Polish (PN 06064) to eliminate compound swirl marks and refine depth of gloss."
      },
      {
        q: "How does TMR Car Care use 3M EX AC in Tiruppur?",
        a: "TMR Car Care technicians utilize 3M EX AC Rubbing Compound as the foundational heavy-cut correction stage during multi-step detailing workflows in our Tiruppur studio."
      }
    ],
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
    detailRoute: "/products/3m-trizact-performance-abrasives",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
    seoTitle: "3M™ Trizact™ Performance Abrasives | TMR Car Care Tiruppur",
    seoDescription: "3M™ Trizact™ Performance Abrasives (PN 02085) at TMR Car Care Tiruppur. Structured micro-replication abrasive technology for paint defect leveling.",
    seoH1: "3M™ TRIZACT™ PERFORMANCE ABRASIVES",
    relatedProductIds: ["3m-perfect-it-ex", "3m-perfect-it-foam-compounding-pad", "3m-automotive-performance-masking-tape-233"],
    faqs: [
      {
        q: "What is 3M Trizact structured micro-replication technology?",
        a: "3M Trizact abrasives feature micro-replicated three-dimensional structures containing multiple layers of abrasive mineral that wear away evenly to expose fresh abrasive mineral continuously."
      },
      {
        q: "Should 3M Trizact abrasive discs be used wet or dry?",
        a: "3M Trizact foam discs (P3000/P5000) are designed for wet damp sanding using a clean water mist to lubricate the disc and prevent loading."
      },
      {
        q: "How does 3M Trizact reduce compounding time?",
        a: "Refining P1500 or P2000 sand scratches with Trizact P3000/P5000 creates a uniform satin finish that requires significantly less compounding time and effort to bring to high gloss."
      },
      {
        q: "Is an interface pad required for 3M Trizact discs?",
        a: "Yes, using a soft foam interface pad allows the abrasive disc to conform to curved body panels without digging edges into the clear coat."
      }
    ],
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
    detailRoute: "/products/3m-quick-wax-spray",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
    seoTitle: "3M™ Quick Wax Spray | TMR Car Care Tiruppur",
    seoDescription: "3M™ Quick Wax Spray (PN 39034) at TMR Car Care Tiruppur. Carnauba wax mist formula engineered for deep high-gloss shine and hydrophobic protection.",
    seoH1: "3M™ QUICK WAX SPRAY",
    relatedProductIds: ["3m-synthetic-detail-clay-bar", "3m-perfect-it-ex", "meguiars-m210-ultra-finishing-polish"],
    faqs: [
      {
        q: "What is 3M Quick Wax Spray formulated with?",
        a: "3M Quick Wax Spray contains a premium liquid Carnauba wax matrix engineered to deliver a deep, wet-look shine and immediate hydrophobic water beading."
      },
      {
        q: "Can 3M Quick Wax Spray be applied on wet or dry vehicles?",
        a: "It can be misted directly onto clean dry panels or applied to damp surfaces during drying to enhance gloss and eliminate water spots."
      },
      {
        q: "Is 3M Quick Wax Spray safe for clear coats and exterior plastic trim?",
        a: "Yes, the non-staining formula is completely safe for clear coats, vinyl wraps, glass, and exterior plastic trim without leaving white chalky residue."
      },
      {
        q: "How often should 3M Quick Wax Spray be applied?",
        a: "It can be used after every maintenance wash or as a quick gloss booster between major waxing and ceramic maintenance sessions."
      }
    ],
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
    detailRoute: "/products/meguiars-m210-ultra-finishing-polish",
    sourceUrl: "https://www.meguiars.com/",
    isVerified: true,
    seoTitle: "Meguiar's Mirror Glaze M210 Ultra Finishing Polish | TMR Car Care Tiruppur",
    seoDescription: "Meguiar's Mirror Glaze M210 Ultra Finishing Polish (MEG-M21032) at TMR Car Care Tiruppur. Ultra-fine finishing polish for haze-free mirror gloss.",
    seoH1: "MEGUIAR'S MIRROR GLAZE M210 ULTRA FINISHING POLISH",
    relatedProductIds: ["3m-perfect-it-ultrafine-machine-polish", "3m-perfect-it-machine-polish", "3m-perfect-it-ex"],
    faqs: [
      {
        q: "What makes Meguiar's M210 Ultra Finishing Polish ideal for dark paint?",
        a: "M210 is formulated with SMAT (Super Micro-Abrasive Technology) specifically engineered to eliminate micro-marring and haze on sensitive dark and soft clear coats."
      },
      {
        q: "What polisher and pad combination works best with Meguiar's M210?",
        a: "It delivers exceptional mirror reflection when paired with a soft foam finishing pad on a dual-action (DA) orbital polisher."
      },
      {
        q: "Does Meguiar's M210 wipe off easily without dusting?",
        a: "Yes, M210 features zero-dusting technology and long working cycles, wiping off effortlessly with a plush microfiber towel."
      },
      {
        q: "Is Meguiar's M210 body-shop safe?",
        a: "Yes, M210 is paint-shop safe, silicone-free, and safe for fresh refinish paint environments."
      }
    ],
  },
  {
    id: "3m-perfect-it-machine-polish",
    slug: "3m-perfect-it-machine-polish",
    sku: "PN 06064",
    name: "3M™ Perfect-It™ Machine Polish",
    brand: "3M™ Automotive",
    category: "POLISHING",
    shortDescription: "High-performance Step 2 polishing formulation for removing compound swirl marks and leaving a high-gloss finish.",
    fullDescription: "3M™ Perfect-It™ Machine Polish (PN 06064) is engineered as Step 2 in the 3M paint correction system. It quickly eliminates compound swirl marks left by compounding pads while delivering a deep, clear gloss on all clear coat paints.",
    specs: [
      { label: "Part Number", value: "PN 06064" },
      { label: "Refinement Grade", value: "Step 2 Glaze / Polish" },
      { label: "Application Area", value: "Exterior Clear Coat" },
      { label: "Volume", value: "32 oz / 946 ml" },
      { label: "Origin", value: "3M Automotive Division" },
    ],
    applicationSteps: [
      "Perform compounding step with 3M Perfect-It EX AC Rubbing Compound.",
      "Apply 4-5 drops of Machine Polish onto 3M foam polishing pad.",
      "Polish at 1200-1500 RPM in 2ft x 2ft sections.",
      "Wipe clean with plush microfiber towel to reveal haze-free gloss."
    ],
    image: "/images/products/3m/3m-perfect-it-ex-machine-polish.jpg",
    detailRoute: "/products/3m-perfect-it-machine-polish",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
    seoTitle: "3M Perfect-It Machine Polish PN 06064 | TMR Car Care Tiruppur",
    seoDescription: "High-performance 3M Perfect-It Machine Polish (PN 06064) at TMR Car Care Tiruppur. Step 2 polishing formulation for removing compound swirl marks.",
    seoH1: "3M™ PERFECT-IT™ MACHINE POLISH (PN 06064)",
    relatedProductIds: ["3m-perfect-it-ex", "3m-perfect-it-ultrafine-machine-polish", "3m-perfect-it-foam-compounding-pad"],
    faqs: [
      {
        q: "What is 3M Perfect-It Machine Polish (PN 06064) used for?",
        a: "3M Perfect-It Machine Polish (PN 06064) is Step 2 in the 3M paint refinement process, engineered to remove compound swirl marks left by compounding pads."
      },
      {
        q: "When is Machine Polish used after compounding?",
        a: "It is applied immediately following heavy compounding with 3M EX AC Rubbing Compound to refine the paint surface before final glaze or ceramic protection."
      },
      {
        q: "Which paint defects does 3M Machine Polish address?",
        a: "It eliminates light compounding swirls, minor haze, and moderate buffer trails, leaving a high-gloss reflection."
      },
      {
        q: "What pad should be used with 3M Machine Polish PN 06064?",
        a: "We recommend pairing it with a 3M black foam polishing pad at 1200–1500 RPM for maximum clarity and minimal sling."
      },
      {
        q: "Does TMR Car Care use 3M Machine Polish in studio paint correction?",
        a: "Yes, TMR Car Care technicians integrate 3M Machine Polish into our multi-stage paint refinement workflows in Tiruppur."
      }
    ],
  },
  {
    id: "3m-perfect-it-ultrafine-machine-polish",
    slug: "3m-perfect-it-ultrafine-machine-polish",
    sku: "PN 06068",
    name: "3M™ Perfect-It™ Ultrafine Machine Polish",
    brand: "3M™ Automotive",
    category: "POLISHING",
    shortDescription: "Ultra-fine anti-hologram polish formulated to eliminate micro-marring and holograms on dark paintwork.",
    fullDescription: "3M™ Perfect-It™ Ultrafine Machine Polish (PN 06068) is Step 3 in 3M's paint finishing process. Specifically formulated to remove fine swirl marks and holograms from black and dark-colored vehicles, it leaves a streak-free, mirror-like reflection.",
    specs: [
      { label: "Part Number", value: "PN 06068" },
      { label: "Refinement Grade", value: "Step 3 Ultrafine / Anti-Hologram" },
      { label: "Application Area", value: "Dark Paint Clear Coats" },
      { label: "Volume", value: "32 oz / 946 ml" },
      { label: "Origin", value: "3M Automotive Division" },
    ],
    applicationSteps: [
      "Ensure panel is polished through Step 2 machine polish.",
      "Attach blue 3M Ultrafine foam pad to orbital/rotary polisher.",
      "Apply light pressure in overlapping passes over dark paint panels.",
      "Wipe clean with ultra-soft microfiber cloth."
    ],
    image: "/images/products/3m/3m-perfect-it-ex-ultrafine-polish.jpg",
    detailRoute: "/products/3m-perfect-it-ultrafine-machine-polish",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
    seoTitle: "3M Ultrafine Machine Polish PN 06068 | TMR Car Care Tiruppur",
    seoDescription: "Eliminate micro-marring and holograms with 3M Ultrafine Machine Polish (PN 06068) at TMR Car Care Tiruppur. Perfect finish for dark paintwork.",
    seoH1: "3M™ PERFECT-IT™ ULTRAFINE MACHINE POLISH (PN 06068)",
    relatedProductIds: ["3m-perfect-it-machine-polish", "meguiars-m210-ultra-finishing-polish", "3m-perfect-it-ex"],
    faqs: [
      {
        q: "What is 3M Perfect-It Ultrafine Machine Polish (PN 06068)?",
        a: "3M Ultrafine Machine Polish (PN 06068) is Step 3 in 3M's paint correction system, formulated to eliminate ultra-fine holograms and micro-marring."
      },
      {
        q: "When should 3M Ultrafine Machine Polish be used?",
        a: "It is used as the final machine polishing step on dark or black vehicles to ensure a streak-free, hologram-free mirror reflection under direct sunlight."
      },
      {
        q: "Does 3M Ultrafine target holograms or micro-marring?",
        a: "Yes, it specifically targets fine buffer trails, micro-marring, and holograms that can show up on dark clear coats."
      },
      {
        q: "How does 3M Ultrafine fit into final paint finishing?",
        a: "It serves as the definitive pre-coat polishing step before ceramic coating or sealant application."
      },
      {
        q: "What color foam pad is used with 3M Ultrafine PN 06068?",
        a: "It is designed to be paired with 3M's blue ultrafine foam pad for soft, scratch-free finishing."
      }
    ],
  },
  {
    id: "3m-perfect-it-foam-compounding-pad",
    slug: "3m-perfect-it-foam-compounding-pad",
    sku: "PN 05706",
    name: "3M™ Perfect-It™ Foam Compounding Pad",
    brand: "3M™ Automotive",
    category: "TOOLS",
    shortDescription: "Quick-connect double-sided foam compounding pad engineered for high-cut defect removal and minimal heat build-up.",
    fullDescription: "3M™ Perfect-It™ Foam Compounding Pad (PN 05706 / PN 05737) features a convoluted foam face design that conforms to vehicle contours, absorbs compound efficiently, and minimizes sling and paint surface heat.",
    specs: [
      { label: "Part Number", value: "PN 05706 / PN 05737" },
      { label: "Attachment", value: "Quick Connect / Hookit™" },
      { label: "Diameter", value: "8 in / 203 mm" },
      { label: "Material", value: "Convoluted Waffle Foam" },
      { label: "Origin", value: "3M Automotive Division" },
    ],
    applicationSteps: [
      "Snap quick-connect adapter onto rotary or DA polisher shaft.",
      "Apply 4-5 drops of 3M Rubbing Compound evenly across waffle face.",
      "Buff surface using light-to-medium flat pressure.",
      "Spur pad periodically with pad cleaning brush."
    ],
    image: "/images/products/3m/3m-compounding-pad.jpg",
    detailRoute: "/products/3m-perfect-it-foam-compounding-pad",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
    seoTitle: "3M Perfect-It Foam Compounding Pad PN 05706 | TMR Car Care",
    seoDescription: "Professional 3M Perfect-It Foam Compounding Pad (PN 05706) at TMR Car Care Tiruppur. Quick-connect double-sided foam pad for paint correction.",
    seoH1: "3M™ PERFECT-IT™ FOAM COMPOUNDING PAD",
    relatedProductIds: ["3m-perfect-it-ex", "3m-perfect-it-machine-polish", "3m-automotive-performance-masking-tape-233"],
    faqs: [
      {
        q: "What is the 3M Perfect-It Foam Compounding Pad (PN 05706)?",
        a: "It is a double-sided convoluted waffle-foam pad engineered for heavy cut defect leveling with low heat build-up."
      },
      {
        q: "What attachment system does the 3M Foam Compounding Pad use?",
        a: "It features 3M's Quick Connect attachment system, enabling fast, centered pad changes on rotary polisher shafts."
      },
      {
        q: "What type of paint correction work is this foam pad used for?",
        a: "It is designed for compounding sand scratch refinement, heavy oxidation, and scratch removal when paired with 3M Rubbing Compound."
      },
      {
        q: "How does waffle foam design benefit the compounding process?",
        a: "The waffle face holds liquid compound effectively, reduces sling, holds less heat, and conforms to body curves without dragging."
      },
      {
        q: "How should 3M Foam Compounding Pads be cleaned?",
        a: "Spur the waffle face periodically with a pad cleaning brush during use and hand wash with mild warm water and soap after detailing."
      }
    ],
  },
  {
    id: "3m-automotive-performance-masking-tape-233",
    slug: "3m-automotive-performance-masking-tape-233",
    sku: "PN 26338",
    name: "3M™ Automotive Performance Masking Tape 233+",
    brand: "3M™ Automotive",
    category: "TOOLS",
    shortDescription: "High-tack green detailing masking tape designed for precision panel masking and trim protection during polishing.",
    fullDescription: "3M™ Automotive Performance Masking Tape 233+ (PN 26338) is the industry benchmark green masking tape. Formulated with proprietary rubber adhesive, it adheres reliably to rubber moldings, plastic trim, and body panels without leaving adhesive residue.",
    specs: [
      { label: "Part Number", value: "PN 26338" },
      { label: "Width", value: "18 mm / 24 mm / 36 mm" },
      { label: "Color", value: "High-Visibility Green" },
      { label: "Adhesive Type", value: "Residue-Free Rubber" },
      { label: "Origin", value: "3M Automotive Division" },
    ],
    applicationSteps: [
      "Clean rubber trim and body panel gaps before application.",
      "Apply tape firmly along paint edges, badges, and plastic moldings.",
      "Burnish tape edges with finger pressure to seal against polish intrusion.",
      "Peel back smoothly at a 45-degree angle after detailing."
    ],
    image: "/images/products/3m/3m-masking-tape.jpg",
    detailRoute: "/products/3m-automotive-performance-masking-tape-233",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
    seoTitle: "3M Automotive Performance Masking Tape 233+ | TMR Car Care",
    seoDescription: "3M Performance Masking Tape 233+ (PN 26338) at TMR Car Care Tiruppur. Automotive masking tape for trim and emblem protection during paint preparation.",
    seoH1: "3M™ AUTOMOTIVE PERFORMANCE MASKING TAPE 233+",
    relatedProductIds: ["3m-perfect-it-foam-compounding-pad", "3m-perfect-it-ex", "3m-synthetic-detail-clay-bar"],
    faqs: [
      {
        q: "What is 3M Automotive Performance Masking Tape 233+ (PN 26338)?",
        a: "3M 233+ is a high-visibility green automotive masking tape engineered specifically for panel masking and rubber trim protection."
      },
      {
        q: "Why is green 3M 233+ tape preferred for detailing over standard painter's tape?",
        a: "It features flexible crepe paper backing and rubber adhesive that withstands polisher friction, compound moisture, and temperatures up to 250°F without bleeding or leaving residue."
      },
      {
        q: "Which trim and emblem areas are typically protected with 3M 233+ tape?",
        a: "Technicians apply it over rubber window weatherstripping, plastic moldings, badges, body seams, and unpainted trim."
      },
      {
        q: "Does 3M 233+ tape leave adhesive residue upon removal?",
        a: "No, 3M 233+ removes cleanly in one piece without tearing or transferring sticky adhesive to delicate vehicle surfaces."
      },
      {
        q: "How is masking tape used during paint preparation?",
        a: "It insulates vulnerable edges and trim so machine polishers can operate right along paint boundaries safely."
      }
    ],
  },
  {
    id: "3m-synthetic-detail-clay-bar",
    slug: "3m-synthetic-detail-clay-bar",
    sku: "PN 38070",
    name: "3M™ Synthetic Detail Clay Bar",
    brand: "3M™ Automotive",
    category: "CLEANING",
    shortDescription: "Professional paint decontamination clay engineered to safely remove paint overspray, industrial fallout, and embedded contaminants.",
    fullDescription: "3M™ Synthetic Detail Clay Bar (PN 38070) safely lifts stubborn surface contaminants — such as tree sap, rail dust, tar, and paint overspray — that washing alone cannot remove, leaving vehicle clear coat glassy smooth.",
    specs: [
      { label: "Part Number", value: "PN 38070" },
      { label: "Grade", value: "Medium / Fine Clay Matrix" },
      { label: "Weight", value: "200 g" },
      { label: "Application Area", value: "Clear Coat, Glass, Metal" },
      { label: "Origin", value: "3M Automotive Division" },
    ],
    applicationSteps: [
      "Wash vehicle thoroughly to remove loose surface dirt.",
      "Spray clay lubricant or soapy water solution generously over panel.",
      "Glide clay bar gently across surface in back-and-forth motions until smooth.",
      "Knead clay to clean surface periodically; wipe dry with microfiber towel."
    ],
    image: "/images/products/3m/3m-clay-lube-kit.jpg",
    detailRoute: "/products/3m-synthetic-detail-clay-bar",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
    seoTitle: "3M Synthetic Detail Clay Bar PN 38070 | TMR Car Care Tiruppur",
    seoDescription: "Remove paint overspray and industrial fallout with 3M Synthetic Detail Clay Bar (PN 38070) at TMR Car Care Tiruppur. Essential surface prep.",
    seoH1: "3M™ SYNTHETIC DETAIL CLAY BAR (PN 38070)",
    relatedProductIds: ["3m-quick-wax-spray", "3m-perfect-it-ex", "3m-automotive-performance-masking-tape-233"],
    faqs: [
      {
        q: "What is 3M Synthetic Detail Clay Bar (PN 38070)?",
        a: "It is a professional-grade paint decontamination clay formulated to safely pull embedded environmental contaminants out of automotive clear coats."
      },
      {
        q: "What contaminants can a 3M clay bar remove?",
        a: "It removes industrial fallout, brake dust, tree sap, rail dust, road tar, and paint overspray that normal washing cannot dissolve."
      },
      {
        q: "When should paint clay decontamination be performed?",
        a: "Clay bar treatment should be performed prior to machine compounding, polishing, or applying ceramic coatings."
      },
      {
        q: "What lubricant should be used with 3M Synthetic Detail Clay Bar?",
        a: "Always use a dedicated clay lubricant or slick soapy water solution to allow the clay bar to glide smoothly without marring the paint."
      },
      {
        q: "What step should follow clay decontamination?",
        a: "After claying, wipe the panel clean and proceed to paint inspection, machine polishing, or protective wax/coating application."
      }
    ],
  },
  {
    id: "3m-ceramic-coating-kit",
    slug: "3m-ceramic-coating-kit",
    sku: "3M-CC-800",
    name: "3M™ Ceramic Coating Paint Protection Kit",
    brand: "3M™ Automotive",
    category: "PROTECTION",
    shortDescription: "Professional-grade ceramic coating formula creating a durable hydrophobic clear barrier.",
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
    image: "/images/products/3m/3m-scotchgard-ppf-pro.jpg",
    detailRoute: "/services/ppf-paint-protection",
    sourceUrl: "https://www.3m.com/",
    isVerified: true,
  }
];
