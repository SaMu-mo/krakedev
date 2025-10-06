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
    if (producto1.stock > producto2.stock) {
        console.log("El producto más vendido es el laptop.");
    } else if (producto1.stock < producto2.stock)
        console.log("El producto más vendido es el monitor.");
    else {
        console.log("Los productos tienen el mismo stock.");
    }


}

moficarAtributos = function () {
    let cuenta = {
        numero: "12345679",
        saldo: 0.0
    }
    cuenta.saldo = 100
    cuenta.saldo += 10
    console.log(cuenta.saldo);
}

crearCliente = function () {
    let cliente = {
        nombre: "Samuel",
        cedula: "1234567890",
    
}
    let cliente2 = {};
    cliente2.nombre = "Juan";
    cliente2.cedula = "0987654321";

}

probarIncrementarSaldo=function () {
    let cuenta = { numero: "12345679", saldo: 0.0 }
    IncrementarSaldo(cuenta, 100);
    console.log(cuenta.saldo);
}

IncrementarSaldo = function (cuenta, monto ){
    cuenta.saldo += monto;
}

probarDeterminarMayor = function () {
    let persona1 = {nombre: "Samuel", edad: 19};
    let persona2 = {nombre: "Juan", edad: 20} ;
    let mayor = determinarMayor(persona1, persona2);
    if (mayor != null) {
        console.log("La persona con mayor edad es " + mayor.nombre);
    } else {
        console.log("Las personas tienen la misma edad.");
    }
}

determinarMayor = function (persona1, persona2) {
    if (persona1.edad > persona2.edad) {
        return persona1;
    } else if (persona1.edad < persona2.edad) {
        return persona2;
    } else {
        return null;
    }

}

