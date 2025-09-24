calcularTasaInteres = function(ingresoAnual){
    if(ingresoAnual < 300000){
        return 16;
    }else if(ingresoAnual < 500000){
        return 15;
    }else if(ingresoAnual < 1000000){
        return 14;
    }else if(ingresoAnual < 2000000){
        return 13;
    }else{
        return 12;
    }
}

calcularCapacidadPago = function(edad, ingresos, egresos){
    let sobrante = ingresos - egresos;
    if(edad > 50){
        return sobrante * 0.30;
    }else{
        return sobrante * 0.40;
    }
}

calcularDescuento = function(precio, cantidad){
    let descuento = 0;
    if(cantidad < 3){
        descuento = 0;
    }else if(cantidad <= 5){
        descuento = 0.02;
    }else if(cantidad <= 11){
        descuento = 0.03;
    }else{
        descuento = 0.04;
    }
    return precio * cantidad * (1 - descuento);
}

determinarColesterolLDL = function(nivelColesterol){
    if(nivelColesterol < 100){
        return "Bueno";
    }else if(nivelColesterol < 130){
        return "Casi Bueno";
    }else if(nivelColesterol < 160){
        return "Al Límite";
    }else if(nivelColesterol < 190){
        return "Alto";
    }else{
        return "Muy alto";
    }
}

validarClave = function(clave){
    return clave.length >= 8 && clave.length <= 16;
}

esMayuscula = function(caracter){
    let codigo = caracter.charCodeAt(0);
    return codigo >= 65 && codigo <= 90;
}

esMinuscula = function(caracter){
    let codigo = caracter.charCodeAt(0);
    return (codigo >= 97 && codigo <= 122) || (codigo >= 160 && codigo <= 164);
}

esDigito = function(caracter){
    let codigo = caracter.charCodeAt(0);
    return codigo >= 48 && codigo <= 57;
}

darPermiso = function(notaMatematica, notaFisica, notaGeometria){
    return (notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90);
}

otorgarPermiso = function(notaMatematica, notaFisica, notaGeometria){
    return ((notaMatematica > 90 || notaFisica > 90) && notaGeometria > 80);
}

dejarSalir = function(notaMatematica, notaFisica, notaGeometria){
    return ( (notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) && (notaFisica > notaMatematica) );
}
