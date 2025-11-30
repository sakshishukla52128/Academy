// src/components/Navigation.jsx
import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Academy', href: '/about-academy' },
    { name: 'Programs', href: '/programs' },
    { name: 'Batches', href: '/batches' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Coaches', href: '/coaches' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">Shuttle Smash</span>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.name} className={`nav-item ${location.pathname === item.href ? 'active' : ''}`}>
              <Link 
                to={item.href} 
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <Link to="/contact" className="cta-primary nav-cta-btn" onClick={() => setIsMenuOpen(false)}>Free Trial</Link>
        </div>

        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
