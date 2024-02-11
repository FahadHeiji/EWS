 
### Status: #week-10

### Tags: #EWS  , #Programming 


- **Create Object With Create Method**: The `Object.create()` method creates a new object, using an existing object as the prototype of the newly created object.
    
    ```javascript
    let obj = Object.create({});
    obj.a = 100;
    console.log(obj);
    ```
    
- **Prototype Inheritance**: When you create an object with `Object.create()`, you can set the prototype of the new object to an existing object. This allows the new object to inherit properties and methods from the prototype object.
    
    ```javascript
    let copyObj = Object.create(user);
    copyObj.age = 50;
    console.log(copyObj);
    console.log(copyObj.age);
    console.log(copyObj.doubleAge());
    ```
    
    In your code, `copyObj` is created with `user` as its prototype. So, `copyObj` has access to the `doubleAge` method from `user`. When you call `copyObj.doubleAge()`, it uses the `age` property of `copyObj`, not `user`.
    



______________________________________________________________________


## Related : 

- [[Create Object With New Keyword]].

## Reference: 

1.  


---

  ## Creation date: 
  
  <%tp.file.creation_date()%> 
  
  
   ## Modification date :
   
   <%tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss")%>