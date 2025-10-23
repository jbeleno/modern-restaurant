// Categorías del menú
export const menuCategories = {
  'platos-principales': 'Platos Principales',
  especialidades: 'Especialidades Huilenses',
  'bebidas-postres': 'Bebidas y Postres',
};

// Items del menú
export const menuItems = [
  // Platos Principales
  {
    id: 'sancocho-gallina',
    category: 'platos-principales',
    name: 'Sancocho de Gallina',
    description: 'Sopa tradicional huilense con gallina criolla, yuca, plátano y cilantro.',
    price: 18000,
    image: '/assets/images/plato1.jpg',
    ingredients: [
      'Gallina criolla',
      'Yuca fresca',
      'Plátano verde',
      'Cilantro',
      'Cebolla',
      'Ajo',
      'Comino',
    ],
    available: true,
    featured: true,
  },
  {
    id: 'lechon-asado',
    category: 'platos-principales',
    name: 'Lechón Asado',
    description: 'Lechón tierno asado lentamente con especias tradicionales de la región.',
    price: 25000,
    image: '/assets/images/plato2.jpg',
    ingredients: ['Lechón tierno', 'Ajo', 'Comino', 'Pimienta', 'Sal marina', 'Hierbas aromáticas'],
    available: true,
    featured: true,
  },
  {
    id: 'bandeja-paisa',
    category: 'platos-principales',
    name: 'Bandeja Paisa',
    description: 'Plato tradicional con frijoles, arroz, carne, chicharrón, huevo y aguacate.',
    price: 22000,
    image: '/assets/images/plato3.jpg',
    ingredients: [
      'Frijoles rojos',
      'Arroz blanco',
      'Carne molida',
      'Chicharrón',
      'Huevo frito',
      'Aguacate',
      'Plátano maduro',
    ],
    available: true,
    featured: false,
  },
  {
    id: 'pescado-frito',
    category: 'platos-principales',
    name: 'Pescado Frito',
    description: 'Pescado fresco del río Magdalena frito dorado con patacones y ensalada.',
    price: 20000,
    image: '/assets/images/plato1.jpg',
    ingredients: ['Pescado fresco', 'Patacones', 'Ensalada mixta', 'Limón', 'Ajo', 'Cilantro'],
    available: true,
    featured: false,
  },
  {
    id: 'arroz-pollo',
    category: 'platos-principales',
    name: 'Arroz con Pollo',
    description: 'Arroz con pollo campesino, verduras frescas y especias tradicionales.',
    price: 16000,
    image: '/assets/images/plato2.jpg',
    ingredients: ['Pollo campesino', 'Arroz', 'Zanahoria', 'Arvejas', 'Cebolla', 'Ajo', 'Comino'],
    available: true,
    featured: false,
  },
  // Especialidades Huilenses
  {
    id: 'tamal-huilense',
    category: 'especialidades',
    name: 'Tamal Huilense',
    description: 'Tamal tradicional envuelto en hoja de plátano con carne y verduras.',
    price: 8000,
    image: '/assets/images/plato3.jpg',
    ingredients: [
      'Masa de maíz',
      'Carne de cerdo',
      'Papa',
      'Zanahoria',
      'Hoja de plátano',
      'Achiote',
    ],
    available: true,
    featured: true,
  },
  {
    id: 'arepa-choclo',
    category: 'especialidades',
    name: 'Arepa de Choclo',
    description: 'Arepa dulce de maíz tierno con queso fresco y mantequilla.',
    price: 6000,
    image: '/assets/images/plato1.jpg',
    ingredients: ['Maíz tierno', 'Queso fresco', 'Mantequilla', 'Sal', 'Azúcar'],
    available: true,
    featured: false,
  },
  {
    id: 'empanadas-pipian',
    category: 'especialidades',
    name: 'Empanadas de Pipián',
    description: 'Empanadas fritas rellenas de pipián, una especialidad local.',
    price: 4000,
    image: '/assets/images/plato2.jpg',
    ingredients: ['Masa de maíz', 'Pipián molido', 'Cebolla', 'Ajo', 'Comino', 'Aceite'],
    available: true,
    featured: false,
  },
  {
    id: 'chicha-maiz',
    category: 'especialidades',
    name: 'Chicha de Maíz',
    description: 'Bebida tradicional fermentada de maíz, refrescante y natural.',
    price: 5000,
    image: '/assets/images/plato3.jpg',
    ingredients: ['Maíz fermentado', 'Agua', 'Panela', 'Canela', 'Clavos de olor'],
    available: true,
    featured: false,
  },
  {
    id: 'dulce-leche',
    category: 'especialidades',
    name: 'Dulce de Leche',
    description: 'Postre tradicional colombiano con leche condensada y canela.',
    price: 7000,
    image: '/assets/images/plato1.jpg',
    ingredients: ['Leche condensada', 'Canela', 'Clavos de olor', 'Vainilla'],
    available: true,
    featured: false,
  },
  // Bebidas y Postres
  {
    id: 'cafe-huilense',
    category: 'bebidas-postres',
    name: 'Café Huilense',
    description: 'Café de la región Huila, reconocido por su calidad y sabor único.',
    price: 3000,
    image: '/assets/images/plato2.jpg',
    ingredients: ['Café Huila', 'Agua filtrada', 'Azúcar', 'Leche'],
    available: true,
    featured: false,
  },
  {
    id: 'jugo-lulo',
    category: 'bebidas-postres',
    name: 'Jugo de Lulo',
    description: 'Jugo natural de lulo, fruta tropical de la región.',
    price: 4000,
    image: '/assets/images/plato3.jpg',
    ingredients: ['Lulo fresco', 'Agua', 'Azúcar', 'Hielo'],
    available: true,
    featured: false,
  },
  {
    id: 'arequipe',
    category: 'bebidas-postres',
    name: 'Arequipe',
    description: 'Dulce de leche tradicional servido con galletas caseras.',
    price: 6000,
    image: '/assets/images/plato1.jpg',
    ingredients: ['Leche', 'Azúcar', 'Bicarbonato', 'Galletas caseras'],
    available: true,
    featured: false,
  },
  {
    id: 'tres-leches',
    category: 'bebidas-postres',
    name: 'Tres Leches',
    description: 'Postre tradicional con tres tipos de leche y canela.',
    price: 8000,
    image: '/assets/images/plato2.jpg',
    ingredients: ['Leche evaporada', 'Leche condensada', 'Crema de leche', 'Canela', 'Bizcocho'],
    available: true,
    featured: false,
  },
  {
    id: 'agua-panela',
    category: 'bebidas-postres',
    name: 'Agua de Panela',
    description: 'Bebida refrescante tradicional con panela y limón.',
    price: 2000,
    image: '/assets/images/plato3.jpg',
    ingredients: ['Panela', 'Agua', 'Limón', 'Hielo'],
    available: true,
    featured: false,
  },
];

// Funciones helper
export const getMenuItemsByCategory = category => {
  return menuItems.filter(item => item.category === category && item.available);
};

export const getFeaturedItems = () => {
  return menuItems.filter(item => item.featured && item.available);
};

export const getMenuItemById = id => {
  return menuItems.find(item => item.id === id);
};

export const getAllCategories = () => {
  return Object.entries(menuCategories).map(([key, value]) => ({
    id: key,
    name: value,
  }));
};
