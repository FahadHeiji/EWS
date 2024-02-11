
### Status: #week-21

### Tags: #EWS  , #Programming 



[In JavaScript, Promises have three main methods: `.then()`, `.catch()`, and `.finally()`](https://www.freecodecamp.org/news/javascript-promise-methods/)[1](https://www.freecodecamp.org/news/javascript-promise-methods/).

1. **`.then()`**: This method is called when a Promise is successful (i.e., fulfilled). [It takes a function as an argument, which receives the resolved data from the Promise](https://www.freecodecamp.org/news/javascript-promise-methods/)[1](https://www.freecodecamp.org/news/javascript-promise-methods/). Here’s an example:

```javascript
myPromise.then(value => {
  // use value for something
});
```

2. **`.catch()`**: This method is used when a Promise fails (i.e., is rejected). [It takes a function as an argument, which receives the error information from the Promise](https://www.freecodecamp.org/news/javascript-promise-methods/)[1](https://www.freecodecamp.org/news/javascript-promise-methods/). Here’s an example:

```javascript
myPromise.catch(error => {
  // handle error
});
```

3. [**`.finally()`**: This method is called when a Promise is settled, regardless of whether it was fulfilled or rejected](https://www.freecodecamp.org/news/javascript-promise-methods/)[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)[1](https://www.freecodecamp.org/news/javascript-promise-methods/). [It’s useful for cleanup or code that you want to run after the Promise has settled](https://www.freecodecamp.org/news/javascript-promise-methods/)[1](https://www.freecodecamp.org/news/javascript-promise-methods/). Here’s an example:

```javascript
myPromise.finally(() => {
  // runs when the Promise is settled
});
```

[In the `.finally()` method, the callback does not receive any argument, as it’s for when you do not care about the rejection reason or the fulfillment value](https://www.freecodecamp.org/news/javascript-promise-methods/)[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally). [If the handler in `.finally()` throws an error or returns a rejected promise, the promise returned by `.finally()` will be rejected with that value instead](https://www.freecodecamp.org/news/javascript-promise-methods/)[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally).

[Remember, Promises help you write asynchronous code in a more synchronous fashion, making your code easier to read and understand](https://www.freecodecamp.org/news/javascript-promise-methods/)[1](https://www.freecodecamp.org/news/javascript-promise-methods/).


______________________________________________________________________


## Related : 

- [[Promise Intro And Syntax]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-11 09:10 
  
  
   ## Modification date :
   
   Sunday 11th February 2024 09:10:42