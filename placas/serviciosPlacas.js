validarEstructura = function (placa) {
    let valido = true;
    let errores = "";
    if (placa.length !== 7 && placa.length !== 8) {
        errores += "La placa debe tener 7 u 8 caracteres. ";
        valido = false;
    }

    if (!esMayuscula(placa.charAt(0))) {
        errores +="El primer caracter debe ser una letra mayuscula. ";
        valido = false;
    }

    if (!esMayuscula(placa.charAt(1))) {
        errores+="El segundo caracter debe ser una letra mayuscula. ";
        valido = false;
    }

    if (!esMayuscula(placa.charAt(2))) {
        errores+="El tercer caracter debe ser una letra mayuscula. ";
        valido = false;
    }

    if (!esGuion(placa.charAt(3))) {
        errores+="El cuarto caracter debe ser un guion. ";
        valido = false;
    }

    if (!esDigito(placa.charAt(4))) {
        errores+="El quinto caracter debe ser un digito. ";
        valido = false;
    }

    if (!esDigito(placa.charAt(5))) {
        errores+="El sexto caracter debe ser un digito. ";
        valido = false;
    }

    if (!esDigito(placa.charAt(6))) {
        errores+="El septimo caracter debe ser un digito. ";
        valido = false;
    }

    if (placa.length === 8 && !esDigito(placa.charAt(7))) {
        errores+="El octavo caracter debe ser un digito. ";
        valido = false;
    }
    mostrarTexto("lblErrores", errores);
    return errores;
}
obtenerTipoVehiculo = function (placa) {
    if (placa.charAt(1)=="A" || placa.charAt(1)=="Z") {
        return "Vehiculo Comercial";
    }
    if (placa.charAt(1)=="E" ){
        return "Vehiculo Gubernamental";
    }
    if (placa.charAt(1)=="M" ){
        return "Vehiculo Municipal";
    }
    if (placa.charAt(1)=="X" ){
        return "Vehiculos de uso Oficial";
    }
    if (placa.charAt(1)=="S" ){
        return "Vehiculos del gobierno provincial";
    }
    return "Vehiculo Particular";
}
