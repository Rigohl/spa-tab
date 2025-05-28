// src/App.jsx
import React, { useState, useEffect } from 'react';
import Kanban from './views/Kanban';
import Estadisticas from './views/Estadisticas';
import Login from './views/Login';
import Header from './components/Header';
import { obtenerRol } from './utils/roles';
import { obtenerDatos } from './utils/googleSheets';
import './App.css';

function App() {
  const [usuario, setUsuario] = useState(null);
  const [vista, setVista] = useState('kanban');
  const [datos, setDatos] = useState([]);

  const handleLogin = (telefono) => {
    const rol = obtenerRol(telefono);
    setUsuario({ telefono, rol });
  };

  const handleLogout = () => {
    setUsuario(null);
  };

  const recargarDatos = async () => {
    const nuevosDatos = await obtenerDatos();
    setDatos(nuevosDatos);
  };

  useEffect(() => {
    recargarDatos();
  }, []);

  if (!usuario) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div>
      <Header usuario={usuario} onLogout={handleLogout} />
      <nav>
        <button onClick={() => setVista('kanban')}>CRM</button>
        <button onClick={() => setVista('stats')}>Estadísticas</button>
        <button onClick={recargarDatos}>🔄 Actualizar</button>
      </nav>
      {vista === 'kanban' ? <Kanban datos={datos} /> : <Estadisticas datos={datos} />}
    </div>
  );
}

export default App;