import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { MegaMenuConfig } from '@/data/megaMenu';

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
      className="fixed z-[2000] pointer-events-auto bg-[#F5F4EF] border border-black/10 p-6 md:p-8 rounded-[28px] shadow-[0_24px_70px_rgba(0,0,0,0.16)] text-[#050505] font-manrope selection:bg-[#FF4B00] selection:text-white transition-all overflow-hidden"
    >
      <div ref={contentRef} className="space-y-6">
        {/* EDITORIAL HEADER SECTION */}
        <div className="border-b border-black/10 pb-4 flex items-center justify-between">
          <div className="space-y-1">
            <span className="stagger-item block text-[10px] font-black uppercase tracking-[0.25em] text-[#FF4B00]">
              {config.eyebrow}
            </span>
            <h3 className="stagger-item text-lg md:text-xl font-black uppercase tracking-tight text-[#050505]">
              {config.headline}
            </h3>
            <p className="stagger-item text-xs text-[#666666] max-w-xl leading-relaxed">
              {config.description}
            </p>
          </div>

          {config.cta && (
            <Link
              to={config.cta.href}
              className="stagger-item shrink-0 text-xs font-extrabold text-[#050505] hover:text-[#FF4B00] flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/5 border border-black/10 hover:border-[#FF4B00]/40 transition-colors uppercase tracking-wider"
            >
              <span>{config.cta.label}</span>
            </Link>
          )}
        </div>

        {/* EDITORIAL COLUMNS GRID SECTION */}
        <div
          className={`grid gap-6 ${
            config.columns.length === 1
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
              : config.columns.length === 2
              ? 'grid-cols-1 md:grid-cols-2'
              : 'grid-cols-1 md:grid-cols-3'
          }`}
        >
          {config.columns.map((col, colIdx) => (
            <div
              key={colIdx}
              className={`space-y-3.5 ${
                colIdx > 0 && config.columns.length > 1
                  ? 'md:border-l md:border-black/[0.08] md:pl-6'
                  : ''
              }`}
            >
              {col.heading && (
                <span className="stagger-item block text-[10px] font-extrabold uppercase tracking-widest text-[#FF4B00] border-b border-black/[0.06] pb-1.5">
                  {col.heading}
                </span>
              )}
              <div className="space-y-3">
                {col.items.map((item, itemIdx) => (
                  <Link
                    key={itemIdx}
                    to={item.href}
                    className="stagger-item block p-2.5 rounded-2xl hover:bg-black/[0.04] transition-all group"
                  >
                    <span className="text-xs font-black uppercase text-[#050505] group-hover:text-[#FF4B00] flex items-center justify-between transition-colors">
                      <span>{item.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#FF4B00] group-hover:translate-x-1 transition-transform" />
                    </span>
                    <p className="text-[11px] text-[#666666] mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* EDITORIAL BOTTOM CTA BAR */}
        {config.cta && (
          <div className="stagger-item border-t border-black/10 pt-4 flex items-center justify-between">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#666666]">
              TMR CAR CARE // TIRUPPUR STUDIO DIRECTORY
            </span>
            <Link
              to={config.cta.href}
              className="text-xs font-black text-[#FF4B00] hover:text-[#050505] flex items-center gap-1.5 transition-colors uppercase tracking-wider"
            >
              <span>{config.cta.label}</span>
              <ArrowUpRight className="w-4 h-4 text-[#FF4B00]" />
            </Link>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};
