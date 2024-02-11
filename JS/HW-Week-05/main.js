/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
    console.log(10);
} else if (a >= 10 && a <= 40) {
    console.log("10 To 40");
} else if (a > 40) {
    console.log("> 40");
} else {
    console.log("Unknown");
}


let Result = (a < 10) ? 10 : (a >= 10 && a <= 40) ? "10 To 40" : (a > 40) ? "> 40" : "Unknown";

console.log(Result);
// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";
console.log(st.charAt(st.indexOf("W")).toLowerCase())
// W Position May Change
if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
    console.log("Good");
}
console.log(typeof st.length)

if (typeof st.length !== "string") {
    console.log("Good");
}
console.log(typeof st.length)

if (typeof st.length === "number") {
    console.log("Good");
}

console.log(st.substring(st.indexOf("Elzero"), 6).repeat(2))
if (st.substring(st.indexOf("Elzero"), 6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
}


/*
  Switch Challenge
*/

let job = "Manager";
let salary = 0;

if (job === "Manager") {
    salary = 8000;
} else if (job === "IT" || job === "Support") {
    salary = 6000;
} else if (job === "Developer" || job === "Designer") {
    salary = 7000;
} else {
    salary = 4000;
}

switch (job) {
    case "IT":
    case "Support":
        salary = 6000;
        console.log(job, salary);
        break;
    case "Developer":
    case "Designer":
        console.log(job, salary);
        salary = 7000;
        break;
    case "Manager":
        console.log(job, salary);
        salary = 8000;
        break;

    default:
        console.log(job, salary);
        salary = 4000;
        break;
}



/*
  If Challenge
*/

let holidays = 1;
let money = 0;
if (holidays === 0) {
    money = 5000;
    console.log(`My Money is ${money}`);
}
else if (holidays === 1 || holidays === 2) {
    money = 3000;
    console.log(`My Money is ${money}`);
}
else if (holidays === 3) {
    money = 2000;
    console.log(`My Money is ${money}`);
}
else if (holidays === 4) {
    money = 1000;
    console.log(`My Money is ${money}`);
}
else if (holidays === 5) {
    money = 0;
    console.log(`My Money is ${money}`);
}
else {
    money = 0;
    console.log(`My Money is ${money}`)
}

switch (holidays) {
    case 0:
        money = 5000;
        console.log(`My Money is ${money}`);
        break;
    case 1:
    case 2:
        money = 3000;
        console.log(`My Money is ${money}`);
        break;
    case 3:
        money = 2000;
        console.log(`My Money is ${money}`);
        break;
    case 4:
        money = 1000;
        console.log(`My Money is ${money}`);
        break;
    case 5:
        money = 0;
        console.log(`My Money is ${money}`);
        break;
    default:
        money = 0;
        console.log(`My Money is ${money}`);
}


// Q-01:
console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 || 10 <= 20); // true
console.log(-10 == "-10"); // true
console.log(! -50 != +"-40"); // true
console.log(!10 <= -"-40"); // true
console.log(! "10" !== 10); // true
console.log(!20 === false); // true

// Q-02:

let num1 = 10;
let num2 = 20;
console.log("Q-02"); // true

console.log(num1 < num2); // true
console.log(num2 > num1); // true
console.log(num1 !== num2); // true
console.log(num1 <= num2); // true
console.log(num2 >= num1); // true
console.log(!(num1 == num2)); // true

// Q-03:

console.log("Q-03"); // true

let m = 20;
let b = 30;
let c = 10;

console.log(m == b && m > c || m < b); // true
console.log(m < b < m < c); // true
console.log(!(m > b) && !(m == b) && !(m < c) && !(m <= c)); // true


// Q-01:
console.log("Q-01"); // true


// Test Case 1
let numm1 = 9; // "009"

if (numm1 < 10) {
    numm1 = "00" + numm1;
    console.log(numm1);
}

// Test Case 2
let numm2 = 20; // "020"
if (numm2 > 10 && numm2 < 100) {
    numm2 = "0" + numm2;
    console.log(numm2);
}

// Test Case 3
let numm3 = 110; // "110"

if (numm3 >= 100) {

    console.log(numm3);
}

// Q-02
console.log("Q-02"); // true


let nuu1 = 9;
let str = "9";
let str2 = "20";

if (nuu1 == str) {
    console.log("{nuu1} Is The Same Value As {str}");
}
if (nuu1 == str) {
    if (nuu1 !== str) {
        console.log("{nuu1} Is The Same Value As {str} But Not The Same Type");
    }
}
if (nuu1 != str2 || nuu1 !== str2) {
    console.log("{nuu1} Is Not The Same Value Or The Same Type As {str2}");
}
if (typeof str === typeof str2 && str != str2) {
    console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}
// Output
// "{nuu1} Is The Same Value As {str}"
// "{nuu1} Is The Same Value As {str} But Not The Same Type"
// "{nuu1} Is Not The Same Value Or The Same Type As {str2}"
// "{str} Is The Same Type As {str2} But Not The Same Value"

// Q-03:
console.log("Q-03"); // true
num1 = 10;
num2 = 30;
let num3 = "30";
console.log(num3 > num1 && typeof num3 !== typeof num1 ? "30 Is Larger Than 10 And Type string Not The Same Type As number" : num3 > num1 && num3 == num2 && typeof num3 !== typeof num2 ? "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number" : num3 !== num1 && typeof num3 !== typeof num2 ? "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}" : "unknown");
// Needed Output
// "30 Is Larger Than 10 And Type string Not The Same Type As number"
// "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
// "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

// Q-04:
console.log("Q-04"); // true

// Edit What You Want Here

num1 = 10;
num2 = 0;
num3 = +"10";
let num4 = 41;

/*
Do Not Edit Below This Line
Needed Output
True 7 Times
*/

// Condition 1

if (num1 > num2) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
    console.log("True");
} else {
    console.log("False");
}


// Q-01:

console.log("Q-01"); // true

day = "   Wednesday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

day = day.trim();
day = day.charAt(0).toUpperCase() + day.slice(1);
console.log(day); // true


switch (day) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
        break;
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break;
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break;

    default:
        console.log("Its Not A Valid Day");
        break;
}
// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"