import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import { Login } from './pages/Login/Login';
import InitialPage from './pages/Login/InitialPage';
import PointRegister from './pages/Login/PointRegister';
import Cadastro from './pages/Login/Cadastro'; 
import EsqueceuSenha from './pages/Login/EsqueceuSenha'; 
import CodRec from './pages/Login/CodRec';
import RedSen from './pages/Login/RedSen';
import Logout from './pages/Login/Logout';

import Bh from './pages/Login/Bh';
import Relat from './pages/Login/Relat';
import CorrP from './pages/Login/CorrP';
import Profile from './pages/Login/Profile';
import Settings from './pages/Login/Settings';
import Facial from './pages/Login/Facial';
import RegisDone from './pages/Login/RegisDone';
import RegisFail from './pages/Login/RegisFail';



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
          <Route path="/redsen" element={<RedSen />} />
          <Route path="/logout" element={<Logout />} />

      <Route path="/banco-horas" element={<Bh />} />
     <Route path="/relatorio" element={<Relat />} />
      <Route path="/corrigir-ponto" element={<CorrP />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/configuracoes" element={<Settings />} />
      <Route path="/facial" element={<Facial />} />
       <Route path="/regisdone" element={<RegisDone />} />  
       <Route path="/RegisFail" element={<RegisFail />} />      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
