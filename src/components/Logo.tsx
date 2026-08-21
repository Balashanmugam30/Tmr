import React from 'react';
import { Link } from 'react-router-dom';
import { LiquidGlassSurface } from './LiquidGlassSurface';

export const CANONICAL_TMR_LOGO_SRC = '/images/tmr-logo-navbar.png';

interface LogoProps {
  className?: string;
  heightClassName?: string;
  imgClassName?: string;
  useGlass?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  heightClassName = 'h-10 sm:h-[44px] md:h-[48px]',
  imgClassName = 'w-[140px] sm:w-[155px] md:w-[165px]',
  useGlass = true,
}) => {
  const content = (
    <img
      src={CANONICAL_TMR_LOGO_SRC}
      alt="TMR Car Care - Precision • Protection • Perfection"
      className={`${imgClassName} ${heightClassName} object-contain shrink-0 max-h-[50px] filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]`}
    />
  );

  return (
    <Link
      to="/"
      className={`inline-flex items-center group transition-transform duration-200 active:scale-95 ${className}`}
      aria-label="TMR Car Care Homepage"
    >
      {useGlass ? (
        <LiquidGlassSurface
          roundedClassName="rounded-[20px]"
          className="h-[62px] w-[175px] sm:w-[190px] px-3.5 py-1.5 border border-white/20 group-hover:border-[#FF4B00]/60 transition-colors flex items-center justify-center"
        >
          {content}
        </LiquidGlassSurface>
      ) : (
        <div className="relative flex items-center justify-center p-0.5">
          {content}
        </div>
      )}
    </Link>
  );
};
