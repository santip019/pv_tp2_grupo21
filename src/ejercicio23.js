import mostrarselec from "./mostrar23.js";
const radios = document.getElementsByName("lenguaje")
for (let a = 0; a < radios.length; a++){
    radios[a].addEventListener("change", mostrarselec)
}