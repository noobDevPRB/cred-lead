import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBaar from './components/NavBar';
import Routes from './routes';
import Footer from './components/Footer';
import Cookie from './components/Cookie';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBaar/>
          <Routes/>
        <Footer/>
      </BrowserRouter>
      <Cookie/>
    </>
  );
}

export default App;
