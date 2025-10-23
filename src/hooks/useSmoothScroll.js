import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    const smoothScrollLinks = document.querySelectorAll('.smoothscroll');

    const handleSmoothScroll = e => {
      e.preventDefault();

      const targetId = e.target.getAttribute('href');
      if (!targetId || !targetId.startsWith('#')) return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      const headerHeight = document.querySelector('.s-header')?.offsetHeight || 0;
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    };

    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      smoothScrollLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);
};
