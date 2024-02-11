
### Status: #week-05

### Tags: #EWS  , #Programming 


Sure, here are the notes for your JavaScript code:

```javascript
// Arrays Methods [Slicing]
// - slice(Start [Opt], End [Opt] Not Including End)
// - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];

console.log(myFriends); // Outputs: ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"]

// The slice() method returns a shallow copy of a portion of an array into a new array object.
console.log(myFriends.slice()); // Outputs: ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"]
console.log(myFriends.slice(1)); // Outputs: ["Sayed", "Ali", "Osama", "Gamal", "Ameer"]
console.log(myFriends.slice(1, 3)); // Outputs: ["Sayed", "Ali"]
console.log(myFriends.slice(-3)); // Outputs: ["Osama", "Gamal", "Ameer"]
console.log(myFriends.slice(1, -2)); // Outputs: ["Sayed", "Ali", "Osama"]
console.log(myFriends.slice(-4, -2)); // Outputs: ["Ali", "Osama"]

console.log(myFriends); // Outputs: ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"]

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
myFriends.splice(1, 2, "Sameer", "Samara"); // Removes 2 elements from index 1 and adds "Sameer" and "Samara" in their place

console.log(myFriends); // Outputs: ["Ahmed", "Sameer", "Samara", "Osama", "Gamal", "Ameer"]
```

This code demonstrates how to slice and splice an array using the `slice` and `splice` methods.

The `slice` method returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (`end` not included) where `start` and `end` represent the index of items in that array. The original array will not be modified.

The `splice` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The first argument specifies the location at which to begin adding or removing elements. The second argument specifies the number of elements to remove. The third and subsequent arguments are optional; they specify elements to be added to the array.



______________________________________________________________________


## Related : 

- [[Sorting Arrays]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-13 15:26 
  
  
   ## Modification date :
   
   Wednesday 13th December 2023 15:26:19