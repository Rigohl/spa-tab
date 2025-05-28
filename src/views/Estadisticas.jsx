import React, { useEffect, useState } from 'react';
import { getContactsFromSheet } from '../utils/googleSheets';

const Estadisticas = () => {
  const [stats, setStats] = useState({});

  const calcularEstadisticas = (data) => {
    const total = data.length;
    const respondido = data.filter(c => c.estado === 'Respondido').length;
    const entrevistas = data.filter(c => c.estado === 'Citada a entrevista').length;
    const asistieron = data.filter(c => c.estado === 'Acudió').length;
    setStats({ total, respondido, entrevistas, asistieron });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getContactsFromSheet().then(calcularEstadisticas);
    }, 5000); // actualiza cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Estadísticas en tiempo real</h2>
      <ul>
        <li>Total contactos: {stats.total}</li>
        <li>Respondieron: {stats.respondido}</li>
        <li>Citadas a entrevista: {stats.entrevistas}</li>
        <li>Asistieron: {stats.asistieron}</li>
      </ul>
    </div>
  );
};

export default Estadisticas;