import { useState, useEffect } from 'react';

export const useScrollTabDetection = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    let lastUpdate = 0;
    
    const handleScroll = () => {
      const now = performance.now();
      if (now - lastUpdate < 16) return; // Throttle to 60fps
      lastUpdate = now;
      
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.9; // Hero ist 90vh
      const scrollAfterHero = Math.max(0, scrollY - heroHeight);
      const sectionHeight = window.innerHeight * 1.1; // 110vh pro Tab
      
      const newTab = Math.floor(scrollAfterHero / sectionHeight);
      setActiveTab(Math.min(newTab, 4)); // Max 5 Tabs (0-4)
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { activeTab };
};
