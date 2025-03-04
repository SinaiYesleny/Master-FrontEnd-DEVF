//1.
//seleccionando el número del rango
const charLength = document.querySelector("#charLength");
//selecciono input de rango (la barrita)
const lengthRange = document.querySelector("#lengthRange");

/*Recordando:
- Evento: Cualquier acción que ocurre en la página (click, change..) y que JavaScript puede detectar.
- Objeto del evento: Cuando un evento ocurre, JavaScript crea un objeto con toda la información sobre lo que pasó. Este objeto se pasa automáticamente a la función del event listener. Normalmente se define como e o event.
*/
//evento para que cambie el # de charlenght al mover la barrita
//defino e como parámetro para que saque el value del lenghtRange - guarda la info del elemento que estás modificando
lengthRange.addEventListener("change", function (e){
    charLength.textContent = e.currentTarget.value
});

//2.Variables
// Captura del elemento donde aparece la contraseña
const passwordOutput = document.querySelector("#passwordOutput")
// Captura del boton de generar
const generateButton = document.querySelector("#generateButton")
// Captura del boton de copiar
const copyButton = document.querySelector("#copyButton")

//5. Generar arrays para letters, numbers y symbols
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

//6. Crear un objeto "utils" para crear las funciones que generen los números aleatorios.
//utils es un objeto que contiene funciones, le llamo así por buena práctica.
//Math.random genera un número aleatorio entre 0 y 1 (no incluido), por lo tanto * (max - min + 1) + min
const utils = {
    generateRandomBetween: function (min, max){
        return Math.floor(Math.random() * (max - min + 1) + min); //genera un número entero aleatorio entre min y max, asegurando que siempre esté dentro de ese rango.  
    },
    getCharsFromArray: function (array, num){
        let chars = ""
        for (let i = 0; i < num; i++) {
            const randNumber = utils.generateRandomBetween(0, array.length-1)
            
            if(typeof array[randNumber] === "string"){
                randNumber % 2 === 0 ? chars += array[randNumber].toLowerCase(): chars += array[randNumber].toUpperCase()
            }else{
                chars += array[randNumber]
        }
    }
        return chars
}
}

//3. Evento y la función del botón generate
//función para generar la contraseña
function generatePassword() {
    //4. Capturar elementos que condicionan la contraseña
    //capturo el value de la barrita
    const passLength = parseInt(lengthRange.value,10);
    //la contraseña está condicionada por las casillas include numbers y include symbols, por lo tanto defino las variables de las casillas. Están dentro de la función porque solo van a ocurrir cuando se haga click en el botón generate.
    const includeNumbers = document.querySelector("#numbers").checked;
    const includeSymbols = document.querySelector("#symbols").checked;
    //nota: el .checked significa que querySelector me va a decir si la casilla está marcada.
    //verificando en consola que capturé los tres valores: console.log(passLength, includeNumbers, includeSymbols);

    //7. Guardar la contraseña generada
    if(!passLength === 0){
        passwordOutput.value = ""; 
        return
    }

    let tempPassword = "";
    //si el check numbers es true, entonces la contraseña tendrá números
    if(includeNumbers){
        tempPassword += utils.getCharsFromArray(numbers, utils.generateRandomBetween(3, passLength/3));
    }
    //si el check symbols es true, entonces la contraseña tendrá simbolos
    if(includeSymbols){
        tempPassword += utils.getCharsFromArray(symbols, utils.generateRandomBetween(3, passLength/3));
    }

    // 8. incluimos las letras en la contraseña
    tempPassword += utils.getCharsFromArray(letters, passLength - tempPassword.length); //no está dentro de un if porque siempre se va a ejecutar, no importa si la casilla de numbers o de symbols están marcadas o no. Ahora, le puse ese largo porque passLength - tempPassword.length me va a decir cuantos caracteres le falta por generar.

    //9. Randomizar la contraseña: generar una contraseña que alterne el orden de números, simbolos y letras
    // split() convierte el string en un array, con el separador que le pongamos.
    // sort() ordena el array, con el criterio que le pongamos.
    passwordOutput.value = tempPassword.split("").sort(() => Math.random() - 0.5).join("")
}
//evento del botón generate
generateButton.addEventListener("click", generatePassword);

//10. Copiar la contraseña
function copiarPassword() {
    if(passwordOutput.value === "") return; //si la contraseña está vacía, no copiamos nada
        const psCopy = passwordOutput.value;
        navigator.clipboard.writeText(psCopy);
}

copyButton.addEventListener("click", copiarPassword())

//11. Barra de seguridad

//La barra se dividirá en tres: low, medium y strong dependerá del número de caracteres y del uso de caracteres especiales.

//definiendo la variable
const strengthBar = document.querySelector("#strengthIndicator");

//función para calcular la barra de seguridad
function calcularStrength() {
let strength = 0; //creo la variable para calcular la barra de seguridad, comienzo en 0 porque no se ha generado ninguna contraseña.

//Estas son las condicionales para calcular la barra de seguridad
//Si la contraseña tiene 10 o más caracter especial, entonces strong valdrá 1.
if(passwordOutput.value.length >= 10){
    strength += 1;
};

//Si la contraseña tiene al menos 5 caracteres especiales, entonces strong valdrá 1.
if(passwordOutput.value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)){
    strength += 1;
};

//
if (strength === 0) strengthBar.value = 30;  // Débil
else if (strength === 1) strengthBar.value = 60;  // Media
else strengthBar.value = 100;  // Fuerte

}

//evento para calcular la barra de seguridad
generateButton.addEventListener("click", function() {
    generatePassword();
    calcularStrength();
});