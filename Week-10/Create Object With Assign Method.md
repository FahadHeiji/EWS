
### Status: #week-10

### Tags: #EWS  , #Programming 


- **Create Object With Assign Method**: The `Object.assign()` method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
    
    ```javascript
    let finalObject = Object.assign(targetObject, obj1, obj2);
    finalObject.prop1 = 200;
    finalObject.prop4 = 4;
    console.log(finalObject);
    ```
    
    In your code, `Object.assign(targetObject, obj1, obj2)` takes `targetObject`, `obj1`, and `obj2` as arguments. It copies the properties from `obj1` and `obj2` to `targetObject` and returns `targetObject`. If a property exists in both `targetObject` and `obj1` or `obj2`, the value from `obj1` or `obj2` will overwrite the value in `targetObject`.
    
- **Create a New Object Without Modifying the Original**: If you don’t want to modify the original object, you can pass an empty object `{}` as the target object.
    
    ```javascript
    let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });
    console.log(newObject);
    ```
    
    In your code, `Object.assign({}, obj1, { prop5: 5, prop6: 6 })` creates a new object, copies the properties from `obj1` and `{ prop5: 5, prop6: 6 }` to the new object, and returns the new object.
    



______________________________________________________________________


## Related : 

- [[Create Object With New Keyword]].
- [[Create Object With Create Method]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 18:27 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 18:27:49