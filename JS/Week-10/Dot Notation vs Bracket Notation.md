
### Status: #week-10

### Tags: #EWS  , #Programming 


- **Dot Notation vs Bracket Notation**: In JavaScript, you can access properties of an object using either dot notation (`.`) or bracket notation (`[]`). Dot notation is more concise and easier to read, but bracket notation allows for more flexibility, such as accessing properties using variables.
    
    ```javascript
    console.log(user.theName); // Dot notation
    console.log(user.country); // Dot notation
    console.log(user.myVar); // Dot notation, but it doesn't work as expected
    console.log(user[myVar]); // Bracket notation
    ```
    
- **Dynamic Property Name**: When you use dot notation, JavaScript will look for a property with the exact name you provided. In your code, `user.myVar` is looking for a property named “myVar”, which doesn’t exist in the `user` object. However, when you use bracket notation with a variable (`user[myVar]`), JavaScript will evaluate the variable to get its value, and then look for a property with that name. In your code, `myVar` is a variable that holds the string “country”, so `user[myVar]` is equivalent to `user["country"]`.
    



______________________________________________________________________


## Related : 

- [[Object – Introduction]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 18:18 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 18:20:03