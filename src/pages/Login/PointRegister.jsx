import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PointRegister.module.css';

export default function PointRegister() {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  // Atualiza o relógio a cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Formata a hora com os dois pontos piscando
  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return (
      <>
        {hours}
        <span className={styles.colon}>:</span>
        {minutes}
        <span className={styles.colon}>:</span>
        {seconds}
      </>
    );
  };

  // Formata a data em português
  const formatDate = (date) => {
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'America/Sao_Paulo'
    });
  };

  return (
    <div className={styles.appContainer}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <img src="/src/assets/Nearpod.svg" className={styles.logo} alt="Logo" />
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
              style={{ cursor: 'pointer' }}
            >
              <i className="fas fa-calendar-alt"></i> Registrar Ponto
            </div>
            <div className={styles.menuItem}>
              <i className="fas fa-stopwatch"></i> Banco de Horas
            </div>
            <div className={styles.menuItem}>
              <i className="fas fa-file-alt"></i> Relatório
            </div>
            <div className={styles.menuItem}>
              <i className=" fas fa-calculator"></i> Corrigir Ponto
            </div>
            <div className={styles.menuSpacer}></div>
          </div>

          <div className={styles.profileSection}>
            <div className={styles.profileHeader}>
              <i className="fas fa-user"></i> Perfil
            </div>
            <div className={styles.profileMenuItem}>
              <i className="fas fa-cog"></i> Configurações
            </div>
            <div
              className={styles.profileMenuItem}
              onClick={() => navigate('/')}
              style={{ cursor: 'pointer' }}
            >
              <i className="fas fa-sign-out-alt"></i> Sair
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <div className={styles.Box}>
            <div className={styles.Ppoint}>
              <p>REGISTRO DE PONTO</p>
            </div>

            <div className={styles.Hour}>
              <p>{formatTime(currentTime)}</p>
            </div>

            <div className={styles.data}>
              <p>{formatDate(currentTime)}</p>
            </div>
          </div>

          <div className={styles.txt}>Digite seu ID</div>

          <div className={styles.numberGrid}>
            <div className={styles.number}>3</div>
            <div className={styles.number}>2</div>
            <div className={styles.number}>1</div>
            <div className={styles.number}>8</div>
          </div>

          <div className={styles.reconhecimento}>

            <button onClick={() => navigate('/facial')}>
              <img
                src="/src/assets/FacialRecognition.svg"
                alt="Ícone reconhecimento facial"
                className={styles.img}
              />
              Reconhecimento facial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}