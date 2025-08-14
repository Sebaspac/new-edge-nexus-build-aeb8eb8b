import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  webpSrc?: string;
  avifSrc?: string;
  sizes?: string;
  srcSet?: string;
  priority?: boolean;
  quality?: number;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  fallback = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+',
  webpSrc,
  avifSrc,
  sizes = '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
  srcSet,
  priority = false,
  quality = 75,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(priority ? src : fallback);
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;
    
    if (imageRef && !priority && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(imageRef);
          }
        },
        { 
          rootMargin: '50px',
          threshold: 0.1
        }
      );
      
      observer.observe(imageRef);
    }
    
    return () => {
      if (observer && imageRef) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef, priority]);

  useEffect(() => {
    if (isInView && imageSrc === fallback && !hasError) {
      const img = new Image();
      
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      
      img.onerror = () => {
        setHasError(true);
        setImageSrc(src); // Fallback to original src
      };
      
      // Use WebP if supported and available
      if (webpSrc && supportsWebP()) {
        img.src = webpSrc;
      } else if (avifSrc && supportsAVIF()) {
        img.src = avifSrc;
      } else {
        img.src = src;
      }
    }
  }, [isInView, src, webpSrc, avifSrc, imageSrc, fallback, hasError]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    if (imageSrc !== src) {
      setImageSrc(src);
    }
  };

  return (
    <>
      {(webpSrc || avifSrc) ? (
        <picture>
          {avifSrc && <source srcSet={avifSrc} type="image/avif" sizes={sizes} />}
          {webpSrc && <source srcSet={webpSrc} type="image/webp" sizes={sizes} />}
          <img
            ref={setImageRef}
            src={imageSrc}
            alt={alt}
            className={cn(
              'transition-opacity duration-300',
              isLoaded ? 'opacity-100' : 'opacity-0',
              className
            )}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            srcSet={srcSet}
            sizes={sizes}
            {...props}
          />
        </picture>
      ) : (
        <img
          ref={setImageRef}
          src={imageSrc}
          alt={alt}
          className={cn(
            'transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0',
            className
          )}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          srcSet={srcSet}
          sizes={sizes}
          {...props}
        />
      )}
    </>
  );
};

// Feature detection functions
function supportsWebP(): boolean {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
}

function supportsAVIF(): boolean {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  try {
    return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
  } catch {
    return false;
  }
}