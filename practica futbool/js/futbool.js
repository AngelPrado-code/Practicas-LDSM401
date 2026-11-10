var reservacion = {
    rfc: '',
    cliente: '',
    adultos: 0,
    ninos: 0,
    zona: '',
    precioAdulto: 0,
    precioNino: 0,
    subtotal: 0,
    iva: 0,
    total: 0,

    calcularTotal: function(){
        if(this.zona == "sol"){
            this.precioAdulto = 350;
            this.precioNino = 280;
        }
        else{
            this.precioAdulto = 580;
            this.precioNino = 380;
        }
        this.subtotal = (this.adultos * this.precioAdulto) + (this.ninos * this.precioNino);
        this.iva = this.subtotal * 0.16;
        this.total = this.subtotal + this.iva;
    }
}

function agregarPedido() {
    reservacion.rfc = document.getElementById("rfc").value;
    reservacion.cliente = document.getElementById("cliente").value;
    reservacion.adultos = parseInt(document.getElementById("adultos").value) || 0;
    reservacion.ninos = parseInt(document.getElementById("ninos").value) || 0;
    reservacion.zona = document.getElementById("zona").value;

    reservacion.calcularTotal();

    
    var listaP = document.getElementById("listaPedidos");
    var pedidoLi = document.createElement("li");
    var totalPersonas = reservacion.adultos + reservacion.ninos;
    pedidoLi.innerText = "Cliente: " + reservacion.cliente + " | Personas: " + totalPersonas + " | RFC: " + reservacion.rfc + " | Zona: " + reservacion.zona;
    listaP.appendChild(pedidoLi);
}


function procesarEnviar(){
    reservacion.calcularTotal();
    localStorage.setItem("datosReservacion", JSON.stringify(reservacion));
    window.open("ticket.html", "_blank");
}