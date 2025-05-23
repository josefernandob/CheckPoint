import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EsqueceuSenha.module.css'; // Usando o mesmo estilo, pode adaptar depois
import checkIcon from '/src/assets/check.svg'; // Adicione este arquivo em assets (ícone check verde)

export default function RedSen() {
  const navigate = useNavigate();
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  function isStrongPassword(password) {
    // No mínimo 8 caracteres, com maiúscula, minúscula, número e símbolo
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
  }

  const handleCancelar = () => {
    navigate('/');
  };

  const handleRecuperar = (e) => {
    e.preventDefault();
    setError('');

    if (!isStrongPassword(novaSenha)) {
      setError(
        'Senha fraca! Use ao menos 8 caracteres, incluindo maiúsculas, minúsculas, números e símbolos.'
      );
      return;
    }

    if (novaSenha !== confirmaSenha) {
      setError('As senhas não conferem.');
      return;
    }

    // Se passou na validação, mostra sucesso
    setSuccess(true);

    // Redireciona para login após 3 segundos
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (success) {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.cadastroBox} style={{ textAlign: 'center' }}>
          <img src={checkIcon} alt="Sucesso" style={{ width: '60px', marginBottom: '20px' }} />
          <h2 style={{ color: 'green', fontFamily: 'Istok Web', fontWeight: '400' }}>
            Senha redefinida com sucesso!
          </h2>
          <p style={{ fontFamily: 'Istok Web', marginTop: '10px' }}>
            Redirecionando para login...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <form className={styles.cadastroBox} onSubmit={handleRecuperar}>
        <div className={styles.Header}>
          <img src="/src/assets/Nearpod.svg" alt="Logo Nearpod" />
          <h2>CheckPoint</h2>
        </div>

        <p
          style={{
            color: '#000',
            fontFamily: 'Istok Web',
            fontSize: '24px',
            fontWeight: '400',
            lineHeight: 'normal',
            marginBottom: '10px',
          }}
        >
          Redefinir sua senha
        </p>

        <div className={styles.InputGroup}>
          <img src="/src/assets/Lock.svg" alt="Lock icon" />
          <p>|</p>
          <input
            type="password"
            placeholder="Nova Senha"
            required
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
          />
        </div>

        <div className={styles.InputGroup}>
          <img src="/src/assets/Lock.svg" alt="Lock icon" />
          <p>|</p>
          <input
            type="password"
            placeholder="Repita a nova senha"
            required
            value={confirmaSenha}
            onChange={(e) => setConfirmaSenha(e.target.value)}
          />
        </div>

        {error && <p style={{ color: 'red', marginTop: '8px' }}>{error}</p>}

        <div className={styles.buttonGroup}>
          <button type="button" className={styles.buttonCancelar} onClick={handleCancelar}>
            Cancelar
          </button>
          <button type="submit" className={styles.buttonEnviar}>
            Recuperar
          </button>
        </div>
      </form>
    </div>
  );
}
