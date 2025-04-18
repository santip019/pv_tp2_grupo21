import { obtenerColorAleatorio } from './funciones24.js';

const boton = document.getElementById('cambiarColorBtn');

boton.addEventListener('click', () => {
  const nuevoColor = obtenerColorAleatorio();
  document.body.style.backgroundColor = nuevoColor;
  console.log(`Color de fondo cambiado a: ${nuevoColor}`);
});

