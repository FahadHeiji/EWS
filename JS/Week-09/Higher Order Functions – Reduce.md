
### Status: #week-09

### Tags: #EWS  , #Programming 


- **Reduce**: The `reduce()` method in JavaScript executes a reducer function on each element of the array, resulting in a single output value. It does not change the original array.
    
    - **Syntax**: `reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)`
        
        - `Accumulator`: The accumulated value previously returned in the last invocation of the callback function.
        - `Current Val`: The current element being processed in the array.
        - `Index`: The index of the current element being processed in the array. Starts from index 0 if an `initialValue` is provided. Otherwise, it starts from index 1.
        - `Array`: The current array.
    - **Example**: This code uses the `reduce()` method to add up all the numbers in an array. It starts with an initial value of `5`, and for each element in the array, it adds the current value to the accumulator and returns the new accumulator value for the next iteration.
        
        ```javascript
        let add = nums.reduce(function (acc, current, index, arr) {
          console.log(`Acc => ${acc}`);
          console.log(`Current Element => ${current}`);
          console.log(`Current Element Index => ${index}`);
          console.log(`Array => ${arr}`);
          console.log(acc + current);
          console.log(`#############`);
          return acc + current;
        }, 5);
        console.log(add);
        ```
        

______________________________________________________________________


## Related : 

- [[Higher Order Functions – Filter]].
- [[Higher Order Functions – Map]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 17:49 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 17:50:03