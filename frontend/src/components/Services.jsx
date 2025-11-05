import React from 'react';
import { Wind, ShieldCheck, Sun, Zap } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Wind size={40} />,
      title: 'Climatização',
      description: 'Instalação, higienização e manutenção de sistemas de ar condicionado residencial e comercial',
      features: ['Instalação Profissional', 'Higienização Técnica', 'Manutenção Preventiva', 'Assistência 24h']
    },
    {
      icon: <ShieldCheck size={40} />,
      title: 'Segurança Eletrônica',
      description: 'Sistemas de segurança de alto padrão com tecnologia de ponta para residências e empresas',
      features: ['Câmeras IP 4K', 'Alarmes Inteligentes', 'Controle de Acesso', 'Monitoramento Remoto']
    },
    {
      icon: <Sun size={40} />,
      title: 'Energia Solar',
      description: 'Projetos completos de energia solar fotovoltaica com economia e sustentabilidade',
      features: ['Projeto Personalizado', 'Instalação Completa', 'Homologação', 'Monitoramento Online']
    },
    {
      icon: <Zap size={40} />,
      title: 'Projetos Elétricos',
      description: 'Projetos elétricos personalizados com engenheiro eletricista próprio',
      features: ['Projetos Residenciais', 'Projetos Comerciais', 'Laudos Técnicos', 'Adequação à NR-10']
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <span className="section-badge">Nossos Serviços</span>
          <h2 className="section-title">Soluções Completas em Tecnologia</h2>
          <p className="section-description">
            Oferecemos serviços especializados com tecnologia de ponta e equipe técnica certificada
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="service-icon-wrapper">
                <div className="service-icon">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-dot"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;