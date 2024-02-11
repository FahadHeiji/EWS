
### Status: #week-09

### Tags: #EWS  , #Programming 


- **Filter**: The `filter()` method in JavaScript creates a new array with all elements that pass the test implemented by the provided function. It does not change the original array.
    
    - **Syntax**: `filter(callBackFunction(Element, Index, Array) { }, thisArg)`
        
        - `Element`: The current element being processed in the array.
        - `Index`: The index of the current element being processed in the array.
        - `Array`: The current array.
    - **Examples**:
        
        - **Get Friends With Name Starts With A**: This code filters an array of friends’ names and returns a new array containing only the names that start with “A”.
            
            ```javascript
            let filterdFriends = friends.filter(function (el) {
              return el.startsWith("A") ? true : false;
            });
            console.log(filterdFriends);
            ```
            
        - **Get Even Numbers Only**: This code filters an array of numbers and returns a new array containing only the even numbers.
            
            ```javascript
            let evenNumbers = numbers.filter(function (el) {
              return el % 2 === 0;
            });
            console.log(evenNumbers);
            ```
            
- **Test Map vs Filter**: The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array. The `filter()` method creates a new array with all elements that pass the test implemented by the provided function. The key difference is that `map()` returns a new array of the same length as the original array, while `filter()` returns a new array that may be shorter than the original array (since it only includes elements that pass the test).
    

______________________________________________________________________


## Related : 

- [[Higher Order Functions – Map]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 17:43 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 17:45:23