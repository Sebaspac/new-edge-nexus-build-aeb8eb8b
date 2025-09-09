// Demo and testing utilities for the hard preloader

import { hardPreloader, initializeHardPreload } from './hardPreloader';
import { IMAGE_MANIFEST, estimateTotalSize, shouldUseChunkedLoading } from './imageManifest';

export interface PreloadStats {
  manifestSize: number;
  estimatedSizeMB: number;
  shouldChunk: boolean;
  cacheStats: {
    size: number;
    urls: string[];
  };
}

/**
 * Get current preload statistics
 */
export function getPreloadStats(): PreloadStats {
  return {
    manifestSize: IMAGE_MANIFEST.length,
    estimatedSizeMB: estimateTotalSize() / 1024,
    shouldChunk: shouldUseChunkedLoading(),
    cacheStats: hardPreloader.getCacheStats()
  };
}

/**
 * Log preload statistics to console
 */
export function logPreloadStats(): void {
  const stats = getPreloadStats();
  
  console.group('🚀 Hard Preloader Statistics');
  console.log(`📊 Image Manifest Size: ${stats.manifestSize} images`);
  console.log(`💾 Estimated Total Size: ${stats.estimatedSizeMB.toFixed(1)} MB`);
  console.log(`📦 Using Chunked Loading: ${stats.shouldChunk ? 'Yes' : 'No'}`);
  console.log(`🎯 Images in Cache: ${stats.cacheStats.size}/${stats.manifestSize}`);
  
  if (stats.cacheStats.size > 0) {
    console.log('✅ Cached Images:', stats.cacheStats.urls.slice(0, 5));
    if (stats.cacheStats.size > 5) {
      console.log(`... and ${stats.cacheStats.size - 5} more`);
    }
  }
  
  console.groupEnd();
}

/**
 * Performance test: measure preload time
 */
export async function runPreloadPerformanceTest(): Promise<{
  duration: number;
  success: boolean;
  result: any;
}> {
  const startTime = performance.now();
  
  try {
    const result = await initializeHardPreload();
    const duration = performance.now() - startTime;
    
    console.log(`⏱️ Preload Performance Test: ${duration.toFixed(2)}ms`);
    
    return {
      duration,
      success: result.success,
      result
    };
  } catch (error) {
    const duration = performance.now() - startTime;
    console.error('❌ Preload Performance Test Failed:', error);
    
    return {
      duration,
      success: false,
      result: error
    };
  }
}

/**
 * Check Web Vitals after preload (requires web-vitals library)
 */
export function measureWebVitals(): void {
  // Simple performance measurement without external dependencies
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'largest-contentful-paint') {
        console.log(`🎯 LCP after preload: ${entry.startTime.toFixed(2)}ms`);
      }
      if (entry.entryType === 'layout-shift') {
        console.log(`📐 CLS: ${(entry as any).value?.toFixed(4) || 'N/A'}`);
      }
      if (entry.entryType === 'first-input') {
        const fidEntry = entry as PerformanceEventTiming;
        console.log(`👆 FID: ${fidEntry.processingStart - fidEntry.startTime}ms`);
      }
    }
  });

  try {
    observer.observe({ 
      entryTypes: ['largest-contentful-paint', 'layout-shift', 'first-input'] 
    });
    
    // Auto-disconnect after 10 seconds
    setTimeout(() => observer.disconnect(), 10000);
  } catch (error) {
    console.warn('Performance measurement not supported:', error);
  }
}

/**
 * Development helper: expose preloader to global scope
 */
export function exposePreloaderToGlobal(): void {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    (window as any).hardPreloader = {
      stats: getPreloadStats,
      logStats: logPreloadStats,
      runTest: runPreloadPerformanceTest,
      measureVitals: measureWebVitals,
      cache: hardPreloader.getCacheStats(),
      clear: () => hardPreloader.clearCache()
    };
    
    console.log('🔧 Hard Preloader exposed to window.hardPreloader for debugging');
  }
}