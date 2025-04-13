
let nombres = ["Lucía", "Juan", "Florencia", "Carlos", "Ana", "Maximiliano"];

console.log("Listado de nombres y su longitud:");
nombres.forEach(nombre => {
    console.log(nombre + " (" + nombre.length + " caracteres)");
});


let nombreMasLargo = nombres[0];
for (let i = 1; i < nombres.length; i++) {
    if (nombres[i].length > nombreMasLargo.length) {
        nombreMasLargo = nombres[i];
    }
}

console.log("");
console.log("El nombre más largo es: " + nombreMasLargo + " (" + nombreMasLargo.length + " caracteres)");
