import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './styles/Portfolio.css';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      imgSrc: 'https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502',
      title: 'Round Icons',
      subtitle: 'Graphic Design',
    },
    {
      id: 2,
      imgSrc: 'https://unsplash.imgix.net/44/9s1lvXLlSbCX5l3ZaYWP_hdr-1.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=f0a1db79752dbb04ec6d2aab7d17c7b0',
      title: 'Startup Framework',
      subtitle: 'Website Design',
    },
    {
      id: 3,
      imgSrc: 'https://unsplash.imgix.net/44/9s1lvXLlSbCX5l3ZaYWP_hdr-1.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=f0a1db79752dbb04ec6d2aab7d17c7b0',
      title: 'Startup Framework',
      subtitle: 'Website Design',
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
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleCloseModal} className="btn btn-primary">
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>
      )}
    </section>
  );
};

export default Portfolio;
