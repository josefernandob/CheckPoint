import { useNavigate } from 'react-router-dom';
import styles from './Logout.module.css';

export default function Logout() {
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

        <p className={styles.instruction}>Você saiu da sua conta</p>
        <p className={styles.inst2}>Para realizar o seu login novamente clique no botão abaixo</p>

        <div className={styles.buttonGroup}>
          <button 
            className={styles.buttonEnviar} 
            onClick={handleLoginRedirect}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
