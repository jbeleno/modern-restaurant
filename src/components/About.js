import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  useScrollAnimation(0.2); // Activar animación cuando el 20% del elemento sea visible

  return (
    <section id="about" className="container s-about target-section">
      <div className="row s-about__content">
        <div className="column xl-4 lg-5 md-12 s-about__content-start">
          <div className="section-header scroll-animate" data-num="01">
            <h2 className="text-display-title">Nuestra Historia</h2>
          </div>

          <figure className="about-pic-primary scroll-animate">
            <img
              src="/assets/images/nuestra_historia.jpg"
              alt="Historia de Burdo Neiva"
              loading="lazy"
            />
          </figure>
        </div>

        <div className="column xl-6 lg-6 md-12 s-about__content-end">
          <div className="scroll-animate">
            <p>
              Burdo Neiva nació del amor por la cocina tradicional huilense y el deseo de compartir
              los sabores auténticos de nuestra región. Desde nuestros inicios, nos hemos dedicado a
              preservar las recetas ancestrales mientras innovamos con ingredientes frescos y
              técnicas culinarias modernas.
            </p>

            <p>
              Ubicados en el corazón de Neiva, nuestro restaurante se ha convertido en un referente
              gastronómico de la región Huila. Trabajamos directamente con productores locales para
              garantizar la frescura y calidad de nuestros ingredientes.
            </p>

            <p>
              Nuestra cocina se especializa en platos tradicionales colombianos con un toque
              huilense único. Desde el sancocho de gallina hasta el lechón asado, cada plato cuenta
              una historia de tradición y sabor.
            </p>

            <p>
              En Burdo Neiva, creemos que la comida es más que nutrición; es cultura, tradición y
              conexión. Por eso, cada plato que servimos está preparado con amor y respeto por
              nuestras raíces culinarias.
            </p>

            <p>
              Te invitamos a descubrir los sabores que han definido nuestra región y a crear nuevas
              memorias alrededor de nuestra mesa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
