let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1234567896",nombre:"Samuel",apellido:"Perez",sueldo:1200.0}
]

mostrarEmpleados = function() {
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla="<table><tr>"
    +"<th>CEDULA</th>"
    +"<th>NOMBRE</th>"
    +"<th>APELLIDO</th>"
    +"<th>SUELDO</th>"
    +"</tr>"; 

    let elementoCliente;
    for(let i=0; i<empleados.length; i++){
        elementoCliente=empleados[i];
        contenidoTabla+="<tr><td>"
        +elementoCliente.cedula+"</td>"
        +"<td>"+elementoCliente.nombre+"</td>"
        +"<td>"+elementoCliente.apellido+"</td>"
        +"<td>"+elementoCliente.sueldo+"</td>"
        +"</tr>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}


mostrarFuncionEmpleado = function() {
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

mostrarFuncionRol = function() {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarFuncionResumen = function() {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}
esNuevo = false;

ejecutarNuevo = function() {
    let esNuevo = true;
    habilitarComponente("btnGuardar");
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
}



