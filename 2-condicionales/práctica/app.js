//Práctica: Evaluador de Notas con Mensajes Personalizados 

let notaEstudiante = Number(prompt('Introduzca su nota'));
/* Opcional - Para generar notas aleatorias
let notaEstudiante = Math.floor(Math.random()*101)*/

if(notaEstudiante > 0 && notaEstudiante <=100){
    if (notaEstudiante >=90){
        console.log('Excelente');
    } else if (notaEstudiante <=89 && notaEstudiante >=75){
        console.log('Bien');    
    } else if (notaEstudiante <=74 && notaEstudiante >=60){
        console.log('Suficiente');
    } else {
        console.log('No aprobado');
    }
} else {
    console.log('Introduzca una nota válida');
}
