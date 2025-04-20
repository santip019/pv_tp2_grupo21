import { alertaFormulario } from "./alerta19.js";

const boton = document.querySelector("#boton");

boton.addEventListener("click", () => {
    const nombre = document.querySelector("#nombre").value;
      const apellido = document.querySelector("#apellido").value;
      const libreta = document.querySelector("#libreta").value;
    
    alertaFormulario(nombre, apellido, libreta);
});