import React from 'react';

const Header = ({ usuario, onLogout }) => {
  return (
    <header className="header">
      <h1>SpaMonterrey CRM</h1>
      <div>
        Rol: <strong>{usuario.rol}</strong> — {usuario.telefono}
        <button onClick={onLogout}>Cerrar sesión</button>
      </div>
    </header>
  );
};

export default Header;