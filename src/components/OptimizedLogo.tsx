import React from 'react';
import logoHorizontal from '@/assets/logo-horizontal.svg';

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
      src={logoHorizontal}
      alt="New Edge Logo"
      width={width}
      height={height}
      className={`${className} object-contain`}
    />
  );
};