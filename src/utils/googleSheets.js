export async function getContactsFromSheet() {
  try {
    const response = await fetch(
      'https://opensheet.elk.sh/11mbwKnaO33uNpTwYtQZ896cTTpWnYNoy27ERXKW4ddg/Sheet1'
    );
    const data = await response.json();

    // Formato: [{ Nombre: "Ana", Teléfono: "8123456789" }, ...]
    return data.map(contact => ({
      nombre: contact.Nombre || 'Sin nombre',
      telefono: contact.Teléfono || 'Sin teléfono'
    }));
  } catch (error) {
    console.error('Error al cargar contactos:', error);
    return [];
  }
}