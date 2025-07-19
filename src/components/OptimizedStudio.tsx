import React, { lazy, Suspense } from 'react';

// Lazy load the Studio page
const StudioContent = lazy(() => import('../pages/Studio'));

const OptimizedStudio = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
      </div>
    }>
      <StudioContent />
    </Suspense>
  );
};

export default OptimizedStudio;