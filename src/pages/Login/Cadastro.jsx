import React from 'react';
import styles from './Cadastro.module.css'; // Import corrigido

export default function Cadastro() {
  return (
    <div className={styles.pageWrapper}>
      <form className={styles.cadastroBox}>
        <div className={styles.Header}>
          <img src="icon1.png" alt="Logo" />
          <h2>CheckPoint</h2>
        </div>

        <div className={styles.Title}>
          <h2>Faça seu cadastro</h2>
          <p>Insira as informações necessárias para seu cadastro</p>
        </div>

        <div className={styles.Inputs}>
          <div className={styles.InputGroup}>
            <img src="https://lucide.dev/icons/user.svg" alt="Usuário" />
            <input type="text" placeholder="Nome completo" required />
          </div>

          <div className={styles.InputGroup}>
            <img src="https://lucide.dev/icons/mail.svg" alt="Email" />
            <input type="email" placeholder="Email" required />
          </div>

          <div className={styles.InputGroup}>
            <img src="https://lucide.dev/icons/lock.svg" alt="Senha" />
            <input type="password" placeholder="Senha" required />
          </div>

          <div className={styles.InputGroup}>
            <img src="https://lucide.dev/icons/lock.svg" alt="Confirme a senha" />
            <input type="password" placeholder="Repita sua senha" required />
          </div>
        </div>

        <button type="submit" className={styles.button}>Cadastrar</button>
      </form>
    </div>
  );
}