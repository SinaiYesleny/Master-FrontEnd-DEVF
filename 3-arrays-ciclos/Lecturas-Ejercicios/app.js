//CICLO WHILE en JS - Ejercicios prácticos
    //1. Crea un ciclo while que cuente del 10 al 1 y lo imprima en la consola.
    /*
    //defino la variable contador = 10 porque será el valor con el que voy a iniciar
    let contador = 10
    //en el primer ciclo, contador sabemos que será 10 y como queremos que llegue hasta el 1, la condición que pongo es que el tope sea mayor a cero
    while (contador > 0){
        console.log(contador); //para que me imprima el 10 en el primer ciclo, esto pasa porque sabemos que cumple la condición
        contador--; //después de haberlo impreso pues aquí volvemos a definir el valor de contador quitándole 1 = contador--
    }

*/
    //2. Modifica el ciclo para que imprima solo los números pares.
    /*
    let contador = 10
    while (contador > 0){
        console.log(contador);
        //aquí es donde está la magia: Comenzamos con 10, bien, es par. While lo evalúa y dice "chido, cumple con la condición; lo imprimo". Hasta aquí vamos bien. Ahora, para que sean solo numeros pares sabemos que será de dos en dos, ¿de acuerdo? Definitivamente el 9 no es ok? pues me lo salto y esto lo defino en la sig. linea quitándole al valor de contador original 2.  
        contador= contador-2; //Por lo tanto, en la siguiente iteración el valor del contador valdrá 8. y cuando while lo evalúe también cumplirá la condición, se imprimirá y volverá a definir contador -2. Esto hasta que ya no cumpla de que sea mayor a 0.
    }
    */


//CICLO FOR en JS - Ejercicios prácticos
/*
// Ejercicio: calcular la suma de los números del 1 al 10.
//definimos la variable suma para aquí ir guardando el resultado de la suma en cada ciclo hasta que llegue a suma = suma + 10. Empezamos con 0.
let suma = 0;
//inicialización: el ejercicio es sumar del 1 al 10 (serie aritmética 1+2+3+...+10, por lo que comenzamos con el 1. condición: queremos que llegue hasta el 10, por eso ponemos que sea <=10 y actualización: que cuando termine la iteración se le sume 1 al valor i, es decir que cambie la inicialización al valor que tenía mas el 1, para que así se vuelva evaluar el ciclo for con el nuevo valor.)
    for (let i = 1; i <= 10; i++) {
        //ok bien, si cumple el valor de la condición, entonces a mi variable suma la vas a cambiar por el valor que tenía + el valor de la inicialización. (Sumar el número actual a la suma total)
        suma += i;
        //para imprimir lo que da cada iteración aquí podrían: console.log(suma), pero mejor lo sacamos a fuera del ciclo para que sólo nos dé el resultado final
        //acuérdate que aquí aplica la actualización, ya lo evaluó y cumplio con la condición, lo proceso y ahora a actualiza el valor de la inicialización.
    }
    console.log(suma); //que es 55 :)
*/

//Ejercicios para resolver:

/*
// Contador Inverso: Crea un programa que cuente del 10 al 1 y lo imprima en la consola.

for(let contadorInv = 10; contadorInv >=1; contadorInv--){
    console.log(contadorInv)
}*/

/*
// Suma de pares: Modifica el ciclo para que solo sume los números pares del 1 al 20 y muestre el resultado.

let suma = 0;
for(let i =2; i<= 20; i= i+2){
    suma = suma + i;
    console.log(suma);
}
*/

//ARRAYS en JS
/* los arrays se pueden crear de varias formas, la más común es con los []. 
Índices de los elementos en un Array: representan la posición de un elemento dentro de un array, comienzan en 0
Ejemplos:
//Array de frutas 
let frutas = ['manzana', 'plátano', 'naranja']; //array de 3 elementos cuyo índice va de 0 a 2

// Array de números 
let numeros = [1, 2, 3, 4, 5]; // array con 5 elementos cuyo índice va de 0 a 4

// Array vacío 
let vacio = [];

Acceso a elementos usando índices: 
frutas[1] -- así accedemos al elemento 2 del array frutas (que sería plátano)

Modificación de elementos usando índices:
frutas[1] = 'pera' -- esto modificará el valor del elemento 2 del array frutas y lo convertirá en "pera" así: ['manzana', 'pera', 'naranja']

Añadir elementos al final en el array = push():
frutas.push('kiwi') -- esto añade el elemento 'kiwi' al array frutas en la última posición quedando así:
['manzana', 'pera', 'naranja', 'kiwi']

Añadir elementos al inicio en el array = unshift()

Eliminar el último elemento del array = pop():
frutas.pop() = daría como resultado ['manzana', 'pera', 'naranja'] porque quito 'kiwi'

Eliminar el primer elemento del array shift()

longitud de un Array. La propiedad length devuelve la cantidad total de elementos
frutas.length -- da como resultado 3 (porque son 3 elementos)
frutas[frutas.length - 1] -- seccionemos, la parte de adentro se podría traducir como 3-1 = 2, ahora frutas[2] sería naranja :)


//Iterar sobre un Array: Se puede usar un bucle FOR para recorrer un array. Ejemplo:

let frutas = ['manzana', 'plátano', 'naranja']

for(i=0; i<= frutas.length; i++){
    console.log(frutas[i]);
}


//EJERCICIOS PRÁCTICOS
//1. Crear un Array: Crea un array llamado colores con al menos cuatro colores diferentes.

let colores = ['rojo', 'verde', 'azul', 'amarillo'];

//2. Imprime el segundo color del array.
console.log(colores[1])

//3. Cambia el tercer color a otro color de tu elección.
colores[2]= 'negro'
console.log(colores)

//4. Añade un nuevo color al final del array.
colores.push('dorado')
console.log(colores)

//5. Elimina el primer color del array.
colores.shift()
console.log(colores)
*/