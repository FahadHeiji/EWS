
### Status: #week-09

### Tags: #EWS  , #Programming 


## 

```JS
// Q-01:

console.log("Q-01:");

  

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

  

let word = mix.map((char) => isNaN(char) ? char : "").reduce((preChar, currentChar) => `${preChar}${currentChar}`);

  

console.log(word); // Elzero

  

// Q-02:

console.log("Q-02:");

  
  

myString = "EElllzzzzzzzeroo";

  

word = myString.split("").filter((char, index) => myString.indexOf(char) === index).join("");

console.log(word); // Elzero

  
  

// Q-03:

console.log("Q-03:");

  

let myArray = ["E", "l", "z", ["e", "r"], "o"];

word = [].concat(...myArray).reduce((preChar, currentChar) => preChar + currentChar);

console.log(word); // Elzero

  
  

// Q-04:

console.log("Q-04:");

  

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let nums = numsAndStrings.filter((char) => isFinite(char)).map((num) => -num);

console.log(nums); // [-1, -10, 10, 20, -5, -3]

  

// Q-05:

console.log("Q-05:");

  

nums = [2, 12, 11, 5, 10, 1, 99];

let newNums = nums.reduce((acc, current) => current % 2 === 0 ? acc * current : acc + current, 1);

console.log(newNums)// 500
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