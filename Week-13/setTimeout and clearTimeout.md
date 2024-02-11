
### Status: #week-13

### Tags: #EWS  , #Programming 


## Timing Events
- `setTimeout(Function, Timeout, Additional Params)`: Calls a function or evaluates an expression after a specified number of milliseconds.
- `clearTimeout(Identifier)`: Clears a timer set with the `setTimeout()` method.

## Examples
```javascript
 setTimeout(function () {
   console.log("Msg");
 }, 3000);

 setTimeout(sayMsg, 3000);

 function sayMsg() {
   console.log(`Iam Message`);
 }

 setTimeout(sayMsg, 3000, "Osama", 38);

 function sayMsg(user, age) {
   console.log(`Iam Message For ${user} Age Is : ${age}`);
 }

let btn = document.querySelector("button");

btn.onclick = function () {
  clearTimeout(counter);
};

function sayMsg(user, age) {
  console.log(`Iam Message For ${user} Age Is : ${age}`);
}

let counter = setTimeout(sayMsg, 3000, "Osama", 38);
````

These notes cover the basics of timing events in the Browser Object Model (BOM) and provide examples of how to use `setTimeout` and `clearTimeout` in JavaScript. Remember, these methods are useful for creating delays and intervals in your code. 

______________________________________________________________________


## Related : 

- [[What Is BOM]].
- [[Alert, Confirm, Prompt]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-09 10:01 
  
  
   ## Modification date :
   
   Tuesday 9th January 2024 10:01:18