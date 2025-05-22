import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import { Login } from './pages/Login/Login';
import InitialPage from './pages/Login/InitialPage';
import PointRegister from './pages/Login/PointRegister';
import  Cadastro from './pages/Login/Cadastro'; 
import EsqueceuSenha from './pages/Login/EsqueceuSenha'; 
function App() {
  return (
    <div className={styles.back}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/initial" element={<InitialPage />} />
          <Route path="/registrar" element={<PointRegister />} />
          <Route path="/Cadastro" element={<Cadastro />} /> 
          <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;