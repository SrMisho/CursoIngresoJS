function mostrar()
{
var nota;
var notabaja = 0;
var sexobajo;
var sexo;
var varones = 0;
var acunotas = 0;
var promedio;
var flag = 0;

for (var k = 0; k < 5; k++) {
   nota = parseInt(prompt("Ingrese su nota."));
   while (nota < 0 || nota > 10 || isNaN(nota)) {
    nota = parseInt(prompt("Esa nota no es valida. Ingrese su nota."));
   }
    sexo = prompt("Ingrese su sexo (m o f)").toLowerCase();
    while (sexo != 'm' && sexo != 'f') {
        sexo = prompt("Sexo invalido. Ingrese su sexo (m o f)").toLowerCase();
    }
acunotas = acunotas + nota;
if (notabaja > nota || flag == 0) {
    notabaja = nota;
    sexobajo = sexo;
    flag =1;
}
if (sexo == 'm' && nota >= 6) {
        varones+=1;
    }


}
promedio = acunotas / 5;
alert("El promedio de notas fue: " + promedio + "\n" + 
"La nota mas baja fue: " + notabaja + " de sexo " + sexobajo + "\n" +
"La cantidad de varones aprobados fue: " + varones);
}
