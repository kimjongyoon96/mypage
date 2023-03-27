import http from 'http';
import fs from 'fs';
import mysql from 'mysql';
import htmlBox from "./htmlBox.js";

//본인의 MySQL정보를 입력하고 database 연결할 것
/* 필요한 테이블 이름 : [
  userinfo(
    id varchar(20),
    PW varchar(20),
    question int,
    answer varchar(20),
    dogName varchar(20),
    dogGender int,

    primary key(id)
  )
]*/
//위 테이블을 만들고 실행할 것
const mysqlInfo = {
  host     : 'localhost',
  user     : 'root',
  password : '0000',
  database : 'signup'
}

const server = http.createServer(function(request, response) {
  //로그인
  let body = '';
  if(request.method === 'GET' && request.url === '/') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.write(htmlBox.htmlFunc(htmlBox.loginBody));
    response.end();
  }})

  // 서버 포트 설정
  server.listen(2080, function (error) {
    if (error) {
      console.error("서버 안돌아감");
    } else {
      console.log("서버 돌아감");
    }
  });


  
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "0516",
    database: "my_db",
  });
  connection.connect();
  
  let sql = 'insert into test4(tit, des) values("' + post.title + '","' + post.description + '")'; 
  
  connection.query(sql, function(err, rows, fields) {
    if(err) {
      console.log(err);
    }
    console.log(rows);
  })
  connection.end();
});

//   } else if(request.url === '/loginPage.js'){
//     // loginPage.js 파일 read
//     fs.readFile('./loginPage.js', function(err, data) {
//       response.statusCode = 200;
//       response.setHeader('Content-Type', 'text/html');
//       response.write(data);
//       response.end();
//     })
//   } else if(request.method === 'GET' && request.url.startsWith('/resource/MainLogo')) {
//     // MainLogo.png 파일 read
//     fs.readFile(`./resource/MainLogo.png`, function(err, data) {
//       response.statusCode = 200;
//       response.setHeader('Content-Type', 'text/html');
//       response.write(data);
//       response.end();
//     })
//   } else if(request.method === 'GET' && request.url.s"`, (error, rows, fields) => {
//       if (error) throw error;
//       else{
//         response.writeHead(200);
//         response.end(String(rows));
//       }
//     });
//   }

//   if(request.method === 'POST' && request.url.startsWith('/signUpResult')){
//     let body = '';
//     request.on('data', function (data) {
//       body = body + data;
//     });
//     request.on('end', function () {
//       let bodycarrier = body.split("&");
//       let bodySplit = [];
//       for(let i = 0;i<bodycarrier.length;i++){
//         bodySplit.push(bodycarrier[i].split("="))
//       };
//       let connection = mysql.createConnection(mysqlInfo);
//       connection.connect();
//       connection.query(`INSERT INTO userInfo(id,PW,question,answer,dogName,dogGender) values("${bodySplit[0][1]}","${bodySplit[1][1]}",${Number(bodySplit[2][1])},"${decodeURIComponent(bodySplit[3][1])}","${decodeURIComponent(bodySplit[4][1])}",${Number(bodySplit[5][1])})`, (error) => {
//         if (error) throw error;
//         console.log("정상작동");
//       });

//       connection.query('SELECT * FROM userInfo', (error, rows, fields) => {
//         if (error) throw error;
//         else{
//           console.log(rows);
//         }
//       });

//       connection.end();
      
//       response.writeHead(200);
//       response.write(htmlBox.htmlFunc(htmlBox.signUpResult))
//       response.end();
//       }
//     );
//     }
//   })
//   // 서버 포트 설정
//   server.listen(2080, function(error) {
//     if(error) { console.error('서버 안돌아감') } else { console.log('서버 돌아감'); }
//   });
// tartsWith('/resource/MainDog')) {
//     // MainDogImg.png 파일 read
//     fs.readFile(`./resource/MainDogImg.jpg`, function(err, data) {
//       response.statusCode = 200;
//       response.setHeader('Content-Type', 'text/html');
//       response.write(data);
//       response.end();
//     })
//   }
//   if(request.method === 'POST' && request.url.startsWith('/login')) {
//     console.log('/login 페이지 진입');
//     request.on('data', function(data) {
//       body = body + data;
//       console.log(body);
//     });
//     request.on('end', function() {
//       let idSplit = body.split('&')[0];
//       let pwSplit = body.split('&')[1];
//       let userLoginId = idSplit.split('=')[1];
//       let userLoginPw = pwSplit.split('=')[1];
//       console.log(userLoginId);
//       console.log(userLoginPw);

//       // MySQL과 연동 , UserLoginData DB에 접속
//       let connection = mysql.createConnection(mysqlInfo);
      
//       // connection 시작
//       connection.connect();

//       // where절 사용을 위한 userLoginId 변수 배열화
//       // let sqlValId = [userLoginId];
//       // where절 사용을 위한 query 변수화
//       // let sql = 'SELECT ifnull(max(userID), 0) userID, userPW from LoginData where userID = ?';
//       // ifnull(컬럼명, 출력값) -> 만약 데이터가 null일 경우 출력값을 대신 출력
//       // ifnull(max(userID), 0) -> max(userID) : userID 중에 가장 높은 값을 출력 -> userID에 존재하지 않는 값이 들어온 경우 가장 높은 값이 없다 -> null 출력 -> ifnull에 의해 0 출력 

//       // DB에 접근 후 데이터 조회

//       connection.query(`SELECT id, PW from userinfo where id = '${userLoginId}'`, (error, data, fields) => {
//         if (error) throw error;
//         console.log("실행");
//         console.log(data);
//         if(data.length > 0) {
//           let dataId = data[0].id; //DB에 저장된 ID값
//           let dataPw = data[0].PW; //DB에 저장된 PW값
//           if(userLoginId === dataId) { // 입력된 ID가 DB에 있을 경우
//             if(userLoginPw === dataPw) {  // 입력된 ID에 대해 입력된 PW값과 DB에서 조회된 PW값이 일치 할 경우
//               console.log('로그인 성공');
//               connection.end();
//               response.writeHead(200);
//               response.write("<script>window.location='/main'</script>"); // 이후 병합시 main 페이지로 연결
//               response.end();
//             } else { // 입력된 ID에 대해 입력된 PW값과 DB에서 조회된 PW값이 일치 하지 않을 경우
//               console.log('비밀번호가 틀렸습니다');
//               connection.end();
//               const msg = htmlBox.htmlFunc(`<script>window.alert('비밀번호가 틀렸습니다')</script>`);
//               const back = htmlBox.htmlFunc(`<script>window.location = 'http://localhost:2080'</script>`);
//               response.writeHead(200);
//               response.write(msg);
//               response.write(back);
//               response.end();
//             }
//           }
//           } else {
//             console.log('가입되지 않은 회원입니다');
//             connection.end();
//             const msg = htmlBox.htmlFunc(`<script>window.alert('가입되지 않은 회원입니다')</script>`);
//             const back = htmlBox.htmlFunc(`<script>window.location = 'http://localhost:2080'</script>`);
//             response.writeHead(200);
//             response.write(msg);
//             response.write(back);
//             response.end();
//         }

//       })
//   })}
  

//   //메인
//   if(request.method === 'GET' && request.url === '/main'){
//     //const b = request.url.split("/")
//     //console.dir(b)
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     response.end(htmlBox.htmlFunc(htmlBox.mapBody));
//   }
//   else if(request.url.split('/')[1] === 'mainStyle.js'){
//       fs.readFile(`./mainStyle.js`, function (err, data) {
//         response.writeHead(200);
//         response.write(data);
//         response.end();
//       });
//     }
//   else if(request.url.split('/')[1] === 'map.js'){
//     fs.readFile(`./map.js`, function (err, data) {
//         response.writeHead(200);
//         response.write(data);
//         response.end();
//       });
//     }
 


//   //회원가입
//   if(request.method === 'GET' && request.url === '/signUp') {
//     response.writeHead(200);
//     response.write(htmlBox.htmlFunc(htmlBox.signupPage))
//     response.end();
//   }
//   if(request.method === 'GET' && request.url.startsWith('/signupstyle')){
//     fs.readFile(`./signup.js`, function(err, data){
//       response.writeHead(200);
//       response.write(data);
//       response.end();
//     })
//   }
//   if(request.method === 'GET' && request.url.startsWith('/signupResultStyle')){
//     fs.readFile(`./signupResult.js`, function(err, data){
//       response.writeHead(200);
//       response.write(data);
//       response.end();
//     })
//   }
//   if(request.method === 'GET' && request.url.startsWith('/favicon')){
//     fs.readFile(`./graphic/dogpaw.png`, function(err, data){
//       response.writeHead(200);
//       response.write(data);
//       response.end();
//     })
//   }
//   if(request.method === 'GET' && request.url.startsWith('/dupCheck')){
//     let checkID = request.url.split("=")[1]
//     let connection = mysql.createConnection(mysqlInfo);
//     connection.connect();
//     connection.query(`SELECT * FROM userInfo WHERE id = "${checkID}