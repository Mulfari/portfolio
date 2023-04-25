import React from 'react'
import './styles/Header.css'

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="intro-text">
                <div className="background-window">
                    <div className="intro-lead-in">Hello Errbody</div>
                    <div className="intro-heading">Yes Mel, Ajmal, Chien, Junne maybe and Syok.</div>
                    <a href="#services" className="page-scroll btn btn-xl">Aku Bukan Sempit</a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
