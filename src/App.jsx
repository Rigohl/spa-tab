// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import Kanban from './views/Kanban';

export default function App() {
  const [view, setView] = useState('menu');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {view === 'menu' && (
        <div style={{ textAlign: 'center' }}>
          <h2>¿Qué deseas ver?</h2>
          <button onClick={() => setView('chat')} style={buttonStyle}>Chat personal</button>
          <button onClick={() => setView('crm')} style={buttonStyle}>CRM / Trabajo</button>
        </div>
      )}

      {view === 'chat' && (
        <div style={{ textAlign: 'center' }}>
          <h2>Chat Personal</h2>
          <p>Abre WhatsApp Web desde aquí:</p>
          <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer">
            Ir a WhatsApp Web
          </a>
          <br /><br />
          <button onClick={() => setView('menu')} style={buttonStyle}>Volver</button>
        </div>
      )}

      {view === 'crm' && (
        <div>
          <Kanban />
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button onClick={() => setView('menu')} style={buttonStyle}>Volver</button>
          </div>
        </div>
      )}
    </div>
  );
}

const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '8px',
  cursor: 'pointer'
};