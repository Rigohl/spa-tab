export const autoArchivar = (card) => {
  const estadosFinales = ['Dejó de contestar', 'Acudió', 'Negocio asignado', 'Seguimiento'];
  return estadosFinales.includes(card.estado);
};