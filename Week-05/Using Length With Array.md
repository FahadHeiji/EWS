
### Status: #week-05

### Tags: #EWS  , #Programming 



```javascript
// Array Methods
// - Length

// Index Start From 0 [ 0, 1, 2, 3, 4 ]

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

myFriends.length = 2;

console.log(myFriends);
```

- `myFriends` is an array with four elements: `"Ahmed"`, `"Mohamed"`, `"Sayed"`, and `"Alaa"`.
- The `length` property of an array returns the number of elements in the array. In this case, `myFriends.length` would return `4`.
- However, you can also set the `length` property to a certain value. When you set `myFriends.length = 2`, it changes the length of the array to `2`. This means it keeps only the first `2` elements and removes the rest.
- So, when you `console.log(myFriends)`, it outputs `["Ahmed", "Mohamed"]` because the rest of the elements have been removed.

Please note that changing the length of an array to a smaller number will permanently remove the elements from the array. If you want to keep the original array intact, consider using methods like `slice()` or `splice()` instead.


______________________________________________________________________


## Related : 

- [[Array Big Introduction]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-13 14:52 
  
  
   ## Modification date :
   
   Wednesday 13th December 2023 14:56:53