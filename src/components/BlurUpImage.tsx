import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BlurUpImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  blurDataURL?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

// Generate a simple blur placeholder
const generateBlurPlaceholder = (width = 8, height = 8) => {
  return `data:image/svg+xml;base64,${btoa(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#1a1a2e"/>
      <rect width="50%" height="50%" x="25%" y="25%" fill="#16213e" opacity="0.7"/>
    </svg>`
  )}`;
};

export const BlurUpImage: React.FC<BlurUpImageProps> = ({
  src,
  alt,
  className,
  blurDataURL,
  priority = false,
  sizes = '100vw',
  quality = 80,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [imageSrc, setImageSrc] = useState(
    priority ? src : (blurDataURL || generateBlurPlaceholder())
  );
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: '50px',
        threshold: 0.1 
      }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [priority]);

  // Load high-quality image when in view
  useEffect(() => {
    if (!isInView || isLoaded) return;

    const img = new Image();
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    
    img.onerror = () => {
      // Fallback to original src even if it fails
      setImageSrc(src);
      setIsLoaded(true);
    };
    
    img.src = src;
  }, [isInView, src, isLoaded]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        className={cn(
          "transition-all duration-700 ease-out",
          isLoaded ? "blur-0 scale-100" : "blur-sm scale-105",
          className
        )}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        sizes={sizes}
        {...props}
      />
      
      {/* Loading skeleton overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted-foreground/20 to-muted animate-pulse" />
      )}
    </div>
  );
};