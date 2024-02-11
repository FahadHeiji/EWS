/*
  Number Challenge
*/

let aa = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.min(aa, b, c, d));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(aa, 2) * Math.pow(d, 0)); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Number.parseInt(d));

// Use Variables b + d To Get This Valus
console.log(((Math.floor(b) / Math.ceil(d)).toFixed(2)).toString()); // 66.67 => String
console.log(Math.round(Math.round(b) / Math.ceil(d))); // 67 => Number


/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 7)); // Zero

// 8 H
console.log(a.charAt(a.length - 4).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0, 6)} ${a.substr(-6, 6)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(`${a.charAt(0).toLowerCase()}${a.substring(1, a.length - 1).toUpperCase()}${a.charAt(a.length - 1).toLowerCase()}`); // eLZERO WEB SCHOOl


// HW - Numbers :

//  Q -1:
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(100_000); // 100000
console.log(100000.00); // 100000
console.log(2e4 * 5); // 100000
console.log(1e5 / 1); // 100000
console.log(1e4 + 9e4); // 100000
console.log(8e5 - 7e5); // 100000
console.log(parseInt(100000)); // 100000
console.log(Math.ceil(99999.1)); // 100000
console.log(Number("100000")); // 100000
console.log(100000); // 100000

// Q -2:

console.log(Number.MIN_SAFE_INTEGER * -1); // 9007199254740991

// Q-3:

console.log(Math.pow((Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER) + (Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER) + (Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER) + (Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER), (Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER) + (Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER))); // 16

//  Q-4:

let myVar = "100.56789 Views";

console.log(Number.parseInt(myVar)); // 100
console.log(typeof (Number.parseInt(myVar))); // typeof 100
console.log(Number.parseFloat(Number.parseFloat(myVar).toFixed(2))); // 100.57
console.log(typeof (Number.parseFloat(Number.parseFloat(myVar).toFixed(2)))); // typeof 100.57

// Q-5: 

let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2


// Q-6:

let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.ceil(flt - true)); // 10
console.log(Number.parseInt(flt)); // 10

// Q-7:
console.log(Math.trunc(Math.random() * (5 - 0) + 0)); // 0 || 1 || 2 || 3 || 4