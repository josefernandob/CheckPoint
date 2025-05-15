import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

export function Login() {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        console.log('Form enviado!');

        
        navigate('/initial'); // 
    };

    return (
        <form className={styles.loginBox} onSubmit={handleLogin}>
            <div className={styles.Header}>
                <img src="/src/assets/Nearpod.svg" />
                <h2>CheckPoint</h2>
            </div>

            <div className={styles.Inputs}>
                <div className={styles.User}>
                    <img src="/src/assets/User.svg" />
                    <p> | </p>
                    <input type="text" placeholder="Usuário" />
                </div>

                <div className={styles.Senha}>
                    <img src="/src/assets/Lock.svg" />
                    <p> | </p>
                    <input type="password" placeholder="Senha" />
                </div>
            </div>

            <a href="#" className={styles.linkSenha}>Esqueceu sua senha?</a>

            <label className={styles.checkboxArea}>
                <input type="checkbox" />
                Manter conectado
            </label>

            <button type="submit">Entrar</button>
        </form>
    );
}
