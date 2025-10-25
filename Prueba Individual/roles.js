let esNuevo = false;

let empleados = [
    { cedula: "1714616123", nombre: "John Cena", apellido: "JHCena@gmail.com"  },
    { cedula: "0914632123", nombre: "Luisa Gonzalez", apellido: "GonzalezLU@yahoo.com" },
    { cedula: "1234567896", nombre: "Samuel Perez", apellido: "PerezA@gmail.com"}
]

mostrarEmpleados = function () {
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr>"
        + "<th>ID</th>"
        + "<th>NOMBRE COMPLETO</th>"
        + "<th>CORREO</th>"
        + "</tr>";

    let elementoCliente;
    for (let i = 0; i < empleados.length; i++) {
        elementoCliente = empleados[i];
        contenidoTabla += "<tr><td>"
            + elementoCliente.cedula + "</td>"
            + "<td>" + elementoCliente.nombre + "</td>"
            + "<td>" + elementoCliente.apellido + "</td>"
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
    deshabilitarComponente("btnGuardarRol")
    mostrarRoles();
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

    for (let i = 0; i < empleados.length; i++) {
        if (cedula == empleados[i].cedula) {
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
    } 
    else {
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
    } else if (!esMayuscula(nombre.charAt(0))) {
        mostrarTexto("lblErrorNombre", "Debe empezar con Mayuscula");
        valido = false;
    } else {
        for (let i = 0; i < nombre.length; i++) {
            let codigo = nombre.charCodeAt(i);
            if (codigo < 65 || codigo > 122) {
                mostrarTexto("lblErrorNombre", "El nombre solo puede tener letras");
                valido = false;
                break;
            }
        }
    }


    let apellido = recuperarTexto("txtApellido");
    if (apellido === "") {
        mostrarTexto("lblErrorApellido", "Campo obligatorio.");
        valido = false;
    
    } else {
        let arroba = false
        for (let i = 0; i < apellido.length; i++) {
            let codigo = apellido.charCodeAt(i);
            if (codigo == 64) {
                arroba = true
                //mostrarTexto("lblErrorApellido", "Debe contener una arroba su correo ");
                
            
            }
        }
            if(arroba == false ) {
                mostrarTexto("lblErrorApellido", "Debe contener una arroba su correo ");
                valido = false
        
    }
}


    

    if (!valido) {
        return false;
    }

    if (esNuevo === true) {

        if (buscarEmpleado1(cedula) !== null) {

            alert("El empleado con la cédula " + cedula + " ya existe.");
            return false;
        }
        let empleado = {};
        empleado.cedula = cedula;
        empleado.nombre = nombre;
        empleado.apellido = apellido;
        empleados.push(empleado);
        alert("Empleado agregado correctamente.");
        mostrarEmpleados();
        deshabilitaropciones();
        esNuevo = false;


    } else {
        let trabajador = buscarEmpleado1(cedula);
        if (trabajador === null) {
            alert("El empleado no existe.");
            return false;
        }
        trabajador.nombre = nombre;
        trabajador.apellido = apellido;
        alert("Empleado modificado correctamente.");
        mostrarEmpleados();
        deshabilitaropciones();
    }
}
esMayuscula = function (caracter) {
    let letra
    letra = caracter.charCodeAt(0);
    if (letra >= 65 && letra <= 90) {
        return true;
    } else {
        return false;
    }
}
deshabilitaropciones = function () {
    deshabilitarComponente("btnGuardar");
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
}



ejecutarBusqueda = function () {
    let cedulaBuscada = recuperarTexto("txtBusquedaCedula");
    let empleado = buscarEmpleado1(cedulaBuscada);
    if (empleado === null) {
        alert("El empleado no existe.");
    }

    mostrarTextoEnCaja("txtCedula", empleado.cedula);
    mostrarTextoEnCaja("txtNombre", empleado.nombre);
    mostrarTextoEnCaja("txtApellido", empleado.apellido);
    deshabilitarComponente("txtCedula");
    habilitarComponente("btnGuardar");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    esNuevo = false;
}


buscarEmpleado1 = function (cedula) {

    for (let i = 0; i < empleados.length; i++) {
        if (cedula == empleados[i].cedula) {
            return empleados[i];
        }
    }
    return null;
}

limpiar = function () {
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    mostrarTextoEnCaja("txtBusquedaCedula", "");
    mostrarTextoEnCaja("lblErrorCedula", "")
    mostrarTextoEnCaja("lblErrorNombre", "")
    mostrarTextoEnCaja("lblErrorApellido", "")

    deshabilitaropciones();
    esNuevo = false;
}


// Funciones de roles parte 4 

buscarPorRol = function () {
    let busqueda = recuperarTexto("txtBusquedaCedulaRol");
    let encontrado = false;
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].cedula == busqueda) {
            mostrarTexto("infoNombre", empleados[i].nombre + " " + empleados[i].apellido);
            mostrarTexto("infoSueldo", empleados[i].sueldo);
            mostrarTexto("infoCedula", empleados[i].cedula);
            encontrado = true;
            break;
        }
    }
    if (!encontrado) {
        alert("Empleado no encontrado.");
    }
}







calcularRol = function () {
    let sueldo = recuperarTextoDiv("infoSueldo");
    let descuento = recuperarFloat("txtDescuentos")
    if (isNaN(descuento)) {
        mostrarTexto("lblErrorDescuentos", "El descuento debe ser un número válido.")
    } else if (descuento < 0 || descuento > sueldo) {
        mostrarTexto("lblErrorDescuentos", "El descuento debe ser valido y no debe exceder el sueldo.")
    }
    let aporte = calcularAporteEmpleado(sueldo);
    mostrarTexto("infoIESS", aporte);
    let valorPagar = calcularValorAPagar(sueldo, aporte, descuento);
    mostrarTexto("infoPago", valorPagar);
    habilitarComponente("btnGuardarRol")

}

let roles = [];

buscarRol = function (cedula) {
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].cedula == cedula) {
            return roles[i];
        }
    }
    return null;
}

agregarRol = function (rol) {
    let nuevoRol = buscarRol(rol.cedula);
    if (nuevoRol == null) {
        roles.push(rol);

    } else {
        alert("El rol ya existe");

    }
}

calcularAporteEmpleador = function (sueldo) {
    let aporteEmpleador = sueldo * 11.15 / 100;
    return aporteEmpleador;
}

guardarRol = function () {
    let sueldo = recuperarFloatDiv("infoSueldo");
    let valoraPagar = recuperarFloatDiv("infoPago");
    let cl = recuperarTextoDiv("infoCedula");
    let nombre = recuperarTextoDiv("infoNombre");
    let aportealIess = recuperarFloatDiv("infoIESS");


    let aporteEmpleador = calcularAporteEmpleador(sueldo);

    let rol = {
        cedula: cl,
        nombre: nombre,
        sueldo: sueldo,
        aporteEmpleador: aporteEmpleador,
        aportealIess: aportealIess,
        valoraPagar: valoraPagar
    };
    agregarRol(rol);
    alert("Rol agregado correctamente.");
    deshabilitarComponente("btnGuardarRol");
    mostrarRoles();
    mostrarTotales();
}



mostrarRoles = function () {
    let cmpTabla = document.getElementById("tablaResumen");
    let contenidoTabla = "<table><tr>"
        + "<th>CEDULA</th>"
        + "<th>NOMBRE</th>"
        + "<th>VALOR A PAGAR</th>"
        + "<th>APORTE EMPLEADOR</th>"
        + "<th>APORTE EMPLEADO</th>"
        + "</tr>";
    let elementoCliente;
    for (let i = 0; i < roles.length; i++) {
        elementoCliente = roles[i];
        contenidoTabla += "<tr><td>" + elementoCliente.cedula + "</td>"
            + "<td>" + elementoCliente.nombre + "</td>"
            + "<td>" + elementoCliente.valoraPagar + "</td>"
            + "<td>" + elementoCliente.aporteEmpleador + "</td>"
            + "<td>" + elementoCliente.aportealIess + "</td>"
            + "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}


mostrarTotales = function () {
    let totalEmpleado = 0;
    let totalEmpleador = 0;
    let totalAPagar = 0;
    for (let i = 0; i < roles.length; i++) {
        totalEmpleado += roles[i].aportealIess;
        totalEmpleador += roles[i].aporteEmpleador;
        totalAPagar += roles[i].valoraPagar;
    }
    let totalNomina = totalAPagar + totalEmpleado + totalEmpleador;
    mostrarTexto("infoAporteNomina", totalNomina);
    mostrarTexto("infoAporteEmpleado", totalEmpleado);
    mostrarTexto("infoAporteEmpresa", totalEmpleador);
    mostrarTexto("infoTotalPago", totalAPagar);

}