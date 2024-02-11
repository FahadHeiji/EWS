let emails = ["ahmed@gmail.com", "fdsfsd#fdsfds,com", "Ali@ds@org", "noon@ali.sa"];

let validEmailReExp = /\w+@\w+\.(com|org|sa)/g;

emails.map((e) => console.log(e.match(validEmailReExp)));

let str = "ABCabcdefgi1234$%5@";

let atToz = /[a-z]/ig;
let atTozp2 = /[a-zA-Z]/ig;
let sp = /[^a-zA-Z & ^0-9]/g;
console.log(str.match(atToz));
console.log(str.match(atTozp2));
console.log(str.match(sp));

let urls = "https://google.com http://www.Website.net web.com";
let reUrls = /(https?:\/\/)?(www.)?\w+.\w+/ig;
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
console.log(urls.match(reUrls));

let serials = "S100S S3000S S50000S S950000S";

let reS1 = /s\d{3}s/ig; // S[3d]S
let reS2 = /s\d{4,5}s/ig; // S[4d|5d]S
let reS3 = /s\d{4,}s/ig; // S[4d or More]
console.log(serials.match(reS1));
console.log(serials.match(reS2));
console.log(serials.match(reS3));

let y = "Hi &5567&# nice TO meet You";

console.log(y.replaceAll(/\W\d+\W{2}/ig, "Fahad"));

// document.getElementById("register").onsubmit = () => {
//   let phone = document.getElementById("phone").value;
//   let rePhone = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 123-1234
//   let validatePhone = rePhone.test(phone);
//   if (!validatePhone) {
//     console.log("Hi");
//     return false;
//   }
//   console.log("By");
//   return true;
// };

/*
  Regular Expression
  - Challenge
*/

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080articlesphpisdfdsf5gdfg546t3gfvret43545d=1gb5gv0234';

let re = /(https?:\/\/)?(www\.)?\w{1,256}\.\w{3,12}(\S+)?/g;


console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
