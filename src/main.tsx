import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initializePerformanceOptimizations } from './utils/performanceOptimizations';

// Render app immediately
createRoot(document.getElementById("root")!).render(<App />);

// Initialize performance optimizations in background
initializePerformanceOptimizations();
