
### Status: #week-10

### Tags: #EWS  , #Programming 


- **Nested Object**: In JavaScript, objects can be nested within other objects, allowing for more complex data structures. In your code, `addresses` is a nested object within the `user` object, and `egypt` is a nested object within `addresses`.
    
    ```javascript
    let user = {
      name: "Osama",
      age: 38,
      skills: ["HTML", "CSS", "JS"],
      available: false,
      addresses: {
        ksa: "Riyadh",
        egypt: {
          one: "Cairo",
          two: "Giza",
        },
      },
      checkAv: function () {
        if (user.available === true) {
          return `Free For Work`;
        } else {
          return `Not Free`;
        }
      },
    };
    ```
    
- **Accessing Nested Objects**: You can access properties of nested objects using dot notation (`.`) or bracket notation (`[]`). If you want to access properties of nested objects, you can chain the property names together.
    
    ```javascript
    console.log(user.addresses.ksa); // Dot notation
    console.log(user.addresses.egypt.one); // Dot notation
    console.log(user["addresses"].egypt.one); // Bracket notation
    console.log(user["addresses"]["egypt"]); // Bracket notation
    console.log(user["addresses"]["egypt"]["one"]); // Bracket notation
    ```
    
- **Methods in Objects**: JavaScript objects can contain methods. In your code, `checkAv` is a method that checks if the user is available.
    
    ```javascript
    console.log(user.checkAv()); // Calling method
    ```
    


______________________________________________________________________


## Related : 

- [[Object – Introduction]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 18:21 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 18:21:34