
### Status: #week-08

### Tags: #EWS  , #Programming 



- **Scope**: In JavaScript, scope refers to the current context of code, which determines the accessibility (visibility) of variables. There are two types of scope: global scope and local scope.
    
    - **Global Scope**: A variable declared outside a function becomes GLOBAL. A global variable has global scope which means it can be accessed from anywhere in your code. In your code, `a` and `b` are declared in the global scope.
        
        ```javascript
        var a = 1;
        let b = 2;
        ```
        
    - **Local Scope**: Variables declared within a JavaScript function become LOCAL to the function. Local variables have function scope which means they can only be accessed from within the function they were declared. In your code, within the function `showText`, `a` and `b` are local variables.
        
        ```javascript
        function showText() {
          var a = 10;
          let b = 20;
          console.log(`Function - From Local ${a}`);
          console.log(`Function - From Local ${b}`);
        }
        ```
        
    - When you call `showText()`, it will display the local `a` and `b` values, which are `10` and `20`, respectively. But when you log `a` and `b` outside the function, it will display the global `a` and `b` values, which are `1` and `2`, respectively.
        


______________________________________________________________________


## Related : 

- [[Var, Let, Const Compare]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 17:26 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 17:26:30