
### Status: #week-09

### Tags: #EWS  , #Programming 



- **Higher Order Functions**: A higher order function is a function that accepts functions as parameters and/or returns a function. This is a key feature of functional programming.
    
- **Map**: The `map()` method in JavaScript creates a new array populated with the results of calling a provided function on every element in the calling array. It does not change the original array.
    
    - **Syntax**: `map(callBackFunction(Element, Index, Array) { }, thisArg)`
        
        - `Element`: The current element being processed in the array.
        - `Index`: The index of the current element being processed in the array.
        - `Array`: The current array.
    - **Notes**: `map()` returns a new array. It does not mutate the original array.
        
    - **Examples**:
        
        - **Anonymous Function**:
            
            ```javascript
            let addSelf = myNums.map(function (element, index, arr) {
              return element + element;
            }, 10);
            ```
            
        - **Named Function**:
            
            ```javascript
            function addition(ele) {
              return ele + ele;
            }
            let add = myNums.map(addition);
            ```
            



______________________________________________________________________


## Related : 

- [[Array Big Introduction]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 17:38 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 17:41:51