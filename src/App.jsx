import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import { Login } from './pages/Login/Login';
import InitialPage from './pages/Login/InitialPage';
import PointRegister from './pages/Login/PointRegister';
import Cadastro from './pages/Login/Cadastro'; 
import EsqueceuSenha from './pages/Login/EsqueceuSenha'; 
import CodRec from './pages/Login/CodRec';
import RedSen from './pages/Login/RedSen'; // <-- importação da nova página
import Logout from './pages/Login/Logout';
function App() {
  return (
    <div className={styles.back}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/initial" element={<InitialPage />} />
          <Route path="/registrar" element={<PointRegister />} />
          <Route path="/cadastro" element={<Cadastro />} /> 
          <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
          <Route path="/codigo-recuperacao" element={<CodRec />} /> 
          <Route path="/redsen" element={<RedSen />} /> {/* <-- nova rota */}
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
