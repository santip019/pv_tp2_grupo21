export function cambiarColor(input, textoMostrado) {
    input.addEventListener("input", () => {
        if (input.value.length > 20) {
        textoMostrado.classList.add("bg-warning");
        } else {
        textoMostrado.classList.remove("bg-warning");
        }
  
});
}