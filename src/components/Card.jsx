// src/components/Card.jsx
import React, { useState } from 'react';

const Card = ({ card, columnTitle }) => {
  const [nombre, setNombre] = useState(card.nombre || '');
  const [ciudad, setCiudad] = useState(card.ciudad || '');
  const [origen, setOrigen] = useState(card.origen || '');
  const [seguimiento, setSeguimiento] = useState(card.seguimiento || '');
  const [negocio, setNegocio] = useState(card.negocio || '');
  const [motivoNoTrabajo, setMotivoNoTrabajo] = useState('');

  // Subopciones en "Dejó de contestar"
  const [subestado, setSubestado] = useState('');

  const esColumnaDejoContestar = columnTitle === 'Dejó de contestar';
  const esColumnaSeguimiento = columnTitle === 'Seguimiento';

  return (
    <div className="card">
      <strong>
        Nombre:{' '}
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </strong>
      <br />
      Teléfono: <a href={`https://wa.me/52${card.telefono}`} target="_blank" rel="noopener noreferrer">{card.telefono}</a>
      <br />
      Ciudad:{' '}
      <input
        type="text"
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
      />
      <br />
      Origen:{' '}
      <input
        type="text"
        value={origen}
        onChange={(e) => setOrigen(e.target.value)}
      />

      {/* Subopciones si es "Dejó de contestar" */}
      {esColumnaDejoContestar && (
        <>
          <br />
          Subestado:{' '}
          <select value={subestado} onChange={(e) => setSubestado(e.target.value)}>
            <option value="">Selecciona</option>
            <option value="Envió info y no respondió">Envió info y no respondió</option>
            <option value="Envió foto y no respondió">Envió foto y no respondió</option>
            <option value="Se pactó cita y no respondió">Se pactó cita y no respondió</option>
          </select>
        </>
      )}

      {/* Opciones especiales para seguimiento */}
      {esColumnaSeguimiento && (
        <>
          <br />
          ¿Sigue trabajando?{' '}
          <select value={seguimiento} onChange={(e) => setSeguimiento(e.target.value)}>
            <option value="">Selecciona</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </select>

          {seguimiento === 'No' && (
            <>
              <br />
              Motivo:{' '}
              <input
                type="text"
                value={motivoNoTrabajo}
                onChange={(e) => setMotivoNoTrabajo(e.target.value)}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Card;