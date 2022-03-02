
import { suma} from './suma.js'

import { resta} from './resta.js'

import { multiplicacion } from './multiplicacion.js'

import { divicion } from './divicion.js'

import { convercion } from './convercion.js'


let num1;
let num2;
let btnEj1 = document.getElementById('EJERCICIO1')
let btnEj2 = document.querySelector('#EJERCICIO2')
let btnEj3= document.getElementById('EJERCICIO3')
let btnEj4 = document.querySelector('#EJERCICIO4')
let btnEj5= document.getElementById('EJERCICIO5')

let Resultado1 = document.getElementById('ResEj1')
let Resultado2 = document.getElementById('ResEj2')
let Resultado3 = document.getElementById('ResEj3')
let Resultado4 = document.getElementById('ResEj4')
let Resultado5 = document.getElementById('ResEj5')


function leerDatos(){
    num1 = Number(prompt('Ingrese Numero 1'));
    num2 = Number(prompt('Ingrese Numero 2'));
}
function leerDato(){
    num3 = Number(promt('Ingrese Numero'))
}



btnEj1.addEventListener('click', () => {
    leerDatos()
    console.log(suma(num1, num2))
    console.log(`La Suma es ${suma(num1, num2)}`)
    Resultado1.innerHTML = `La Suma es ${suma(num1, num2)}`
})

btnEj2.addEventListener('click', () => {
    leerDatos()
    console.log(resta(num1, num2))
    console.log(`La Resta es ${resta(num1, num2)}`)
    Resultado2.innerHTML = `La Resta es ${resta(num1, num2)}`
})
btnEj3.addEventListener('click', () => {
    leerDatos()
    console.log(multiplicacion(num1, num2))
    console.log(`La Multiplicacion es ${multiplicacion(num1, num2)}`)
    Resultado3.innerHTML = `La Multiplicacion es ${multiplicacion(num1, num2)}`
})

btnEj4.addEventListener('click', () => {
    leerDatos()
    console.log(divicion(num1, num2))
    console.log(`La Divicion es ${divicion(num1, num2)}`)
    Resultado4.innerHTML= `La Divicion es ${divicion(num1, num2)}`
})
btnEj5.addEventListener('click', () => {
    leerDato()
    console.log(convercion(num3))
    console.log(`La Convercion es ${convercion(num3)}`)
    Resultado5.innerHTML= `La Convercion a es ${convercion(num3)}c°`
})














