import { useEffect } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');

      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // Calcular el porcentaje visible del elemento
        const elementHeight = elementBottom - elementTop;
        const visibleHeight = Math.min(elementBottom, windowHeight) - Math.max(elementTop, 0);
        const visibilityPercentage = visibleHeight / elementHeight;

        // If element is visible more than threshold, activate animation
        if (visibilityPercentage > threshold && elementTop < windowHeight) {
          element.classList.add('animate-in');
        }
      });
    };

    // Execute on page load
    handleScroll();

    // Agregar listener de scroll
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [threshold]);
};
