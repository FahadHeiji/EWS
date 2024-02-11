
### Status: #week-16

### Tags: #EWS  , #Programming 


The `Array.prototype.every()` method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

Here are the key points:

- **Callback Function**: This function is a predicate, to test each element of the array. It accepts three arguments:
    
    - `element`: The current element being processed in the array.
    - `index` (Optional): The index of the current element being processed in the array.
    - `array` (Optional): The array `every()` was called upon.
- **This Argument**: A value to use as `this` when executing the callback function.
    

In your code, you’ve demonstrated the use of the `every()` method to check if all location numbers are greater than a certain value (`mainLocation`).


### JavaScript Array.prototype.every() Method

- **Definition**: Tests whether all elements in the array pass the test implemented by the provided function.
- **Syntax**: `array.every(callback(element, index, array), thisArg)`
- **Parameters**:
  - `callback`: Function to test for each element.
  - `thisArg` (Optional): A value to use as `this` when executing the callback.
- **Return value**: A `Boolean`. Returns `true` if the callback function returns a truthy value for every array element; otherwise, `false`.

```javascript
const locations = {
  20: "Place 1",
  30: "Place 2",
  50: "Place 3",
  40: "Place 4",
};

let mainLocation = 15;

let locationsArray = Object.keys(locations);

console.log(locationsArray);

let locationArrayNumbers = locationsArray.map((n) => +n);

console.log(locationArrayNumbers);

let check = locationArrayNumbers.every(function (e) {
  return e > this;
}, mainLocation);

console.log(check);
```

______________________________________________________________________


## Related : 

- [[Array some Method]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-15 17:29 
  
  
   ## Modification date :
   
   Monday 15th January 2024 17:29:29