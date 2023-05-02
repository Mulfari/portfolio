import React from 'react';
import './styles/Header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container">
        <div className="intro-text">
          <div className="background-window">
            <div className="intro-lead-in">¡Hola!</div>
            <div className="intro-heading">Bienvenido a mi portafolio, Si deseas contactarme.</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
