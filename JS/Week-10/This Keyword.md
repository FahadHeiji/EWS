
### Status: #week-10

### Tags: #EWS  , #Programming 


- **this Keyword**: In JavaScript, the `this` keyword refers to the object that the current function or method is operating on. [The value of `this` can change depending on the context in which it is used](https://www.w3schools.com/js/js_this.asp)[1](https://www.w3schools.com/js/js_this.asp)[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)[3](https://webreference.com/javascript/basics/this/)[4](https://www.geeksforgeeks.org/javascript-this-keyword/).
    
    ```javascript
    console.log(this);
    console.log(this === window);
    ```
    
- **Global Object**: In a browser, the global object is the `window` object. [All global variables and functions become properties and methods of the `window` object](https://www.w3schools.com/js/js_this.asp)[1](https://www.w3schools.com/js/js_this.asp)[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this).
    
    ```javascript
    myVar = 100;
    console.log(window.myVar);
    console.log(this.myVar);
    ```
    
- [**Function Context**: Inside a function, the value of `this` depends on how the function is called](https://www.w3schools.com/js/js_this.asp)[1](https://www.w3schools.com/js/js_this.asp)[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this). [In the global execution context (outside of any function), `this` refers to the global object (`window` in browsers)](https://www.w3schools.com/js/js_this.asp)[1](https://www.w3schools.com/js/js_this.asp)[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this). [In function context, the global object is the default binding for `this`](https://www.w3schools.com/js/js_this.asp)[1](https://www.w3schools.com/js/js_this.asp)[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this).
    
    ```javascript
    function sayHello() {
      console.log(this);
      return this;
    }
    sayHello();
    console.log(sayHello() === window);
    ```
    
- [**this Inside Object Method**: When a function is called as a method of an object, `this` is set to the object the method is called on](https://www.w3schools.com/js/js_this.asp)[1](https://www.w3schools.com/js/js_this.asp)[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this).
    
    ```javascript
    let user = {
      age: 38,
      ageInDays: function () {
        console.log(this);
        return this.age * 365;
      },
    };
    console.log(user.age);
    console.log(user.ageInDays());
    ```
    
- **Strict Mode**: JavaScript’s strict mode is a way to opt into a restricted variant of JavaScript, thereby implicitly opting-out of “sloppy mode”. [In strict mode, `this` is `undefined` for functions that are not methods or constructors](https://www.w3schools.com/js/js_this.asp)[5](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)[6](https://stackoverflow.com/questions/8651415/what-is-strict-mode-and-how-is-it-used)[7](https://dev.to/accreditly/understanding-javascript-strict-mode-4e3j)[8](https://programmingwithmosh.com/javascript/what-is-strict-mode-in-javascript/)[9](https://www.tutorialspoint.com/what-is-strict-mode-in-javascript-and-how-to-enable-it).
    



______________________________________________________________________


## Related : 

- [[Create Object With New Keyword]].
- [[Object – Introduction]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 18:23 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 18:23:11