import React from 'react';

const Intro = () => {
  return (
    <section id="intro" className="container s-intro target-section">
      <div className="grid-block s-intro__content">
        <div className="intro-header">
          <div className="intro-header__overline">Bienvenido a</div>
          <h1 className="intro-header__big-type">
            Burdo <br />
            Neiva
          </h1>
        </div>

        <figure className="intro-pic-primary">
          <img src="/assets/images/hero_fondo.jpg" alt="Hero de Burdo Neiva" fetchpriority="high" />
        </figure>

        <div className="intro-block-content">
          <figure className="intro-block-content__pic">
            <img
              src="/assets/images/hero_segunda.jpg"
              alt="Segunda imagen hero de Burdo Neiva"
              loading="lazy"
            />
          </figure>

          <div className="intro-block-content__text-wrap">
            <p className="intro-block-content__text">
              Descubre los sabores auténticos de la región Huila en Neiva. Nuestro restaurante
              combina tradición culinaria con ingredientes frescos de la región para ofrecerte una
              experiencia gastronómica única.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
