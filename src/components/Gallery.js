import React from 'react';
import { useLightbox } from '../hooks/useLightbox';
import { useGalleryChromaEffect } from '../hooks/useGalleryChromaEffect';
import { galleryItems } from '../data/galleryData';

const Gallery = () => {
  useLightbox();
  const { containerRef, overlayRef, fadeRef, handleMove, handleLeave } = useGalleryChromaEffect({
    radius: 400,
    damping: 0.4,
    fadeOut: 0.4,
    ease: 'power2.out',
  });

  return (
    <section id="gallery" className="container s-gallery target-section">
      <div className="row s-gallery__header">
        <div className="column xl-12 section-header-wrap">
          <div className="section-header" data-num="03">
            <h2 className="text-display-title">Momentos con nosotros</h2>
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className="gallery-chroma-container"
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        style={{
          '--r': '400px',
          '--x': '50%',
          '--y': '50%',
        }}
      >
        <div className="gallery-items grid-cols grid-cols--wrap">
          {galleryItems.map(item => (
            <div key={item.id} className="gallery-items__item grid-cols__column">
              <a href={item.largeSrc} className="gallery-items__item-thumb glightbox">
                <img
                  src={item.src}
                  srcSet={item.srcSet || item.src}
                  alt={item.alt || item.caption}
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>

        {/* Capas de efecto chroma */}
        <div ref={overlayRef} className="gallery-chroma-overlay" />
        <div ref={fadeRef} className="gallery-chroma-fade" />
      </div>
    </section>
  );
};

export default Gallery;
