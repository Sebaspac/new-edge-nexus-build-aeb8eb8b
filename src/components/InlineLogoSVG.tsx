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
      {/* NE Logo design matching the uploaded PNG */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5658DF" />
          <stop offset="100%" stopColor="#8476EF" />
        </linearGradient>
      </defs>
      
      {/* Rounded square background */}
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="8"
        ry="8"
        fill="url(#logoGradient)"
      />
      
      {/* Letter N */}
      <path
        d="M7 9 L7 23 L9.5 23 L9.5 16.5 L13.5 23 L16 23 L16 9 L13.5 9 L13.5 15.5 L9.5 9 L7 9 Z"
        fill="white"
      />
      
      {/* Letter E */}
      <path
        d="M18 9 L18 23 L25 23 L25 21 L20.5 21 L20.5 17.5 L24.5 17.5 L24.5 15.5 L20.5 15.5 L20.5 11 L25 11 L25 9 L18 9 Z"
        fill="white"
      />
    </svg>
  );
};