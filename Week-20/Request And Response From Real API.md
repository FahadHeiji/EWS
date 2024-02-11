
### Status: #week-20

### Tags: #EWS  , #Programming 


## 

```JS
/*
  Ajax
  - Ready State => Status Of The Request
  [0] Request Not Initialized
  [1] Server Connection Established
  [2] Request Received
  [3] Processing Request
  [4] Request Is Finished And Response Is Ready
  - Status
  [200] Response Is Successful
  [404] Not Found
*/

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function () {
  // console.log(myRequest.readyState);
  // console.log(myRequest.status);
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};
````

An example of how to make an AJAX request using the `XMLHttpRequest` object, which is a built-in browser object that allows to make HTTP requests in JavaScript.

Here’s a breakdown of what the code does:

1. An `XMLHttpRequest` object is created: `let myRequest = new XMLHttpRequest();`.
2. The `open` method initializes a newly-created request, or re-initializes an existing one. In this case, it’s making a `GET` request to the GitHub API: `myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");`.
3. The `send` method sends the request to the server: `myRequest.send();`.
4. The `onreadystatechange` property defines a function to be executed when the `readyState` changes. The `readyState` property holds the status of the `XMLHttpRequest`. The status codes you’ve mentioned in the comments are the different stages of a request.
5. Inside the `onreadystatechange` function, it checks if the `readyState` is `4` (request finished and response is ready) and the `status` is `200` (successful HTTP request). If both conditions are true, it logs the response text: `console.log(this.responseText);`.

This is a basic way to make AJAX requests, but it’s worth noting that the newer `fetch` API provides a more powerful and flexible feature set. However, `XMLHttpRequest` is a great place to start with understanding how AJAX works.

______________________________________________________________________


## Related : 

- 

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-10 10:46 
  
  
   ## Modification date :
   
   Saturday 10th February 2024 10:46:21