// Simple inline icon components (replace lucide-react)
const Icon = ({ children }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{children}</span>
);

const MenuIcon = () => <Icon>≡</Icon>;
const CloseIcon = () => <Icon>×</Icon>;
const ArrowRightIcon = () => <Icon>→</Icon>;
const SparklesIcon = () => <Icon>✦</Icon>;
const ShieldIcon = () => <Icon>🛡️</Icon>;
const AwardIcon = () => <Icon>🏅</Icon>;
const UsersIcon = () => <Icon>👥</Icon>;
const ZapIcon = () => <Icon>⚡</Icon>;
const WindIcon = () => <Icon>❄️</Icon>;
const SunIcon = () => <Icon>☀️</Icon>;
const ExternalLinkIcon = () => <Icon>↗</Icon>;
const SendIcon = () => <Icon>📨</Icon>;
const CalendarIcon = () => <Icon>📅</Icon>;
const ClockIcon = () => <Icon>⏰</Icon>;
const UserIcon = () => <Icon>👤</Icon>;
const PhoneIcon = () => <Icon>📞</Icon>;
const MailIcon = () => <Icon>✉️</Icon>;
const MapPinIcon = () => <Icon>📍</Icon>;
const FacebookIcon = () => <Icon>f</Icon>;
const InstagramIcon = () => <Icon>◎</Icon>;
const LinkedinIcon = () => <Icon>in</Icon>;
const PlusIcon = () => <Icon>+</Icon>;
const ChevronUpIcon = () => <Icon>↑</Icon>;
const HelpCircleIcon = () => <Icon>?</Icon>;

const Navbar = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

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
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src="./imagens/fefe.png"
            alt="Fermata Logo"
            className="logo-img"
          />
        </div>

        <ul className="navbar-menu desktop">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={(e) => { e.preventDefault(); handleClick(item.href); }}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <ul>
            {menuItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} onClick={(e) => { e.preventDefault(); handleClick(item.href); }}>
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

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };
  
  const services = [
    { icon: <WindIcon />, label: 'Climatização', color: '#8B7FFF' },
    { icon: <ShieldIcon />, label: 'Segurança Eletrônica', color: '#FF6B9D' },
    { icon: <SunIcon />, label: 'Energia Solar', color: '#4FC3F7' },
    { icon: <ZapIcon />, label: 'Projetos Elétricos', color: '#FFB74D' },
  ];
  
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="snowflake-3d snowflake-1">❄</div>
        <div className="snowflake-3d snowflake-2">❄</div>
        <div className="snowflake-3d snowflake-3">❄</div>
        <div className="snowflake-3d snowflake-4">❄</div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title-main">
          Tecnologia e Conforto com <span className="gradient-text-orange">Fermata</span>
        </h1>

        <p className="hero-subtitle-main">
          Especialistas em climatização, segurança eletrônica, energia solar e projetos elétricos
        </p>

        <div className="hero-cta-main">
          <button className="btn-primary-hero" onClick={() => scrollToSection('#budget')}>
            Solicitar Orçamento
          </button>
        </div>

        <div className="orbit-container">
          <div className="orbit-center">
            <div className="center-logo">
              <img src="./imagens/simbolo.png" alt="Fermata Symbol" className="symbol-img" />
            </div>
          </div>
          
          {services.map((service, index) => (
            <div key={index} className={`orbit-item orbit-item-${index + 1}`} style={{ '--orbit-color': service.color }}>
              <div className="orbit-icon">{service.icon}</div>
              <div className="orbit-label">{service.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const CountUpNumber = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    let startTime;
    const endValue = parseInt(end);
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * endValue));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);
  
  return <span>{count}{suffix}</span>;
};

const About = () => {
  const [showStats, setShowStats] = React.useState(false);
  const scrollToSection = (sectionId) => { const element = document.querySelector(sectionId); if (element) element.scrollIntoView({ behavior: 'smooth' }); };
  
  const features = [
    { icon: <AwardIcon />, title: 'VIP LG Partner', description: 'Parceiro oficial LG com treinamento especializado e acesso a tecnologias exclusivas' },
    { icon: <ShieldIcon />, title: 'Assistência Autorizada Gree', description: 'Centro de serviço autorizado com peças originais e garantia de fábrica' },
    { icon: <UsersIcon />, title: 'Engenheiro Próprio', description: 'Equipe com engenheiro eletricista e profissional eletrotécnico especializado' },
    { icon: <ZapIcon />, title: 'Treinamento Técnico', description: 'Equipe certificada com atualização constante em novas tecnologias' },
  ];

  const stats = [
    { number: 500, suffix: '+', label: 'Projetos Concluídos' },
    { number: 98, suffix: '%', label: 'Satisfação dos Clientes' },
    { number: 10, suffix: '+', label: 'Anos de Experiência' },
    { number: 24, suffix: '/7', label: 'Suporte Disponível' }
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
          <div className="about-actions">
            <button className="btn-action-primary" onClick={() => scrollToSection('#budget')}>
              Solicitar Orçamento <ArrowRightIcon />
            </button>
            <button className="btn-action-secondary" onClick={() => setShowStats(!showStats)}>
              {showStats ? 'Ocultar' : 'Ver'} Estatísticas
            </button>
          </div>
        </div>
        
        {showStats && (
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">
                  <CountUpNumber end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const scrollToSection = (sectionId) => { const element = document.querySelector(sectionId); if (element) element.scrollIntoView({ behavior: 'smooth' }); };
  
  const services = [
    { icon: <WindIcon />, title: 'Climatização', description: 'Instalação, higienização e manutenção de sistemas de ar condicionado residencial e comercial', features: ['Instalação Profissional', 'Higienização Técnica', 'Manutenção Preventiva', 'Assistência 24h'] },
    { icon: <ShieldIcon />, title: 'Segurança Eletrônica', description: 'Sistemas de segurança de alto padrão com tecnologia de ponta para residências e empresas', features: ['Câmeras IP 4K', 'Alarmes Inteligentes', 'Controle de Acesso', 'Monitoramento Remoto'] },
    { icon: <SunIcon />, title: 'Energia Solar', description: 'Projetos completos de energia solar fotovoltaica com economia e sustentabilidade', features: ['Projeto Personalizado', 'Instalação Completa', 'Homologação', 'Monitoramento Online'] },
    { icon: <ZapIcon />, title: 'Projetos Elétricos', description: 'Projetos elétricos personalizados com engenheiro eletricista próprio', features: ['Projetos Residenciais', 'Projetos Comerciais', 'Laudos Técnicos', 'Adequação à NR-10'] },
  ];
  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <span className="section-badge">Nossos Serviços</span>
          <h2 className="section-title">Soluções Completas em Tecnologia</h2>
          <p className="section-description">Oferecemos serviços especializados com tecnologia de ponta e equipe técnica certificada</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="service-icon-wrapper">
                <div className="service-icon">{service.icon}</div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}><span className="feature-dot"></span>{feature}</li>
                ))}
              </ul>
              <button className="service-card-btn" onClick={() => scrollToSection('#budget')}>
                Solicitar Orçamento
              </button>
            </div>
          ))}
        </div>
        <div className="services-footer-actions">
          <button className="btn-action-primary" onClick={() => scrollToSection('#portfolio')}>
            Ver Portfólio Completo <ArrowRightIcon />
          </button>
          <button className="btn-action-secondary" onClick={() => scrollToSection('#scheduling')}>
            Agendar Visita Técnica
          </button>
        </div>
      </div>
    </section>
  );
};

const BudgetSimulator = () => {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [selectedService, setSelectedService] = React.useState('');
  const [formData, setFormData] = React.useState({ nome: '', telefone: '', email: '', endereco: '', tipoImovel: '', detalhes: '' });

  const services = [
    { id: 'climatizacao', name: 'Climatização', icon: <WindIcon /> },
    { id: 'seguranca', name: 'Segurança Eletrônica', icon: <ShieldIcon /> },
    { id: 'energia-solar', name: 'Energia Solar', icon: <SunIcon /> },
    { id: 'projetos-eletricos', name: 'Projetos Elétricos', icon: <ZapIcon /> },
  ];

  const handleServiceSelect = (serviceId) => setSelectedService(serviceId);
  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleNextStep = () => {
    if (currentStep === 1 && selectedService) setCurrentStep(2);
    else if (currentStep === 2 && formData.nome && formData.telefone) setCurrentStep(3);
  };
  const handlePrevStep = () => setCurrentStep((s) => Math.max(1, s - 1));
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
    const whatsappUrl = `https://wa.me/5532988596538?text=${message}`;
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
          <p className="section-description">Preencha as informações abaixo e entraremos em contato rapidamente</p>
        </div>

        <div className="budget-card">
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

          {currentStep === 1 && (
            <div className="step-content">
              <h3 className="step-title">Escolha o serviço desejado</h3>
              <div className="services-selection">
                {services.map((service) => (
                  <button key={service.id} className={`service-btn ${selectedService === service.id ? 'selected' : ''}`} onClick={() => handleServiceSelect(service.id)}>
                    <div className="service-btn-icon">{service.icon}</div>
                    <span>{service.name}</span>
                  </button>
                ))}
              </div>
              <div className="step-actions">
                <button className="btn-next" onClick={handleNextStep} disabled={!isStep1Valid}>
                  Próximo <ArrowRightIcon />
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="step-content">
              <h3 className="step-title">Preencha suas informações</h3>
              <form className="budget-form" onSubmit={(e)=>e.preventDefault()}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Nome Completo *</label>
                    <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} placeholder="Seu nome" required />
                  </div>
                  <div className="form-group">
                    <label>Telefone *</label>
                    <input type="tel" name="telefone" value={formData.telefone} onChange={handleInputChange} placeholder="(00) 00000-0000" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="seu@email.com" />
                </div>
                <div className="form-group">
                  <label>Endereço *</label>
                  <input type="text" name="endereco" value={formData.endereco} onChange={handleInputChange} placeholder="Rua, número, bairro, cidade" required />
                </div>
                <div className="form-group">
                  <label>Tipo de Imóvel *</label>
                  <select name="tipoImovel" value={formData.tipoImovel} onChange={handleInputChange} required>
                    <option value="">Selecione</option>
                    <option value="Residencial">Residencial</option>
                    <option value="Comercial">Comercial</option>
                    <option value="Industrial">Industrial</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Detalhes Adicionais</label>
                  <textarea name="detalhes" value={formData.detalhes} onChange={handleInputChange} placeholder="Descreva suas necessidades (opcional)" rows="4" />
                </div>
              </form>
              <div className="step-actions">
                <button className="btn-back" onClick={handlePrevStep}>← Voltar</button>
                <button className="btn-next" onClick={handleNextStep} disabled={!isStep2Valid}>Próximo <ArrowRightIcon /></button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="step-content">
              <h3 className="step-title">Confirme suas informações</h3>
              <div className="confirmation-summary">
                <div className="summary-item"><span className="summary-label">Serviço:</span><span className="summary-value">{services.find(s => s.id === selectedService)?.name}</span></div>
                <div className="summary-item"><span className="summary-label">Nome:</span><span className="summary-value">{formData.nome}</span></div>
                <div className="summary-item"><span className="summary-label">Telefone:</span><span className="summary-value">{formData.telefone}</span></div>
                {formData.email && (<div className="summary-item"><span className="summary-label">Email:</span><span className="summary-value">{formData.email}</span></div>)}
                <div className="summary-item"><span className="summary-label">Endereço:</span><span className="summary-value">{formData.endereco}</span></div>
                <div className="summary-item"><span className="summary-label">Tipo de Imóvel:</span><span className="summary-value">{formData.tipoImovel}</span></div>
                {formData.detalhes && (<div className="summary-item"><span className="summary-label">Detalhes:</span><span className="summary-value">{formData.detalhes}</span></div>)}
              </div>
              <div className="step-actions">
                <button className="btn-back" onClick={handlePrevStep}>← Voltar</button>
                <button className="btn-submit" onClick={handleSubmit}>Enviar para WhatsApp <SendIcon /></button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Scheduling = () => {
  const [formData, setFormData] = React.useState({ nome: '', telefone: '', servico: '', data: '', horario: '', endereco: '', observacoes: '' });
  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*Agendamento - Fermata*%0A%0A` +
      `*Nome:* ${formData.nome}%0A` +
      `*Telefone:* ${formData.telefone}%0A` +
      `*Serviço:* ${formData.servico}%0A` +
      `*Data Preferencial:* ${formData.data}%0A` +
      `*Horário Preferencial:* ${formData.horario}%0A` +
      `*Endereço:* ${formData.endereco}%0A` +
      `*Observações:* ${formData.observacoes || 'Nenhuma'}`;
    const whatsappUrl = `https://wa.me/5532988596538?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <section className="scheduling" id="scheduling">
      <div className="scheduling-container">
        <div className="scheduling-header">
          <span className="section-badge">Agendamento Online</span>
          <h2 className="section-title">Agende sua Visita Técnica</h2>
          <p className="section-description">Higienização, instalação ou manutenção. Escolha o melhor horário para você.</p>
        </div>

        <div className="scheduling-content">
          <div className="scheduling-info">
            <h3>Por que agendar conosco?</h3>
            <ul className="info-list">
              <li><div className="info-icon"><CalendarIcon /></div><div><strong>Flexibilidade de horários</strong><p>Atendemos de segunda a sábado em horários convenientes</p></div></li>
              <li><div className="info-icon"><UserIcon /></div><div><strong>Equipe especializada</strong><p>Profissionais certificados e treinados</p></div></li>
              <li><div className="info-icon"><ClockIcon /></div><div><strong>Pontualidade garantida</strong><p>Respeitamos seu tempo e compromissos</p></div></li>
            </ul>
          </div>

          <div className="scheduling-form-wrapper">
            <form className="scheduling-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label><UserIcon /> Nome Completo *</label>
                <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} placeholder="Seu nome completo" required />
              </div>
              <div className="form-group">
                <label><PhoneIcon /> Telefone *</label>
                <input type="tel" name="telefone" value={formData.telefone} onChange={handleInputChange} placeholder="(00) 00000-0000" required />
              </div>
              <div className="form-group">
                <label><CalendarIcon /> Serviço *</label>
                <select name="servico" value={formData.servico} onChange={handleInputChange} required>
                  <option value="">Selecione o serviço</option>
                  <option value="Higienização de Ar Condicionado">Higienização de Ar Condicionado</option>
                  <option value="Instalação de Ar Condicionado">Instalação de Ar Condicionado</option>
                  <option value="Manutenção de Ar Condicionado">Manutenção de Ar Condicionado</option>
                  <option value="Instalação de Câmeras">Instalação de Câmeras</option>
                  <option value="Sistema de Alarme">Sistema de Alarme</option>
                  <option value="Energia Solar">Energia Solar</option>
                  <option value="Projeto Elétrico">Projeto Elétrico</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label><CalendarIcon /> Data Preferencial *</label>
                  <input type="date" name="data" value={formData.data} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label><ClockIcon /> Horário *</label>
                  <select name="horario" value={formData.horario} onChange={handleInputChange} required>
                    <option value="">Selecione</option>
                    <option value="Manhã (08:00 - 12:00)">Manhã (08:00 - 12:00)</option>
                    <option value="Tarde (13:00 - 17:00)">Tarde (13:00 - 17:00)</option>
                    <option value="Final de tarde (17:00 - 19:00)">Final de tarde (17:00 - 19:00)</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label><MapPinIcon /> Endereço Completo *</label>
                <input type="text" name="endereco" value={formData.endereco} onChange={handleInputChange} placeholder="Rua, número, bairro, cidade" required />
              </div>
              <div className="form-group">
                <label>Observações</label>
                <textarea name="observacoes" value={formData.observacoes} onChange={handleInputChange} placeholder="Informações adicionais (opcional)" rows="3" />
              </div>
              <button type="submit" className="btn-submit-scheduling">Confirmar Agendamento <SendIcon /></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const portfolioItems = [
    { 
      category: 'Climatização', 
      icon: <WindIcon />, 
      title: 'Instalação e Manutenção de Ar Condicionado', 
      description: 'Instalação profissional de condensadora externa com bomba de vácuo e equipamentos especializados. Processo completo incluindo vácuo, carga de gás e testes de funcionamento para garantir máxima eficiência do sistema.', 
      features: ['Bomba de vácuo profissional', 'Instalação em altura', 'Quadro elétrico dedicado', 'Teste de funcionamento'], 
      image: './imagens/3d2ccc74-6189-43b3-8466-fbf12907300c.jpg' 
    },
    { 
      category: 'Equipe', 
      icon: <UsersIcon />, 
      title: 'Equipe VIP LG Partner', 
      description: 'Nossa equipe técnica certificada como VIP LG Partner. Profissionais treinados e capacitados pela fabricante para instalação, manutenção e assistência técnica especializada em equipamentos LG de climatização.', 
      features: ['Certificação LG oficial', 'Treinamento contínuo', 'Equipe especializada', 'Atendimento premium'], 
      image: './imagens/4ad41d9a-3e5b-4614-bb81-eb630c696712.jpg' 
    },
    { 
      category: 'Climatização', 
      icon: <WindIcon />, 
      title: 'Instalação de Ar Cortina Comercial', 
      description: 'Instalação de ar cortina em ambiente comercial realizada por instalador VIP Partner. Equipamento instalado estrategicamente na entrada para manter a climatização interna e economizar energia.', 
      features: ['Instalador certificado', 'Ambiente comercial', 'Economia de energia', 'Instalação profissional'], 
      image: './imagens/a64c4eb2-3197-4d74-a541-b97a68c68012.jpg' 
    },
    { 
      category: 'Climatização', 
      icon: <WindIcon />, 
      title: 'Manutenção Técnica Fermata', 
      description: 'Serviço de manutenção preventiva e corretiva realizado por técnico uniformizado Fermata. Atendimento profissional com diagnóstico completo, limpeza, verificação de gás e ajustes necessários para perfeito funcionamento.', 
      features: ['Técnico uniformizado', 'Manutenção preventiva', 'Diagnóstico completo', 'Garantia de serviço'], 
      image: './imagens/d510788a-b6d9-4b20-81e5-dd4967e793f5.jpg' 
    },
    { 
      category: 'Showroom', 
      icon: <AwardIcon />, 
      title: 'Showroom Fermata - Equipamentos Gree', 
      description: 'Nosso showroom completo com equipamentos Gree em estoque. Ambiente preparado para demonstração de produtos, atendimento personalizado e entrega imediata de ar condicionados, câmeras, alarmes e projetos elétricos.', 
      features: ['Estoque próprio Gree', 'Entrega imediata', 'Demonstração de produtos', 'Atendimento presencial'], 
      image: './imagens/f4d812cb-d140-49ad-af12-8da817e8b841.jpg' 
    },
    { 
      category: 'Climatização', 
      icon: <WindIcon />, 
      title: 'Instalação Completa Split Fujitsu', 
      description: 'Instalação de sistema split Fujitsu Airstar com todos os equipamentos necessários. Processo técnico incluindo bomba de vácuo, quadro elétrico, tubulação e acabamento profissional em ambiente externo.', 
      features: ['Marca Fujitsu Airstar', 'Bomba de vácuo', 'Quadro elétrico', 'Acabamento premium'], 
      image: './imagens/3d2ccc74-6189-43b3-8466-fbf12907300c.jpg' 
    },
  ];
  const scrollToSection = (sectionId) => { const element = document.querySelector(sectionId); if (element) element.scrollIntoView({ behavior: 'smooth' }); };
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <span className="section-badge">Nosso Portfólio</span>
          <h2 className="section-title">Soluções e Serviços</h2>
          <p className="section-description">Conheça nossa linha completa de produtos e serviços de alto padrão</p>
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-icon">{item.icon}</div>
                  <span className="portfolio-category">{item.category}</span>
                </div>
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-title">{item.title}</h3>
                <p className="portfolio-description">{item.description}</p>
                <ul className="portfolio-features">
                  {item.features.map((feature, idx) => (
                    <li key={idx}><span className="feature-check">✓</span>{feature}</li>
                  ))}
                </ul>
                <button className="btn-portfolio-cta" onClick={() => scrollToSection('#budget')}>
                  Solicitar Orçamento <ExternalLinkIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToSection = (sectionId) => { const element = document.querySelector(sectionId); if (element) element.scrollIntoView({ behavior: 'smooth' }); };
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="./imagens/logo.png" alt="Fermata Logo" />
            </div>
            <p className="footer-description">Excelência em climatização, segurança eletrônica, energia solar e projetos elétricos. Tecnologia, conforto e segurança com atendimento premium.</p>
            <div className="footer-certifications"><span className="cert-badge">VIP LG Partner</span><span className="cert-badge">Assistência Gree</span></div>
          </div>
          <div className="footer-section">
            <h4>Navegação</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e)=>{e.preventDefault(); scrollToSection('#home');}}>Início</a></li>
              <li><a href="#about" onClick={(e)=>{e.preventDefault(); scrollToSection('#about');}}>Sobre</a></li>
              <li><a href="#services" onClick={(e)=>{e.preventDefault(); scrollToSection('#services');}}>Serviços</a></li>
              <li><a href="#budget" onClick={(e)=>{e.preventDefault(); scrollToSection('#budget');}}>Orçamento</a></li>
              <li><a href="#portfolio" onClick={(e)=>{e.preventDefault(); scrollToSection('#portfolio');}}>Portfólio</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Serviços</h4>
            <ul className="footer-links">
              <li><a href="#services" onClick={(e)=>{e.preventDefault(); scrollToSection('#services');}}>Climatização</a></li>
              <li><a href="#services" onClick={(e)=>{e.preventDefault(); scrollToSection('#services');}}>Segurança Eletrônica</a></li>
              <li><a href="#services" onClick={(e)=>{e.preventDefault(); scrollToSection('#services');}}>Energia Solar</a></li>
              <li><a href="#services" onClick={(e)=>{e.preventDefault(); scrollToSection('#services');}}>Projetos Elétricos</a></li>
              <li><a href="#scheduling" onClick={(e)=>{e.preventDefault(); scrollToSection('#scheduling');}}>Agendamento</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contato</h4>
            <ul className="footer-contact">
              <li><PhoneIcon /> <a href="https://wa.me/5532988596538" target="_blank" rel="noopener noreferrer">(32) 98859-6538</a></li>
              <li><MailIcon /> <a href="mailto:contato@fermata.com.br">contato@fermata.com.br</a></li>
              <li><MapPinIcon /> <span>Juiz de Fora - MG</span></li>
              <li><ClockIcon /> <span>Seg - Sáb: 08:00 - 18:00</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <div className="footer-social">
            <a href="#" className="social-link" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" className="social-link" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" className="social-link" aria-label="LinkedIn"><LinkedinIcon /></a>
          </div>
          <p className="footer-copyright">© {currentYear} Pedro Gomes. Todos os direitos reservados.</p>
          <p className="footer-developer">Desenvolvido por Pedro Gomes</p>
        </div>
      </div>
    </footer>
  );
};

const FAQModal = ({ isOpen, onClose }) => {
  const faqItems = [
    {
      question: 'Quais serviços a Fermata oferece?',
      answer: 'Oferecemos climatização (ar condicionado), segurança eletrônica (câmeras e alarmes), energia solar fotovoltaica e projetos elétricos completos.'
    },
    {
      question: 'Qual o prazo de instalação?',
      answer: 'O prazo varia de acordo com o serviço. Instalações residenciais de ar condicionado levam de 1 a 2 dias. Projetos maiores são avaliados individualmente.'
    },
    {
      question: 'Vocês oferecem garantia?',
      answer: 'Sim! Oferecemos garantia estendida em todos os nossos serviços e equipamentos. Os detalhes variam conforme o produto e serviço contratado.'
    },
    {
      question: 'Como funciona o agendamento?',
      answer: 'Você pode agendar através do nosso formulário online, WhatsApp ou telefone. Nossa equipe entrará em contato para confirmar data e horário.'
    },
    {
      question: 'Atendem em quais regiões?',
      answer: 'Atendemos toda a região metropolitana e cidades vizinhas. Entre em contato para confirmar se atendemos sua localidade.'
    },
    {
      question: 'Fazem manutenção preventiva?',
      answer: 'Sim! Oferecemos planos de manutenção preventiva para ar condicionado e sistemas de segurança, garantindo o melhor desempenho dos equipamentos.'
    }
  ];

  const [openIndex, setOpenIndex] = React.useState(null);

  if (!isOpen) return null;

  return (
    <div className="faq-modal-overlay" onClick={onClose}>
      <div className="faq-modal" onClick={(e) => e.stopPropagation()}>
        <div className="faq-modal-header">
          <h2>Perguntas Frequentes</h2>
          <button className="faq-close-btn" onClick={onClose}>×</button>
        </div>
        <div className="faq-modal-content">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <button 
                className={`faq-question ${openIndex === index ? 'active' : ''}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{item.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showFAQ, setShowFAQ] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const openFAQ = () => {
    setShowFAQ(true);
    setIsOpen(false);
  };

  return (
    <>
      <div className="floating-action-container">
        {isOpen && (
          <div className="fab-options">
            <button className="fab-option" onClick={scrollToTop} title="Voltar ao topo">
              <ChevronUpIcon />
              <span>Topo</span>
            </button>
            <button className="fab-option" onClick={openFAQ} title="FAQ">
              <HelpCircleIcon />
              <span>FAQ</span>
            </button>
          </div>
        )}
        <button 
          className={`fab-main ${isOpen ? 'fab-open' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu de ações"
        >
          <PlusIcon />
        </button>
      </div>
      <FAQModal isOpen={showFAQ} onClose={() => setShowFAQ(false)} />
    </>
  );
};

const App = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="homepage">
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Services />
      <BudgetSimulator />
      <Portfolio />
      <Scheduling />
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);
root.render(<App />);
