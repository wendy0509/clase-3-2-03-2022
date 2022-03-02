const matricula = 900000
let creditos, descuento, total1m;
function leerDatos() {
    creditos = Number(prompt('Ingrese cantidad de creditos'))
}
leerDatos()
calcular(creditos)

function calcular(creditos) {
    if(creditos <= 6 ){
    descuento = matricula * 0.5;
    }
    else if (creditos > 6 && creditos <= 10  ){
        descuento = matricula * 0.25
    }
    else if (creditos > 10 ){
        descuento = 0;
    }
    else{
        alert('Opcion no valida')
    }
    total1m = matricula - descuento
     return total1m
}

console.log(`El valor de la matricula es:${total1m}`)