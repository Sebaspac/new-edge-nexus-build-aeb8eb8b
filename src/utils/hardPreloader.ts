// Hard preloader with comprehensive image caching and progress tracking

import { IMAGE_MANIFEST, PRELOAD_BUDGET, getCoreImages, shouldUseChunkedLoading, type ImageAsset } from './imageManifest';

export interface PreloadProgress {
  loaded: number;
  total: number;
  percentage: number;
  failed: number;
  skipped: number;
  currentImage?: string;
  phase: 'initializing' | 'loading' | 'completed' | 'failed';
}

export interface PreloadResult {
  success: boolean;
  totalImages: number;
  loadedImages: number;
  failedImages: number;
  skippedImages: number;
  loadTimeMs: number;
  averageImageSizeKB?: number;
  cacheHitRate: number;
}

class HardPreloader {
  private cache = new Map<string, HTMLImageElement>();
  private loadPromises = new Map<string, Promise<void>>();
  private progressCallback?: (progress: PreloadProgress) => void;
  private abortController = new AbortController();

  setProgressCallback(callback: (progress: PreloadProgress) => void) {
    this.progressCallback = callback;
  }

  private updateProgress(progress: Partial<PreloadProgress>) {
    if (this.progressCallback) {
      const currentProgress = {
        loaded: 0,
        total: 0,
        percentage: 0,
        failed: 0,
        skipped: 0,
        phase: 'loading' as const,
        ...progress
      };
      
      if (currentProgress.total > 0) {
        currentProgress.percentage = Math.round(
          (currentProgress.loaded / currentProgress.total) * 100
        );
      }
      
      this.progressCallback(currentProgress);
    }
  }

  private async preloadSingleImage(
    imageAsset: ImageAsset, 
    retryCount = 0
  ): Promise<{ success: boolean; cached: boolean }> {
    const { url } = imageAsset;
    
    // Check if already in cache
    if (this.cache.has(url)) {
      return { success: true, cached: true };
    }

    // Check if already loading
    if (this.loadPromises.has(url)) {
      try {
        await this.loadPromises.get(url);
        return { success: this.cache.has(url), cached: false };
      } catch {
        return { success: false, cached: false };
      }
    }

    const loadPromise = new Promise<void>((resolve, reject) => {
      const img = new Image();
      let timeoutId: NodeJS.Timeout;

      const cleanup = () => {
        clearTimeout(timeoutId);
        img.onload = null;
        img.onerror = null;
        this.loadPromises.delete(url);
      };

      const handleSuccess = () => {
        cleanup();
        this.cache.set(url, img);
        resolve();
      };

      const handleError = (error?: any) => {
        cleanup();
        console.warn(`Failed to preload image: ${url}`, error);
        reject(error || new Error('Image load failed'));
      };

      // Set up timeout
      timeoutId = setTimeout(() => {
        handleError(new Error('Timeout'));
      }, PRELOAD_BUDGET.TIMEOUT_PER_IMAGE_MS);

      img.onload = handleSuccess;
      img.onerror = handleError;

      // Set loading attributes for performance
      img.crossOrigin = 'anonymous';
      img.decoding = 'async';
      
      // Set priority based on image priority
      if ('fetchPriority' in img) {
        (img as any).fetchPriority = imageAsset.priority === 'critical' ? 'high' : 
                                      imageAsset.priority === 'high' ? 'high' : 'low';
      }

      img.src = url;
    });

    this.loadPromises.set(url, loadPromise);

    try {
      await loadPromise;
      return { success: true, cached: false };
    } catch (error) {
      // Retry logic
      if (retryCount < PRELOAD_BUDGET.MAX_RETRIES) {
        const backoffDelay = PRELOAD_BUDGET.RETRY_DELAY_MS * Math.pow(2, retryCount);
        await new Promise(resolve => setTimeout(resolve, backoffDelay));
        
        return this.preloadSingleImage(imageAsset, retryCount + 1);
      }
      
      return { success: false, cached: false };
    }
  }

  private async preloadImageBatch(
    images: ImageAsset[],
    batchSize = 6
  ): Promise<{ loaded: number; failed: number; cached: number }> {
    let loaded = 0;
    let failed = 0;
    let cached = 0;

    // Process in batches to avoid overwhelming the browser
    for (let i = 0; i < images.length; i += batchSize) {
      const batch = images.slice(i, i + batchSize);
      
      const batchPromises = batch.map(async (imageAsset) => {
        this.updateProgress({
          currentImage: imageAsset.url,
          loaded: loaded + cached,
          total: images.length,
          failed,
          phase: 'loading'
        });

        const result = await this.preloadSingleImage(imageAsset);
        
        if (result.success) {
          if (result.cached) cached++;
          else loaded++;
        } else {
          failed++;
        }

        return result;
      });

      await Promise.allSettled(batchPromises);

      // Update progress after each batch
      this.updateProgress({
        loaded: loaded + cached,
        total: images.length,
        failed,
        phase: 'loading'
      });
    }

    return { loaded, failed, cached };
  }

  async preloadAllImages(): Promise<PreloadResult> {
    const startTime = Date.now();
    
    this.updateProgress({
      loaded: 0,
      total: IMAGE_MANIFEST.length,
      failed: 0,
      skipped: 0,
      phase: 'initializing'
    });

    console.time('🚀 Hard Preload: All Images');
    console.log(`🖼️ Starting hard preload of ${IMAGE_MANIFEST.length} images...`);

    try {
      let totalLoaded = 0;
      let totalFailed = 0;
      let totalCached = 0;
      let totalSkipped = 0;

      const shouldChunk = shouldUseChunkedLoading();
      
      if (shouldChunk) {
        console.log('📦 Using chunked loading due to budget constraints');
        
        // Load core images first (blocking)
        const coreImages = getCoreImages();
        console.log(`🎯 Loading ${coreImages.length} core images...`);
        
        const coreResult = await this.preloadImageBatch(coreImages);
        totalLoaded += coreResult.loaded;
        totalFailed += coreResult.failed;
        totalCached += coreResult.cached;

        // Check if core loading failed too much
        const coreSuccessRate = (coreResult.loaded + coreResult.cached) / coreImages.length;
        if (coreSuccessRate < 0.95) { // 95% success rate required for core
          throw new Error(`Core image loading failed: ${coreSuccessRate * 100}% success rate`);
        }

        // Load remaining images in background (non-blocking for now)
        const remainingImages = IMAGE_MANIFEST.filter(img => 
          img.priority !== 'critical' && img.priority !== 'high'
        );
        
        if (remainingImages.length > 0) {
          console.log(`⏳ Loading ${remainingImages.length} remaining images...`);
          const remainingResult = await this.preloadImageBatch(remainingImages);
          totalLoaded += remainingResult.loaded;
          totalFailed += remainingResult.failed;
          totalCached += remainingResult.cached;
        }
      } else {
        // Load all images if within budget
        const result = await this.preloadImageBatch(IMAGE_MANIFEST);
        totalLoaded = result.loaded;
        totalFailed = result.failed;
        totalCached = result.cached;
      }

      // Check skip threshold
      const skipPercentage = (totalFailed / IMAGE_MANIFEST.length) * 100;
      const maxSkipPercentage = PRELOAD_BUDGET.MAX_SKIP_PERCENTAGE;
      
      if (skipPercentage > maxSkipPercentage) {
        console.warn(`⚠️ Skip percentage (${skipPercentage.toFixed(1)}%) exceeds maximum (${maxSkipPercentage}%)`);
        totalSkipped = totalFailed;
        totalFailed = 0; // Convert to skipped
      }

      const loadTimeMs = Date.now() - startTime;
      const cacheHitRate = totalCached / (totalLoaded + totalCached + totalFailed);

      this.updateProgress({
        loaded: totalLoaded + totalCached,
        total: IMAGE_MANIFEST.length,
        failed: totalFailed,
        skipped: totalSkipped,
        phase: 'completed'
      });

      const result: PreloadResult = {
        success: true,
        totalImages: IMAGE_MANIFEST.length,
        loadedImages: totalLoaded,
        failedImages: totalFailed,
        skippedImages: totalSkipped,
        loadTimeMs,
        cacheHitRate
      };

      console.timeEnd('🚀 Hard Preload: All Images');
      console.log('✅ Hard preload completed:', result);

      return result;

    } catch (error) {
      const loadTimeMs = Date.now() - startTime;
      
      this.updateProgress({
        loaded: 0,
        total: IMAGE_MANIFEST.length,
        failed: IMAGE_MANIFEST.length,
        skipped: 0,
        phase: 'failed'
      });

      console.timeEnd('🚀 Hard Preload: All Images');
      console.error('❌ Hard preload failed:', error);

      return {
        success: false,
        totalImages: IMAGE_MANIFEST.length,
        loadedImages: 0,
        failedImages: IMAGE_MANIFEST.length,
        skippedImages: 0,
        loadTimeMs,
        cacheHitRate: 0
      };
    }
  }

  // Check if image is cached
  isCached(url: string): boolean {
    return this.cache.has(url);
  }

  // Get cache stats
  getCacheStats() {
    return {
      size: this.cache.size,
      urls: Array.from(this.cache.keys())
    };
  }

  // Clear cache
  clearCache() {
    this.cache.clear();
    this.loadPromises.clear();
  }

  // Abort loading
  abort() {
    this.abortController.abort();
    this.clearCache();
  }
}

// Singleton instance
export const hardPreloader = new HardPreloader();

// Convenience functions
export async function initializeHardPreload(
  progressCallback?: (progress: PreloadProgress) => void
): Promise<PreloadResult> {
  if (progressCallback) {
    hardPreloader.setProgressCallback(progressCallback);
  }
  
  return hardPreloader.preloadAllImages();
}

export function isImageCached(url: string): boolean {
  return hardPreloader.isCached(url);
}

export function getPreloadStats() {
  return hardPreloader.getCacheStats();
}