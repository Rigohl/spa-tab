// src/utils/botArchiver.js
export const archivarContacto = (contacto) => {
  if (contacto.estado === 'Dejó de contestar') {
    // lógica para archivar
    console.log('Archivando contacto:', contacto.nombre);
  }
};