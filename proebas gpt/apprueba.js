let operacion = '';
let numero1 = '';
let numero2 = '';

function agregarNumero(numero) {
    const input = document.getElementById('miInput');
    input.value += numero; // Concatenar el número ingresado
}

function calcular() {
    const input = document.getElementById('miInput').value;

    // Aquí podrías realizar operaciones más complejas,
    // por simplicidad, simplemente mostramos el número ingresado
    alert("Número ingresado: " + input);
}

function limpiar() {
    document.getElementById('miInput').value = '';
}
