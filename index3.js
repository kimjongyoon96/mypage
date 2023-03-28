let http =require('http');
let url =require('url');

let app= http.createServer(function(request,response){
  let queryData= url.parse(request.url,true).query;
  response.writeHead(200,{"content-Type":"text/plain"});
  response.end(queryData.name);

});
app.listen(4000);