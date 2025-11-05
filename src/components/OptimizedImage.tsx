import { useState, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { getOptimalImageQuality, isMobileDevice } from '@/utils/adaptiveLoading';
import { ImageSkeleton } from './ImageSkeleton';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: 'high' | 'medium' | 'low';
  aspectRatio?: string;
  sizes?: string;
  webpSrc?: string;
  mobileSrc?: string;
  tabletSrc?: string;
}

/**
 * Optimized Image Component with:
 * - Lazy loading with Intersection Observer
 * - WebP support with PNG fallback
 * - Responsive srcset for different screen sizes
 * - Blur-up placeholder (LQIP)
 * - Adaptive quality based on connection
 */
export const OptimizedImage = ({
  src,
  alt,
  className = '',
  priority = 'medium',
  aspectRatio,
  sizes,
  webpSrc,
  mobileSrc,
  tabletSrc
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);
  
  const isInView = useIntersectionObserver(imgRef, {
    priority,
    triggerOnce: true
  });

  const quality = getOptimalImageQuality();
  const isMobile = isMobileDevice();
  
  // Determine which source to use based on device
  const getSrcForDevice = () => {
    if (isMobile && mobileSrc) return mobileSrc;
    if (!isMobile && tabletSrc) return tabletSrc;
    return src;
  };

  const finalSrc = getSrcForDevice();
  const shouldLoad = priority === 'high' || isInView;

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    console.warn(`Failed to load image: ${finalSrc}`);
  };

  return (
    <div
      ref={imgRef}
      className={cn('relative overflow-hidden', className)}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {/* Skeleton/Placeholder */}
      {!isLoaded && !hasError && <ImageSkeleton />}
      
      {/* Actual Image */}
      {shouldLoad && !hasError && (
        <picture>
          {/* WebP source if provided */}
          {webpSrc && quality !== 'low' && (
            <source srcSet={webpSrc} type="image/webp" />
          )}
          
          {/* Responsive sources */}
          {mobileSrc && (
            <source
              media="(max-width: 767px)"
              srcSet={mobileSrc}
            />
          )}
          {tabletSrc && (
            <source
              media="(min-width: 768px) and (max-width: 1023px)"
              srcSet={tabletSrc}
            />
          )}
          
          {/* Fallback image */}
          <img
            src={finalSrc}
            alt={alt}
            className={cn(
              'w-full h-full object-cover transition-opacity duration-300',
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
            loading={priority === 'high' ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            sizes={sizes}
          />
        </picture>
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <p className="text-sm text-muted-foreground">Failed to load image</p>
        </div>
      )}
    </div>
  );
};
