//PROYECTO FUNCIONES EN JS
// Reto: Crear un sistema para hacer el seguimiento de los libros que he leído.
/*Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.
*/

//Creo el array donde se guardarán los libros que ha leido el usuario
let librosLeidos = [];

//Creo la función que agregará el libro al array
function agregarLibro(titulo){
    librosLeidos.push(titulo);
}

//Para que pregunte por los libros al usuario, aquí defino un prompt que le dará valor a "titulo"
let titulo = prompt('Introduce un libro que hayas leído, cuando hayas terminado escribe "LISTO"');

//Para que continúe preguntando por los libros al usuario, defino un while con la condicional de que se rompa cuando el usuario introduzca LISTO.
while(titulo !== 'LISTO'){
    agregarLibro(titulo); //utilizo la función creada anteriormente para agregar el libro al array
    titulo = prompt('Introduce un libro que hayas leído, cuando hayas terminado escribe "LISTO"'); //pregunto al usuario por otro libro o que finalice con "LISTO"

}

//Declaro la función que me imprima los libros que el usuario ha leído
function mostrarLibrosLeidos(){
    for(i=0; i< librosLeidos.length; i++){ //defino for para que recorra todos los elementos del array librosLeidos.
        console.log(librosLeidos[i])
    }
}

//mando a llamar la función:
mostrarLibrosLeidos()