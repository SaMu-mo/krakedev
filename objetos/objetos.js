probarAtributos = function () {
    let persona = {
        nombre: "Samuel",
        apellido: "Meneses",
        edad: 19,
        estaVivo: true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if (persona.estaVivo == false) {
        console.log("La persona ha muerto.");
    } else {
        console.log("La persona sigue viva.");
    }
}

crearProducto = function () {
    let producto1 = {
        nombre: "Laptop",
        precio: 250.00,
        stock: 100
    }
    let producto2 = {
        nombre: "Monitor",
        precio: 150.00,
        stock: 50
    }
    console.log(producto1.nombre);
    console.log(producto2.precio);
    if(producto1.stock > producto2.stock){
        console.log("El producto más vendido es el laptop.");
    } else if (producto1.stock < producto2.stock)
        console.log("El producto más vendido es el monitor.");
    else{ 
        console.log("Los productos tienen el mismo stock.");
    }


}
