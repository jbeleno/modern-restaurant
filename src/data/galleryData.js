export const galleryItems = [
  {
    id: 1,
    src: '/assets/images/experiencia1.jpg',
    largeSrc: '/assets/images/experiencia1.jpg',
    alt: 'Experiencia en Burdo Neiva 1',
    caption: 'Momentos especiales con nosotros',
    category: 'ambiente',
  },
  {
    id: 2,
    src: '/assets/images/experiencia2.jpg',
    largeSrc: '/assets/images/experiencia2.jpg',
    alt: 'Experiencia en Burdo Neiva 2',
    caption: 'Momentos especiales con nosotros',
    category: 'comida',
  },
  {
    id: 3,
    src: '/assets/images/experiencia3.jpg',
    largeSrc: '/assets/images/experiencia3.jpg',
    alt: 'Experiencia en Burdo Neiva 3',
    caption: 'Momentos especiales con nosotros',
    category: 'ambiente',
  },
  {
    id: 4,
    src: '/assets/images/experiencia4.jpg',
    largeSrc: '/assets/images/experiencia4.jpg',
    alt: 'Experiencia en Burdo Neiva 4',
    caption: 'Momentos especiales con nosotros',
    category: 'comida',
  },
  {
    id: 5,
    src: '/assets/images/experiencia5.jpg',
    largeSrc: '/assets/images/experiencia5.jpg',
    alt: 'Experiencia en Burdo Neiva 5',
    caption: 'Momentos especiales con nosotros',
    category: 'eventos',
  },
  {
    id: 6,
    src: '/assets/images/experiencia6.jpg',
    largeSrc: '/assets/images/experiencia6.jpg',
    alt: 'Experiencia en Burdo Neiva 6',
    caption: 'Momentos especiales con nosotros',
    category: 'comida',
  },
  {
    id: 7,
    src: '/assets/images/experiencia7.jpg',
    largeSrc: '/assets/images/experiencia7.jpg',
    alt: 'Experiencia en Burdo Neiva 7',
    caption: 'Momentos especiales con nosotros',
    category: 'ambiente',
  },
  {
    id: 8,
    src: '/assets/images/experiencia8.jpg',
    largeSrc: '/assets/images/experiencia8.jpg',
    alt: 'Experiencia en Burdo Neiva 8',
    caption: 'Momentos especiales con nosotros',
    category: 'eventos',
  },
];

// Helper to get images by category
export const getImagesByCategory = category => {
  return galleryItems.filter(item => item.category === category);
};

// Helper para obtener imagen por ID
export const getImageById = id => {
  return galleryItems.find(item => item.id === id);
};
