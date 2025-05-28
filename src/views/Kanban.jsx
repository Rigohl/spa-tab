// src/views/Kanban.jsx
import React from 'react';
import Column from '../components/Column';

const columnas = [
  'Nuevo contacto',
  'Respondido',
  'Citada a entrevista',
  'Acudió',
  'Negocio asignado',
  'Dejó de contestar',
  'Seguimiento'
];

const Kanban = ({ datos }) => {
  const datosPorColumna = (columna) =>
    datos.filter((item) => item.estado === columna);

  return (
    <div style={{ display: 'flex', overflowX: 'auto' }}>
      {columnas.map((col) => (
        <Column key={col} title={col} cards={datosPorColumna(col)} />
      ))}
    </div>
  );
};

export default Kanban;
