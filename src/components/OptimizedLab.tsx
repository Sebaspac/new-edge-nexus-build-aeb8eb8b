import React, { useEffect, useState } from 'react';
import { preloadPageVideos, VideoPreloadProgress } from '@/utils/videoPreloader';
import Lab from '../pages/Lab';
import { LoadingScreen } from '@/components/LoadingScreen';

const OptimizedLab = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState<VideoPreloadProgress>({ total: 0, loaded: 0, progress: 0 });

  useEffect(() => {
    const loadVideos = async () => {
      try {
        await preloadPageVideos('lab', setProgress);
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

  return <Lab />;
};

export default OptimizedLab;