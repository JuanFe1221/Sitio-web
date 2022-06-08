const { response } = require('express');
const express = require('express');


const app = express();
/* Configuracion de pug */

app.set('views', './vistas');
app.set('view engine', 'pug');

/* Configuracion de ruta por defecto */
app.get('/', function(req, res){
    res.render("index");
})
app.listen('3000', function(){
    console.log("Aplicacion iniciada en el puerto 3000  ")
});



