function saludar(nombre) {
    return "Hola," + nombre;
}

let saludo = saludar("Luis");
console.log(saludo); //"Hola Camila"

let sumar = function (a, b) {
    return a + b
};
console.log(sumar(8, 4)); //10


let global = "Me too";

function prueba() {
    let local = "I want ...";
    console.log(global); // "im better"
    console.log(local); // "i want"
}

prueba();


for (let i = 0; i < 9; i++) {
    console.log("Número: " + i);
}

let i = 0;
while (i < 5) {
    console.log("Número: " + i);
    i++;
}

i = 0;
do {
console.log("Número: " + i);
i++;
} while (i < 5);

asistencia = 39
trabajos = 2
if(asistencia == 1 && numero)
    {console.log("recibe subsidio")}
else{
    console.log("no recibe subsidio")
}

let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
}

document.getElementById("miElemento");
document.getElementsByClassName("miClase");
document.querySelector(".miClase");
            
function cambiar(){
    document.getElementById("miElemento").innerHTML = "holagente";
document.querySelector("h1").textContent = "Nuevo título";

}
