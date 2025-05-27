// src/components/Column.jsx
import React from 'react';
import Card from './Card';

const Column = ({ title, icon, color, cards }) => {
  return (
    <div className="column" style={{ backgroundColor: color }}>
      <h3>{icon} {title}</h3>
      {cards.length === 0 ? (
        <p style={{ fontStyle: 'italic', color: '#555' }}>Vacío</p>
      ) : (
        cards.map((card, index) => (
          <Card key={index} card={card} columnTitle={title} />
        ))
      )}
    </div>
  );
};

export default Column;