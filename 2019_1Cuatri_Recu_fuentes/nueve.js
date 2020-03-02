function mostrar()
{
var nombre;
var edad;
var sexo;
var nota;
var acumenores= 0;
var acuadolescentes= 0;
var acumayores = 0;
var acufemenino =0;
var acumasculino = 0;
var contmenores= 0;
var contadolescentes= 0;
var contmayores = 0;
var contmasculino = 0;
var contfemenino= 0;
var AprobadoV = 0;
var promediomenores = 0;
var promedioadolescentes =0;
var promediomayores= 0;
var promediofemenino=0;
var promediomasculino=0;
var notaalta;
var sexoalto;
var nombrealto;
var flag = 0;
var seguir;


do {
    nombre = prompt("Introduzca el nombre del estudiante.");
    edad = parseInt(prompt("Introduzca la edad del estudiante."));
    while (isNaN(edad)) {
        edad = parseInt(prompt("Edad invalida. Introduzca la edad del estudiante."));
    }
    sexo = prompt("Introduzca el sexo del estudiante (m o f)");
    while (!(sexo == 'm' || sexo == 'f')) {
        sexo = prompt("Sexo invalido. Introduzca el sexo del estudiante (m o f)");
    }
    nota = parseInt(prompt("Introduzca la nota del estudiante. (1 a 10)"));
    while (nota < 0 || nota > 10 || isNaN(nota)) {
        nota = parseInt(prompt("Nota invalida. Introduzca la nota del estudiante. (1 a 10)"));
    }
    if (nota >= 6 && sexo == 'm') {
        AprobadoV +=1;
    }
    if (edad < 13) {
        acumenores = acumenores + nota;
        contmenores +=1;
    } else if (edad < 18) {
        acuadolescentes = acuadolescentes + nota;
        contadolescentes +=1;
        if (notaalta < nota || flag == 0) {
            notaalta = nota;
            sexoalto = sexo;
            nombrealto = nombre;
            flag = 99;
        }
    } else {
        acumayores = acumayores + nota;
        contmayores +=1;
    }
    if (sexo == 'm') {
        acumasculino = acumasculino +nota;
        contmasculino +=1;
    } else {
        acufemenino = acufemenino + nota;
        contfemenino +=1;
    }
    
seguir = prompt ("¿Desea seguir?").toLowerCase();
} while (seguir == 's');

if (contmenores != 0) {
    promediomenores = acumenores / contmenores;
}
if (contmayores != 0) {
    promediomayores = acumayores / contmayores;
}
if (contadolescentes != 0) {
    promedioadolescentes = acuadolescentes / contadolescentes;
}
if (contmasculino != 0) {
    promediomasculino = acumasculino / contmasculino;
}
if (contfemenino != 0) {
    promediofemenino = acufemenino / contfemenino;
}

document.write("La cantidad de varones aprobados es: " + AprobadoV + ".</br>" + 
"El promedio de notas de los menores de edad es: " + promediomenores + ".</br>" +
"El promedio de notas de los adolescentes es: " + promedioadolescentes + ".</br>" +
"El promedio de nota de los mayores de edad es: " + promediomayores + ".</br>" +
"El promedio de nota del sexo masculino es: " + promediomasculino + ".</br>" +
"El promedio de nota del sexo femenino es: " + promediofemenino + ".</br>" );
if (contadolescentes == 0) {
    document.write("No se registraron adoslescentes.");
} else {
    document.write("El adolescente con nota mas alta es: " + nombrealto + " su nota fue " + notaalta + " y su sexo es " + sexoalto + '.');
}


}
