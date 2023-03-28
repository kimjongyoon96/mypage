let http =require('http'); // http 라는 변수에, http 모듈을 불러온다.
let url =require('url');  //  url 변수에 url 모듈을 불러온다.
// url 모듈은, url 정보를 객체로 가져와서 분석(파스) 하거나, url 객체를 문자열로 바꿔주는(format,resolve) 수행

let app= http.createServer(function(request,response){
  let queryData= url.parse(request.url,true).query; // url에서 쿼리스트링 부분을 찾아서 queryData에 대입해라. url.parse()는 url 문자열을 url 객체로 변환하여 리턴하는 역할을 수행
  response.writeHead(200,{"content-Type":"text/plain"});
  response.end(queryData.name);

});
app.listen(4000);
console.log('서버가 우왕굳');