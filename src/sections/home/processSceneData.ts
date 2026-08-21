export interface ProcessStage {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technicalDetails: string[];
  bgColor: string;
  textColor: string;
  accentColor: string;
  image: string;
  alt: string;
}

export const processStages: ProcessStage[] = [
  {
    id: 'stage-arrive',
    number: '01',
    title: 'ARRIVE',
    subtitle: 'STUDIO RECEPTION & INITIAL PROTOCOL',
    description: 'Every vehicle enters a climate-controlled studio environment designed to eliminate contamination before work begins.',
    technicalDetails: [
      'Deionized Water Wash Protocol',
      'Underbody & Wheel Well Flush',
      'Clean Room Isolation Bay'
    ],
    bgColor: '#3A252D', // Deep dusty rose / muted dark pink
    textColor: '#FFFFFF',
    accentColor: '#FF4B00',
    image: '/images/process/arrive.webp',
    alt: 'Dark luxury executive vehicle arriving inside TMR studio bay'
  },
  {
    id: 'stage-inspect',
    number: '02',
    title: 'INSPECT',
    subtitle: 'PAINT DEPTH & SURFACE MAPPING',
    description: 'Multi-angle LED specular light mapping maps clearcoat thickness, swirl depth, paint etching, and factory clear defects.',
    technicalDetails: [
      'Ultrasonic Paint Gauge Measuring',
      'Specular LED Surface Mapping',
      'Defect Severity Classification'
    ],
    bgColor: '#263A31', // Deep pista / muted sage
    textColor: '#FFFFFF',
    accentColor: '#FF4B00',
    image: '/images/process/inspect.webp',
    alt: 'Professional detailer inspecting paint surface clearcoat with specular LED light'
  },
  {
    id: 'stage-prepare',
    number: '03',
    title: 'PREPARE',
    subtitle: 'DECONTAMINATION & PRECISION MASKING',
    description: 'Chemical fallout extraction, synthetic clay bar treatment, and precision automotive masking of trim and body seams.',
    technicalDetails: [
      'Chemical Iron & Tar Extraction',
      'Grade 0 Synthetic Clay Treatment',
      'Precision Automotive Trim Masking'
    ],
    bgColor: '#302A38', // Smoky lavender / muted plum-gray
    textColor: '#FFFFFF',
    accentColor: '#FF4B00',
    image: '/images/process/prepare.webp',
    alt: 'Automotive masking tape and surface decontamination preparation'
  },
  {
    id: 'stage-transform',
    number: '04',
    title: 'TRANSFORM',
    subtitle: 'DUAL-ACTION PAINT CORRECTION',
    description: 'Controlled multi-pass machine polishing compound removes 95%+ of surface defects, restoring ultimate specular clarity.',
    technicalDetails: [
      'Dual-Action Machine Polishing',
      'Diminishing Abrasive Micro-Compounds',
      'Hologram-Free Finish Verification'
    ],
    bgColor: '#3B2A25', // Deep dusty peach / muted terracotta
    textColor: '#FFFFFF',
    accentColor: '#FF4B00',
    image: '/images/process/transform.webp',
    alt: 'Dual-action machine polishing compound paint correction'
  },
  {
    id: 'stage-reveal',
    number: '05',
    title: 'REVEAL',
    subtitle: '10H CERAMIC PROTECTION & FINAL STANDARDS',
    description: 'Application of nano-ceramic coating cured under IR thermal lamps, unlocking a deep specular mirror glass finish.',
    technicalDetails: [
      '10H Hardness Nano-Ceramic Layer',
      'IR Thermal Curing Cycle',
      'Final Inspection & Quality Handover'
    ],
    bgColor: '#25313B', // Deep slate blue / desaturated steel
    textColor: '#FFFFFF',
    accentColor: '#FF4B00',
    image: '/images/process/reveal.webp',
    alt: 'Finished luxury vehicle specular mirror gloss reflection reveal'
  }
];
