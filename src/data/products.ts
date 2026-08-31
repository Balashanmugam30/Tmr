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
    "id": "3m-perfect-it-ex-rubbing-compound",
    "slug": "3m-perfect-it-ex-ac-rubbing-compound",
    "sku": "PN 36060",
    "name": "3M\u2122 Perfect-It\u2122 EX AC Rubbing Compound",
    "brand": "3M\u2122 Automotive",
    "category": "POLISHING",
    "shortDescription": "High-performance paint correction formula for removing P1200 or finer sand scratches while leaving a high-gloss finish.",
    "fullDescription": "3M\u2122 Perfect-It\u2122 EX AC Rubbing Compound is engineered to perform on all automotive clear coats. The liquid formula clings to compounding pads, reducing splatter, sling, and cleanup time during multi-stage paint correction.",
    "specs": [
      {
        "label": "Part Number",
        "value": "PN 36060"
      },
      {
        "label": "Refinement Grade",
        "value": "P1200 or Finer"
      },
      {
        "label": "Application Area",
        "value": "Exterior Clear Coat"
      },
      {
        "label": "Volume",
        "value": "32 oz / 946 ml"
      },
      {
        "label": "Origin",
        "value": "3M Automotive Division"
      }
    ],
    "applicationSteps": [
      "Decontaminate vehicle paint using clay bar prep.",
      "Apply 4-5 drops onto wool or foam compounding pad.",
      "Polishing at 1200-1800 RPM in 2ft x 2ft sections.",
      "Wipe clean with plush microfiber towel."
    ],
    "image": "/images/products/3m/3m-perfect-it-ex-rubbing-compound.jpg",
    "detailRoute": "/products/3m-perfect-it-ex-ac-rubbing-compound",
    "sourceUrl": "https://www.3m.com/",
    "isVerified": true,
    "seoTitle": "3M\u2122 Perfect-It\u2122 EX AC Rubbing Compound PN 36060 | TMR Car Care Tiruppur",
    "seoDescription": "3M\u2122 Perfect-It\u2122 EX AC Rubbing Compound (PN 36060) at TMR Car Care Tiruppur. Precision compound for removing P1200 or finer sand scratches while leaving high-gloss finish.",
    "seoH1": "3M\u2122 PERFECT-IT\u2122 EX AC RUBBING COMPOUND (PN 36060)",
    "relatedProductIds": [
      "3m-perfect-it-ex-machine-polish",
      "3m-perfect-it-ex-ultrafine-polish",
      "3m-compounding-pad"
    ],
    "faqs": [
      {
        "q": "What scratch grade does 3M Perfect-It EX Rubbing Compound remove?",
        "a": "It efficiently removes P1200 or finer sand scratches, heavy oxidation, water spots, and swirl marks on modern clear coats."
      },
      {
        "q": "Does 3M Perfect-It EX compound sling during high speed rotary use?",
        "a": "No. The EX formula is specifically engineered to hold to the compounding pad and stay wet longer, minimizing sling and dusting."
      },
      {
        "q": "What pad should be paired with PN 36060?",
        "a": "Use with 3M Perfect-It Foam Compounding Pad (PN 05706) or 3M Quick Connect Wool Compounding Pad."
      },
      {
        "q": "Is this product body shop safe?",
        "a": "Yes, 3M Perfect-It EX AC Rubbing Compound contains no silicone or waxes, making it 100% paint shop and clear coat safe."
      }
    ]
  },
  {
    "id": "3m-perfect-it-ex-machine-polish",
    "slug": "3m-perfect-it-ex-machine-polish",
    "sku": "PN 06064",
    "name": "3M\u2122 Perfect-It\u2122 EX Machine Polish",
    "brand": "3M\u2122 Automotive",
    "category": "POLISHING",
    "shortDescription": "Step 2 machine polish designed to quickly refine compounding swirl marks and deliver a flawless reflection.",
    "fullDescription": "3M\u2122 Perfect-It\u2122 EX Machine Polish quickly and effectively removes compounding swirls and paint imperfections. It stays wet longer, requiring less material and zero dusting during polishing passes.",
    "specs": [
      {
        "label": "Part Number",
        "value": "PN 06064"
      },
      {
        "label": "Stage",
        "value": "Step 2 Intermediate Polish"
      },
      {
        "label": "Application Area",
        "value": "Automotive Clear Coat"
      },
      {
        "label": "Volume",
        "value": "32 oz / 946 ml"
      },
      {
        "label": "Origin",
        "value": "3M Automotive Division"
      }
    ],
    "applicationSteps": [
      "Complete Step 1 compounding pass.",
      "Apply 3-4 drops to a black foam polishing pad.",
      "Work at 1200-1500 RPM with light to medium pressure.",
      "Inspect clarity under high-CRI inspection LED lighting."
    ],
    "image": "/images/products/3m/3m-perfect-it-ex-machine-polish.jpg",
    "detailRoute": "/products/3m-perfect-it-ex-machine-polish",
    "sourceUrl": "https://www.3m.com/",
    "isVerified": true,
    "seoTitle": "3M\u2122 Perfect-It\u2122 EX Machine Polish PN 06064 | TMR Car Care Tiruppur",
    "seoDescription": "3M\u2122 Perfect-It\u2122 EX Machine Polish (PN 06064) at TMR Car Care. Removes compound swirls and produces deep gloss on automotive clear coats.",
    "seoH1": "3M\u2122 PERFECT-IT\u2122 EX MACHINE POLISH (PN 06064)",
    "relatedProductIds": [
      "3m-perfect-it-ex-rubbing-compound",
      "3m-perfect-it-ex-ultrafine-polish",
      "3m-polishing-pad-05707"
    ],
    "faqs": [
      {
        "q": "What is the primary role of 3M Perfect-It EX Machine Polish?",
        "a": "It removes compounding swirls and micro-scratches left by Step 1 rubbing compounds, preparing the surface for final ultrafine polishing."
      },
      {
        "q": "Does it contain silicone or fillers?",
        "a": "No, it contains no silicone or artificial glazes. The gloss achieved is genuine clear coat leveling."
      },
      {
        "q": "Which polishing pad is recommended?",
        "a": "Use with 3M Perfect-It Foam Polishing Pad PN 05707 (black waffle pad)."
      },
      {
        "q": "Can it be used on dark paint finishes?",
        "a": "Yes, it works excellently on all colors including black and dark metallics."
      }
    ]
  },
  {
    "id": "3m-perfect-it-ex-ultrafine-polish",
    "slug": "3m-perfect-it-ex-ultrafine-machine-polish",
    "sku": "PN 06068",
    "name": "3M\u2122 Perfect-It\u2122 EX Ultrafine Machine Polish",
    "brand": "3M\u2122 Automotive",
    "category": "POLISHING",
    "shortDescription": "Step 3 ultrafine finishing polish engineered to permanently eliminate holograms and buffer trails on dark clear coats.",
    "fullDescription": "3M\u2122 Perfect-It\u2122 EX Ultrafine Machine Polish is the final step in the 3M 3-Step Paint Finishing System. It eliminates circular holograms, wheel marks, and buffer trails on difficult dark automotive paints.",
    "specs": [
      {
        "label": "Part Number",
        "value": "PN 06068"
      },
      {
        "label": "Stage",
        "value": "Step 3 Final Polish"
      },
      {
        "label": "Hologram Removal",
        "value": "100% Guaranteed"
      },
      {
        "label": "Volume",
        "value": "32 oz / 946 ml"
      },
      {
        "label": "Origin",
        "value": "3M Automotive Division"
      }
    ],
    "applicationSteps": [
      "Wipe panel after Step 2 machine polishing.",
      "Apply drops to 3M Ultrafine Foam Polishing Pad (blue).",
      "Operate buffer at 1000-1400 RPM with minimal downward pressure.",
      "Wipe clean with a specialized 3M microfiber detailing cloth."
    ],
    "image": "/images/products/3m/3m-perfect-it-ex-ultrafine-polish.jpg",
    "detailRoute": "/products/3m-perfect-it-ex-ultrafine-machine-polish",
    "sourceUrl": "https://www.3m.com/",
    "isVerified": true,
    "seoTitle": "3M\u2122 Perfect-It\u2122 EX Ultrafine Machine Polish PN 06068 | TMR Car Care Tiruppur",
    "seoDescription": "Eliminate holograms and buffer trails with 3M\u2122 Perfect-It\u2122 EX Ultrafine Machine Polish PN 06068 at TMR Car Care Tiruppur.",
    "seoH1": "3M\u2122 PERFECT-IT\u2122 EX ULTRAFINE MACHINE POLISH (PN 06068)",
    "relatedProductIds": [
      "3m-perfect-it-ex-machine-polish",
      "3m-ultrafine-polishing-pad-05708",
      "3m-ceramic-coating-kit"
    ],
    "faqs": [
      {
        "q": "Will 3M Ultrafine Machine Polish eliminate holograms permanently?",
        "a": "Yes. It uses microscopic precision abrasives to mechanically level micro-imperfections rather than masking them with oil fillers."
      },
      {
        "q": "What pad color should be used?",
        "a": "Use the blue 3M Perfect-It Ultrafine Foam Polishing Pad (PN 05708)."
      },
      {
        "q": "Is this step necessary for light colored cars?",
        "a": "While essential for black and dark vehicles, it provides noticeable optical clarity and gloss enhancement on silver, white, and pearl finishes."
      },
      {
        "q": "How does it perform in humid weather conditions?",
        "a": "The EX chemical formula contains advanced lubricants that resist binding or stickiness even in hot and humid workshop climates."
      }
    ]
  },
  {
    "id": "3m-perfect-it-1-step-finishing-material",
    "slug": "3m-perfect-it-1-step-finishing-material",
    "sku": "PN 33039",
    "name": "3M\u2122 Perfect-It\u2122 1-Step Finishing Material",
    "brand": "3M\u2122 Automotive",
    "category": "POLISHING",
    "shortDescription": "All-in-one compound and finishing material engineered to cut like a compound and finish like a polish when used with Trizact 8000.",
    "fullDescription": "3M\u2122 Perfect-It\u2122 1-Step Finishing Material cuts sanding scratches and refines to a high gloss in a single machine pass following Trizact 8000 abrasive refinement.",
    "specs": [
      {
        "label": "Part Number",
        "value": "PN 33039"
      },
      {
        "label": "System",
        "value": "3M 1-Step Finishing System"
      },
      {
        "label": "Volume",
        "value": "32 oz / 946 ml"
      },
      {
        "label": "Efficiency",
        "value": "Eliminates Traditional Step 2 & 3"
      },
      {
        "label": "Origin",
        "value": "3M Automotive Division"
      }
    ],
    "applicationSteps": [
      "Refine paint with 3M Trizact 3000 and 8000 foam discs.",
      "Apply 3M 1-Step Finishing Material to 3M purple foam finishing pad.",
      "Polish panel at 1200-1600 RPM until clear.",
      "Wipe clean with a microfiber cloth."
    ],
    "image": "/images/products/3m/3m-perfect-it-1-step-finishing-material.jpg",
    "detailRoute": "/products/3m-perfect-it-1-step-finishing-material",
    "sourceUrl": "https://www.3m.com/",
    "isVerified": true,
    "seoTitle": "3M\u2122 Perfect-It\u2122 1-Step Finishing Material PN 33039 | TMR Car Care Tiruppur",
    "seoDescription": "3M\u2122 Perfect-It\u2122 1-Step Finishing Material (PN 33039) at TMR Car Care. One-step cutting and gloss finishing formula.",
    "seoH1": "3M\u2122 PERFECT-IT\u2122 1-STEP FINISHING MATERIAL (PN 33039)",
    "relatedProductIds": [
      "3m-trizact-abrasives",
      "3m-trizact-5000",
      "3m-polishing-pad-05707"
    ],
    "faqs": [
      {
        "q": "How does 3M 1-Step Finishing Material work?",
        "a": "When combined with 3M Trizact 8000 abrasive sanding, it cuts microscopic scratch valleys and brings clear coat directly to showroom gloss in one pass."
      },
      {
        "q": "Can it replace multi-stage compounding?",
        "a": "Yes, on factory clear coats properly refined with high-grit micro-abrasives, it halves shop cycle times."
      },
      {
        "q": "Is it safe on soft clear coats?",
        "a": "Yes, its diminishing micro-abrasives prevent burn-through and edge softening."
      },
      {
        "q": "Does it produce dust?",
        "a": "No, it features a wet-clinging formulation that eliminates airborne compounding dust."
      }
    ]
  },
  {
    "id": "3m-compounding-pad",
    "slug": "3m-perfect-it-foam-compounding-pad",
    "sku": "PN 05706",
    "name": "3M\u2122 Perfect-It\u2122 Foam Compounding Pad",
    "brand": "3M\u2122 Automotive",
    "category": "TOOLS",
    "shortDescription": "White waffle-face foam compounding pad engineered for aggressive defect removal and cooler running temperature.",
    "fullDescription": "3M\u2122 Perfect-It\u2122 Foam Compounding Pad (PN 05706) features a convolute waffle face that holds liquid compound efficiently, prevents pad chatter, and reduces surface friction heat on clear coats.",
    "specs": [
      {
        "label": "Part Number",
        "value": "PN 05706"
      },
      {
        "label": "Diameter",
        "value": "8 Inch / 203 mm"
      },
      {
        "label": "Attachment",
        "value": "Hookit\u2122 Quick Connect"
      },
      {
        "label": "Surface Face",
        "value": "Convoluted Waffle Foam"
      },
      {
        "label": "Origin",
        "value": "3M USA"
      }
    ],
    "applicationSteps": [
      "Center pad onto 3M Quick Connect or backing plate.",
      "Dispense 3M Rubbing Compound evenly into waffle pockets.",
      "Maintain flat pad contact across vehicle panel.",
      "Clean pad face with spur or compressed air between panels."
    ],
    "image": "/images/products/3m/3m-compounding-pad.jpg",
    "detailRoute": "/products/3m-perfect-it-foam-compounding-pad",
    "sourceUrl": "https://www.3m.com/",
    "isVerified": true,
    "seoTitle": "3M\u2122 Perfect-It\u2122 Foam Compounding Pad PN 05706 | TMR Car Care Tiruppur",
    "seoDescription": "3M\u2122 Perfect-It\u2122 Foam Compounding Pad (PN 05706) at TMR Car Care Tiruppur. Premium 8-inch waffle foam compounding pad.",
    "seoH1": "3M\u2122 PERFECT-IT\u2122 FOAM COMPOUNDING PAD (PN 05706)",
    "relatedProductIds": [
      "3m-perfect-it-ex-rubbing-compound",
      "3m-polishing-pad-05707",
      "3m-ultrafine-polishing-pad-05708"
    ],
    "faqs": [
      {
        "q": "Why is the waffle face design advantageous?",
        "a": "The convoluted foam design allows air circulation to cool the paint surface and pockets the compound to prevent sling."
      },
      {
        "q": "How do you clean the 3M 05706 pad?",
        "a": "Rinse under warm running water with mild detergent or use a pad washer, then spin dry on rotary polisher."
      },
      {
        "q": "What machines is this pad compatible with?",
        "a": "Standard rotary polishers with 3M Hookit or Quick Connect backing plates."
      },
      {
        "q": "How many vehicles can one pad polish?",
        "a": "With proper cleaning and care, each pad typically lasts 15 to 25 full vehicle compounding stages."
      }
    ]
  },
  {
    "id": "3m-polishing-pad-05707",
    "slug": "3m-perfect-it-foam-polishing-pad-05707",
    "sku": "PN 05707",
    "name": "3M\u2122 Perfect-It\u2122 Foam Polishing Pad",
    "brand": "3M\u2122 Automotive",
    "category": "TOOLS",
    "shortDescription": "Black convoluted waffle foam polishing pad engineered for refining compound scratches to a deep gloss.",
    "fullDescription": "3M\u2122 Perfect-It\u2122 Foam Polishing Pad (PN 05707) delivers smooth handling, reduced heat build-up, and uniform compound distribution during Step 2 polishing stages.",
    "specs": [
      {
        "label": "Part Number",
        "value": "PN 05707"
      },
      {
        "label": "Diameter",
        "value": "8 Inch / 203 mm"
      },
      {
        "label": "Attachment",
        "value": "Hookit\u2122 Quick Connect"
      },
      {
        "label": "Color / Density",
        "value": "Black Medium-Soft Foam"
      },
      {
        "label": "Origin",
        "value": "3M USA"
      }
    ],
    "applicationSteps": [
      "Attach securely to rotary backing plate.",
      "Apply 3-4 drops of 3M Machine Polish.",
      "Work with light pressure across panel at 1200-1500 RPM.",
      "Inspect clear coat for swirl-free gloss."
    ],
    "image": "/images/products/3m/3m-polishing-pad-05707.jpg",
    "detailRoute": "/products/3m-perfect-it-foam-polishing-pad-05707",
    "sourceUrl": "https://www.3m.com/",
    "isVerified": true,
    "seoTitle": "3M\u2122 Perfect-It\u2122 Foam Polishing Pad PN 05707 | TMR Car Care Tiruppur",
    "seoDescription": "3M\u2122 Perfect-It\u2122 Black Foam Polishing Pad (PN 05707) at TMR Car Care. Step 2 machine polishing pad for flawless finish.",
    "seoH1": "3M\u2122 PERFECT-IT\u2122 FOAM POLISHING PAD (PN 05707)",
    "relatedProductIds": [
      "3m-perfect-it-ex-machine-polish",
      "3m-compounding-pad",
      "3m-ultrafine-polishing-pad-05708"
    ],
    "faqs": [
      {
        "q": "What compound pairs with the PN 05707 black pad?",
        "a": "3M Perfect-It Machine Polish (PN 06064) or 1-Step Finishing Material."
      },
      {
        "q": "Can this pad be used on dual-action polishers?",
        "a": "Yes, compatible with dual-action and rotary machines using 3M Hookit backing plates."
      },
      {
        "q": "Does the black foam mar soft Japanese clear coats?",
        "a": "No, the cell structure is formulated specifically to avoid micro-marring on delicate clear coats."
      },
      {
        "q": "How often should the pad face be cleaned?",
        "a": "Brush or blow out after every working section for maximum polishing efficiency."
      }
    ]
  },
  {
    "id": "3m-ultrafine-polishing-pad-05708",
    "slug": "3m-perfect-it-ultrafine-foam-polishing-pad-05708",
    "sku": "PN 05708",
    "name": "3M\u2122 Perfect-It\u2122 Ultrafine Foam Polishing Pad",
    "brand": "3M\u2122 Automotive",
    "category": "TOOLS",
    "shortDescription": "Blue ultra-soft waffle foam pad specifically engineered to permanently eliminate holograms on dark paintwork.",
    "fullDescription": "3M\u2122 Perfect-It\u2122 Ultrafine Foam Polishing Pad (PN 05708) provides the softest cellular foam matrix for final jewel polishing and complete elimination of rotary buffer swirls.",
    "specs": [
      {
        "label": "Part Number",
        "value": "PN 05708"
      },
      {
        "label": "Diameter",
        "value": "8 Inch / 203 mm"
      },
      {
        "label": "Attachment",
        "value": "Hookit\u2122 Quick Connect"
      },
      {
        "label": "Color / Density",
        "value": "Blue Ultra-Soft Finishing Foam"
      },
      {
        "label": "Origin",
        "value": "3M USA"
      }
    ],
    "applicationSteps": [
      "Mount blue pad onto backing plate.",
      "Apply 3M Ultrafine Machine Polish (PN 06068).",
      "Glide over surface with machine weight only.",
      "Wipe with clean ultra-plush microfiber cloth."
    ],
    "image": "/images/products/3m/3m-ultrafine-polishing-pad-05708.jpg",
    "detailRoute": "/products/3m-perfect-it-ultrafine-foam-polishing-pad-05708",
    "sourceUrl": "https://www.3m.com/",
    "isVerified": true,
    "seoTitle": "3M\u2122 Perfect-It\u2122 Ultrafine Foam Polishing Pad PN 05708 | TMR Car Care",
    "seoDescription": "3M\u2122 Perfect-It\u2122 Blue Ultrafine Foam Polishing Pad (PN 05708) at TMR Car Care Tiruppur. The ultimate hologram removal pad.",
    "seoH1": "3M\u2122 PERFECT-IT\u2122 ULTRAFINE FOAM POLISHING PAD (PN 05708)",
    "relatedProductIds": [
      "3m-perfect-it-ex-ultrafine-polish",
      "3m-polishing-pad-05707",
      "3m-ceramic-coating-kit"
    ],
    "faqs": [
      {
        "q": "What is the purpose of the blue 3M pad?",
        "a": "It is engineered specifically for final step hologram and buffer trail elimination on black and dark metallic paints."
      },
      {
        "q": "Why is the blue foam softer than the black pad?",
        "a": "The softer density cushions abrasive contact, allowing microscopic finishing particles to burnish the clear coat without friction marks."
      },
      {
        "q": "Can I use wax on this pad?",
        "a": "While designed for 3M Ultrafine Polish, it can also be used for machine application of synthetic sealant or paste wax."
      },
      {
        "q": "Is the pad washable?",
        "a": "Yes, washable with warm water and mild liquid soap."
      }
    ]
  },
  {
    "id": "3m-trizact-1500",
    "slug": "3m-trizact-hookit-foam-disc-p1500",
    "sku": "PN 02088",
    "name": "3M\u2122 Trizact\u2122 Hookit\u2122 Foam Disc P1500",
    "brand": "3M\u2122 Automotive",
    "category": "ABRASIVES",
    "shortDescription": "Micro-replicated structured abrasive foam disc for leveling clear coat texture and removing deep defects.",
    "fullDescription": "3M\u2122 Trizact\u2122 Hookit\u2122 Foam Disc P1500 utilizes pyramid-structured abrasive mineral layers that wear evenly, providing consistent defect leveling and uniform scratch refinement.",
    "specs": [
      {
        "label": "Part Number",
        "value": "PN 02088"
      },
      {
        "label": "Grit Grade",
        "value": "P1500"
      },
      {
        "label": "Diameter",
        "value": "6 Inch / 152 mm"
      },
      {
        "label": "Backing",
        "value": "Soft Foam Cushion Hookit\u2122"
      },
      {
        "label": "Origin",
        "value": "3M USA"
      }
    ],
    "applicationSteps": [
      "Mist panel and disc with clean water.",
      "Damp-sand panel using random orbital sander at medium speed.",
      "Wipe slurry with squeegee and inspect surface uniformity.",
      "Follow with Trizact 3000 for scratch refinement."
    ],
    "image": "/images/products/3m/3m-trizact-1500.jpg",
    "detailRoute": "/products/3m-trizact-hookit-foam-disc-p1500",
    "sourceUrl": "https://www.3m.com/",
    "isVerified": true,
    "seoTitle": "3M\u2122 Trizact\u2122 Hookit\u2122 Foam Disc P1500 PN 02088 | TMR Car Care Tiruppur",
    "seoDescription": "3M\u2122 Trizact\u2122 Hookit\u2122 Foam Disc P1500 (PN 02088) at TMR Car Care. Precision clear coat texture leveling abrasive disc.",
    "seoH1": "3M\u2122 TRIZACT\u2122 HOOKIT\u2122 FOAM DISC P1500 (PN 02088)",
    "relatedProductIds": [
      "3m-trizact-abrasives",
      "3m-trizact-5000",
      "3m-perfect-it-ex-rubbing-compound"
    ],
    "faqs": [
      {
        "q": "What is 3M Trizact technology?",
        "a": "Trizact features micro-replicated three-dimensional mineral pyramids that continuously expose fresh sharp abrasive as they wear, ensuring uniform cut throughout disc life."
      },
      {
        "q": "Should Trizact 1500 be used wet or dry?",
        "a": "Always use with a light water mist (damp sanding) to prevent loading and maintain cool panel temperature."
      },
      {
        "q": "Does Trizact 1500 level orange peel?",
        "a": "Yes, it is designed for controlled clear coat leveling and dirt nib removal."
      },
      {
        "q": "What sander throw is recommended?",
        "a": "3mm or 5mm random orbital pneumatic/electric sander."
      }
    ]
  },
  {
    "id": "3m-trizact-abrasives",
    "slug": "3m-trizact-hookit-foam-disc-p3000",
    "sku": "PN 02085",
    "name": "3M\u2122 Trizact\u2122 Hookit\u2122 Foam Disc P3000",
    "brand": "3M\u2122 Automotive",
    "category": "ABRASIVES",
    "shortDescription": "Industry-standard P3000 micro-abrasive foam disc for refining sand scratches and reducing compounding buff time by up to 70%.",
    "fullDescription": "3M\u2122 Trizact\u2122 Hookit\u2122 Foam Disc P3000 refines P1200-P1500 grade scratches to an ultra-fine finish, dramatically reducing compounding time, heat build-up, and risk of edge burn-through.",
    "specs": [
      {
        "label": "Part Number",
        "value": "PN 02085"
      },
      {
        "label": "Grit Grade",
        "value": "P3000"
      },
      {
        "label": "Diameter",
        "value": "6 Inch / 152 mm"
      },
      {
        "label": "Backing",
        "value": "Foam Hookit\u2122 System"
      },
      {
        "label": "Origin",
        "value": "3M USA"
      }
    ],
    "applicationSteps": [
      "Mist surface and disc with water.",
      "Sand with DA polisher/sander at 50% speed with overlapping passes.",
      "Squeegee surface to verify even matte finish.",
      "Proceed to 3M Perfect-It EX Compounding."
    ],
    "image": "/images/products/3m/3m-trizact-abrasives.jpg",
    "detailRoute": "/products/3m-trizact-hookit-foam-disc-p3000",
    "sourceUrl": "https://www.3m.com/",
    "isVerified": true,
    "seoTitle": "3M\u2122 Trizact\u2122 Hookit\u2122 Foam Disc P3000 PN 02085 | TMR Car Care Tiruppur",
    "seoDescription": "3M\u2122 Trizact\u2122 Hookit\u2122 Foam Disc P3000 (PN 02085) at TMR Car Care. The benchmark in paint scratch refinement.",
    "seoH1": "3M\u2122 TRIZACT\u2122 HOOKIT\u2122 FOAM DISC P3000 (PN 02085)",
    "relatedProductIds": [
      "3m-trizact-1500",
      "3m-trizact-5000",
      "3m-perfect-it-ex-rubbing-compound"
    ],
    "faqs": [
      {
        "q": "Why use Trizact 3000 before compounding?",
        "a": "It refines aggressive sanding scratches into microscopic uniform scratches, allowing rubbing compound to polish clear coat in half the time with zero heat damage."
      },
      {
        "q": "How long does a single Trizact 3000 disc last?",
        "a": "Typically 2 to 3 vehicle panels when kept adequately damp with clean water."
      },
      {
        "q": "Can it be used by hand?",
        "a": "Yes, with 3M Hookit Hand Pad for intricate areas and door jambs."
      },
      {
        "q": "Is water mandatory during sanding?",
        "a": "Yes, damp sanding is essential to flush swarf and prevent disc clogging."
      }
    ]
  },
  {
    "id": "3m-trizact-5000",
    "slug": "3m-trizact-hookit-foam-disc-p5000",
    "sku": "PN 30662",
    "name": "3M\u2122 Trizact\u2122 Hookit\u2122 Foam Disc P5000",
    "brand": "3M\u2122 Automotive",
    "category": "ABRASIVES",
    "shortDescription": "P5000 ultra-fine foam abrasive disc designed to eliminate compounding on delicate clear coats.",
    "fullDescription": "3M\u2122 Trizact\u2122 Hookit\u2122 Foam Disc P5000 refines P3000 scratches to near-polish clarity, allowing detailers to jump directly to machine polishing and preserve paint thickness.",
    "specs": [
      {
        "label": "Part Number",
        "value": "PN 30662"
      },
      {
        "label": "Grit Grade",
        "value": "P5000"
      },
      {
        "label": "Diameter",
        "value": "6 Inch / 152 mm"
      },
      {
        "label": "Backing",
        "value": "Ultra-Conformable Foam"
      },
      {
        "label": "Origin",
        "value": "3M USA"
      }
    ],
    "applicationSteps": [
      "Pre-sand with Trizact 3000.",
      "Lightly mist panel with water.",
      "Perform 3-4 overlapping passes with DA sander.",
      "Wipe clean and observe satin reflection."
    ],
    "image": "/images/products/3m/3m-trizact-5000.jpg",
    "detailRoute": "/products/3m-trizact-hookit-foam-disc-p5000",
    "sourceUrl": "https://www.3m.com/",
    "isVerified": true,
    "seoTitle": "3M\u2122 Trizact\u2122 Hookit\u2122 Foam Disc P5000 PN 30662 | TMR Car Care",
    "seoDescription": "3M\u2122 Trizact\u2122 Hookit\u2122 Foam Disc P5000 (PN 30662) at TMR Car Care Tiruppur. Ultra-fine micro-abrasive disc for paint perfection.",
    "seoH1": "3M\u2122 TRIZACT\u2122 HOOKIT\u2122 FOAM DISC P5000 (PN 30662)",
    "relatedProductIds": [
      "3m-trizact-abrasives",
      "3m-perfect-it-1-step-finishing-material",
      "3m-perfect-it-ex-machine-polish"
    ],
    "faqs": [
      {
        "q": "What is the benefit of P5000 refinement?",
        "a": "It leaves a scratch pattern so shallow that Step 1 heavy compounding can be skipped entirely on many OEM paints."
      },
      {
        "q": "Does P5000 remove orange peel?",
        "a": "No, P5000 is for refining scratches left by P1500/P3000, not for initial orange peel leveling."
      },
      {
        "q": "Can P5000 be used on spot repairs?",
        "a": "Yes, ideal for spot blending clear coat repair margins seamlessly."
      },
      {
        "q": "How do you know when P5000 is finished cutting?",
        "a": "The surface will change from a matte appearance to a smooth satin sheen."
      }
    ]
  },
  {
    "id": "3m-masking-tape",
    "slug": "3m-automotive-performance-masking-tape-233-plus",
    "sku": "PN 26338",
    "name": "3M\u2122 Automotive Performance Masking Tape 233+",
    "brand": "3M\u2122 Automotive",
    "category": "TOOLS",
    "shortDescription": "High-performance green masking tape engineered for vehicle detailing, rubber trim protection, and razor-sharp paint lines.",
    "fullDescription": "3M\u2122 Automotive Performance Masking Tape 233+ adheres cleanly to automotive rubber molding, emblems, glass, and plastic trim. It resists temperature up to 250\u00b0F (121\u00b0C) and leaves zero adhesive residue upon removal.",
    "specs": [
      {
        "label": "Part Number",
        "value": "PN 26338"
      },
      {
        "label": "Width",
        "value": "36 mm (1.41 in)"
      },
      {
        "label": "Length",
        "value": "55 m (60 yd)"
      },
      {
        "label": "Temperature Rating",
        "value": "250\u00b0F / 121\u00b0C for 30 min"
      },
      {
        "label": "Origin",
        "value": "3M USA"
      }
    ],
    "applicationSteps": [
      "Ensure trim surfaces are dry and free of wax or oil.",
      "Apply tape firmly along rubber moldings, badges, and plastic edges.",
      "Perform machine compounding and polishing passes safely.",
      "Peel tape at a 45-degree angle without leaving residue."
    ],
    "image": "/images/products/3m/3m-masking-tape.jpg",
    "detailRoute": "/products/3m-automotive-performance-masking-tape-233-plus",
    "sourceUrl": "https://www.3m.com/",
    "isVerified": true,
    "seoTitle": "3M\u2122 Automotive Performance Masking Tape 233+ PN 26338 | TMR Car Care",
    "seoDescription": "3M\u2122 Performance Masking Tape 233+ (PN 26338) at TMR Car Care Tiruppur. Premium green automotive masking tape.",
    "seoH1": "3M\u2122 AUTOMOTIVE PERFORMANCE MASKING TAPE 233+ (PN 26338)",
    "relatedProductIds": [
      "3m-perfect-it-ex-rubbing-compound",
      "3m-compounding-pad",
      "3m-scotchgard-ppf-pro"
    ],
    "faqs": [
      {
        "q": "Why is green 233+ tape preferred by professional detailers?",
        "a": "It conforms easily to curves, resists compounding chemicals and moisture, and removes cleanly without pulling trim or leaving glue residue."
      },
      {
        "q": "Will rotary polishers shred this tape?",
        "a": "The saturated crepe backing is highly durable and resists tearing even if grazed by rotating foam or wool pads."
      },
      {
        "q": "Can it be left on the vehicle for multiple days?",
        "a": "Yes, 3M 233+ has high UV and temperature resistance, allowing clean removal up to 3-5 days after application."
      },
      {
        "q": "Is it safe on textured plastic moldings?",
        "a": "Yes, it protects porous textured plastics from white compound staining."
      }
    ]
  },
  {
    "id": "3m-synthetic-detail-clay-bar",
    "slug": "3m-synthetic-detail-clay-bar",
    "sku": "PN 38070",
    "name": "3M\u2122 Synthetic Detail Clay Bar",
    "brand": "3M\u2122 Automotive",
    "category": "CLEANING",
    "shortDescription": "Professional surface decontamination clay engineered to safely lift overspray, brake dust, rail dust, and industrial fallout.",
    "fullDescription": "3M\u2122 Synthetic Detail Clay Bar (PN 38070) extracts embedded micro-contaminants from exterior automotive paint, glass, and chrome, restoring glass-smooth surface feel before polishing or ceramic coating.",
    "specs": [
      {
        "label": "Part Number",
        "value": "PN 38070"
      },
      {
        "label": "Weight",
        "value": "200 g"
      },
      {
        "label": "Grade",
        "value": "Medium-Fine Detailing Grade"
      },
      {
        "label": "Compatibility",
        "value": "Clear Coat, Glass, Chrome, Headlights"
      },
      {
        "label": "Origin",
        "value": "3M Automotive Division"
      }
    ],
    "applicationSteps": [
      "Wash and rinse vehicle thoroughly.",
      "Spray clay lubricant liberally onto working panel.",
      "Glide clay bar gently across paint in linear motions.",
      "Knead clay to fresh surface as contaminants accumulate."
    ],
    "image": "/images/products/3m/3m-synthetic-detail-clay-bar.jpg",
    "detailRoute": "/products/3m-synthetic-detail-clay-bar",
    "sourceUrl": "https://www.3m.com/",
    "isVerified": true,
    "seoTitle": "3M\u2122 Synthetic Detail Clay Bar PN 38070 | TMR Car Care Tiruppur",
    "seoDescription": "3M\u2122 Synthetic Detail Clay Bar (PN 38070) at TMR Car Care. Remove overspray, rail dust, and industrial fallout for glass-smooth paint.",
    "seoH1": "3M\u2122 SYNTHETIC DETAIL CLAY BAR (PN 38070)",
    "relatedProductIds": [
      "3m-perfect-it-ex-rubbing-compound",
      "3m-quick-wax-spray",
      "3m-ceramic-coating-kit"
    ],
    "faqs": [
      {
        "q": "What contaminants does 3M Synthetic Detail Clay remove?",
        "a": "Industrial fallout, brake dust, tree sap, rail dust, road tar, and paint overspray that normal washing cannot dissolve."
      },
      {
        "q": "When should clay decontamination be performed?",
        "a": "Before any machine compounding, polishing, or ceramic coating installation."
      },
      {
        "q": "What lubricant should be used?",
        "a": "Use a dedicated clay lubricant or slick car wash solution to ensure smooth glide without marring."
      },
      {
        "q": "Is the clay reusable?",
        "a": "Yes, knead to expose clean clay after each panel until the bar is fully saturated."
      }
    ]
  },
  {
    "id": "3m-quick-wax-spray",
    "slug": "3m-quick-wax-spray-39034",
    "sku": "PN 39034",
    "name": "3M\u2122 Quick Wax Spray",
    "brand": "3M\u2122 Automotive",
    "category": "PROTECTION",
    "shortDescription": "Carnauba-infused spray wax that delivers instant showroom gloss and water beading on wet or dry paint.",
    "fullDescription": "3M\u2122 Quick Wax (PN 39034) contains genuine carnauba wax in an easy spray formula. It adds depth, gloss, and water repellency between regular wax applications with zero hazing.",
    "specs": [
      {
        "label": "Part Number",
        "value": "PN 39034"
      },
      {
        "label": "Wax Base",
        "value": "Natural Carnauba Emulsion"
      },
      {
        "label": "Volume",
        "value": "16 fl oz / 473 ml"
      },
      {
        "label": "Application",
        "value": "Wet or Dry Paintwork"
      },
      {
        "label": "Origin",
        "value": "3M USA"
      }
    ],
    "applicationSteps": [
      "Mist lightly onto vehicle paint section.",
      "Spread evenly using a plush microfiber towel.",
      "Flip towel to dry side and buff to high gloss."
    ],
    "image": "/images/products/3m/3m-quick-wax-spray.jpg",
    "detailRoute": "/products/3m-quick-wax-spray-39034",
    "sourceUrl": "https://www.3m.com/",
    "isVerified": true,
    "seoTitle": "3M\u2122 Quick Wax Spray PN 39034 | TMR Car Care Tiruppur",
    "seoDescription": "3M\u2122 Quick Wax Spray (PN 39034) at TMR Car Care. Carnauba spray wax for instant gloss and water beading.",
    "seoH1": "3M\u2122 QUICK WAX SPRAY (PN 39034)",
    "relatedProductIds": [
      "3m-synthetic-detail-clay-bar",
      "3m-glass-cleaner-professional",
      "3m-ceramic-coating-kit"
    ],
    "faqs": [
      {
        "q": "Can 3M Quick Wax be used as a drying aid?",
        "a": "Yes, spray directly onto wet panels after washing and dry with a microfiber drying towel."
      },
      {
        "q": "Does it streak on dark paint?",
        "a": "No, the carnauba emulsion formula is streak-free when buffed with a clean microfiber."
      },
      {
        "q": "Is it safe on plastic trim?",
        "a": "Yes, it leaves no white chalky residue on rubber moldings or plastic trim."
      },
      {
        "q": "How long does the protection last?",
        "a": "Typically 3 to 6 weeks depending on washing frequency and weather exposure."
      }
    ]
  },
  {
    "id": "3m-ceramic-coating-kit",
    "slug": "3m-ceramic-coating-paint-protection-kit",
    "sku": "PN 39901",
    "name": "3M\u2122 Ceramic Coating Paint Protection Kit",
    "brand": "3M\u2122 Automotive",
    "category": "PROTECTION",
    "shortDescription": "Professional-grade ceramic coating formula creating an ultra-hydrophobic 9H quartz barrier with multi-year durability.",
    "fullDescription": "3M\u2122 Ceramic Coating (PN 39901) bonds chemically to exterior vehicle paint, trim, wheels, and glass. It produces high-gloss slickness, chemical resistance against acid rain and bird droppings, and intense water beading.",
    "specs": [
      {
        "label": "Part Number",
        "value": "PN 39901"
      },
      {
        "label": "Hardness",
        "value": "9H Quartz Matrix"
      },
      {
        "label": "Durability",
        "value": "Up to 5 Years Multi-Layer"
      },
      {
        "label": "Contact Angle",
        "value": "> 110\u00b0 Water Beading"
      },
      {
        "label": "Origin",
        "value": "3M Automotive Division"
      }
    ],
    "applicationSteps": [
      "Perform full paint correction and IPA surface prep.",
      "Apply coating drops to applicator block in cross-hatch pattern.",
      "Allow 1-3 minutes for rainbow flash-off.",
      "Level and buff residue with dual microfiber cloths."
    ],
    "image": "/images/products/3m/3m-ceramic-coating-kit.jpg",
    "detailRoute": "/products/3m-ceramic-coating-paint-protection-kit",
    "sourceUrl": "https://www.3m.com/",
    "isVerified": true,
    "seoTitle": "3M\u2122 Ceramic Coating Paint Protection Kit PN 39901 | TMR Car Care Tiruppur",
    "seoDescription": "3M\u2122 Ceramic Coating (PN 39901) at TMR Car Care Tiruppur. 9H hardness multi-year ceramic paint protection.",
    "seoH1": "3M\u2122 CERAMIC COATING PAINT PROTECTION KIT (PN 39901)",
    "relatedProductIds": [
      "3m-perfect-it-ex-ultrafine-polish",
      "3m-synthetic-detail-clay-bar",
      "3m-scotchgard-ppf-pro"
    ],
    "faqs": [
      {
        "q": "What surfaces can 3M Ceramic Coating protect?",
        "a": "Clear coat, vinyl wraps, PPF, exterior plastic trim, headlights, and painted alloy wheels."
      },
      {
        "q": "How long should 3M Ceramic Coating cure?",
        "a": "Keep dry for 24 hours and avoid washing with shampoo for 7 days."
      },
      {
        "q": "Does it prevent stone chips?",
        "a": "Ceramic coating prevents chemical etching, UV fading, and micro-marring, but stone chip impact protection requires Paint Protection Film (PPF)."
      },
      {
        "q": "Can multiple coats be applied?",
        "a": "Yes, a second layer can be applied after 1 hour for enhanced depth and longevity."
      }
    ]
  },
  {
    "id": "3m-scotchgard-ppf-pro",
    "slug": "3m-scotchgard-paint-protection-film-pro-series-200",
    "sku": "Pro Series 200",
    "name": "3M\u2122 Scotchgard\u2122 Paint Protection Film Pro Series 200",
    "brand": "3M\u2122 Automotive",
    "category": "FILMS",
    "shortDescription": "Industry-benchmark 8 mil self-healing TPU protective film offering invisible defense against stone chips and road debris.",
    "fullDescription": "3M\u2122 Scotchgard\u2122 Paint Protection Film Pro Series 200 is engineered with advanced aliphatic polyurethane and a heat-activated self-healing clear coat. It resists yellowing, stains, and impact damage with an official 10-year warranty.",
    "specs": [
      {
        "label": "Series",
        "value": "Pro Series 200 (SGH6PRO)"
      },
      {
        "label": "Thickness",
        "value": "8.0 mil (203 microns)"
      },
      {
        "label": "Top Coat",
        "value": "Heat-Activated Self-Healing TPU"
      },
      {
        "label": "Warranty",
        "value": "10-Year Manufacturer Backed"
      },
      {
        "label": "Origin",
        "value": "3M USA"
      }
    ],
    "applicationSteps": [
      "Decontaminate and polish target vehicle panel.",
      "Spray slip solution on paint and film backing.",
      "Align film accurately and squeegee from center outwards.",
      "Tack edges with tack solution and heat gun."
    ],
    "image": "/images/products/3m/3m-scotchgard-ppf-pro.jpg",
    "detailRoute": "/products/3m-scotchgard-paint-protection-film-pro-series-200",
    "sourceUrl": "https://www.3m.com/",
    "isVerified": true,
    "seoTitle": "3M\u2122 Scotchgard\u2122 Paint Protection Film Pro 200 | TMR Car Care Tiruppur",
    "seoDescription": "3M\u2122 Scotchgard\u2122 PPF Pro Series 200 at TMR Car Care Tiruppur. 8 mil self-healing TPU stone chip protection film.",
    "seoH1": "3M\u2122 SCOTCHGARD\u2122 PAINT PROTECTION FILM PRO SERIES 200",
    "relatedProductIds": [
      "3m-ceramic-coating-kit",
      "3m-masking-tape",
      "3m-perfect-it-ex-ultrafine-polish"
    ],
    "faqs": [
      {
        "q": "How does 3M Scotchgard self-healing work?",
        "a": "Light scratches and swirl marks disappear automatically when exposed to sunlight or warm water."
      },
      {
        "q": "Does 3M PPF yellow over time?",
        "a": "No, Pro Series 200 uses UV-stable aliphatic polyurethane with anti-yellowing stabilizers."
      },
      {
        "q": "Can ceramic coating be applied over PPF?",
        "a": "Yes, ceramic coatings enhance the hydrophobicity and ease of washing on PPF."
      },
      {
        "q": "What warranty does 3M provide?",
        "a": "Official 10-year manufacturer warranty against bubbling, cracking, and yellowing."
      }
    ]
  },
  {
    "id": "3m-glass-cleaner-professional",
    "slug": "3m-glass-cleaner-professional-08888",
    "sku": "PN 08888",
    "name": "3M\u2122 Glass Cleaner Professional Formula",
    "brand": "3M\u2122 Automotive",
    "category": "CLEANING",
    "shortDescription": "Streak-free aerosol glass cleaner that dissolves road grime, bug splatter, and interior vinyl fogging without hazing.",
    "fullDescription": "3M\u2122 Glass Cleaner (PN 08888) is a non-drip foaming glass cleaner formulated for automotive glass, mirrors, and tinted windows. It clings to vertical surfaces to dissolve stubborn residue.",
    "specs": [
      {
        "label": "Part Number",
        "value": "PN 08888"
      },
      {
        "label": "Volume",
        "value": "19 fl oz / 538 g"
      },
      {
        "label": "Foam Type",
        "value": "High-Cling Aerosol Foam"
      },
      {
        "label": "Tint Safe",
        "value": "Ammonia-Free Safe on Aftermarket Tints"
      },
      {
        "label": "Origin",
        "value": "3M USA"
      }
    ],
    "applicationSteps": [
      "Shake can well before spraying.",
      "Spray foam evenly across automotive glass surface.",
      "Wipe with waffle-weave microfiber glass towel.",
      "Buff with dry microfiber for streak-free optical clarity."
    ],
    "image": "/images/products/3m/3m-glass-cleaner-professional.jpg",
    "detailRoute": "/products/3m-glass-cleaner-professional-08888",
    "sourceUrl": "https://www.3m.com/",
    "isVerified": true,
    "seoTitle": "3M\u2122 Glass Cleaner Professional Formula PN 08888 | TMR Car Care",
    "seoDescription": "3M\u2122 Professional Glass Cleaner (PN 08888) at TMR Car Care. Ammonia-free streak-free automotive foaming glass cleaner.",
    "seoH1": "3M\u2122 GLASS CLEANER PROFESSIONAL FORMULA (PN 08888)",
    "relatedProductIds": [
      "3m-quick-wax-spray",
      "3m-synthetic-detail-clay-bar",
      "3m-leather-and-vinyl-restorer"
    ],
    "faqs": [
      {
        "q": "Is 3M Glass Cleaner safe on tinted windows?",
        "a": "Yes, its ammonia-free formula will not degrade or discolor aftermarket window tint films."
      },
      {
        "q": "Does the foam run down the dashboard?",
        "a": "No, the dense aerosol foam clings to vertical automotive windshields without dripping."
      },
      {
        "q": "Can it remove stubborn interior smoker haze?",
        "a": "Yes, it effortlessly cuts through nicotine film, vinyl off-gassing, and oily fingerprints."
      },
      {
        "q": "Can it be used on side mirrors?",
        "a": "Yes, safe and effective on all exterior and interior mirrors."
      }
    ]
  },
  {
    "id": "3m-leather-and-vinyl-restorer",
    "slug": "3m-leather-and-vinyl-restorer-39040",
    "sku": "PN 39040",
    "name": "3M\u2122 Leather and Vinyl Restorer",
    "brand": "3M\u2122 Automotive",
    "category": "PROTECTION",
    "shortDescription": "Conditioning and protective treatment that cleans, softens, and restores original satin sheen to automotive leather and vinyl.",
    "fullDescription": "3M\u2122 Leather and Vinyl Restorer (PN 39040) cleans dirt and grime while conditioning natural leather oils to prevent drying and cracking, leaving a non-greasy satin finish.",
    "specs": [
      {
        "label": "Part Number",
        "value": "PN 39040"
      },
      {
        "label": "Volume",
        "value": "16 fl oz / 473 ml"
      },
      {
        "label": "Finish",
        "value": "Non-Greasy Original Satin"
      },
      {
        "label": "Application",
        "value": "Leather Seats, Dashboards, Door Panels"
      },
      {
        "label": "Origin",
        "value": "3M USA"
      }
    ],
    "applicationSteps": [
      "Spray restorer onto clean microfiber applicator.",
      "Work gently into leather seams and vinyl grain.",
      "Allow formula to penetrate for 2-3 minutes.",
      "Buff excess with a dry microfiber towel."
    ],
    "image": "/images/products/3m/3m-leather-and-vinyl-restorer.jpg",
    "detailRoute": "/products/3m-leather-and-vinyl-restorer-39040",
    "sourceUrl": "https://www.3m.com/",
    "isVerified": true,
    "seoTitle": "3M\u2122 Leather and Vinyl Restorer PN 39040 | TMR Car Care Tiruppur",
    "seoDescription": "3M\u2122 Leather and Vinyl Restorer (PN 39040) at TMR Car Care. Premium interior leather conditioner and UV protectant.",
    "seoH1": "3M\u2122 LEATHER AND VINYL RESTORER (PN 39040)",
    "relatedProductIds": [
      "3m-glass-cleaner-professional",
      "3m-tire-restorer",
      "3m-quick-wax-spray"
    ],
    "faqs": [
      {
        "q": "Does 3M Leather Restorer leave a slippery film on seats?",
        "a": "No, it absorbs completely into the leather grain, leaving a dry-to-the-touch natural satin texture."
      },
      {
        "q": "Does it contain UV blockers?",
        "a": "Yes, it contains UV inhibitors that prevent dashboard fading, sun cracking, and leather hardening."
      },
      {
        "q": "Can it be used on faux leather / leatherette?",
        "a": "Yes, it is formulated for both genuine leather and modern synthetic vinyl/leatherette surfaces."
      },
      {
        "q": "How frequently should it be applied?",
        "a": "Apply every 6 to 8 weeks for continuous interior protection."
      }
    ]
  },
  {
    "id": "3m-tire-restorer",
    "slug": "3m-tire-restorer-39042",
    "sku": "PN 39042",
    "name": "3M\u2122 Tire Restorer",
    "brand": "3M\u2122 Automotive",
    "category": "PROTECTION",
    "shortDescription": "Deep conditioning tire dressing that restores deep black luster and protects rubber sidewalls against browning and UV weathering.",
    "fullDescription": "3M\u2122 Tire Restorer (PN 39042) rejuvenates dull, brown tire sidewalls with a rich deep black finish that will not sling onto body panels during driving.",
    "specs": [
      {
        "label": "Part Number",
        "value": "PN 39042"
      },
      {
        "label": "Volume",
        "value": "16 fl oz / 473 ml"
      },
      {
        "label": "Finish",
        "value": "Rich Deep Black Satin"
      },
      {
        "label": "Anti-Sling",
        "value": "Fast-Absorbing Formula"
      },
      {
        "label": "Origin",
        "value": "3M USA"
      }
    ],
    "applicationSteps": [
      "Clean tire sidewalls with wheel cleaner and dry completely.",
      "Spray tire restorer onto curved tire applicator sponge.",
      "Spread evenly around the tire sidewall.",
      "Allow 5 minutes to dry before driving."
    ],
    "image": "/images/products/3m/3m-tire-restorer.jpg",
    "detailRoute": "/products/3m-tire-restorer-39042",
    "sourceUrl": "https://www.3m.com/",
    "isVerified": true,
    "seoTitle": "3M\u2122 Tire Restorer PN 39042 | TMR Car Care Tiruppur",
    "seoDescription": "3M\u2122 Tire Restorer (PN 39042) at TMR Car Care. Restores deep black tire sidewall appearance with zero sling.",
    "seoH1": "3M\u2122 TIRE RESTORER (PN 39042)",
    "relatedProductIds": [
      "3m-leather-and-vinyl-restorer",
      "3m-quick-wax-spray",
      "3m-ceramic-coating-kit"
    ],
    "faqs": [
      {
        "q": "Does 3M Tire Restorer sling onto car paint?",
        "a": "No, it penetrates rubber pores and dries to a non-sticky finish within minutes."
      },
      {
        "q": "Does it give a wet shiny or natural matte look?",
        "a": "It gives a deep, rich OEM satin-black luster rather than an artificial greasy shine."
      },
      {
        "q": "Can it be used on exterior rubber trim and bumper inserts?",
        "a": "Yes, it works excellently on exterior rubber seals, mudguards, and unpainted bumpers."
      },
      {
        "q": "How long does the black tire finish last?",
        "a": "Typically 3 to 4 weeks under regular driving and wash conditions."
      }
    ]
  },
  {
    "id": "meguiars-m210-finishing-polish",
    "slug": "meguiars-mirror-glaze-m210-ultra-finishing-polish",
    "sku": "MEG-M21032",
    "name": "Meguiar's Mirror Glaze M210 Ultra Pro Finishing Polish",
    "brand": "Meguiar's",
    "category": "POLISHING",
    "shortDescription": "Next-generation professional finishing polish engineered to produce haze-free depth even on sensitive soft clear coats.",
    "fullDescription": "Meguiar's Mirror Glaze M210 Ultra Pro Finishing Polish utilizes advanced sub-micron abrasives to permanently eliminate DA haze and compounding micro-marring, delivering unmatched optical clarity.",
    "specs": [
      {
        "label": "Part Number",
        "value": "M21032"
      },
      {
        "label": "Volume",
        "value": "32 oz / 946 ml"
      },
      {
        "label": "Abrasive Tech",
        "value": "Sub-Micron Super Micro Abrasives"
      },
      {
        "label": "Body Shop Safe",
        "value": "100% Paint Shop Safe"
      },
      {
        "label": "Origin",
        "value": "Meguiar's USA"
      }
    ],
    "applicationSteps": [
      "Shake bottle well.",
      "Apply 3-4 pea-sized drops to yellow or black foam finishing pad.",
      "Operate DA polisher at speed 3-4 with light pressure.",
      "Wipe clean with a premium microfiber towel."
    ],
    "image": "/images/products/meguiars/meguiars-m210-finishing-polish.jpg",
    "detailRoute": "/products/meguiars-mirror-glaze-m210-ultra-finishing-polish",
    "sourceUrl": "https://meguiarsdirect.com/",
    "isVerified": true,
    "seoTitle": "Meguiar's Mirror Glaze M210 Ultra Pro Finishing Polish | TMR Car Care",
    "seoDescription": "Meguiar's M210 Ultra Pro Finishing Polish at TMR Car Care Tiruppur. Flawless reflection and haze-free clarity on soft paints.",
    "seoH1": "MEGUIAR'S MIRROR GLAZE M210 ULTRA PRO FINISHING POLISH",
    "relatedProductIds": [
      "meguiars-m110-pro-speed-compound",
      "meguiars-ultimate-polish",
      "meguiars-hybrid-ceramic-wax"
    ],
    "faqs": [
      {
        "q": "What makes M210 different from previous finishing polishes?",
        "a": "M210 is specifically tuned for modern sticky/soft clear coats, eliminating DA haze without oily fillers."
      },
      {
        "q": "Can M210 be used on rotary polishers?",
        "a": "Yes, M210 performs flawlessly on both rotary and dual-action random orbital machines."
      },
      {
        "q": "Does it create dust during polishing?",
        "a": "No, it features extreme low-dusting technology for rapid wipe-off."
      },
      {
        "q": "Is it safe for ceramic coating prep?",
        "a": "Yes, it wipes off cleanly with IPA or prep spray before coating application."
      }
    ]
  },
  {
    "id": "meguiars-m110-pro-speed-compound",
    "slug": "meguiars-mirror-glaze-m110-ultra-pro-speed-compound",
    "sku": "MEG-M11032",
    "name": "Meguiar's Mirror Glaze M110 Ultra Pro Speed Compound",
    "brand": "Meguiar's",
    "category": "POLISHING",
    "shortDescription": "Heavy-cut professional compounding formula designed for fast defect removal with exceptional gloss finish.",
    "fullDescription": "Meguiar's Mirror Glaze M110 Ultra Pro Speed Compound quickly cuts P1200 and finer sanding marks while finishing down surprisingly clear, reducing the labor needed in secondary polishing steps.",
    "specs": [
      {
        "label": "Part Number",
        "value": "M11032"
      },
      {
        "label": "Volume",
        "value": "32 oz / 946 ml"
      },
      {
        "label": "Cut Grade",
        "value": "12 / 12 Heavy Cut"
      },
      {
        "label": "Dust Level",
        "value": "Ultra-Low Dusting Formula"
      },
      {
        "label": "Origin",
        "value": "Meguiar's USA"
      }
    ],
    "applicationSteps": [
      "Prime microfiber or foam cutting pad.",
      "Work in 2ft x 2ft sections using moderate downward pressure.",
      "Make 3-4 cross-hatch passes at medium machine speed.",
      "Wipe clean and follow with Meguiar's M210."
    ],
    "image": "/images/products/meguiars/meguiars-m110-pro-speed-compound.jpg",
    "detailRoute": "/products/meguiars-mirror-glaze-m110-ultra-pro-speed-compound",
    "sourceUrl": "https://meguiarsdirect.com/",
    "isVerified": true,
    "seoTitle": "Meguiar's Mirror Glaze M110 Ultra Pro Speed Compound | TMR Car Care",
    "seoDescription": "Meguiar's M110 Ultra Pro Speed Compound at TMR Car Care. Professional heavy-cut compound with ultra-low dust.",
    "seoH1": "MEGUIAR'S MIRROR GLAZE M110 ULTRA PRO SPEED COMPOUND",
    "relatedProductIds": [
      "meguiars-m210-finishing-polish",
      "meguiars-ultimate-compound",
      "meguiars-hybrid-ceramic-wax"
    ],
    "faqs": [
      {
        "q": "What level of paint defects can M110 remove?",
        "a": "It removes P1200 sand scratches, heavy oxidation, acid rain etching, and severe swirl marks."
      },
      {
        "q": "Does M110 gum up pads?",
        "a": "No, it features long work time and easy pad cleanout with a pad brush or air gun."
      },
      {
        "q": "Which pad type provides maximum cut with M110?",
        "a": "Meguiar's DA Microfiber Cutting Disc or rotary twisted wool pad."
      },
      {
        "q": "Is M110 paint shop safe?",
        "a": "Yes, 100% body shop safe with no silicone or paint contaminants."
      }
    ]
  },
  {
    "id": "meguiars-m105-ultra-cut-compound",
    "slug": "meguiars-mirror-glaze-m105-ultra-cut-compound",
    "sku": "MEG-M10532",
    "name": "Meguiar's Mirror Glaze M105 Ultra-Cut Compound",
    "brand": "Meguiar's",
    "category": "POLISHING",
    "shortDescription": "Super micro-abrasive compound renowned for rapid scratch removal and high-gloss clear coat leveling.",
    "fullDescription": "Meguiar's Mirror Glaze M105 Ultra-Cut Compound utilizes exclusive Super Micro-Abrasive Technology (SMAT) to cut quickly without scouring paint, making it a legendary choice for detailers worldwide.",
    "specs": [
      {
        "label": "Part Number",
        "value": "M10532"
      },
      {
        "label": "Volume",
        "value": "32 oz / 946 ml"
      },
      {
        "label": "Technology",
        "value": "Super Micro Abrasive (SMAT)"
      },
      {
        "label": "Application",
        "value": "Rotary & DA Polisher"
      },
      {
        "label": "Origin",
        "value": "Meguiar's USA"
      }
    ],
    "applicationSteps": [
      "Apply compound to wool or hard foam cutting pad.",
      "Work at 1500-2000 RPM on rotary or speed 5 on DA.",
      "Clean residue immediately with microfiber towel."
    ],
    "image": "/images/products/meguiars/meguiars-m105-ultra-cut-compound.jpg",
    "detailRoute": "/products/meguiars-mirror-glaze-m105-ultra-cut-compound",
    "sourceUrl": "https://meguiarsdirect.com/",
    "isVerified": true,
    "seoTitle": "Meguiar's Mirror Glaze M105 Ultra-Cut Compound | TMR Car Care",
    "seoDescription": "Meguiar's M105 Ultra-Cut Compound at TMR Car Care. Legendary SMAT compounding power for fast paint leveling.",
    "seoH1": "MEGUIAR'S MIRROR GLAZE M105 ULTRA-CUT COMPOUND",
    "relatedProductIds": [
      "meguiars-m205-ultra-finishing-polish",
      "meguiars-m110-pro-speed-compound",
      "meguiars-ultimate-compound"
    ],
    "faqs": [
      {
        "q": "What is SMAT technology in M105?",
        "a": "Super Micro Abrasives maintain their cutting size throughout the cycle, giving consistent cut from start to finish."
      },
      {
        "q": "What is the best follow-up polish for M105?",
        "a": "Meguiar's M205 Ultra Finishing Polish or M210 Ultra Pro Finishing Polish."
      },
      {
        "q": "Can M105 be used by hand?",
        "a": "Yes, for isolated scratch removal around door handles and emblems."
      },
      {
        "q": "Is it safe on scratch-resistant ceramic clear coats?",
        "a": "Yes, it cuts hard German and ceramic clear coats efficiently."
      }
    ]
  },
  {
    "id": "meguiars-m205-ultra-finishing-polish",
    "slug": "meguiars-mirror-glaze-m205-ultra-finishing-polish",
    "sku": "MEG-M20532",
    "name": "Meguiar's Mirror Glaze M205 Ultra Finishing Polish",
    "brand": "Meguiar's",
    "category": "POLISHING",
    "shortDescription": "Advanced finishing polish that permanently eliminates swirls and creates a deep mirror-like gloss.",
    "fullDescription": "Meguiar's Mirror Glaze M205 Ultra Finishing Polish uses microscopic abrasive technology to deliver rich gloss, high depth of color, and hologram-free clarity on all automotive finishes.",
    "specs": [
      {
        "label": "Part Number",
        "value": "M20532"
      },
      {
        "label": "Volume",
        "value": "32 oz / 946 ml"
      },
      {
        "label": "Finish",
        "value": "Deep Mirror Reflection"
      },
      {
        "label": "Wipe-off",
        "value": "Fast & Effortless"
      },
      {
        "label": "Origin",
        "value": "Meguiar's USA"
      }
    ],
    "applicationSteps": [
      "Dispense polish on foam finishing pad.",
      "Work section with moderate pressure then lighten on final passes.",
      "Buff clear with microfiber cloth."
    ],
    "image": "/images/products/meguiars/meguiars-m205-ultra-finishing-polish.jpg",
    "detailRoute": "/products/meguiars-mirror-glaze-m205-ultra-finishing-polish",
    "sourceUrl": "https://meguiarsdirect.com/",
    "isVerified": true,
    "seoTitle": "Meguiar's Mirror Glaze M205 Ultra Finishing Polish | TMR Car Care",
    "seoDescription": "Meguiar's M205 Ultra Finishing Polish at TMR Car Care. Precision swirl removal and deep mirror finish.",
    "seoH1": "MEGUIAR'S MIRROR GLAZE M205 ULTRA FINISHING POLISH",
    "relatedProductIds": [
      "meguiars-m105-ultra-cut-compound",
      "meguiars-m210-finishing-polish",
      "meguiars-gold-class-carnauba-plus-paste-wax"
    ],
    "faqs": [
      {
        "q": "Can M205 be used as a 1-step polish on light swirls?",
        "a": "Yes, with a medium foam pad M205 removes light swirls while finishing with exceptional gloss."
      },
      {
        "q": "Does M205 contain silicone?",
        "a": "No, completely silicone-free and paint shop safe."
      },
      {
        "q": "How is M205 applied on DA polishers?",
        "a": "Speed 4 with medium to light pressure."
      },
      {
        "q": "Can it be used on headlights?",
        "a": "Yes, excellent for polishing cloudy headlight plastic after sanding."
      }
    ]
  },
  {
    "id": "meguiars-ultimate-compound",
    "slug": "meguiars-ultimate-compound-g17216",
    "sku": "MEG-G17216",
    "name": "Meguiar's Ultimate Compound",
    "brand": "Meguiar's",
    "category": "POLISHING",
    "shortDescription": "Consumer-grade heavy defect remover that safely restores color and clarity to neglected and abused automotive finishes.",
    "fullDescription": "Meguiar's Ultimate Compound (G17216) cuts fast to remove oxidation, scratches, water spots, and blemishes without scratching or scouring the clear coat.",
    "specs": [
      {
        "label": "Part Number",
        "value": "G17216"
      },
      {
        "label": "Volume",
        "value": "15.2 oz / 450 ml"
      },
      {
        "label": "Clear Coat Safe",
        "value": "100% Non-Abrasive Scour Safe"
      },
      {
        "label": "Application",
        "value": "Hand or Dual-Action Polisher"
      },
      {
        "label": "Origin",
        "value": "Meguiar's USA"
      }
    ],
    "applicationSteps": [
      "Wash and dry vehicle.",
      "Apply small amount to foam applicator or polishing pad.",
      "Work with overlapping circular motions.",
      "Wipe clean before product dries."
    ],
    "image": "/images/products/meguiars/meguiars-ultimate-compound.jpg",
    "detailRoute": "/products/meguiars-ultimate-compound-g17216",
    "sourceUrl": "https://meguiarsdirect.com/",
    "isVerified": true,
    "seoTitle": "Meguiar's Ultimate Compound G17216 | TMR Car Care Tiruppur",
    "seoDescription": "Meguiar's Ultimate Compound (G17216) at TMR Car Care. Remove scratches and oxidation safely by hand or machine.",
    "seoH1": "MEGUIAR'S ULTIMATE COMPOUND (G17216)",
    "relatedProductIds": [
      "meguiars-ultimate-polish",
      "meguiars-ultimate-quik-wax",
      "meguiars-gold-class-car-wash"
    ],
    "faqs": [
      {
        "q": "Is Meguiar's Ultimate Compound safe for clear coats?",
        "a": "Yes, its micro-abrasive formula is specifically engineered to be safe on all clear coats and glossy single-stage paints."
      },
      {
        "q": "Can it be applied by hand?",
        "a": "Yes, it works exceptionally well with a foam hand applicator pad for localized scratch removal."
      },
      {
        "q": "Should I wax the car after using Ultimate Compound?",
        "a": "Yes, compounding removes old wax, so follow with Ultimate Polish and Ultimate Wax for protection."
      },
      {
        "q": "Does it remove clear coat failure / peeling?",
        "a": "No, clear coat failure is structural delamination and requires repainting."
      }
    ]
  },
  {
    "id": "meguiars-ultimate-polish",
    "slug": "meguiars-ultimate-polish-g19216",
    "sku": "MEG-G19216",
    "name": "Meguiar's Ultimate Polish",
    "brand": "Meguiar's",
    "category": "POLISHING",
    "shortDescription": "Glaze-infused pre-wax polish that maximizes gloss, depth of color, and reflectivity on dark finishes.",
    "fullDescription": "Meguiar's Ultimate Polish (G19216) uses rich polishing oils to nourish automotive clear coats, eliminating fine swirls and producing deep wet reflections prior to waxing.",
    "specs": [
      {
        "label": "Part Number",
        "value": "G19216"
      },
      {
        "label": "Volume",
        "value": "15.2 oz / 450 ml"
      },
      {
        "label": "Function",
        "value": "Pre-Wax Glaze & Gloss Enhancer"
      },
      {
        "label": "Application",
        "value": "Hand or DA Machine"
      },
      {
        "label": "Origin",
        "value": "Meguiar's USA"
      }
    ],
    "applicationSteps": [
      "Apply 3-4 drops to foam polishing pad.",
      "Work gently in cross-hatch passes.",
      "Wipe off immediately while still wet with microfiber."
    ],
    "image": "/images/products/meguiars/meguiars-ultimate-polish.jpg",
    "detailRoute": "/products/meguiars-ultimate-polish-g19216",
    "sourceUrl": "https://meguiarsdirect.com/",
    "isVerified": true,
    "seoTitle": "Meguiar's Ultimate Polish G19216 | TMR Car Care Tiruppur",
    "seoDescription": "Meguiar's Ultimate Polish (G19216) at TMR Car Care. Rich polishing oils for maximum wet-look gloss on dark paint.",
    "seoH1": "MEGUIAR'S ULTIMATE POLISH (G19216)",
    "relatedProductIds": [
      "meguiars-ultimate-compound",
      "meguiars-hybrid-ceramic-wax",
      "meguiars-ultimate-quik-wax"
    ],
    "faqs": [
      {
        "q": "Should Ultimate Polish be allowed to dry to a haze?",
        "a": "No, wipe it off immediately while wet for effortless removal."
      },
      {
        "q": "What is the difference between Ultimate Compound and Ultimate Polish?",
        "a": "Ultimate Compound removes deeper scratches and defects; Ultimate Polish enriches optical depth, gloss, and color reflections."
      },
      {
        "q": "Is this a wax?",
        "a": "No, it is a pure polish. Follow with Meguiar's Ultimate Liquid Wax or Hybrid Ceramic Wax for protection."
      },
      {
        "q": "Does it work well on white cars?",
        "a": "Yes, it creates a crisp, mirror-like reflection on all paint colors."
      }
    ]
  },
  {
    "id": "meguiars-gold-class-car-wash",
    "slug": "meguiars-gold-class-car-wash-shampoo-conditioner",
    "sku": "MEG-G7164",
    "name": "Meguiar's Gold Class Car Wash Shampoo & Conditioner",
    "brand": "Meguiar's",
    "category": "CLEANING",
    "shortDescription": "Premium pH-balanced car wash shampoo that foams away dirt while conditioning paint with rich optical brighteners.",
    "fullDescription": "Meguiar's Gold Class Car Wash Shampoo & Conditioner (G7164) is formulated to clean and condition paint in one easy step. Its rich suds gently lift dirt without stripping existing wax or sealant protection.",
    "specs": [
      {
        "label": "Part Number",
        "value": "G7164"
      },
      {
        "label": "Volume",
        "value": "64 oz / 1.89 L"
      },
      {
        "label": "pH Balance",
        "value": "pH Neutral Wax Safe"
      },
      {
        "label": "Formula",
        "value": "Biodegradable Suds with Conditioners"
      },
      {
        "label": "Origin",
        "value": "Meguiar's USA"
      }
    ],
    "applicationSteps": [
      "Dilute 1 oz of shampoo per gallon of water in wash bucket.",
      "Rinse vehicle to remove loose grit.",
      "Wash vehicle using microfiber wash mitt from top to bottom.",
      "Rinse thoroughly and dry with plush microfiber drying towel."
    ],
    "image": "/images/products/meguiars/meguiars-gold-class-car-wash.jpg",
    "detailRoute": "/products/meguiars-gold-class-car-wash-shampoo-conditioner",
    "sourceUrl": "https://meguiarsdirect.com/",
    "isVerified": true,
    "seoTitle": "Meguiar's Gold Class Car Wash Shampoo & Conditioner | TMR Car Care",
    "seoDescription": "Meguiar's Gold Class Car Wash (G7164) at TMR Car Care Tiruppur. Premium pH-neutral foaming car wash shampoo.",
    "seoH1": "MEGUIAR'S GOLD CLASS CAR WASH SHAMPOO & CONDITIONER",
    "relatedProductIds": [
      "meguiars-ultimate-wash-and-wax",
      "meguiars-hot-rims-wheel-tire-cleaner",
      "meguiars-hybrid-ceramic-wax"
    ],
    "faqs": [
      {
        "q": "Can Meguiar's Gold Class Shampoo be used in a foam cannon?",
        "a": "Yes, it produces thick clinging foam in foam cannons and pressure washers."
      },
      {
        "q": "Will it strip existing wax or ceramic coatings?",
        "a": "No, its pH-neutral formula preserves waxes, sealants, and ceramic coatings."
      },
      {
        "q": "What makes the conditioner ingredients beneficial?",
        "a": "The conditioners sheet water off panels during rinsing, reducing drying time and preventing water spot formation."
      },
      {
        "q": "Is it safe on matte finishes?",
        "a": "For matte wraps or matte paint, a pure residue-free wash without gloss conditioners is recommended."
      }
    ]
  },
  {
    "id": "meguiars-ultimate-wash-and-wax",
    "slug": "meguiars-ultimate-wash-and-wax-g17748",
    "sku": "MEG-G17748",
    "name": "Meguiar's Ultimate Wash & Wax",
    "brand": "Meguiar's",
    "category": "CLEANING",
    "shortDescription": "Hybrid carnauba and synthetic polymer wash shampoo that cleans vehicle paint while boosting wax protection and shine.",
    "fullDescription": "Meguiar's Ultimate Wash & Wax (G17748) blends real carnauba wax and synthetic polymer technology to clean dirt and leave a freshly waxed high-gloss protective shine in every wash.",
    "specs": [
      {
        "label": "Part Number",
        "value": "G17748"
      },
      {
        "label": "Volume",
        "value": "48 oz / 1.42 L"
      },
      {
        "label": "Wax Ingredients",
        "value": "Carnauba + Synthetic Polymers"
      },
      {
        "label": "pH Balance",
        "value": "Neutral Wax-Boosting Formula"
      },
      {
        "label": "Origin",
        "value": "Meguiar's USA"
      }
    ],
    "applicationSteps": [
      "Mix 1 oz per gallon of water in bucket or foam gun.",
      "Wash vehicle panel by panel with microfiber mitt.",
      "Rinse panel to reveal instant water beading.",
      "Dry surface with microfiber towel."
    ],
    "image": "/images/products/meguiars/meguiars-ultimate-wash-and-wax.jpg",
    "detailRoute": "/products/meguiars-ultimate-wash-and-wax-g17748",
    "sourceUrl": "https://meguiarsdirect.com/",
    "isVerified": true,
    "seoTitle": "Meguiar's Ultimate Wash & Wax G17748 | TMR Car Care Tiruppur",
    "seoDescription": "Meguiar's Ultimate Wash & Wax (G17748) at TMR Car Care. Hybrid carnauba and polymer foaming car wash shampoo.",
    "seoH1": "MEGUIAR'S ULTIMATE WASH & WAX (G17748)",
    "relatedProductIds": [
      "meguiars-gold-class-car-wash",
      "meguiars-ultimate-quik-wax",
      "meguiars-hybrid-ceramic-wax"
    ],
    "faqs": [
      {
        "q": "Does Ultimate Wash & Wax replace regular waxing?",
        "a": "It extends and revitalizes your existing wax protection between regular waxing sessions."
      },
      {
        "q": "Does it leave water spots if dried in the sun?",
        "a": "Always wash in shade and dry promptly for a spotless high-gloss finish."
      },
      {
        "q": "Is it safe on ceramic coated cars?",
        "a": "Yes, safe on clear coats, vinyl, and ceramic coatings."
      },
      {
        "q": "Can it be used on glass?",
        "a": "Yes, it creates water beading on windshields and side glass."
      }
    ]
  },
  {
    "id": "meguiars-ultimate-quik-wax",
    "slug": "meguiars-ultimate-quik-wax-g200916",
    "sku": "MEG-G200916",
    "name": "Meguiar's Ultimate Quik Wax",
    "brand": "Meguiar's",
    "category": "PROTECTION",
    "shortDescription": "Hydrophobic polymer spray wax providing non-whitening shine and water beading on paint, trim, and glass.",
    "fullDescription": "Meguiar's Ultimate Quik Wax (G200916) features Hydrophobic Polymer Technology for relentless water beading and deep mirror shine. It can be applied in full sun and will not whiten plastic trim.",
    "specs": [
      {
        "label": "Part Number",
        "value": "G200916"
      },
      {
        "label": "Volume",
        "value": "24 oz / 709 ml"
      },
      {
        "label": "Technology",
        "value": "Hydrophobic Polymer Tech"
      },
      {
        "label": "Application",
        "value": "Sun or Shade / Wet or Dry"
      },
      {
        "label": "Origin",
        "value": "Meguiar's USA"
      }
    ],
    "applicationSteps": [
      "Shake well.",
      "Mist onto clean paint surface.",
      "Spread evenly with microfiber towel.",
      "Flip towel to dry side for final buff."
    ],
    "image": "/images/products/meguiars/meguiars-ultimate-quik-wax.jpg",
    "detailRoute": "/products/meguiars-ultimate-quik-wax-g200916",
    "sourceUrl": "https://meguiarsdirect.com/",
    "isVerified": true,
    "seoTitle": "Meguiar's Ultimate Quik Wax G200916 | TMR Car Care Tiruppur",
    "seoDescription": "Meguiar's Ultimate Quik Wax (G200916) at TMR Car Care. Hydrophobic polymer spray wax for deep shine and protection.",
    "seoH1": "MEGUIAR'S ULTIMATE QUIK WAX (G200916)",
    "relatedProductIds": [
      "meguiars-ultimate-polish",
      "meguiars-hybrid-ceramic-wax",
      "meguiars-gold-class-car-wash"
    ],
    "faqs": [
      {
        "q": "Can Ultimate Quik Wax be applied in direct sunlight?",
        "a": "Yes, its formula is engineered for application in direct sun without streaking or baking on."
      },
      {
        "q": "Will it leave white residue on plastic trim?",
        "a": "No, it is 100% non-whitening on black plastic moldings and rubber trim."
      },
      {
        "q": "Can it be used over ceramic coatings?",
        "a": "Yes, it acts as an excellent topper for maintaining ceramic coating slickness."
      },
      {
        "q": "How often should it be applied?",
        "a": "Apply every 2-4 weeks after regular car washes."
      }
    ]
  },
  {
    "id": "meguiars-hybrid-ceramic-wax",
    "slug": "meguiars-hybrid-ceramic-spray-wax-g190526",
    "sku": "MEG-G190526",
    "name": "Meguiar's Hybrid Ceramic Spray Wax",
    "brand": "Meguiar's",
    "category": "PROTECTION",
    "shortDescription": "Advanced SiO2 ceramic spray formula that bonds during water rinsing to deliver extreme water beading and protection.",
    "fullDescription": "Meguiar's Hybrid Ceramic Spray Wax (G190526) brings advanced SiO2 ceramic protection to a simple spray-and-rinse application. Water pressure bonds the ceramic layer to vehicle clear coat.",
    "specs": [
      {
        "label": "Part Number",
        "value": "G190526"
      },
      {
        "label": "Volume",
        "value": "26 oz / 768 ml"
      },
      {
        "label": "Chemistry",
        "value": "SiO2 Hybrid Ceramic Matrix"
      },
      {
        "label": "Application Method",
        "value": "Spray On, Rinse Off with Water"
      },
      {
        "label": "Origin",
        "value": "Meguiar's USA"
      }
    ],
    "applicationSteps": [
      "Wash car and rinse off soap.",
      "Spray Hybrid Ceramic Wax over wet vehicle panels.",
      "Rinse thoroughly starting from the roof down with strong water stream.",
      "Dry vehicle with microfiber drying towel."
    ],
    "image": "/images/products/meguiars/meguiars-hybrid-ceramic-wax.jpg",
    "detailRoute": "/products/meguiars-hybrid-ceramic-spray-wax-g190526",
    "sourceUrl": "https://meguiarsdirect.com/",
    "isVerified": true,
    "seoTitle": "Meguiar's Hybrid Ceramic Spray Wax G190526 | TMR Car Care Tiruppur",
    "seoDescription": "Meguiar's Hybrid Ceramic Spray Wax (G190526) at TMR Car Care. SiO2 ceramic protection with simple spray-and-rinse application.",
    "seoH1": "MEGUIAR'S HYBRID CERAMIC SPRAY WAX (G190526)",
    "relatedProductIds": [
      "meguiars-ultimate-wash-and-wax",
      "meguiars-ultimate-quik-wax",
      "meguiars-iron-decon-d1801"
    ],
    "faqs": [
      {
        "q": "How does spray-and-rinse ceramic wax work?",
        "a": "The water stream spreads and cures the SiO2 formula across the clear coat instantly."
      },
      {
        "q": "How long does Hybrid Ceramic Wax last?",
        "a": "Up to 3 to 6 months of durable hydrophobic protection per application."
      },
      {
        "q": "Is the first application different from maintenance?",
        "a": "For the very first application, spray and wipe dry with a microfiber to establish the base foundation."
      },
      {
        "q": "Is it safe on glass and trim?",
        "a": "Yes, safe on paint, glass, plastic trim, and wheels."
      }
    ]
  },
  {
    "id": "meguiars-gold-class-carnauba-plus-paste-wax",
    "slug": "meguiars-gold-class-carnauba-plus-premium-paste-wax",
    "sku": "MEG-G7014J",
    "name": "Meguiar's Gold Class Carnauba Plus Premium Paste Wax",
    "brand": "Meguiar's",
    "category": "PROTECTION",
    "shortDescription": "Traditional carnauba paste wax enriched with polymer sealants for deep warm reflections and paint nourishment.",
    "fullDescription": "Meguiar's Gold Class Carnauba Plus Premium Paste Wax (G7014J) blends pure carnauba with protecting polymers to create brilliant reflections and warm paint glow on dark vehicle colors.",
    "specs": [
      {
        "label": "Part Number",
        "value": "G7014J"
      },
      {
        "label": "Weight",
        "value": "11 oz / 311 g"
      },
      {
        "label": "Formula",
        "value": "Pure Carnauba + Synthetic Polymers"
      },
      {
        "label": "Included Accessory",
        "value": "Soft Foam Applicator Pad"
      },
      {
        "label": "Origin",
        "value": "Meguiar's USA"
      }
    ],
    "applicationSteps": [
      "Ensure surface is clean and cool.",
      "Apply thin, even coat using included foam applicator.",
      "Allow to dry to a light haze (3-5 minutes).",
      "Buff off with a clean microfiber towel."
    ],
    "image": "/images/products/meguiars/meguiars-gold-class-carnauba-plus-paste-wax.jpg",
    "detailRoute": "/products/meguiars-gold-class-carnauba-plus-premium-paste-wax",
    "sourceUrl": "https://meguiarsdirect.com/",
    "isVerified": true,
    "seoTitle": "Meguiar's Gold Class Carnauba Plus Paste Wax | TMR Car Care",
    "seoDescription": "Meguiar's Gold Class Carnauba Plus Paste Wax (G7014J) at TMR Car Care. Premium warm carnauba shine for luxury cars.",
    "seoH1": "MEGUIAR'S GOLD CLASS CARNAUBA PLUS PREMIUM PASTE WAX",
    "relatedProductIds": [
      "meguiars-gold-class-car-wash",
      "meguiars-ultimate-polish",
      "meguiars-quik-interior-detailer"
    ],
    "faqs": [
      {
        "q": "Why choose paste wax over liquid wax?",
        "a": "Paste wax creates unparalleled optical warmth and depth on dark automotive paints."
      },
      {
        "q": "How thin should paste wax be applied?",
        "a": "Apply as thin as possible for easiest buff-off and maximum optical clarity."
      },
      {
        "q": "How to perform the swipe test to check haze?",
        "a": "Swipe a clean fingertip across the waxed panel; if paint is clear underneath, it is ready to buff off."
      },
      {
        "q": "How long does carnauba paste wax last?",
        "a": "Typically 2 to 3 months under Indian weather conditions."
      }
    ]
  },
  {
    "id": "meguiars-hot-rims-wheel-tire-cleaner",
    "slug": "meguiars-hot-rims-wheel-tire-cleaner-g9524",
    "sku": "MEG-G9524",
    "name": "Meguiar's Hot Rims All Wheel & Tire Cleaner",
    "brand": "Meguiar's",
    "category": "CLEANING",
    "shortDescription": "Extreme cling foaming wheel cleaner designed to dissolve baked-on brake dust and road grime from all factory wheels.",
    "fullDescription": "Meguiar's Hot Rims All Wheel & Tire Cleaner (G9524) features Xtreme Cling foam that hangs on vertical wheel surfaces to break down heavy brake dust, road oil, and tire browning.",
    "specs": [
      {
        "label": "Part Number",
        "value": "G9524"
      },
      {
        "label": "Volume",
        "value": "24 oz / 709 ml"
      },
      {
        "label": "Cling Tech",
        "value": "Xtreme Cling High-Adhesion Foam"
      },
      {
        "label": "Wheel Safety",
        "value": "Safe on all Factory Coated Wheels"
      },
      {
        "label": "Origin",
        "value": "Meguiar's USA"
      }
    ],
    "applicationSteps": [
      "Ensure wheels and brakes are completely cool to the touch.",
      "Spray liberally over wheel and tire sidewall.",
      "Allow foam to dwell for 1-2 minutes.",
      "Agitate with wheel brush and rinse with pressure washer."
    ],
    "image": "/images/products/meguiars/meguiars-hot-rims-wheel-tire-cleaner.jpg",
    "detailRoute": "/products/meguiars-hot-rims-wheel-tire-cleaner-g9524",
    "sourceUrl": "https://meguiarsdirect.com/",
    "isVerified": true,
    "seoTitle": "Meguiar's Hot Rims Wheel & Tire Cleaner G9524 | TMR Car Care",
    "seoDescription": "Meguiar's Hot Rims Wheel & Tire Cleaner (G9524) at TMR Car Care. Clinging foam to dissolve baked brake dust and road grime.",
    "seoH1": "MEGUIAR'S HOT RIMS ALL WHEEL & TIRE CLEANER (G9524)",
    "relatedProductIds": [
      "meguiars-hot-shine-tire-spray",
      "meguiars-non-acid-wheel-cleaner-d143",
      "meguiars-gold-class-car-wash"
    ],
    "faqs": [
      {
        "q": "Can it be used on bare polished aluminum wheels?",
        "a": "For bare uncoated aluminum, use Meguiar's Hot Rims Aluminum Wheel Cleaner."
      },
      {
        "q": "Why must wheels be cool before application?",
        "a": "Hot brake rotors and wheels can cause cleaners to dry prematurely and stain finishes."
      },
      {
        "q": "Does it clean brown tire bloom?",
        "a": "Yes, it pulls browning and old tire dressings out of rubber sidewalls."
      },
      {
        "q": "Is agitation required?",
        "a": "For neglected wheels, light agitation with a soft wheel brush maximizes results."
      }
    ]
  },
  {
    "id": "meguiars-hot-shine-tire-spray",
    "slug": "meguiars-hot-shine-high-gloss-tire-spray-g12024",
    "sku": "MEG-G12024",
    "name": "Meguiar's Hot Shine High Gloss Tire Spray",
    "brand": "Meguiar's",
    "category": "PROTECTION",
    "shortDescription": "High-gloss tire spray enriched with silicone polymers and UV blockers to prevent cracking and browning.",
    "fullDescription": "Meguiar's Hot Shine Tire Spray (G12024) delivers deep, wet-look black tires while conditioning rubber with premium anti-ozonants that fight browning and weather aging.",
    "specs": [
      {
        "label": "Part Number",
        "value": "G12024"
      },
      {
        "label": "Volume",
        "value": "24 oz / 709 ml"
      },
      {
        "label": "Finish",
        "value": "High-Gloss Wet Black"
      },
      {
        "label": "Protection",
        "value": "Anti-Ozonant UV Guard"
      },
      {
        "label": "Origin",
        "value": "Meguiar's USA"
      }
    ],
    "applicationSteps": [
      "Clean tire sidewall with wheel cleaner and dry.",
      "Hold spray 4-6 inches from tire and spray evenly.",
      "Wipe off any overspray on wheels.",
      "Allow 10 minutes to dry to avoid sling."
    ],
    "image": "/images/products/meguiars/meguiars-hot-shine-tire-spray.jpg",
    "detailRoute": "/products/meguiars-hot-shine-high-gloss-tire-spray-g12024",
    "sourceUrl": "https://meguiarsdirect.com/",
    "isVerified": true,
    "seoTitle": "Meguiar's Hot Shine High Gloss Tire Spray G12024 | TMR Car Care",
    "seoDescription": "Meguiar's Hot Shine Tire Spray (G12024) at TMR Car Care. High-gloss wet tire shine with anti-browning protection.",
    "seoH1": "MEGUIAR'S HOT SHINE HIGH GLOSS TIRE SPRAY (G12024)",
    "relatedProductIds": [
      "meguiars-hot-rims-wheel-tire-cleaner",
      "meguiars-hyper-dressing-d170",
      "meguiars-gold-class-car-wash"
    ],
    "faqs": [
      {
        "q": "How do you prevent tire sling?",
        "a": "Apply to clean, dry tires and wipe excess with an applicator sponge before driving."
      },
      {
        "q": "Can it be used on interior plastics?",
        "a": "No, this formula is engineered for exterior tires. Use Quik Interior Detailer for interior surfaces."
      },
      {
        "q": "How does it protect against tire browning?",
        "a": "Advanced anti-ozonants protect tire rubber polymers from UV degradation and oxidation."
      },
      {
        "q": "How long does the wet shine last?",
        "a": "Typically 2 to 3 weeks of high gloss."
      }
    ]
  },
  {
    "id": "meguiars-quik-interior-detailer",
    "slug": "meguiars-quik-interior-detailer-g13616",
    "sku": "MEG-G13616",
    "name": "Meguiar's Quik Interior Detailer Cleaner",
    "brand": "Meguiar's",
    "category": "CLEANING",
    "shortDescription": "Gentle daily interior cleaner and UV protector safe on screens, leather, vinyl, plastics, and steering wheels.",
    "fullDescription": "Meguiar's Quik Interior Detailer (G13616) safely cleans and restores the natural OEM satin look of all interior surfaces while adding sun-blocking UV protection without greasiness.",
    "specs": [
      {
        "label": "Part Number",
        "value": "G13616"
      },
      {
        "label": "Volume",
        "value": "16 oz / 473 ml"
      },
      {
        "label": "Finish",
        "value": "Original Matte / Satin Non-Greasy"
      },
      {
        "label": "Safety",
        "value": "Safe on Infotainment Touchscreens"
      },
      {
        "label": "Origin",
        "value": "Meguiar's USA"
      }
    ],
    "applicationSteps": [
      "Spray onto a microfiber detailing towel.",
      "Gently wipe dashboard, console, door panels, and screens.",
      "Flip towel to dry side and buff clean."
    ],
    "image": "/images/products/meguiars/meguiars-quik-interior-detailer.jpg",
    "detailRoute": "/products/meguiars-quik-interior-detailer-g13616",
    "sourceUrl": "https://meguiarsdirect.com/",
    "isVerified": true,
    "seoTitle": "Meguiar's Quik Interior Detailer Cleaner G13616 | TMR Car Care",
    "seoDescription": "Meguiar's Quik Interior Detailer (G13616) at TMR Car Care. OEM matte interior cleaner safe on touchscreens and leather.",
    "seoH1": "MEGUIAR'S QUIK INTERIOR DETAILER CLEANER (G13616)",
    "relatedProductIds": [
      "meguiars-gold-class-leather-spray",
      "meguiars-perfect-clarity-glass-cleaner",
      "meguiars-hyper-dressing-d170"
    ],
    "faqs": [
      {
        "q": "Is Quik Interior Detailer safe on navigation touchscreens?",
        "a": "Yes, its mild formula safely cleans infotainment screens without damage or residue."
      },
      {
        "q": "Does it leave a greasy glare on the dashboard?",
        "a": "No, it preserves the factory matte/satin finish with zero glare or stickiness."
      },
      {
        "q": "Does it have a fragrance?",
        "a": "It leaves a clean, fresh pleasant scent."
      },
      {
        "q": "Can it be used on steering wheels?",
        "a": "Yes, it leaves no slippery residue on leather or textured steering wheels."
      }
    ]
  },
  {
    "id": "meguiars-gold-class-leather-spray",
    "slug": "meguiars-gold-class-rich-leather-3-in-1-spray",
    "sku": "MEG-G10916",
    "name": "Meguiar's Gold Class Rich Leather 3-in-1 Spray",
    "brand": "Meguiar's",
    "category": "PROTECTION",
    "shortDescription": "Premium 3-in-1 formula that cleans, conditions, and protects automotive leather with aloe and UV blockers.",
    "fullDescription": "Meguiar's Gold Class Rich Leather 3-in-1 Spray (G10916) combines gentle cleaners, rich aloe conditioners, and UV blocking polymers to keep leather soft, supple, and protected against premature aging.",
    "specs": [
      {
        "label": "Part Number",
        "value": "G10916"
      },
      {
        "label": "Volume",
        "value": "15.2 oz / 450 ml"
      },
      {
        "label": "Formula",
        "value": "Aloe Conditioner + UV Guard"
      },
      {
        "label": "Finish",
        "value": "Soft Supple Satin"
      },
      {
        "label": "Origin",
        "value": "Meguiar's USA"
      }
    ],
    "applicationSteps": [
      "Shake bottle well.",
      "Spray onto microfiber applicator pad.",
      "Work evenly into leather seats and bolsters.",
      "Buff lightly with a clean microfiber towel."
    ],
    "image": "/images/products/meguiars/meguiars-gold-class-leather-spray.jpg",
    "detailRoute": "/products/meguiars-gold-class-rich-leather-3-in-1-spray",
    "sourceUrl": "https://meguiarsdirect.com/",
    "isVerified": true,
    "seoTitle": "Meguiar's Gold Class Rich Leather 3-in-1 Spray G10916 | TMR Car Care",
    "seoDescription": "Meguiar's Gold Class Rich Leather Spray (G10916) at TMR Car Care. Premium leather cleaner, conditioner, and UV protector.",
    "seoH1": "MEGUIAR'S GOLD CLASS RICH LEATHER 3-IN-1 SPRAY",
    "relatedProductIds": [
      "meguiars-quik-interior-detailer",
      "meguiars-perfect-clarity-glass-cleaner",
      "meguiars-gold-class-car-wash"
    ],
    "faqs": [
      {
        "q": "Can it be used on perforated leather seats?",
        "a": "Yes, spray onto the applicator cloth rather than directly onto perforated leather to prevent clogging holes."
      },
      {
        "q": "Does it prevent leather cracking?",
        "a": "Yes, natural oils and aloe maintain leather moisture and elasticity against sun drying."
      },
      {
        "q": "Is it safe on vinyl seats?",
        "a": "Yes, safe and effective on genuine leather, faux leather, and vinyl."
      },
      {
        "q": "How often should leather be conditioned?",
        "a": "Every 6 to 8 weeks for optimal softness."
      }
    ]
  },
  {
    "id": "meguiars-perfect-clarity-glass-cleaner",
    "slug": "meguiars-perfect-clarity-glass-cleaner-g8224",
    "sku": "MEG-G8224",
    "name": "Meguiar's Perfect Clarity Glass Cleaner",
    "brand": "Meguiar's",
    "category": "CLEANING",
    "shortDescription": "Professional anti-hazing glass cleaner that stays clean longer with dust and water repellency.",
    "fullDescription": "Meguiar's Perfect Clarity Glass Cleaner (G8224) spreads and wipes off quickly with superior cleaning ability to tackle bug splatter, tree sap, and smoker film with zero streaks.",
    "specs": [
      {
        "label": "Part Number",
        "value": "G8224"
      },
      {
        "label": "Volume",
        "value": "24 oz / 709 ml"
      },
      {
        "label": "Tint Safe",
        "value": "100% Ammonia-Free"
      },
      {
        "label": "Anti-Dust Tech",
        "value": "Dust Repellent Hydrophobic Finish"
      },
      {
        "label": "Origin",
        "value": "Meguiar's USA"
      }
    ],
    "applicationSteps": [
      "Spray lightly onto exterior or interior glass.",
      "Wipe with folded microfiber glass towel.",
      "Flip to dry side for crystal-clear finish."
    ],
    "image": "/images/products/meguiars/meguiars-perfect-clarity-glass-cleaner.jpg",
    "detailRoute": "/products/meguiars-perfect-clarity-glass-cleaner-g8224",
    "sourceUrl": "https://meguiarsdirect.com/",
    "isVerified": true,
    "seoTitle": "Meguiar's Perfect Clarity Glass Cleaner G8224 | TMR Car Care",
    "seoDescription": "Meguiar's Perfect Clarity Glass Cleaner (G8224) at TMR Car Care. Professional streak-free glass cleaner.",
    "seoH1": "MEGUIAR'S PERFECT CLARITY GLASS CLEANER (G8224)",
    "relatedProductIds": [
      "meguiars-quik-interior-detailer",
      "meguiars-gold-class-car-wash",
      "meguiars-ultimate-quik-wax"
    ],
    "faqs": [
      {
        "q": "Is Meguiar's Perfect Clarity safe on window tint?",
        "a": "Yes, it contains no ammonia and is 100% safe on aftermarket window films."
      },
      {
        "q": "How does it prevent interior fogging?",
        "a": "It removes oily polymer off-gassing that causes hazy glare on windshields."
      },
      {
        "q": "Can it be used in direct sunlight?",
        "a": "Yes, its anti-hazing formula resists flash drying."
      },
      {
        "q": "Can it be used on home mirrors and windows?",
        "a": "Yes, excellent for automotive and residential glass."
      }
    ]
  },
  {
    "id": "meguiars-hyper-wash-d110",
    "slug": "meguiars-professional-hyper-wash-d110",
    "sku": "MEG-DRTU11032",
    "name": "Meguiar's Professional Hyper Wash D110",
    "brand": "Meguiar's",
    "category": "CLEANING",
    "shortDescription": "Super-concentrated 400:1 high-foaming professional car wash shampoo for foam cannons and wash bays.",
    "fullDescription": "Meguiar's Professional Hyper Wash D110 produces dense, rich, clinging foam with an exceptional 400:1 dilution ratio, safely lifting dirt without stripping wax or sealant coatings.",
    "specs": [
      {
        "label": "Part Number",
        "value": "D110 / DRTU11032"
      },
      {
        "label": "Dilution Ratio",
        "value": "400:1 Ultra Concentrate"
      },
      {
        "label": "Volume",
        "value": "32 oz RTU / 1 Gal Concentrate"
      },
      {
        "label": "Foam Cannon Ready",
        "value": "Yes, Dense Clinging Suds"
      },
      {
        "label": "Origin",
        "value": "Meguiar's USA"
      }
    ],
    "applicationSteps": [
      "Dilute 1 pump per 5 gallons water or 2 oz in foam cannon.",
      "Coat entire vehicle in thick foam blanket.",
      "Allow 3 minutes dwell time.",
      "Rinse clean with pressure washer."
    ],
    "image": "/images/products/meguiars/meguiars-hyper-wash-d110.jpg",
    "detailRoute": "/products/meguiars-professional-hyper-wash-d110",
    "sourceUrl": "https://meguiarsdirect.com/",
    "isVerified": true,
    "seoTitle": "Meguiar's Professional Hyper Wash D110 | TMR Car Care Tiruppur",
    "seoDescription": "Meguiar's Professional Hyper Wash D110 at TMR Car Care. 400:1 high-foaming pH neutral wash shampoo.",
    "seoH1": "MEGUIAR'S PROFESSIONAL HYPER WASH D110",
    "relatedProductIds": [
      "meguiars-non-acid-wheel-cleaner-d143",
      "meguiars-hyper-dressing-d170",
      "meguiars-iron-decon-d1801"
    ],
    "faqs": [
      {
        "q": "What is the dilution ratio of Hyper Wash D110?",
        "a": "An incredible 400:1, making it one of the most economical professional car wash soaps available."
      },
      {
        "q": "Is Hyper Wash safe on ceramic coatings?",
        "a": "Yes, it is 100% pH neutral and free of wax, leaving ceramic surfaces clean and hydrophobic."
      },
      {
        "q": "Can it be used through automated pressure systems?",
        "a": "Yes, fully compatible with commercial proportioners and foam cannons."
      },
      {
        "q": "Is the formula biodegradable?",
        "a": "Yes, environmentally friendly and body shop safe."
      }
    ]
  },
  {
    "id": "meguiars-non-acid-wheel-cleaner-d143",
    "slug": "meguiars-professional-non-acid-wheel-and-tire-cleaner-d143",
    "sku": "MEG-DRTU14332",
    "name": "Meguiar's Professional Non-Acid Wheel & Tire Cleaner D143",
    "brand": "Meguiar's",
    "category": "CLEANING",
    "shortDescription": "Professional-grade non-acid wheel cleaner that safely dissolves heavy brake dust and tire grime.",
    "fullDescription": "Meguiar's Professional Non-Acid Wheel & Tire Cleaner D143 delivers aggressive cleaning performance on brake dust and road grime without harsh acids, making it safe for clear coated wheels.",
    "specs": [
      {
        "label": "Part Number",
        "value": "D143 / DRTU14332"
      },
      {
        "label": "Volume",
        "value": "32 oz RTU / 1 Gal"
      },
      {
        "label": "Type",
        "value": "Non-Acid High Alkaline Cleaner"
      },
      {
        "label": "Safety",
        "value": "Safe on Painted & Clear Coated Alloys"
      },
      {
        "label": "Origin",
        "value": "Meguiar's USA"
      }
    ],
    "applicationSteps": [
      "Spray onto cool wheels and tire sidewalls.",
      "Allow 1 minute dwell time.",
      "Agitate with wheel brushes.",
      "Rinse thoroughly with high-pressure water."
    ],
    "image": "/images/products/meguiars/meguiars-non-acid-wheel-cleaner-d143.jpg",
    "detailRoute": "/products/meguiars-professional-non-acid-wheel-and-tire-cleaner-d143",
    "sourceUrl": "https://meguiarsdirect.com/",
    "isVerified": true,
    "seoTitle": "Meguiar's Professional Non-Acid Wheel Cleaner D143 | TMR Car Care",
    "seoDescription": "Meguiar's D143 Non-Acid Wheel Cleaner at TMR Car Care. Professional wheel and tire cleaner safe on clear coat.",
    "seoH1": "MEGUIAR'S PROFESSIONAL NON-ACID WHEEL CLEANER D143",
    "relatedProductIds": [
      "meguiars-hyper-dressing-d170",
      "meguiars-iron-decon-d1801",
      "meguiars-hyper-wash-d110"
    ],
    "faqs": [
      {
        "q": "Why is a non-acid wheel cleaner preferred?",
        "a": "It avoids damaging brake calipers, rotor hats, and clear coated alloy wheels compared to harsh acid cleaners."
      },
      {
        "q": "Does D143 clean brown tires?",
        "a": "Yes, it strips road oils and silicone residues from rubber sidewalls."
      },
      {
        "q": "Can it be diluted?",
        "a": "Concentrate can be diluted 2:1 for heavy duty or 4:1 for light duty."
      },
      {
        "q": "Is it safe on chrome wheels?",
        "a": "Yes, safe on OEM painted, clear coated, and chrome wheels when used as directed."
      }
    ]
  },
  {
    "id": "meguiars-hyper-dressing-d170",
    "slug": "meguiars-professional-hyper-dressing-d170",
    "sku": "MEG-DRTU17032",
    "name": "Meguiar's Professional Hyper Dressing D170",
    "brand": "Meguiar's",
    "category": "PROTECTION",
    "shortDescription": "Water-based dressing featuring four customizable shine levels for engine bays, tires, wheel wells, and plastic trim.",
    "fullDescription": "Meguiar's Professional Hyper Dressing D170 is a versatile water-based dressing that produces customizable gloss from high shine to OEM satin by varying dilution with water.",
    "specs": [
      {
        "label": "Part Number",
        "value": "D170 / DRTU17032"
      },
      {
        "label": "Volume",
        "value": "32 oz RTU / 1 Gal"
      },
      {
        "label": "Base",
        "value": "Water-Based Silicone Emulsion"
      },
      {
        "label": "Versatility",
        "value": "4 Gloss Levels (1:1 to 4:1)"
      },
      {
        "label": "Origin",
        "value": "Meguiar's USA"
      }
    ],
    "applicationSteps": [
      "Dilute according to desired gloss (1:1 high gloss, 4:1 natural satin).",
      "Spray evenly onto engine bay, wheel wells, or tires.",
      "Allow to dry naturally or wipe with microfiber."
    ],
    "image": "/images/products/meguiars/meguiars-hyper-dressing-d170.jpg",
    "detailRoute": "/products/meguiars-professional-hyper-dressing-d170",
    "sourceUrl": "https://meguiarsdirect.com/",
    "isVerified": true,
    "seoTitle": "Meguiar's Professional Hyper Dressing D170 | TMR Car Care Tiruppur",
    "seoDescription": "Meguiar's D170 Hyper Dressing at TMR Car Care. Water-based engine, tire, and trim dressing with customizable gloss.",
    "seoH1": "MEGUIAR'S PROFESSIONAL HYPER DRESSING D170",
    "relatedProductIds": [
      "meguiars-non-acid-wheel-cleaner-d143",
      "meguiars-hyper-wash-d110",
      "meguiars-iron-decon-d1801"
    ],
    "faqs": [
      {
        "q": "What are the dilution ratios for Hyper Dressing?",
        "a": "1:1 for High Gloss, 2:1 for Medium Gloss, 3:1 for Satin, and 4:1 for Natural Finish."
      },
      {
        "q": "Is Hyper Dressing safe in engine bays?",
        "a": "Yes, its water-based formula is safe on engine hoses, plastics, and wiring harnesses."
      },
      {
        "q": "Does it attract dust?",
        "a": "No, because it is water-based, it dries non-sticky and will not attract road dust."
      },
      {
        "q": "Can it be applied to wet surfaces?",
        "a": "Yes, spray directly over wet engine compartments after washing."
      }
    ]
  },
  {
    "id": "meguiars-iron-decon-d1801",
    "slug": "meguiars-professional-wheel-and-paint-iron-decon-d1801",
    "sku": "MEG-D180101",
    "name": "Meguiar's Professional Wheel & Paint Iron Decon D1801",
    "brand": "Meguiar's",
    "category": "CLEANING",
    "shortDescription": "Color-changing iron fallout remover that dissolves embedded brake dust and ferrous contamination on paint and wheels.",
    "fullDescription": "Meguiar's Professional Wheel & Paint Iron Decon D1801 turns purple as it chemically dissolves embedded iron fallout, industrial contamination, and brake dust without abrasive rubbing.",
    "specs": [
      {
        "label": "Part Number",
        "value": "D180101"
      },
      {
        "label": "Volume",
        "value": "1 Gallon / 3.78 L"
      },
      {
        "label": "Reaction",
        "value": "Turns Purple on Iron Contact"
      },
      {
        "label": "pH Balance",
        "value": "pH Neutral Paint Safe"
      },
      {
        "label": "Origin",
        "value": "Meguiar's USA"
      }
    ],
    "applicationSteps": [
      "Wash and rinse vehicle.",
      "Spray Iron Decon across wheels and lower paint panels.",
      "Wait 3-5 minutes as product turns deep purple.",
      "Rinse thoroughly before product dries on surface."
    ],
    "image": "/images/products/meguiars/meguiars-iron-decon-d1801.jpg",
    "detailRoute": "/products/meguiars-professional-wheel-and-paint-iron-decon-d1801",
    "sourceUrl": "https://meguiarsdirect.com/",
    "isVerified": true,
    "seoTitle": "Meguiar's Professional Iron Decon D1801 | TMR Car Care Tiruppur",
    "seoDescription": "Meguiar's D1801 Iron Decon at TMR Car Care. Color-changing pH neutral iron fallout remover for paint and wheels.",
    "seoH1": "MEGUIAR'S PROFESSIONAL WHEEL & PAINT IRON DECON D1801",
    "relatedProductIds": [
      "meguiars-non-acid-wheel-cleaner-d143",
      "meguiars-hyper-wash-d110",
      "meguiars-m110-pro-speed-compound"
    ],
    "faqs": [
      {
        "q": "Why does Iron Decon turn purple?",
        "a": "The active chemical reaction with ferrous iron particles produces a water-soluble purple complex that rinses away easily."
      },
      {
        "q": "Is Iron Decon safe on clear coat?",
        "a": "Yes, its pH-neutral formula is safe on automotive paint, wheels, and glass."
      },
      {
        "q": "Should it be used before claying?",
        "a": "Yes, using Iron Decon first dissolves sharp metal particles, reducing paint marring during clay bar decontamination."
      },
      {
        "q": "Can it be used on painted brake calipers?",
        "a": "Yes, safe on factory painted calipers."
      }
    ]
  },
  {
    "id": "wurth-active-glass-cleaner",
    "slug": "wurth-active-glass-foam-cleaner",
    "sku": "Art. 089025",
    "name": "W\u00fcrth Active Glass Foam Cleaner",
    "brand": "W\u00fcrth",
    "category": "CLEANING",
    "shortDescription": "High-cling foaming aerosol cleaner designed for streak-free cleaning of windshields, mirrors, and vehicle glass.",
    "fullDescription": "W\u00fcrth Active Glass Foam Cleaner (Art. 089025) provides 20x yield through micro-foam technology. It clings to vertical glass surfaces to dissolve insects, nicotine film, silicone, and road dust without streaks.",
    "specs": [
      {
        "label": "Article Number",
        "value": "0890 25"
      },
      {
        "label": "Volume",
        "value": "500 ml Aerosol"
      },
      {
        "label": "Properties",
        "value": "Silicone & AOX-Free"
      },
      {
        "label": "Compatibility",
        "value": "Glass, Tint, Mirrors, Polycarbonate"
      },
      {
        "label": "Origin",
        "value": "W\u00fcrth Germany"
      }
    ],
    "applicationSteps": [
      "Shake aerosol can well.",
      "Spray evenly from 20-30 cm away.",
      "Allow foam to break down dirt for 30 seconds.",
      "Wipe clean with a lint-free glass microfiber cloth."
    ],
    "image": "/images/products/wurth/wurth-active-glass-cleaner.jpg",
    "detailRoute": "/products/wurth-active-glass-foam-cleaner",
    "sourceUrl": "https://www.wuerth.in/",
    "isVerified": true,
    "seoTitle": "W\u00fcrth Active Glass Foam Cleaner Art. 089025 | TMR Car Care Tiruppur",
    "seoDescription": "W\u00fcrth Active Glass Cleaner (Art. 089025) at TMR Car Care Tiruppur. German high-cling foaming streak-free glass cleaner.",
    "seoH1": "W\u00dcRTH ACTIVE GLASS FOAM CLEANER (ART. 089025)",
    "relatedProductIds": [
      "wurth-cockpit-spray",
      "wurth-auto-shampoo",
      "wurth-microfibre-polishing-cloth"
    ],
    "faqs": [
      {
        "q": "What makes W\u00fcrth Active Glass Cleaner unique?",
        "a": "Its stable micro-foam formula prevents runoff on vertical automotive glass, allowing active solvents to dissolve stubborn insect residue and nicotine film."
      },
      {
        "q": "Is it safe on tinted windows?",
        "a": "Yes, it contains no harsh ammonia or abrasives and is completely safe on aftermarket window films."
      },
      {
        "q": "Does it leave streaks in direct sunlight?",
        "a": "Its fast flash-off formula provides streak-free clarity when wiped with a clean microfiber."
      },
      {
        "q": "Can it be used on polycarbonate headlights?",
        "a": "Yes, safe on glass, mirrors, acrylics, and polycarbonate lenses."
      }
    ]
  },
  {
    "id": "wurth-brake-cleaner-plus",
    "slug": "wurth-brake-and-parts-cleaner-plus",
    "sku": "Art. 08901087",
    "name": "W\u00fcrth Brake & Parts Cleaner Plus",
    "brand": "W\u00fcrth",
    "category": "CLEANING",
    "shortDescription": "Fast-evaporating acetone-free cleaner for degreasing brake assemblies, clutch parts, and engine components.",
    "fullDescription": "W\u00fcrth Brake & Parts Cleaner Plus (Art. 08901087) rapidly dissolves oil, grease, brake fluid, and road grime without leaving residue. It is acetone-free and safe for surrounding paints, rubber, and plastics.",
    "specs": [
      {
        "label": "Article Number",
        "value": "0890 1087"
      },
      {
        "label": "Volume",
        "value": "500 ml Aerosol"
      },
      {
        "label": "Chemical Base",
        "value": "Naphtha Solvent Blend"
      },
      {
        "label": "Properties",
        "value": "Acetone-Free & Silicone-Free"
      },
      {
        "label": "Origin",
        "value": "W\u00fcrth Germany"
      }
    ],
    "applicationSteps": [
      "Spray contaminated brake or mechanical parts generously.",
      "Allow solvent to dissolve grease and flush away deposits.",
      "Wipe with clean shop cloth or allow to air dry completely."
    ],
    "image": "/images/products/wurth/wurth-brake-cleaner-plus.jpg",
    "detailRoute": "/products/wurth-brake-and-parts-cleaner-plus",
    "sourceUrl": "https://www.wuerth.in/",
    "isVerified": true,
    "seoTitle": "W\u00fcrth Brake & Parts Cleaner Plus Art. 08901087 | TMR Car Care",
    "seoDescription": "W\u00fcrth Brake Cleaner Plus (Art. 08901087) at TMR Car Care. Professional acetone-free fast-drying degreaser.",
    "seoH1": "W\u00dcRTH BRAKE & PARTS CLEANER PLUS (ART. 08901087)",
    "relatedProductIds": [
      "wurth-rost-off-penetrant",
      "wurth-auto-shampoo",
      "wurth-tyre-foam-spray"
    ],
    "faqs": [
      {
        "q": "Why is an acetone-free brake cleaner essential?",
        "a": "Acetone damages rubber dust boots, O-rings, painted calipers, and sensitive plastics. W\u00fcrth's acetone-free formula protects these components."
      },
      {
        "q": "How fast does it evaporate?",
        "a": "It flashes off completely within seconds, leaving zero oily or chemical residue."
      },
      {
        "q": "Can it be used to degrease engine parts during detailing?",
        "a": "Yes, excellent for cleaning metal linkages, brake calipers, and wheel hubs prior to ceramic coating."
      },
      {
        "q": "Is it flammable?",
        "a": "Yes, aerosol solvent blends are flammable and should be used away from open flames."
      }
    ]
  },
  {
    "id": "wurth-cockpit-spray",
    "slug": "wurth-cockpit-cleaning-and-care-spray",
    "sku": "Art. 08902221",
    "name": "W\u00fcrth Cockpit Cleaning & Care Spray",
    "brand": "W\u00fcrth",
    "category": "CLEANING",
    "shortDescription": "Interior dashboard and trim care spray that cleans, conditions, and leaves an anti-static satin finish.",
    "fullDescription": "W\u00fcrth Cockpit Cleaning & Care Spray (Art. 08902221) cleans vehicle interior plastics, door cards, and dashboards in a single step. It leaves a silk-matte finish with anti-static protection against dust settling.",
    "specs": [
      {
        "label": "Article Number",
        "value": "0890 2221"
      },
      {
        "label": "Volume",
        "value": "400 ml Aerosol"
      },
      {
        "label": "Fragrance",
        "value": "Fresh Citrus Scent"
      },
      {
        "label": "Properties",
        "value": "Silicone-Free Anti-Static Finish"
      },
      {
        "label": "Origin",
        "value": "W\u00fcrth Germany"
      }
    ],
    "applicationSteps": [
      "Spray directly onto microfiber cloth.",
      "Wipe evenly across dashboard, door trims, and console.",
      "Allow to dry to an OEM satin luster."
    ],
    "image": "/images/products/wurth/wurth-cockpit-spray.jpg",
    "detailRoute": "/products/wurth-cockpit-cleaning-and-care-spray",
    "sourceUrl": "https://www.wuerth.in/",
    "isVerified": true,
    "seoTitle": "W\u00fcrth Cockpit Cleaning & Care Spray Art. 08902221 | TMR Car Care",
    "seoDescription": "W\u00fcrth Cockpit Care Spray (Art. 08902221) at TMR Car Care. Anti-static dashboard and plastic interior detailer.",
    "seoH1": "W\u00dcRTH COCKPIT CLEANING & CARE SPRAY (ART. 08902221)",
    "relatedProductIds": [
      "wurth-active-glass-cleaner",
      "wurth-rubber-care-spray",
      "wurth-leather-care-lotion"
    ],
    "faqs": [
      {
        "q": "Does W\u00fcrth Cockpit Spray produce a sticky or reflective glare?",
        "a": "No, it dries to a refined silk-matte OEM finish with zero glare on the windshield."
      },
      {
        "q": "What is the anti-static effect?",
        "a": "It neutralizes electrical charges on plastic surfaces to repel airborne dust and lint."
      },
      {
        "q": "Can it be sprayed onto glass?",
        "a": "Avoid spraying on glass; if overspray occurs, wipe clean with W\u00fcrth Active Glass Cleaner."
      },
      {
        "q": "Is it safe on rubber door seals?",
        "a": "Yes, but for dedicated rubber seal protection, W\u00fcrth Rubber Care Spray is recommended."
      }
    ]
  },
  {
    "id": "wurth-rubber-care-spray",
    "slug": "wurth-rubber-care-silicone-free-spray",
    "sku": "Art. 0890110",
    "name": "W\u00fcrth Rubber Care Silicone-Free Spray",
    "brand": "W\u00fcrth",
    "category": "PROTECTION",
    "shortDescription": "Conditioning spray for vehicle door seals and weatherstripping that prevents freezing, cracking, and squeaks.",
    "fullDescription": "W\u00fcrth Rubber Care Spray (Art. 0890110) maintains rubber flexibility, protects against weather aging, and keeps door seals supple to prevent wind noise, water leaks, and sticking.",
    "specs": [
      {
        "label": "Article Number",
        "value": "0890 110"
      },
      {
        "label": "Volume",
        "value": "300 ml Aerosol"
      },
      {
        "label": "Base",
        "value": "Special Conditioning Formulation"
      },
      {
        "label": "Properties",
        "value": "Resists Washing Off & Freezing"
      },
      {
        "label": "Origin",
        "value": "W\u00fcrth Germany"
      }
    ],
    "applicationSteps": [
      "Clean door rubber weatherstripping with a damp microfiber.",
      "Spray evenly onto rubber seals or onto an applicator sponge.",
      "Rub into the seal profile and wipe off excess."
    ],
    "image": "/images/products/wurth/wurth-rubber-care-spray.jpg",
    "detailRoute": "/products/wurth-rubber-care-silicone-free-spray",
    "sourceUrl": "https://www.wuerth.in/",
    "isVerified": true,
    "seoTitle": "W\u00fcrth Rubber Care Spray Art. 0890110 | TMR Car Care Tiruppur",
    "seoDescription": "W\u00fcrth Rubber Care Spray (Art. 0890110) at TMR Car Care. Protects door seals, sunroof gaskets, and weatherstrips.",
    "seoH1": "W\u00dcRTH RUBBER CARE SILICONE-FREE SPRAY (ART. 0890110)",
    "relatedProductIds": [
      "wurth-cockpit-spray",
      "wurth-leather-care-lotion",
      "wurth-active-glass-cleaner"
    ],
    "faqs": [
      {
        "q": "Why is rubber care maintenance important on modern cars?",
        "a": "Sunlight and ozone cause door seals to harden, crack, and shrink, leading to cabin wind noise and water leaks."
      },
      {
        "q": "Does it prevent doors from sticking in cold weather?",
        "a": "Yes, it stops rubber gaskets from freezing and tearing against door frames."
      },
      {
        "q": "Can it be used on sunroof seals?",
        "a": "Yes, it eliminates squeaks and keeps panoramic sunroof rubber seals watertight."
      },
      {
        "q": "How often should rubber seals be treated?",
        "a": "Treat all vehicle door and trunk rubber seals every 3 to 4 months."
      }
    ]
  },
  {
    "id": "wurth-auto-shampoo",
    "slug": "wurth-auto-shampoo-concentrated-wash",
    "sku": "Art. 0893012",
    "name": "W\u00fcrth Auto Shampoo Concentrated Wash",
    "brand": "W\u00fcrth",
    "category": "CLEANING",
    "shortDescription": "Concentrated pH-neutral automotive shampoo that foams away road grime while protecting clear coat and wax.",
    "fullDescription": "W\u00fcrth Auto Shampoo Concentrated Wash (Art. 0893012) delivers high-foaming lubrication that encapsulates abrasive grit particles, preventing wash swirls on vehicle paintwork.",
    "specs": [
      {
        "label": "Article Number",
        "value": "0893 012"
      },
      {
        "label": "Volume",
        "value": "1000 ml / 1 L"
      },
      {
        "label": "pH Balance",
        "value": "Neutral pH Safe on All Paints"
      },
      {
        "label": "Concentrate",
        "value": "High Yield Concentrated Formula"
      },
      {
        "label": "Origin",
        "value": "W\u00fcrth Germany"
      }
    ],
    "applicationSteps": [
      "Dilute 50 ml of shampoo in 10 liters of warm water.",
      "Rinse car with water to loosen surface dirt.",
      "Wash car from top to bottom with a microfiber mitt.",
      "Rinse thoroughly and dry."
    ],
    "image": "/images/products/wurth/wurth-auto-shampoo.jpg",
    "detailRoute": "/products/wurth-auto-shampoo-concentrated-wash",
    "sourceUrl": "https://www.wuerth.in/",
    "isVerified": true,
    "seoTitle": "W\u00fcrth Auto Shampoo Concentrated Wash Art. 0893012 | TMR Car Care",
    "seoDescription": "W\u00fcrth Auto Shampoo (Art. 0893012) at TMR Car Care. High-lubricity pH-neutral car wash shampoo.",
    "seoH1": "W\u00dcRTH AUTO SHAMPOO CONCENTRATED WASH (ART. 0893012)",
    "relatedProductIds": [
      "wurth-high-gloss-wax",
      "wurth-active-glass-cleaner",
      "wurth-microfibre-polishing-cloth"
    ],
    "faqs": [
      {
        "q": "Is W\u00fcrth Auto Shampoo safe on ceramic coated vehicles?",
        "a": "Yes, its pH-neutral formula contains no harsh builders or waxes, leaving ceramic coatings clear and hydrophobic."
      },
      {
        "q": "Can it be used in foam guns and pressure washers?",
        "a": "Yes, it creates dense clinging foam in pressure washer foam cannons."
      },
      {
        "q": "Does it leave water spots?",
        "a": "Its sheeting action helps water roll off panels during the final rinse."
      },
      {
        "q": "Is it safe on chrome, vinyl, and rubber?",
        "a": "Yes, 100% safe on all automotive exterior trim and materials."
      }
    ]
  },
  {
    "id": "wurth-high-gloss-wax",
    "slug": "wurth-high-gloss-liquid-polymer-wax",
    "sku": "Art. 08930111",
    "name": "W\u00fcrth High-Gloss Liquid Polymer Wax",
    "brand": "W\u00fcrth",
    "category": "PROTECTION",
    "shortDescription": "Liquid polymer protective wax providing long-lasting mirror shine and resistance against environmental fallout.",
    "fullDescription": "W\u00fcrth High-Gloss Liquid Polymer Wax (Art. 08930111) seals automotive paintwork with a durable cross-linking polymer barrier, delivering deep optical gloss and long-lasting water repellency.",
    "specs": [
      {
        "label": "Article Number",
        "value": "0893 0111"
      },
      {
        "label": "Volume",
        "value": "500 ml"
      },
      {
        "label": "Protection",
        "value": "Synthetic Polymer Cross-Linking Sealant"
      },
      {
        "label": "Durability",
        "value": "Up to 4-6 Months"
      },
      {
        "label": "Origin",
        "value": "W\u00fcrth Germany"
      }
    ],
    "applicationSteps": [
      "Ensure paint is clean and polished.",
      "Apply thin layer using foam applicator pad.",
      "Allow 10 minutes to haze.",
      "Buff to a high-gloss reflection with a microfiber towel."
    ],
    "image": "/images/products/wurth/wurth-high-gloss-wax.jpg",
    "detailRoute": "/products/wurth-high-gloss-liquid-polymer-wax",
    "sourceUrl": "https://www.wuerth.in/",
    "isVerified": true,
    "seoTitle": "W\u00fcrth High-Gloss Liquid Polymer Wax Art. 08930111 | TMR Car Care",
    "seoDescription": "W\u00fcrth High-Gloss Liquid Wax (Art. 08930111) at TMR Car Care. Synthetic polymer paint sealant for mirror reflection.",
    "seoH1": "W\u00dcRTH HIGH-GLOSS LIQUID POLYMER WAX (ART. 08930111)",
    "relatedProductIds": [
      "wurth-auto-shampoo",
      "wurth-microfibre-polishing-cloth",
      "wurth-active-glass-cleaner"
    ],
    "faqs": [
      {
        "q": "How does polymer wax compare to carnauba wax?",
        "a": "Polymer waxes provide higher chemical and heat resistance, lasting 2-3 times longer than traditional carnauba waxes."
      },
      {
        "q": "Can it be applied by machine?",
        "a": "Yes, use a soft foam finishing pad on a dual-action polisher at low speed."
      },
      {
        "q": "Does it protect against bird droppings and UV fading?",
        "a": "Yes, the synthetic barrier resists chemical etching from acid rain and bird droppings."
      },
      {
        "q": "Can it be layered?",
        "a": "Yes, a second coat can be applied after 12 hours for enhanced depth and protection."
      }
    ]
  },
  {
    "id": "wurth-leather-care-lotion",
    "slug": "wurth-premium-leather-care-treatment",
    "sku": "Art. 08930129",
    "name": "W\u00fcrth Premium Leather Care Treatment",
    "brand": "W\u00fcrth",
    "category": "PROTECTION",
    "shortDescription": "Solvent-free conditioning lotion that cleans, moisturizes, and protects vehicle leather upholstery against aging.",
    "fullDescription": "W\u00fcrth Premium Leather Care Treatment (Art. 08930129) is a solvent-free emulsion formulated with natural oils and beeswax. It preserves leather elasticity, preventing brittle cracking while maintaining OEM breathability.",
    "specs": [
      {
        "label": "Article Number",
        "value": "0893 0129"
      },
      {
        "label": "Volume",
        "value": "500 ml"
      },
      {
        "label": "Ingredients",
        "value": "Natural Conditioning Oils + Beeswax"
      },
      {
        "label": "Properties",
        "value": "Solvent-Free & Non-Greasy"
      },
      {
        "label": "Origin",
        "value": "W\u00fcrth Germany"
      }
    ],
    "applicationSteps": [
      "Vacuum and clean leather surface.",
      "Apply lotion sparingly to a soft microfiber cloth.",
      "Massage into leather grain in circular motions.",
      "Buff off after a few minutes with a dry cloth."
    ],
    "image": "/images/products/wurth/wurth-leather-care-lotion.jpg",
    "detailRoute": "/products/wurth-premium-leather-care-treatment",
    "sourceUrl": "https://www.wuerth.in/",
    "isVerified": true,
    "seoTitle": "W\u00fcrth Premium Leather Care Treatment Art. 08930129 | TMR Car Care",
    "seoDescription": "W\u00fcrth Leather Care (Art. 08930129) at TMR Car Care. Solvent-free beeswax leather lotion for luxury car interiors.",
    "seoH1": "W\u00dcRTH PREMIUM LEATHER CARE TREATMENT (ART. 08930129)",
    "relatedProductIds": [
      "wurth-cockpit-spray",
      "wurth-rubber-care-spray",
      "wurth-active-glass-cleaner"
    ],
    "faqs": [
      {
        "q": "Is W\u00fcrth Leather Care safe on nappa and perforated leather?",
        "a": "Yes, its light solvent-free lotion absorbs rapidly without blocking perforations."
      },
      {
        "q": "Does it alter the color of leather?",
        "a": "No, it restores natural color depth without tinting or discoloration."
      },
      {
        "q": "Does it make seats slippery?",
        "a": "No, it leaves a supple, non-slippery satin touch."
      },
      {
        "q": "Can it be used on leather jackets and steering wheels?",
        "a": "Yes, safe for all fine automotive and consumer leather goods."
      }
    ]
  },
  {
    "id": "wurth-tyre-foam-spray",
    "slug": "wurth-tyre-foam-conditioning-and-shine",
    "sku": "Art. 0890121",
    "name": "W\u00fcrth Tyre Foam Conditioning & Shine",
    "brand": "W\u00fcrth",
    "category": "PROTECTION",
    "shortDescription": "One-step foaming tire treatment that cleans, restores deep black luster, and protects rubber against ozone cracking.",
    "fullDescription": "W\u00fcrth Tyre Foam (Art. 0890121) is a fast-acting aerosol foam that lifts road grime from tire sidewalls while leaving a rich OEM satin-black sheen without requiring scrubbing or wiping.",
    "specs": [
      {
        "label": "Article Number",
        "value": "0890 121"
      },
      {
        "label": "Volume",
        "value": "500 ml Aerosol"
      },
      {
        "label": "Application",
        "value": "No-Wipe Aerosol Foam"
      },
      {
        "label": "Protection",
        "value": "UV & Ozone Degradation Barrier"
      },
      {
        "label": "Origin",
        "value": "W\u00fcrth Germany"
      }
    ],
    "applicationSteps": [
      "Shake can well before use.",
      "Spray evenly onto tire sidewall from 15-20 cm away.",
      "Allow foam to collapse and penetrate rubber.",
      "Drive away once dry \u2014 no wiping required."
    ],
    "image": "/images/products/wurth/wurth-tyre-foam-spray.jpg",
    "detailRoute": "/products/wurth-tyre-foam-conditioning-and-shine",
    "sourceUrl": "https://www.wuerth.in/",
    "isVerified": true,
    "seoTitle": "W\u00fcrth Tyre Foam Conditioning & Shine Art. 0890121 | TMR Car Care",
    "seoDescription": "W\u00fcrth Tyre Foam (Art. 0890121) at TMR Car Care. One-step foaming tire cleaner and UV protectant.",
    "seoH1": "W\u00dcRTH TYRE FOAM CONDITIONING & SHINE (ART. 0890121)",
    "relatedProductIds": [
      "wurth-brake-cleaner-plus",
      "wurth-auto-shampoo",
      "wurth-high-gloss-wax"
    ],
    "faqs": [
      {
        "q": "Do I need to scrub the tire after spraying?",
        "a": "No, the expanding foam lifts surface dust and dries to a clean black finish without scrubbing."
      },
      {
        "q": "Is it safe if foam gets on the alloy wheel?",
        "a": "Yes, simply wipe away any overspray with a microfiber cloth."
      },
      {
        "q": "Does it protect against brown tire bloom?",
        "a": "Yes, conditioning agents seal rubber pores to prevent antiozonant blooming."
      },
      {
        "q": "How many tires can one can treat?",
        "a": "One 500ml aerosol can typically treats 20 to 30 tires."
      }
    ]
  },
  {
    "id": "wurth-microfibre-polishing-cloth",
    "slug": "wurth-ultra-microfibre-polishing-towel",
    "sku": "Art. 0899900131",
    "name": "W\u00fcrth Ultra Microfibre Polishing Towel",
    "brand": "W\u00fcrth",
    "category": "ACCESSORIES",
    "shortDescription": "Seamless ultra-soft microfiber towel designed for scratch-free buffing of polishes, waxes, and ceramic coatings.",
    "fullDescription": "W\u00fcrth Ultra Microfibre Polishing Towel (Art. 0899900131) features ultra-fine split fibers with laser-cut ultrasonic edges to guarantee 100% scratch-free buffing on delicate clear coats.",
    "specs": [
      {
        "label": "Article Number",
        "value": "0899 900 131"
      },
      {
        "label": "Dimensions",
        "value": "40 x 40 cm"
      },
      {
        "label": "Edge",
        "value": "Ultrasonic Laser-Cut Edgeless"
      },
      {
        "label": "Material",
        "value": "80% Polyester / 20% Polyamide"
      },
      {
        "label": "Origin",
        "value": "W\u00fcrth Germany"
      }
    ],
    "applicationSteps": [
      "Fold towel into quarters to create 8 fresh wiping surfaces.",
      "Buff polish or wax residue using light overlapping strokes.",
      "Flip to fresh quarter for final inspection wipe."
    ],
    "image": "/images/products/wurth/wurth-microfibre-polishing-cloth.jpg",
    "detailRoute": "/products/wurth-ultra-microfibre-polishing-towel",
    "sourceUrl": "https://www.wuerth.in/",
    "isVerified": true,
    "seoTitle": "W\u00fcrth Ultra Microfibre Polishing Towel Art. 0899900131 | TMR Car Care",
    "seoDescription": "W\u00fcrth Edgeless Microfibre Towel (Art. 0899900131) at TMR Car Care. Professional scratch-free detailing cloth.",
    "seoH1": "W\u00dcRTH ULTRA MICROFIBRE POLISHING TOWEL (ART. 0899900131)",
    "relatedProductIds": [
      "wurth-high-gloss-wax",
      "wurth-active-glass-cleaner",
      "wurth-auto-shampoo"
    ],
    "faqs": [
      {
        "q": "Why is an edgeless ultrasonic towel safer for automotive clear coats?",
        "a": "Traditional sewn hems and nylon threads can cause micro-scratches on soft clear coats. Laser-cut edgeless microfiber eliminates this risk."
      },
      {
        "q": "How do you wash W\u00fcrth microfiber towels?",
        "a": "Machine wash in warm water with liquid detergent (no fabric softeners or bleach) and air dry."
      },
      {
        "q": "Can it be used for ceramic coating removal?",
        "a": "Yes, its split fibers level ceramic coating high spots with zero lint."
      },
      {
        "q": "Is the towel reusable?",
        "a": "Yes, it can be washed and reused over 300 times."
      }
    ]
  },
  {
    "id": "wurth-rost-off-penetrant",
    "slug": "wurth-rost-off-max-penetrating-lubricant",
    "sku": "Art. 08902",
    "name": "W\u00fcrth Rost-Off Max Penetrating Lubricant",
    "brand": "W\u00fcrth",
    "category": "ACCESSORIES",
    "shortDescription": "High-performance rust penetrant with OMC2 organomolybdenum technology that rapidly frees seized bolts and lubricates parts.",
    "fullDescription": "W\u00fcrth Rost-Off Max (Art. 08902) features extreme creeping capabilities and OMC2 organomolybdenum friction modifiers. It penetrates microscopic rust fissures instantly to free rusted fasteners and prevent future corrosion.",
    "specs": [
      {
        "label": "Article Number",
        "value": "0890 2"
      },
      {
        "label": "Volume",
        "value": "300 ml Aerosol"
      },
      {
        "label": "Technology",
        "value": "OMC2 Liquid Organomolybdenum"
      },
      {
        "label": "Properties",
        "value": "Resin, Acid & Silicone-Free"
      },
      {
        "label": "Origin",
        "value": "W\u00fcrth Germany"
      }
    ],
    "applicationSteps": [
      "Shake can and spray directly onto seized or rusted fastener.",
      "Allow product to creep into threads for 1-2 minutes.",
      "Loosen fastener with appropriate tool.",
      "Wipe clean."
    ],
    "image": "/images/products/wurth/wurth-rost-off-penetrant.jpg",
    "detailRoute": "/products/wurth-rost-off-max-penetrating-lubricant",
    "sourceUrl": "https://www.wuerth.in/",
    "isVerified": true,
    "seoTitle": "W\u00fcrth Rost-Off Max Penetrating Lubricant Art. 08902 | TMR Car Care",
    "seoDescription": "W\u00fcrth Rost-Off Max (Art. 08902) at TMR Car Care. Professional OMC2 rust penetrant and anti-corrosion lubricant.",
    "seoH1": "W\u00dcRTH ROST-OFF MAX PENETRATING LUBRICANT (ART. 08902)",
    "relatedProductIds": [
      "wurth-brake-cleaner-plus",
      "wurth-rubber-care-spray",
      "wurth-active-glass-cleaner"
    ],
    "faqs": [
      {
        "q": "What is OMC2 technology in Rost-Off?",
        "a": "Organomolybdenum compounds smooth metal friction surfaces at the microscopic level, facilitating easy fastener removal and lasting lubrication."
      },
      {
        "q": "Can it be used on automotive hinges and locks?",
        "a": "Yes, it penetrates door hinges, seat runners, and lock cylinders to eliminate squeaks and resist moisture."
      },
      {
        "q": "Does it contain silicone?",
        "a": "No, it is 100% silicone-free and body shop safe."
      },
      {
        "q": "Does it protect against future rust?",
        "a": "Yes, it leaves a microscopic protective film that repels moisture and prevents rust reoccurrence."
      }
    ]
  }
];
