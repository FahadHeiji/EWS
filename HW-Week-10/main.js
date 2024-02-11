/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split("").filter((char) => !isNaN(char) || char.includes(',') || char.includes('_') ? "" : char).reduce((prechar, currentChar) => currentChar === currentChar.toLowerCase() ? `${prechar}${currentChar}` : `${prechar} ${currentChar}`).split(" ").map((char) => char.length > +true ? char : "").join(" ").trim();

console.log(solution); // Elzero Web School


// Q-01:
console.log("Q-01:");

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let word = mix.map((char) => isNaN(char) ? char : "").reduce((preChar, currentChar) => `${preChar}${currentChar}`);

console.log(word); // Elzero

// Q-02: 
console.log("Q-02:");


myString = "EElllzzzzzzzeroo";

word = myString.split("").filter((char, index) => myString.indexOf(char) === index).join("");
console.log(word); // Elzero


// Q-03: 
console.log("Q-03:");

let myArray = ["E", "l", "z", ["e", "r"], "o"];
word = [].concat(...myArray).reduce((preChar, currentChar) => preChar + currentChar);
console.log(word); // Elzero


// Q-04:
console.log("Q-04:");

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let nums = numsAndStrings.filter((char) => isFinite(char)).map((num) => -num);
console.log(nums); // [-1, -10, 10, 20, -5, -3]

// Q-05:
console.log("Q-05:");

nums = [2, 12, 11, 5, 10, 1, 99];
let newNums = nums.reduce((acc, current) => current % 2 === 0 ? acc * current : acc + current, 1);
console.log(newNums)// 500


