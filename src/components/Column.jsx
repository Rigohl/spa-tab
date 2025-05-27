// src/components/Column.jsx
import React from 'react';
import Card from './Card';

const Column = ({ title, color, icon, cards }) => {
  return (
    <div className="column" style={{ backgroundColor: color }}>
      <h3>{icon} {title}</h3>
      {cards.length === 0 ? (
        <p style={{ fontStyle: 'italic', color: '#555' }}>Vacío</p>
      ) : (
        cards.map((card, idx) => (
          <Card key={idx} data={card} />
        ))
      )}
    </div>
  );
};

export default Column;