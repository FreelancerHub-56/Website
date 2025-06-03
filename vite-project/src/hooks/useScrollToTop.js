import { useEffect } from 'react';

// Custom hook to ensure scroll to top functionality
export const useScrollToTop = () => {
  const scrollToTop = () => {
    // Method 1: Immediate scroll (instant)
    window.scrollTo(0, 0);
    
    // Method 2: Smooth scroll with delay
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 50);
    
    // Method 3: Force scroll if needed
    setTimeout(() => {
      if (window.pageYOffset > 0) {
        window.scrollTo(0, 0);
      }
    }, 200);
    
    // Method 4: Use requestAnimationFrame for better timing
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  };

  return scrollToTop;
};

// Hook for automatic scroll to top on route change
export const useAutoScrollToTop = (pathname) => {
  useEffect(() => {
    const scrollToTop = () => {
      // Multiple methods to ensure it works
      window.scrollTo(0, 0);
      
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }, 100);
      
      setTimeout(() => {
        if (window.pageYOffset > 0) {
          window.scrollTo(0, 0);
        }
      }, 300);
      
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    };

    scrollToTop();
  }, [pathname]);
};
