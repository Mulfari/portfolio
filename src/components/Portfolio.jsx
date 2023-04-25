import React from 'react';
import './styles/Portfolio.css'

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
    // ... Agrega los demás elementos de tu portafolio aquí
  ];

  return (
    <section id="portfolio" className="bg-light-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Portfolio</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div className="row">
          {portfolioItems.map(item => (
            <div key={item.id} className="col-md-4 col-sm-6 portfolio-item">
              <a href={`#portfolioModal${item.id}`} className="portfolio-link" data-toggle="modal">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img src={item.imgSrc} className="img-responsive" alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>{item.title}</h4>
                <p className="text-muted">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
