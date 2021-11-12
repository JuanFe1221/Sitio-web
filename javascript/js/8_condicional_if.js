"use strict"

/* Crear 2 variables (Usuario y contraseña) y las van a comparar con el Usuario y contraseña que viene de la BD si el usuario tiene acceso el sistema arrojara un mensaje de "Bienvenida" de lo contrario le informara al usuario que no tiene acceso "Valores incorrectos"*/ 

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