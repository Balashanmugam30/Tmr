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
  heightClassName = 'h-7 sm:h-8 md:h-[34px]',
  useGlass = true,
}) => {
  const content = (
    <img
      src="/images/tmr-logo-navbar.png"
      alt="TMR Car Care - Precision • Protection • Perfection"
      className={`${heightClassName} w-auto object-contain shrink-0 max-h-[38px] filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]`}
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
          className="h-[62px] w-[175px] sm:w-[185px] px-4 py-2 border border-white/20 group-hover:border-[#FF4B00]/60 transition-colors flex items-center justify-center"
        >
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
