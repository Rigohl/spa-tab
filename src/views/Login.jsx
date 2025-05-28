// src/views/Login.jsx
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [telefono, setTelefono] = useState('');

  const handleLogin = () => {
    const telefonoLimpio = telefono.replace(/\D/g, ''); // limpia cualquier carácter que no sea número
    if (telefonoLimpio.length >= 10) {
      onLogin(telefonoLimpio);
    } else {
      alert('Ingresa un número de teléfono válido');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Ingresa tu número de teléfono</h2>
      <input
        type="tel"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        placeholder="Ej. 8123456789"
      />
      <br /><br />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login;
