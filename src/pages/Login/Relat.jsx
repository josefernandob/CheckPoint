import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Relat.module.css';

export default function Relat() {
  const navigate = useNavigate();

  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const [mesSelecionado, setMesSelecionado] = useState('04');

  const dadosTabela = [
    ["01/04/2025", "07:00:02", "12:00:01", "13:05:01", "17:01:02", "00:00:00"],
    ["02/04/2025", "07:02:00", "12:10:01", "13:00:00", "17:02:08", "00:00:00"],
    ["03/04/2025", "07:00:03", "12:05:02", "13:01:08", "17:00:00", "00:00:00"],
    ["04/04/2025", "07:00:00", "12:00:00", "13:00:49", "17:00:15", "00:00:00"],
    ["05/04/2025", "00:00:00", "00:00:00", "00:00:00", "00:00:00", "00:00:00"],
    ["06/04/2025", "00:00:00", "00:00:00", "00:00:00", "00:00:00", "00:00:00"],
    ["07/04/2025", "07:06:48", "12:01:00", "13:00:00", "17:00:00", "00:00:00"],
    ["08/04/2025", "07:00:49", "12:05:02", "13:00:49", "17:01:02", "00:00:00"],
    ["09/04/2025", "07:00:00", "12:00:05", "13:05:59", "17:00:15", "00:00:00"],
    ["10/04/2025", "07:00:02", "12:00:00", "13:01:08", "17:01:49", "00:00:00"],
    ["11/04/2025", "07:15:00", "12:00:08", "13:00:00", "17:07:00", "00:07:00"],
    ["12/04/2025", "00:00:00", "00:00:00", "00:00:00", "00:00:00", "00:00:00"],
    ["13/04/2025", "00:00:00", "00:00:00", "00:00:00", "00:00:00", "00:00:00"],
    ["14/04/2025", "07:02:59", "12:09:00", "13:00:49", "17:00:00", "00:00:00"],
    ["15/04/2025", "07:00:00", "12:01:00", "13:01:08", "17:00:15", "00:00:00"],
    ["16/04/2025", "07:00:02", "12:00:00", "13:00:00", "17:01:06", "00:00:00"],
    ["17/04/2025", "07:00:15", "12:04:00", "13:00:49", "17:00:00", "00:00:00"],
    ["18/04/2025", "07:00:02", "12:05:02", "13:01:08", "17:01:02", "00:00:00"],
    ["19/04/2025", "00:00:00", "00:00:00", "00:00:00", "00:00:00", "00:00:00"],
    ["20/04/2025", "00:00:00", "00:00:00", "00:00:00", "00:00:00", "00:00:00"],
    ["21/04/2025", "07:06:02", "12:01:49", "13:00:49", "17:00:15", "00:00:00"],
    ["22/04/2025", "07:16:11", "12:05:02", "13:00:00", "17:00:00", "00:00:00"],
    ["23/04/2025", "07:00:00", "12:00:00", "13:01:08", "17:01:49", "00:00:00"],
    ["24/04/2025", "07:00:02", "12:07:05", "13:00:02", "17:00:00", "00:00:00"],
    ["25/04/2025", "07:00:02", "12:00:09", "13:00:49", "17:00:00", "00:00:00"],
    ["26/04/2025", "00:00:00", "00:00:00", "00:00:00", "00:00:00", "00:00:00"],
    ["27/04/2025", "00:00:00", "00:00:00", "00:00:00", "00:00:00", "00:00:00"],
    ["28/04/2025", "07:20:01", "12:00:00", "13:01:00", "17:00:00", "00:00:00"],
    ["29/04/2025", "07:00:02", "12:05:02", "13:00:49", "17:00:00", "00:00:00"],
    ["30/04/2025", "07:00:00", "12:00:00", "13:00:00", "17:00:15", "00:00:00"],
  ];

  const formatarDataParaMesSelecionado = (dataStr, mesSelecionado) => {
    let [dia, mes, ano] = dataStr.split('/');
    return `${dia}/${mesSelecionado}/${ano}`;
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
              onKeyPress={(e) => { if (e.key === 'Enter') navigate('/perfil'); }}
            >
              <i className="fas fa-user"></i> Perfil
            </div>
            <div
              className={styles.profileMenuItem}
              onClick={() => navigate('/configuracoes')}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => { if (e.key === 'Enter') navigate('/configuracoes'); }}
            >
              <i className="fas fa-cog"></i> Configurações
            </div>
            <div
              className={styles.profileMenuItem}
              onClick={() => navigate('/logout')}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => { if (e.key === 'Enter') navigate('/logout'); }}
            >
              <i className="fas fa-sign-out-alt"></i> Sair
            </div>
          </div>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.tituloContainer}>
            <div className={styles.tituloLinha}>
              <h2 className={styles.tableTitle}>Relatório</h2>
              <div className={styles.detalheVerde}></div>
              <select
                className={styles.selectMes}
                value={mesSelecionado}
                onChange={(e) => setMesSelecionado(e.target.value)}
              >
                {meses.map((mes, idx) => (
                  <option key={idx} value={String(idx + 1).padStart(2, '0')}>{mes}</option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.tableContainer}>
            <table className={styles.reportTable}>
              <thead>
                <tr>
                  <th>DATA</th>
                  <th className={styles.greenHeader}>ENTRADA</th>
                  <th className={styles.orangeHeader}>INTERVALO SAÍDA</th>
                  <th className={styles.orangeHeader}>INTERVALO ENTRADA</th>
                  <th className={styles.greenHeader}>SAÍDA</th>
                  <th className={styles.blueHeader}>HORA EXTRA</th>
                </tr>
              </thead>
              <tbody>
                {dadosTabela.map(([data, entrada, saidaI, entradaI, saida, extra], idx) => (
                  <tr key={idx}>
                    <td>{formatarDataParaMesSelecionado(data, mesSelecionado)}</td>
                    {[entrada, saidaI, entradaI, saida, extra].map((hora, i) => (
                      <td key={i} className={hora === "00:00:00" ? styles.zeroTime : ""}>
                        {hora}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}