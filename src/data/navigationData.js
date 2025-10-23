export const navigationLinks = [
  {
    id: 'intro',
    label: 'Inicio',
    href: '#intro',
  },
  {
    id: 'about',
    label: 'Nuestra Historia',
    href: '#about',
  },
  {
    id: 'menu',
    label: 'Menú',
    href: '#menu',
  },
  {
    id: 'gallery',
    label: 'Momentos',
    href: '#gallery',
  },
];

// Helper para obtener un link específico
export const getNavigationLinkById = id => {
  return navigationLinks.find(link => link.id === id);
};

// Helper para obtener todos los hrefs
export const getAllHrefs = () => {
  return navigationLinks.map(link => link.href);
};
