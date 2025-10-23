import { useEffect, useState } from 'react';

export const usePreloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const siteBody = document.body;
    const preloader = document.querySelector('#preloader');

    if (!preloader) return;

    // Agregar clase de preload
    html.classList.add('ss-preload');

    const handleLoad = () => {
      html.classList.remove('ss-preload');
      html.classList.add('ss-loaded');
      setIsLoaded(true);

      const afterTransition = e => {
        if (e.target.matches('#preloader')) {
          siteBody.classList.add('ss-show');
          setShowContent(true);
          e.target.style.display = 'none';
          preloader.removeEventListener(e.type, afterTransition);
        }
      };

      preloader.addEventListener('transitionend', afterTransition);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return { isLoaded, showContent };
};
