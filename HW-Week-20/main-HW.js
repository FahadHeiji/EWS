


console.groupCollapsed();
// Needed Output
let dn = new Date();
let db = dn - new Date("07-12-2000");
console.log(db / 1000);
console.log(db / 1000 / 60);
console.log(db / 1000 / 60 / 60);
console.log(db / 1000 / 60 / 60 / 24);
console.log(db / 1000 / 60 / 60 / 24 / 365);
console.groupEnd();

console.groupCollapsed();
// Needed Output
let predaypremonth = new Date();
predaypremonth = new Date(predaypremonth.setDate(0));
console.log(predaypremonth);

let monthOfeYear = [
  "Jan",
  "Fab",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

console.log(
  `Previous Month Is ${
    monthOfeYear[predaypremonth.getMonth()]
  } And Last Day Is ${predaypremonth.getDate()}`
);
console.groupEnd();

console.groupCollapsed();

let gg = new Date();
gg.setTime(0);
gg.setFullYear(1980);
gg.setHours(0);
gg.setSeconds(1);
console.log(gg);
console.groupEnd();

console.groupCollapsed();

let bb = new Date();
bb.setTime(0);
bb.setFullYear(2000);
bb.setMonth(11);
bb.setDate(7);
bb.setHours(0);

console.log(bb);

bb = new Date(2000, 11, 7);
console.log(bb);

bb = new Date("12-07-2000");
console.log(bb);

console.groupEnd();

console.groupCollapsed();

let start = performance.now();
// for (let i = 0; i <99999 ; i++) {

//     console.log(i)

// }
let end = performance.now();
let dou = end - start;

console.log(`Loop Took ${Number.parseInt(dou)} Milliseconds.`);

console.groupEnd();

console.groupCollapsed();

function* genNum() {
  let i = 14;
  let n = 140;
  let sum = i + n;
  yield i;
  while (true) {
    yield sum;
    sum += n += 200;
  }
}
let gen = genNum();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.groupEnd();


console.groupCollapsed();
function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
  }
  function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
  }
  
  // Write Your Generator Function Here
  function* genAll()
  {
    yield* new Set(genNumbers());
    yield* new Set(genLetters());
  }
  let generator = genAll();
  
  console.log(generator.next()); // {value: 1, done: false}
  console.log(generator.next()); // {value: 2, done: false}
  console.log(generator.next()); // {value: 3, done: false}
  console.log(generator.next()); // {value: 4, done: false}
  console.log(generator.next()); // {value: 5, done: false}
  console.log(generator.next()); // {value: "A", done: false}
  console.log(generator.next()); // {value: "B", done: false}
  console.log(generator.next()); // {value: "C", done: false}
  console.log(generator.next()); // {value: "D", done: false}
console.groupEnd();


console.group();
import calc from './mod-one.js';
import * as modOne from './mod-two.js';
// main.js File
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60

// mod-two.js File
let a = 10; // Do Not Edit Names
let b = 20; // Do Not Edit Names
let c = 30; // Do Not Edit Names
console.groupEnd();
