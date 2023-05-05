import React from 'react';
import './styles/Header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container">
        <div className="intro-text">
          <div className="background-window">
            <div className="intro-lead-in">¡Hola, soy Salvador!</div>
            <div className="intro-heading">desarrollador web fulL stack</div>
            <p className="contact-text">Echa un vistazo a mi trabajo y siéntete libre de contactarme.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
