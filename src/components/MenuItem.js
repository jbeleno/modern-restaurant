import React, { memo } from 'react';
import { formatPrice } from '../utils/formatters';

const MenuItem = memo(
  ({ item, onViewDetails }) => {
    return (
      <div className="menu-item">
        <div className="menu-item__image">
          <img src={item.image} alt={item.name} loading="lazy" />
        </div>

        <div className="menu-item__content">
          <div className="menu-item__header">
            <h4 className="menu-item__name">{item.name}</h4>
            <span className="menu-item__price">{formatPrice(item.price)}</span>
          </div>

          <p className="menu-item__description">{item.description}</p>

          <button className="menu-item__btn btn btn--primary" onClick={() => onViewDetails(item)}>
            Ver Detalles
          </button>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Solo re-renderizar si el item cambió
    return prevProps.item.id === nextProps.item.id;
  }
);

MenuItem.displayName = 'MenuItem';

export default MenuItem;
