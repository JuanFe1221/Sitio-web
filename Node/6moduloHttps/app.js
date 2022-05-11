const { write } = require('fs');
const http = require('http');

http.createServer(function(req, res){
   res.write("<h1>Este es mi primer servidor en Node js </h1>")

}).listen(3000);

