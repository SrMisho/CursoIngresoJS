function mostrar()
{
    var candiv = 0;
    var repeticiones = parseInt(prompt("Ingrese su numero: "));
    while (isNaN(repeticiones)) {
        repeticiones = parseInt(prompt("Eso no es un numero. Ingrese su numero: "));
    }
    for (var numero = 1; numero <= repeticiones; numero++) {
       if ( repeticiones % numero == 0){
           console.log(numero);
    candiv+=1;
       }
    }
    console.log("Divisores encontrados: " + candiv);



}//FIN DE LA FUNCIÓN