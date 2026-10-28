function muertes() {
    let muertesA = new Array(7);
    let suma = 0; 
    for (let i = 0; i < 7; i++) {
        let muerte = prompt("Captura la muerte por dia");
        let valor = parseInt(muerte);
        muertesA[i] = valor;
        console.log(muertesA[i]);
        suma += valor; 
    }
    let cadena = ''; 
    for (let indice in muertesA) {
        cadena += '<div style="background-color: green; color: white; width: 100%; text-align: center; border: #97d7ff 5px solid;"> Dia: ' + indice + '= Muerte: ' + muertesA[indice] + '</div>';
    }
    let impMuertes = document.getElementById("impMuertes");
    if (impMuertes) impMuertes.innerHTML = cadena; 
    
    let promedio = suma/7;
    let min = Math.min(...muertesA);
    let max = Math.max(...muertesA);

    alert("El promedio es: " + promedio + "\n" + "El valor minimo es: " + min + "\n" + "El valor maximo es: " + max);
}

var alum = [];
var alumnos = function(){
    alum = new Array(10);
    let cadena = '';

    for(let i = 0; i < 10; i++){
        let a = prompt("Captura un Alumno");
        alum[i] = a;
    }

    alum.forEach(function (a) {
        cadena += '<div style="background-color: green; color: white; width: 100%; text-align: center; border: #97d7ff 5px solid;">' + a + '</div>';
    });
    let impAlumnos = document.getElementById("impAlumnos");
    if (impAlumnos) impAlumnos.innerHTML = cadena;
}

var eliminarA = function(){
    let cadena2 = '';
    let borrar = prompt("Captura el alumno a eliminar");
    for(let i = 0; i < alum.length; i++){
        if(alum[i] == borrar){
            alum.splice(i, 1);
        }
    }

    alum.forEach(function (a) {
        cadena2 += '<div style="background-color: green; color: white; width: 100%; text-align: center; border: #97d7ff 5px solid;">' + a + '</div>';
    });
    let impAlumnosFinal = document.getElementById("impAlumnosFinal");
    if (impAlumnosFinal) {
        impAlumnosFinal.innerHTML = '<h3>Nuevo:</h3>';
        impAlumnosFinal.innerHTML += cadena2;
    }
}

var letraE = function(){
    let matris = new Array(5);
    for(let i = 0; i < 5; i++){
        matris[i] = new Array(4);
    }

    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 4; j++){
            matris[i][j] = "-";
        }
    }

    for(let j = 0; j < 4; j++){
        matris[0][j] = "X";
        matris[2][j] = "X";
        matris[4][j] = "X";
    }
    matris[1][0] = "X";
    matris[3][0] = "X";

    let cadena = '';
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 4; j++){
            cadena += matris[i][j] + ' ';
        }
        cadena += '<br>';
    }
    let impMatriz = document.getElementById("impMatriz");
    if (impMatriz) impMatriz.innerHTML = cadena;
}

if (document.getElementById("impMatriz")) {
    letraE();
}

function calcular(){
    let tabla = [
        [120, 180, 280],
        [120, 280, 340],
        [240, 520, 890]
    ];

    let fila = parseInt(document.getElementById("puesto").value);
    let columna = parseInt(document.getElementById("nivel").value);
    let horas = parseFloat(document.getElementById("horas").value);

    let total = tabla[fila][columna] * horas;
    let impTotal = document.getElementById("impTotal");
    if (impTotal) impTotal.innerHTML = "$"+total;
}

let diasA = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let agenda = new Array(7);
for(let i = 0; i < 7; i++){
    agenda[i] = new Array(3);
    for(let j = 0; j < 3; j++){
        agenda[i][j] = "";
    }
}

function guardar(){
    let dia = parseInt(document.getElementById("diaA").value);
    agenda[dia][0] = document.getElementById("horaA").value;
    agenda[dia][1] = document.getElementById("eventoA").value;
    agenda[dia][2] = document.getElementById("descA").value;

    let cadena = '<table class="table table-bordered table-sm">';
    cadena += '<tr><th>Día</th><th>Hora</th><th>Evento</th><th>Descripcion</th></tr>';
    for(let i = 0; i < 7; i++){
        cadena += '<tr>';
        cadena += '<td>' + diasA[i] + '</td>';
        for(let j = 0; j < 3; j++){
            cadena += '<td>' + agenda[i][j] + '</td>';
        }
        cadena += '</tr>';
    }
    cadena += '</table>';
    let impAgenda = document.getElementById("impAgenda");
    if (impAgenda) impAgenda.innerHTML = cadena;
}

if (document.getElementById("impAgenda")) {
    guardar();
}