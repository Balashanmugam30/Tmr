import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  clean?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  clean = false,
  ...props
}) => {
  return (
    <div
      className={`mx-auto max-w-container w-full ${
        clean ? '' : 'px-mobile-margin md:px-desktop-margin'
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
