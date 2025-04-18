export function obtenerColorAleatorio() {
    const colores = ['#f1c40f', '#e67e22', '#1abc9c', '#9b59b6', '#3498db', '#e74c3c'];
    const indice = Math.floor(Math.random() * colores.length);
    return colores[indice];
  }
  