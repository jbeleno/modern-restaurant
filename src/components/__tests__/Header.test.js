import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { navigationLinks } from '../../data/navigationData';
import { siteConfig } from '../../data/siteConfig';

describe('Header Component', () => {
  test('renders without crashing', () => {
    const { container } = render(<Header />);
    const header = container.querySelector('.s-header');
    expect(header).toBeInTheDocument();
  });

  test('renders all navigation links', () => {
    render(<Header />);

    navigationLinks.forEach(link => {
      const navLink = screen.getByText(link.label);
      expect(navLink).toBeInTheDocument();
    });
  });

  test('renders logo with correct alt text', () => {
    render(<Header />);
    const logo = screen.getByAltText(siteConfig.name);
    expect(logo).toBeInTheDocument();
  });

  test('renders phone number', () => {
    const { container } = render(<Header />);
    const phoneLink = screen.getByText(siteConfig.phoneFormatted);
    expect(phoneLink).toBeInTheDocument();
    const phoneAnchor = container.querySelector(`a[href="tel:${siteConfig.phone}"]`);
    expect(phoneAnchor).toBeInTheDocument();
  });

  test('navigation links have correct hrefs', () => {
    const { container } = render(<Header />);

    navigationLinks.forEach(link => {
      const anchor = container.querySelector(`a[href="${link.href}"]`);
      expect(anchor).toBeInTheDocument();
      expect(anchor).toHaveTextContent(link.label);
    });
  });
});
