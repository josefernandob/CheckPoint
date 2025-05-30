import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Bh.module.css';

export default function Bh() {
  const navigate = useNavigate();
  const [dataSelecionada, setDataSelecionada] = useState('2025-04-22');

  const dados = {
    data: '01/04/2025',
    entrada: '07:35:05',
    intervaloSaida: '12:00:06',
    intervaloEntrada: '13:05:00',
    saida: '17:00:01',
    horaExtra: '00:00:00'
  };

  function baixarExtrato() {
    const conteudo =
      'DATA\tENTRADA\tINTERVALO SAÍDA\tINTERVALO ENTRADA\tSAÍDA\tHORA EXTRA\n' +
      `${dados.data}\t${dados.entrada}\t${dados.intervaloSaida}\t${dados.intervaloEntrada}\t${dados.saida}\t${dados.horaExtra}`;

    const blob = new Blob([conteudo], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'extrato.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <div className={styles.appContainer}>
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

        <div className={styles.mainContent}>
          <div className={styles.tituloContainer}>
            <div className={styles.tituloLinha}>
              <h2 className={styles.bhTitle}>Banco de Horas</h2>
              <div className={styles.detalheVerde}></div>
              <input
                type="date"
                className={styles.selectMes}
                value={dataSelecionada}
                onChange={e => setDataSelecionada(e.target.value)}
                style={{ minWidth: 150 }}
              />
            </div>
          </div>

          <div className={styles.bhContainer}>
            <div className={styles.timeCardsContainer}>
              <div className={`${styles.timeCard} ${styles.entryCard}`}>
                <div className={styles.timeValue}>07:35:05</div>
                <div className={styles.timeLabel}>ENTRADA REGISTRADA</div>
              </div>

              <div className={`${styles.timeCard} ${styles.breakOutCard}`}>
                <div className={styles.timeValue}>12:00:06</div>
                <div className={styles.timeLabel}>INTERVALO SAÍDA</div>
              </div>

              <div className={`${styles.timeCard} ${styles.breakInCard}`}>
                <div className={styles.timeValue}>13:05:00</div>
                <div className={styles.timeLabel}>INTERVALO ENTRADA</div>
              </div>

              <div className={`${styles.timeCard} ${styles.exitCard}`}>
                <div className={styles.timeValue}>17:00:01</div>
                <div className={styles.timeLabel}>SAÍDA REGISTRADA</div>
              </div>

              <div className={`${styles.timeCard} ${styles.overtimeCard}`}>
                <div className={styles.timeValue}>00:00:00</div>
                <div className={styles.timeLabel}>HORA EXTRA</div>
              </div>
            </div>

            <button className={styles.actionButton} onClick={baixarExtrato}>
              BAIXAR EXTRATO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}