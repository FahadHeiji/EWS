
### Status: #week-21

### Tags: #EWS  , #Programming 


[In JavaScript, you can use `try`, `catch`, and `finally` blocks with the Fetch API to handle errors and clean up after your code](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)[1](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)[3](https://www.w3schools.com/jsref/jsref_try_catch.asp). Here’s an example:

```javascript
async function fetchData(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('There has been a problem with your fetch operation: ', error.message);
  } finally {
    console.log('fetch attempt completed');
  }
}

fetchData('https://api.example.com/data');
```

In this example, `fetchData` is an `async` function that fetches data from a URL. The `try` block contains the fetch operation. [If the fetch operation fails or if the response status is not OK, an error is thrown](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)[1](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)[3](https://www.w3schools.com/jsref/jsref_try_catch.asp).

The `catch` block catches any errors that occur in the `try` block. [It logs the error message to the console](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)[1](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)[3](https://www.w3schools.com/jsref/jsref_try_catch.asp).

The `finally` block runs after the `try` and `catch` blocks, regardless of whether an error was thrown or caught. [It logs a message to the console indicating that the fetch attempt has completed](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)[1](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)[3](https://www.w3schools.com/jsref/jsref_try_catch.asp).

[This way, you can handle errors gracefully and ensure that your code cleans up after itself, even when errors occur](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)[1](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)[3](https://www.w3schools.com/jsref/jsref_try_catch.asp).
______________________________________________________________________


## Related : 

- [[Fetch API]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-11 09:58 
  
  
   ## Modification date :
   
   Sunday 11th February 2024 09:58:38