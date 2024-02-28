import React, { useState, useEffect } from 'react';
import './HomePage.css';

const cars = [
  {
    moreInfoLink: 'https://www.instagram.com/mileinya',
    title: 'NOUVEAU 2008',
    subtitle: 'MAINTENANT DISPONIBLE EN HYBRIDE',
    description: 'A PARTIR DE',
    subDescription1: '230€/MOIS',
    subDescription2: 'APRES UN 1ER LOYER DE 4 990€',
    image: `${process.env.PUBLIC_URL}/peugeot1.png`,
    bgColor: '#757479',
  },
  {
    moreInfoLink: 'https://www.instagram.com/mileinya',
    title: 'NOUVEAU 208',  
    subtitle: ' ',
    description: 'A PARTIR DE',
    subDescription1: '180€/MOIS',
    subDescription2: 'APRES UN 1ER LOYER DE 4 990€',
    image: `${process.env.PUBLIC_URL}/peugeot2.png`,
    bgColor: '#C3922F',
  },
  {
    moreInfoLink: 'https://www.instagram.com/mileinya',
    title: 'JUSQU\'AU 29 FEVRIER',
    subtitle: ' ',
    description: 'PEUGEOT BOOSTE LE BONUS ECOLOGIQUE DE 4000€',
    subDescription1: 'A 7000€ POUR TOUS',
    subDescription2: '+ BORNE DE RECHARGE OFFERTE',
    image: `${process.env.PUBLIC_URL}/peugeot3.png`,
    bgColor: '#353535',
  },
  {
    moreInfoLink: 'https://www.instagram.com/mileinya',
    title: 'PROFITEZ DE L\'OFFRE',
    subtitle: ' ',
    description: 'LA PEUGEOT 208 EST UNE VOITURE COMPACTE ET ÉLÉGANTE',
    subDescription1: 'DISPONIBLE EN VERSIONS ESSENCE, DIESEL, ET ÉLECTRIQUE,',
    subDescription2: 'CONNUE POUR SON INTÉRIEUR MODERNE ET SA CONDUITE AGRÉABLE.',
    image: `${process.env.PUBLIC_URL}/peugeot4.png`,
    bgColor: '#704874',
  },
];

const HomePage = () => {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const firstCarImage = document.querySelector('.car-image');
    if (firstCarImage) {
      firstCarImage.classList.add('animate-next-zigzag');
    }
  }, []);

  const handleNextClick = () => {
    if (animating) return;
    setAnimating(true);
    const nextIndex = (currentCarIndex + 1) % cars.length;
    
    const carImage = document.querySelector('.car-image');
    carImage.classList.add('animate-left');
    
    const currentBg = document.querySelector('.background-slide');
    const nextBgColor = cars[nextIndex].bgColor;
    currentBg.classList.add('background-exit');
    
    const textElements = document.querySelectorAll('.car-title, .car-subtitle, .car-description, .car-sub-description1, .car-sub-description2');
    textElements.forEach(element => {
      element.classList.add('fade-out');
    });
    
    setTimeout(() => {
      carImage.classList.remove('animate-left', 'visible', 'animate-next-zigzag');
      void carImage.offsetWidth;
      
      setCurrentCarIndex(nextIndex);
      
      currentBg.style.backgroundColor = nextBgColor;
      currentBg.classList.remove('background-exit');
      currentBg.classList.add('background-enter');
      
      carImage.classList.add('animate-next-zigzag');
      
      setTimeout(() => {
        textElements.forEach(element => {
          element.classList.remove('fade-out');
        });
        setAnimating(false);
      }, 500);
    }, 500);
  };

  const nextCarIndex = (currentCarIndex + 1) % cars.length;
  const nextCar = cars[nextCarIndex];

  return (
    <div className="home-page">
      <div className="background-slide current" style={{ backgroundColor: cars[currentCarIndex].bgColor }}></div>
      <div className="background-slide next" style={{ backgroundColor: cars[nextCarIndex].bgColor }}></div>
      <a 
        href={cars[currentCarIndex].moreInfoLink} 
        className="en-savoir-plus-link" 
        style={{
          color: currentCarIndex === 0 ? '#3C3D40' :
                 currentCarIndex === 1 ? '#FFF1CC' :
                 currentCarIndex === 2 ? '#D5D8BE' :
                 currentCarIndex === 3 ? '#C8ACCC' : 'inherit'
        }}
      >
        En savoir plus
      </a>

      <div className="background-slide" style={{ backgroundColor: cars[currentCarIndex].bgColor }}>
        <div className="peugeot-text">PEUGEOT</div>
      </div>
      <div className="car-title">{cars[currentCarIndex].title}</div>
      <div className="car-subtitle">{cars[currentCarIndex].subtitle}</div>
      <div className="car-image-container">
        <img src={cars[currentCarIndex].image} alt={cars[currentCarIndex].title} className="car-image" />
        <div 
          className="next-car-image-container" 
          onClick={handleNextClick} 
          style={{ backgroundColor: nextCar.bgColor }}
        >
          <img src={nextCar.image} alt="Next car" className="next-car-image" />
        </div>
      </div>
      <div className="car-description">{cars[currentCarIndex].description}</div>
      <div className="car-sub-description1">{cars[currentCarIndex].subDescription1}</div>
      <div className="car-sub-description2">{cars[currentCarIndex].subDescription2}</div>
      <div className="scroll-indicator">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="scroll-dot" 
            style={{ animation: `blink-animation 1.5s ${i * 0.5}s infinite` }}
          ></div>
        ))}
        <div className="explore-text">EXPLORE</div>
      </div>
    </div>
  );
};

export default HomePage;
