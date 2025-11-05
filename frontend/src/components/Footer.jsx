import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
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
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}>Início</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }}>Sobre</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }}>Serviços</a></li>
              <li><a href="#budget" onClick={(e) => { e.preventDefault(); scrollToSection('#budget'); }}>Orçamento</a></li>
              <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('#portfolio'); }}>Portfólio</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Serviços</h4>
            <ul className="footer-links">
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }}>Climatização</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }}>Segurança Eletrônica</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }}>Energia Solar</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }}>Projetos Elétricos</a></li>
              <li><a href="#scheduling" onClick={(e) => { e.preventDefault(); scrollToSection('#scheduling'); }}>Agendamento</a></li>
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
                <a href="mailto:contato@fermata.com.br">
                  contato@fermata.com.br
                </a>
              </li>
              <li>
                <MapPin size={18} />
                <span>Juiz de Fora - MG</span>
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
            <a href="#" className="social-link" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
          <p className="footer-copyright">
            © {currentYear} Fermata Segurança e Climatização. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;