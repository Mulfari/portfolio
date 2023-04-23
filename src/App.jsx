import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import Portfolio from './components/Portfolio';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section />
      <Portfolio />
    </div>
  );
};

export default App;
