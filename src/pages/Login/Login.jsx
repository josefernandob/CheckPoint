import styles from './Login.module.css'


export function Login() {

    const handleLogin = (event) =>
        event.preventDefault();
    console.log('Form enviado!');

    return (
        <form className={styles.loginBox} onSubmit={handleLogin} >

            <h2> CheckPoint</h2>

            <div className={styles.Inputs}>

            <img src="/src/assets/User.svg" />
                <input type="text" placeholder="Usuário" />



            <img src="/src/assets/Lock.svg" />
                <input type="text" placeholder="Senha" />

            </div>
            <a href="#">Esqueceu sua senha?</a>
            <button type="submit">Entrar</button>

        </form>


    )



}
