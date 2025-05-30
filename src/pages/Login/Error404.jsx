import { useNavigate } from 'react-router-dom';
import styles from './Error404.module.css';

export default function Error404() {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/');
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.cadastroBox}>
        <div className={styles.Header}>
          <img src="/src/assets/Nearpod.svg" alt="Logo Nearpod" className={styles.logo} />
          <h2>CheckPoint</h2>
        </div>

        <p className={styles.instruction}>ERRO 404</p>
        <p className={styles.inst2}>Ocorreu um erro durante uma conexão com sua rede ou a página nao foi encontrada</p>

        <div className={styles.buttonGroup}>
          <button 
            className={styles.buttonEnviar} 
            onClick={handleLoginRedirect}
          >
            TENTE NOVAMENTE
          </button>
        </div>
      </div>
    </div>
  );
}
