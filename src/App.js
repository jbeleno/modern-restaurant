import React, { Suspense, lazy } from 'react';
import './App.css';
import './vendor.css';
import './styles/variables.css';
import './styles.css';
import SEO from './components/SEO';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Intro from './components/Intro';

// Lazy loading of components not "above the fold"
const About = lazy(() => import('./components/About'));
const Menu = lazy(() => import('./components/Menu'));
const Gallery = lazy(() => import('./components/Gallery'));
const Footer = lazy(() => import('./components/Footer'));

// Loading component while lazy components load
const LoadingFallback = () => (
  <div
    style={{
      padding: '3rem',
      textAlign: 'center',
      minHeight: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        width: '40px',
        height: '40px',
        border: '3px solid #dbb17c',
        borderTop: '3px solid transparent',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
      }}
    ></div>
  </div>
);

function App() {
  return (
    <>
      <SEO />
      <div id="page" className="s-pagewrap ss-home">
        <Preloader />
        <Header />
        <Intro />

        <Suspense fallback={<LoadingFallback />}>
          <About />
          <Menu />
          <Gallery />
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;
