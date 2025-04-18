export function actualizarTexto(input, textoMostrado) {
    input.addEventListener("input", () => {
      textoMostrado.textContent = input.value || "El texto aparecerá aquí...";
    });
  }