import React from 'react';
import { useEffect, useState } from 'react';
import { obtenerDatos } from '../utils/googleSheets';
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

const Kanban = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    obtenerDatos().then(setDatos);
  }, []);

 const datosPorColumna = (columna) => {
  return datos.filter((item) => item.estado && item.estado === columna);
};

  return (
    <div style={{ display: 'flex', overflowX: 'auto' }}>
      {columnas.map((col) => (
        <Column key={col} title={col} cards={datosPorColumna(col)} />
      ))}
    </div>
  );
};

export default Kanban;
