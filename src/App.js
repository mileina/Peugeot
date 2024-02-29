import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './header/Header'; 
import HomePage from './Homepage/HomePage';
import Content from './Content/Content';
import Sale from './Sale/Sale'; 

function App() {
  const [selectedSection, setSelectedSection] = useState('electrique');

  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        setSelectedSection('footer');
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
      <Content 
        selectedSection={selectedSection} 
        setSelectedSection={setSelectedSection} 
      />
      <Sale /> 
    </div>
  );
}

export default App;
