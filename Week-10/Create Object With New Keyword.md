
### Status: #week-10

### Tags: #EWS  , #Programming 


- **Create With New Keyword new Object()**: In JavaScript, you can create an object using the `new Object()` syntax. This is one of several ways to create objects in JavaScript.
    
    ```javascript
    let user = new Object({
      age: 20,
    });
    console.log(user);
    ```
    
- **Adding Properties and Methods**: After creating an object, you can add properties and methods to it. You can use either dot notation (`.`) or bracket notation (`[]`) to add properties. To add methods, you can assign a function to a property.
    
    ```javascript
    user.age = 38;
    user["country"] = "Egypt";
    user.sayHello = function () {
      return `Hello`;
    };
    console.log(user);
    console.log(user.age);
    console.log(user.country);
    console.log(user.sayHello());
    ```
    



______________________________________________________________________


## Related : 

- [[Object – Introduction]].

## Reference: 

1.  


---

  ## Creation date: 
  
  <%tp.file.creation_date()%> 
  
  
   ## Modification date :
   
   <%tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss")%>