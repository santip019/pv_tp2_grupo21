export default function mostrarselec(){
    console.clear()
    const radios = document.getElementsByName("lenguaje")
    const resultado = document.getElementById("resultado")
  
    for (let a = 0; a < radios.length; a++) {
      if (radios[a].checked) {
        resultado.textContent = radios[a].value
        console.log("Seleccionaste: " + radios[a].value)
      }
    }
}
