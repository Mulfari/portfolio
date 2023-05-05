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
            <h3 className="section-subheading text-muted">Un apasionado desarrollador web enfocado en entregar proyectos de alta calidad.</h3>
          </div>
        </div>
        <div className="row text-center">
  <div className="col-md-4">
    <div className="info-box">
      <h4 className="about-heading">Perfil</h4>
      <p className="text-muted">
        Me especializo en diseñar y desarrollar sitios web y aplicaciones eficientes y atractivas. Mi enfoque siempre está en entregar proyectos de alta calidad y superar las expectativas del cliente.
      </p>
    </div>
  </div>
  <div className="col-md-4">
    <div className="info-box">
      <h4 className="about-heading">Habilidades</h4>
      <p className="text-muted">
        - Frameworks y bibliotecas: React, Angular, Node.js, Express, Django, Bootstrap<br />
        - Herramientas y plataformas: Git, Webpack, npm, AWS, Heroku<br />
        - Bases de datos: MySQL, PostgreSQL, MongoDB
      </p>
    </div>
  </div>
  <div className="col-md-4">
    <div className="info-box">
      <h4 className="about-heading">Experiencia/Proyectos</h4>
      <p className="text-muted">
        - Desarrollador Front-End en ABC Company (2021-2023): Trabajé en el diseño y desarrollo de aplicaciones web utilizando React y Angular. Colaboré con equipos multidisciplinarios y mejoré la experiencia del usuario en múltiples proyectos.<br />
        - Proyecto E-commerce: Diseñé y desarrollé un sitio web de comercio electrónico utilizando Django y React, que incluye funciones como carrito de compras, gestión de inventario y pasarela de pagos.<br />
        - Aplicación de red social: Desarrollé una aplicación de red social con funcionalidades como registro de usuarios, publicaciones, comentarios y chat en tiempo real.
      </p>
    </div>
  </div>
</div>

      </div>
    </section>
  )
}

export default Section;
