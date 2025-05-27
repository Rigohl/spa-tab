export const obtenerRol = (telefono) => {
  const administradores = ['+521234567890', '+529999999999']; // añade los números de admin aquí
  return administradores.includes(telefono) ? 'admin' : 'normal';
};