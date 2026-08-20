import React from 'react';

interface SectionNumberProps {
  number: string;
  className?: string;
  accent?: boolean;
}

export const SectionNumber: React.FC<SectionNumberProps> = ({
  number,
  className = '',
  accent = false,
}) => {
  return (
    <span
      className={`font-manrope font-extrabold text-3xl md:text-5xl select-none ${
        accent ? 'text-tmr-orange' : 'text-tmr-muted opacity-40'
      } ${className}`}
    >
      {number}
    </span>
  );
};
