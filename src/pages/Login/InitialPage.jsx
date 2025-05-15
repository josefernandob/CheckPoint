import React from 'react';
import styles from './InitialPage.module.css';

export default function InitialPage() {
  return (
    <div>
      <div className={styles.header}>
        <img src="/src/assets/Nearpod.svg" />
        CheckPoint
      </div>

      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.menuItem}>
            <i className="fas fa-calendar-alt"></i> Registrar Ponto
          </div>
          <div className={styles.menuItem}>
            <i className="fas fa-calculator"></i> Banco de Horas
          </div>
          <div className={styles.menuItem}>
            <i className="fas fa-file-alt"></i> Relatório
          </div>

          <div className={styles.profileSection}>
            <div className={styles.menuItem}>
              <i className="fas fa-user"></i> Perfil
            </div>
            <div className={styles.menuItem}>
              <i className="fas fa-cog"></i> Configurações
            </div>
            <div className={`${styles.menuItem} ${styles.lastItem}`}>
              <i className="fas fa-sign-out-alt"></i> Sair
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.card}>
            <div className={styles.sectionTitle}>
              <i className="fas fa-calendar-day"></i> Jornada de hoje
            </div>
            <div className={styles.date}>Terça-Feira 22 de Março de 2025</div>

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
                <div className={styles.timeDisplay}>05:30</div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.sectionTitle}>
              <i className="fas fa-stopwatch"></i> DETALHES DAS HORAS
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailText}>
                <i className={`fas fa-briefcase ${styles.detailIcon}`}></i> Trabalhando
              </div>
              <span>05:00</span>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailText}>
                <i className={`fas fa-plus-circle ${styles.detailIcon}`}></i> Horas extras
              </div>
              <span>00:00</span>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailText}>
                <i className={`fas fa-coffee ${styles.detailIcon}`}></i> Intervalo
              </div>
              <span>01:30</span>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailText}>
                <i className={`fas fa-times-circle ${styles.detailIcon}`}></i> Faltas
              </div>
              <span>00:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
