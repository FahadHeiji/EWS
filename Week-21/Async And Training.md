
### Status: #week-21

### Tags: #EWS  , #Programming 



[In JavaScript, `async` is a keyword that is used before a function to make it return a Promise](https://www.w3schools.com/Js/js_async.asp)[1](https://www.w3schools.com/Js/js_async.asp). [The `async` function can contain an `await` expression that pauses the execution of the `async` function and waits for the passed Promise’s resolution, then resumes the `async` function’s execution and returns the resolved value](https://www.w3schools.com/Js/js_async.asp)[1](https://www.w3schools.com/Js/js_async.asp).

Here’s a basic example of an `async` function:

```javascript
async function myFunction() {
  return "Hello";
}
```

This `async` function returns a Promise that resolves with the value “Hello”. You can consume the Promise like this:

```javascript
myFunction().then(value => console.log(value)); // "Hello"
```

The `await` keyword can only be used inside an `async` function. [It makes the function pause and wait for a Promise’s resolution before it continues](https://www.w3schools.com/Js/js_async.asp)[1](https://www.w3schools.com/Js/js_async.asp). Here’s an example:

```javascript
async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  });
  console.log(await myPromise); // "I love You !!"
}
myDisplay();
```

In this example, `myDisplay` is an `async` function that creates a new Promise. The Promise takes two parameters: `resolve` and `reject`, which are both functions. [It resolves the Promise with the string “I love You !!”, then logs the resolved value of the Promise](https://www.w3schools.com/Js/js_async.asp)[1](https://www.w3schools.com/Js/js_async.asp).

If you’re interested in learning more about asynchronous programming in JavaScript, there are many resources available online. [For instance, W3Schools](https://www.w3schools.com/Js/js_async.asp)[1](https://www.w3schools.com/Js/js_async.asp) [and MDN](https://www.w3schools.com/Js/js_async.asp)[2](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing) have comprehensive guides on the topic. [There are also complete courses on platforms like Udemy](https://www.w3schools.com/Js/js_async.asp)[3](https://www.udemy.com/course/asynchronous-programming-in-javascript-complete-course/) [and Codecademy](https://www.w3schools.com/Js/js_async.asp)[4](https://www.codecademy.com/learn/asynchronous-javascript) that can help you gain a deeper understanding of asynchronous programming in JavaScript.

______________________________________________________________________


## Related : 

- [[Callback Hell Or Pyramid Of Doom]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-11 09:36 
  
  
   ## Modification date :
   
   Sunday 11th February 2024 09:36:45