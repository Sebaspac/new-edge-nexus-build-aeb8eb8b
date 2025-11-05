import { useState } from 'react';
import { LazyVideo } from './LazyVideo';
import { shouldLoadVideo, isMobileDevice } from '@/utils/adaptiveLoading';
import { VideoSkeleton } from './VideoSkeleton';

interface OptimizedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  priority?: 'high' | 'medium' | 'low';
}

/**
 * Optimized Video Component with adaptive loading
 * - Desktop: Autoplay with lazy loading
 * - Mobile/Tablet: Poster image + click-to-play (saves bandwidth)
 * - Slow connections: Poster only
 */
export const OptimizedVideo = ({
  src,
  poster,
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  priority = 'medium'
}: OptimizedVideoProps) => {
  const [userInteracted, setUserInteracted] = useState(false);
  const isMobile = isMobileDevice();
  const shouldLoad = shouldLoadVideo();
  
  // On mobile or slow connection, require user interaction
  const requiresInteraction = isMobile || !shouldLoad;
  const shouldRenderVideo = !requiresInteraction || userInteracted;

  const handleInteraction = () => {
    setUserInteracted(true);
  };

  if (!shouldRenderVideo) {
    return (
      <VideoSkeleton
        poster={poster}
        onClick={shouldLoad ? handleInteraction : undefined}
        className={className}
        showPlayButton={shouldLoad}
      />
    );
  }

  return (
    <LazyVideo
      src={src}
      poster={poster}
      className={className}
      autoPlay={autoPlay && !requiresInteraction}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={priority === 'high' ? 'metadata' : 'none'}
    />
  );
};
