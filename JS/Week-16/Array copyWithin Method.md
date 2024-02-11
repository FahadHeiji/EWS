
### Status: #week-16

### Tags: #EWS  , #Programming 


The `Array.prototype.copyWithin()` method shallow copies part of an array to another location in the same array and returns it without modifying its length.

Here are the key points:

- **Target**: The index at which to copy the sequences to. If the target is greater than or equal to `array.length`, nothing will be copied. If it is negative, it counts from the end.
    
- **Start**: The index at which to start copying elements from. If `start` is omitted, it will copy from index 0. If it is negative, it counts from the end.
    
- **End**: The index at which to end copying elements from (exclusive). `copyWithin` copies up to but not including `end`. If `end` is omitted, it will reach the end of the array. If it is negative, it counts from the end.
    

### JavaScript Array.prototype.copyWithin() Method

- **Definition**: Shallow copies part of an array to another location in the same array and returns it, without modifying its length.
- **Syntax**: `array.copyWithin(target, start, end)`
- **Parameters**:
  - `target`: The index at which to copy the sequences to.
  - `start` (Optional): The index at which to start copying elements from.
  - `end` (Optional): The index at which to end copying elements from (exclusive).
- **Return value**: The modified array.

```javascript
let myArray = [10, 20, 30, 40, 50, "A", "B"];

// myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]

// myArray.copyWithin(4, 6); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(4, -1); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"]

myArray.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]

console.log(myArray);
```

______________________________________________________________________


## Related : 

- [[Array from Method]].

## Reference: 

1.  


---

  ## Creation date: 
  
  <%tp.file.creation_date()%> 
  
  
   ## Modification date :
   
   <%tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss")%>