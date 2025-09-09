import React from 'react';

interface InlineLogoSVGProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

export const InlineLogoSVG: React.FC<InlineLogoSVGProps> = ({ 
  className = "h-8 w-8", 
  width,
  height 
}) => {
  return (
    <svg
      className={className}
      width={width || "32"}
      height={height || "32"} 
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Modern geometric logo design */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(270, 91%, 65%)" />
          <stop offset="100%" stopColor="hsl(210, 100%, 60%)" />
        </linearGradient>
      </defs>
      
      {/* Main logo shape - abstract N and E */}
      <path
        d="M4 8 L12 8 L20 20 L20 8 L28 8 L28 24 L20 24 L12 12 L12 24 L4 24 Z"
        fill="url(#logoGradient)"
      />
      
      {/* Accent dot */}
      <circle cx="26" cy="6" r="2" fill="hsl(50, 100%, 60%)" />
      
      {/* Edge accent line */}
      <rect x="4" y="26" width="24" height="2" rx="1" fill="url(#logoGradient)" opacity="0.6" />
    </svg>
  );
};