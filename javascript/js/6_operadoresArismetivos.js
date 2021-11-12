"use strict"
/*
Suma.............+
Resta............-
Multiplicacion...*
División........./
Residuo..........% 
*/

/* Crear tres productos, los inicializan con un valor */
/* A los tres les van a descontar el 5% */
/* Existencia de cada producto y hallar el costo del inventario*/

/* Descuento */
var cocaCola = 1500;
var cocaColaConDes = cocaCola - (cocaCola * 0.5);
 console.log("Su Cocacola con descuento es de: $" + cocaColaConDes);

var pepsi = 1300;
var pepsiConDesc = pepsi - (pepsi * 0.5);
console.log("Su Pepsi con descuento es de: $" + pepsiConDesc);

var speedMax = 1800;
var speedMaxConDesc = speedMax - (speedMax * 0.5);
console.log("Su SpeedMax con descuento es de: $" + speedMaxConDesc);

/*Existencia */

var cantcocaCola = 4;
var cantpepsi = 8;
var cantspeedMax = 10;

var costoTotalcocaCola = cantcocaCola * cocaCola;
console.log ("El costo total de sus cuatro bebidas de  Cocacola es de: $" + costoTotalcocaCola);

var costoTotalpepsi = cantpepsi * pepsi;
console.log ("El costo total de sus ocho bebidas de pepsi es de: $" + costoTotalpepsi);

var costoTotalspeedMax = cantspeedMax * speedMax;
console.log ("El costo total de sus diez SpeedMax es de: $" + costoTotalspeedMax);




