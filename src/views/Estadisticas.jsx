// src/views/Estadisticas.jsx
import React from 'react';

const Estadisticas = () => {
  // Aquí podrían conectarse con datos reales en el futuro.
  const estadisticas = {
    totalContactos: 0,
    respondieron: 0,
    citadas: 0,
    acudieron: 0,
    uberGastado: 0,
    negocios: {
      Mistika1: 0,
      Mistika2: 0,
      Libido: 0,
      Poorkys: 0,
      Caprice: 0,
      Secret: 0,
      Deseos: 0,
      Relax: 0,
      Babys: 0,
      Desire: 0,
      Hawai: 0,
      Tokyo: 0
    },
    dejaronDeContestar: 0,
    noRespondieron: 0
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Estadísticas Generales</h2>
      <ul>
        <li>Total de contactos: {estadisticas.totalContactos}</li>
        <li>Respondieron: {estadisticas.respondieron}</li>
        <li>Citadas a entrevista: {estadisticas.citadas}</li>
        <li>Acudieron: {estadisticas.acudieron}</li>
        <li>Total gastado en Uber: ${estadisticas.uberGastado}</li>
        <li>Dejaron de contestar: {estadisticas.dejaronDeContestar}</li>
        <li>No respondieron nunca: {estadisticas.noRespondieron}</li>
      </ul>
      <h3>Negocios asignados:</h3>
      <ul>
        {Object.entries(estadisticas.negocios).map(([nombre, cantidad]) => (
          <li key={nombre}>{nombre}: {cantidad}</li>
        ))}
      </ul>
    </div>
  );
};

export default Estadisticas;