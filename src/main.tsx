import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Direct app start without async optimizations
createRoot(document.getElementById("root")!).render(<App />);
