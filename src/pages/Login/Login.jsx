import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        if (username && password) {
            console.log('Login válido!');
            navigate('/initial');
        } else {
            alert('Preencha todos os campos!');
        }
    };

    return (
        <form className={styles.loginBox} onSubmit={handleLogin}>
            <div className={styles.Header}>
                <img src="/src/assets/Nearpod.svg" alt="Logo Nearpod" />
                <h2>CheckPoint</h2>
            </div>

            <div className={styles.Inputs}>
                <div className={styles.User}>
                    <img src="/src/assets/User.svg" alt="Ícone de usuário" />
                    <p> | </p>
                    <input 
                        type="text" 
                        placeholder="Usuário" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className={styles.Senha}>
                    <img src="/src/assets/Lock.svg" alt="Ícone de senha" />
                    <p> | </p>
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>

            <div className={styles.linksContainer}>
                <a href="#" className={styles.linkSenha}>Esqueceu sua senha?</a>
              <Link to="/Cadastro" className={styles.cadas}>Não tem conta? Cadastre-se</Link>
            </div>

            <label className={styles.checkboxArea}>
                <input type="checkbox" />
                Manter conectado
            </label>

            <button type="submit">Entrar</button>
        </form>
    );
}
