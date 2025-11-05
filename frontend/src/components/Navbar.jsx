import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Orçamento', href: '#budget' },
    { label: 'Agendamento', href: '#scheduling' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Contato', href: '#contact' }
  ];

  const handleClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img 
            src="https://customer-assets.emergentagent.com/job_fermata-solutions/artifacts/tr7ulbz6_49f90b3d-3fd6-41df-841b-12e58de7d2cf.jpg" 
            alt="Fermata Logo" 
            className="logo-img"
          />
        </div>

        <ul className="navbar-menu desktop">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={(e) => {
                e.preventDefault();
                handleClick(item.href);
              }}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <ul>
            {menuItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.href);
                }}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;