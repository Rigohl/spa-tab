// src/components/Column.jsx
import React from 'react';

const Column = ({ title, icon, color, cards }) => {
  return (
    <div className="column" style={{ backgroundColor: color }}>
      <h3>{icon} {title}</h3>
      {cards.length === 0 ? (
        <p style={{ fontStyle: 'italic', color: '#555' }}>Vacío</p>
      ) : (
        cards.map((card, idx) => (
          <div key={idx} className="card">
            <strong>{card.nombre}</strong><br />
            <span>{card.telefono}</span><br />
            {card.edad && <span>Edad: {card.edad}</span>}<br />
            {card.ciudad && <span>Ciudad: {card.ciudad}</span>}<br />
            {card.origen && <span>Origen: {card.origen}</span>}<br />
            {card.negocio && <span>Negocio: {card.negocio}</span>}<br />
            {card.entrevista && <span>Entrevista: {card.entrevista}</span>}<br />
            {card.acudió && <span>Acudió: {card.acudió}</span>}<br />
            {card.gastoUber && <span>Uber: ${card.gastoUber}</span>}<br />
            {card.seguimiento && <span>Seguimiento: {card.seguimiento}</span>}<br />
            <br />
            <a
              href={`https://wa.me/${card.telefono.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir en WhatsApp
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default Column;