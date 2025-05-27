// src/components/Card.jsx
import React, { useState } from 'react';
import './Card.css'; // Puedes mover estilos aquí si lo deseas

const Card = ({ contact }) => {
  const [nombre, setNombre] = useState(contact.nombre);
  const [telefono] = useState(contact.telefono);
  const [nota, setNota] = useState('');
  const [mostrarOpciones, setMostrarOpciones] = useState(false);

  const toggleOpciones = () => {
    setMostrarOpciones(!mostrarOpciones);
  };

  return (
    <div className="card">
      <strong>{nombre}</strong><br />
      <span>{telefono}</span><br />

      <button onClick={toggleOpciones}>
        {mostrarOpciones ? 'Ocultar' : 'Opciones'}
      </button>

      {mostrarOpciones && (
        <div style={{ marginTop: '8px' }}>
          <label>
            Nota:
            <input
              type="text"
              value={nota}
              onChange={(e) => setNota(e.target.value)}
              style={{ width: '100%', marginTop: '4px' }}
            />
          </label>
          <br />
          <a
            href={`https://wa.me/${telefono.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir en WhatsApp
          </a>
        </div>
      )}
    </div>
  );
};

export default Card;