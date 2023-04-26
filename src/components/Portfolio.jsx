import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './styles/Portfolio.css';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      imgSrc: '/images/c1.png',
      title: 'Round Icons',
      subtitle: 'Graphic Design',
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
      imgSrc: 'https://unsplash.imgix.net/44/9s1lvXLlSbCX5l3ZaYWP_hdr-1.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=f0a1db79752dbb04ec6d2aab7d17c7b0',
      title: 'Startup Framework',
      subtitle: 'Website Design',
      link: 'https://inquisitive-quokka-67b163.netlify.app/',
      description: 'asd',
    },
    {
      id: 3,
      imgSrc: 'https://unsplash.imgix.net/44/9s1lvXLlSbCX5l3ZaYWP_hdr-1.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=f0a1db79752dbb04ec6d2aab7d17c7b0',
      title: 'Startup Framework',
      subtitle: 'Website Design',
      link: 'https://inquisitive-quok3ka-67b163.netlify.app/',
      description: 'asd',
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
       <Modal.Title>{selectedItem.title}</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <div className="modal-img-container">
         <img src={selectedItem.imgSrc} className="img-responsive modal-img" alt="" />
       </div>
       <p>{selectedItem.subtitle}</p>
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