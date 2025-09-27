validarPassword = function (password) {
    let errores = ""
    if (password.length < 8) {
        errores = errores + "Tu password debe tener al menos 8 caracteres. "
    }
    if (password.length > 16) {
        errores = errores + "Tu paswword no puede pasar de 16 caracteres. "
    }

    let tieneMayuscula = false
    let tieneDigito = false
    let tieneEspecial = false

    for (let i = 0; i < password.length; i++) {
        let contrasena = password.charAt(i);

        if (esMayuscula(contrasena)) {
            tieneMayuscula = true
        } 

        if (esDigito(contrasena)) {
            tieneDigito = true
        }
        if (esEspecial(contrasena)) {
            tieneEspecial = true
        }
    }
        if(!tieneMayuscula){
            errores = errores + "Debe contener al menos una MAYUSCULA. "
        }
        if(!tieneDigito){
            errores = errores + "Debe contener al menos un DIGITO. "
            
        }
        if(!tieneEspecial){
            errores = errores + "Debe contener al menos un Caracter especial como '*' '-' '_' "
        }
    
    return errores
}
ejecutarValidacion = function () {
    let clave = recuperarTexto("txtPassword");

    let errores = validarPassword(clave);

    if (errores === "") {
        mostrarTexto("lblResultado", "Password correcto ");
    } else {
        mostrarTexto("lblResultado", errores);
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
    esDigito = function (caracter) {
        let digito
        digito = caracter.charCodeAt(0);
        if (digito >= 48 && digito <= 57) {
            return true;
        } else {
            return false;
        }
    }
    esEspecial = function (caracter) {
        if (caracter === "*" || caracter === "-" || caracter === "_") {
            return true;
        } else {
            return false;
        }
    }