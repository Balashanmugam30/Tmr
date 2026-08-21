import React, { useMemo } from 'react';

interface LiquidGlassSurfaceProps {
  children: React.ReactNode;
  className?: string;
  filterId?: string;
  tint?: string;
  blur?: number;
  specular?: boolean;
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
  filterId = 'lg-nav-filter',
  tint = 'rgba(245, 244, 239, 0.55)',
  blur = 16,
  specular = true,
}) => {
  const isChrome = useMemo(() => supportsBackdropSvgFilter(), []);

  const backdropFilterValue = isChrome
    ? `blur(${blur}px) url(#${filterId}) brightness(1.06) saturate(1.35)`
    : `blur(${blur}px) brightness(1.06) saturate(1.25)`;

  return (
    <div className={`relative rounded-full overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.18),0_2px_8px_rgba(0,0,0,0.12)] border border-black/10 ${className}`}>
      {/* LAYER 0: REFRACTION BACKDROP FILTER */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          backdropFilter: backdropFilterValue,
          WebkitBackdropFilter: backdropFilterValue,
          isolation: 'isolate',
        }}
      />

      {/* LAYER 1: GLASS TINT */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full pointer-events-none transition-colors duration-300"
        style={{ background: tint }}
      />

      {/* LAYER 2: SPECULAR RIM HIGHLIGHT */}
      {specular && (
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            boxShadow: [
              'inset 0 1px 0 rgba(255,255,255,0.75)',
              'inset 0 -1px 0 rgba(0,0,0,0.12)',
              'inset 1px 0 rgba(255,255,255,0.25)',
              'inset -1px 0 rgba(255,255,255,0.25)',
            ].join(', '),
          }}
        />
      )}

      {/* LAYER 3: CONTENT */}
      <div className="relative z-10 h-full flex items-center">{children}</div>
    </div>
  );
};
