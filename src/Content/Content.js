import React, { useState } from 'react';
import './Content.css';

const Content = ({ selectedSection, setSelectedSection }) => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [carClicked, setCarClicked] = useState(false);
  const [carImage, setCarImage] = useState("peugeot5.png");

  const contentMap = {
    electrique: (
      <div className="content-electrique">
        <div className="content-text">
          <h2>NOUVEAU 2008</h2>
          <p>100% ÉLECTRIQUE. 100% IRRÉSISTIBLE.</p>
          <p>Nous avons développé une version 100% électrique pour plusieurs modèles de notre gamme afin de vous aider à réduire vos émissions de CO2 et faire des économies au quotidien.</p>
          <div className="content-buttons">
            <div className="content-image">
              <img src="electrique.png" alt="Chargement de la voiture électrique" />
            </div>
            <div className="content-buttons">
              <button className="button-primary" onClick={() => setSelectedSection('electrique')}>DÉCOUVREZ LA GAMME ÉLECTRIQUE</button>
              <button className="button-secondary">COMMANDEZ EN LIGNE</button>
            </div>
          </div>
        </div>
      </div>
    ),
    porte: (
      <div className="content-porte">
        <div className="content-text">
          <h2>Ouverture Automatique des Portes</h2>
          <p>Profitez de notre système d'ouverture automatique des portes, conçu pour vous offrir un confort optimal. Plus besoin de manipuler les poignées, laissez la technologie simplifier votre quotidien.</p>
        </div>
        <div className="content-image">
          <img src="porte.png" alt="Ouverture Automatique des Portes" />
        </div>
        <div className="content-buttons">
          <button className="button-primary" onClick={() => setSelectedSection('porte')}>DÉCOUVRIR</button>
          <button className="button-secondary">EN SAVOIR PLUS</button>
        </div>
      </div>
    ),
    coffre: (
      <div className="content-coffre">
        <div className="content-text">
          <h2>Grand Coffre Spacieux</h2>
          <p>Avec notre modèle, vous disposez d'un grand coffre spacieux pour transporter tous vos bagages en toute sécurité. Profitez de chaque voyage sans vous soucier du manque de place.</p>
        </div>
        <div className="content-image">
          <img src="coffre.png" alt="Grand Coffre Spacieux" />
        </div>
        <div className="content-buttons">
          <button className="button-primary" onClick={() => setSelectedSection('coffre')}>DÉCOUVRIR</button>
          <button className="button-secondary">EN SAVOIR PLUS</button>
        </div>
      </div>
    ),
    capot: (
      <div className="content-capot">
        <div className="content-text">
          <h2>Moteur Performant Sous le Capot</h2>
          <p>Découvrez la puissance de notre moteur performant caché sous le capot. Associant performance et efficacité énergétique, notre moteur vous offre une expérience de conduite incomparable.</p>
        </div>
        <div className="content-image">
          <img src="capot.png" alt="Moteur Performant Sous le Capot" />
        </div>
        <div className="content-buttons">
          <button className="button-primary" onClick={() => setSelectedSection('capot')}>DÉCOUVRIR</button>
          <button className="button-secondary">EN SAVOIR PLUS</button>
        </div>
      </div>
    ),
  };

const handleButtonClick = (section) => {
    setSelectedSection(section);
    setCarClicked(true);
    setTimeout(() => {
      setCarClicked(false);
      if (section === 'coffre') {
        setCarImage("bagage.png");
      } else if (section === 'capot') {
        setCarImage("moteur.png");
      }
    }, 1000);
  };

  return (
    <div className="Content">
      <div className="MenuSection">
        <ul>
          <li 
            onClick={() => handleButtonClick('electrique')}
            onMouseEnter={() => setHoveredSection('electrique')}
            onMouseLeave={() => setHoveredSection(null)}
            className={hoveredSection === 'electrique' ? 'hovered' : ''}
          >
            100% ÉLECTRIQUE
          </li>
          <li 
            onClick={() => handleButtonClick('porte')}
            onMouseEnter={() => setHoveredSection('porte')}
            onMouseLeave={() => setHoveredSection(null)}
            className={hoveredSection === 'porte' ? 'hovered' : ''}
          >
            PORTE
          </li>
          <li 
            onClick={() => handleButtonClick('coffre')}
            onMouseEnter={() => setHoveredSection('coffre')}
            onMouseLeave={() => setHoveredSection(null)}
            className={hoveredSection === 'coffre' ? 'hovered' : ''}
          >
            COFFRE
          </li>
          <li 
            onClick={() => handleButtonClick('capot')}
            onMouseEnter={() => setHoveredSection('capot')}
            onMouseLeave={() => setHoveredSection(null)}
            className={hoveredSection === 'capot' ? 'hovered' : ''}
          >
            CAPOT
          </li>
        </ul>
      </div>
      <div className="ImageSection" style={{ position: 'relative' }}>
        <img src={carImage} alt="Voiture" className={carClicked ? 'car-selected car-clicked' : 'car-selected'} />
        <div className="marker" 
          style={{ 
            position: 'absolute', 
            top: '65%', 
            left: '35%', 
            backgroundColor: hoveredSection === 'electrique' ? 'rgba(255, 0, 0, 0.9)' : 'rgba(255, 0, 0, 0.5)', 
            width: '50px', 
            height: '50px', 
            borderRadius: '50%', 
            cursor: 'pointer', 
            userSelect: 'none' 
          }} 
          onClick={() => handleButtonClick('electrique')}
        ></div>
        <div className="marker" 
          style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '60%', 
            backgroundColor: hoveredSection === 'porte' ? 'rgba(0, 0, 255, 0.9)' : 'rgba(0, 0, 255, 0.5)', 
            width: '50px', 
            height: '50px', 
            borderRadius: '50%', 
            cursor: 'pointer', 
            userSelect: 'none' 
          }} 
          onClick={() => handleButtonClick('porte')}
        ></div>
        <div className="marker" 
          style={{ 
            position: 'absolute', 
            top: '75%', 
            left: '48%', 
            backgroundColor: hoveredSection === 'coffre' ? 'rgba(0, 255, 0, 0.9)' : 'rgba(0, 255, 0, 0.5)', 
            width: '50px', 
            height: '50px', 
            borderRadius: '50%', 
            cursor: 'pointer', 
            userSelect: 'none' 
          }} 
          onClick={() => handleButtonClick('coffre')}
        ></div>
        <div className="marker" 
          style={{ 
            position: 'absolute', 
            top: '20%', 
            left: '48%', 
            backgroundColor: hoveredSection === 'capot' ? 'rgba(255, 255, 0, 0.9)' : 'rgba(255, 255, 0, 0.5)', 
            width: '50px', 
            height: '50px', 
            borderRadius: '50%', 
            cursor: 'pointer', 
            userSelect: 'none' 
          }} 
          onClick={() => handleButtonClick('capot')}
        ></div>
      </div>
      <div className="ContentSection">
        {selectedSection ? contentMap[selectedSection] : <p>Click on a section to learn more.</p>}
      </div>
    </div>
  );
};

export default Content;
