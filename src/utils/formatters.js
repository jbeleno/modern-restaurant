/**
 * Formatea precios a pesos colombianos
 * @param {number} price - Precio a formatear
 * @returns {string} - Precio formateado
 */
export const formatPrice = price => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

/**
 * Formatea números de teléfono
 * @param {string} phone - Teléfono a formatear
 * @returns {string} - Teléfono formateado
 */
export const formatPhone = phone => {
  // Eliminar caracteres no numéricos
  const cleaned = phone.replace(/\D/g, '');

  // Formato para Colombia: +57 XXX XXX XXXX
  if (cleaned.startsWith('57')) {
    const countryCode = cleaned.slice(0, 2);
    const areaCode = cleaned.slice(2, 5);
    const firstPart = cleaned.slice(5, 8);
    const secondPart = cleaned.slice(8, 12);
    return `+${countryCode} ${areaCode} ${firstPart} ${secondPart}`;
  }

  // Formato simple: (XXX) XXX-XXXX
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }

  return phone;
};

/**
 * Formatea fechas a español
 * @param {Date|string} date - Fecha a formatear
 * @param {Object} options - Opciones de formato
 * @returns {string} - Fecha formateada
 */
export const formatDate = (date, options = {}) => {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  };

  return new Intl.DateTimeFormat('es-CO', defaultOptions).format(new Date(date));
};

/**
 * Trunca texto a un número específico de caracteres
 * @param {string} text - Texto a truncar
 * @param {number} maxLength - Longitud máxima
 * @returns {string} - Texto truncado
 */
export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

/**
 * Capitaliza la primera letra de cada palabra
 * @param {string} str - String a capitalizar
 * @returns {string} - String capitalizado
 */
export const capitalize = str => {
  return str.replace(/\b\w/g, char => char.toUpperCase());
};
