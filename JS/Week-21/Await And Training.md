
### Status: #week-21

### Tags: #EWS  , #Programming 


[In JavaScript, `await` is an operator used to pause and resume JavaScript’s execution until a promise is settled (i.e., either fulfilled or rejected)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await). [It can only be used inside an `async` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await).

Here’s an example of how `await` can be used:

```javascript
async function example() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}
```

In this example, `example` is an `async` function that fetches data from a URL. The `await` keyword makes JavaScript wait until the `fetch` promise settles, then resumes the `async` function’s execution and assigns the resolved value to `response`. [Then it waits again for the `response.json()` promise to settle and assigns its resolved value to `data`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await).

If you’re interested in learning more about `async` and `await` in JavaScript, there are many resources available online. [For instance, MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) [and JavaScript.info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)[2](https://javascript.info/async-await) have comprehensive guides on the topic. [There are also complete courses on platforms like Udemy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)[3](https://masteringjs.io/tutorials/fundamentals/async-await) [and Codecademy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)[4](https://blog.javascripttoday.com/blog/async-await-in-javascript/) that can help you gain a deeper understanding of asynchronous programming in JavaScript.

______________________________________________________________________


## Related : 

- [[Async And Training]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-11 09:41 
  
  
   ## Modification date :
   
   Sunday 11th February 2024 09:41:22