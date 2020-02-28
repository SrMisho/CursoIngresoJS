function mostrar()
{
var nota;
var sexo;
var acunotas = 0;
var promedio;
var alumnos = 0;

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

}
}
