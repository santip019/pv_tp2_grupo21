let sumarRango = (numeroInicial, numeroFinal) => {
    if (numeroInicial > numeroFinal) {
        return 0;
    }
    else if (numeroInicial === numeroFinal) {
        return numeroInicial;
    }
    else{
        let suma = 0;
        for (let i = numeroInicial; i <= numeroFinal; i++) {
            suma += numeroInicial;
            numeroInicial++;
        }
        return suma;
    }
    
};
let numeroInicial=9; // Cambia este valor para probar diferentes meses
let numeroFinal=12; // Cambia este valor para probar diferentes meses

// Llamar al método retornarMes
let resultado= sumarRango(numeroInicial, numeroFinal);
if (resultado === 0){
    console.log("El rango no es correcto");
}
else if (resultado === numeroInicial){
    console.log("La suma de los números entre " + numeroInicial + " y " + numeroFinal + "(incluyendo estos numeros) es: ");
    console.log(resultado);
}
else{
    console.log("La suma de los números entre " + numeroInicial + " y " + numeroFinal + "(incluyendo estos numeros) es: ");
    console.log(resultado);
}