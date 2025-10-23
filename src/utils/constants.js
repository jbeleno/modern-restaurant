// Breakpoints para responsive design
export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
  ultraWide: 1920,
};

// Duraciones de animaciones en milisegundos
export const ANIMATION_DURATION = {
  instant: 0,
  fast: 150,
  normal: 300,
  slow: 500,
  verySlow: 800,
};

// Z-index layers para evitar conflictos
export const Z_INDEX = {
  base: 1,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  notification: 1080,
};

// Constantes de scroll
export const SCROLL = {
  offsetHeader: 100,
  smoothDuration: 800,
  debounceDelay: 100,
  throttleDelay: 16, // ~60fps
};

// Constantes de validación
export const VALIDATION = {
  minPasswordLength: 8,
  maxNameLength: 50,
  maxEmailLength: 100,
  maxMessageLength: 500,
};

// Constantes de imágenes
export const IMAGE = {
  quality: {
    low: 60,
    medium: 80,
    high: 95,
  },
  sizes: {
    thumbnail: 150,
    small: 400,
    medium: 800,
    large: 1200,
    xlarge: 1920,
  },
};

// Mensajes del sistema
export const MESSAGES = {
  loading: 'Cargando...',
  error: 'Ha ocurrido un error. Por favor intenta de nuevo.',
  success: '¡Operación exitosa!',
  noResults: 'No se encontraron resultados.',
  networkError: 'Error de conexión. Verifica tu internet.',
};

// Configuración de API (para uso futuro)
export const API = {
  timeout: 30000,
  retryAttempts: 3,
  retryDelay: 1000,
};

// Redes sociales disponibles
export const SOCIAL_NETWORKS = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  twitter: 'Twitter',
  whatsapp: 'WhatsApp',
  youtube: 'YouTube',
};

// Categorías de galería
export const GALLERY_CATEGORIES = {
  all: 'Todos',
  ambiente: 'Ambiente',
  comida: 'Comida',
  eventos: 'Eventos',
};
