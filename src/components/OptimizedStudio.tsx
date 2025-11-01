import React, { useEffect, useState } from 'react';
import { preloadPageVideos, VideoPreloadProgress } from '@/utils/videoPreloader';
import Studio from '../pages/Studio';
import { LoadingScreen } from '@/components/LoadingScreen';

const OptimizedStudio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState<VideoPreloadProgress>({ total: 0, loaded: 0, progress: 0 });

  useEffect(() => {
    const loadVideos = async () => {
      try {
        await preloadPageVideos('studio', setProgress);
      } catch (error) {
        console.error('Error preloading videos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadVideos();
    
    // Auto-skip after 5 seconds
    const autoSkipTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(autoSkipTimer);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen progress={progress.progress} />;
  }

  return <Studio />;
};

export default OptimizedStudio;