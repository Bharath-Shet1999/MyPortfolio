
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    
    // Animated scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg z-40 transition-all duration-500 
        hover:shadow-xl hover:shadow-purple-500/30 hover:scale-110 
        active:scale-95 active:shadow-md active:from-indigo-600 active:to-purple-600
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-75 pointer-events-none'}`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5 animate-bounce" />
    </button>
  );
};

export default ScrollToTop;
