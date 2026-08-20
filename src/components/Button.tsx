import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  target?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  icon,
  iconPosition = 'right',
  href,
  target,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-manrope font-bold uppercase tracking-wider transition-all duration-300 rounded-tmr cursor-pointer focus:outline-none';

  const variantStyles = {
    primary:
      'bg-tmr-black text-white hover:bg-tmr-orange hover:text-white border border-transparent shadow-sm',
    secondary:
      'bg-transparent text-tmr-softblack border border-tmr-softblack hover:bg-tmr-black hover:text-white',
    accent:
      'bg-tmr-orange text-white hover:bg-tmr-black hover:text-white border border-transparent',
    outline:
      'bg-transparent text-white border border-white/30 hover:border-tmr-orange hover:text-tmr-orange',
    ghost:
      'bg-transparent text-tmr-softblack hover:text-tmr-orange border border-transparent',
  };

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-2',
    md: 'text-xs md:text-sm px-6 py-3.5 gap-2.5',
    lg: 'text-sm md:text-base px-8 py-4 gap-3',
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-block">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-block">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
