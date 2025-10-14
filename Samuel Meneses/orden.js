let personas = [
    { nombre: 'Marcos', edad: 18 },
    { nombre: 'Roberto', edad: 15 },
    { nombre: 'Kate', edad: 25 },
    { nombre: 'Diana', edad: 12 },
    { nombre: 'Benja', edad: 5 }
];


agregarPersona = function () {
    let valido = true;
    let nombre = recuperarTexto('txtNota1');
    if (nombre.length < 3) {
        mostrarTexto('lblError1', 'Debe tener al menos 3 letras.');
        valido = false;
    }

    let edad = recuperarFloat('txtNota2');
    if (edad < 0 || edad > 100) {
        mostrarTexto('lblError2', 'La edad debe estar entre 0 y 100.');
        valido = false;
    }
    if (valido == true) { 
        let nuevaPersona = [];
        nuevaPersona.nombre = nombre;
        nuevaPersona.edad = edad;
        personas.push(nuevaPersona);
        alert('Persona agregada correctamente.');
        mostrarpersonas();
    }
    

}

mostrarpersonas = function () {
    deshabilitarComponente("txtNota3");
    deshabilitarComponente("txtNota4")

    let cmpTabla = document.getElementById("lblResultado");
    let contenidoTabla = "<table><tr>"
        + "<th>EDAD</th>"
        + "<th>NOMBRE</th>"
        + "</tr>";

    let elementoCliente;
    for (let i = 0; i < personas.length; i++) {
        elementoCliente = personas[i];
        contenidoTabla += "<tr><td>"
            + elementoCliente.edad + "</td>"
            + "<td>" + elementoCliente.nombre + "</td>"
            + "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

encontrarMayor = function () {
    let personaMayor = personas[0];
    let elementoPersona;
    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i];
        console.log(elementoPersona);
        if (elementoPersona.edad > personaMayor.edad) {
            personaMayor = elementoPersona;
        }
        
    }
    return personaMayor;
}

determinarMayor = function () {
    let mayor = encontrarMayor();
    mostrarTextoEnCaja('txtNota3', mayor.nombre +" " + mayor.edad + " " + "años");
}

encontrarMenor = function () {
    let personaMenor = personas[0];
    let elementoPersona;
    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i];
        console.log(elementoPersona);
        if (elementoPersona.edad < personaMenor.edad) {
            personaMenor = elementoPersona;
        }
        
    }
    return personaMenor;
}

determinarMenor = function () {
    let mayor = encontrarMenor();
    mostrarTextoEnCaja('txtNota4', mayor.nombre +" " + mayor.edad + " " + "años");
}