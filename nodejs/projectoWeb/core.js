var http= require('http');
var events= require('events');

var myEmitter= new events.EventEmitter();
var sumar= function(a,b){
  return a + b;
}

myEmitter.on('unEvento',function(mssg,int){
  console.log(mssg);
  console.log(`en numero 5 mas el numero ${int} suman ${int + 5}`);
});
//



http.createServer(function(req,res){
  console.log('hola guacho');
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World! \n');
  res.write(sumar(4,6).toString());
  myEmitter.emit('unEvento','unMesnajeLoco', 8);
  res.end();
}).listen(3000);
