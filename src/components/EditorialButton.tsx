import React from 'react';

interface EditorialButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  className?: string;
  dark?: boolean;
}

export const EditorialButton: React.FC<EditorialButtonProps> = ({
  children,
  href,
  className = '',
  dark = false,
  ...props
}) => {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center gap-3 font-manrope font-bold text-sm md:text-base tracking-wide uppercase transition-colors ${
        dark ? 'text-white hover:text-tmr-orange' : 'text-tmr-softblack hover:text-tmr-orange'
      } ${className}`}
      {...props}
    >
      <span>{children}</span>
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5 text-tmr-orange">
        →
      </span>
      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-current scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
    </a>
  );
};
