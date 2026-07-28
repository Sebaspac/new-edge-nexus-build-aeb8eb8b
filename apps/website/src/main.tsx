import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AppErrorBoundary } from './components/AppErrorBoundary';
import { initializePerformanceOptimizations } from './utils/performanceOptimizations';
import { isLovablePreviewHost } from './utils/runtimeEnvironment';
import { safeGetItem, safeRemoveItem, safeSessionStorage, safeSetItem } from './utils/safeStorage';

const isPreviewHost = isLovablePreviewHost();
const previewSessionStorage = safeSessionStorage();

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

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element #root was not found.');
}

if (isPreviewHost && typeof MutationObserver !== 'undefined') {
  let previewRecoveryCount = Number(
    safeGetItem(previewSessionStorage, '__lovable_preview_recovery_count__') || '0'
  );
  let blankSince: number | null = null;

  const detectBlankPreview = () => {
    const hasRenderableContent =
      rootElement.childElementCount > 0 || Boolean(rootElement.textContent?.trim());

    if (hasRenderableContent) {
      blankSince = null;
      if (previewRecoveryCount > 0) {
        safeRemoveItem(previewSessionStorage, '__lovable_preview_recovery_count__');
        previewRecoveryCount = 0;
      }
      return;
    }

    if (blankSince === null) {
      blankSince = window.performance.now();
      return;
    }

    if (window.performance.now() - blankSince < 350 || previewRecoveryCount >= 3) {
      return;
    }

    previewRecoveryCount += 1;
    safeSetItem(previewSessionStorage, '__lovable_preview_recovery_count__', String(previewRecoveryCount));
    schedulePreviewReload('Preview root stayed empty after an edit');
  };

  const observer = new MutationObserver(() => {
    window.requestAnimationFrame(detectBlankPreview);
  });

  observer.observe(rootElement, { childList: true });
  window.setTimeout(detectBlankPreview, 700);
}

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

  import.meta.hot.on('vite:beforeFullReload', () => {
    schedulePreviewReload('Full reload detected in Lovable Preview');
  });

  import.meta.hot.on('vite:error', () => {
    schedulePreviewReload('Vite error detected in Lovable Preview');
  });
}

// Render app immediately
createRoot(rootElement).render(
  <AppErrorBoundary>
    <App />
  </AppErrorBoundary>
);

// Initialize performance optimizations in background
initializePerformanceOptimizations();
