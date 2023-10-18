import { useState } from 'react';
import './App.css';
import Navbar from './components/nabvar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { LanguageProvider } from './components/LenChange/LanguageProvider';

function App() {
  return (
    <>
      {/* 
      The LanguageProvider wraps the entire application, providing language context to all child components.
      This ensures that language selection can be accessed and updated throughout the app.
      */}
      <LanguageProvider>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;