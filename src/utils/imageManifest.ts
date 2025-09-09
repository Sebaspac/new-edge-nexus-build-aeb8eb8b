// Image manifest for comprehensive preloading
// This file contains all images used across the entire website

export interface ImageAsset {
  url: string;
  priority: 'critical' | 'high' | 'normal' | 'low';
  size?: 'small' | 'medium' | 'large';
  page?: string[];
}

export const IMAGE_MANIFEST: ImageAsset[] = [
  // Critical - Above the fold, logos, navigation
  {
    url: '/assets/7081eb62-a5ae-4260-97c8-e5b31dc0040e.png',
    priority: 'critical',
    size: 'small',
    page: ['all'] // Main logo used everywhere
  },
  {
    url: '/assets/93b90410-bdbd-4098-938c-5ff9f158253c.png',
    priority: 'critical',
    size: 'small',
    page: ['all'] // Mobile nav logo
  },
  
  // High Priority - Innovation section (homepage above fold)
  {
    url: '/assets/804d1765-b7c9-45f5-93a3-dddb443996f4.png',
    priority: 'high',
    size: 'medium',
    page: ['/', '/services']
  },
  {
    url: '/assets/72768da6-5ac5-423e-a9df-579dd83dc1aa.png',
    priority: 'high',
    size: 'medium',
    page: ['/', '/services']
  },
  
  // Normal Priority - Team and content images
  {
    url: '/assets/06cbcdbb-3730-466c-b8c1-cf54d42fc7c1.png',
    priority: 'normal',
    size: 'large',
    page: ['/team']
  },
  {
    url: '/assets/072b3572-872a-4a44-b919-80bad436c002.png',
    priority: 'normal',
    size: 'large',
    page: ['/team']
  },
  {
    url: '/assets/db231edd-d76b-46cd-ad70-02ac9544d6ff.png',
    priority: 'normal',
    size: 'medium',
    page: ['/team']
  },
  {
    url: '/assets/90e4fdca-8c29-48f7-9568-686b611a62f4.png',
    priority: 'normal',
    size: 'small',
    page: ['all'] // Footer logo
  },
  
  // Service/Studio specific images
  {
    url: '/assets/108d87d1-d825-4696-ba9e-40debe39cadc.png',
    priority: 'normal',
    size: 'medium',
    page: ['/services', '/studio']
  },
  {
    url: '/assets/198e2b1f-64ac-4570-82fe-278fb98b54ef.png',
    priority: 'normal',
    size: 'medium',
    page: ['/services', '/lab']
  },
  {
    url: '/assets/2d88dc02-55ec-4dd1-ae07-1ac7b7ced67b.png',
    priority: 'normal',
    size: 'medium',
    page: ['/services']
  },
  {
    url: '/assets/34acb7fb-e80d-4881-b394-07535b14a2f3.png',
    priority: 'normal',
    size: 'medium',
    page: ['/media']
  },
  {
    url: '/assets/36313345-de59-4a13-b6c7-09b097e34d48.png',
    priority: 'normal',
    size: 'medium',
    page: ['/lab']
  },
  {
    url: '/assets/380a4a8b-6a3d-4e43-b3c7-3e7519fa87b2.png',
    priority: 'normal',
    size: 'medium',
    page: ['/studio']
  },
  {
    url: '/assets/44ee97c9-0298-41b6-8fbc-b44a16978bf5.png',
    priority: 'normal',
    size: 'medium',
    page: ['/media']
  },
  {
    url: '/assets/4ebea1f9-fa87-4006-8832-445bb6fe1788.png',
    priority: 'normal',
    size: 'medium',
    page: ['/lab']
  },
  {
    url: '/assets/548c6b2e-2119-4750-8296-0d716b7b3248.png',
    priority: 'normal',
    size: 'medium',
    page: ['/studio']
  },
  {
    url: '/assets/757332b3-93c8-4953-912b-2d0c899ab881.png',
    priority: 'normal',
    size: 'medium',
    page: ['/media']
  },
  {
    url: '/assets/8aa5239b-f420-4047-a353-3b2eb4c3d9ee.png',
    priority: 'normal',
    size: 'medium',
    page: ['/lab']
  },
  {
    url: '/assets/8b2fd89c-8469-4c89-bbba-463d2c352273.png',
    priority: 'normal',
    size: 'medium',
    page: ['/studio']
  },
  {
    url: '/assets/94ad948e-230b-433e-9c9c-4be3b58f62eb.png',
    priority: 'normal',
    size: 'medium',
    page: ['/media']
  },
  {
    url: '/assets/954e86a5-f49d-4abb-baf0-c57e233bbae5.png',
    priority: 'normal',
    size: 'medium',
    page: ['/lab']
  },
  {
    url: '/assets/964ca925-091c-4fbd-aeed-d7239a0251ff.png',
    priority: 'normal',
    size: 'medium',
    page: ['/studio']
  },
  {
    url: '/assets/c19dc1d8-e93c-4d25-a965-34dbef5d9fe1.png',
    priority: 'normal',
    size: 'medium',
    page: ['/media']
  },
  {
    url: '/assets/c2f8f5dd-e81a-46af-8eb5-647a2910962e.png',
    priority: 'normal',
    size: 'medium',
    page: ['/lab']
  },
  {
    url: '/assets/d32cc92f-8b39-4678-be5a-c36fdfc26f50.png',
    priority: 'normal',
    size: 'medium',
    page: ['/studio']
  },
  {
    url: '/assets/d341cd6b-8700-41a6-91a2-5b4c81f0a6be.png',
    priority: 'normal',
    size: 'medium',
    page: ['/media']
  },
  {
    url: '/assets/f714a080-17fc-4912-b85f-1b5fae527f49.png',
    priority: 'normal',
    size: 'medium',
    page: ['/services']
  }
];

// Budget constraints
export const PRELOAD_BUDGET = {
  MAX_TOTAL_SIZE_MB: 50,
  MAX_IMAGE_COUNT: 800,
  MAX_RETRIES: 2,
  RETRY_DELAY_MS: 1000,
  TIMEOUT_PER_IMAGE_MS: 8000,
  MAX_SKIP_PERCENTAGE: 1 // Maximum 1% of images can be skipped
};

// Get images by priority for chunked loading
export function getImagesByPriority(priority: ImageAsset['priority']): ImageAsset[] {
  return IMAGE_MANIFEST.filter(img => img.priority === priority);
}

// Get all critical and high priority images (core chunk)
export function getCoreImages(): ImageAsset[] {
  return IMAGE_MANIFEST.filter(img => 
    img.priority === 'critical' || img.priority === 'high'
  );
}

// Get images for specific page
export function getImagesForPage(page: string): ImageAsset[] {
  return IMAGE_MANIFEST.filter(img => 
    img.page?.includes('all') || img.page?.includes(page)
  );
}

// Calculate estimated total size (rough estimates in KB)
const SIZE_ESTIMATES = {
  small: 50,   // ~50KB
  medium: 200, // ~200KB  
  large: 500   // ~500KB
};

export function estimateTotalSize(): number {
  return IMAGE_MANIFEST.reduce((total, img) => {
    const sizeKB = SIZE_ESTIMATES[img.size || 'medium'];
    return total + sizeKB;
  }, 0);
}

export function shouldUseChunkedLoading(): boolean {
  const totalSizeMB = estimateTotalSize() / 1024;
  const totalCount = IMAGE_MANIFEST.length;
  
  return totalSizeMB > PRELOAD_BUDGET.MAX_TOTAL_SIZE_MB || 
         totalCount > PRELOAD_BUDGET.MAX_IMAGE_COUNT;
}