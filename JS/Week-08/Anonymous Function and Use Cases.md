
### Status: #week-08

### Tags: #EWS  , #Programming 



- **Function**: A JavaScript function is a block of code designed to perform a particular task. It is executed when “something” invokes it (calls it).
    
- **Anonymous Function**: These are functions that are declared without any named identifier to refer to it. As such, an anonymous function is usually not accessible after its initial creation.
    
    ```javascript
    let calculator = function (num1, num2) {
      return num1 + num2;
    };
    ```
    
- **Calling Named Function vs Anonymous Function**: Named functions can be called directly using their name. Anonymous functions are usually not callable after their declaration, but they can be referenced by a variable and called through it.
    
- **Argument To Other Function**: Functions can take other functions as arguments, which allows for the creation of higher-order functions that can manipulate other functions.
    
- **Task Without Name**: This is typically done with anonymous functions, where you want to create a function for a task that doesn’t need to be reused elsewhere.
    
- **SetTimeout**: The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds. It is commonly used to set a delay for functions that are executed with JavaScript code.
    
    ```javascript
    setTimeout(function elzero() {
      console.log("Good");
    }, 2000);
    ```
    



______________________________________________________________________


## Related : 

- [[Function Intro And Basic Usage]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 17:20 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 17:20:50