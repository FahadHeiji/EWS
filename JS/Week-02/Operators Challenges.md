
### Status: #week-02  

### Tags: #JS, #EWS 

## Topic 1: 


```javascript
/*
  Challenge 1
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
  - Value:
  - Explain:
  [+]
  - Explain:
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(); // 2000
console.log(); // 173
````

# Answer : 
````js

/*

  Challenge 1

*/

  

let a = 10;

let b = "20";

let c = 80;

  

console.log(++a + +b++ + +c++ - +a++);

console.log(++a + -b + +c++ - -a++ + +a);

console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

  

/*

(11 + 20 + 80 - 11) = 100

a = 12 , b = 21 , c = 81,

........

(13 + (-21) + 81 - (-13) + 14) = (-8 + 94 + 14) = 100

a = 14 , b = 21 , c = 82

.......

(81 + 21 + (13 * 21) - (22 * 13) + 12 - 1) = (102 + 273 - 286 + 11) = (375 - 275) = 100

a = 12 , b = 22 , c = 81

*/

/*

  Challenge 2

*/

  

let d = "-100";

let e = "20";

let f = 30;

let g = true;

  

// Only Use Variables Value

// Do Not Use Variable Twice

console.log(d * -true * e); // 2000

console.log(-d + ++e * ++g + ++f);
````


______________________________________________________________________


## Related : 



## Reference: 

1.   [CodePen](https://codepen.io/Fahad-Mohamed/pen/ZEPGerY?editors=1111).


---

  ## Creation date: 
  
  2023-08-27 14:00 
  
  
   ## Modification date :
   
   Sunday 27th August 2023 15:30:26