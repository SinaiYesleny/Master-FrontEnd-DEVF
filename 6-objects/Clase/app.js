// Ejercicios Objetos
// Recurso: MDN: developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objetcts/Object

/* Escriba un programa de Js para enumerar las propiedades de un objeto de JS. Objeto de muestra:

    var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
    };

    values = Object.keys(student); // ['name','sclass', 'rollno'] - da este resultado porque convierte las keys del objeto "student" en un array llamado values.
    console.log("Propiedades de student:");
    for(let i= 0; i < values.length; i++){
        console.log(`${1+i}.- ${values[i]}`);
    }
*/
/* Verifica si la propiedad name se encuentra dentro del siguiente objeto:
  
    var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
    };

    console.log("¿La propiedad name se encuentra dentro del objeto?")
    console.log(student.hasOwnProperty("name"));
*/ 