let letters = ["A", "a", "A", "B", "B", "B", "C"];

let newLetters = new Set(letters);

console.log(letters); // ["A","a","A","B","B","B","C"]
console.log(newLetters); // Set(4) { 'A', 'a', 'B', 'C' }
console.log(typeof newLetters); // object
console.log(newLetters.has("C")); // true

let arr = [1, 2, 3, 4, 5, "A", "B"];

// arr.copyWithin(4,-1); //[ 1,   2,   3,   4, 'B', 'A', 'B' ]
// arr.copyWithin(1,-2); //[ 1,  'A', 'B',   4, 5, 'A', 'B' ]
arr.copyWithin(1, -2, -1);
console.log(arr);

const los = {
  30: "p2",
  20: "p1",
  10: "p3",
  40: "p4",
};
let mainLoc = 15;
let pls = Array.from(Object.keys(los)).map((e) => +e);

let check = pls.every(function (e) {
  return e > this;
}, mainLoc);
console.log(pls);
console.log(check);

// 

/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// console.log(Number(`${n1.pop().toString().charAt(0)}${n2.pop()}`)); // 210
// console.log(+(`${nn1.pop() /  nn2.pop()}` + Math.min(...nn1))); // 210
console.log(Math.max(...n1,...n2) * [...n1,...n2].length); // 210
































console.log("#".repeat(20));
console.log("#".repeat(20));

let arr2 = [1, 2, 3, 3, 4, 5, 5, 6, 7];

let uArr2 = new Set(arr2);

console.log(uArr2);
console.log(uArr2.size);

let obj = { "A": 1, "B": 2, "B": 2 };
let wsObj = new WeakSet([obj]);

console.log(wsObj);

let mapp = new Map();
mapp.set("A", 1);
mapp.set("B", 2);
mapp.set("C", 3);
mapp.set("D", 4);
mapp.set("D", 4);

console.log(mapp.get("A"));
console.log(mapp.get("B"));
console.log(mapp.get("C"));
console.log(mapp.get("D"));
console.log(mapp.get("D"));
console.log(mapp.size);

let arr3 = [1, 2, 3, 4, 5, "A", "B"];
// arr3.copyWithin(4,-1);
// arr3.copyWithin(1,-2);
arr3.copyWithin(1, -2, -1);
console.log(arr3);


//  Some:
// let checkRange = ()=>{
//   retrun 
// }
let rr = arr3.filter((e) => !isNaN(e));
console.log(rr);

let range = {
  min: 1,
  max: 10,
}

let checkRange = rr.some(function (e) {

  return e > this.min && e < this.max;
}, range);
;

console.log(checkRange);

let loc = {
  20: "P1",
  30: "P2",
  10: "P3",
  40: "P4",
};

let mLoc = 15;

let locArray = Object.keys(loc);

console.log(locArray);

let locArrNum = locArray.map((e) => +e);

console.log(locArrNum);

let checkc = locArrNum.every(function (e){

 return e > this}, mLoc);
console.log(checkc);


console.log("#".repeat(20));
console.log("#".repeat(20));
console.log("#".repeat(20));
console.log("#".repeat(20));

/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/

let nn1 = [10, 30, 10, 20];
let nn2 = [30, 20, 10];

console.log(+(`${nn1.pop() /  nn2.pop()}` + Math.min(...nn1))); // 210
// console.log(`${nn1.pop() /  nn2.pop()}`); // 210
