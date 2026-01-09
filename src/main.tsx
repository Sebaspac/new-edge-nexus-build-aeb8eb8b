import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Render app immediately - no blocking operations
const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
}

// Initialize performance optimizations AFTER hydration (non-blocking)
if ('requestIdleCallback' in window) {
  (window as any).requestIdleCallback(async () => {
    const { initializePerformanceOptimizations } = await import('./utils/performanceOptimizations');
    initializePerformanceOptimizations();
  }, { timeout: 3000 });
} else {
  setTimeout(async () => {
    const { initializePerformanceOptimizations } = await import('./utils/performanceOptimizations');
    initializePerformanceOptimizations();
  }, 2000);
}