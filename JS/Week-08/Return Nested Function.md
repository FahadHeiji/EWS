
### Status: #week-08

### Tags: #EWS  , #Programming 



- **Function Inside Function**: This is also known as a nested function. A function defined inside another function. The inner function is only in scope from within the outer function. You can’t call the inner function outside the outer function.
    
    ```javascript
    function sayMessage(fName, lName) {
      let message = `Hello`;
      // Nested Function
      function concatMsg() {
        message = `${message} ${fName} ${lName}`;
      }
      concatMsg();
      return message;
    }
    ```
    
- **Return Function**: Functions in JavaScript are objects, and they can be returned by other functions. The function being returned could be an anonymous function or a named function.
    
    ```javascript
    function sayMessage(fName, lName) {
      let message = `Hello`;
      // Nested Function
      function concatMsg() {
        return `${message} ${fName} ${lName}`;
      }
      return concatMsg();
    }
    ```
    
    In the third example, there is a function `getFullName` inside the function `concatMsg`. This is an example of a function inside a function inside a function.
    
    ```javascript
    function sayMessage(fName, lName) {
      let message = `Hello`;
      // Nested Function
      function concatMsg() {
        function getFullName() {
          return `${fName} ${lName}`;
        }
        return `${message} ${getFullName()}`;
      }
      return concatMsg();
    }
    ```
    

______________________________________________________________________


## Related : 

- [[Function Advanced Examples]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 17:23 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 17:23:32