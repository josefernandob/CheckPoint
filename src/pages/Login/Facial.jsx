import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Facial.module.css';

export default function Facial() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isRecognizing, setIsRecognizing] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleRegister = () => {
    setIsRecognizing(true);


    setTimeout(() => {
      setShowConfirmation(true);
      setIsRecognizing(false);

      setTimeout(() => {
        navigate('/registrar');
      }, 2000);
    }, 1500);
  };

  return (
    <div className={styles.appContainer}>
      {/* Header (mantido igual) */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <img
            src="/src/assets/Nearpod.svg"
            className={styles.logo}
            alt="Logo"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/initial')}
          />
          <span
            className={styles.logoText}
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/initial')}
          >
            CheckPoint
          </span>
        </div>
        <div className={styles.userInfo}>
          <span className={styles.userName}>Rodrigo Vieira de Morais</span>
          <div className={styles.userAvatar}>
            <i className="fas fa-user-circle"></i>
          </div>
        </div>
      </div>

      {/* Main Container (mantido igual) */}
      <div className={styles.container}>
        {/* Sidebar (mantido igual) */}
        <div className={styles.sidebar}>
          <div className={styles.topMenu}>
            <div
              className={`${styles.menuItem} ${location.pathname === '/registrar' ? styles.activeMenu : ''}`}
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
            >
              <i className="fas fa-user"></i> Perfil
            </div>
            <div
              className={styles.profileMenuItem}
              onClick={() => navigate('/logout')}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter') navigate('/logout');
              }}
            >
              <i className="fas fa-sign-out-alt"></i> Sair
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <div className={styles.facialRecognition}>
            <h2>RECONHECIMENTO FACIAL</h2>

            {/* Área da câmera com confirmação */}
            <div className={styles.cameraPreview}>
              <div className={styles.cameraPlaceholder}>
                {showConfirmation ? (
                  <div className={styles.confirmationSymbol}>✓</div>
                ) : (
                  <i className="fas fa-camera"></i>
                )}
              </div>
            </div>

            {/* Dicas (mantido igual) */}
            <div className={styles.tips}>
              <h3>DICAS</h3>
              <ul>
                <li>Bem iluminado: Evite sombras ou luzes fortes atrás de você</li>
                <li>Rosto visível: Não use óculos escuros ou máscara</li>
                <li>Fique parado: Centralize o rosto e não se mova até o registro ser feito</li>
              </ul>
            </div>

            {/* Botão com estados controlados */}
            <button
              className={`${styles.actionButton} ${showConfirmation ? styles.confirmedButton : ''
                }`}
              onClick={handleRegister}
              disabled={isRecognizing || showConfirmation}
            >
              {isRecognizing ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Reconhecendo...
                </>
              ) : showConfirmation ? (
                "Registro Confirmado!"
              ) : (
                "REGISTRAR"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}