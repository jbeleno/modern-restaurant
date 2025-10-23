import { useState, useEffect } from 'react';
import { debounce } from '../utils/helpers';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const sections = ['intro', 'about', 'menu', 'gallery'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset para activar antes

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Debounce para optimizar performance del scroll
    const debouncedHandleScroll = debounce(handleScroll, 100);

    // Verificar sección activa al cargar
    handleScroll();

    // Agregar listener de scroll con passive para mejor performance
    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      debouncedHandleScroll.cancel();
    };
  }, []);

  return activeSection;
};
