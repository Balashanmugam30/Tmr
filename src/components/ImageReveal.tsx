import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1' | '3:4';
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = '16:9',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const aspectClasses = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
    '3:4': 'aspect-[3/4]',
  };

  useEffect(() => {
    const container = containerRef.current;
    const img = imageRef.current;
    if (!container || !img) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        container,
        { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
        {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        img,
        { scale: 1.2 },
        {
          scale: 1,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-tmr-softblack ${aspectClasses[aspectRatio]} ${className}`}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
        onError={(e) => {
          // Graceful fallback SVG placeholder matching TMR dark theme
          const target = e.target as HTMLImageElement;
          target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450"><rect width="800" height="450" fill="%23050505"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="%23FF4B00">TMR AI CAR CARE — PHOTOGRAPHY PLACEHOLDER</text></svg>`;
        }}
      />
    </div>
  );
};
