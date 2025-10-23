import React from 'react';
import { siteConfig, getFormattedHours } from '../data/siteConfig';

const Footer = () => {
  const hours = getFormattedHours();

  return (
    <footer id="footer" className="container s-footer">
      {/* Sección Principal del Footer */}
      <div className="row s-footer__main">
        {/* Columna 1: Branding y Descripción */}
        <div className="column xl-4 lg-6 md-12 footer-block s-footer__main-start">
          <div className="s-footer__logo">
            <a className="logo" href="#intro">
              <img src="/assets/images/logo.png" alt={siteConfig.name} />
            </a>
          </div>

          <div className="footer-description">
            <p>{siteConfig.description}</p>
          </div>

          <ul className="s-footer__social social-list">
            <li>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592 c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20 c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z"
                  ></path>
                </svg>
                <span className="u-screen-reader-text">Facebook</span>
              </a>
            </li>
            <li>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M11.999,7.377c-2.554,0-4.623,2.07-4.623,4.623c0,2.554,2.069,4.624,4.623,4.624c2.552,0,4.623-2.07,4.623-4.624 C16.622,9.447,14.551,7.377,11.999,7.377L11.999,7.377z M11.999,15.004c-1.659,0-3.004-1.345-3.004-3.003 c0-1.659,1.345-3.003,3.004-3.003s3.002,1.344,3.002,3.003C15.001,13.659,13.658,15.004,11.999,15.004L11.999,15.004z"
                  ></path>
                  <circle cx="16.806" cy="7.207" r="1.078"></circle>
                  <path
                    fill="currentColor"
                    d="M20.533,6.111c-0.469-1.209-1.424-2.165-2.633-2.632c-0.699-0.263-1.438-0.404-2.186-0.42 c-0.963-0.042-1.268-0.054-3.71-0.054s-2.755,0-3.71,0.054C7.548,3.074,6.809,3.215,6.11,3.479C4.9,3.946,3.945,4.902,3.477,6.111 c-0.263,0.7-0.404,1.438-0.419,2.186c-0.043,0.962-0.056,1.267-0.056,3.71c0,2.442,0,2.753,0.056,3.71 c0.015,0.748,0.156,1.486,0.419,2.187c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45 c0.963,0.042,1.268,0.055,3.71,0.055s2.755,0,3.71-0.055c0.747-0.015,1.486-0.157,2.186-0.419c1.209-0.469,2.164-1.424,2.633-2.633 c0.263-0.7,0.404-1.438,0.419-2.186c0.043-0.962,0.056-1.267,0.056-3.71s0-2.753-0.056-3.71C20.941,7.57,20.801,6.819,20.533,6.111z M19.315,15.643c-0.007,0.576-0.111,1.147-0.311,1.688c-0.305,0.787-0.926,1.409-1.712,1.711c-0.535,0.199-1.099,0.303-1.67,0.311 c-0.95,0.044-1.218,0.055-3.654,0.055c-2.438,0-2.687,0-3.655-0.055c-0.569-0.007-1.135-0.112-1.669-0.311 c-0.789-0.301-1.414-0.923-1.719-1.711c-0.196-0.534-0.302-1.099-0.311-1.669c-0.043-0.95-0.053-1.218-0.053-3.654 c0-2.437,0-2.686,0.053-3.655c0.007-0.576,0.111-1.146,0.311-1.687c0.305-0.789,0.93-1.41,1.719-1.712 c0.534-0.198,1.1-0.303,1.669-0.311c0.951-0.043,1.218-0.055,3.655-0.055c2.437,0,2.687,0,3.654,0.055 c0.571,0.007,1.135,0.112,1.67,0.311c0.786,0.303,1.407,0.925,1.712,1.712c0.196,0.534,0.302,1.099,0.311,1.669 c0.043,0.951,0.054,1.218,0.054,3.655c0,2.436,0,2.698-0.043,3.654H19.315z"
                  ></path>
                </svg>
                <span className="u-screen-reader-text">Instagram</span>
              </a>
            </li>
            <li>
              <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
                  ></path>
                </svg>
                <span className="u-screen-reader-text">WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 2: Contacto */}
        <div className="column xl-4 lg-6 md-12 footer-block">
          <h6>Contacto</h6>
          <div className="footer-contact-info">
            <div className="contact-item">
              <svg
                className="contact-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <p>
                  {siteConfig.address.city}, {siteConfig.address.state},{' '}
                  {siteConfig.address.country}
                </p>
                <p>
                  {siteConfig.address.street}, {siteConfig.address.neighborhood}
                </p>
              </div>
            </div>

            <div className="contact-item">
              <svg
                className="contact-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <div>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
            </div>

            <div className="contact-item">
              <svg
                className="contact-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div>
                <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneFormatted}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Columna 3: Horarios */}
        <div className="column xl-4 lg-6 md-12 footer-block">
          <h6>Horarios de Atención</h6>
          <ul className="opening-hours">
            {hours.map((schedule, index) => (
              <li key={index}>
                <span className="opening-hours__days">{schedule.days}</span>
                <span className="opening-hours__time">{schedule.time}</span>
              </li>
            ))}
          </ul>

          <div className="footer-reservation">
            <p className="reservation-text">¿Quieres reservar una mesa?</p>
            <a href={`tel:${siteConfig.phone}`} className="btn btn--primary reservation-btn">
              Reservar Ahora
            </a>
          </div>
        </div>
      </div>

      {/* Sección Bottom */}
      <div className="row s-footer__bottom">
        <div className="column xl-6 lg-12">
          <p className="ss-copyright">
            <span>{siteConfig.copyright}</span>
            <span>{siteConfig.copyrightText}</span>
          </p>
        </div>
        <div className="column xl-6 lg-12">
          <div className="footer-bottom-links">
            {siteConfig.legalLinks.map((link, index) => (
              <a key={index} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
