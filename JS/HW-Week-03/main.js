// Challenge 01
let titleName = "Heiji";
let articalDesc = "Detective Conan";
let relaseDate = "02/12/2023";

let atricalCard = `
<dive class ="card">
<h3>${titleName}</h3>
<p>${articalDesc}</p>
<span>${relaseDate}</span>
</div>
`;

document.write(atricalCard.repeat(5));

// 
/*
  Challenge 2
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  [++a] [+]
  [++a]
  - Value: (11) + (20 / next time 21) +  (80 / next time 81) - (11 / next time 12) => 11 + 20 + 80 - 11 = 100;
  - Explain: 
  [+]
  - Explain: ++a = pre, +b++ = Unary plus + Post , +c++ = Unary plus + Post , +a++ = Unary plus + Post;
  */
/*
[++a] [+]
[++a]
- Value: (13) + (-21) + (81 / next time 82) - (-13) + (14) => 13 - 21 + 81 + 13 + 14 = -8 + 108 = 100; 
- Explain: ++a = pre, -b = Unary Negative , +c++ = Unary plus + Post , +a++ = Unary Negative + Post, +a = Unary plus;
[+]
- Explain:
*/

/*
[++a] [+]
[++a]
  - Value: (81) + (21) + (13) * (21 / next time 22) - (22) * (13) + (12) - (1) => 81 + 21 + (13 * 21 ) - (22 * 13) + 12 - 1 = 102 + 273 - 286 + 11 = 375 - 275 = 100
  - Explain:
  [+]
  - Explain:
*/

/*
  Challenge 3
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * e + (f % g++)); // 2000
console.log(++e * g + ++f + -d); // 173


// Q-01:
// Add Variables Here
let numOne = 10, numTwo = 20;
// Ouput
console.log(numOne +""+numTwo); // Normal Concatenate => 1020
console.log(typeof(numOne +""+numTwo)); // Normal Concatenate => String
console.log(`${numOne}${numTwo}`); // Template Literals Way => 1020
console.log(typeof(`${numOne}${numTwo}`)); // Template Literals Way => String

console.log(numOne + "\n" + numTwo);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numOne}
${numTwo}`);
/*
  Template Literals Way
  20
  10
*/

// Q-02:

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

// Q-3:
// `I'm In
// \\
// Love \\ """ '''
// ++ With ++
// \"""\"""
// ""JavaScript""``
let text = "\`I\'m In\n\\\\\nLove \\\\ \"\"\" \'\'\'\n++ With ++\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"\`\`";

console.log(text);

// Q-04:

let z = 21;
let x = 20;

console.log("_"+(`${z}_${x}`).repeat(4)+"_"); // _21_2021_2021_2021_20_

// Q-01:

// Replace ? With Arithmetic Operators
console.log((10 * 20 * 15 * 3) * (190 % 10 * 400)); // 0

// Q-02:

let num = 3;
let tr = true;

// Solution One
console.log(num * ++tr); // 6

// Solution Two
console.log(num++ + ++tr); // 6

// Soultion Three
console.log(num + ++num - tr++); // 6

// Soultion Four
console.log(++num); // 6

// Solution Five
console.log(--num - --num + ++tr); // 6

// Solution Six
console.log((++tr - ++num) * tr); // 6

// Q-03:
let numm = "10";

// Solution One

console.log(+numm + numm++); // 20


// Solution Two

console.log(--numm + numm); // 20


// Solution Three

console.log(numm / numm * numm + numm++); // 20


// Solution Four

console.log(numm - --numm + --numm + ++numm ); // 20


// Solution Five

console.log(+`${numm + numm}`); // 20


// Q-04:

let points = 10;

++points;
++points;
++points;

console.log(points); // 13

// Write Your Code Here
--points;
--points;
--points;
--points;
--points;
console.log(points); // 8;