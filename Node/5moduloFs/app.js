const  fs = require("fs");

/* Mi primer callback */

fs.readFile('\prueba.txt', 'UTF-8', (err,data) => {
  if(err){
  console.log("Error: ", err)
  }
  else {
  console.log(data);

  }

});

let insertarTexto = "Soy stich 2"

fs.writeFile('prueba.txt', insertarTexto, (err) => {
  if(err){
      console.log("Error: ", err)
  }
  else{
      console.log("Operacion realizada")
  }
 
});