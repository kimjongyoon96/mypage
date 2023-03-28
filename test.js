let url =require('url');
let urlObject1= url.parse('http://localhost:4000/data/index.html?name=yhj&no=54').query;
let urlObject2= url.parse('http://localhost:4000/data/index.html?name=yhj&no=54',true).query;
console.log(urlObject1);
console.log(urlObject2);

