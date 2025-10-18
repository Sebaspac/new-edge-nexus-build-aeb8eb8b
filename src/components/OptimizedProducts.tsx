import React, { lazy, Suspense, useEffect, useState } from 'react';
import { preloadPageVideos, VideoPreloadProgress } from '@/utils/videoPreloader';

// Lazy load the Products page
const ProductsContent = lazy(() => import('../pages/Products'));

const OptimizedProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState<VideoPreloadProgress>({ total: 0, loaded: 0, progress: 0 });

  useEffect(() => {
    const loadVideos = async () => {
      try {
        await preloadPageVideos('products', setProgress);
      } catch (error) {
        console.error('Error preloading videos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadVideos();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        <div className="text-center">
          <p className="text-sm text-gray-600 font-medium">Videos werden geladen...</p>
          <p className="text-xs text-gray-500 mt-1">
            {progress.loaded} / {progress.total} ({Math.round(progress.progress)}%)
          </p>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
};

export default OptimizedProducts;
