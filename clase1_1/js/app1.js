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

let pantalla = document.getElementById("pantalla")
let numero1 =0
let numero2 =0
let operacion = ""

function operaciones(op){
    numero1=pantalla.value
    pantalla.value =""
    operacion = op
   
}

function igual(){
    numero2=pantalla.value
    if (operacion=="suma"){
        pantalla.value=parseFloat(numero1) + parseFloat(numero2)
    }else if(operacion=="multiplicacion"){
        pantalla.value=parseFloat(numero1) * parseFloat(numero2)
    }else if(operacion=="division"){
        pantalla.value=parseFloat(numero1) / parseFloat(numero2)
    }else{
        pantalla.value=parseFloat(numero1) - parseFloat(numero2)
    }


}

function borrar (){
    pantalla.value= ""
}

function n(num){

    if(pantalla.value != ""){
        pantalla.value += num
    }else{
        pantalla.value = num
    }
}
