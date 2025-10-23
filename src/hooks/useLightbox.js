import { useEffect } from 'react';

export const useLightbox = () => {
  useEffect(() => {
    const lightboxLinks = document.querySelectorAll('.glightbox');

    const handleLightboxClick = e => {
      e.preventDefault();

      const link = e.currentTarget;
      const imageSrc = link.getAttribute('href');

      if (!imageSrc) return;

      // Crear modal simple para lightbox
      const modal = document.createElement('div');
      modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        cursor: pointer;
      `;

      const img = document.createElement('img');
      img.src = imageSrc;
      img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
      `;

      modal.appendChild(img);
      document.body.appendChild(modal);

      // Cerrar modal al hacer click
      const closeModal = () => {
        document.body.removeChild(modal);
      };

      modal.addEventListener('click', closeModal);

      // Cerrar con tecla ESC
      const handleKeyPress = e => {
        if (e.key === 'Escape') {
          closeModal();
          document.removeEventListener('keydown', handleKeyPress);
        }
      };

      document.addEventListener('keydown', handleKeyPress);
    };

    lightboxLinks.forEach(link => {
      link.addEventListener('click', handleLightboxClick);
    });

    return () => {
      lightboxLinks.forEach(link => {
        link.removeEventListener('click', handleLightboxClick);
      });
    };
  }, []);
};
