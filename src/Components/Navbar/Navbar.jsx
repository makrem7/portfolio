import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../Navbar/Style.scss";

const Navbar = ({ selectedLanguage, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    onLanguageChange(selectedLanguage);
  };

  // Translations for Navbar links
  const translations = {
    en: {
      home: "Home",
      about: "About me",
      work: "Work",
      hireMe: "Hire me",
      contact: "Contact"
    },
    de: {
      home: "Startseite",
      about: "Über mich",
      work: "Arbeit",
      hireMe: "Stellt mich ein",
      contact: "Kontakt"
    },
    fr: {
      home: "Accueil",
      about: "À propos de moi",
      work: "Travail",
      hireMe: "Embauchez-moi",
      contact: "Contact"
    }
  };

  return (
    <nav className={`navbar ${isOpen ? "active" : ""}`}>
      <div className="navbar-brand">
        <Link to="/portfolio">
          <h1 style={{ display: 'none' }}>Dev.</h1>
        </Link>
      </div>
      <div className="navbar-menu">
        <ul className={`menu ${isOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/portfolio" className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active-link" : ""
                }>
              {translations[selectedLanguage].home}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active-link" : ""
                }>
              {translations[selectedLanguage].about}
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active-link" : ""
                }>
              {translations[selectedLanguage].work}
            </NavLink>
          </li>
          {/*<li>
            <NavLink to="/contact" className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active-link" : ""
                }>
              {translations[selectedLanguage].contact}
            </NavLink>
          </li>*/}
          <li>
            <a href="mailto:makrem.mltifi@gmail.com" target="_blank">
              <button>{translations[selectedLanguage].hireMe}</button>
            </a>
          </li>
        </ul>
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleNavbar}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {/* Language Selection */}
      <div className="language-select">
        <select value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
