import { useEffect } from 'react';

export const useStickyHeader = () => {
  useEffect(() => {
    const hdr = document.querySelector('.s-header');
    const hero = document.querySelector('#intro');

    if (!(hdr && hero)) return;

    let triggerHeight;

    const calculateTriggerHeight = () => {
      triggerHeight = hero.offsetHeight - 240;
    };

    // Calcular altura inicial
    setTimeout(calculateTriggerHeight, 120);

    const handleScroll = () => {
      const loc = window.scrollY;

      if (loc > triggerHeight) {
        hdr.classList.add('sticky');
      } else {
        hdr.classList.remove('sticky');
      }

      if (loc > triggerHeight + 20) {
        hdr.classList.add('offset');
      } else {
        hdr.classList.remove('offset');
      }

      if (loc > triggerHeight + 150) {
        hdr.classList.add('scrolling');
      } else {
        hdr.classList.remove('scrolling');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', calculateTriggerHeight);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateTriggerHeight);
    };
  }, []);
};
