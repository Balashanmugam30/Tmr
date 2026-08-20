import React from 'react';

interface DividerProps {
  className?: string;
  dark?: boolean;
}

export const Divider: React.FC<DividerProps> = ({
  className = '',
  dark = false,
}) => {
  return (
    <hr
      className={`w-full border-t ${
        dark ? 'border-tmr-softblack/20' : 'border-tmr-concrete'
      } ${className}`}
    />
  );
};
