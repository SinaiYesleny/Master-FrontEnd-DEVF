// Es la manera más común de crear una función | todo el documento la reconoce independientemente donde se haya declarado
/* function saludame(){  
}

//En este caso voy a ocupar esta forma arrow function | la reconoce apartir de este punto
let saludame = () => {
    alert("Hola Mundo")
}*/

/*
//1. captura de elementos en variables
const parrafo = document.getElementById("txt ")

//2. creación de funciones
let modificar = () => {
    parrafo.innerText = "JavaScript DOM"
    parrafo.style.color = "tomato"
    parrafo.style.fontSize = "2rem"
    parrafo.style.fontStyle = "italic"
}

//Captura de elementos por tag (etiqueta) y class
const listaElements = document.getElementsByTagName("li")
const listaElements = document.getElementsByClassName("list")
*/

//captura el comentario del usuario
const inputComment = document.getElementById("inputComentario")
//captura el botón
const btnComment = document.getElementsByTagName("button")[0] //agregamos la posicion porque sino accedería al html colection y no al elemento botón. Buscamos acceder al elmento para aplicar más tarde el innerhtml

const boxComments = document.getElementsByClassName("comentarios")[0]

    //todas las funciones tienen los pointer event, este event está capturando todo lo que pasa cuando doy clickl
let comentar = (event) => {
    event.preventDefault() //previene la acción por defecto en formularios = que se actualice el sitio al dar click en comentar
    console.log(inputComment.value)
    boxComments.innerHTML += `<li>${inputComment.value}</li>`
    inputComment.value = "" //paravaciar la cajita una vez que escribiste
}

btnComment.addEventListener("click", comentar)