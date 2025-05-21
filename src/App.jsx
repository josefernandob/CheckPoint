import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import { Login } from './pages/Login/Login';
import InitialPage from './pages/Login/InitialPage';
import PointRegister from './pages/Login/PointRegister';
import  Cadastro from './pages/Login/Cadastro'; // Importe o componente Cadastro

function App() {
  return (
    <div className={styles.back}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/initial" element={<InitialPage />} />
          <Route path="/registrar" element={<PointRegister />} />
          <Route path="/Cadastro" element={<Cadastro />} /> {/* Nova rota */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;