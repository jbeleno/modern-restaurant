# Burdo Neiva — Restaurant SPA

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13-88CE02?style=flat-square&logo=greensock&logoColor=white)](https://gsap.com/)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white)](https://jestjs.io/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black)](https://prettier.io/)
[![Husky](https://img.shields.io/badge/Husky-1B6F75?style=flat-square)](https://typicode.github.io/husky/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)

Sitio web para el restaurante **Burdo Neiva**: SPA en React con animaciones GSAP, optimizada para rendimiento, accesibilidad y SEO.

🌐 **Live:** [modern-restaurant-xi.vercel.app](https://modern-restaurant-xi.vercel.app/)

---

## Highlights

- ⚡ **Performance**: lazy loading de componentes, `React.memo`, debounce en scroll, `loading="lazy"` en imágenes, fetch priority hints en hero.
- ♿ **Accesibilidad**: ARIA completo en modal, focus trap, navegación por teclado (Escape, Tab, Enter), alt text en imágenes, roles semánticos.
- 🔍 **SEO**: meta tags Open Graph + Twitter Cards, JSON-LD schema para restaurantes, canonical URLs.
- 🧪 **Testing**: 37 tests automatizados (Jest + React Testing Library) sobre componentes y utilidades.
- 🛡️ **Code quality**: ESLint + Prettier + git hooks con Husky/lint-staged que validan cada commit.
- 🎨 **Animaciones**: GSAP 3.13 + Motion (Framer Motion) para transiciones suaves.

## Stack

| Categoría | Tecnología |
|---|---|
| UI | React 19.2 |
| Animaciones | GSAP 3.13, Motion 12.23 |
| Tests | Jest + React Testing Library |
| Lint/Format | ESLint, Prettier |
| Git hooks | Husky + lint-staged |
| Build | Create React App 5 |
| Hosting | Vercel |

---

## Quick start

```bash
git clone https://github.com/jbeleno/modern-restaurant.git
cd modern-restaurant
npm install
npm start
# → http://localhost:3000
```

## Scripts

### Desarrollo
```bash
npm start              # Dev server
npm run build          # Build de producción
```

### Testing
```bash
npm test               # Watch mode
npm run test:coverage  # Con coverage report
```

### Calidad de código
```bash
npm run lint           # ESLint check
npm run lint:fix       # Auto-fix
npm run format         # Prettier write
npm run format:check   # Prettier check
```

---

## Estructura del proyecto

```
modern-restaurant/
├── public/
│   └── assets/images/         # Imágenes del sitio
├── src/
│   ├── components/
│   │   ├── __tests__/         # Component tests
│   │   ├── About.js
│   │   ├── Footer.js
│   │   ├── Gallery.js
│   │   ├── Header.js
│   │   ├── Intro.js
│   │   ├── Menu.js
│   │   ├── MenuItem.js
│   │   ├── Modal.js
│   │   ├── Preloader.js
│   │   └── SEO.js
│   ├── data/                  # Source of truth de contenido
│   │   ├── menuData.js
│   │   ├── galleryData.js
│   │   ├── navigationData.js
│   │   └── siteConfig.js
│   ├── hooks/                 # Custom hooks
│   │   ├── useActiveSection.js
│   │   ├── useGalleryChromaEffect.js
│   │   ├── useLightbox.js
│   │   ├── useMenuToggle.js
│   │   ├── usePreloader.js
│   │   ├── useScrollAnimation.js
│   │   ├── useSmoothScroll.js
│   │   └── useStickyHeader.js
│   ├── styles/
│   │   └── variables.css      # CSS variables (design system)
│   ├── utils/
│   │   ├── __tests__/
│   │   ├── constants.js
│   │   ├── formatters.js
│   │   ├── helpers.js
│   │   └── plugins.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── .eslintrc.json
├── .prettierrc
├── .husky/pre-commit
├── jest.config.js
└── package.json
```

## Configuración del contenido

El sitio se actualiza editando los archivos en `src/data/`:

| Archivo | Qué controla |
|---|---|
| `siteConfig.js` | Nombre, dirección, teléfono, redes, horario |
| `menuData.js` | Categorías, platos, precios, ingredientes |
| `galleryData.js` | Fotos de la galería |
| `navigationData.js` | Items del menú de navegación |

## Variables de entorno (opcional)

```env
REACT_APP_SITE_NAME="Burdo Neiva"
REACT_APP_API_URL="https://api.example.com"
```

---

## Git hooks

`Husky` + `lint-staged` corren en cada commit:

```
git commit
└─ pre-commit:
   ├─ eslint --fix
   ├─ prettier --write
   └─ Si falla → commit bloqueado
```

## Despliegue

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jbeleno/modern-restaurant)

```bash
npm i -g vercel
vercel
```

### Build manual

```bash
npm run build
# /build con assets optimizados
```

---

## Mejoras pendientes (deuda técnica reconocida)

- **Migrar de CRA a Vite**: Create React App está [oficialmente deprecado desde 2025](https://github.com/facebook/create-react-app). Vite ofrece HMR ~10x más rápido y bundle más pequeño.
- **Reservas online**: backend + flujo de booking con confirmación por email.
- **Sistema de pedidos online** integrado con pasarela de pago (Wompi, Mercado Pago, Stripe).
- **Panel admin** para que el dueño pueda actualizar menú/galería sin tocar código.
- **Internacionalización**: español + inglés para turismo.
- **Lighthouse CI**: medir Performance / Accessibility / SEO automáticamente en cada PR.
- **Image optimization**: pasar a WebP/AVIF y servir con `<picture>` con fallback.

---

## Métricas actuales

- 37/37 tests passing
- 0 errores de ESLint
- SPA con lazy loading y memoization

## Licencia

Software propietario para Burdo Neiva.
