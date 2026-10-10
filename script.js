
function calcularPromedio(nota1, nota2, nota3) {

    var promedio = (nota1 + nota2 + nota3) / 3;

    return promedio;
}



document.getElementById("calcular").addEventListener("click", function () {

    
    var nombre = document.getElementById("nombre").value;

    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);


    
    var promedio = calcularPromedio(nota1, nota2, nota3);

    var condicion;


    
    if (promedio >= 70) {

        condicion = "Aprobado";

    } else {

        condicion = "Reprobado";

    }


    
    document.getElementById("resultado").innerHTML =
        "Nombre del estudiante: " + nombre +
        "<br>Promedio: " + promedio.toFixed(2) +
        "<br>Condición: " + condicion;

});



document.getElementById("limpiar").addEventListener("click", function () {

    document.getElementById("nombre").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";

    document.getElementById("resultado").innerHTML = "";

});



for (var i = 5; i >= 1; i--) {

    console.log(i);

}