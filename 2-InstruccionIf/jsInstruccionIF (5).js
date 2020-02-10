function mostrar()
{
//tomo la edad  

var edad;

edad = parseInt(document.getElementById("edad").value);

if (edad < 13 || edad > 17) {
    alert ("No eres adolecente.");
}

// tambien se puede escribir negando el es adolecente
/*if ( ! (edad >= 13 && edad <= 17) ) {
    alert ("No eres adolecente.");
}*/
}//FIN DE LA funcion