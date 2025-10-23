import React from 'react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { useStickyHeader } from '../hooks/useStickyHeader';
import { useMenuToggle } from '../hooks/useMenuToggle';
import { useActiveSection } from '../hooks/useActiveSection';
import { navigationLinks } from '../data/navigationData';
import { siteConfig } from '../data/siteConfig';

const Header = () => {
  useSmoothScroll();
  useStickyHeader();
  useMenuToggle();
  const activeSection = useActiveSection();

  return (
    <header className="s-header">
      <div className="container s-header__content">
        <div className="s-header__block">
          <div className="header-logo">
            <a className="logo" href="#intro">
              <img src="/assets/images/logo.png" alt={siteConfig.name} />
            </a>
          </div>
          <a className="header-menu-toggle" href="#0">
            <span>Menú</span>
          </a>
        </div>

        <nav className="header-nav">
          <ul className="header-nav__links">
            {navigationLinks.map(link => (
              <li key={link.id} className={activeSection === link.id ? 'current' : ''}>
                <a className="smoothscroll" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="header-contact">
            <a href={`tel:${siteConfig.phone}`} className="header-contact__num btn">
              {siteConfig.phoneFormatted}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
