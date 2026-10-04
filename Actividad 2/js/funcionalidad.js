function mi_metodo(){
      var nombre = document.getElementById('nombre').value;
      var genero = document.getElementById('genero').value
      var artista = document.getElementById('artista').value
      var precio = document.getElementById('precio').value
      var foto = document.getElementById('foto').value
    alert("Nombre: "+ nombre + "\n"
        + "Genero: "+genero + "\n" + 
    "Artista: "+artista + "\n" + 
    "Precio: "+ precio + "\n" + 
    "Foto: " + foto
)
}
function cantante(){
      var nombre = document.getElementById('nombre').value;
      var edad = document.getElementById('edad').value;
      var genero = document.getElementById('genero').value;
      var trayectoria = document.getElementById('trayectoria').value;
      var artista = document.getElementById('artista').value;
      var precio = document.getElementById('precio').value;
      var foto = document.getElementById('foto').value;

      alert("Nombre: " + nombre + "\n" + 
        "Edad: " + edad + "\n" + 
        "Genero: " + genero + "\n" + 
        "Trayectoria: " + trayectoria + "\n" + 
        "Artista: " + artista + "\n" + 
        "Precio: " + precio + "\n" + 
        "Foto: " + foto
      )

}

function cancion(){
       var nombre = document.getElementById('nombre').value;
       var duracion = document.getElementById('duracion').value;
       var compositor = document.getElementById('compositor').value;
       var precio = document.getElementById('precio').value;
       var cantante = document.getElementById('artista').value;

       alert("Nombre: " + nombre + "\n" + 
       "Duracion: " + duracion + "\n" + 
       "Compositor: " + compositor + "\n" + 
       "Precio: " + precio + "\n" + 
       "Cantante: " + cantante
    )

}
function playlist(){
    var nombre = document.getElementById('nombre').value;
    var usuario = document.getElementById('usuario').value;

    alert("Nombre: " + nombre + "\n" + 
        "Usuario: " + usuario
    )
}

