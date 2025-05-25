import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Facial.module.css'; // Corrigido o nome do arquivo CSS Module

export default function Facial() {
  const navigate = useNavigate();

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

        {/* Main Content vazio */}
        <div className={styles.mainContent}>

       <div className={styles.reg}>
        <button onClick={() => navigate('/RegisDone')}>

                     REGISTRAR
                   </button>
              </div>
        </div>
      </div>
    </div>
  );
}
