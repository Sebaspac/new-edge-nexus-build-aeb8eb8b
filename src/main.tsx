import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AppErrorBoundary } from './components/AppErrorBoundary';
import { initializePerformanceOptimizations } from './utils/performanceOptimizations';
import { isLovablePreviewHost } from './utils/runtimeEnvironment';

const isPreviewHost = isLovablePreviewHost();

const isIgnorablePreviewHotReloadError = (message?: string) => {
  if (!message) return false;

  return [
    'The object can not be found here',
    "Failed to execute 'removeChild' on 'Node'",
    'The node to be removed is not a child of this node',
  ].some((knownMessage) => message.includes(knownMessage));
};

let hasScheduledPreviewReload = false;

const schedulePreviewReload = (reason: string) => {
  if (!isPreviewHost || hasScheduledPreviewReload || typeof window === 'undefined') return;

  hasScheduledPreviewReload = true;
  console.warn(`[Preview] ${reason} – reloading iframe to avoid a white screen after edits.`);

  window.setTimeout(() => {
    window.location.reload();
  }, 120);
};

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
  if (isIgnorablePreviewHotReloadError(e.message)) {
    e.preventDefault();
    console.warn('[HMR] Suppressed known Spline/Three.js removeChild error during hot reload');
  }
});
window.addEventListener('unhandledrejection', (e) => {
  if (isIgnorablePreviewHotReloadError(e.reason?.message)) {
    e.preventDefault();
    console.warn('[HMR] Suppressed known Spline/Three.js removeChild error during hot reload');
  }
});

if (isPreviewHost && import.meta.hot) {
  import.meta.hot.on('vite:beforeUpdate', () => {
    schedulePreviewReload('HMR update detected in Lovable Preview');
  });

  import.meta.hot.on('vite:error', () => {
    schedulePreviewReload('Vite error detected in Lovable Preview');
  });
}

// Render app immediately
createRoot(document.getElementById('root')!).render(
  <AppErrorBoundary>
    <App />
  </AppErrorBoundary>
);

// Initialize performance optimizations in background
initializePerformanceOptimizations();
