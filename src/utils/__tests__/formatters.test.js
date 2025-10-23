import { formatPrice, formatPhone, capitalize, truncateText } from '../formatters';

describe('Formatters', () => {
  describe('formatPrice', () => {
    test('formats price correctly in Colombian pesos', () => {
      expect(formatPrice(15000)).toMatch(/\$\s*15\.000/);
      expect(formatPrice(1000)).toMatch(/\$\s*1\.000/);
    });

    test('handles zero price', () => {
      expect(formatPrice(0)).toMatch(/\$\s*0/);
    });

    test('handles large numbers', () => {
      expect(formatPrice(1000000)).toMatch(/\$\s*1\.000\.000/);
    });
  });

  describe('formatPhone', () => {
    test('formats Colombian phone number', () => {
      const result = formatPhone('+573001234567');
      expect(result).toBeTruthy();
      expect(result).toContain('57');
    });

    test('formats 10-digit number', () => {
      const result = formatPhone('3001234567');
      expect(result).toContain('300');
    });

    test('returns original if invalid format', () => {
      const result = formatPhone('123');
      expect(result).toBe('123');
    });
  });

  describe('capitalize', () => {
    test('capitalizes first letter of each word', () => {
      expect(capitalize('hello world')).toBe('Hello World');
      expect(capitalize('test phrase')).toBe('Test Phrase');
    });

    test('handles single word', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    test('handles empty string', () => {
      expect(capitalize('')).toBe('');
    });
  });

  describe('truncateText', () => {
    test('truncates text longer than maxLength', () => {
      const longText = 'This is a very long text that should be truncated';
      const result = truncateText(longText, 20);
      expect(result.length).toBeLessThanOrEqual(23); // 20 + "..."
      expect(result).toContain('...');
    });

    test('does not truncate text shorter than maxLength', () => {
      const shortText = 'Short text';
      expect(truncateText(shortText, 20)).toBe('Short text');
    });

    test('uses default maxLength of 100', () => {
      const text = 'a'.repeat(150);
      const result = truncateText(text);
      expect(result.length).toBe(103); // 100 + "..."
    });
  });
});
