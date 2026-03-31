import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initializePerformanceOptimizations } from './utils/performanceOptimizations';

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
createRoot(document.getElementById("root")!).render(<App />);

// Initialize performance optimizations in background
initializePerformanceOptimizations();
