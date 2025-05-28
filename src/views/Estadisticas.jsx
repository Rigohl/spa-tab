import React, { useEffect, useState } from 'react';
import { obtenerDatos } from '../utils/googleSheets';

const Estadisticas = () => {
  const [datos, setDatos] = useState([]);
  const [totales, setTotales] = useState({
    total: 0,
    respondidos: 0,
    entrevistas: 0,
    asistieron: 0,
    gastosUber: 0,
    abandonos: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      const datosRaw = await obtenerDatos();
      setDatos(datosRaw);
      const nuevosTotales = {
        total: datosRaw.length,
        respondidos: datosRaw.filter(d => d.estado !== 'Nuevo contacto').length,
        entrevistas: datosRaw.filter(d => d.estado === 'Citada a entrevista').length,
        asistieron: datosRaw.filter(d => d.estado === 'Acudió').length,
        gastosUber: datosRaw
          .filter(d => d.gastoUber === 'Sí')
          .reduce((sum, d) => sum + (parseFloat(d.montoUber) || 0), 0),
        abandonos: datosRaw.filter(d => d.estado === 'Dejó de contestar').length
      };
      setTotales(nuevosTotales);
    };

    const intervalo = setInterval(fetchData, 5000); // Actualiza cada 5 segundos
    fetchData();
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Estadísticas en tiempo real</h2>
      <ul>
        <li>Total de contactos: {totales.total}</li>
        <li>Respondieron: {totales.respondidos}</li>
        <li>Citadas a entrevista: {totales.entrevistas}</li>
        <li>Acudieron: {totales.asistieron}</li>
        <li>Gastos en Uber: ${totales.gastosUber.toFixed(2)}</li>
        <li>Abandonos: {totales.abandonos}</li>
      </ul>
    </div>
  );
};

export default Estadisticas;