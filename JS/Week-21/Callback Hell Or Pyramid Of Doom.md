
### Status: #week-21

### Tags: #EWS  , #Programming 


[“Callback Hell” or “Pyramid of Doom” is a term used to describe situations in which nested callback functions make code difficult to read and maintain](https://dev.to/yemiklein/javascript-callback-hell-and-how-to-avoid-it-12nk)[1](https://dev.to/yemiklein/javascript-callback-hell-and-how-to-avoid-it-12nk). [This can happen when using callback functions to handle asynchronous operations in JavaScript](https://dev.to/yemiklein/javascript-callback-hell-and-how-to-avoid-it-12nk)[2](https://medium.com/dsc-srm/javascript-callback-hell-or-pyramid-of-doom-4f786d14b997)[3](https://www.geeksforgeeks.org/what-to-understand-callback-and-callback-hell-in-javascript/).

Here’s a simple example of how it can occur:

```javascript
doSomething(result => {
  doSomethingElse(result, newResult => {
    doAnotherThing(newResult, finalResult => {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

[In this example, each function gets an argument which is another function that is called with a parameter that is the response of the previous action](https://dev.to/yemiklein/javascript-callback-hell-and-how-to-avoid-it-12nk)[2](https://medium.com/dsc-srm/javascript-callback-hell-or-pyramid-of-doom-4f786d14b997). This nesting of callbacks leads to code that is harder to read and understand, hence the term “Callback Hell” or “Pyramid of Doom”.

[To avoid this, you can use Promises, async/await, or libraries like async.js that provide powerful functions for working with asynchronous JavaScript](https://dev.to/yemiklein/javascript-callback-hell-and-how-to-avoid-it-12nk)[2](https://medium.com/dsc-srm/javascript-callback-hell-or-pyramid-of-doom-4f786d14b997)[3](https://www.geeksforgeeks.org/what-to-understand-callback-and-callback-hell-in-javascript/).

______________________________________________________________________


## Related : 

- [[Asynchronous vs Synchronous]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-11 08:49 
  
  
   ## Modification date :
   
   Sunday 11th February 2024 08:49:14