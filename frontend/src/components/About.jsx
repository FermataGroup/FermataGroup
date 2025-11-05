import React from 'react';
import { Shield, Award, Users, Zap } from 'lucide-react';
import './About.css';

const About = () => {
  const features = [
    {
      icon: <Award size={32} />,
      title: 'VIP LG Partner',
      description: 'Parceiro oficial LG com treinamento especializado e acesso a tecnologias exclusivas'
    },
    {
      icon: <Shield size={32} />,
      title: 'Assistência Autorizada Gree',
      description: 'Centro de serviço autorizado com peças originais e garantia de fábrica'
    },
    {
      icon: <Users size={32} />,
      title: 'Engenheiro Próprio',
      description: 'Equipe com engenheiro eletricista e profissional eletrotécnico especializado'
    },
    {
      icon: <Zap size={32} />,
      title: 'Treinamento Técnico',
      description: 'Equipe certificada com atualização constante em novas tecnologias'
    }
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <span className="section-badge">Sobre Nós</span>
          <h2 className="section-title">Excelência e Confiança em Cada Projeto</h2>
          <p className="section-description">
            A Fermata Segurança e Climatização é especialista em soluções de alto padrão para
            climatização, segurança eletrônica, energia solar e projetos elétricos personalizados.
            Nosso compromisso é entregar tecnologia, conforto e segurança com atendimento premium.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;