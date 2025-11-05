import React from 'react';
import { Phone, Mail, MapPin, Clock, Snowflake, Zap, Wrench, Wind, ShieldCheck, Sun, Calendar, Home, Info, Briefcase, DollarSign, Image } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img 
                src="" 
                alt="Fermata Logo" 
              />
            </div>
            <p className="footer-description">
              Excelência em climatização, segurança eletrônica, energia solar e projetos elétricos. Tecnologia, conforto e segurança com atendimento premium.
            </p>
            <div className="footer-certifications">
              <span className="cert-badge">VIP LG Partner</span>
              <span className="cert-badge">Assistência Gree</span>
            </div>
          </div>

          <div className="footer-section">
            <h4>Navegação</h4>
            <ul className="footer-links footer-nav-list">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}>
                  <Home size={20} />
                  <span>Início</span>
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }}>
                  <Info size={20} />
                  <span>Sobre</span>
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }}>
                  <Briefcase size={20} />
                  <span>Serviços</span>
                </a>
              </li>
              <li>
                <a href="#budget" onClick={(e) => { e.preventDefault(); scrollToSection('#budget'); }}>
                  <DollarSign size={20} />
                  <span>Orçamento</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('#portfolio'); }}>
                  <Image size={20} />
                  <span>Portfólio</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Serviços</h4>
            <ul className="footer-links footer-services-list">
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }}>
                  <Wind size={20} />
                  <span>Climatização</span>
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }}>
                  <ShieldCheck size={20} />
                  <span>Segurança Eletrônica</span>
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }}>
                  <Sun size={20} />
                  <span>Energia Solar</span>
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }}>
                  <Zap size={20} />
                  <span>Projetos Elétricos</span>
                </a>
              </li>
              <li>
                <a href="#scheduling" onClick={(e) => { e.preventDefault(); scrollToSection('#scheduling'); }}>
                  <Calendar size={20} />
                  <span>Agendamento</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <ul className="footer-contact">
              <li>
                <Phone size={18} />
                <a href="https://wa.me/5532988335942" target="_blank" rel="noopener noreferrer">
                  (32) 98833-5942
                </a>
              </li>
              <li>
                <Mail size={18} />
                <a href="mailto:fermata34620835@outlook.com">
                  fermata34620835@outlook.com
                </a>
              </li>
              <li>
                <MapPin size={18} />
                <span>Além -Paraíba</span>
              </li>
              <li>
                <Clock size={18} />
                <span>Seg - Sáb: 08:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-social">
            <div className="social-link">
              <Snowflake size={20} />
            </div>
            <div className="social-link">
              <Zap size={20} />
            </div>
            <div className="social-link">
              <Wrench size={20} />
            </div>
          </div>
          <p className="footer-copyright">
            {currentYear} Fermata Segurança e Climatização. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;