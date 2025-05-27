// src/utils/botArchiver.js
export function archivarSiAgendado(contacto, listaAgendada) {
  return listaAgendada.includes(contacto.telefono);
}