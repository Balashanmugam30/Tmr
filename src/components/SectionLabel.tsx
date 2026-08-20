import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  dotColor?: string;
  light?: boolean;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  children,
  className = '',
  dotColor = 'bg-tmr-orange',
  light = false,
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest font-manrope ${
        light ? 'text-white' : 'text-tmr-softblack'
      } ${className}`}
    >
      <span className={`w-2 h-2 rounded-full ${dotColor} inline-block`} />
      <span>{children}</span>
    </div>
  );
};
