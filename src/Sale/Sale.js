import React from 'react';
import './Sale.css';

const cars = [
  {
    name: 'GAMME NOUVELLE 208',
    price: '130€/mois',
    imageUrl: 'gamme208.png',
    gifUrl: 'gif1.gif', 
    alt: 'Green Car'
  },
  {
    name: 'GAMME NOUVELLE SUV',
    price: '150€/mois',
    imageUrl: 'gamme3008.png',
    gifUrl: 'gif7.gif', 
    alt: 'Black SUV'
  },
  {
    name: 'GAMME NOUVELLE SEDAN',
    price: '160€/mois',
    imageUrl: 'gamme308.png',
    gifUrl: 'gif6.gif', 
    alt: 'Silver Sedan'
  },
  {
    name: 'GAMME NOUVELLE COUPÉ',
    price: '170€/mois',
    imageUrl: 'gamme2008.png',
    gifUrl: 'gif4.gif', 
    alt: 'Blue Coupé'
  },
  {
    name: 'GAMME NOUVELLE ECO',
    price: '140€/mois',
    imageUrl: 'gamme308.png',
    gifUrl: 'gif5.gif', 
    alt: 'Red Eco'
  }
];

const Sale = () => {
  return (
    <div className="sale-container">
      <h2 className="title">NOS OFFRES DU MOMENT</h2>
      <p className="subtitle">Découvrez et profitez de nos meilleures offres sur l'ensemble de la gamme de voitures Peugeot.</p>
      <div className="offers">
        {cars.map((car, index) => (
          <div className={`offer-card ${index >= 3 ? 'bottom-row' : ''}`} key={index}>
            <div className="car-container">
              <img src={`${process.env.PUBLIC_URL}/${car.imageUrl}`} alt={car.alt} className="car-image" />
              <img src={`${process.env.PUBLIC_URL}/${car.gifUrl}`} alt={car.alt} className="car-gif" />
            </div>
            <div className="offer-details">
              <h3 className="offer-title">{car.name}</h3>
              <p className="offer-price">{car.price}</p>
              <button className="discover-button">Découvrir</button>
            </div>
          </div>
        ))}
      </div>
      <div className="custom-offer">
        <p className="custom-offer-text">LE LOYER SUR MESURE</p>
        <p>PEUGEOT propose une offre inédite de location pour ses modèles phares : la nouvelle E-208, le nouveau SUV E-2008, la berline E-308 et le break E-308 SW, avec 500km par mois inclus et un loyer ajustable au delà.</p>
        <button className="offers-button">PROFITEZ DES OFFRES</button>
      </div>
    </div>
  );
}

export default Sale;
