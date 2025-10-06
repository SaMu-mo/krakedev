let clientes = [
    { cedula: 12345678, nombre: 'Juan', edad: 20 },
    { cedula: 87654321, nombre: 'Pedro', edad: 30 },
    { cedula: 55555555, nombre: 'Maria', edad: 25 }
];

buscarCliente = function(cedula) {
    let elementoCliente;
    let clienteEncontrado = null;
    for(let i=0; i<clientes.length; i++){
        elementoCliente=clientes[i];
       if(elementoCliente.cedula == cedula){ 
           clienteEncontrado = elementoCliente;
             break;
        }
    }
    return clienteEncontrado;
}
modificarCliente = function(cliente) {
    let clienteEncontrado = buscarCliente(cliente.cedula);
    if(clienteEncontrado != null){
        clienteEncontrado.nombre = cliente.nombre;
        clienteEncontrado.edad = cliente.edad;
    } 
}

guardarCambios = function() {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarFloat("txtEdad");
    let datoscliente = {};
    datoscliente.cedula = valorCedula;
    datoscliente.nombre = valorNombre;
    datoscliente.edad = valorEdad;

    modificarCliente(datoscliente);

    mostrarClientes();
}




ejecutarBusqueda = function(){
    let valorCedula = recuperarTexto("txtCedulaBusqueda");
    let respuesta = buscarCliente(valorCedula);
    if(respuesta == null){
        alert("El cliente no existe.");
    } else {
        mostrarTextoEnCaja("txtNombre",respuesta.nombre);
        mostrarTextoEnCaja("txtEdad",respuesta.edad);
        mostrarTextoEnCaja("txtCedula",respuesta.cedula);
    }
}
crearCliente = function() {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarFloat("txtEdad");
    let nuevoCliente = {};
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.edad = valorEdad;

    agregarCliente(nuevoCliente);
    
}
    
agregarCliente = function(cliente) {
    let resultado;
    resultado = buscarCliente(cliente.cedula) 
    if(resultado == null){
        clientes.push(cliente);
    } else {
        alert("El cliente ya existe con esta cédula.");
    }
}

modificarCliente1 = function(cliente) {
    
    clientes.push(cliente);
}
    

mostrarClientes = function() {
    let cmpTabla = document.getElementById("tablaClientes");
    let contenidoTabla="<table><tr>"
    +"<th>CEDULA</th>"
    +"<th>NOMBRE</th>"
    +"<th>EDAD</th>"
    +"</tr>"; 
    let elementoCliente;
    for(let i=0; i<clientes.length; i++){
        elementoCliente=clientes[i];
        contenidoTabla+="<tr><td>"+elementoCliente.cedula+"</td>"
        +"<td>"+elementoCliente.nombre+"</td>"
        +"<td>"+elementoCliente.edad+"</td>"
        +"</tr>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}
