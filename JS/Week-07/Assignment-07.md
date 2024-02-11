
### Status: #week-07

### Tags: #EWS  , #Programming 


## 

```JS
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
````



______________________________________________________________________


## Related : 

- 

## Reference: 

1.  


---

  ## Creation date: 
  
  <%tp.file.creation_date()%> 
  
  
   ## Modification date :
   
   <%tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss")%>