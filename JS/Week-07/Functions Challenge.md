
### Status: #week-07

### Tags: #EWS  , #Programming 


## 
```js

/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/
```


```JS

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
````



______________________________________________________________________


## Related : 

- 

## Reference: 

1.  [CodePen](https://codepen.io/Fahad-Mohamed/pen/qBvdmdp).


---

  ## Creation date: 
  
  2023-12-28 17:07 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 17:09:37