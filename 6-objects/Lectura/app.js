//Introducción a OBJETOS en JS
/* Definición.
Objetos - estructuras de datos que agrupan información relacionadas.
Representan un conjunto de pares clave-valor
clave: id
valor: cualquier tipo: num, strings(cadenas), booleanos, funciones, etc.

Permiten organizar y encapsular información, lo que resulta en un código más limpio.
Ej.
    En lugar de tener múltiples variables para representar propiedades de un estudiante (nombre, edad, calificaciones), podemos encapsular toda esta info en un solo objeto.
*/
/* CREACIÓN DE OBJETOS
Maneras principales de crear objetos:
a. Sintaxis de objeto literal (Objeto literal)
    Conciste en encerrar una lista de propiedades entre llaves. 
    Método intuitivo y directo --> opción preferida para crear objetos simples y estáticos
        Ej. 
        const persona = {
        nombre: "Juan",
        edad: 30,
        ocupacion: "Desarrollador"}
b. Constructor Object
    Técnica útil en donde se necesita más flexibilidad - crear objetos dinámicamente.
    A través del constructor, podemos crear un objeto vacío y luego añadirle propiedades y métodos de forma programática.
    *Usar el constructor Object puede facilitar la creación de objetos en bucles o cuando se trabaja con datos que provienen de fuentes externas , como API. Esto proporciona un enfoque más programático para definir objetos en situaciones donde la estructura puede no ser conocida.
        Ej.
        const coche = new Object();
        coche.marca = "Toyota";
        coche.modelo = "Corolla";
        coche.año = 2020;
c. Usando clases (ES6)
    La introducción de clases en ES6 proporciona una sintaxis más estructurada.
    Al definir una clase, podemos establecer un modelo para crear múltiples instancias del mismo tipo de objeto, cada una con sus propiesa propiedades y métodos.
    Las clases permiten también la implementación de la herencia, lo que significa qu4e podemos crear clases derivadas que heredan característicaws de una clase base.
        Ej.
        class Animal {
        constructor(especie, sonido) {
            this.especie = especie;
            this.sonido = sonido;
        }
        hacerSonido() {
            console.log(this.sonido);
        }
        }
        const perro = new Animal("Perro", "Guau");
*/
/*ACCESO A PROPIEDADES
a. Notación de punto:
    Es la más común
    Ej.
    console.log(persona.nombre);
b. Notación de corchetes:
    Ej.
    console.log(persona["edad"]);
*/
/*MODIFICACIÓN DE PROPIEDADES
Se puede cambiar el valor de una propiedad existente o agregar propiedades.
    Ej.
    persona.edad = 31; // Modificar - Ya tenía otro valor y se cambia pr 31.
    persona.email = "juan@example.com"; // Agregar la propiedad email y su valor.
*/
/*MÉTODOS DE OBJETOS
Un método es una función que se asocia a un objeto.
Al implementa rmétodos, podemos manipular directamente las propiedades del objeto, lo que permite mayor control sobre los datos. Esto es especialmente útil en aplicaciones donde se requiere que las propiedades cambien en respuesta a las acciones del usuario o eventos en la aplicación.
    Ej.
    const calculadora = {
        sumar: function(a, b) {
        return a + b;
        },
        restar: function(a, b) {
        return a - b;
        }
    };

    console.log(calculadora.sumar(5, 3)); // 8

*/

//Ejercicios para practicar
/*
//Crear un objeto "auto" con propiedades como marca, modelo, año, y un método mostrarInfo que imprima la información del auto.


const auto ={
    marca: "Smart",
    modelo: "Fortwo",
    año: 2018,
    color: "rojo",
    mostrarInfo (){
        console.log(`Mi auto deseado es el ${this.marca} ${this.modelo} ${this.año} en color ${this.color}.`);
    }
}

auto.mostrarInfo() // Mi auto deseado es el Smart Fortwo 2018 en color rojo.
//Nota: Cuando estás dentro de un objeto y quieres acceder a sus propiedades dentro de un método, debes usar "this".*/