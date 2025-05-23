import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './InitialPage.module.css';

export default function InitialPage() {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showConfirm, setShowConfirm] = useState(false);

  // Atualiza o relógio a cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Formata a data em português
  const formatDate = (date) => {
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'America/Sao_Paulo',
    });
  };

  // Calcula o tempo restante até às 17:00
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      17,
      0,
      0
    );

    if (now > target) {
      return '00:00';
    }

    const diff = target - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`;
  };

  // Abrir modal de confirmação
  const handleLogoutClick = () => {
    setShowConfirm(true);
  };

  // Confirmar logout
  const confirmLogout = () => {
    setShowConfirm(false);
    navigate('/logout');
  };

  // Cancelar logout
  const cancelLogout = () => {
    setShowConfirm(false);
  };

  return (
    <div className={styles.appContainer}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <img
            src="/src/assets/Nearpod.svg"
            className={styles.logo}
            alt="Logo"
          />
          <span className={styles.logoText}>CheckPoint</span>
        </div>
        <div className={styles.userInfo}>
          <span className={styles.userName}>Rodrigo Vieira de Morais</span>
          <div className={styles.userAvatar}>
            <i className="fas fa-user-circle"></i>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className={styles.container}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.topMenu}>
            <div
              className={styles.menuItem}
              onClick={() => navigate('/registrar')}
            >
              <i className="fas fa-calendar-alt"></i> Registrar Ponto
            </div>
            <div
              className={styles.menuItem}
              onClick={() => navigate('/banco-horas')}
            >
              <i className="fas fa-stopwatch"></i> Banco de Horas
            </div>
            <div
              className={styles.menuItem}
              onClick={() => navigate('/relatorio')}
            >
              <i className="fas fa-file-alt"></i> Relatório
            </div>
            <div
              className={styles.menuItem}
              onClick={() => navigate('/corrigir-ponto')}
            >
              <i className="fas fa-calculator"></i> Corrigir Ponto
            </div>
            <div className={styles.menuSpacer}></div>
          </div>

          <div className={styles.profileSection}>
            <div
              className={styles.profileHeader}
              onClick={() => navigate('/perfil')}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter') navigate('/perfil');
              }}
              style={{ cursor: 'pointer' }}
            >
              <i className="fas fa-user"></i> Perfil
            </div>
            <div
              className={styles.profileMenuItem}
              onClick={() => navigate('/configuracoes')}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter') navigate('/configuracoes');
              }}
              style={{ cursor: 'pointer' }}
            >
              <i className="fas fa-cog"></i> Configurações
            </div>
            <div
              className={styles.profileMenuItem}
              onClick={handleLogoutClick}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleLogoutClick();
              }}
              style={{ cursor: 'pointer' }}
            >
              <i className="fas fa-sign-out-alt"></i> Sair
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <div className={styles.card}>
            <div className={styles.journeyHeader}>
              <div className={styles.sectionTitle}>
                <i className="fas fa-calendar-day"></i> Jornada de hoje
              </div>
              <div className={styles.date}>{formatDate(currentTime)}</div>
            </div>

            <div className={styles.statusContainer}>
              <div className={styles.status}>ACOMPANHAMENTO DO EXPEDIENTE</div>
            </div>

            <div className={styles.timeContainer}>
              <div className={styles.timeBox}>
                <div className={styles.sectionTitle}>
                  <i className="fas fa-door-open"></i> Saída prevista
                </div>
                <div className={styles.timeDisplay}>17:00</div>
              </div>

              <div className={styles.timeBox}>
                <div className={styles.sectionTitle}>
                  <i className="fas fa-hourglass-half"></i> Tempo restante
                </div>
                <div className={styles.timeDisplay}>{calculateTimeLeft()}</div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.sectionTitle}>
              <i className="fas fa-stopwatch"></i> DETALHES DAS HORAS
            </div>

            <div className={styles.hoursGrid}>
              <div className={styles.hoursItem}>
                <div className={styles.detailText}>
                  <i className={`fas fa-briefcase ${styles.detailIcon}`}></i>{' '}
                  Trabalhando
                </div>
                <div className={styles.hoursValue}>05:00</div>
              </div>

              <div className={styles.hoursItem}>
                <div className={styles.detailText}>
                  <i className={`fas fa-plus-circle ${styles.detailIcon}`}></i>{' '}
                  Horas extras
                </div>
                <div className={styles.hoursValue}>00:00</div>
              </div>

              <div className={styles.hoursItem}>
                <div className={styles.detailText}>
                  <i className={`fas fa-coffee ${styles.detailIcon}`}></i> Intervalo
                </div>
                <div className={styles.hoursValue}>01:30</div>
              </div>

              <div className={styles.hoursItem}>
                <div className={styles.detailText}>
                  <i className={`fas fa-times-circle ${styles.detailIcon}`}></i> Faltas
                </div>
                <div className={styles.hoursValue}>00:00</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de confirmação de logout */}
      {showConfirm && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalBox}>
            <h2 className={styles.modalTitle}>Tem certeza que deseja sair?</h2>
            <div className={styles.modalActions}>
              <button
                className={styles.btnCancel}
                onClick={cancelLogout}
                aria-label="Cancelar saída"
              >
                Não
              </button>
              <button
                className={styles.btnConfirm}
                onClick={confirmLogout}
                aria-label="Confirmar saída"
              >
                Sim
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
