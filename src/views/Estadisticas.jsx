// src/views/Estadisticas.jsx
import React, { useEffect, useState } from 'react';

const Estadisticas = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch('https://opensheet.elk.sh/11mbwKnaO33uNpTwYtQZ896cTTpWnYNoy27ERXKW4ddg/Estadisticas')
      .then(res => res.json())
      .then(data => {
        const resumen = data[0];
        setStats(resumen);
      })
      .catch(err => {
        console.error('Error al cargar estadísticas:', err);
      });
  }, []);

  if (!stats) return <div>Cargando estadísticas...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Estadísticas generales</h2>
      <ul>
        <li>Total de contactos: {stats.Total || 0}</li>
        <li>Respondieron: {stats.Respondieron || 0}</li>
        <li>Citadas a entrevista: {stats.Citadas || 0}</li>
        <li>Acudieron: {stats.Acudieron || 0}</li>
        <li>Gasto total en Uber: ${stats.TotalUber || 0}</li>
        <li>No respondieron: {stats.NoRespondieron || 0}</li>
        <li>Dejaron de contestar: {stats.Dejaron || 0}</li>
        <li>Negocios asignados:</li>
        <ul>
          <li>Mistika 1: {stats.Mistika1 || 0}</li>
          <li>Mistika 2: {stats.Mistika2 || 0}</li>
          <li>Libido: {stats.Libido || 0}</li>
          <li>Poorkys: {stats.Poorkys || 0}</li>
          <li>Caprice: {stats.Caprice || 0}</li>
          <li>Otros: {stats.Otros || 0}</li>
        </ul>
      </ul>
    </div>
  );
};

export default Estadisticas;