//Array de objetos de frutas

let carrito = ['manzana', 'naranja', 'pera', 'sandia', 'fresa', 'mango', 'mango', 'mandarina', 'manzana', 'manzana', 'melón', 'uva', 'pera', 'mango', 'mango'];

let cantidad = {};

for(let i = 0; i < carrito.length; i++){
    let totalFruta = carrito[i];
    if (cantidad[totalFruta]) {
        cantidad[totalFruta]++;
    } else {
        cantidad[totalFruta] = 1;
    }
}
console.log("Cantidad de cada fruta:");
for (let fruta in cantidad) { 
    console.log(`${fruta}: ${cantidad[fruta]}`);
}