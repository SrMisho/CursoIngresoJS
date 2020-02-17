function mostrar()
{

var sexo;
sexo = prompt("Ingrese f ó m .").toLowerCase();

while (!(sexo == 'f' || sexo == 'm')) {
    sexo = prompt("Sexo invalido. Ingrese su sexo, f o m.").toLowerCase();
}

document.getElementById("Sexo").value = sexo;

}//FIN DE LA FUNCIÓN