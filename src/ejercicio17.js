let contarLetraA = (palabra) => {
    let resultado = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] == 'a') {
            resultado++;
        }
    }
    console.log("Cantidad de veces que aparece la letra 'a': " + resultado);
    window.alert("Cantidad de veces que aparece la letra 'a': " + resultado);
}

let palabra = prompt("Por favor, ingrese una palabra:");
console.log("Palabra ingresada: " + palabra);

//let palabra = "banana";
contarLetraA(palabra);