import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './styles/Portfolio.css';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      imgSrc: '/images/c1.png',
      title: 'Cosmic Curiosities',
      subtitle: 'Generador de frases',
      link: 'https://inquisitive-quokka-67b163.netlify.app/',
      description: (
        <>
          - Una aplicación desarrollada en JavaScript y React que muestra al azar citas motivadoras de personajes históricos y autores famosos.
          <br />
          - Diseño minimalista, fácil de usar, Interfaz limpia y atractiva. ideal para aquellos que buscan inspiración rápida o desean explorar la programación en React.
          <br />
          - Base de datos con citas variadas de frases célebres de figuras importantes en diferentes campos, ofreciendo una amplia gama de pensamientos y perspectivas inspiradoras.
        </>
      ),
    },
    {
      id: 2,
      imgSrc: '/images/c2.png',
      title: 'Clima App',
      subtitle: 'Aplicación del clima en tiempo real',
      link: 'https://dapper-banoffee-838abe.netlify.app/',
      description: (
        <>
          - Es una aplicación web desarrollada en JavaScript utilizando React, que permite a los usuarios conocer el estado del clima en tiempo real para cualquier ciudad del mundo. La aplicación se basa en la API de OpenWeatherMap para obtener datos precisos y actualizados sobre las condiciones climáticas, incluyendo la temperatura, humedad, velocidad del viento y descripción general del clima.
          <br />
          - Con una interfaz de usuario sencilla e intuitiva que facilita la búsqueda y visualización de información climática en un instante. Los usuarios pueden ingresar el nombre de una ciudad en el cuadro de búsqueda y recibir de manera rápida y eficiente los detalles del clima actual en la ubicación seleccionada.
        </>
      ),
    },
    {
      id: 3,
      imgSrc: '/images/c3.png',
      title: 'Rick y Morty App',
      subtitle: 'Explorador de personajes',
      link: 'https://fastidious-blini-2b7661.netlify.app/',
      description: (
        <>
          Aplicación web interactiva creada con JavaScript y React, permite explorar y descubrir información detallada sobre los personajes de la serie. La aplicación utiliza la API de Rick y Morty para obtener datos precisos y actualizados sobre los personajes, incluyendo imágenes, nombres, especies, géneros, estatus y más.
          <br />
          Interfaz de usuario intuitiva y atractiva, donde los usuarios pueden navegar fácilmente a través de una lista de personajes o utilizar la función de búsqueda para encontrar personajes específicos por nombre.
        </>
      ),
    },    
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section id="portfolio" className="bg-light-gray">
      <div className="container">
        <div className="row">
          {portfolioItems.map(item => (
            <div key={item.id} className="col-md-4 col-sm-6 portfolio-item">
                      <div
      className="portfolio-link"
      onClick={() => handleItemClick(item)}
    >
      <div className="portfolio-hover">
        <div className="portfolio-hover-content">
          <i className="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img src={item.imgSrc} className="img-responsive" alt="" />
    </div>
          <div className="portfolio-caption">
            <h4>{item.title}</h4>
            <p className="text-muted">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {selectedItem && (
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ textAlign: 'center' }}>{selectedItem.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-img-container">
            <img src={selectedItem.imgSrc} className="img-responsive modal-img" alt="" />
          </div>
          <p style={{ textAlign: 'center' }}>{selectedItem.subtitle}</p>
          <p>{selectedItem.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => window.open(selectedItem.link, "_blank")}
          >
            Ir a la página
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    )}
  </section>
  );
};

export default Portfolio;