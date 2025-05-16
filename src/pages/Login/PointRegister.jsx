import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PointRegister.module.css';

export default function PointRegister() {
  const navigate = useNavigate();

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
              <i className="fas fa-calculator"></i> Banco de Horas
            </div>
            <div className={styles.menuItem}>
              <i className="fas fa-file-alt"></i> Relatório
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
              <p>07:30:05</p>
            </div>

            <div className={styles.data}>
              <p>Terça-Feira 22 de Março de 2025</p>
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
            <button>
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
