
### Status: #week-08

### Tags: #EWS  , #Programming 


- [**Lexical Scope**: Lexical Scope in JavaScript refers to the accessibility or visibility of variables, functions, and objects based on their physical location in the source code](https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/)[1](https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/)[2](https://www.geeksforgeeks.org/lexical-scope-in-javascript/). [It’s also important to note that nested functions have access to variables declared in their outer scope](https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/)[1](https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/)[2](https://www.geeksforgeeks.org/lexical-scope-in-javascript/).
    
    ```javascript
    function parent() {
      let a = 10;
    
      function child() {
        console.log(a);
        console.log(`From Child ${b}`);
    
        function grand() {
          let b = 100;
          console.log(`From Grand ${a}`);
          console.log(`From Grand ${b}`);
        }
        grand();
      }
      child();
    }
    parent();
    ```
    
- [**Execution Context**: Execution Context is an abstract concept in JavaScript that tracks the execution of a function or the global code](https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/)[3](https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/)[4](https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/). [It contains the code that’s currently running, and everything that aids in its execution](https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/)[3](https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/)[4](https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/). [There are two kinds of Execution Context in JavaScript: Global Execution Context (GEC) and Function Execution Context (FEC)](https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/)[3](https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/).
    
- [**Lexical Environment**: Lexical Environment is a data structure that holds identifier-variable mapping](https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/)[5](https://tutorial.eyehunts.com/js/lexical-environment-in-javascript/)[6](https://brijeshyadav834.medium.com/lexical-environment-in-js-41c36379a6f2). [Here identifier refers to the name of variables/functions, and variable is the reference to actual object (including function type object) or primitive value](https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/)[5](https://tutorial.eyehunts.com/js/lexical-environment-in-javascript/)[6](https://brijeshyadav834.medium.com/lexical-environment-in-js-41c36379a6f2). [A lexical environment also holds a reference to a parent lexical environment](https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/)[7](https://stackoverflow.com/questions/12599965/lexical-environment-and-function-scope)[5](https://tutorial.eyehunts.com/js/lexical-environment-in-javascript/).
    




______________________________________________________________________


## Related : 

- [[Scope – Block]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 17:28 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 17:28:36