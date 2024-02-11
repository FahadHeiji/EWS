
### Status: #week-21

### Tags: #EWS  , #Programming 



[In JavaScript, you can use Promises with XMLHttpRequest (XHR) to handle asynchronous HTTP requests in a more manageable way](https://gomakethings.com/promise-based-xhr/)[1](https://gomakethings.com/promise-based-xhr/). Here’s an example of how you can wrap an XHR request in a Promise:

```javascript
function makeRequest(url, method = 'GET') {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function() {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function() {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}

// Usage:
makeRequest('https://api.example.com/data')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error('Error:', err.statusText);
  });
```

In this example, `makeRequest` is a function that creates a new Promise. The Promise takes two parameters: `resolve` and `reject`, which are both functions. It makes an XHR request to the provided URL. If the request is successful (HTTP status 200-299), it calls `resolve` with the response. [If the request fails, it calls `reject` with an object containing the status and statusText](https://gomakethings.com/promise-based-xhr/)[1](https://gomakethings.com/promise-based-xhr/).

[You can then use the returned Promise with `.then()` and `.catch()` to handle the resolved data or any errors](https://gomakethings.com/promise-based-xhr/)[1](https://gomakethings.com/promise-based-xhr/). [This makes your asynchronous code easier to read and manage](https://stackoverflow.com/questions/53987666/using-promise-to-get-over-xhr-returns-pending-promise)[2](https://stackoverflow.com/questions/53987666/using-promise-to-get-over-xhr-returns-pending-promise)[3](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)[1](https://gomakethings.com/promise-based-xhr/).

______________________________________________________________________


## Related : 

- [[Promise - Then, Catch And Finally]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-11 09:17 
  
  
   ## Modification date :
   
   Sunday 11th February 2024 09:17:20