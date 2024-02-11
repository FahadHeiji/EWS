
### Status: #week-05

### Tags: #EWS  , #Programming 


Sure, here are the notes for your JavaScript code:

```javascript
// Arrays Methods [Joining]
// - concat(array, array) => Return A New Array
// - join(Separator)

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

// The concat() method is used to merge two or more arrays and returns a new array.
let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);

console.log(allFriends); // Outputs: ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer", "Samar", "Sameh", "Haytham", "Shady", "Gameel", 1, 2]

// The join() method creates and returns a new string by concatenating all of the elements in an array.
console.log(allFriends.join()); // Outputs: Ahmed,Sayed,Ali,Osama,Gamal,Ameer,Samar,Sameh,Haytham,Shady,Gameel,1,2
console.log(allFriends.join("")); // Outputs: AhmedSayedAliOsamaGamalAmeerSamarSamehHaythamShadyGameel12
console.log(allFriends.join(" @ ")); // Outputs: Ahmed @ Sayed @ Ali @ Osama @ Gamal @ Ameer @ Samar @ Sameh @ Haytham @ Shady @ Gameel @ 1 @ 2
console.log(allFriends.join("|")); // Outputs: Ahmed|Sayed|Ali|Osama|Gamal|Ameer|Samar|Sameh|Haytham|Shady|Gameel|1|2
console.log(allFriends.join("|").toUpperCase()); // Outputs: AHMED|SAYED|ALI|OSAMA|GAMAL|AMEER|SAMAR|SAMEH|HAYTHAM|SHADY|GAMEEL|1|2
```

This code demonstrates how to join arrays and their elements using the `concat` and `join` methods.

The `concat` method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

The `join` method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

I hope this helps! If you have any more questions about JavaScript, feel free to ask! 😊
______________________________________________________________________


## Related : 

- 

## Reference: 

1.  


---

  ## Creation date: 
  
  <%tp.file.creation_date()%> 
  
  
   ## Modification date :
   
   <%tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss")%>