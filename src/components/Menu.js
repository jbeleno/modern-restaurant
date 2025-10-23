import React, { useState, useMemo, useCallback } from 'react';
import MenuItem from './MenuItem';
import Modal from './Modal';
import { menuCategories, getMenuItemsByCategory } from '../data/menuData';
import './MenuItem.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('platos-principales');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Memoize filtered items by category
  const currentItems = useMemo(() => {
    return getMenuItemsByCategory(activeCategory);
  }, [activeCategory]);

  // Memoizar callbacks para optimizar renders
  const handleViewDetails = useCallback(item => {
    setSelectedItem(item);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedItem(null);
  }, []);

  return (
    <section id="menu" className="container s-menu target-section">
      <div className="row s-menu__content">
        <div className="column xl-4 lg-5 md-12 s-menu__content-start">
          <div className="section-header" data-num="02">
            <h2 className="text-display-title">Nuestro Menú</h2>
          </div>

          <nav className="tab-nav">
            <ul className="tab-nav__list">
              {Object.entries(menuCategories).map(([categoryId, categoryName]) => (
                <li key={categoryId}>
                  <a
                    href={`#${categoryId}`}
                    className={activeCategory === categoryId ? 'active' : ''}
                    onClick={e => {
                      e.preventDefault();
                      setActiveCategory(categoryId);
                    }}
                  >
                    <span>{categoryName}</span>
                    <svg
                      clipRule="evenodd"
                      fillRule="evenodd"
                      strokeLinejoin="round"
                      strokeMiterlimit="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="column xl-6 lg-6 md-12 s-menu__content-end">
          <div className="menu-content">
            <h3 className="menu-category-title">{menuCategories[activeCategory]}</h3>

            <div className="menu-items-container">
              {currentItems.map(item => (
                <MenuItem key={item.id} item={item} onViewDetails={handleViewDetails} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} item={selectedItem} />
    </section>
  );
};

export default Menu;
