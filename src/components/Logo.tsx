import React from 'react';
import { Link } from 'react-router-dom';
import { LiquidGlassSurface } from './LiquidGlassSurface';

interface LogoProps {
  className?: string;
  heightClassName?: string;
  useGlass?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  heightClassName = 'h-8 sm:h-9 md:h-10 lg:h-[38px]',
  useGlass = true,
}) => {
  const content = (
    <img
      src="/images/tmr-logo-tight.png"
      alt="TMR Car Care - Precision • Protection • Perfection"
      className={`${heightClassName} w-auto object-contain shrink-0`}
    />
  );

  return (
    <Link
      to="/"
      className={`inline-flex items-center group transition-transform duration-200 active:scale-95 ${className}`}
      aria-label="TMR Car Care Homepage"
    >
      {useGlass ? (
        <LiquidGlassSurface className="min-h-[58px] px-5 py-2.5 border border-white/20 group-hover:border-[#FF4B00]/60 transition-colors">
          {content}
        </LiquidGlassSurface>
      ) : (
        <div className="relative flex items-center justify-center px-2 py-1">
          {content}
        </div>
      )}
    </Link>
  );
};
