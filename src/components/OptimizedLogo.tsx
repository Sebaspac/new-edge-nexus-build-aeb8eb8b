import React from 'react';

interface OptimizedLogoProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

export const OptimizedLogo: React.FC<OptimizedLogoProps> = ({ 
  className = "h-8 w-8", 
  width = 32,
  height = 32 
}) => {
  return (
    <img
      src="/assets/7081eb62-a5ae-4260-97c8-e5b31dc0040e.png"
      alt="New Edge Logo"
      width={width}
      height={height}
      className={`${className} object-contain`}
    />
  );
};