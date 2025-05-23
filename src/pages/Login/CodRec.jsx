import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EsqueceuSenha.module.css';  // Usar o CSS do EsqueceuSenha

export default function CodRec() {
  const navigate = useNavigate();
  const [codigo, setCodigo] = useState('');

  const handleEnviar = (event) => {
    event.preventDefault();

    const regex = /^\d{5}$/; // apenas 5 dígitos numéricos

    if (!regex.test(codigo)) {
      alert("O código deve conter exatamente 5 números.");
      return;
    }

    console.log("Código válido:", codigo);
    navigate('/redsen'); // Redireciona para a tela de redefinir senha
  };

  return (
    <div className={styles.pageWrapper}>
      <form className={styles.cadastroBox} onSubmit={handleEnviar}>
        <div className={styles.Header}>
          <img src="/src/assets/Nearpod.svg" alt="Logo Nearpod" className={styles.logo} />
          <h2>CheckPoint</h2>
        </div>

        <p className={styles.instruction}>Digite seu código</p>

        <div className={styles.InputGroup}>
          <img src="/src/assets/pessoa.png" alt="Ícone código" />
          <p>|</p>
          <input
            type="text"
            placeholder="Código de recuperação"
            required
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />
        </div>

        <div className={styles.buttonGroup}>
          <button
            type="button"
            className={styles.buttonCancelar}
            onClick={() => navigate('/')}
          >
            Cancelar
          </button>
          <button type="submit" className={styles.buttonEnviar}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
