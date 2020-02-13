function mostrar()
{
//tomo la edad  

var edad;
var situacion;

edad = parseInt(document.getElementById("edad").value);
situacion = document.getElementById("estadoCivil").value;

if (edad >= 18 && situacion == "Soltero") {
    alert ("Es soltero y no es menor.");
}
	


}//FIN DE LA FUNCIÓN