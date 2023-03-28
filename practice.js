let http = require('http');
let url = require('url');

let app = http.createServer(function(request,response){
    let queryData = url.parse(request.url, true).query;
    let template = `
    <head></head>
    <body>
    <h2> ${queryData.id} </h2>
    <ul>
      <li><a href="/?id=LEE">LEE</a></li>
      <li><a href="/?id=PARK">PARK</a></li>
      <li><a href="/?id=JEONG">JEONG</a></li>
    </ul>
    <body>   
    `
	response.end(template);
});

app.listen(4000);