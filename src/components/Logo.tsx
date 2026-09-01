import React from 'react';
import { Link } from 'react-router-dom';
import { LiquidGlassSurface } from './LiquidGlassSurface';
import { useNavbarTheme } from '@/context/NavbarThemeContext';

export const LOGO_LIGHT_TRANSPARENT_SRC = '/images/tmr-ai-car-care-logo-dark.svg';
export const LOGO_DARK_TRANSPARENT_SRC = '/images/tmr-ai-car-care-logo-light.svg';

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
  const { theme } = useNavbarTheme();

  const content = (
    <div className={`relative flex items-center justify-center shrink-0 ${imgClassName} ${heightClassName} max-h-[50px]`}>
      {/* LIGHT LOGO VARIANT (White artwork for dark backgrounds) */}
      <img
        src={LOGO_LIGHT_TRANSPARENT_SRC}
        alt="TMR AI Car Care"
        className={`absolute inset-0 w-full h-full object-contain shrink-0 transition-opacity duration-200 ease-out ${
          theme === 'dark' ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* DARK LOGO VARIANT (Dark artwork for light backgrounds) */}
      <img
        src={LOGO_DARK_TRANSPARENT_SRC}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full object-contain shrink-0 transition-opacity duration-200 ease-out ${
          theme === 'light' ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />
    </div>
  );

  return (
    <Link
      to="/"
      className={`inline-flex items-center group transition-transform duration-200 active:scale-95 ${className}`}
      aria-label="TMR AI Car Care Homepage"
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
