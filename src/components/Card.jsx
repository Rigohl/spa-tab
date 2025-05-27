import React, { useState } from 'react';

const Card = ({ card, columnTitle }) => {
  const [nombre, setNombre] = useState(card.nombre || '');
  const [ciudad, setCiudad] = useState(card.ciudad || '');
  const [origen, setOrigen] = useState(card.origen || '');
  const [seguimiento, setSeguimiento] = useState(card.seguimiento || '');
  const [negocio, setNegocio] = useState(card.negocio || '');
  const [entrevista, setEntrevista] = useState(card.entrevista || '');
  const [acudio, setAcudio] = useState(card.acudió || '');
  const [gastoUber, setGastoUber] = useState(card.gastoUber || 'No');
  const [montoUber, setMontoUber] = useState(card.montoUber || '');
  const [motivoNoTrabajo, setMotivoNoTrabajo] = useState(card.motivo || '');
  const [subestado, setSubestado] = useState(card.subestado || '');

  const es = (col) => columnTitle === col;

  return (
    <div className="card">
      <strong>
        Nombre:{' '}
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </strong>
      <br />
      Teléfono:{' '}
      <a href={`https://wa.me/52${card.telefono}`} target="_blank" rel="noopener noreferrer">
        {card.telefono}
      </a>
      <br />
      Ciudad:{' '}
      <input type="text" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
      <br />
      Origen:{' '}
      <input type="text" value={origen} onChange={(e) => setOrigen(e.target.value)} />

      {es('Citada a entrevista') && (
        <>
          <br />
          Fecha/hora entrevista:{' '}
          <input type="text" value={entrevista} onChange={(e) => setEntrevista(e.target.value)} />
        </>
      )}

      {es('Acudió') && (
        <>
          <br />
          ¿Gastó Uber?:{' '}
          <select value={gastoUber} onChange={(e) => setGastoUber(e.target.value)}>
            <option value="No">No</option>
            <option value="Sí">Sí</option>
          </select>
          {gastoUber === 'Sí' && (
            <>
              <br />
              Monto Uber:{' '}
              <input type="text" value={montoUber} onChange={(e) => setMontoUber(e.target.value)} />
            </>
          )}
        </>
      )}

      {es('Negocio asignado') && (
        <>
          <br />
          Negocio:{' '}
          <select value={negocio} onChange={(e) => setNegocio(e.target.value)}>
            <option value="">Selecciona</option>
            <option value="Mistika1">Mistika1</option>
            <option value="Mistika2">Mistika2</option>
            <option value="Libido">Libido</option>
            <option value="Poorkys">Poorkys</option>
            <option value="Caprice">Caprice</option>
            <option value="Secret">Secret</option>
            <option value="Deseos">Deseos</option>
            <option value="Relax">Relax</option>
            <option value="Babys">Babys</option>
            <option value="Desire">Desire</option>
            <option value="Hawai">Hawai</option>
            <option value="Tokyo">Tokyo</option>
          </select>
        </>
      )}

      {es('Dejó de contestar') && (
        <>
          <br />
          Subestado:{' '}
          <select value={subestado} onChange={(e) => setSubestado(e.target.value)}>
            <option value="">Selecciona</option>
            <option value="Envió info y no respondió">Envió info y no respondió</option>
            <option value="Envió foto y no respondió">Envió foto y no respondió</option>
            <option value="Se pactó cita y no respondió">Se pactó cita y no respondió</option>
            <option value="Otro">Otro</option>
          </select>
        </>
      )}

      {es('Seguimiento') && (
        <>
          <br />
          ¿Sigue trabajando?:{' '}
          <select value={seguimiento} onChange={(e) => setSeguimiento(e.target.value)}>
            <option value="">Selecciona</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </select>
          {seguimiento === 'No' && (
            <>
              <br />
              Motivo:{' '}
              <input
                type="text"
                value={motivoNoTrabajo}
                onChange={(e) => setMotivoNoTrabajo(e.target.value)}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Card;