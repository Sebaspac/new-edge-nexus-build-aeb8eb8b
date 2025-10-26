import { useState, useEffect } from 'react';

export const useScrollTabDetection = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // SSR Check
    if (typeof window === 'undefined') return;
    
    console.log('✅ useScrollTabDetection: Hook initialized');
    
    let lastUpdate = 0;
    
    const handleScroll = () => {
      const now = performance.now();
      if (now - lastUpdate < 16) return; // Throttle to 60fps
      lastUpdate = now;
      
      if (typeof window === 'undefined') return; // Additional SSR check
      
      const scrollY = window.scrollY;
      const heroHeight = (window.innerHeight || 800) * 0.9; // Hero ist 90vh (fallback: 800px)
      const scrollAfterHero = Math.max(0, scrollY - heroHeight);
      const sectionHeight = (window.innerHeight || 800) * 1.1; // 110vh pro Tab (fallback: 800px)
      
      const newTab = Math.floor(scrollAfterHero / sectionHeight);
      setActiveTab(Math.min(newTab, 4)); // Max 5 Tabs (0-4)
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { activeTab };
};
