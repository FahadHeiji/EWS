
### Status: #week-21

### Tags: #EWS  , #Programming 


[In JavaScript, `Promise.all()`, `Promise.allSettled()`, and `Promise.race()` are methods that deal with multiple promises at once](https://blog.logrocket.com/javascript-promises-race-all-allsettled-then/)[1](https://blog.logrocket.com/javascript-promises-race-all-allsettled-then/)[2](https://dev.to/anjankarmakar/mastering-javascript-promises-all-allsettled-race-any-2b1d)[3](https://dev.to/dance2die/promise-race-vs-promise-any-and-promise-all-vs-promise-allsettled-26if).

1. [**`Promise.all()`**: This method takes an array of promises and returns a new promise that only fulfills when all the promises in the array have been fulfilled](https://blog.logrocket.com/javascript-promises-race-all-allsettled-then/)[2](https://dev.to/anjankarmakar/mastering-javascript-promises-all-allsettled-race-any-2b1d). [If any promise in the array is rejected, the returned promise is immediately rejected](https://blog.logrocket.com/javascript-promises-race-all-allsettled-then/)[2](https://dev.to/anjankarmakar/mastering-javascript-promises-all-allsettled-race-any-2b1d). Here’s an example:

```javascript
Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
  .then(values => console.log(values)) // [1, 2, 3]
  .catch(error => console.log(error));
```

2. [**`Promise.allSettled()`**: This method also takes an array of promises but it returns a new promise that fulfills when all the promises in the array have settled, i.e., they have either been fulfilled or rejected](https://blog.logrocket.com/javascript-promises-race-all-allsettled-then/)[4](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled). Here’s an example:

```javascript
Promise.allSettled([Promise.resolve(1), Promise.reject('error'), Promise.resolve(3)])
  .then(values => console.log(values));
  // [
  //   {status: "fulfilled", value: 1},
  //   {status: "rejected", reason: "error"},
  //   {status: "fulfilled", value: 3}
  // ]
```

3. [**`Promise.race()`**: This method takes an array of promises and returns a new promise that fulfills or rejects as soon as one of the promises in the array fulfills or rejects](https://blog.logrocket.com/javascript-promises-race-all-allsettled-then/)[2](https://dev.to/anjankarmakar/mastering-javascript-promises-all-allsettled-race-any-2b1d). Here’s an example:

```javascript
let promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'one'));
let promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'two'));

Promise.race([promise1, promise2])
  .then(value => console.log(value)) // "two"
  .catch(error => console.log(error));
```

[These methods are useful for handling multiple asynchronous operations, allowing you to write more efficient and cleaner code](https://blog.logrocket.com/javascript-promises-race-all-allsettled-then/)[1](https://blog.logrocket.com/javascript-promises-race-all-allsettled-then/)[2](https://dev.to/anjankarmakar/mastering-javascript-promises-all-allsettled-race-any-2b1d)[3](https://dev.to/dance2die/promise-race-vs-promise-any-and-promise-all-vs-promise-allsettled-26if).

______________________________________________________________________


## Related : 

- [[Promise Intro And Syntax]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-11 09:31 
  
  
   ## Modification date :
   
   Sunday 11th February 2024 09:31:58