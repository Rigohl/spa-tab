import React, { useEffect, useState } from 'react';
import '../App.css';
import { getContactsFromSheet } from '../utils/googleSheets';
import Column from '../components/Column';

const Kanban = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContactsFromSheet().then(data => {
      const nuevos = data.filter(contact =>
        !contact.nombre || contact.nombre === 'Sin nombre'
      );
      setContacts(nuevos);
    });
  }, []);

  const columns = [
    { title: 'Nuevo contacto', icon: '🆕', color: '#e3f2fd', cards: contacts },
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
          <Column
            key={index}
            title={column.title}
            icon={column.icon}
            color={column.color}
            cards={column.cards}
          />
        ))}
      </div>
    </div>
  );
};

export default Kanban;