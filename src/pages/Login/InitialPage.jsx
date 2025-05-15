// src/pages/InitialPage.jsx

import React from 'react';
import styles from './InitialPage.css'; 

export default function InitialPage() {
  return (
    <div>
      <div className="header">
        <i className="fas fa-fingerprint header-icon"></i> Ponto Top
      </div>

      <div className="container">
        <div className="sidebar">
          <div className="menu-item">
            <i className="fas fa-calendar-alt"></i> Registrar Ponto
          </div>
          <div className="menu-item">
            <i className="fas fa-calculator"></i> Banco de Horas
          </div>
          <div className="menu-item">
            <i className="fas fa-file-alt"></i> Relatório
          </div>

          <div className="profile-section">
            <div className="menu-item">
              <i className="fas fa-user"></i> Perfil
            </div>
            <div className="menu-item">
              <i className="fas fa-cog"></i> Configurações
            </div>
            <div className="menu-item last-item">
              <i className="fas fa-sign-out-alt"></i> Sair
            </div>
          </div>
        </div>

        <div className="main-content">
          <div className="card">
            <div className="section-title">
              <i className="fas fa-calendar-day"></i> Jornada de hoje
            </div>
            <div className="date">Terça-Feira 22 de Março de 2025</div>

            <div className="status-container">
              <div className="status">ACOMPANHAMENTO DO EXPEDIENTE</div>
            </div>

            <div className="time-container">
              <div className="time-box">
                <div className="section-title">
                  <i className="fas fa-door-open"></i> Saída prevista
                </div>
                <div className="time-display">17:00</div>
              </div>

              <div className="time-box">
                <div className="section-title">
                  <i className="fas fa-hourglass-half"></i> Tempo restante
                </div>
                <div className="time-display">05:30</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="section-title">
              <i className="fas fa-stopwatch"></i> DETALHES DAS HORAS
            </div>
            <div className="detail-item">
              <div className="detail-text">
                <i className="fas fa-briefcase detail-icon"></i> Trabalhando
              </div>
              <span>05:00</span>
            </div>
            <div className="detail-item">
              <div className="detail-text">
                <i className="fas fa-plus-circle detail-icon"></i> Horas extras
              </div>
              <span>00:00</span>
            </div>
            <div className="detail-item">
              <div className="detail-text">
                <i className="fas fa-coffee detail-icon"></i> Intervalo
              </div>
              <span>01:30</span>
            </div>
            <div className="detail-item">
              <div className="detail-text">
                <i className="fas fa-times-circle detail-icon"></i> Faltas
              </div>
              <span>00:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}