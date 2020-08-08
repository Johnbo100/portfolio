import React from 'react';
import Header from './Header';
import './App.css';
import Footer from './Footer';
import Websites from './Websites';
import Aboutme from './Aboutme';
import Focus from './Focus'


function App() {
  return (
    <div className="App">
      
      <Header />
      <Aboutme />
      <Focus />
      <Websites />
      <Footer />
    </div>
  );
}

export default App;
