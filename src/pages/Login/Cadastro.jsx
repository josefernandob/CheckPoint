import React from 'react';
import styles from './Cadastro.module.css';

export default function Cadastro() {
  return (
    <div className={styles.pageWrapper}>
      <form className={styles.cadastroBox}>
        <div className={styles.Header}>
          <img src="/src/assets/Nearpod.svg" alt="Logo Nearpod" className={styles.logo} />
          <h2>CheckPoint</h2>
        </div>

        <div className={styles.Title}>
          <h2>Faça seu cadastro</h2>
          <p>Insira as informações necessárias para seu cadastro</p>
        </div>

        <div className={styles.Inputs}>
          <div className={styles.InputGroup}>
            <img src="/src/assets/pessoa.png" alt="Usuário" />
            <input type="text" placeholder="Nome completo" required />
          </div>

          <div className={styles.InputGroup}>
            <img src="/src/assets/pessoa.png" alt="Email" />
            <input type="email" placeholder="Email" required />
          </div>

          <div className={styles.InputGroup}>
            <img src="/src/assets/cadeado-seguro.png" alt="Senha" />
            <input type="password" placeholder="Senha" required />
          </div>

          <div className={styles.InputGroup}>
            <img src="/src/assets/cadeado-seguro.png" alt="Confirme a senha" />
            <input type="password" placeholder="Repita sua senha" required />
          </div>
        </div>

        <button type="submit" className={styles.button}>Cadastrar</button>
      </form>
    </div>
  );
}