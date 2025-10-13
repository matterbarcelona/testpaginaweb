import { useEffect, useRef } from 'react';
import { analyticsEvents } from '@/lib/analytics';

export const useScrollTracking = (pageName: string) => {
  const tracked75 = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercentage >= 75 && !tracked75.current) {
        tracked75.current = true;
        analyticsEvents.scroll75(pageName);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pageName]);
};
