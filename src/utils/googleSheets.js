export async function getContactsFromSheet() {
  try {
    // Hoja con contactos nuevos (CRM)
    const responseNuevos = await fetch(
      'https://opensheet.elk.sh/11mbwKnaO33uNpTwYtQZ896cTTpWnYNoy27ERXKW4ddg/Sheet1'
    );
    const nuevosData = await responseNuevos.json();

    // Hoja con tus contactos agendados
    const responseAgendados = await fetch(
      'https://opensheet.elk.sh/11mbwKnaO33uNpTwYtQZ896cTTpWnYNoy27ERXKW4ddg/Agenda'
    );
    const agendadosData = await responseAgendados.json();

    const telefonosAgendados = agendadosData.map(c => c.Teléfono?.trim());

    const filtrados = nuevosData.filter(contacto => {
      const telefono = contacto.Teléfono?.trim();
      return telefono && !telefonosAgendados.includes(telefono);
    });

    return filtrados.map(contact => ({
      nombre: contact.Nombre || 'Sin nombre',
      telefono: contact.Teléfono || 'Sin teléfono',
      edad: contact.Edad || '',
      ciudad: contact.Ciudad || '',
      origen: contact.Origen || '',
      negocio: contact.Negocio || '',
      entrevista: contact.Entrevista || '',
      acudió: contact.Acudió || '',
      gastoUber: contact.Uber || '',
      seguimiento: contact.Seguimiento || '',
      estado: contact.Estado || 'Nuevo contacto'
    }));
  } catch (error) {
    console.error('Error al cargar contactos:', error);
    return [];
  }
}