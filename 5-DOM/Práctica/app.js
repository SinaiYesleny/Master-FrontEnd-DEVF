//Proyecto Intro al DOM en JS
/* Instrucciones:
1. Crea una página con un formulario que tenga un campo de texto para el comentario y un botón para agregarlo.
2. Cuando el usuario haga clic en el botón, el comentario debe aparecer en la página debajo del formulario.
3. Los estudiantes pueden agregar un botón para eliminar comentarios si lo desean.
4. Los comentarios deben aparecer junto con la fecha y hora de publicación. (opcional)
 */

document.addEventListener('DOMContentLoaded', iniciarApp); //como buena práctica, lo defino para que el código espere a que la página termine de cargar

function iniciarApp() {
    //busco en el html los elementos: input, boton y caja de comentarios
    const comentarioInput = document.getElementById("comentario");
    const addButton = document.getElementById("agregar");
    const listaComentarios = document.getElementById("cajaComentarios");

    //defino un arreglo para guardar los comentarios
    let comentarios = [];

    //defino al escuchador de eventos que hace que cuando se haga click en el botón, ejecute la función agregaro comentario()
    addButton.addEventListener('click', function () {
        agregarComentario(comentarios, comentarioInput, listaComentarios);
    });
}

//Esta es la función agregarcomentario()
function agregarComentario(comentarios, comentarioInput, listaComentarios) {
    const textoComentario = comentarioInput.value;
    
    //verifico que el comentario no esté vacío
    if (textoComentario) {
        //lo defino como objeto para que se guarde tanto el texto como la fecha
        const nuevoComentario = {
            texto: textoComentario,
            fecha: new Date().toLocaleString()
        };

        //al arreglo cometarios[] le voy agregando los comentarios
        comentarios.push(nuevoComentario);
        // agregado el comentario en el arreglo, borro el comentario del input para que quede vacío.
        comentarioInput.value = '';

        // Creo un nuevo elemento <li> para mostrar el comentario en la lista.
        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = nuevoComentario.texto; // Solo mostramos el texto.

        // Agrego el comentario a la lista de comentarios.
        listaComentarios.appendChild(nuevoItem);
        
        //para el boton eliminar, creo un boton que se llame Eliminar 
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = "Eliminar";
        botonEliminar.style.marginLeft = "20px"; // separo el botón
        botonEliminar.style.border = "5px" //cambié el borde para que no se viera tan grueso jeje
        
        // evento para eliminar el comentario
        botonEliminar.addEventListener('click', function () {
        listaComentarios.removeChild(nuevoItem); // Elimina el comentario cuando le doy click
});

// finalment agrergo el botón al comentario
nuevoItem.appendChild(botonEliminar);

    }
}

