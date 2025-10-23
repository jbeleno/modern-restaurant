import { useEffect, useState } from 'react';

export const useMenuToggle = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const toggleButton = document.querySelector('.header-menu-toggle');
    const mainNavWrap = document.querySelector('.header-nav');
    const siteBody = document.body;

    if (!(toggleButton && mainNavWrap)) return;

    const handleToggle = e => {
      e.preventDefault();
      const newMenuState = !isMenuOpen;
      setIsMenuOpen(newMenuState);

      toggleButton.classList.toggle('is-clicked', newMenuState);
      siteBody.classList.toggle('menu-is-open', newMenuState);
    };

    toggleButton.addEventListener('click', handleToggle);

    return () => {
      toggleButton.removeEventListener('click', handleToggle);
    };
  }, [isMenuOpen]);

  return { isMenuOpen, setIsMenuOpen };
};
