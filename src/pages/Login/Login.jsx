import styles from './Login.module.css'


export function Login() {

    const handleLogin = (event) =>
        event.preventDefault();
    console.log('Form enviado!');

    return (
        <form className={styles.loginBox} onSubmit={handleLogin} >

            <h2> CheckPoint</h2>

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
            <a href="#">Esqueceu sua senha?</a>

            


            <button type="submit">Entrar</button>

        </form>


    )



}
