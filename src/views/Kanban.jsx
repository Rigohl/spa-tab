import React from 'react';

const Kanban = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>CRM Kanban SpaMonterrey</h1>
      <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto' }}>
        {['Nuevo contacto', 'Respondido', 'Citada a entrevista', 'Acudió', 'Negocio asignado', 'Dejó de contestar'].map((col) => (
          <div key={col} style={{ minWidth: '200px', background: '#f3f3f3', padding: '1rem', borderRadius: '8px' }}>
            <h3>{col}</h3>
            <div style={{ marginTop: '1rem', background: '#fff', padding: '0.5rem', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <p><strong>Ejemplo</strong></p>
              <p>Nombre: María G.</p>
              <p>Teléfono: 8123456789</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kanban;
