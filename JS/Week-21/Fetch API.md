
### Status: #week-21

### Tags: #EWS  , #Programming 


[The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP protocol, such as requests and responses](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)[1](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch). [It provides a global `fetch()` method that provides an easy, logical way to fetch resources asynchronously across the network](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)[1](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

Here’s a basic fetch request:

```javascript
async function logMovies() {
  const response = await fetch("http://example.com/movies.json");
  const movies = await response.json();
  console.log(movies);
}
```

[In this example, we are fetching a JSON file across the network, parsing it, and printing the data to the console](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)[1](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch). [The simplest use of `fetch()` takes one argument — the path to the resource you want to fetch — and returns a promise that resolves with a Response object](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)[1](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

[The `fetch()` method can optionally accept a second parameter, an init object that allows you to control a number of different settings](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)[1](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch). Here’s an example of a POST request using `fetch()`:

```javascript
async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data)
  });
  return response.json();
}

postData("https://example.com/answer", { answer: 42 })
  .then((data) => {
    console.log(data);
  });
```

[In this example, we are making a POST request to a server, sending JSON data, and then handling the response](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)[1](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch). [The `fetch()` method returns a Promise that resolves to the Response to that request, whether it is successful or not](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)[1](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch). [This Promise will resolve as soon as the headers have been received, and the status and headers of the response are available](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)[1](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

______________________________________________________________________


## Related : 

- [[Promise And XHR]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-11 09:23 
  
  
   ## Modification date :
   
   Sunday 11th February 2024 09:23:51