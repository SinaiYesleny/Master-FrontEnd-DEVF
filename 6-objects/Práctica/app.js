// PROYECTO OBJETOS EN JS   |   |
//Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.

const libro = {
    titulo:"Viajar cambiará tu vida",
    autor: "Alan Estrada",
    año:2023,
    estado:"Disponible",
    capitulos: ['Capítulo 1', 'Capítulo 2', 'Capítulo 3'],
    describirLibro(){
        return `Este libro está titulado como ${this.titulo}, escrito por el autor ${this.autor} en el año ${this.año}. En el sistema se encuentra ${this.estado}.`
    },
    agregarCapitulo(capitulo){
        this.capitulos.push(capitulo);

    },
    eliminarCapitulo(nombreCapitulo) {
        for (let i = 0; i < this.capitulos.length; i++) {
            if (this.capitulos[i] === nombreCapitulo) { 
                this.capitulos[i] = "Eliminado";
                console.log(`Se eliminó: ${nombreCapitulo}`);
                return; 
            }
        }
        console.log(`El capítulo "${nombreCapitulo}" no se encontró.`);
    }
   }
//Imprimo la descripción del libro
console.log(libro.describirLibro());

// Agrego un capítulo
libro.agregarCapitulo("Capítulo 4");
console.log(libro.capitulos); 

//Elimino un capítulo
libro.eliminarCapitulo("Capítulo 1");
console.log(libro.capitulos);
