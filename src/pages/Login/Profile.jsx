import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Profile.module.css';

export default function Perfil() {
  const navigate = useNavigate();

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
            <div className={styles.menuItem} onClick={() => navigate('/registrar')}>
              <i className="fas fa-calendar-alt"></i> Registrar Ponto
            </div>
            <div className={styles.menuItem} onClick={() => navigate('/banco-horas')}>
              <i className="fas fa-stopwatch"></i> Banco de Horas
            </div>
            <div className={styles.menuItem} onClick={() => navigate('/relatorio')}>
              <i className="fas fa-file-alt"></i> Relatório
            </div>
            <div className={styles.menuItem} onClick={() => navigate('/corrigir-ponto')}>
              <i className="fas fa-calculator"></i> Corrigir Ponto
            </div>
            <div className={styles.menuSpacer}></div>
          </div>

          <div className={styles.profileSection}>
            <div className={styles.profileHeader} onClick={() => navigate('/perfil')} tabIndex={0}>
              <i className="fas fa-user"></i> Perfil
            </div>
            
            <div className={styles.profileMenuItem} onClick={() => navigate('/logout')} tabIndex={0}>
              <i className="fas fa-sign-out-alt"></i> Sair
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.tituloContainer}>
            <div className={styles.tituloLinha}>
              <h2 className={styles.tableTitle}>Perfil</h2>
              <div className={styles.detalheVerde}></div>
            </div>
          </div>

          <div className={styles.perfilContainer}>
            <div className={styles.infoSection}>
              <h3 className={styles.sectionTitle}>Informações pessoais</h3>
              <table className={styles.infoTable}>
                <tbody>
                  <tr>
                    <td className={styles.infoLabel}>Nome</td>
                    <td>Rodrigo Vieira de Morais</td>
                  </tr>
                  <tr>
                    <td className={styles.infoLabel}>Email</td>
                    <td>rodrigovm@gmail.com</td>
                  </tr>
                  <tr>
                    <td className={styles.infoLabel}>Instituição</td>
                    <td>Empresa Sidi</td>
                  </tr>
                  <tr>
                    <td className={styles.infoLabel}>Data de Inscrição</td>
                    <td>22 de Maio de 2025</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={styles.uploadSection}>
              <div className={styles.avatarPlaceholder}>
                <i className="fas fa-user-circle"></i>
              </div>
              <h3 className={styles.uploadTitle}>Faça upload da sua foto de perfil</h3>
              <button className={styles.uploadButton}>
                Fazer upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}