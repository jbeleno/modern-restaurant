import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export const useGalleryChromaEffect = ({
  radius = 400,
  damping = 0.4,
  fadeOut = 0.4,
  ease = 'power2.out',
} = {}) => {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Configurar GSAP setters para las variables CSS
    setX.current = gsap.quickSetter(container, '--x', 'px');
    setY.current = gsap.quickSetter(container, '--y', 'px');

    // Obtener dimensiones del contenedor
    const { width, height } = container.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };

    // Establecer posición inicial
    setX.current(pos.current.x);
    setY.current(pos.current.y);

    // Configurar radio responsivo
    const updateRadius = () => {
      const screenWidth = window.innerWidth;
      let newRadius = radius;

      if (screenWidth < 768) {
        newRadius = radius * 0.6; // Móvil
      } else if (screenWidth < 1024) {
        newRadius = radius * 0.8; // Tablet
      }

      container.style.setProperty('--r', `${newRadius}px`);
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);

    return () => {
      window.removeEventListener('resize', updateRadius);
    };
  }, [radius]);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = e => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    moveTo(e.clientX - rect.left, e.clientY - rect.top);

    // Fade out para mostrar color
    gsap.to(fadeRef.current, {
      opacity: 0,
      duration: 0.25,
      overwrite: true,
    });
  };

  const handleLeave = () => {
    // Fade in para volver a blanco y negro
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  return {
    containerRef,
    overlayRef,
    fadeRef,
    handleMove,
    handleLeave,
  };
};
