
### Status: #week-05

### Tags: #EWS  , #Programming 



```JS
/*

  Array Challenge

*/

  

let zero = 0;

  

let counter = 3;

  

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

  

// Write Code Here

  

my = my.reverse();

my.shift();

my.shift();

  

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

  

console.log(my.slice(++zero, my.length--)); // ["Elham", "Mazero"]

my.splice(--zero, 3, "Elzero");

console.log(my); // "Elzero"

  

console.log(my[zero][my[zero].length - --counter] + my[zero][my[zero].length - --counter].toUpperCase()); // "rO"
````



______________________________________________________________________


## Related : 

- 

## Reference: 

1.  [CodePen](https://codepen.io/Fahad-Mohamed/pen/NWJqpzJ?editors=1111).


---

  ## Creation date: 
  
  2023-12-28 16:36 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 16:37:14