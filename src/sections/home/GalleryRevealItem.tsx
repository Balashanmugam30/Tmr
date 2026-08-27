import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

interface GalleryRevealItemProps {
  number: string;
  title: string;
  service: string;
  image: string;
  aspect: string;
  gridSpan: string;
  overlapClass?: string;
}

export const GalleryRevealItem: React.FC<GalleryRevealItemProps> = ({
  title,
  service,
  image,
  aspect,
  gridSpan,
  overlapClass = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    const img = imgRef.current;
    if (!container || !card || !img) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) {
      card.style.clipPath = 'inset(0 0% 0 0)';
      card.style.opacity = '1';
      return;
    }

    // INDIVIDUAL ITEM-LEVEL INTERSECTION OBSERVER WITH ENTER & LEAVE LIFECYCLE REPLAY
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // ITEM ENTERS VIEWPORT: REVEAL ANIMATION (NO IMAGE -> IMAGE ARRIVES -> SETTLES)
            gsap.to(card, {
              clipPath: 'inset(0 0% 0 0)',
              opacity: 1,
              duration: 0.95,
              ease: 'power3.out',
              overwrite: 'auto',
            });
            gsap.to(img, {
              x: 0,
              scale: 1.0,
              duration: 0.95,
              ease: 'power3.out',
              overwrite: 'auto',
            });
          } else {
            // ITEM LEAVES VIEWPORT: RESET TO MASKED HIDDEN STATE FOR FUTURE RE-ENTRY REVEAL
            gsap.to(card, {
              clipPath: 'inset(0 100% 0 0)',
              opacity: 0,
              duration: 0.35,
              ease: 'power2.in',
              overwrite: 'auto',
            });
            gsap.to(img, {
              x: -24,
              scale: 1.025,
              duration: 0.35,
              ease: 'power2.in',
              overwrite: 'auto',
            });
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      data-gallery-reveal-item="true"
      data-home-gallery-image="true"
      data-gallery-image="true"
      className={`${gridSpan} ${overlapClass} relative w-full`}
    >
      {/* STATIC LAYOUT CONTAINER (PREVENTS VERTICAL LAYOUT SHIFTS) */}
      <Link
        ref={cardRef}
        to="/gallery"
        aria-label={`View ${title} - ${service} in TMR Gallery`}
        className={`w-full ${aspect} relative block overflow-hidden rounded-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-black cursor-pointer group`}
        style={{
          clipPath: 'inset(0 100% 0 0)',
          opacity: 0,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          ref={imgRef}
          src={image}
          alt={`${title} - ${service} by TMR Car Care`}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
            isHovered ? 'scale-[1.025] -translate-y-0.5' : ''
          }`}
          style={{
            transform: 'translateX(-24px) scale(1.025)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none opacity-40 group-hover:opacity-65 transition-opacity duration-500" />
      </Link>
    </div>
  );
};
