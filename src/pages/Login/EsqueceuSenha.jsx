import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EsqueceuSenha.module.css';

export default function EsqueceuSenha() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);

  // Validação básica de email
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const handleCancelar = () => {
    navigate('/');
  };

  const handleEnviar = (e) => {
    e.preventDefault();
    setError('');

    if (!isValidEmail(email)) {
      setError('Por favor, insira um email válido.');
      return;
    }

    setSending(true);

    // Simula envio e redireciona após 2 segundos
    setTimeout(() => {
      setSending(false);
      navigate('/codigo-recuperacao');  // Certifique-se que esta rota está declarada no App.jsx
    }, 2000);
  };

  return (
    <div className={styles.pageWrapper}>
      <form className={styles.cadastroBox} onSubmit={handleEnviar}>
        <div className={styles.Header}>
          <img src="/src/assets/Nearpod.svg" alt="Logo Nearpod" className={styles.logo} />
          <h2>CheckPoint</h2>
        </div>

        <p className={styles.instruction}>Recupere seu acesso</p>
        <p className={styles.inst2}>
          Insira seu email ou matrícula para receber o código de recuperação por email
        </p>

        <div className={styles.InputGroup}>
          <img src="/src/assets/pessoa.png" alt="Email" />
          <p>|</p>
          <input
            type="text"
            placeholder="Email ou Matrícula"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {error && <p style={{ color: 'red', marginTop: '8px' }}>{error}</p>}

        <div className={styles.buttonGroup}>
          <button
            type="button"
            className={styles.buttonCancelar}
            onClick={handleCancelar}
            disabled={sending}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className={styles.buttonEnviar}
            disabled={sending}
          >
            {sending ? 'Enviando...' : 'Enviar'}
          </button>
        </div>
      </form>
    </div>
  );
}
