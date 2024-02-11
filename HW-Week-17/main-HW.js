// Q-01:
console.log("Q-01");
let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log(Array.from(setOfNumbers)[setOfNumbers.size - 1]);

console.log("#".repeat(20));

// Q-02:
console.log("Q-02");

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log([...new Set(myFriends)].sort());
// Needed Output
(4)['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

console.log("#".repeat(20));

// Q-03:
console.log("Q-03");

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};
console.log(myInfo);
let myInfoMap = new Map();

Object.keys(myInfo).forEach((e, i) => myInfoMap.set(e, Object.values(myInfo)[i]), Object.values(myInfo));


console.log(myInfoMap);
console.log(myInfoMap.size);
console.log(myInfoMap.has("role"));
console.log("#".repeat(20));

// Q-04:
console.log("Q-04");

let theNumber = 100020003000;
console.log(+Array.from(new Set([...theNumber.toString()].filter((e) => e != false).map((e) => +e).sort())).join(""));
// Needed Output
// 123

console.log("#".repeat(20));

// Q-05:
console.log("Q-05");

let theName = "Elzero";

console.log([...theName])
console.log(Array.from(theName))
console.log(Array.from(new Set(...[theName])))
console.log([...theName].copyWithin(0))
console.log([...new Set(theName)])
// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

console.log("#".repeat(20));



// Q-06:
console.log("Q-06");

let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

chars.sort((a, b) => {
  return typeof a === "string" && typeof b === "string" ? 1 :
    typeof a === "number" ? -1 :
      typeof b === "number" ? 1 : 0;
});

let numberCounter;

chars.some((e, i) => {
  numberCounter = i ;
  return (typeof e === "string");
})
console.log(chars.copyWithin(0,numberCounter,numberCounter*2))

// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]


console.log("#".repeat(20));

// Q-07:
console.log("Q-07");

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
console.log([...numsOne,...numsTwo])
console.log(numsOne.concat(numsTwo))
console.log([...new Set(numsOne),...Array.from(numsTwo)])
// Needed Output
// [1, 2, 3, 4, 5, 6]

console.log("#".repeat(20));


// Q-08:
console.log("Q-08");

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Math.max(...n1,...n2) * [...n1,...n2].length)
// Needed Output
// 210

console.log("#".repeat(20));