/* Pasos a seguir:
1. capturar la variable (el botón)
2. crear la función (hacer que el botón cambie de color)
3. escuchar el evento para hacer trabajar la función.
*/

//querySelector --> es un selector que me permite capturar con id, class y etiqueta, incluso selectores avanzados.
const addButton = document.querySelector("#addButton")
let estado = false //creamos esta variable para agarrar el estado del boton: add o aggregado.

function agregarCarrito(){
    /*console.log(addButton.classList); //da el # de clases que tiene addButton
    console.log(addButton.classList.value); //da el valor interno de las clases
    console.log(addButton.classList.length); //da el largo del elemento
    console.log(Array.from(addButton.classList)); // convierte la lista en array y también esta:
    console.log([...addButton.classList]);

    //Agregar o remover etiquetas del elemento:
    addButton.classList.add("btn-green");
    addButton.classList.remove("btn-blue");

    //Para cambiar el texto DENTRO de las etiquetas.
    addButton.textContent = "Agregado 🔥";*/
     
    //Para alternar las clases:
    addButton.classList.toggle("btn-green") //si está la quita y sino la agrega y ya css toma esta última por las propiedades. Pero entonces para cambiar lo que dice en el boton:
    // add - azul y agregado verde, usaremos condicionales:
    //definiendo la variable que dice el estado (add o agregado)
    

    if(estado){
        addButton.textContent = "Add" //si no se le ha dado click al button (porque así lo definimos inicialmente) que diga Add
        estado = false; //cambiamos el estado
    }else{ //si sí, entonces Agregado
        addButton.textContent = "Agregado"
        estado = true; //cambiamos el estado
    }


}

//escuchar la función: cuando le des click, aplicará la función agregarCarrito
addButton.addEventListener("click", agregarCarrito)