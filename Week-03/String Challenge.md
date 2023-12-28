
### Status: #week-03

### Tags: #JS

### Challenge

```javascript
/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(); // Zero

// 8 H
console.log(); // HHHHHHHH

// Return Array
console.log(); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(); // eLZERO WEB SCHOOl
````


#### Solution

```javascript
/*

  String Challenge

  All Solutions Must Be In One Chain

  You Can Use Concatenate

*/

  

let a = "Elzero Web School";

  

// Include This Method In Your Solution [slice, charAt]

console.log(a.charAt(2).toUpperCase()+ a.slice(3, 6)); // Zero

  

// 8 H

console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

  

// Return Array

console.log(a.split(" ", 1)); // ["Elzero"]

  

// Use Only "substr" Method + Template Literals In Your Solution

console.log(a.substr(0 , 7) + `${a.substr(-6, 7)}`); // Elzero School

  

// Solution Must Be Dynamic Because String May Changes

console.log(a.charAt(0).toLowerCase() + a.substr(1 , a.length - 2).toUpperCase() + a.charAt(a.length - 1).toLowerCase()); // eLZERO WEB SCHOOl
```

## Questions and Areas to Review

- \[Question 1\]: 


- \[Question 2\]: 


- \[Question 3\]: 



## Personal Insights and Summary



______________________________________________________________________


## Related : 

- 

## Reference: 

1.  [CodePen](https://codepen.io/Fahad-Mohamed/pen/zYbGZWB).


---

  ## Creation date: 
  
  2023-09-03 18:00 
  
  
   ## Modification date :
   
   Sunday 3rd September 2023 18:01:22