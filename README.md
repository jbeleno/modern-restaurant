# 🍽️ Burdo Neiva - Restaurant Web App

Modern web application for Burdo Neiva restaurant, built with React and optimized for performance and accessibility.

https://modern-restaurant-xi.vercel.app/

## 🚀 Features

- ✅ **Modern SPA** - React 19 with Create React App
- ✅ **Responsive Design** - Adapted for mobile, tablet and desktop
- ✅ **Performance Optimization** - Lazy loading, memoization, debounce
- ✅ **Accessibility (A11y)** - Complete ARIA, keyboard navigation
- ✅ **SEO Optimized** - Meta tags and JSON-LD schema
- ✅ **Testing** - 37 automated tests with Jest and React Testing Library
- ✅ **Code Quality** - ESLint + Prettier + Git Hooks
- ✅ **Modular Architecture** - Reusable components and centralized data

## 📦 Technologies

- **React 19.2.0** - UI Library
- **GSAP 3.13.0** - Animations
- **Motion 12.23** - Modern animations
- **Jest** - Testing framework
- **React Testing Library** - Component testing
- **ESLint + Prettier** - Linting and formatting
- **Husky + lint-staged** - Git hooks

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/jbeleno/modern-restaurant.git

# Install dependencies
npm install

# Start development server
npm start
```

## 📜 Available Scripts

### Development
```bash
npm start              # Development server at http://localhost:3000
npm run build          # Optimized production build
```

### Testing
```bash
npm test               # Tests in watch mode
npm run test:coverage  # Tests with coverage report
```

### Code Quality
```bash
npm run lint           # Check errors with ESLint
npm run lint:fix       # Fix errors automatically
npm run format         # Format code with Prettier
npm run format:check   # Check format without changes
```

## 📁 Project Structure

```
burdo/
├── public/                  # Static files
│   └── assets/
│       └── images/          # Site images
├── src/
│   ├── components/          # React components
│   │   ├── __tests__/       # Component tests
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
│   ├── data/                # Centralized data
│   │   ├── galleryData.js   # Gallery data
│   │   ├── menuData.js      # Restaurant menu
│   │   ├── navigationData.js # Navigation links
│   │   └── siteConfig.js    # Site configuration
│   ├── hooks/               # Custom React Hooks
│   │   ├── useActiveSection.js
│   │   ├── useGalleryChromaEffect.js
│   │   ├── useLightbox.js
│   │   ├── useMenuToggle.js
│   │   ├── usePreloader.js
│   │   ├── useScrollAnimation.js
│   │   ├── useSmoothScroll.js
│   │   └── useStickyHeader.js
│   ├── styles/              # CSS styles
│   │   └── variables.css    # CSS variables (design system)
│   ├── utils/               # Utilities and helpers
│   │   ├── __tests__/       # Utility tests
│   │   ├── constants.js     # Project constants
│   │   ├── formatters.js    # Format functions
│   │   ├── helpers.js       # Helper functions
│   │   ├── main.js          # jQuery scripts (third-party)
│   │   └── plugins.js       # jQuery plugins (third-party)
│   ├── App.js               # Main component
│   ├── App.css              # App styles
│   ├── index.js             # Entry point
│   ├── styles.css           # Global styles
│   └── vendor.css           # Third-party styles
├── .eslintrc.json           # ESLint configuration
├── .prettierrc              # Prettier configuration
├── jest.config.js           # Jest configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Key Features

### Performance
- **Lazy Loading** of components (About, Menu, Gallery, Footer)
- **Memoization** with React.memo in MenuItem
- **Debounce** in scroll events
- **Lazy loading** of images with loading="lazy" attribute
- **Priority hints** in hero images

### Accessibility
- **Complete ARIA attributes** in modal
- **Focus trap** in open modal
- **Keyboard navigation** (Escape, Tab, Enter)
- **Alt text** in all images
- **Appropriate semantic roles**

### SEO
- **Meta tags** Open Graph and Twitter Cards
- **JSON-LD Schema** for restaurants
- **Canonical URLs**
- **Optimized titles and descriptions**

### Testing
- **37 automated tests** covering:
  - Main components (Header, Menu, Modal, MenuItem)
  - Utilities (formatters)
  - User interactions
  - Accessibility

### Code Quality
- **ESLint** with React and accessibility rules
- **Prettier** for consistent formatting
- **Git hooks** (pre-commit) that validate automatically
- **0 linting errors** across the entire project

## 🔧 Configuration

### Environment Variables
You can configure environment variables in a `.env` file:

```env
REACT_APP_SITE_NAME="Burdo Neiva"
REACT_APP_API_URL="https://api.example.com"
```

### Site Configuration
Edit `src/data/siteConfig.js` to change:
- Restaurant name
- Address
- Phone
- Social networks
- Schedule

### Menu
Update `src/data/menuData.js` to modify:
- Menu categories
- Dishes and prices
- Descriptions
- Ingredients

## 📝 Git Hooks

The project has **Husky** configured with **lint-staged** to automatically validate code before each commit:

```bash
git commit
# Automatically runs:
# 1. ESLint --fix (fixes errors)
# 2. Prettier --write (formats code)
# 3. If there are errors → commit blocked ❌
# 4. If everything OK → successful commit ✅
```

## 🧪 Testing

The project includes comprehensive tests:

```bash
# Run all tests
npm test

# Tests with coverage
npm run test:coverage

# Current coverage:
- Components: 4 tested files
- Utilities: 1 tested file
- Total: 37 tests passing ✅
```

## 🚀 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jbeleno/modern-restaurant)

Or manually:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build for Production

```bash
npm run build
# Creates optimized build in /build folder
```

## 🎯 Future Improvements

- [ ] Implement backend with REST API
- [ ] Online reservation system
- [ ] Payment gateway integration
- [ ] Admin panel
- [ ] Online ordering system
- [ ] Google Analytics integration

## 📄 License

This project is private and belongs to Burdo Neiva.

## 👥 Team

Developed with ❤️ for Burdo Neiva

---

**Project Status**: ✅ Production Ready  
**Version**: 0.1.0  
**Tests**: 37/37 passing ✅  
**Linting**: 0 errors ✅
