import { render, screen, fireEvent } from '@testing-library/react';
import Menu from '../Menu';
import { menuCategories } from '../../data/menuData';

describe('Menu Component', () => {
  test('renders without crashing', () => {
    const { container } = render(<Menu />);
    const menuSection = container.querySelector('#menu');
    expect(menuSection).toBeInTheDocument();
  });

  test('renders menu title', () => {
    render(<Menu />);
    expect(screen.getByText('Nuestro Menú')).toBeInTheDocument();
  });

  test('renders all menu categories', () => {
    render(<Menu />);

    Object.values(menuCategories).forEach(categoryName => {
      expect(screen.getByText(categoryName)).toBeInTheDocument();
    });
  });

  test('displays items from first category by default', () => {
    render(<Menu />);
    expect(screen.getByText('Sancocho de Gallina')).toBeInTheDocument();
  });

  test('changes category when clicking on tab', () => {
    render(<Menu />);

    // Click on the second category
    const especialidadesTab = screen.getByText('Especialidades Huilenses');
    fireEvent.click(especialidadesTab);

    // Verify that items from that category are shown
    expect(screen.getByText('Tamal Huilense')).toBeInTheDocument();
  });

  test('opens modal when clicking Ver Detalles', () => {
    const { container } = render(<Menu />);

    const viewButtons = screen.getAllByText('Ver Detalles');
    fireEvent.click(viewButtons[0]);

    // Verify that the modal opens
    const modal = container.querySelector('.modal-overlay');
    expect(modal).toBeInTheDocument();
  });
});
