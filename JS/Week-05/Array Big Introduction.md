
### Status: #week-05

### Tags: #EWS  , #Programming 


## Array Big Introduction

```JS
// Creating Arrays
// There are two methods to create arrays in JavaScript:
// 1. Using an array literal: []
// 2. Using the new Array() constructor

let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]]; // This is an example of an array literal. It also shows that arrays can be nested.

// Accessing Array Elements
// Array elements can be accessed using their index. Array indices start from 0.

console.log(`Hello ${myFriends[0]}`); // Outputs: Hello Ahmed
console.log(`Hello ${myFriends[2]}`); // Outputs: Hello Sayed
console.log(`Hello ${myFriends[3][1]}`); // Outputs: Hello Ali. This is an example of accessing elements in a nested array.

// Changing Array Elements
// Array elements can be changed by directly assigning a new value to a specific index.

myFriends[1] = "Gamal"; // Changes the second element (index 1) of the array to "Gamal"
myFriends[3] = ["Sameh", "Ameer"]; // Changes the fourth element (index 3) of the array to a new array ["Sameh", "Ameer"]

// Checking if an Object is an Array
// The Array.isArray() function can be used to check if an object is an array.

console.log(Array.isArray(myFriends)); // Outputs: true. This means myFriends is an array.

````



______________________________________________________________________


## Related : 

- [[Data Types And Typeof Operator]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-13 14:47 
  
  
   ## Modification date :
   
   Wednesday 13th December 2023 14:51:30