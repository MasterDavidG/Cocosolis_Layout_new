import React, { useState, useEffect } from 'react';
import '../App.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed-header ${isScrolled ? 'header-thin' : ''}`}>
      <nav className="nav-container">
        <img src="logo1.svg" alt="Logo" className={`logo ${isScrolled ? 'logo-small' : ''}`} />
        <ul className="nav-links">
          <li><a href="#home">Начало</a></li>
          <li><a href="#products">Продукти</a></li>
          <li><a href="#about">За нас</a></li>
          <li><a href="#contact">Контакти</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
