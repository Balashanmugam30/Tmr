import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';

interface BeforeAfterRevealProps {
  beforeImage?: string;
  afterImage?: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export const BeforeAfterReveal: React.FC<BeforeAfterRevealProps> = ({
  beforeImage = '/images/gallery/gallery-tmr-vehicle-before.jpg',
  afterImage = '/images/gallery/gallery-tmr-vehicle-after.jpg',
  beforeAlt = 'Toyota Innova Hycross and Mahindra XUV700 with road dust, surface haze, and water spotting before detailing at TMR AI Car Care in Tiruppur',
  afterAlt = 'Toyota Innova Hycross and Mahindra XUV700 with deep gloss finish and ceramic coating at TMR AI Car Care in Tiruppur',
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
  className = 'w-full aspect-[16/10] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.85)]',
}) => {
  return (
    <div className="w-full relative select-none">
      <ReactCompareSlider
        itemOne={
          <div className="relative w-full h-full">
            <ReactCompareSliderImage
              src={beforeImage}
              alt={beforeAlt}
              loading="lazy"
              decoding="async"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10 px-3 sm:px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-white/90 uppercase pointer-events-none shadow-lg">
              {beforeLabel}
            </div>
          </div>
        }
        itemTwo={
          <div className="relative w-full h-full">
            <ReactCompareSliderImage
              src={afterImage}
              alt={afterAlt}
              loading="lazy"
              decoding="async"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 px-3 sm:px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#FF4B00] uppercase pointer-events-none shadow-lg">
              {afterLabel}
            </div>
          </div>
        }
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              backgroundColor: 'rgba(15, 15, 15, 0.92)',
              border: '1.5px solid rgba(255, 255, 255, 0.4)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.7), 0 0 16px rgba(255, 75, 0, 0.4)',
              color: '#FF4B00',
              width: '44px',
              height: '44px',
              borderRadius: '9999px',
            }}
            linesStyle={{
              width: '2px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              boxShadow: '0 0 8px rgba(0, 0, 0, 0.8)',
            }}
          />
        }
        defaultPosition={50}
        className={className}
      />
    </div>
  );
};
