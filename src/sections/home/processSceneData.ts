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
    description: 'THE VEHICLE ENTERS THE CONTROLLED ENVIRONMENT.',
    technicalDetails: [
      'Deionized Water Wash Protocol',
      'Underbody & Wheel Well Flush',
      'Clean Room Isolation Bay'
    ],
    bgColor: '#0A0A0A',
    textColor: '#FFFFFF',
    accentColor: '#FF4B00',
    image: '/images/approach/approach-parallax.webp',
    alt: 'Vehicle arrival inside TMR Car Care studio bay'
  },
  {
    id: 'stage-inspect',
    number: '02',
    title: 'INSPECT',
    subtitle: 'PAINT DEPTH & SURFACE MAPPING',
    description: 'EVERY SURFACE IS UNDERSTOOD BEFORE IT IS TOUCHED.',
    technicalDetails: [
      'Ultrasonic Paint Gauge Measuring',
      'Specular LED Surface Mapping',
      'Defect Severity Classification'
    ],
    bgColor: '#111315',
    textColor: '#FFFFFF',
    accentColor: '#FF4B00',
    image: '/hero-sequence/frame-0240.webp',
    alt: 'Specular LED surface inspection and clearcoat measurement'
  },
  {
    id: 'stage-prepare',
    number: '03',
    title: 'PREPARE',
    subtitle: 'DECONTAMINATION & PRECISION MASKING',
    description: 'THE SURFACE IS CLEANED, DECONTAMINATED AND PREPARED.',
    technicalDetails: [
      'Chemical Iron & Tar Extraction',
      'Grade 0 Synthetic Clay Treatment',
      'Precision Automotive Trim Masking'
    ],
    bgColor: '#181B1D',
    textColor: '#FFFFFF',
    accentColor: '#FF4B00',
    image: '/hero-sequence/frame-0360.webp',
    alt: 'Automotive masking tape and surface decontamination'
  },
  {
    id: 'stage-transform',
    number: '04',
    title: 'TRANSFORM',
    subtitle: 'DUAL-ACTION PAINT CORRECTION',
    description: 'CONTROLLED CORRECTION REVEALS THE TRUE FINISH.',
    technicalDetails: [
      'Dual-Action Machine Polishing',
      'Diminishing Abrasive Micro-Compounds',
      'Hologram-Free Finish Verification'
    ],
    bgColor: '#25282A',
    textColor: '#FFFFFF',
    accentColor: '#FF4B00',
    image: '/hero-sequence/frame-0480.webp',
    alt: 'Dual-action machine polishing and paint correction'
  },
  {
    id: 'stage-reveal',
    number: '05',
    title: 'REVEAL',
    subtitle: '10H CERAMIC PROTECTION & FINAL STANDARDS',
    description: 'THE FINISHED SURFACE SPEAKS FOR ITSELF.',
    technicalDetails: [
      '10H Hardness Nano-Ceramic Layer',
      'IR Thermal Curing Cycle',
      'Final Inspection & Quality Handover'
    ],
    bgColor: '#050505',
    textColor: '#FFFFFF',
    accentColor: '#FF4B00',
    image: '/hero-sequence/frame-0960.webp',
    alt: 'Finished vehicle specular gloss reflection reveal'
  }
];
