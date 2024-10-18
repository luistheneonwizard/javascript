//function sumar(){
   // const a = document.getElementById("numero1")
    //console.log(a)
    //let numero1 = parseInt(a.value)
    //const b = document.getElementById("numero2")
    //let numero2 = parseInt(b.value)
       // document.getElementById("resultado").value = numero1 + numero2
//}

//function sumar(){
    //const numero1 = document.getElementById("numero1")
   // const numero2 = document.getElementById("numero2")

   // let valor1=numero1.value
   // let valor2=numero2.value 

   // let resultado = parseFloat(valor1) + parseFloat(valor2)
   // document.getElementById("resultado").value= resultado
//}

document.getElementById('n1').addEventListener('click', function() {
    document.getElementById('pantalla').value = '1';


});

document.getElementById('n2').addEventListener('click', function() {
    document.getElementById('pantalla').value = '2';
});

document.getElementById('n3').addEventListener('click', function() {
    document.getElementById('pantalla').value = '3';
});

document.getElementById('n4').addEventListener('click', function() {
    document.getElementById('pantalla').value = '4';
});

document.getElementById('n5').addEventListener('click', function() {
    document.getElementById('pantalla').value = '5';
});

document.getElementById('n6').addEventListener('click', function() {
    document.getElementById('pantalla').value = '6';
});

document.getElementById('n7').addEventListener('click', function() {
    document.getElementById('pantalla').value = '7';
});

document.getElementById('n8').addEventListener('click', function() {
    document.getElementById('pantalla').value = '8';
});

document.getElementById('n9').addEventListener('click', function() {
    document.getElementById('pantalla').value = '9';
});

document.getElementById('n0').addEventListener('click', function() {
    document.getElementById('pantalla').value = '0';
});

function agregarNumero(numero) {
    const input = document.getElementById('n1');
    input.value += numero; // Concatenar el número ingresado
}

let operacion = '';
let numero1 = '';
let numero2 = '';

function agregarNumero(numero) {
    const input = document.getElementById('pantalla');
    input.value += numero; // Concatenar el número ingresado
}

function calcular() {
    const input = document.getElementById('pantalla').value;

    // Aquí podrías realizar operaciones más complejas,
    // por simplicidad, simplemente mostramos el número ingresado
    alert("Número ingresado: " + input);
}
