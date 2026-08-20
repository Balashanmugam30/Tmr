import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  heightClassName?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  heightClassName = 'h-8 sm:h-9 md:h-10 lg:h-[40px]',
}) => {
  return (
    <Link
      to="/"
      className={`inline-flex items-center group transition-transform duration-200 active:scale-95 ${className}`}
      aria-label="TMR Car Care Homepage"
    >
      <div className="relative flex items-center justify-center bg-[#F5F4EF] backdrop-blur-xl border border-black/10 px-5 py-2.5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-colors group-hover:border-[#FF4B00]/50 min-h-[58px]">
        <img
          src="/images/tmr-logo-tight.png"
          alt="TMR Car Care - Precision • Protection • Perfection"
          className={`${heightClassName} w-auto object-contain shrink-0`}
        />
      </div>
    </Link>
  );
};
