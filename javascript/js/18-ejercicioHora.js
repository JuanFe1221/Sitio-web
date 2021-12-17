"use strict"

/* Diseñar un sistema que muestre la hora en formato AM o PM */

var time = new Date();
console.log(
  time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
);

/* Definir un sistema que les permita saber cuántos días faltan para su próximo cumpleaños.  */

console.log("¿Cuanto falta para tu proximo cumpleaños?")

var fechaActual = new Date();

var limiteDias = new Date();

/*  */
var tiempoCumple = limiteDias.setMinutes(limiteDias.getMinutes() + 30);
console.log("Su proximo cumpleaños es en:  ");
console.log("Dia:  " + limiteDias.getDate());
console.log("Hora: " + limiteDias.getHours());
console.log("Minutos " + limiteDias.getSeconds());
/*  */

var minDiff = limiteDias.getTime() - fechaActual.getTime();
var minRestantes = Math.floor ((minDiff /1000 /60 ));
var segRestantes = Math.floor (minDiff / 1000);
/*  */
 if (minRestantes < 10) {
     minRestantes = "0" + minRestantes.toString();

 } 
 if (segRestantes < 10) {
    minRestantes = "0" + minRestantes.toString();
     
} 

