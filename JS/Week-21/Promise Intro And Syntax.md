
### Status: #week-21

### Tags: #EWS  , #Programming 


[A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). [It’s a way to handle asynchronous operations, allowing you to write asynchronous code in a more synchronous fashion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)[2](https://www.w3schools.com/Js/js_promise.asp)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

Here’s the basic syntax of a Promise:

```javascript
let myPromise = new Promise(function(myResolve, myReject) {
  // "Producing Code" (May take some time)
  myResolve(); // when successful
  myReject(); // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```

In this example, `myPromise` is a new Promise object. The Promise constructor takes a function as an argument. This function takes two parameters: `myResolve` and `myReject`, which are both functions. [If the operation was successful, `myResolve` is called, and if it failed, `myReject` is called](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)[2](https://www.w3schools.com/Js/js_promise.asp).

You can use the `.then()` method on a Promise, which takes two arguments: a callback function for success and another for failure. [Both are optional, so you can add a callback for success or failure only](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)[2](https://www.w3schools.com/Js/js_promise.asp).

[Promises can be in one of these states](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise):

- `pending`: initial state, neither fulfilled nor rejected.
- `fulfilled`: meaning that the operation was completed successfully.
- `rejected`: meaning that the operation failed.

[Once a Promise is fulfilled or rejected, it is considered settled](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). [You can chain Promises using `.then()`, `.catch()`, and `.finally()` methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).


______________________________________________________________________


## Related : 

- [[Callback Hell Or Pyramid Of Doom]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-11 09:02 
  
  
   ## Modification date :
   
   Sunday 11th February 2024 09:02:09