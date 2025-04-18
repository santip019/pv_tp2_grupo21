import { cambiarTexto } from './funciones18.js';

const boton = document.getElementById('boton');
const parrafo = document.getElementById('parrafo');

boton.addEventListener('click', () => {
  cambiarTexto(parrafo, '¡Texto cambiado con éxito!');
});
