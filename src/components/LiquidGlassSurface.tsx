import React, { useMemo } from 'react';

interface LiquidGlassSurfaceProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  filterId?: string;
  tint?: string;
  blur?: number;
  specular?: boolean;
  roundedClassName?: string;
}

/**
 * Detects whether the current browser supports SVG filters in backdrop-filter (Chromium).
 */
function supportsBackdropSvgFilter(): boolean {
  if (typeof window === 'undefined') return false;
  const ua = navigator.userAgent;
  return (/Chrome\//.test(ua) && !/Edg\//.test(ua)) || /Edg\//.test(ua);
}

export const LiquidGlassSurface: React.FC<LiquidGlassSurfaceProps> = ({
  children,
  className = '',
  contentClassName = 'relative z-10 h-full flex items-center justify-center',
  filterId = 'lg-nav-filter',
  tint = 'rgba(18, 18, 22, 0.35)',
  blur = 20,
  specular = true,
  roundedClassName = 'rounded-full',
}) => {
  const isChrome = useMemo(() => supportsBackdropSvgFilter(), []);

  const backdropFilterValue = isChrome
    ? `blur(${blur}px) url(#${filterId}) brightness(1.08) saturate(1.4)`
    : `blur(${blur}px) brightness(1.08) saturate(1.3)`;

  return (
    <div
      className={`relative overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.16)] border border-white/20 transition-all duration-300 ${roundedClassName} ${className}`}
    >
      {/* LAYER 0: REFRACTION BACKDROP FILTER */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none ${roundedClassName}`}
        style={{
          backdropFilter: backdropFilterValue,
          WebkitBackdropFilter: backdropFilterValue,
          isolation: 'isolate',
        }}
      />

      {/* LAYER 1: LOW-ALPHA NEUTRAL OPTICAL TINT (BACKGROUND CONTENT PASSES THROUGH) */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none transition-colors duration-300 ${roundedClassName}`}
        style={{ background: tint }}
      />

      {/* LAYER 2: SPECULAR RIM HIGHLIGHT */}
      {specular && (
        <div
          aria-hidden="true"
          className={`absolute inset-0 pointer-events-none ${roundedClassName}`}
          style={{
            boxShadow: [
              'inset 0 1px 0 rgba(255,255,255,0.45)',
              'inset 0 -1px 0 rgba(0,0,0,0.25)',
              'inset 1px 0 rgba(255,255,255,0.15)',
              'inset -1px 0 rgba(255,255,255,0.15)',
            ].join(', '),
          }}
        />
      )}

      {/* LAYER 3: CONTENT */}
      <div className={contentClassName}>{children}</div>
    </div>
  );
};
