// src/App.jsx
import React, { useState } from 'react';
import Kanban from './views/Kanban';
import Estadisticas from './views/Estadisticas';
import Login from './views/Login';
import Header from './components/Header';
import { obtenerRol } from './utils/roles';
import './App.css';

function App() {
  const [usuario, setUsuario] = useState(null);
  const [vista, setVista] = useState('kanban');

  const handleLogin = (telefono) => {
    const rol = obtenerRol(telefono);
    setUsuario({ telefono, rol });
  };

  const handleLogout = () => {
    setUsuario(null);
  };

  if (!usuario) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div>
      <Header usuario={usuario} onLogout={handleLogout} />
      <nav>
        <button onClick={() => setVista('kanban')}>CRM</button>
        <button onClick={() => setVista('stats')}>Estadísticas</button>
      </nav>
      {vista === 'kanban' ? <Kanban /> : <Estadisticas />}
    </div>
  );
}

export default App;