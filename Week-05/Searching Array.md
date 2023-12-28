
### Status: #week-05

### Tags: #EWS  , #Programming 


Sure, here are the notes for your JavaScript code:

```javascript
// Arrays Methods [Search]
// - indexOf(Search Element, From Index [Opt])
// - lastIndexOf(Search Element, From Index [Opt])
// - includes(valueToFind, fromIndex [Opt]) [ES7]

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

console.log(myFriends); // Outputs: ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"]

console.log(myFriends.indexOf("Ahmed")); // Outputs: 0. This is the index of the first occurrence of "Ahmed" in the array.

console.log(myFriends.indexOf("Ahmed", 2)); // Outputs: 4. This is the index of the first occurrence of "Ahmed" in the array starting from index 2.

console.log(myFriends.lastIndexOf("Ahmed")); // Outputs: 4. This is the index of the last occurrence of "Ahmed" in the array.

console.log(myFriends.lastIndexOf("Ahmed", -2)); // Outputs: 0. This is the index of the last occurrence of "Ahmed" in the array starting from the end and moving 2 places to the left.

console.log(myFriends.includes("Ahmed")); // Outputs: true. This checks if "Ahmed" is included in the array.

console.log(myFriends.includes("Ahmed", 2)); // Outputs: true. This checks if "Ahmed" is included in the array starting from index 2.

if (myFriends.lastIndexOf("Osama") === -1) {
  console.log("Not Found"); // Outputs: "Not Found". This checks if "Osama" is in the array. If not, it outputs "Not Found".
}

console.log(myFriends.indexOf("Osama")); // Outputs: -1. This is the index of the first occurrence of "Osama" in the array. If the element is not found, it returns -1.

console.log(myFriends.lastIndexOf("Osama")); // Outputs: -1. This is the index of the last occurrence of "Osama" in the array. If the element is not found, it returns -1.
```

This code demonstrates how to search for elements in an array using the `indexOf`, `lastIndexOf`, and `includes` methods. The `indexOf` method returns the first index at which a given element can be found in the array, or `-1` if it is not present. The `lastIndexOf` method returns the last index at which a given element can be found in the array, or `-1` if it is not present. The `includes` method determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate.


______________________________________________________________________


## Related : 

- [[Add And Remove From Array]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-13 15:02 
  
  
   ## Modification date :
   
   Wednesday 13th December 2023 15:19:33