import React, { useState } from "react";
import "./Header.css";

const Header = ({ onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="burger-menu">
        <div className="burger-icon" onClick={() => setIsMenuOpen(true)}>
          ☰
        </div>
        <h1 className="title">sneakers</h1>

        <img
          className="cart-icon"
          src="/assets/icon1.png"
          alt="Cart Icon"
          onClick={onCartClick}
        />
        <img className="cart-icon" src="/assets/profile.png" alt="Profile Icon" />
      </div>

      <nav className="desktop-nav">
        <h1 className="title">sneakers</h1>
        
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="icons">
          <img className="img1" src="/assets/icon1.png" alt="Cart Icon" onClick={onCartClick} />
          <img className="img2" src="/assets/profile.png" alt="Profile Icon" />
        </div>
      </nav>

      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="menu-overlay" onClick={() => setIsMenuOpen(false)} />
          <div className="menu-content">
            <div className="close-icon" onClick={() => setIsMenuOpen(false)}>
              ✖
            </div>
            <ul>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
