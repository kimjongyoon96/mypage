var http = require('http');
var url = require('url');
var qs = require('querystring');

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var pathname = url.parse(_url, true).pathname;
  if (pathname === '/') {
    response.writeHead(200);
    response.end(`
      <!doctype html>
      <html>
      <head>
        <title>POST</title>
        <meta charset="utf-8">
      </head>
      <body>
        <form action="/login" method="post">
          <p><input type="text" name="user_id" placeholder="login"></p>
          <p><input type="text" name="user_pw" placeholder="password"></p>
          <p><input type="submit"></p>
        </form>
      </body>
      </html>
      `);
  } else if (pathname === '/post_test') {
    let body = '';
    request.on('data', function (data) {
      body = body + data;
    });
    request.on('end', function () {
      let post = qs.parse(body);
      console.log(post);
      let login = post.login;
      let password = post.password;
      response.end(`
          <!doctype html>
          <html>
          <head>
            <title>POST</title>
            <meta charset="utf-8">
          </head>
          <body>
            <p>login : ${login}</p>
            <p>password : ${password}</p>
          </body>
          </html>
          `);
    });
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});
app.listen(3000);