let mensaje = "hola mundo"

console.log(mensaje)

mensaje = "chao mundo"
console.log(mensaje)

const PI = 3.1415
console.log(PI)
//PI = 8
//console.log(PI)

let cantidad = 43
let texto = 'texto de prueba'
let gameover = false
let variableindefinida
console.log(cantidad)
console.log(variableindefinida + gameover)
//console.log( gameover) al console.log le pido que me imprima un objeto, variable

let lista = [3, 6, 8, 9, 3, 7]
console.log(lista[3])
lista[10] = 18
console.log(lista[10])


let persona = {
    nombre: "Luis",
    apellido: "fandiño",
    ciudad: "Bucaramanga",
    correo: "neonwizard.oficial@gmail.com",
    edad: 22
}
console.log(persona.nombre) //console.log(persona) como carpeta de lista y console.log(persona.nombre) para seleccionar solo el nombre

function saludar() {
    console.log("Hola Gente de Youtube")
}
saludar()

let resultado = 16 % 3
console.log(resultado)
let valor = 50
valor += 50
console.log(valor)
x = 0 //este número
x *= 1  //se elige la operación para realizar al numero anterior
console.log(x)

let persona1 = "Luis"
let persona2 = "José"
let valor1 = 22
let valor2 = 40
console.log(persona1 == persona2)
console.log(persona1 != persona2)
console.log(valor1 !== valor2)
console.log(valor1 != valor2)

if (persona1 == persona2) {
    console.log("los valores son iguales")
}

else {
    console.log("los valores son diferentes")
}

let global = "Soy global";
function prueba() {
    let local = "Soy local";
    console.log(global); // "Soy global"
    console.log(local); // "Soy local"
}
prueba();
console.log(local); // Error: local is not defined