//Práctica 3: Array de objetos de frutas

//Declaro una variable llamada carrito que va a contener un array que tenga las frutas.Este array tiene varias frutas repetidas, como "manzana" y "mango".
let carrito = ['manzana', 'naranja', 'pera', 'sandia', 'fresa', 'mango', 'mango', 'mandarina', 'manzana', 'manzana', 'melón', 'uva', 'pera', 'mango', 'mango'];

/*
Nota: OBJETOS EN JS
Un objeto en JavaScript es una estructura de datos que permite almacenar información en forma de clave-valor.
Ejemplo de un objeto simple con tres propiedades:
    let persona = {
        nombre: "Sinaí",
        edad: 28,
        ciudad: "CDMX"
    };
Se puede acceder a los valores de un objeto usando . o [], por ejemplo:
console.log(persona.nombre);  // Dará Sinaí
console.log(persona["nombre"]); //Dará Sinaí - Recuerda que si usas corchetes ([]), la clave debe ir entre comillas cuando la escribes directamente, porque en JavaScript las claves de los objetos siempre son cadenas de texto.

👀Los objetos también pueden contener funciones, por ejemplo:
let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    arrancar: function(){
        console.log("El coche está en marcha");
        }
};

Creo un objeto vacío llamado cantidad.Este objeto servirá para guardar cuántas veces aparece cada fruta en el "carrito", porque quiero un objeto que me diga por ejemplo fruta: manzana, cantidad: 3*/

let cantidad = {};

//Ahora voy a crear el ciclo que va a recorrer todo mi array y me va a contar cuantas frutas hay por su tipo.

//Explicación paso a paso:
// i = 0; En la primera iteración defino como i al primer valor del array, por lo que le pongo que será igual a 0 (sabiendo que 0 es la primera posición en un array)
// i < carrito.length; ahora bien, ¿hasta dónde quiero que me revise mi array? hasta la última posición del array por lo que le digo que la posición (i) debe ser menor a la longitud del array carrito.
//En este caso la longitud del carrito es 15 pero recordemos que como el index empieza en 0, el último valor es 14, por lo tanto i debe ser menor a carrito.length
// i++; es el incremento, una vez iterado el proceso, incrementa en 1 la posición.
for(let i = 0; i < carrito.length; i++){
// Definí la variable totalFruta la cual va a tomar el valor i del carrito. En la primera iteracción será totalFruta = "manzana".
    let totalFruta = carrito[i];
// Sabemos que hay frutas repetidas por lo que defino un if para que me las identifique entonces la condición del if es "Si el objeto cantidad tiene adentro a el elemento i del array carrito, entonces le vas a decir que le agregue +1, sino entonces el valor será 1.
    if (cantidad[totalFruta] == TRUE) {
        cantidad[totalFruta] = cantidad[totalFruta] + 1;
    } else {
        cantidad[totalFruta] = 1;
    }
}
//Ejemplo, para la primera iteración tenemos que totalFruta = "manzana", entonces no entra en la primer condicíón, porque no existe en el objeto cantidad, por lo tanto entra en el else, el cual dice que al objeto cantidad se le va a agregar manzana y esa clave tendrá valor de 1. Quedando así el objeto cantidad : {manzana: 1}. En la iteración 9 que es otra manzana, la condición si sera que cantidad[totalFruta] existe, por lo tanto esto nos dice que al elemento manzana:1 se le va a sumar 1, quedando manzana:2.

//Una vez que haya terminado de revisar todos los elementos del ciclo, vamos a usar un console.log para que "imprima" el titulo de lo que se va a mostrar
console.log("Cantidad de cada fruta:");

/*ahora usaremos un for especial que se utiliza para recorre todas las claves de un objeto cuya sintaxis general es: 
for (let clave in objeto) {
    // Código que se ejecuta en cada iteración

clave → Es una variable que JavaScript crea automáticamente. En cada iteración, contiene una clave del objeto.
objeto → Es el objeto cuyas claves queremos recorrer.
Dentro del for, podemos acceder al valor con objeto[clave].
Ejemplo:
let persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid"
};
for (let clave in persona) {
    console.log(clave + ": " + persona[clave]);
}
}
Nos dará:
nombre: Ana
edad: 25
ciudad: Madrid
*/
//En este caso, cada clave es una fruta por lo que le ponemos fruta, el objeto es cantidad. Entonces estamos diciendo que para cada clave (fruta) del objeto(cantidad) me vas a "imprimir" con console.log "clave: valor de la clave"
for (let fruta in cantidad) { 
    console.log(`${fruta}: ${cantidad[fruta]}`);
}