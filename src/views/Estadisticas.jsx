// src/views/Estadisticas.jsx
import React, { useEffect, useState } from 'react';
import { getContactsFromSheet } from '../utils/googleSheets';

const Estadisticas = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    getContactsFromSheet().then(data => {
      const resumen = {
        totalContactos: data.length,
        respondieron: data.filter(d => d.estado === 'Respondido').length,
        citadas: data.filter(d => d.estado === 'Citada a entrevista').length,
        acudieron: data.filter(d => d.estado === 'Acudió').length,
        uberGastado: data.reduce((sum, d) => sum + (parseFloat(d.gastoUber) || 0), 0),
        dejaronDeContestar: data.filter(d => d.estado === 'Dejó de contestar').length,
        noRespondieron: data.filter(d => d.estado === 'Nuevo contacto').length,
        negocios: {}
      };

      const negocios = [
        'Mistika1', 'Mistika2', 'Libido', 'Poorkys', 'Caprice', 'Secret',
        'Deseos', 'Relax', 'Babys', 'Desire', 'Hawai', 'Tokyo'
      ];

      negocios.forEach(nombre => {
        resumen.negocios[nombre] = data.filter(d => d.negocio === nombre).length;
      });

      setStats(resumen);
    });
  }, []);

  if (!stats) return <p>Cargando estadísticas...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Estadísticas Generales</h2>
      <ul>
        <li>Total de contactos: {stats.totalContactos}</li>
        <li>Respondieron: {stats.respondieron}</li>
        <li>Citadas a entrevista: {stats.citadas}</li>
        <li>Acudieron: {stats.acudieron}</li>
        <li>Total gastado en Uber: ${stats.uberGastado}</li>
        <li>Dejaron de contestar: {stats.dejaronDeContestar}</li>
        <li>No respondieron nunca: {stats.noRespondieron}</li>
      </ul>
      <h3>Negocios asignados:</h3>
      <ul>
        {Object.entries(stats.negocios).map(([nombre, cantidad]) => (
          <li key={nombre}>{nombre}: {cantidad}</li>
        ))}
      </ul>
    </div>
  );
};

export default Estadisticas;