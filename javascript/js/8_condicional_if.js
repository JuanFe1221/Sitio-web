"use strict"

/* Crear 2 variables (Usuario y contraseña) y las van a comparar con el Usuario y contraseña que viene de la BD si el usuario tiene acceso el sistema arrojara un mensaje de "Bienvenida" de lo contrario le informara al usuario que no tiene acceso "Valores incorrectos"*/ 

/* Condicional compuesto */
var usuario = "Juanfe";
var seguridad= 12345678;

var BDusuario= "Juanfe";
var Bdseguridad=2356;

if (usuario == BDusuario && seguridad == Bdseguridad){
console.log;("Bienvenido wey bienvenido")
}

else{
console.log("Usuario Y/O clave incorrecta")
} 
/* Condicional anidado */
/* Sistema que me permita calcular un descuento compuesto */
/* Agencia de viajes. */

var edad = 9;
var destinoUsuario = "cartagena";
var destinoUsuarioDescuento = "cartagena";
var aerolineaUsuario = "Latam"
var aerolineaUsuarioDescuento = "Latam"
var  costoTiquete = 250000;
var  descuento = .10;
var costoTiqueteFinal = 0;
var descuentosUsuario = "";

/* if
si el if se cumple, dentro va otro if
 si el if se cumple, dentro va otro if  */

 if(edad < 10 || edad >=70){
  costoTiquete = costoTiquete-(costoTiquete * descuento);
  descuentosUsuario = "Por edad";
}

  if(destinoUsuario === destinoUsuarioDescuento){
    costoTiquete = costoTiquete-(costoTiquete * descuento);
    descuentosUsuario = descuentosUsuario + ", Por destino ";
  }
if(aerolineaUsuario === aerolineaUsuario){
    costoTiquete = costoTiquete-(costoTiquete * descuento);
    descuentosUsuario += "y por aerolinea";

    if(descuentosUsuario != " "){
        console.log("Usted recibio descuentos por " + descuentosUsuario);
        console.log("El valor final del tiquete con descuentos es: $" + costoTiquete)
    }
}
else{
    console.log("El valor final del tiquete es: $" + costoTiquete);
    console.log ("Lo siento crack, no tienes descuentos");
}
/* Sistema de votacion  */
var edadCiudadano = 18;
var edadMinima = 18;
var edadMaxima = 140; 


