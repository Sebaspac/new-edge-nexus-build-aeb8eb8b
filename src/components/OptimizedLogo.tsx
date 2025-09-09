import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check if image is already cached
    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setHasError(true);
    img.src = '/lovable-uploads/7081eb62-a5ae-4260-97c8-e5b31dc0040e.png';
  }, []);

  return (
    <div 
      className={`relative ${className} flex-shrink-0`}
      style={{ 
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        background: 'transparent'
      }}
    >
      {/* CSS Background Fallback - Transparent */}
      <div 
        className="absolute inset-0 opacity-100 transition-opacity duration-300"
        style={{
          background: 'transparent',
          opacity: isLoaded ? 0 : 1
        }}
      />
      
      {/* Actual PNG Logo */}
      <motion.img
        src="/lovable-uploads/7081eb62-a5ae-4260-97c8-e5b31dc0040e.png"
        alt="New Edge Logo"
        width={width}
        height={height}
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        // Performance optimizations
        loading="eager"
        decoding="async"
        // Responsive sizes
        sizes="(max-width: 640px) 24px, (max-width: 768px) 32px, 32px"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      
      {/* Error fallback - SVG version */}
      {hasError && (
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="fallbackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          <rect
            width="32"
            height="32"
            rx="8"
            fill="url(#fallbackGradient)"
          />
          <text
            x="16"
            y="20"
            textAnchor="middle"
            fill="white"
            fontSize="12"
            fontWeight="bold"
            fontFamily="Inter, sans-serif"
          >
            NE
          </text>
        </svg>
      )}
    </div>
  );
};