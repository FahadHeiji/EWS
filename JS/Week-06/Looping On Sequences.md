
### Status: #week-06

### Tags: #EWS  , #Programming 



1. **Loop on Sequences**: This is a common pattern in programming where you iterate over a sequence (like an array) and perform some operation on each element.
    
2. **Example**: Your provided code is an example of a loop on sequences:
    

```javascript
let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];

let onlyNames = [];

for (let i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] === "string") {
    onlyNames.push(myFriends[i]);
  }
}

console.log(onlyNames);
```

In this example:

- `myFriends` is an array that contains a mix of numbers and strings.
- `onlyNames` is an empty array that will hold only the names from the `myFriends` array.
- The `for` loop iterates over each element in the `myFriends` array.
- Inside the loop, there’s an `if` statement that checks if the current element is a string (a name). If it is, it’s added to the `onlyNames` array using the `push` method.
- After the loop, `console.log(onlyNames);` prints the `onlyNames` array to the console, which will contain only the names from the `myFriends` array.

The commented out code at the end shows two ways to print all elements of the `myFriends` array to the console: one by one using multiple `console.log` statements, and all at once using a `for` loop. The `for` loop is more efficient, especially for large arrays.


______________________________________________________________________


## Related : 

- [[Loop - For And Concept Of Loop]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-14 13:08 
  
  
   ## Modification date :
   
   Thursday 14th December 2023 13:14:04