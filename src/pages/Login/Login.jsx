import styles from './Login.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

export function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            username: '',
            password: ''
        };

        // Validação do usuário
        if (!username.trim()) {
            newErrors.username = 'Usuário é obrigatório';
            valid = false;
        } else if (username.length < 4) {
            newErrors.username = 'Usuário deve ter pelo menos 4 caracteres';
            valid = false;
        }

        // Validação da senha
        if (!password) {
            newErrors.password = 'Senha é obrigatória';
            valid = false;
        } else if (password.length < 6) {
            newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleLogin = (event) => {
        event.preventDefault();
        
        if (validateForm()) {
            console.log('Login válido!');
            navigate('/initial');
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
                        className={errors.username ? styles.errorInput : ''}
                    />
                    {errors.username && <span className={styles.errorMessage}>{errors.username}</span>}
                </div>

                <div className={styles.Senha}>
                    <img src="/src/assets/Lock.svg" alt="Ícone de senha" />
                    <p> | </p>
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={errors.password ? styles.errorInput : ''}
                    />
                    {errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
                </div>
            </div>

            <div className={styles.linksContainer}>
                <Link to="/esqueceu-senha" className={styles.linkSenha}>Esqueceu sua senha?</Link>
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