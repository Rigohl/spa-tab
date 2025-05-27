// src/components/Card.jsx
import React, { useState } from 'react';
import EditableField from './EditableField';

const Card = ({ contact, onUpdate }) => {
  const [estado, setEstado] = useState(contact.estado || 'Nuevo contacto');

  const handleChange = (field, value) => {
    const updated = { ...contact, [field]: value };
    onUpdate(updated);
  };

  const handleEstadoChange = (e) => {
    const nuevoEstado = e.target.value;
    setEstado(nuevoEstado);
    handleChange('estado', nuevoEstado);
  };

  const openWhatsApp = () => {
    const number = contact.telefono.replace(/\D/g, '');
    window.open(`https://wa.me/${number}`, '_blank');
  };

  return (
    <div className="card">
      <EditableField
        label="Nombre"
        value={contact.nombre}
        onChange={(val) => handleChange('nombre', val)}
      />
      <p><strong>Teléfono:</strong> {contact.telefono}</p>

      <EditableField
        label="Edad"
        value={contact.edad}
        onChange={(val) => handleChange('edad', val)}
      />
      <EditableField
        label="Ciudad"
        value={contact.ciudad}
        onChange={(val) => handleChange('ciudad', val)}
      />
      <EditableField
        label="Origen"
        value={contact.origen}
        onChange={(val) => handleChange('origen', val)}
      />

      <label><strong>Estado:</strong></label>
      <select value={estado} onChange={handleEstadoChange}>
        <option>Nuevo contacto</option>
        <option>Respondido</option>
        <option>Citada a entrevista</option>
        <option>Acudió</option>
        <option>Negocio asignado</option>
        <option>Dejó de contestar</option>
        <option>Seguimiento</option>
      </select>

      <button onClick={openWhatsApp}>Abrir WhatsApp</button>
    </div>
  );
};

export default Card;