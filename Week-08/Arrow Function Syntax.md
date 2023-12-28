
### Status: #week-08

### Tags: #EWS  , #Programming 



- **Arrow Function**: Arrow functions were introduced in ES6. Arrow functions allow us to write shorter function syntax. They are anonymous and change the way `this` binds in functions.
    
    - **Regular vs Arrow [Param + No Param]**: You can pass parameters into an arrow function. If there are no parameters, you need to use empty parentheses in the declaration:
        
        ```javascript
        let print = function () {
          return 10;
        };
        
        let print = () => 10;
        ```
        
    - If there is only one parameter, you can omit the parentheses:
        
        ```javascript
        let print = function (num) {
          return num;
        };
        
        let print = num => num;
        ```
        
    - If there are multiple parameters, you need to wrap them in parentheses:
        
        ```javascript
        let print = function (num1, num2) {
          return num1 + num2;
        };
        
        let print = (num1, num2) => num1 + num2;
        ```
        
    - **Multiple Lines**: If the function has more than one statement, you need to use curly brackets and a return statement (if the function returns a value):
        
        ```javascript
        let print = (num1, num2) => {
          let result = num1 + num2;
          return result;
        };
        ```
        



______________________________________________________________________


## Related : 

- [[Function Advanced Examples]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 17:24 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 17:24:35