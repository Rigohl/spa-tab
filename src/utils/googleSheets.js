export const obtenerDatos = async () => {
  const response = await fetch(
    'https://sheets.googleapis.com/v4/spreadsheets/11mbwKnaO33uNpTwYtQZ896cTTpWnYNoy27ERXKW4ddg/values/Hoja1?alt=json&key=TU_API_KEY'
  );
  const data = await response.json();
  const [headers, ...rows] = data.values;

  return rows.map((row) => {
    const obj = {};
    headers.forEach((header, i) => {
      obj[header.trim()] = row[i] || '';
    });
    return obj;
  });
};
