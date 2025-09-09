import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  blurDataURL?: string;
}

// LQIP blur data URL for loading state
const DEFAULT_BLUR_DATA_URL = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmM2Y0ZjYiLz48L3N2Zz4=";

// Generate responsive breakpoints for srcset
const generateSrcSet = (baseSrc: string, format: 'avif' | 'webp' | 'jpg') => {
  const breakpoints = [320, 640, 960, 1280, 1920];
  const extension = format === 'jpg' ? 'jpg' : format;
  const baseUrl = baseSrc.replace(/\.[^/.]+$/, '');
  
  return breakpoints
    .map(width => `${baseUrl}-${width}.${extension} ${width}w`)
    .join(', ');
};

// Check if browser supports modern formats
const supportsWebP = (): boolean => {
  if (typeof window === 'undefined') return false;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

const supportsAVIF = (): boolean => {
  if (typeof window === 'undefined') return false;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 1;
  return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
};

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
  blurDataURL = DEFAULT_BLUR_DATA_URL,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current || typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: '100px', // Start loading 100px before element comes into view
        threshold: 0.01 
      }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setIsLoaded(true); // Still show the fallback image
  };

  // Generate format-specific srcsets
  const avifSrcSet = generateSrcSet(src, 'avif');
  const webpSrcSet = generateSrcSet(src, 'webp');
  const jpegSrcSet = generateSrcSet(src, 'jpg');

  // Fallback image (highest quality breakpoint)
  const fallbackSrc = src.replace(/\.[^/.]+$/, '-1280.jpg');

  return (
    <picture>
      {/* Modern formats with progressive enhancement */}
      {isInView && (
        <>
          <source
            type="image/avif"
            srcSet={avifSrcSet}
            sizes={sizes}
          />
          <source
            type="image/webp"
            srcSet={webpSrcSet}
            sizes={sizes}
          />
        </>
      )}
      
      <img
        ref={imgRef}
        src={isInView ? fallbackSrc : blurDataURL}
        srcSet={isInView ? jpegSrcSet : undefined}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          'lazy-img',
          isLoaded && 'is-loaded',
          className
        )}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        sizes={isInView ? sizes : undefined}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          aspectRatio: `${width}/${height}`,
          background: `url('${blurDataURL}') center/cover no-repeat`,
          contentVisibility: priority ? 'visible' : 'auto',
          containIntrinsicSize: `${width}px ${height}px`
        }}
        {...props}
      />
    </picture>
  );
};

// Hero/Above-the-fold optimized component
export const HeroImage: React.FC<OptimizedImageProps> = (props) => {
  return (
    <OptimizedImage
      {...props}
      priority={true}
      sizes="(max-width: 768px) 100vw, 80vw"
      className={cn('hero-image', props.className)}
    />
  );
};

// Standard below-the-fold component
export const LazyOptimizedImage: React.FC<OptimizedImageProps> = (props) => {
  return (
    <OptimizedImage
      {...props}
      priority={false}
      sizes="(max-width: 768px) 100vw, 50vw"
      className={cn('standard-image', props.className)}
    />
  );
};

// Preload component for critical images
export const ImagePreloader: React.FC<{ 
  src: string; 
  priority?: boolean;
  sizes?: string;
}> = ({ src, priority = true, sizes = "(max-width: 768px) 100vw, 80vw" }) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src.replace(/\.[^/.]+$/, '-1280.avif');
    link.setAttribute('imagesrcset', generateSrcSet(src, 'avif'));
    link.setAttribute('imagesizes', sizes);
    
    if (priority) {
      link.setAttribute('fetchpriority', 'high');
    }

    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, [src, priority, sizes]);

  return null;
};