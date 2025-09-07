import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initializePerformanceOptimizations } from './utils/performanceOptimizations'

// Initialize performance optimizations before app starts
initializePerformanceOptimizations().then(() => {
  createRoot(document.getElementById("root")!).render(<App />);
}).catch(() => {
  // Fallback if performance optimizations fail
  createRoot(document.getElementById("root")!).render(<App />);
});
