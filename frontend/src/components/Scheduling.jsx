import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, MapPin, Send } from 'lucide-react';
import './Scheduling.css';

const Scheduling = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    servico: '',
    data: '',
    horario: '',
    endereco: '',
    observacoes: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

    const whatsappUrl = `https://wa.me/5532988335942?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="scheduling" id="scheduling">
      <div className="scheduling-container">
        <div className="scheduling-header">
          <span className="section-badge">Agendamento Online</span>
          <h2 className="section-title">Agende sua Visita Técnica</h2>
          <p className="section-description">
            Higienização, instalação ou manutenção. Escolha o melhor horário para você.
          </p>
        </div>

        <div className="scheduling-content">
          <div className="scheduling-info">
            <h3>Por que agendar conosco?</h3>
            <ul className="info-list">
              <li>
                <div className="info-icon"><Calendar size={24} /></div>
                <div>
                  <strong>Flexibilidade de horários</strong>
                  <p>Atendemos de segunda a sábado em horários convenientes</p>
                </div>
              </li>
              <li>
                <div className="info-icon"><User size={24} /></div>
                <div>
                  <strong>Equipe especializada</strong>
                  <p>Profissionais certificados e treinados</p>
                </div>
              </li>
              <li>
                <div className="info-icon"><Clock size={24} /></div>
                <div>
                  <strong>Pontualidade garantida</strong>
                  <p>Respeitamos seu tempo e compromissos</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="scheduling-form-wrapper">
            <form className="scheduling-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>
                  <User size={18} />
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  <Phone size={18} />
                  Telefone *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  <Calendar size={18} />
                  Serviço *
                </label>
                <select
                  name="servico"
                  value={formData.servico}
                  onChange={handleInputChange}
                  required
                >
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
                  <label>
                    <Calendar size={18} />
                    Data Preferencial *
                  </label>
                  <input
                    type="date"
                    name="data"
                    value={formData.data}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    <Clock size={18} />
                    Horário *
                  </label>
                  <select
                    name="horario"
                    value={formData.horario}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selecione</option>
                    <option value="Manhã (08:00 - 12:00)">Manhã (08:00 - 12:00)</option>
                    <option value="Tarde (13:00 - 17:00)">Tarde (13:00 - 17:00)</option>
                    <option value="Final de tarde (17:00 - 19:00)">Final de tarde (17:00 - 19:00)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>
                  <MapPin size={18} />
                  Endereço Completo *
                </label>
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
                <label>Observações</label>
                <textarea
                  name="observacoes"
                  value={formData.observacoes}
                  onChange={handleInputChange}
                  placeholder="Informações adicionais (opcional)"
                  rows="3"
                />
              </div>

              <button type="submit" className="btn-submit-scheduling">
                Confirmar Agendamento
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scheduling;