import React, { useEffect, useState } from 'react';
import { preloadPageVideos, VideoPreloadProgress } from '@/utils/videoPreloader';
import Media from '../pages/Media';
import { Button } from '@/components/ui/button';

const OptimizedMedia = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState<VideoPreloadProgress>({ total: 0, loaded: 0, progress: 0 });
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        await preloadPageVideos('media', setProgress);
      } catch (error) {
        console.error('Error preloading videos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadVideos();
    
    // Show skip button after 3 seconds
    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 3000);
    
    // Auto-skip after 5 seconds
    const autoSkipTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(skipTimer);
      clearTimeout(autoSkipTimer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <div className="text-center">
          <p className="text-sm text-gray-600 font-medium">Videos werden geladen...</p>
          <p className="text-xs text-gray-500 mt-1">
            {progress.loaded} / {progress.total} ({Math.round(progress.progress)}%)
          </p>
        </div>
        {showSkip && (
          <Button 
            onClick={() => setIsLoading(false)}
            variant="outline"
            size="sm"
            className="mt-4"
          >
            Überspringen und fortfahren
          </Button>
        )}
      </div>
    );
  }

  return <Media />;
};

export default OptimizedMedia;