const http = require('http');

const port =3000;
 const hostname='127.0.0.1';

const server =http.createServer(function(request,response){
  response.writeHead(200);
  response.end('Hello, node.js!\n');
})

server.listen(port,hostname,()=>{
  console.log(`server running at http://${hostname}:${port}/`);
});