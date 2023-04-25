import React from 'react';
import './styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Contáctame</h2>
            <p className="section-description">
              Si tienes alguna pregunta, no dudes en ponerte en contacto conmigo.
            </p>
            <a href="#contact-form" className="page-scroll btn btn-xl contact-btn">
              Envíame un mensaje
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
