
### Status: #week-15

### Tags: #EWS  , #Programming 


### Advanced Array Destructuring in JavaScript

In JavaScript, array destructuring can also be used with nested arrays.

Example:

```javascript
let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

// Advanced Array Destructuring
let [, , , [a, , [, b]]] = myFriends;

console.log(a); // Outputs: Shady
console.log(b); // Outputs: Gamal
````

In this code, the `myFriends` array is a nested array. The destructuring assignment skips certain elements and assigns the values of certain nested elements to the variables `a` and `b`.


In your code, you have a nested array `myFriends`. You then use array destructuring to assign the values of certain elements to the variables `a` and `b`.

Here’s what happens step by step:

1. `let [, , , [a, , [, b]]] = myFriends;` This line of code uses array destructuring to assign the first element of the third nested array to the variable `a` and the second element of the second nested array within the third nested array to the variable `b`. The commas without variable names are skipping the elements at those positions.
    
2. `console.log(a); console.log(b);` These lines of code print the values of the variables `a` and `b` to the console.
    

So, in this example, `a` will be “Shady” and `b` will be “Gamal”. This demonstrates how array destructuring can be used with nested arrays in JavaScript.

Here’s an organized note on this advanced example:




______________________________________________________________________


## Related : 

- [[Destructuring Arrays Part 1]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-14 08:01 
  
  
   ## Modification date :
   
   Sunday 14th January 2024 08:01:27