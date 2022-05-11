const os = require("os");

console.log("Identifiacion del equipo");

console.log("Procesador: " , os.cpus());

console.log("Arquitectura: ",os.platform(), os.arch())

console.log("Memoria disponible: ", os.freemem());

console.log("Informacion de usuario: ", os.userInfo());

console.log("Version: ", os.version());
