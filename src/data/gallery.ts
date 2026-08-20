export interface GalleryItem {
  id: string;
  title: string;
  category: "Ceramic Coating" | "PPF" | "Detailing" | "Car Wash" | "Accessories";
  vehicleModel: string;
  completionDate: string;
  image: string;
  aspectRatio: "16:9" | "4:3" | "1:1" | "3:4";
  description: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "gal-01",
    title: "10H Ceramic Coating Mirror Finish",
    category: "Ceramic Coating",
    vehicleModel: "BMW M4 Competition",
    completionDate: "August 2026",
    image: "/gallery/bmw-m4-ceramic.jpg",
    aspectRatio: "16:9",
    description: "Multi-stage paint correction followed by 5-Year 10H Ceramic Coating application.",
  },
  {
    id: "gal-02",
    title: "Full Body Self-Healing TPU PPF Armor",
    category: "PPF",
    vehicleModel: "Porsche 911 GT3",
    completionDate: "August 2026",
    image: "/gallery/porsche-ppf.jpg",
    aspectRatio: "4:3",
    description: "Complete vehicle wrap using 3M Scotchgard Pro Series Paint Protection Film.",
  },
  {
    id: "gal-03",
    title: "Multi-Stage Paint Correction & Gloss Restoration",
    category: "Detailing",
    vehicleModel: "Mercedes-AMG E63s",
    completionDate: "July 2026",
    image: "/gallery/amg-e63-detail.jpg",
    aspectRatio: "1:1",
    description: "Removal of heavy swirl marks and water spot etching under LED inspection lighting.",
  },
  {
    id: "gal-04",
    title: "IR Ceramic Sun-Control Window Tinting",
    category: "Accessories",
    vehicleModel: "Audi RS Q8",
    completionDate: "July 2026",
    image: "/gallery/audi-rsq8-tint.jpg",
    aspectRatio: "3:4",
    description: "95% Heat Rejection ceramic window film installation with zero signal distortion.",
  },
  {
    id: "gal-05",
    title: "Deep Interior Steam Sanitization & Leather Care",
    category: "Car Wash",
    vehicleModel: "Range Rover Autobiography",
    completionDate: "July 2026",
    image: "/gallery/range-rover-interior.jpg",
    aspectRatio: "16:9",
    description: "Complete interior leather cleaning, steam sanitization, and matte leather protective seal.",
  },
  {
    id: "gal-06",
    title: "Custom 7D All-Weather Floor Mats & Ambient Lighting",
    category: "Accessories",
    vehicleModel: "Volvo XC90 Recharge",
    completionDate: "June 2026",
    image: "/gallery/volvo-xc90-mats.jpg",
    aspectRatio: "4:3",
    description: "Custom floor mat tailoring and OEM-grade multi-zone interior ambient lighting installation.",
  }
];
