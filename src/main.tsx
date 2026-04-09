import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initializePerformanceOptimizations } from './utils/performanceOptimizations';

const isPreviewHost =
  typeof window !== 'undefined' &&
  (window.location.hostname.endsWith('.lovableproject.com') ||
    window.location.hostname.startsWith('id-preview--'));

if (isPreviewHost && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    void navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => {
        void registration.unregister();
      });
    });

    if ('caches' in window) {
      void caches.keys().then((cacheKeys) => {
        cacheKeys.forEach((cacheKey) => {
          void caches.delete(cacheKey);
        });
      });
    }
  });
}

// Suppress known HMR error with Spline/Three.js runtime during hot reload
window.addEventListener('error', (e) => {
  if (e.message?.includes('The object can not be found here')) {
    e.preventDefault();
    console.warn('[HMR] Suppressed known Spline/Three.js removeChild error during hot reload');
  }
});
window.addEventListener('unhandledrejection', (e) => {
  if (e.reason?.message?.includes('The object can not be found here')) {
    e.preventDefault();
    console.warn('[HMR] Suppressed known Spline/Three.js removeChild error during hot reload');
  }
});

// Render app immediately
createRoot(document.getElementById('root')!).render(<App />);

// Initialize performance optimizations in background
initializePerformanceOptimizations();
