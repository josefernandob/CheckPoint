import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CorrP.module.css';

export default function CorrP() {
  const navigate = useNavigate();
  const [mesSelecionado, setMesSelecionado] = useState('04');
  const [anoSelecionado, setAnoSelecionado] = useState('2025');
  const [nomeArquivoSelecionado, setNomeArquivoSelecionado] = useState('');
  const [showSolicitado, setShowSolicitado] = useState(false);

  function handleFileChange(e) {
    if (e.target.files && e.target.files[0]) {
      setNomeArquivoSelecionado(e.target.files[0].name);
    } else {
      setNomeArquivoSelecionado('');
    }
  }

  const diasNoMes = new Date(anoSelecionado, parseInt(mesSelecionado), 0).getDate();
  const dias = Array.from({ length: diasNoMes }, (_, i) => {
    const dia = String(i + 1).padStart(2, '0');
    return `${dia}/${mesSelecionado}/${anoSelecionado}`;
  });

  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

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
              <h2 className={styles.tableTitle}>Corrigir Ponto</h2>
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

          <div className={styles.tabelasContainer}>
            <div className={styles.tabelaWrapperGrande}>
              <table className={styles.tabelaPontoGrande}>
                <thead>
                  <tr>
                    <th>DATA</th>
                    <th>JUSTIFICATIVA</th>
                    <th>AÇÕES</th>
                  </tr>
                </thead>
                <tbody>
                  {dias.map((data, idx) => (
                    <tr key={idx}>
                      <td className={idx % 3 === 0 ? styles.vermelho : ''}>{data}</td>
                      <td>{idx % 3 === 0 ? 'Exemplo' : ''}</td>
                      <td>{idx % 3 === 0 ? 'Solicitado' : ''}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={styles.tabelaWrapperPequena}>
              <div className={styles.formularioCorrecao}>
                <div className={styles.campoFormulario}>
                  <label>Digite seu ID</label>
                  <input
                    type="text"
                    placeholder="0000"
                    maxLength="4"
                    pattern="[0-9]{4}"
                    className={styles.idInput}
                  />
                </div>
                <div className={styles.campoFormulario}>
                  <label>Selecione a data</label>
                  <div className={styles.dataInputContainer}>
                    <input
                      type="text"
                      placeholder="dd"
                      maxLength="2"
                      className={styles.dataInput}
                      pattern="[0-9]{2}"
                    />
                    <span>/</span>
                    <input
                      type="text"
                      placeholder="mm"
                      maxLength="2"
                      className={styles.dataInput}
                      pattern="[0-9]{2}"
                    />
                    <span>/</span>
                    <input
                      type="text"
                      placeholder="aaaa"
                      maxLength="4"
                      className={styles.anoInput}
                      pattern="[0-9]{4}"
                    />
                  </div>
                </div>
                <div className={styles.campoFormulario}>
                  <label>Selecione o ponto</label>
                  <select className={styles.selectPonto}>
                    <option value="">Selecione</option>
                    <option>Entrada</option>
                    <option>Saída</option>
                  </select>
                </div>
                <div className={styles.campoFormulario}>
                  <label>Horário corrigido</label>
                  <div className={styles.horaInputContainer}>
                    <input
                      type="text"
                      placeholder="00"
                      maxLength="2"
                      className={styles.horaInput}
                      pattern="[0-9]{2}"
                    />
                    <span>:</span>
                    <input
                      type="text"
                      placeholder="00"
                      maxLength="2"
                      className={styles.horaInput}
                      pattern="[0-9]{2}"
                    />
                  </div>
                </div>
                <div className={styles.campoFormulario}>
                  <label>Justificativa</label>
                  <textarea placeholder="Texto..." rows={3} className={styles.textareaJustificativa}></textarea>
                </div>
                <div className={`${styles.campoFormulario} ${styles.campoAnexo}`}>
                  <label htmlFor="anexo">Anexar arquivo (ex: atestado médico)</label>
                  <input
                    type="file"
                    id="anexo"
                    className={styles.inputAnexo}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="anexo"
                    className="actionButton"
                    style={{
                      display: 'inline-block',
                      cursor: 'pointer',
                      marginTop: 4,
                      padding: '6px 14px',
                      fontSize: '0.95rem',
                      borderRadius: 4
                    }}
                  >
                    Escolher arquivo
                  </label>
                  <span style={{ marginLeft: 12 }}>{nomeArquivoSelecionado}</span>
                </div>
                <button
                  className={styles.actionButton}
                  onClick={() => setShowSolicitado(true)}
                >
                  SOLICITAR CORREÇÃO
                </button>

                {showSolicitado && (
                  <div className={styles.modalOverlay}>
                    <div className={styles.modalBox}>
                      <h2 className={styles.modalTitle}>Solicitação efetuada, aguarde confirmação do setor</h2>
                      <div className={styles.modalActions}>
                        <button
                          className={styles.btnCancel}
                          onClick={() => setShowSolicitado(false)}
                          aria-label="Fechar"
                        >
                          Voltar
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}