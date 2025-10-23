import { render, screen, fireEvent } from '@testing-library/react';
import MenuItem from '../MenuItem';

describe('MenuItem Component', () => {
  const mockItem = {
    id: 'test-item',
    name: 'Test Dish',
    description: 'A delicious test dish',
    price: 15000,
    image: '/test-image.jpg',
  };

  const mockOnViewDetails = jest.fn();

  beforeEach(() => {
    mockOnViewDetails.mockClear();
  });

  test('renders without crashing', () => {
    render(<MenuItem item={mockItem} onViewDetails={mockOnViewDetails} />);
    expect(screen.getByText('Test Dish')).toBeInTheDocument();
  });

  test('renders item name and description', () => {
    render(<MenuItem item={mockItem} onViewDetails={mockOnViewDetails} />);

    expect(screen.getByText('Test Dish')).toBeInTheDocument();
    expect(screen.getByText('A delicious test dish')).toBeInTheDocument();
  });

  test('renders formatted price', () => {
    render(<MenuItem item={mockItem} onViewDetails={mockOnViewDetails} />);

    // El precio debe estar formateado como pesos colombianos
    const priceElement = screen.getByText(/\$\s*15\.000/);
    expect(priceElement).toBeInTheDocument();
  });

  test('renders image with correct alt text', () => {
    render(<MenuItem item={mockItem} onViewDetails={mockOnViewDetails} />);

    const image = screen.getByAltText('Test Dish');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-image.jpg');
  });

  test('image has lazy loading attribute', () => {
    render(<MenuItem item={mockItem} onViewDetails={mockOnViewDetails} />);

    const image = screen.getByAltText('Test Dish');
    expect(image).toHaveAttribute('loading', 'lazy');
  });

  test('calls onViewDetails when clicking button', () => {
    render(<MenuItem item={mockItem} onViewDetails={mockOnViewDetails} />);

    const button = screen.getByText('Ver Detalles');
    fireEvent.click(button);

    expect(mockOnViewDetails).toHaveBeenCalledTimes(1);
    expect(mockOnViewDetails).toHaveBeenCalledWith(mockItem);
  });

  test('button has correct CSS classes', () => {
    render(<MenuItem item={mockItem} onViewDetails={mockOnViewDetails} />);

    const button = screen.getByText('Ver Detalles');
    expect(button).toHaveClass('menu-item__btn', 'btn', 'btn--primary');
  });
});
