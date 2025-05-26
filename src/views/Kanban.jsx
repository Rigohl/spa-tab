import React, { useEffect, useState } from 'react';

const columnas = ['Nuevo contacto', 'Respondido', 'Citada a entrevista', 'Acudió', 'Negocio asignado', 'Dejó de contestar'];

export default function Kanban() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTggtutTXyfmpQDP5H0du_G3s_Heo9vUmZc0sT5J7ukS5XeLfHvmC0N8MrN_AwvUzAZx5s94BP6dsSf/pub?output=csv')
      .then(res => res.text())
      .then(text => {
        const rows = text.split('\\n').map(row => row.split(','));
        const headers = rows[0];
        const entries = rows.slice(1).map(r => {
          let obj = {};
          headers.forEach((h, i) => obj[h.trim()] = r[i]?.trim());
          return obj;
        });
        setDatos(entries);
      });
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>CRM SpaMonterrey - Sincronizado</h1>
      <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto' }}>
        {columnas.map(col => (
          <div key={col} style={{ minWidth: '250px', background: '#f0f0f0', padding: '1rem', borderRadius: '8px' }}>
            <h3>{col}</h3>
            {datos.filter(d => d.estado === col).map((item, i) => (
              <div key={i} style={{ background: '#fff', marginBottom: '1rem', padding: '0.5rem', borderRadius: '6px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <p><strong>{item.nombre}</strong></p>
                <p>Edad: {item.edad}</p>
                <p>Zona: {item.zona}</p>
                <p>Tel: {item.telefono}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
