// src/components/Card.jsx
import React, { useState } from 'react';

const Card = ({ contact }) => {
  const [nombre, setNombre] = useState(contact.nombre);
  const [editing, setEditing] = useState(false);

  const handleNombreChange = (e) => setNombre(e.target.value);
  const toggleEdit = () => setEditing(!editing);

  const abrirWhatsApp = () => {
    const numero = contact.telefono.replace(/\D/g, '');
    window.open(`https://wa.me/${numero}`, '_blank');
  };

  return (
    <div className="card">
      {editing ? (
        <input
          value={nombre}
          onChange={handleNombreChange}
          onBlur={toggleEdit}
          autoFocus
        />
      ) : (
        <strong onClick={toggleEdit} style={{ cursor: 'pointer' }}>
          {nombre}
        </strong>
      )}
      <br />
      <span>{contact.telefono}</span><br />
      <small>{contact.ciudad} - {contact.origen}</small>
      <br />
      <button onClick={abrirWhatsApp}>Abrir WhatsApp</button>
    </div>
  );
};

export default Card;