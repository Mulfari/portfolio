import React from 'react';
import './styles/Section.css';

const Section = () => {
  return (
    <section id="about">

      <div className="container">
      <div className="profile-container">
        <div className="circle"></div>
      </div>


        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Acerca de mí</h2>
            <h3 className="section-subheading text-muted">DESARROLLADOR WEB FULL STACK</h3>
          </div>
        </div>
        <div className="row text-center">
  <div className="col-md-4">
  <div className="info-box">
  <h4 className="about-heading">Perfil</h4>
  <p className="text-muted">
    Soy un apasionado de la programación y la inteligencia artificial, me especializo en desarrollar sitios web y aplicaciones, siempre estoy en busca de nuevas oportunidades para expandir mis habilidades y conocimientos. <br /> Estoy comprometido con el aprendizaje y me esfuerzo por mantenerme actualizado en las últimas tendencias y tecnologías en el ámbito del desarrollo web y la inteligencia artificial.
  </p>
</div>

  </div>
  <div className="col-md-4">
  <div className="info-box">
    <h4 className="about-heading">Enfoque y habilidades</h4>
    <p className="text-muted">
      Me enfoco en la resolución de problemas y en la adaptabilidad al trabajar con diferentes tecnologías y metodologías.
      <br />
      - Comunicación efectiva y trabajo en equipo<br />
      - Habilidad para aprender rápidamente y adaptarme a nuevos desafíos<br />
      - Pensamiento crítico y habilidades analíticas<br />
      - Gestión eficiente del tiempo y organización<br />
      - Creatividad e innovación en la resolución de problemas
    </p>
  </div>
</div>

  <div className="col-md-4">
  <div className="info-box">
  <h4 className="about-heading">Experiencia</h4>
  <p className="text-muted">
    Aunque no tengo experiencia laboral formal, me he dedicado a aprender y mejorar mis habilidades como desarrollador web a través de la realización de proyectos personales y el autoaprendizaje.<br /><br />
    Estoy comprometido con la mejora continua de mis habilidades y conocimientos, y estoy abierto a nuevas oportunidades para aplicar y ampliar mi experiencia en el campo de la programacion.
  </p>
</div>

  </div>
</div>

      </div>
    </section>
  )
}

export default Section;
