calcularSubtotal = function (precio, cantidad) {
    let subtotal;
    subtotal = precio * cantidad;
    return subtotal;
}

calcularIVA = function (monto) {
    let iva;
    iva = (monto * 12) / 100;
    return iva;
}

calcularDescuentoPorVolumen = function (subtotal, cantidad) {
    let porcentaje;
    let descuento;
    porcentaje = 0;

    if (cantidad >= 3 && cantidad <= 5) {
        porcentaje = 3;
    }
    if (cantidad >= 6 && cantidad <= 11) {
        porcentaje = 4;
    }
    if (cantidad >= 12) {
        porcentaje = 5;
    }
    descuento = (subtotal * porcentaje) / 100;
    return descuento;
}

calcularTotal = function (subtotal, descuento, iva) {
    let total;
    total = subtotal - descuento + iva;
    return total;
}

calcularValorTotal = function () {
    let producto;
    let cantidad;
    let precio;

    let subtotal;
    let descuento;
    let iva;
    let total;

    producto = recuperarTexto("txtProducto");
    cantidad = recuperarFloat("txtCantidad");  
    precio = recuperarFloat("txtPrecio");

    if ( esProductoValido(producto, "errProducto") & esCantidadValida(cantidad, "errCantidad") & esPrecioValido(precio, "errPrecio")) {
        subtotal = calcularSubtotal(precio, cantidad);
        descuento = calcularDescuentoPorVolumen(subtotal, cantidad);
        iva = calcularIVA(subtotal);
        total = calcularTotal(subtotal, descuento, iva);

        mostrarTexto("lblSubtotal", subtotal.toFixed(2));
        mostrarTexto("lblDescuento", descuento.toFixed(2));
        mostrarTexto("lblValorIVA", iva.toFixed(2));
        mostrarTexto("lblTotal", total.toFixed(2));
    } else {
        mostrarTexto("lblSubtotal", "0.0");
        mostrarTexto("lblDescuento", "0.0");
        mostrarTexto("lblValorIVA", "0.0");
        mostrarTexto("lblTotal", "0.0");
    }
}


esProductoValido = function (texto, idError) {
    let hayError;
    hayError = false;

    if (texto == null) {
        mostrarTexto(idError, "*CAMPO OBLIGATORIO");
        hayError = true;
    }
    if (hayError == false) {
        mostrarTexto(idError, "");
    }
    return !hayError;
}

esCantidadValida = function (valor, idError) {
    let hayError;
    hayError = false;

    if (isNaN(valor)) {
        mostrarTexto(idError, "Debe ser un numero");
        hayError = true;
    }
    if (hayError == false) {
        mostrarTexto(idError, "");
    }
    return !hayError;
}

esPrecioValido = function (valor, idError) {
    let hayError;
    hayError = false;

    if (isNaN(valor)) {
        mostrarTexto(idError, "Debe ser un numero");
        hayError = true;
    }
    if (hayError == false) {
        mostrarTexto(idError, "");
    }
    return !hayError;
}


limpiar = function () {
    document.getElementById("txtProducto").value = "";
    document.getElementById("txtCantidad").value = "";
    document.getElementById("txtPrecio").value = "";

    mostrarTexto("errProducto", "");
    mostrarTexto("errCantidad", "");
    mostrarTexto("errPrecio", "");

    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
}
