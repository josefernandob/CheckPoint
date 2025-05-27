import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './PointRegister.module.css';

export default function PointRegister() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userId, setUserId] = useState(["", "", "", ""]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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

  const formatDate = (date) => {
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'America/Sao_Paulo'
    });
  };

  const handleChange = (index, value) => {
    const onlyDigits = value.replace(/\D/, '');

    if (value && !/^\d$/.test(value)) {
      setErrorMessage('Digite apenas números.');
      return;
    }

    setErrorMessage('');
    const newId = [...userId];
    newId[index] = onlyDigits;
    setUserId(newId);

    const nextInput = document.getElementById(`digit-${index + 1}`);
    if (onlyDigits && nextInput) nextInput.focus();
  };

  return (
    <div className={styles.appContainer}>
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

      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.topMenu}>
            <div className={`${styles.menuItem} ${location.pathname === '/registrar' ? styles.activeMenu : ''}`} onClick={() => navigate('/registrar')}>
              <i className="fas fa-calendar-alt"></i> Registrar Ponto
            </div>
            <div className={`${styles.menuItem} ${location.pathname === '/banco-horas' ? styles.activeMenu : ''}`} onClick={() => navigate('/banco-horas')}>
              <i className="fas fa-stopwatch"></i> Banco de Horas
            </div>
            <div className={`${styles.menuItem} ${location.pathname === '/relatorio' ? styles.activeMenu : ''}`} onClick={() => navigate('/relatorio')}>
              <i className="fas fa-file-alt"></i> Relatório
            </div>
            <div className={`${styles.menuItem} ${location.pathname === '/corrigir-ponto' ? styles.activeMenu : ''}`} onClick={() => navigate('/corrigir-ponto')}>
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
            >
              <i className="fas fa-cog"></i> Configurações
            </div>
            <div className={styles.profileMenuItem} onClick={() => navigate('/')}>
              <i className="fas fa-sign-out-alt"></i> Sair
            </div>
          </div>
        </div>

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
            {userId.map((digit, index) => (
              <input
                key={index}
                id={`digit-${index}`}
                type="text"
                inputMode="numeric"
                maxLength="1"
                className={styles.digitInput}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
              />
            ))}
          </div>

          {errorMessage && (
            <div className={styles.errorMessage}>{errorMessage}</div>
          )}

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
