export const siteConfig = {
  name: 'Burdo Neiva',
  tagline: 'Restaurante Tradicional',
  description:
    'Restaurante tradicional en Neiva, Colombia. Sabores auténticos de la región Huila con ingredientes frescos y recetas tradicionales.',

  // Contacto
  phone: '+57 300 123 4567',
  phoneFormatted: '(300) 123-4567',
  email: 'info@burdoneiva.com',
  whatsapp: '+573001234567',

  // Dirección
  address: {
    street: 'Calle 5 #8-15',
    neighborhood: 'Centro',
    city: 'Neiva',
    state: 'Huila',
    country: 'Colombia',
    fullAddress: 'Calle 5 #8-15, Centro, Neiva, Huila, Colombia',
  },

  // Redes sociales
  social: {
    facebook: 'https://facebook.com/burdoneiva',
    instagram: 'https://instagram.com/burdoneiva',
    whatsapp: 'https://wa.me/573001234567',
  },

  // Horarios de atención
  hours: {
    weekdays: {
      days: 'Lunes a Viernes',
      open: '11:00am',
      close: '9:00pm',
      formatted: '11:00am - 9:00pm',
    },
    saturday: {
      days: 'Sábados',
      open: '11:00am',
      close: '10:00pm',
      formatted: '11:00am - 10:00pm',
    },
    sunday: {
      days: 'Domingos',
      open: '12:00pm',
      close: '8:00pm',
      formatted: '12:00pm - 8:00pm',
    },
  },

  // Información adicional
  cuisine: 'Colombiana',
  priceRange: '$$',
  established: '2020',

  // SEO
  keywords: [
    'restaurante Neiva',
    'comida tradicional',
    'gastronomía Huila',
    'restaurante colombiano',
    'comida típica',
  ],

  // Footer
  copyright: `© Burdo Neiva ${new Date().getFullYear()}`,
  copyrightText: 'Sabores tradicionales de la región Huila',

  // Links legales
  legalLinks: [
    { label: 'Política de Privacidad', href: '#privacy' },
    { label: 'Términos de Uso', href: '#terms' },
  ],
};

// Helper para obtener horarios formateados
export const getFormattedHours = () => {
  return [
    {
      days: siteConfig.hours.weekdays.days,
      time: siteConfig.hours.weekdays.formatted,
    },
    {
      days: siteConfig.hours.saturday.days,
      time: siteConfig.hours.saturday.formatted,
    },
    {
      days: siteConfig.hours.sunday.days,
      time: siteConfig.hours.sunday.formatted,
    },
  ];
};
