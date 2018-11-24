var http= require('http');
var events= require('events');
var dataBase= require('./dataBase.js');
var fs = require('fs');
var url= require('url');

var myEmitter= new events.EventEmitter();
var sumar= function(a,b){
  return a + b;
}

console.log(dataBase.string_multiplicar(2,3));

myEmitter.on('unEvento',function(mssg,int){
  console.log(mssg);
  console.log(`en numero 5 mas el numero ${int} suman ${int + 5}`);
});
//



http.createServer(function(req,res){
  var texto= url.parse(req.url,true);
  console.log(texto.search);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(sumar(4,6).toString());
  myEmitter.emit('unEvento','unMesnajeLoco', 8);

  //esto deberia leer del req y escribirlo en res
  var readableStream = fs.createReadStream(__dirname + '/unTextoLargo.txt','utf8');
  readableStream.pipe(res);
  //res.end(); si esto no esta comentado, el pipe no llega a escribir en la response
}).listen(3000);
