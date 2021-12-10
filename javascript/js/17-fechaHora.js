"use strict"

var fechaActual = new Date();
console.log(fechaActual);

/* Metodos para descomponer la fecha */

var anyoactual = fechaActual.getFullYear();
console.log("Año actual: " +anyoactual );
var mesActual = fechaActual.getMonth();
console.log("Mes actual:" + (mesActual +1 ));
var diaActual = fechaActual.getDate();
console.log("Dia actual: " + diaActual);
var diaSemana = fechaActual.getDay();
console.log ("Dia de la semana actual: " + (diaSemana + 1));
var horaActual = fechaActual.getHours();
console.log ("La hora actual: " + horaActual);
var minutosActual = fechaActual.getMinutes();
console.log ("Los minutos actuales: " + minutosActual);
var segundosActual = fechaActual.getSeconds();
console.log("Los segundos actuales: " + segundosActual);
var msActual = fechaActual.getUTCMilliseconds();
console.log("Los milisegundos actuales: " + msActual);
var ms1970 = fechaActual.getTime();
console.log("Los ms desde 1970: " + ms1970);

console.log ("Hoy es : "  +   diaActual + (" ") +  ("del mes") + (" ") + mesActual + (" ") + ("del año") + (" ")  + anyoactual +  (" ") +  ("son las")  + (" ") + horaActual + (": ") + 0 + minutosActual);


/* En texto */

var diasemana = ["Domingo" , "Lunes" , "Martes" , "Miercoles", "Jueves" , "Viernes" , "Sabado"];
var diasemanaStr =diasemana[diasemana]; 

var mesActual = ["Enero" , "Febrero" , "Marzo" , "Abril" , "Mayo" , "Junio" , "Julio" , "Agosto" ,"Septiembre" , "Octubre" , "Noviembre", "Diciembre"]
var mesAnyoStr = mesActual[mesAnyoStr];

console.log ("Hoy es : "  +   diasemanaStr + (", ") +  ("del mes") + (", ") + mesAnyoStr + (" ") + ("del año") + (" ")  + anyoactual +  (" ") +  ("son las")  + (" ") + horaActual + (": ") + 0 + minutosActual);

