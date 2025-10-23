/**
 * Debounce function - retrasa la ejecución de una función
 * @param {Function} func - Función a ejecutar
 * @param {number} wait - Tiempo de espera en ms
 * @returns {Function} - Función debounced
 */
export const debounce = (func, wait = 300) => {
  let timeout;

  const debounced = function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };

  // Method to cancel debounce
  debounced.cancel = () => {
    clearTimeout(timeout);
  };

  return debounced;
};

/**
 * Throttle function - limita la frecuencia de ejecución
 * @param {Function} func - Función a ejecutar
 * @param {number} limit - Tiempo mínimo entre ejecuciones en ms
 * @returns {Function} - Función throttled
 */
export const throttle = (func, limit = 300) => {
  let inThrottle;

  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

/**
 * Verifica si un elemento está visible en el viewport
 * @param {HTMLElement} element - Elemento a verificar
 * @param {number} threshold - Porcentaje visible requerido (0-1)
 * @returns {boolean} - True si está visible
 */
export const isElementVisible = (element, _threshold = 0.5) => {
  if (!element) return false;

  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

  return vertInView && horInView;
};

/**
 * Scroll suave a un elemento
 * @param {string|HTMLElement} target - Selector o elemento
 * @param {number} offset - Offset desde el top
 */
export const smoothScrollTo = (target, offset = 0) => {
  const element = typeof target === 'string' ? document.querySelector(target) : target;

  if (!element) return;

  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  });
};

/**
 * Genera un ID único
 * @param {string} prefix - Prefijo del ID
 * @returns {string} - ID único
 */
export const generateId = (prefix = 'id') => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Valida email
 * @param {string} email - Email a validar
 * @returns {boolean} - True si es válido
 */
export const isValidEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Valida teléfono colombiano
 * @param {string} phone - Teléfono a validar
 * @returns {boolean} - True si es válido
 */
export const isValidPhone = phone => {
  const cleaned = phone.replace(/\D/g, '');
  // Accepts 10-digit numbers or with country code (+57)
  return cleaned.length === 10 || (cleaned.length === 12 && cleaned.startsWith('57'));
};

/**
 * Obtiene parámetros de URL
 * @param {string} param - Nombre del parámetro
 * @returns {string|null} - Valor del parámetro
 */
export const getUrlParameter = param => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

/**
 * Copia texto al clipboard
 * @param {string} text - Texto a copiar
 * @returns {Promise<boolean>} - True si se copió exitosamente
 */
export const copyToClipboard = async text => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback para navegadores antiguos
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    } catch (error) {
      document.body.removeChild(textArea);
      return false;
    }
  }
};

/**
 * Agrupa un array por una propiedad
 * @param {Array} array - Array a agrupar
 * @param {string} key - Propiedad por la cual agrupar
 * @returns {Object} - Objeto agrupado
 */
export const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    const group = item[key];
    if (!result[group]) {
      result[group] = [];
    }
    result[group].push(item);
    return result;
  }, {});
};

/**
 * Detecta si es dispositivo móvil
 * @returns {boolean} - True si es móvil
 */
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

/**
 * Detecta si es iOS
 * @returns {boolean} - True si es iOS
 */
export const isIOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
};

/**
 * Previene el scroll del body
 * @param {boolean} prevent - True para prevenir, false para permitir
 */
export const preventBodyScroll = (prevent = true) => {
  if (prevent) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};
