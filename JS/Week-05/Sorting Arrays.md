
### Status: #week-05

### Tags: #EWS  , #Programming 


Sure, here are the notes for your JavaScript code:

```javascript
// Arrays Methods [Sort]
// - sort(Function [Opt])
// - reverse

let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

console.log(myFriends); // Outputs: [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10]

console.log(myFriends.sort().reverse()); // Outputs: ["Sayed", "Mohamed", "90", "9000", "20", "10", "10", "-20", "-10", 100]
```

This code demonstrates how to sort and reverse an array using the `sort` and `reverse` methods.

The `sort` method sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.

The `reverse` method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

However, there’s a key point to note here. When you use `sort` on an array that contains both numbers and strings, JavaScript converts numbers to strings and then sorts them in lexicographical (dictionary) order. This can lead to unexpected results, like `"9000"` coming before `"90"`.

If you want to sort numbers as numbers and strings as strings, you’ll need to write a custom sorting function or separate the numbers and strings into different arrays before sorting.


______________________________________________________________________


## Related : 

- [[Searching Array]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-13 15:15 
  
  
   ## Modification date :
   
   Wednesday 13th December 2023 15:19:57