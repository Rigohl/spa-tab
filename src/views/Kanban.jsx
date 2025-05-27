import React, { useEffect, useState } from 'react';
import '../App.css';
import { getContactsFromSheet } from '../utils/googleSheets';

const Kanban = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContactsFromSheet().then(data => setContacts(data));
  }, []);

  const columns = [
    {
      title: 'Nuevo contacto',
      icon: '🆕',
      color: '#e3f2fd',
      cards: contacts
    },
    { title: 'Respondido', icon: '✉️', color: '#fff3e0', cards: [] },
    { title: 'Citada a entrevista', icon: '📅', color: '#f3e5f5', cards: [] },
    { title: 'Acudió', icon: '✅', color: '#e8f5e9', cards: [] },
    { title: 'Negocio asignado', icon: '🏢', color: '#ede7f6', cards: [] },
    { title: 'Dejó de contestar', icon: '❌', color: '#fbe9e7', cards: [] },
    { title: 'Seguimiento', icon: '⏳', color: '#eceff1', cards: [] }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>CRM SpaMonterrey - Sincronizado</h2>
      <div style={{ display: 'flex', gap: '10px', overflowX: 'auto' }}>
        {columns.map((column, index) => (
          <div
            key={index}
            className="column"
            style={{ backgroundColor: column.color }}
          >
            <h3>{column.icon} {column.title}</h3>
            {column.cards.length === 0 ? (
              <p style={{ fontStyle: 'italic', color: '#555' }}>Vacío</p>
            ) : (
              column.cards.map((card, idx) => (
                <div key={idx} className="card">
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