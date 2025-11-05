import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <Sparkles size={16} />
          <span>Tecnologias de Conforto Premium</span>
        </div>

        <h1 className="hero-title">
          Excelência em
          <span className="gradient-text"> Climatização</span>
          <br />
          e <span className="gradient-text">Segurança Eletrônica</span>
        </h1>

        <p className="hero-subtitle">
          Especialistas em climatização de alto padrão, segurança eletrônica, energia solar e projetos elétricos.
          <br />
          VIP LG Partner • Assistência Autorizada Gree • Engenheiro Eletricista Próprio
        </p>

        <div className="hero-cta">
          <button 
            className="btn-primary"
            onClick={() => scrollToSection('#budget')}
          >
            Simular Orçamento
            <ArrowRight size={20} />
          </button>
          <button 
            className="btn-secondary"
            onClick={() => scrollToSection('#scheduling')}
          >
            Agendar Visita
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Anos de Experiência</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Projetos Concluídos</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Satisfação</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;