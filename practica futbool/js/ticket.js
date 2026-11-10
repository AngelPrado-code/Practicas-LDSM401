window.onload = function(){
    var datosGuardados = localStorage.getItem("datosReservacion");
    if(datosGuardados){
        var reservacionRecuperada = JSON.parse(datosGuardados);
        document.getElementById("salidaRfc").innerText = reservacionRecuperada.rfc;
        document.getElementById("salidaCliente").innerText = reservacionRecuperada.cliente;
        document.getElementById("salidaAdultos").innerText = reservacionRecuperada.adultos;
        document.getElementById("salidaNinos").innerText = reservacionRecuperada.ninos;
        document.getElementById("salidaZona").innerText = reservacionRecuperada.zona;
        document.getElementById("salidaSubtotal").innerText = + reservacionRecuperada.subtotal;
        document.getElementById("salidaIva").innerText = + reservacionRecuperada.iva;
        document.getElementById("salidaTotal").innerText = + reservacionRecuperada.total;
    }
    else{
        alert("No hay reservación registrada");
    }
}