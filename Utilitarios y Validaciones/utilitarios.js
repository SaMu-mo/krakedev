
mostrarImagen = function (idComponente, rutaImagen) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}
mostrarTexto = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

recuperarInt = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}

mostrarComponente = function (idComponente) {
    document.getElementById(idComponente).style.display = "block";
}

ocultarComponente = function (idComponente) {
    document.getElementById(idComponente).style.display = "none";
}

deshabilitarComponente = function (idComponente) {
    document.getElementById(idComponente).disabled = true;
}

habilitarComponente = function (idComponente) {
    document.getElementById(idComponente).disabled = false;
}

//FUNCIONES EXTRA CREADAS 

recuperarTextoDiv = function (idComponente) {
    let componente;
    let valorLeido;
    componente = document.getElementById(idComponente);
    valorLeido = componente.textContent;   //.textContent para obtener el texto incluyendo los espacios en blanco
    return valorLeido;
}

recuperarIntDiv = function (idComponente) {
    let valorCaja = recuperarTextoDiv(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloatDiv = function (idComponente) {
    let valorCaja = recuperarTextoDiv(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}

// Funciones creadas extra para trabajar 

campoVacio = function (idComponente) {
    let texto = recuperarTexto(idComponente);
    if (texto === "") {
        return true;
    } else {
        return false;
    }
}

esNumero = function (idComponente) {
    let texto = recuperarTexto(idComponente);

    if (texto === "") {
        return false;
    }
    if (isNaN(texto)) {
        return false;
    }
    return true;
}

validarLongitudMinima = function (idComponente, minimo) {
    let valor = recuperarTexto(idComponente);
    return valor.length >= minimo;
}

validarLongitudMaxima = function (idComponente, maximo) {
    let valor = recuperarTexto(idComponente);
    return valor.length <= maximo;
}

limpiarComponente = function (idComponente) {
    document.getElementById(idComponente).innerHTML = "";
}

limpiarCajaTexto = function (idComponente) {
    document.getElementById(idComponente).value = "";
}

esMayusculas = function (idComponente) {
    let texto = recuperarTexto(idComponente);
    if (texto === "") {
        return false;
    }

    for (let i = 0; i < texto.length; i++) {
        let codigo = texto.charCodeAt(i);

        if (codigo >= 97 && codigo <= 122) {
            return false;
        }
    }
    return true;
}

estaEnMinusculas = function (idComponente) {
    let texto = recuperarTexto(idComponente);
    if (texto === "") return false;

    for (let i = 0; i < texto.length; i++) {
        let codigo = texto.charCodeAt(i);

        if (codigo >= 65 && codigo <= 90) {
            return false;
        }
    }
    return true;
}


agregarPersonaEjemplo = function () {
    let valido = true;
    let nombre = recuperarTexto('txtNota1');
   //ejempo de validacion 
    if (nombre.length < 3) {
        mostrarTexto('lblError1', 'Debe tener al menos 3 letras.');
        valido = false;
    }

    let edad = recuperarFloat('txtNota2');
    //ejemplo de validacion
    if (edad < 0 || edad > 100) {
        mostrarTexto('lblError2', 'La edad debe estar entre 0 y 100.');
        valido = false;
    }
    if (valido == true) {
        let nuevaPersona = [];
        nuevaPersona.nombre = nombre;
        nuevaPersona.edad = edad;
        personas.push(nuevaPersona); // cambiar personas segun el nombre del arreglo 
        alert('Persona agregada correctamente.');
        mostrarpersonas();
    }
}

//ejemplo de tabla 
mostrarpersonas = function () {
    

    let cmpTabla = document.getElementById("lblResultado");
    let contenidoTabla = "<table><tr>"
        + "<th>EDAD</th>"
        + "<th>NOMBRE</th>"
        + "</tr>";

    let elementoCliente;
    for (let i = 0; i < personas.length; i++) {//cambiar personas segun el nombre del arreglo
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
} //cambiar el id de txtNota3 segun la caja de texto donde se quiera mostrar el resultado

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
} //cambiar el id de txtNota4 segun la caja de texto donde se quiera mostrar el resultado






