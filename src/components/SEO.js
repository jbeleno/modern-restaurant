import { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';

const SEO = ({ title, description, image = '/assets/images/logo.png', type = 'website' }) => {
  const siteTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} - ${siteConfig.tagline}`;

  const siteDescription = description || siteConfig.description;
  const siteUrl = typeof window !== 'undefined' ? window.location.href : '';

  useEffect(() => {
    // Actualizar título
    document.title = siteTitle;

    // Función helper para actualizar o crear meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    // Meta tags básicos
    updateMetaTag('description', siteDescription);
    updateMetaTag('keywords', siteConfig.keywords.join(', '));

    // Open Graph / Facebook
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', siteUrl, true);
    updateMetaTag('og:title', siteTitle, true);
    updateMetaTag('og:description', siteDescription, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:site_name', siteConfig.name, true);

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:url', siteUrl);
    updateMetaTag('twitter:title', siteTitle);
    updateMetaTag('twitter:description', siteDescription);
    updateMetaTag('twitter:image', image);

    // JSON-LD Schema para Google
    let schemaScript = document.querySelector('script[type="application/ld+json"]');

    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: siteConfig.name,
      description: siteConfig.description,
      image: image,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        addressCountry: siteConfig.address.country,
      },
      telephone: siteConfig.phone,
      email: siteConfig.email,
      url: siteUrl,
      servesCuisine: siteConfig.cuisine,
      priceRange: siteConfig.priceRange,
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '11:00',
          closes: '21:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '11:00',
          closes: '22:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Sunday',
          opens: '12:00',
          closes: '20:00',
        },
      ],
    };

    schemaScript.textContent = JSON.stringify(schemaData);
  }, [siteTitle, siteDescription, siteUrl, image, type]);

  return null; // Este componente no renderiza nada visible
};

export default SEO;
