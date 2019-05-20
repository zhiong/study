console.log('test');

const http = require('http');
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'});
res.write('<h1>Node.js</h1>');
res.end('<p>Hello SW1</p>');
}).listen(3000);
console.log('Http server is listen at port 3000');

