import React from 'react';
import { Wind, ShieldCheck, Sun, Zap, ExternalLink } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const portfolioItems = [
    {
      category: 'Climatização',
      icon: <Wind size={28} />,
      title: 'Ar Condicionado Split',
      description: 'Linha residencial e comercial com tecnologia inverter',
      features: ['LG Dual Inverter', 'Gree Eco Garden', 'Instalação premium', 'Garantia estendida']
    },
    {
      category: 'Climatização',
      icon: <Wind size={28} />,
      title: 'VRF Multi Split',
      description: 'Sistemas centralizados para grandes ambientes',
      features: ['Alta eficiência', 'Controle individual', 'Economia de energia', 'Baixo ruído']
    },
    {
      category: 'Segurança',
      icon: <ShieldCheck size={28} />,
      title: 'Câmeras IP 4K',
      description: 'Sistemas de monitoramento com imagem ultra HD',
      features: ['Resolução 4K', 'Visão noturna', 'Acesso remoto', 'Armazenamento em nuvem']
    },
    {
      category: 'Segurança',
      icon: <ShieldCheck size={28} />,
      title: 'Alarmes Inteligentes',
      description: 'Sistemas de alarme com notificações em tempo real',
      features: ['Sensores de movimento', 'App mobile', 'Integração smart home', 'Backup de energia']
    },
    {
      category: 'Energia Solar',
      icon: <Sun size={28} />,
      title: 'Energia Fotovoltaica',
      description: 'Sistemas solares residenciais e comerciais',
      features: ['Redução de 95% na conta', 'Painéis tier 1', 'Inversor inteligente', 'Monitoramento real-time']
    },
    {
      category: 'Projetos Elétricos',
      icon: <Zap size={28} />,
      title: 'Projetos Personalizados',
      description: 'Projetos elétricos com engenheiro próprio',
      features: ['Análise técnica', 'Laudo e ART', 'Normas ABNT', 'Acompanhamento total']
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <span className="section-badge">Nosso Portfólio</span>
          <h2 className="section-title">Soluções e Serviços</h2>
          <p className="section-description">
            Conheça nossa linha completa de produtos e serviços de alto padrão
          </p>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className="portfolio-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="portfolio-card-header">
                <div className="portfolio-icon">
                  {item.icon}
                </div>
                <span className="portfolio-category">{item.category}</span>
              </div>
              
              <h3 className="portfolio-title">{item.title}</h3>
              <p className="portfolio-description">{item.description}</p>
              
              <ul className="portfolio-features">
                {item.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                className="btn-portfolio-cta"
                onClick={() => scrollToSection('#budget')}
              >
                Solicitar Orçamento
                <ExternalLink size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;