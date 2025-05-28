// src/utils/persistencia.js

export async function guardarCampo(id, campo, valor) {
  try {
    const response = await fetch('https://tu-api.com/guardar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, campo, valor }),
    });

    if (!response.ok) {
      throw new Error('Error al guardar');
    }

    const result = await response.json();
    console.log('Guardado:', result);
  } catch (error) {
    console.error('Error al guardar en Sheets:', error);
  }
}