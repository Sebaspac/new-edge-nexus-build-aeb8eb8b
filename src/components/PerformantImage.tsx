import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface PerformantImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

const BLUR_DATA_URL = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxYTFhMmUiLz48cmVjdCB3aWR0aD0iNTAlIiBoZWlnaHQ9IjUwJSIgeD0iMjUlIiB5PSIyNSUiIGZpbGw9IiMxNjIxM2UiIG9wYWNpdHk9IjAuNyIvPjwvc3ZnPg==";

export const PerformantImage: React.FC<PerformantImageProps> = ({
  src,
  alt,
  className,
  priority = false,
  sizes = '100vw',
  placeholder = 'blur',
  blurDataURL = BLUR_DATA_URL,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [currentSrc, setCurrentSrc] = useState(
    priority ? src : (placeholder === 'blur' ? blurDataURL : '')
  );
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
        rootMargin: '100px',
        threshold: 0.01 
      }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [priority]);

  // Load actual image when in view
  useEffect(() => {
    if (!isInView || isLoaded) return;

    const img = new Image();
    
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
    };
    
    img.onerror = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
    };
    
    if (priority) {
      img.fetchPriority = 'high';
    }
    
    img.src = src;
  }, [isInView, src, isLoaded, priority]);

  return (
    <img
      ref={imgRef}
      src={currentSrc}
      alt={alt}
      className={cn(
        "transition-all duration-500 ease-out",
        isLoaded 
          ? "blur-0 scale-100 opacity-100" 
          : placeholder === 'blur' 
            ? "blur-sm scale-105 opacity-90" 
            : "opacity-0",
        className
      )}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      sizes={sizes}
      {...props}
    />
  );
};