export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const faqsData: FAQItem[] = [
  {
    question: "What is the difference between Ceramic Coating and Paint Protection Film (PPF)?",
    answer: "Ceramic Coating is a liquid quartz chemical layer that bonds to clear coat to provide hydrophobic water-beading, UV resistance, and deep gloss. Paint Protection Film (PPF) is a physical 8 mil TPU film armor designed to absorb stone chips, key scratches, and road debris impact.",
    category: "General",
  },
  {
    question: "How long does Ceramic Coating take to apply at TMR Tiruppur studio?",
    answer: "A proper ceramic coating application takes between 2 to 3 days. This includes surface washing, iron decontamination, multi-stage paint correction polish, ceramic layer curing time, and final inspection.",
    category: "Ceramic Coating",
  },
  {
    question: "Does PPF self-heal scratches?",
    answer: "Yes, our premium TPU Paint Protection Films feature an advanced self-healing elastomeric top coat. Swirl marks and minor surface scratches disappear automatically when exposed to ambient heat or warm water.",
    category: "PPF",
  },
  {
    question: "Will Sun-Control window tints block mobile signal or GPS?",
    answer: "No. TMR installs non-metallic nano-ceramic window films. Unlike old dyed or metallic films, our ceramic films allow 100% signal transmission for mobile phones, GPS navigation, and Fastag cards while blocking up to 95% heat.",
    category: "Sun-Control",
  },
  {
    question: "How can I book a detailing or consultation slot with TMR AI Car Care?",
    answer: "You can book directly by tapping our WhatsApp enquiry button or calling us at +91 98765 43210. We recommend booking 1-2 days in advance for Ceramic and PPF services.",
    category: "Booking",
  }
];
