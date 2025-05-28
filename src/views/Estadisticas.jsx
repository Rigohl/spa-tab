// src/views/Estadisticas.jsx
import React from 'react';

const Estadisticas = ({ datos }) => {
  const contar = (campo, valor) => datos.filter((d) => d[campo] === valor).length;

  const total = datos.length;
  const respondido = contar('estado', 'Respondido');
  const entrevistas = contar('estado', 'Citada a entrevista');
  const acudieron = contar('estado', 'Acudió');
  const gastosUber = datos
    .filter((d) => d.gastoUber === 'Sí')
    .reduce((acc, cur) => acc + (parseFloat(cur.montoUber) || 0), 0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Estadísticas</h2>
      <p>Total de contactos: {total}</p>
      <p>Respondieron: {respondido}</p>
      <p>Citadas a entrevista: {entrevistas}</p>
      <p>Acudieron: {acudieron}</p>
      <p>Gasto total en Uber: ${gastosUber.toFixed(2)}</p>
    </div>
  );
};

export default Estadisticas;