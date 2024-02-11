
### Status: #week-03 

### Tags: #JS, #EWS 

## Topic 1: 


```javascript
/*
  Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log();

// Use Variables a + d One Time To Get The Needed Output
console.log(); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log();
console.log();
console.log();
console.log();

// Use Variables b + d To Get This Valus
console.log(); // 66.67 => String
console.log(); // 67 => Number
````


### Solution:

```javascript
/*

  Number Challenge

*/

  

let a = 100;

let b = 2_00.5;

let c = 1e2;

let d = 2.4;

  

// Find Smallest Number In All Variables And Return Integer

console.log(Math.min(a, b, c, d));

  

// Use Variables a + d One Time To Get The Needed Output

console.log(Math.pow(a, 2) * Math.pow(d, 0)); // 10000

  

// Get Integer "2" From d Variable With 4 Methods

console.log(parseInt(d));

console.log(typeof(parseInt(d)));

console.log(Number(parseInt(d)));

console.log(typeof(Number(parseInt(d))));

console.log(Math.floor(d));

console.log(typeof(Math.floor(d)));

console.log(Math.round(d));

console.log(typeof(Math.round(d)));

  

// Use Variables b + d To Get This Valus

console.log(Number(Math.trunc(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String

console.log(typeof(Number(Math.trunc(b) / Math.ceil(d)).toFixed(2))); // 66.67 => String

console.log(Math.round(Number(Math.trunc(b) / Math.ceil(d)).toFixed(2))); // 67 => Number

console.log(typeof(Math.round(Number(Math.trunc(b) / Math.ceil(d)).toFixed(2)))); // 67 => Number
```



______________________________________________________________________


## Related : 

- 

## Reference: 

1.  [CodePen](https://codepen.io/Fahad-Mohamed/pen/PoLqpQB).


---

  ## Creation date: 
  
  2023-09-03 09:05 
  
  
   ## Modification date :
   
   Sunday 3rd September 2023 15:54:19