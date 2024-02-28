import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Header from './header/Header'; 
import HomePage from './Homepage/HomePage';
import Content from './Content/Content';
import Sale from './Sale/Sale'; // Assurez-vous que le chemin est correct

function App() {
  const [selectedSection, setSelectedSection] = useState('electrique');
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header /> 
      <HomePage /> 
      <div ref={contentRef}>
        <Content 
          selectedSection={selectedSection} 
          setSelectedSection={setSelectedSection} 
        />
      </div>
      <Sale /> {/* Ajout du composant Sale ici */}
    </div>
  );
}

export default App;
