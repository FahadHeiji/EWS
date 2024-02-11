
### Status: #week-13

### Tags: #EWS  , #Programming 

## Timing Events

- `setInterval(Function, Milliseconds, Additional Params)`: Calls a function or evaluates an expression repeatedly, at specified intervals (in milliseconds). It continues to call the function until `clearInterval()` is called or the window is closed.

- `clearInterval(Identifier)`: Clears a timer set with the `setInterval()` method.

## Examples
```javascript
// setInterval(function () {
//   console.log(`Msg`);
// }, 1000);

// setInterval(sayMsg, 1000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setInterval(sayMsg, 1000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} His Age Is: ${age}`);
// }

let div = document.querySelector("div");

function countdown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(counter);
  }
}

let counter = setInterval(countdown, 1000);
````

These notes cover the basics of timing events in the Browser Object Model (BOM) and provide examples of how to use `setInterval` and `clearInterval` in JavaScript. Remember, these methods are useful for creating repeated actions or delays in your code. 

## Additional Information:

- The `setInterval()` method is often used for animations, updating real-time data, and generally when you need to repeat a task over and over again, at a specific interval.

- The `clearInterval()` method is used to stop further executions of the function specified in the `setInterval()` method.

- Both `setTimeout()` and `setInterval()` return an ID which can be used to clear the timer.

- The `setInterval()` method will continue calling the function until `clearInterval()` is called, or the window is closed. This is why it's important to manage your intervals and clear them when they are no longer necessary, to prevent memory leaks.


______________________________________________________________________


## Related : 

- [[What Is BOM]].
- [[setTimeout and clearTimeout]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-09 10:22 
  
  
   ## Modification date :
   
   Tuesday 9th January 2024 10:22:25