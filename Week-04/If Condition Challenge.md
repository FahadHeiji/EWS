
### Status: #week-04

### Tags: #EWS  , #Programming 




```JavaScript
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
````


______________________________________________________________________


## Related : 

- 

## Reference: 

1.  [CodePen](https://codepen.io/Fahad-Mohamed/pen/OJqVpvB).


---

  ## Creation date: 
  
  2023-12-12 16:30 
  
  
   ## Modification date :
   
   Tuesday 12th December 2023 17:10:10