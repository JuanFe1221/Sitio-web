const express = require ('express');



const server = express();
server.use(express.json());

server.listen('3000', () => {
    console.log('server on port 3000')
})


server.get('/', function(req,res){
    res.json({
        name: "Juan",
        lastName: "Moreno"
    });
    
});


server.post('/SobreNosotros' , function(req, res){
    res.send('<h2> Conocenos :) </h2>')
});

server.put('/Contactanos' , function(req, res){
    res.send('<h2> Inbox 3134165315 :) </h2>')
});

server.delete('/CerrarSesion' , function(req, res){
    res.send('<h2> Adios vaquero, vuelve pronto :(  </h2>')
});
