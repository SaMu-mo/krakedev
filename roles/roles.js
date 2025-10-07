let esNuevo = false;

let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1234567896", nombre: "Samuel", apellido: "Perez", sueldo: 1200.0 }
]

mostrarEmpleados = function () {
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr>"
        + "<th>CEDULA</th>"
        + "<th>NOMBRE</th>"
        + "<th>APELLIDO</th>"
        + "<th>SUELDO</th>"
        + "</tr>";

    let elementoCliente;
    for (let i = 0; i < empleados.length; i++) {
        elementoCliente = empleados[i];
        contenidoTabla += "<tr><td>"
            + elementoCliente.cedula + "</td>"
            + "<td>" + elementoCliente.nombre + "</td>"
            + "<td>" + elementoCliente.apellido + "</td>"
            + "<td>" + elementoCliente.sueldo + "</td>"
            + "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}


mostrarFuncionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    deshabilitarComponente("btnGuardar");
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");

    mostrarEmpleados();
}

mostrarFuncionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarFuncionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}


ejecutarNuevo = function () {
    esNuevo = true;
    habilitarComponente("btnGuardar");
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
}


//Crear Empleado

buscarEmpleado = function (cedula) {
    let cedulaBuscada = recuperarTexto("txtCedula");
    for (let i = 0; i < empleados.length; i++) {
        if (cedulaBuscada == empleados[i].cedula) {
            return empleados[i];
        } 
    }
    return null;
}


agregarEmpleado = function (empleado) {
    let cedulaBuscada = buscarEmpleado(empleado.cedula);
    if (cedulaBuscada == null) {
        empleados.push(empleado);
        return true;
    } else {
        alert("El empleado ya existe");
        return false;
    }
}

guardar = function () {

    let valido = true;

    let cedula = recuperarTexto("txtCedula");
    if (cedula === "") {
        mostrarTexto("lblErrorCedula", "Campo obligatorio.");
        valido = false;
    } else if (cedula.length !== 10) {
        mostrarTexto("lblErrorCedula", "La cédula debe tener exactamente 10 dígitos.");
        valido = false;
    } else {
        for (let i = 0; i < cedula.length; i++) {
            let codigo = cedula.charCodeAt(i);
            if (codigo < 48 || codigo > 57) {
                mostrarTexto("lblErrorCedula", "La cédula debe contener solo números.");
                valido = false;
                break;
            }
        }
    }

    let nombre = recuperarTexto("txtNombre");
    if (nombre === "") {
        mostrarTexto("lblErrorNombre", "Campo obligatorio.");
        valido = false;
    } else if (nombre.length < 3) {
        mostrarTexto("lblErrorNombre", "Debe tener al menos 3 letras.");
        valido = false;
    } else {
        for (let i = 0; i < nombre.length; i++) {
            let codigo = nombre.charCodeAt(i);
            if (codigo < 65 || codigo > 90) {
                mostrarTexto("lblErrorNombre", "El nombre debe estar en MAYÚSCULAS (A-Z).");
                valido = false;
                break;
            }
        }
    }


    let apellido = recuperarTexto("txtApellido");
    if (apellido === "") {
        mostrarTexto("lblErrorApellido", "Campo obligatorio.");
        valido = false;
    } else if (apellido.length < 3) {
        mostrarTexto("lblErrorApellido", "Debe tener al menos 3 letras.");
        valido = false;
    } else {
        for (let i = 0; i < apellido.length; i++) {
            let codigo = apellido.charCodeAt(i);
            if (codigo < 65 || codigo > 90) {
                mostrarTexto("lblErrorApellido", "El apellido debe estar en MAYÚSCULAS (A-Z).");
                valido = false;
                break;
            }
        }
    }
    

    let textoSueldo = recuperarTexto("txtSueldo");
    let sueldo = recuperarFloat("txtSueldo");
    if (textoSueldo === "") {
        mostrarTexto("lblErrorSueldo", "Campo obligatorio.");
        valido = false;
    } else if (isNaN(sueldo)) {
        mostrarTexto("lblErrorSueldo", "Debe ingresar un número válido.");
        valido = false;
    } else if (sueldo < 400 || sueldo > 5000) {
        mostrarTexto("lblErrorSueldo", "El sueldo debe estar entre 400 y 5000.");
        valido = false;
    }

    if (!valido) {
        return false;
    }

if (esNuevo === true) { 
    let empleado = {};
    empleado.cedula = cedula;
    empleado.nombre = nombre;
    empleado.apellido = apellido;
    empleado.sueldo = sueldo;


    let resultado = agregarEmpleado(empleado);

    if (resultado === true) {
        mostrarEmpleados();
    } else {
        alert("El empleado con la cedula " + cedula + " ya existe.");
    }

}
deshabilitaropciones();




}

deshabilitaropciones = function () {
    deshabilitarComponente("btnGuardar");
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
}