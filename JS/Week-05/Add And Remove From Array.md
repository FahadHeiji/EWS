
### Status: #week-05

### Tags: #EWS  , #Programming 




```javascript
// Arrays Methods [Adding And Removing]
// - unshift("", "") Add Element To The First
// - push("", "") Add Element To The End
// - shift() Remove First Element From Array
// - pop() Remove Last Element From Array

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(myFriends); // Outputs: ["Ahmed", "Mohamed", "Sayed", "Alaa"]

myFriends.unshift("Osama", "Nabil"); // Adds "Osama" and "Nabil" to the beginning of the array

console.log(myFriends); // Outputs: ["Osama", "Nabil", "Ahmed", "Mohamed", "Sayed", "Alaa"]

myFriends.push("Samah", "Eman"); // Adds "Samah" and "Eman" to the end of the array

console.log(myFriends); // Outputs: ["Osama", "Nabil", "Ahmed", "Mohamed", "Sayed", "Alaa", "Samah", "Eman"]

let first = myFriends.shift(); // Removes the first element from the array and assigns it to the variable 'first'

console.log(myFriends); // Outputs: ["Nabil", "Ahmed", "Mohamed", "Sayed", "Alaa", "Samah", "Eman"]

console.log(`First Name Is ${first}`); // Outputs: First Name Is Osama

let last = myFriends.pop(); // Removes the last element from the array and assigns it to the variable 'last'

console.log(myFriends); // Outputs: ["Nabil", "Ahmed", "Mohamed", "Sayed", "Alaa", "Samah"]

console.log(`Last Name Is ${last}`); // Outputs: Last Name Is Eman
```

This code demonstrates how to add and remove elements from an array using the `unshift`, `push`, `shift`, and `pop` methods. The `unshift` method adds one or more elements to the beginning of an array and returns the new length of the array. The `push` method adds one or more elements to the end of an array and returns the new length of the array. The `shift` method removes the first element from an array and returns that removed element. The `pop` method removes the last element from an array and returns that removed element.


______________________________________________________________________


## Related : 

- [[Array Big Introduction]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-13 14:57 
  
  
   ## Modification date :
   
   Wednesday 13th December 2023 14:57:04