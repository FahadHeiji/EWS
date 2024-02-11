document.getElementById('btn').onclick = function () {
    return document.write(`
    <div>
    <button id="btn" style="background-color: black; color : white">btn</button>
    <p>Hi Im New</p>
    <button>Hi im also New btn</button>
    </div>`);

}

console.log("hi");
/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...names) {
//     return `String [${names.join("], [")}] => Done !`;
// };

let names = (...names) => `String [${names.join("], [")}] => Done !`;
;

console.log(names("Akai", "Heiji", "Jin", "Vodka", "Conan"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output




let myNumbers = [20, 50, 10, 60];
// 
// let calc = (one, two, ...nums) => one + two + parseInt(...nums);
let calc = function (one, two, ...nums) {
    return one + two + parseInt(...nums);
}

console.log(calc(10, myNumbers[0], myNumbers[1])); // 80


// Q-01:

console.log("Q-01:");

// console.log(`Hello ${theGender === "Male" ? "Mr" : theGender === "Female" ? "Miss" : ""} ${theName}`);
function sayHello(theName, theGender) {
    theGender = (theGender === "Male") ? "Mr" : theGender === "Female" ? "Miss" : undefined;
    if (theGender === undefined)
        console.log(`Hello ${theName}`);
    else
        console.log(`Hello ${theGender} ${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// Q-02 :

console.log("Q-02:");


function calculate(firstNum, secondNum, operation) {

    if (secondNum === undefined) {
        return console.log("Second Number Not Found");
    }

    switch (operation) {
        case "add":
        case undefined:
            console.log(+firstNum + +secondNum);
            break;
        case "subtract":
            console.log(+firstNum - +secondNum);
            break;
        case "multiply":
            console.log(+firstNum * +secondNum);
            break;
    }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

// Q-03:

console.log("Q-03:");

function ageInTime(theAge) {
    if (theAge < 10 || theAge > 100) {
        console.log("Age Out Of Range");
    }
    else {
        console.log(`Your Age In Years is ${theAge}`);
        console.log(`Your Age In Months is ${theAge * 12}`);
        console.log(`Your Age In Weeks is ${theAge * 12 * 4}`);
        console.log(`Your Age In Days is ${theAge * 12 * 4 * 24}`);
        console.log(`Your Age In Mintues is ${theAge * 12 * 4 * 24 * 60}`);
        console.log(`Your Age In Seconds is ${theAge * 12 * 4 * 24 * 60 * 60}`);
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(23); // Months Example => 456 Months

// Q-04: 
console.log("Q-04:");
function checkStatus(a, b, c) {

    let name = typeof a === "string" ? a : typeof b === "string" ? b : c;
    let age = typeof a === "number" ? a : typeof b === "number" ? b : c;
    let status = typeof a === "boolean" ? a : typeof b === "boolean" ? b : c;
    status = status === true ? "Available" : "NOT Available";

    console.log(`Hello ${name}, Your Age ${age}, Your Are ${status} For Hire`);
}

// Needed Output
checkStatus("Heiji", 18, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(18, "Conan", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Akai"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Kaito Kito", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// Q-05: 
console.log("Q-05:");
function createSelectBox(startYear, endYear) {
    document.write(`<select>`);
    for (let i = startYear; i <= endYear; i++) {
        document.write(`<option value="${i}">${i}</option>`);
    }
    document.write(`</select>`);
}
createSelectBox(2000, 2021);

// Q-06:
console.log("Q-06:");
function multiply(...nums) {
    let result = 1;
    for (let i = 0; i < nums.length; i++) {
        if (typeof nums[i] !== "string") {
            result *= parseInt(nums[i]);
        }

    }

    console.log(result);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
let zName = "Somalia ali";
console.log(``);

// Part 2

// Q-01:
console.log("Q-01:");

function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        return `${zName.substring(0, zName.indexOf(" "))} ${zName.substring(zName.indexOf(" ") + 1, zName.indexOf(" ") + 2).toUpperCase()}.`;
        // Osama Mohamed => Osama M.
        // Ahmed ali => Ahmed A.
    }
    function ageWithMessage(zAge) {
        return `Your Age Is ${parseInt(zAge)}`;
        // 38 Is My Age => Your Age Is 38
        // 32 Is The Age => Your Age Is 32
    }
    function countryTwoLetters(zCountry) {
        return `You Live In ${zCountry.substring(0, 2).toUpperCase()}`;
        // Egypt => You Live In EG
        // Syria => You Live In SY
    }
    function fullDetails() {
        return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY


// Q-02:
console.log("Q-02:");


let itsMe = () => `Iam A Normal Function`;


console.log(itsMe()); // Iam A Normal Function

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;


console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org



// Q-03:
console.log("Q-03:");

let checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble


// Q-04:
console.log("Q-04:");

function specialMix(...data) {
    let result = 0;
    for (let i = 0; i < data.length; i++) {
        if (Number.isNaN(parseInt(data[i]))) {
            continue;
        }

         result += parseInt(data[i]);

    }
    if (result === 0) {
        return "All Is Strings"
    }

    return result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings