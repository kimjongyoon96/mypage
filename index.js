import http from 'http';

import fs from 'fs';


// 1. 함수가 포함된 원래의 형식
// const server= http.createServer((request,response)=>{
  
// });

// server.listen(3000);

// 2. 따로 함수를 선언한 형태
// function serverCallback(request,response){
  
// }

// const server=http.createServer(serverCallback);
// server.listen(3000);

// const server=http.createServer((request,response) =>{

  // 중요한 점검부분
  // 점표기법을 사용했으니 response는 무조건 객체 
// console.dir(response);

// response.writeHead(200,{'content-Type':'text/plain'});
// response.write('hello world');
// response.end();

// });

// server.listen(3000);
// file system 모듈 추가
// 3. console.log 를 통해서 실행되는 과정을 파악
const server =http.createServer((request,response)=>{
  // 파일을 읽어내는 fs 모듈의 메서드
  fs.readFile("./static/basic/header.txt", function(err,data){
    // 에러 처리
    if (err){
      return console.error(err);
    }
    // 응답 처리
    response.writeHead(200,{'content-Type':'text/plain'});
    response.write(data.toString());
    response.end();
  });
// 모든 응답이 종료되면 아래 메세지 실행시켜라
console.log('서버가 실행되었습니다');

});

server.listen(3010);
