validarPlaca = function () {
    let placa;
    let erroresEstructura;
    let Provincia
    let tipoDeVehiculo;
    placa = recuperarTexto("txtPlaca");   

    Provincia = obtenerProvincia(placa);
    if (obtenerProvincia(placa)=="Provincia desconocida") {
    mostrarTexto("lblProvincia", "Provincia Incorrecta");
    } else {
    mostrarTexto("lblProvincia", Provincia);
    }
    tipoDeVehiculo = obtenerTipoVehiculo(placa);
    if (obtenerTipoVehiculo(placa)=="Vehiculo Particular"){
        mostrarTexto("lblTipoVehiculo", "Vehiculo Particular");
    }
    else{
        mostrarTexto("lblTipoVehiculo", tipoDeVehiculo);
    }
    
    errores = validarEstructura(placa); 
    if (errores == "") {
        mostrarTexto("lblResultado", "ESTRUCTURA VALIDA");
        
    } else {
        mostrarTexto("lblResultado", "ESTRUCTURA INCORRECTA");
        errores = document.getElementById("lblErrores").innerText;
    }
}
obtenerProvincia = function (placa) {
    if (placa.charAt(0)=="A") {
        return "Azuay";
    }
    if (placa.charAt(0)=="B") {
        return "Bolivar";
    }  
    if (placa.charAt(0)=="C") {
        return "Carchi";
    }
    if (placa.charAt(0)=="U") {
        return "Cañar";
    }
    if (placa.charAt(0)=="X") {
        return "Cotopaxi";
    }
    if (placa.charAt(0)=="H") {
        return "Chimborazo";
    }
    if (placa.charAt(0)=="O") {
        return "El Oro";
    }
    if (placa.charAt(0)=="E") {
        return "Esmeraldas";
    }
    if (placa.charAt(0)=="W") {
        return "Galapagos";
    }
    if (placa.charAt(0)=="G") {
        return "Guayas";
    }
    if (placa.charAt(0)=="I") {
        return "Imbabura";
    }
    if (placa.charAt(0)=="L") {
        return "Loja";
    }
    if (placa.charAt(0)=="R") {
        return "Los Rios";
    }
    if (placa.charAt(0)=="M") {
        return "Manabi";
    }
    if (placa.charAt(0)=="V") {
        return "Morona Santiago";
    }
    if (placa.charAt(0)=="N") {
        return "Napo";
    }
    if (placa.charAt(0)=="S") {
        return "Pastaza";
    }
    if (placa.charAt(0)=="P") {
        return "Pichincha";
    }
    if (placa.charAt(0)=="K") {
        return "Sucumbios";
    }
    if (placa.charAt(0)=="T") {
        return "Tungurahua";
    }
    if (placa.charAt(0)=="Q") {
        return "Orellana";
    }   
    if (placa.charAt(0)=="Z") {
        return "Zamora Chinchipe";
    }
    if (placa.charAt(0)=="Y") {
        return "Santa Elena";
    }
    return "Provincia desconocida";
    
    
}
