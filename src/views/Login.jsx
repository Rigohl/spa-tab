// src/views/Login.jsx
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [usuario, setUsuario] = useState('');

  const handleLogin = () => {
    if (usuario) {
      onLogin(usuario);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Ingresa tu nombre de usuario</h2>
      <input
        type="text"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        placeholder="Ej. admin"
      />
      <br /><br />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login;