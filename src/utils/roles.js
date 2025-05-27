export const obtenerRol = (telefono) => {
  const administradores = ['8128823476', '8128823476']; // añade los números de admin aquí
  return administradores.includes(telefono) ? 'admin' : 'normal';
};