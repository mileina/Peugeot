import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faMapMarkerAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <div className="top-section">
        <div className="logo">
          <img src="logo.png" alt="Peugeot" />
        </div>
      </div>
      <hr className="separator" />
      <div className="bottom-section">
        <div className="language-selector">
          <span>FR</span> <FontAwesomeIcon icon={faChevronDown} />
          <div className="languages">
            <span>EN</span>
            <span>ES</span>
            <span>DE</span>
            <span>IT</span>
          </div>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#models">NOS MODÈLES</a></li>
            <li><a href="#electric">ÉLECTRIQUE & HYBRIDE</a></li>
            <li><a href="#buy">ACHETER</a></li>
            <li><a href="#sell">VENDRE</a></li>
            <li><a href="#services">ENTRETIEN & SERVICES</a></li>
            <li><a href="#universe">UNIVERS PEUGEOT</a></li>
          </ul>
        </nav>
        <div className="header-icons">
          <FontAwesomeIcon icon={faShoppingCart} className="icon shop-icon" />
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon location-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
