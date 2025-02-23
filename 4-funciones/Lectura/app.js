//Funciones en JS
/*Definición
Una función es un bloque de código diseñado para ejecutar una tarea específica, permiten organizar el código en secciones lógicas y reutilizables.
*/
/*Sintaxis básica para definir una función:

function nombreDeLaFuncion(parametros) {
    // bloque de código a ejecutar
}

* nombreDeLaFuncion: Debe ser descriptivo sobre la tarea que realiza.
* parametros: Variables que se pueden usar dentro de la función para recibir información externa. Puedes tener múltiples parámetros o ninguno.
* bloque de código: Conjunto de instrucciones que se ejecutan cuando se llama a la función.

Si la función tiene parámetros, se deben proporcionar los argumentos adecuados dentro de los paréntesis:
    nombreDeLaFuncion(argumento1, argumento2);

function saludar(nombre) {
    console.log("Hola, " + nombre + "!");
}

saludar("Juan"); // Imprime: Hola, Juan!
*/
/*Valores de retorno - "return"
Una función puede devolver un valor usando la palabra clave return. Cuando se llama a la función, puede capturar este valor en una variable.
function sumar(a, b) {
    return a + b; // Devuelve la suma de a y b
}
let resultado = sumar(3, 5);

console.log(resultado); // Imprime: 8
TIP: Si no se especifica un return, la función devuelve undefined por defecto.
*/
/*Alcance (o scope) de variables

El scope determina la visibilidad de las variables en un programa o script de JS. Hay básicamente dos tipos de alcance:
Variables locales: Declaradas dentro de una función y solo accesibles dentro de esa función.

Variables globales: Declaradas fuera de cualquier función y accesibles en cualquier parte del código.
 

let x = 10; // Variable global
function mostrarX() {
    let y = 5; // Variable local
    console.log("X es: " + x); // Accede a la variable global
    console.log("Y es: " + y); // Accede a la variable local
}
mostrarX();

console.log(x); // Imprime: 10
console.log(y); // Muesta: Error: y is not defined

*/
/*Funciones Anónimas
En JS, puedes definir funciones sin un nombre.
Estas se llaman funciones anónimas y son útiles en ciertas situaciones, como en funciones de callback (callback functions en inglés).

const saludar = function(nombre) {
    console.log("Hola, " + nombre + "!");
};
saludar("María"); // Imprime: Hola, María!
*/
/*Funciones de Flecha
Son una forma más concisa de escribir funciones. Estas funciones no tienen su propio contexto de this(no te preoocupes si no sabes aún qué es this), lo que puede ser útil en ciertos casos.

const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 5)); // Imprime: 20

casos útiles para usar este tipo de funciones:
* Cálculos Matemáticos: Calcular áreas, promedios, etc.
* Procesamiento de Datos: Filtrar o transformar datos en arrays.
* Eventos en el Navegador: Funciones que responden a eventos, como clics de botones o envío de formularios.

*/

/*EJERCICIOS
//Ejercicio 1. Calculadora Simple: Crea una calculadora simple que permita realizar operaciones matemáticas básicas: suma, resta, multiplicación y división.

let opcion = 'sumar';
let calculadora = function(num1, num2){
    if (opcion == 'sumar'){
        return num1 + num2;
    } else if (opcion == 'restar'){
        return num1 - num2;
    } else if (opcion == 'multiplicar'){
        return num1 * num2;
    } else if (opcion == 'dividir'){
        if (num2 === 0) {
            return "Error: División por cero";
        }
            return num1/num2;
    } else{
        console.log('Opción no válida')
    }
    }
console.log(`El resultado de ${opcion}, los números proporcionados es: ${calculadora(5,0)}`)

//Ejercicio 2. Conversor de Temperaturas. Crea una función que convierta temperaturas entre grados Celsius y Fahrenheit.

let celsiusAFahrenheit = function(tempCelsius){
    return (tempCelsius*9/5) + 32;
}
let fahrenheitACelsius = function(tempFahrenheit){
    return (tempFahrenheit-32)*5/9;
}
console.log(celsiusAFahrenheit(0)); // 32
console.log(fahrenheitACelsius(0)); //-17.7778
*/