/**
 * Adaptive Loading Utilities
 * Determines optimal loading strategies based on network and device capabilities
 */

export type ConnectionQuality = 'low' | 'medium' | 'high';

/**
 * Get current network connection quality
 */
export const getConnectionQuality = (): ConnectionQuality => {
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  
  if (!connection) return 'high'; // Default to high if not supported
  
  const effectiveType = connection.effectiveType;
  const saveData = connection.saveData;
  
  // User explicitly enabled data saver
  if (saveData) return 'low';
  
  // Network quality detection
  if (effectiveType === 'slow-2g' || effectiveType === '2g') return 'low';
  if (effectiveType === '3g') return 'medium';
  return 'high';
};

/**
 * Check if device is mobile
 */
export const isMobileDevice = (): boolean => {
  return window.innerWidth < 768;
};

/**
 * Check if device is tablet
 */
export const isTabletDevice = (): boolean => {
  return window.innerWidth >= 768 && window.innerWidth < 1024;
};

/**
 * Determine if videos should be loaded based on connection and device
 */
export const shouldLoadVideo = (): boolean => {
  const quality = getConnectionQuality();
  const isMobile = isMobileDevice();
  
  // Never load videos on slow connections
  if (quality === 'low') return false;
  
  // Don't autoplay videos on mobile with medium connection
  if (quality === 'medium' && isMobile) return false;
  
  return true;
};

/**
 * Get optimal image quality based on connection
 */
export const getOptimalImageQuality = (): 'low' | 'medium' | 'high' => {
  const quality = getConnectionQuality();
  
  if (quality === 'low') return 'low';
  if (quality === 'medium') return 'medium';
  return 'high';
};

/**
 * Get optimal lazy loading distance based on device and connection
 */
export const getLazyLoadDistance = (): string => {
  const quality = getConnectionQuality();
  const isMobile = isMobileDevice();
  
  if (quality === 'low') return '50px';
  if (quality === 'medium') return isMobile ? '150px' : '250px';
  return isMobile ? '200px' : '400px';
};

/**
 * Check if device prefers reduced data usage
 */
export const prefersReducedData = (): boolean => {
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  return connection?.saveData || false;
};

/**
 * Get device performance tier
 */
export const getDevicePerformanceTier = (): 'low' | 'medium' | 'high' => {
  const cores = navigator.hardwareConcurrency || 4;
  const memory = (navigator as any).deviceMemory || 4;
  
  if (cores <= 2 || memory <= 2) return 'low';
  if (cores <= 4 || memory <= 4) return 'medium';
  return 'high';
};
