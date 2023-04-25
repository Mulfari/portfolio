import React from 'react';
import './styles/Header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container">
        <div className="intro-text">
          <div className="background-window">
            <div className="intro-lead-in">¡Hola a todos!</div>
            <div className="intro-heading">Soy un programador web apasionado.</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
