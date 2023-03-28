let fs = require('fs');

// 동기(Synchronous)
console.log(1);
let result1 = fs.readFileSync('./two.txt', 'utf8')
console.log(result1);
console.log(3);

///////////////////////////////////////////////
console.log('---------');
///////////////////////////////////////////////

// 비동기(Asynchronous)
console.log(1);
fs.readFile('./two.txt', 'utf8', function (err, result) {
    console.log(result);
})
console.log(3);