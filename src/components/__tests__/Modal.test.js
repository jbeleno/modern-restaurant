import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../Modal';

describe('Modal Component', () => {
  const mockItem = {
    id: 'test-item',
    name: 'Test Item',
    description: 'Test description',
    price: 10000,
    image: '/test.jpg',
    ingredients: ['Ingredient 1', 'Ingredient 2'],
  };

  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  test('does not render when isOpen is false', () => {
    const { container } = render(<Modal isOpen={false} onClose={mockOnClose} item={mockItem} />);
    const modal = container.querySelector('.modal-overlay');
    expect(modal).not.toBeInTheDocument();
  });

  test('renders when isOpen is true', () => {
    render(<Modal isOpen={true} onClose={mockOnClose} item={mockItem} />);
    expect(screen.getByText('Test Item')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  test('renders item ingredients', () => {
    render(<Modal isOpen={true} onClose={mockOnClose} item={mockItem} />);
    expect(screen.getByText('Ingredient 1')).toBeInTheDocument();
    expect(screen.getByText('Ingredient 2')).toBeInTheDocument();
  });

  test('calls onClose when clicking close button', () => {
    render(<Modal isOpen={true} onClose={mockOnClose} item={mockItem} />);

    const closeButton = screen.getByLabelText('Cerrar modal');
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('calls onClose when clicking overlay', () => {
    const { container } = render(<Modal isOpen={true} onClose={mockOnClose} item={mockItem} />);

    const overlay = container.querySelector('.modal-overlay');
    fireEvent.click(overlay);

    expect(mockOnClose).toHaveBeenCalled();
  });

  test('calls onClose when pressing Escape', () => {
    render(<Modal isOpen={true} onClose={mockOnClose} item={mockItem} />);

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(mockOnClose).toHaveBeenCalled();
  });

  test('has proper accessibility attributes', () => {
    render(<Modal isOpen={true} onClose={mockOnClose} item={mockItem} />);

    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title');
    expect(dialog).toHaveAttribute('aria-describedby', 'modal-description');
  });

  test('prevents body scroll when open', () => {
    render(<Modal isOpen={true} onClose={mockOnClose} item={mockItem} />);
    expect(document.body.style.overflow).toBe('hidden');
  });
});
