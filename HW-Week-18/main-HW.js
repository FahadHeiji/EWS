

console.log("#".repeat(20));
// Q-01:
console.log("Q-01:");

let ip = "2001:db8:33533:4444:5555:6666:7777:8888";

console.log(ip.match(/(\d+|\w+|\W+)+/g));

console.log("#".repeat(20));


console.log("#".repeat(20));
// Q-02:
console.log("Q-02:");

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

console.log(specialNames.match(/\b(Os)\d*O/g));

// Output
// ['Os10O', 'OsO', 'Os100O']

console.log("#".repeat(20));


console.log("#".repeat(20));
// Q-03:
console.log("Q-03:");

let phone = "+(995)-123 (4567)";

console.log(phone.match(/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g));

console.log("#".repeat(20));


console.log("#".repeat(20));
// Q-04:
console.log("Q-04:");

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
let url = "https://www.google.com"
console.log(url.match(re));
// https?:\/\/
// this part search for if there is any http Or https protocol

// (?:[-\w]+\.)?
// this part search for if there is any word(s)\number(s) Or "- " " _" end with dot char 

// ([-\w]+)\.\w+
// this part search for any "- " " _" Or word\number(s) end folloed up by dot char and end with any "- " " _" Or word\number(s)

// (?:\.\w+)?\/?.*
// this part search for if there is any dot char followed up by "- " " _" Or word\number,Or "/", Or end with any chars expt whitespaces


console.log("#".repeat(20));


console.log("#".repeat(20));
// Q-05:
console.log("Q-05:");

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

 re = /(\d{1,2})\/?\s?\-?\s?(\d{1,2})\/?\s?\-?\s?(\d{1,4})/g; // Write Pattern Here

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"

console.log("#".repeat(20));

