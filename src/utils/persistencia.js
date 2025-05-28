// src/utils/persistencia.js
export const guardarCambios = async (campo, valor, telefono) => {
  try {
    await fetch('https://api.sheety.co/TU_API/hoja1', {
      method: 'POST',
      body: JSON.stringify({
        [campo]: valor,
        telefono
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (err) {
    console.error('Error al guardar en Sheets:', err);
  }
};