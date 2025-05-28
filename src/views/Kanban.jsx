// src/views/Kanban.jsx
import React, { useEffect, useState } from 'react';
import Column from '../components/Column';
import { obtenerDatos } from '../utils/googleSheets';
import { guardarCampo } from '../utils/persistencia';

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
    const cargar = async () => {
      const datosSheet = await obtenerDatos();
      setDatos(datosSheet);
    };
    cargar();
  }, []);

  const actualizarDato = (id, campo, valor) => {
    setDatos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [campo]: valor } : item))
    );
    guardarCampo(id, campo, valor);
  };

  const datosPorColumna = (col) => datos.filter((d) => d.estado === col);

  return (
    <div style={{ display: 'flex', overflowX: 'auto' }}>
      {columnas.map((col) => (
        <Column
          key={col}
          title={col}
          cards={datosPorColumna(col)}
          onUpdate={actualizarDato}
        />
      ))}
    </div>
  );
};

export default Kanban;
