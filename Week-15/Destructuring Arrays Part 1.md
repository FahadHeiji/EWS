
### Status: #week-15

### Tags: #EWS  , #Programming 


# JavaScript Destructuring

Destructuring is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables.

## Destructuring Array

In the given code, array destructuring is demonstrated.

```javascript
let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

// Array Destructuring
let [a = "A", b, c, d, e = "Osama"] = myFriends;

console.log(a); // Outputs: Ahmed
console.log(b); // Outputs: Sayed
console.log(c); // Outputs: Ali
console.log(d); // Outputs: Maysa
console.log(e); // Outputs: Osama because there's no fifth element in the array

// Skipping items in an array
let [, y, , z] = myFriends;

console.log(y); // Outputs: Sayed
console.log(z); // Outputs: Maysa
````

In this code, the `myFriends` array is destructured into individual variables `a`, `b`, `c`, `d`, and `e`. The values of these variables are logged to the console. Additionally, the code demonstrates how to skip certain elements during destructuring by leaving their places empty in the destructuring assignment.



______________________________________________________________________


## Related : 

- [[Assignment Operators]].
- [[Array Big Introduction]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-14 07:59 
  
  
   ## Modification date :
   
   Sunday 14th January 2024 08:00:05