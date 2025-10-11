/**
 * Video Preloader Utility
 * Lädt alle Videos einer Seite vor, bevor die Seite angezeigt wird
 */

export interface VideoPreloadProgress {
  total: number;
  loaded: number;
  progress: number;
}

export const PAGE_VIDEOS = {
  studio: [
    '/assets/studio-hero-background.mp4',
    '/assets/brandstory-video.mp4',
    '/assets/template-video.mp4',
    '/assets/wireframes-video.mp4',
  ],
  media: [
    '/assets/media-hero-video.mp4',
    '/assets/media-launch-video.mp4',
    '/assets/media-content-video.mp4',
    '/assets/media-section-video.mp4',
    '/assets/media-new-video.mp4',
  ],
  lab: [
    '/assets/lab-hero-video.mp4',
    '/assets/lab-ki-automation-video.mp4',
    '/assets/lab-section-video.mp4',
    '/assets/lab-new-video.mp4',
  ],
};

/**
 * Preload a single video
 */
function preloadSingleVideo(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.preload = 'auto';
    
    video.addEventListener('loadeddata', () => {
      console.log(`✅ Video loaded: ${url}`);
      resolve();
    });
    
    video.addEventListener('error', (e) => {
      console.warn(`⚠️ Video failed to load: ${url}`, e);
      resolve(); // Resolve anyway to not block the page
    });
    
    video.src = url;
    video.load();
  });
}

/**
 * Preload all videos for a page with progress tracking
 */
export async function preloadPageVideos(
  page: keyof typeof PAGE_VIDEOS,
  onProgress?: (progress: VideoPreloadProgress) => void
): Promise<void> {
  const videos = PAGE_VIDEOS[page];
  const total = videos.length;
  let loaded = 0;

  console.log(`🎥 Starting preload of ${total} videos for ${page} page`);
  
  const startTime = performance.now();

  // Load videos in parallel
  await Promise.all(
    videos.map(async (videoUrl) => {
      await preloadSingleVideo(videoUrl);
      loaded++;
      
      if (onProgress) {
        onProgress({
          total,
          loaded,
          progress: (loaded / total) * 100,
        });
      }
    })
  );

  const endTime = performance.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  console.log(`✅ All ${page} videos preloaded in ${duration}s`);
}

/**
 * Check if videos are already in browser cache
 */
export async function checkVideosInCache(page: keyof typeof PAGE_VIDEOS): Promise<boolean> {
  const videos = PAGE_VIDEOS[page];
  
  try {
    const cacheCheck = await Promise.all(
      videos.map(async (url) => {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
      })
    );
    
    return cacheCheck.every(Boolean);
  } catch {
    return false;
  }
}
