import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { exposePreloaderToGlobal } from './utils/preloadDemo'

// Expose preloader to global scope for development
exposePreloaderToGlobal();

// Mount the app directly - FastLoadWrapper handles all preloading
createRoot(document.getElementById("root")!).render(<App />);
