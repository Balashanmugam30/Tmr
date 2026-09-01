import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { MegaMenuConfig } from '@/data/megaMenu';
import { LiquidGlassSurface } from './LiquidGlassSurface';

interface MegaMenuPanelProps {
  config: MegaMenuConfig;
  dockRect: DOMRect | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const MegaMenuPanel: React.FC<MegaMenuPanelProps> = ({
  config,
  dockRect,
  onMouseEnter,
  onMouseLeave,
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // GSAP Shell Dimension Morphing & Content Crossfade Animation
  useEffect(() => {
    if (!panelRef.current || !contentRef.current) return;

    // Calculate dynamic responsive target width
    const viewportMaxWidth = Math.min(config.targetWidth, window.innerWidth - 32);

    // Shell Geometry Morphing
    gsap.to(panelRef.current, {
      width: `${viewportMaxWidth}px`,
      duration: 0.32,
      ease: 'power2.out',
    });

    // Content Crossfade & Staggered Entrance Animation
    const ctx = gsap.context(() => {
      // Content Shell Fade-In
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.22, ease: 'power2.out' }
      );

      // Staggered Items Entrance
      const items = contentRef.current?.querySelectorAll('.stagger-item');
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 8 },
          {
            opacity: 1,
            y: 0,
            duration: 0.24,
            stagger: 0.03,
            ease: 'power2.out',
            delay: 0.04,
          }
        );
      }
    }, contentRef);

    return () => ctx.revert();
  }, [config.id, config.targetWidth]);

  if (!dockRect) return null;

  // Calculate fixed anchored position below center island
  const topPos = dockRect.bottom + 8;
  const leftPos = dockRect.left + dockRect.width / 2;

  return createPortal(
    <div
      ref={panelRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        top: `${topPos}px`,
        left: `${leftPos}px`,
        transform: 'translateX(-50%)',
        width: `${Math.min(config.targetWidth, window.innerWidth - 32)}px`,
      }}
      className="fixed z-[2000] pointer-events-auto transition-all overflow-hidden"
    >
      <LiquidGlassSurface
        roundedClassName="rounded-[28px]"
        tint="rgba(12, 12, 16, 0.55)"
        blur={20}
        className="p-5 md:p-6 lg:p-7 border border-white/20 text-[#F5F4EF] font-manrope selection:bg-[#FF4B00] selection:text-white"
        contentClassName="relative z-10 w-full"
      >
        <div ref={contentRef} className="space-y-5 w-full relative z-10">
          
          {/* EDITORIAL HEADER SECTION */}
          <div className="border-b border-white/12 pb-3.5 flex items-start justify-between gap-4">
            <div className="space-y-1">
              <span className="stagger-item block text-[10px] font-black uppercase tracking-[0.25em] text-[#FF4B00]">
                {config.eyebrow}
              </span>
              <h3 className="stagger-item text-lg md:text-xl font-black uppercase tracking-tight text-white leading-tight">
                {config.headline}
              </h3>
              <p className="stagger-item text-xs text-[#F5F4EF]/65 max-w-xl leading-relaxed">
                {config.description}
              </p>
            </div>

            {config.cta && (
              <Link
                to={config.cta.href}
                className="stagger-item shrink-0 text-xs font-extrabold text-white hover:text-[#FF4B00] flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white hover:text-black transition-all uppercase tracking-wider self-start mt-0.5"
              >
                <span>{config.cta.label}</span>
              </Link>
            )}
          </div>

          {/* EDITORIAL COLUMNS GRID SECTION */}
          <div
            className={`grid gap-6 pt-0.5 ${
              config.columns.length === 1
                ? 'grid-cols-1'
                : config.columns.length === 2
                ? 'grid-cols-1 md:grid-cols-2'
                : 'grid-cols-1 md:grid-cols-3'
            }`}
          >
            {config.columns.map((col, colIdx) => (
              <div
                key={colIdx}
                className={`space-y-3 ${
                  colIdx > 0 && config.columns.length > 1
                    ? 'md:border-l md:border-white/10 md:pl-6'
                    : ''
                }`}
              >
                {col.heading && (
                  <span className="stagger-item block text-[10px] font-extrabold uppercase tracking-widest text-[#FF4B00] border-b border-white/10 pb-1.5">
                    {col.heading}
                  </span>
                )}
                <div className="space-y-1.5">
                  {col.items.map((item, itemIdx) => (
                    <Link
                      key={itemIdx}
                      to={item.href}
                      className="stagger-item block p-2.5 rounded-2xl hover:bg-white/10 transition-all group"
                    >
                      <span className="text-xs font-black uppercase text-white group-hover:text-[#FF4B00] flex items-center justify-between transition-colors">
                        <span>{item.title}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#FF4B00] group-hover:translate-x-1 transition-transform" />
                      </span>
                      <p className="text-[11px] text-[#F5F4EF]/60 mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </LiquidGlassSurface>
    </div>,
    document.body
  );
};
