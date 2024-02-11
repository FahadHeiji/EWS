
### Status: #week-19

### Tags: #EWS  , #Programming 


A **generator** is a special type of function in JavaScript that can be exited and later re-entered with its context (variable bindings) saved across re-entrances. Generators are a feature of ECMAScript 6 (ES6).

Here’s how you can define a generator function:

```javascript
function* generatorFunction() {
  yield 'Hello';
  yield 'World';
}
```

The function keyword is followed by an asterisk (*) to denote a generator function. Inside the function, the `yield` keyword is used to pause and resume the function execution.

You can use the generator function like this:

```javascript
let generator = generatorFunction();

console.log(generator.next().value); // Outputs: 'Hello'
console.log(generator.next().value); // Outputs: 'World'
console.log(generator.next().value); // Outputs: undefined
```

Calling a generator function does not execute its body immediately; instead, it returns a special iterator object (specifically, a Generator object) that controls the execution of the function. Each call to the generator’s `next()` method resumes the function execution and returns an object with two properties: `value` and `done`. The `value` property contains the value of the `yield` expression where the function was paused, and `done` is a boolean indicating whether the function has finished execution.

Generators are very powerful and can be used for a variety of tasks, such as simplifying asynchronous code, creating infinite data structures, or implementing the iterator pattern in a more convenient way. They are a fundamental part of modern JavaScript and are used in many popular libraries and frameworks.


______________________________________________________________________


## Related : 

- [[Function Intro And Basic Usage]].
- [[Date And Time Introduction]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-08 13:51 
  
  
   ## Modification date :
   
   Thursday 8th February 2024 13:51:27