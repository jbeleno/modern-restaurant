import React, { useEffect, useRef } from 'react';
import { formatPrice } from '../utils/formatters';
import { preventBodyScroll } from '../utils/helpers';
import './Modal.css';

const Modal = ({ isOpen, onClose, item }) => {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Prevent body scroll
    preventBodyScroll(true);

    // Focus close button on open
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    // Keyboard handling (Escape)
    const handleEscape = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Focus trap - keep focus inside modal
    const handleTab = e => {
      if (e.key !== 'Tab') return;

      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleTab);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleTab);
      preventBodyScroll(false);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const handleOverlayClick = e => {
    // Only close if clicking directly on overlay, not on content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div
        ref={modalRef}
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <button
          ref={closeButtonRef}
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Cerrar modal"
          type="button"
        >
          <span className="modal-close-icon" aria-hidden="true">
            ×
          </span>
        </button>

        <div className="modal-body">
          <h2 id="modal-title" className="modal-title">
            {item.name}
          </h2>

          <div className="modal-image">
            <img src={item.image} alt={item.name} loading="lazy" />
          </div>

          <div className="modal-price" role="status">
            {formatPrice(item.price)}
          </div>

          <div id="modal-description" className="modal-description">
            <h3>Descripción</h3>
            <p>{item.description}</p>
          </div>

          {item.ingredients && item.ingredients.length > 0 && (
            <div className="modal-ingredients">
              <h3>Ingredientes</h3>
              <ul>
                {item.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
