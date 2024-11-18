import React from 'react';
import '../App.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-logo">
        <h2>MyShop</h2>
      </div>
      <div className="footer-links">
        <a href="#about">За нас</a>
        <a href="#contact">Контакти</a>
        <a href="#terms">Условия</a>
        <a href="#privacy">Политика за поверителност</a>
      </div>
      <div className="footer-social">
        <a href="#facebook">Facebook</a>
        <a href="#instagram">Instagram</a>
        <a href="#twitter">Twitter</a>
      </div>
    </div>
    <p className="footer-copy">&copy; 2024 MyShop. Всички права запазени.</p>
  </footer>
);

export default Footer;
