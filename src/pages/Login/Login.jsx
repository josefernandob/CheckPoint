import styles from './Login.module.css'


export function Login() {

    const handleLogin = (event) =>
        event.preventDefault();
    console.log('Form enviado!');

    return (
        <form className={styles.loginBox} onSubmit={handleLogin} >

            <div className={styles.Header}>
                <img src="/src/assets/Nearpod.svg" />
                <h2> CheckPoint</h2>
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
                    <input type="text" placeholder="Senha" />
                </div>

            </div>


            <a href="#" className={styles.linkSenha}>

                Esqueceu sua senha?</a>


            <div className={styles.checkboxArea}>
                <input type="checkbox" id="manterConectado" />
                <label htmlFor="manterConectado">Manter conectado</label>
            </div>


            <button type="submit">Entrar</button>

        </form>


    )



}
