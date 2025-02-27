// INTRODUCCIÓN AL DOM con JS
/* ¿QUÉ es el DOM?
El DOM (Document Object Model) es una interfaz de programación que permite a los programadores interactuar con el contenido de una página web. 

DOM - Representación estructurada de todo el contenido de una página HTML que convierte los elementos de una página (como etiquetas, atributos y texto) en objetos que podemos manipular con código.

Cuando cargamos una página web en un navegador, este crea un árbol con los elementos de la página. Este árbol es lo que conocemos como el DOM.

Con el DOM, podemos acceder y modificar los elementos HTML y CSS de manera dinámica, lo que hace que las páginas web sean interactivas.
*/
/* ESTRUCTURA DEL DOM
El DOM se organiza como un árbol jerárquico, donde cada elemento HTM es un nodo dentro de este árbol. Aquí te doy un ejemplo de cómo se vería el DOM de un página simple:
<!DOCTYPE html>
<html>
<head>
    <title>Mi página</title>
</head>
<body>
    <h1>Bienvenidos a mi página web</h1>
    <p>Este es un párrafo de ejemplo.</p>
</body>
</html>

El Dom se representaría de la siguiente forma:
Document
│
├── html
│   ├── head
│   │   └── title ("Mi página")
│   └── body
│       ├── h1 ("Bienvenidos a mi página web")
│       └── p ("Este es un párrafo de ejemplo.")
*/
/* MANIPULACIÓN DEL DOM con JS
A través de JS podemos acceder a los elementos HTML (agregar nuevos, eliminar otros y cambiar sus estilos, etc.)
//Selección de elementos
Para empezar a trabajar con el DOM, primero seleccionar los elementos que queremos modificar:
1. Selecciona un elemento por su ID
    let titulo = document.getElementById('miTitulo');
2. Selecciona todos los elementos que tengan una clase específica
    let parrafos = document.getElementsByClassName('miClase');
3. Selecciona todos los elementos de un tipo específico (por ejemplo, todos los <p>).
    let parrafos = document.getElementsByTagName('p');
4. Selecciona el primer elemento que coincide con un selector CSS.
    let primerParrafo = document.querySelector('p');
5. Selecciona todos los elementos que coinciden con un selector CSS.
    let todosLosParrafos = document.querySelectorAll('p');

//Manipulación de elementos
Una vez que hemos seleccionado los elementos,podemos modificarlos:
1. Cambiar el contenido de un elemento
    let titulo = document.getElementById('miTitulo');
    titulo.innerHTML = 'Nuevo Título';  // Cambia el contenido HTML
2. Cambiar los atributos de un elemento: Por ejemplo, podemos cambiar el atributo src de una imagen.
    let imagen = document.getElementById('miImagen');
    imagen.src = 'nueva-imagen.jpg';  // Cambia la imagen
3. Cambiar el estilo de un elemento: Podemos modificar el estilo CSS de un elemento a través de la propiedad style.
    let parrafo = document.getElementById('miParrafo');
    parrafo.style.color = 'red';  // Cambia el color del texto a rojo
    parrafo.style.fontSize = '20px';  // Cambia el tamaño de la fuente
4. Crear nuevos elementos
    let nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = 'Este es un nuevo párrafo.';
    document.body.appendChild(nuevoParrafo);  // Añade el nuevo párrafo al final del cuerpo (body)
5. Eliminar elementos: También podemos eliminar elementos del DOM.
    let parrafo = document.getElementById('parrafoAEliminar');
    parrafo.remove();  // Elimina el párrafo de la página
*/
/* CASOS DE USO COMUNES DEL DOM
1. Formulario interactivo
    let formulario = document.getElementById('miFormulario');
    let mensaje = document.getElementById('mensaje');
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();  // Previene que se recargue la página
        let nombre = document.getElementById('nombre').value;
        mensaje.innerHTML = '¡Gracias por enviar, ' + nombre + '!';

});
*/
/*INCOMPLETO
*/
