// src/components/Navigation.jsx
import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Navigation.css';
// Import the logo image
import logo from '../assets/logo.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Aboutus', href: '/aboutus' },
    { name: 'Programs', href: '/programs' },
    { name: 'Batches', href: '/batches' },
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
        {/* Logo Section */}
        <div className="nav-logo">
          <Link to="/" className="logo-link">
            <img src={logo} alt="SSBA Academy Logo" className="logo-image" />
            <span className="logo-text">SSBA</span>
          </Link>
        </div>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.name} className="nav-item">
              <Link 
                to={item.href} 
                className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="nav-cta">
          <Link 
            to="#trial-form" 
            className="cta-primary nav-cta-btn" 
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              if (location.pathname === '/') {
                document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#trial-form';
              }
            }}
          >
            Free Trial
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
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
