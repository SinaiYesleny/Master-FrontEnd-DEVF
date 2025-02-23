//Declarar función
function suma(num1, num2) {
    let total = num1 + num2
    return `El total de la suma es: ${total}`;
}

let result = suma(5,5)

console.log(suma(5,5))

// Bases para la Práctica

let cajaDeFrutas = []
function agregarFruta (fruta){
    cajaDeFrutas.push(fruta)
}

function mostrarFrutas (array){
    for(let i = 0; i < array.length; i++ ){
        document.write(`${i+1}.- ${array[i]}`)
    }
}