import React from 'react';
import '../App.css';

const columns = [
  { title: 'Nuevo contacto', cards: [], color: '#e3f2fd', icon: '🆕' },
  { title: 'Respondido', cards: [], color: '#fff3e0', icon: '✉️' },
  { title: 'Citada a entrevista', cards: [], color: '#f3e5f5', icon: '📅' },
  { title: 'Acudió', cards: [], color: '#e8f5e9', icon: '✅' },
  { title: 'Negocio asignado', cards: [], color: '#ede7f6', icon: '🏢' },
  { title: 'Dejó de contestar', cards: [], color: '#fbe9e7', icon: '❌' }
];

const Kanban = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>CRM SpaMonterrey - Sincronizado</h2>
      <div style={{ display: 'flex', gap: '10px', overflowX: 'auto' }}>
        {columns.map((column, index) => (
          <div
            key={index}
            style={{
              backgroundColor: column.color,
              borderRadius: '8px',
              padding: '10px',
              minWidth: '220px',
              flexShrink: 0
            }}
          >
            <h3>{column.icon} {column.title}</h3>
            {column.cards.length === 0 ? (
              <p style={{ fontStyle: 'italic', color: '#555' }}>Vacío</p>
            ) : (
              column.cards.map((card, idx) => (
                <div key={idx} style={{
                  background: '#fff',
                  borderRadius: '4px',
                  padding: '8px',
                  margin: '5px 0',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}>
                  <strong>{card.nombre}</strong><br />
                  <span>{card.telefono}</span>
                </div>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kanban;