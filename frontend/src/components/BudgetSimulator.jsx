import React, { useState } from 'react';
import { Wind, ShieldCheck, Sun, Zap, Droplet, ArrowRight, ArrowLeft, Send } from 'lucide-react';
import './BudgetSimulator.css';

const BudgetSimulator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    endereco: '',
    tipoImovel: '',
    detalhes: ''
  });

  const services = [
    { id: 'climatizacao', name: 'Climatização', icon: <Wind size={32} /> },
    { id: 'seguranca', name: 'Segurança Eletrônica', icon: <ShieldCheck size={32} /> },
    { id: 'energia-solar', name: 'Energia Solar', icon: <Sun size={32} /> },
    { id: 'projetos-eletricos', name: 'Projetos Elétricos', icon: <Zap size={32} /> },
    { id: 'aquecimento-solar', name: 'Aquecimento Solar (Boiler)', icon: <Droplet size={32} /> }
  ];

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNextStep = () => {
    if (currentStep === 1 && selectedService) {
      setCurrentStep(2);
    } else if (currentStep === 2 && formData.nome && formData.telefone) {
      setCurrentStep(3);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    const serviceName = services.find(s => s.id === selectedService)?.name;
    
    const message = `*Orçamento - Fermata*%0A%0A` +
      `*Serviço:* ${serviceName}%0A` +
      `*Nome:* ${formData.nome}%0A` +
      `*Telefone:* ${formData.telefone}%0A` +
      `*Email:* ${formData.email || 'Não informado'}%0A` +
      `*Endereço:* ${formData.endereco}%0A` +
      `*Tipo de Imóvel:* ${formData.tipoImovel}%0A` +
      `*Detalhes:* ${formData.detalhes || 'Não informado'}`;

    const whatsappUrl = `https://wa.me/5532988335942?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const isStep1Valid = selectedService !== '';
  const isStep2Valid = formData.nome && formData.telefone && formData.endereco && formData.tipoImovel;

  return (
    <section className="budget-simulator" id="budget">
      <div className="budget-container">
        <div className="budget-header">
          <span className="section-badge">Simule seu Orçamento</span>
          <h2 className="section-title">Receba um Orçamento Personalizado</h2>
          <p className="section-description">
            Preencha as informações abaixo e entraremos em contato rapidamente
          </p>
        </div>

        <div className="budget-card">
          {/* Progress Steps */}
          <div className="progress-steps">
            <div className={`step ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
              <div className="step-number">1</div>
              <div className="step-label">Serviço</div>
            </div>
            <div className="step-line"></div>
            <div className={`step ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
              <div className="step-number">2</div>
              <div className="step-label">Informações</div>
            </div>
            <div className="step-line"></div>
            <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
              <div className="step-number">3</div>
              <div className="step-label">Confirmar</div>
            </div>
          </div>

          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <div className="step-content">
              <h3 className="step-title">Escolha o serviço desejado</h3>
              <div className="services-selection">
                {services.map((service) => (
                  <button
                    key={service.id}
                    className={`service-btn ${selectedService === service.id ? 'selected' : ''}`}
                    onClick={() => handleServiceSelect(service.id)}
                  >
                    <div className="service-btn-icon">{service.icon}</div>
                    <span>{service.name}</span>
                  </button>
                ))}
              </div>
              <div className="step-actions">
                <button 
                  className="btn-next"
                  onClick={handleNextStep}
                  disabled={!isStep1Valid}
                >
                  Próximo
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Form */}
          {currentStep === 2 && (
            <div className="step-content">
              <h3 className="step-title">Preencha suas informações</h3>
              <form className="budget-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Nome Completo *</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Telefone *</label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="form-group">
                  <label>Endereço *</label>
                  <input
                    type="text"
                    name="endereco"
                    value={formData.endereco}
                    onChange={handleInputChange}
                    placeholder="Rua, número, bairro, cidade"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Tipo de Imóvel *</label>
                  <select
                    name="tipoImovel"
                    value={formData.tipoImovel}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selecione</option>
                    <option value="Residencial">Residencial</option>
                    <option value="Comercial">Comercial</option>
                    <option value="Industrial">Industrial</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Detalhes Adicionais</label>
                  <textarea
                    name="detalhes"
                    value={formData.detalhes}
                    onChange={handleInputChange}
                    placeholder="Descreva suas necessidades (opcional)"
                    rows="4"
                  />
                </div>
              </form>
              <div className="step-actions">
                <button className="btn-back" onClick={handlePrevStep}>
                  <ArrowLeft size={20} />
                  Voltar
                </button>
                <button 
                  className="btn-next"
                  onClick={handleNextStep}
                  disabled={!isStep2Valid}
                >
                  Próximo
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {currentStep === 3 && (
            <div className="step-content">
              <h3 className="step-title">Confirme suas informações</h3>
              <div className="confirmation-summary">
                <div className="summary-item">
                  <span className="summary-label">Serviço:</span>
                  <span className="summary-value">
                    {services.find(s => s.id === selectedService)?.name}
                  </span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Nome:</span>
                  <span className="summary-value">{formData.nome}</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Telefone:</span>
                  <span className="summary-value">{formData.telefone}</span>
                </div>
                {formData.email && (
                  <div className="summary-item">
                    <span className="summary-label">Email:</span>
                    <span className="summary-value">{formData.email}</span>
                  </div>
                )}
                <div className="summary-item">
                  <span className="summary-label">Endereço:</span>
                  <span className="summary-value">{formData.endereco}</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Tipo de Imóvel:</span>
                  <span className="summary-value">{formData.tipoImovel}</span>
                </div>
                {formData.detalhes && (
                  <div className="summary-item">
                    <span className="summary-label">Detalhes:</span>
                    <span className="summary-value">{formData.detalhes}</span>
                  </div>
                )}
              </div>
              <div className="step-actions">
                <button className="btn-back" onClick={handlePrevStep}>
                  <ArrowLeft size={20} />
                  Voltar
                </button>
                <button className="btn-submit" onClick={handleSubmit}>
                  Enviar para WhatsApp
                  <Send size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BudgetSimulator;