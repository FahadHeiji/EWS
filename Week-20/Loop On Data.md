
### Status: #week-20

### Tags: #EWS  , #Programming 


## 

```JS
/*
  Ajax
  Loop On Data

  Search
  - Cross Origin API [CORS]
  - API Authentication
*/

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest.send();
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    let jsData = JSON.parse(this.responseText);
    // console.log(jsData);
    for (let i = 0; i < jsData.length; i++) {
      let div = document.createElement("div");
      let repoName = document.createTextNode(jsData[i].full_name);
      div.appendChild(repoName);
      document.body.appendChild(div);
    }
  }
};
````


Here’s a breakdown of what the code does:

1. An `XMLHttpRequest` object is created: `let myRequest = new XMLHttpRequest();`.
2. The `open` method initializes a newly-created request, or re-initializes an existing one. In this case, it’s making a `GET` request to the GitHub API: `myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");`.
3. The `send` method sends the request to the server: `myRequest.send();`.
4. The `onreadystatechange` property defines a function to be executed when the `readyState` changes. The `readyState` property holds the status of the `XMLHttpRequest`.
5. Inside the `onreadystatechange` function, it checks if the `readyState` is `4` (request finished and response is ready) and the `status` is `200` (successful HTTP request). If both conditions are true, it parses the response text into a JavaScript object: `let jsData = JSON.parse(this.responseText);`.
6. Then it loops through the `jsData` array using a `for` loop. For each item in the array, it creates a new `div` element, creates a text node with the `full_name` property of the item, appends the text node to the `div`, and then appends the `div` to the body of the document.

This is a basic way to make AJAX requests, retrieve data, and dynamically update the DOM. It’s worth noting that the newer `fetch` API provides a more powerful and flexible feature set. However, `XMLHttpRequest` is a great place to start with understanding how AJAX works.

As for **Cross-Origin Resource Sharing (CORS)** and **API Authentication**, these are important concepts when working with APIs:

- **CORS** is a mechanism that allows many resources (e.g., fonts, JavaScript, etc.) on a web page to be requested from another domain outside the domain from which the resource originated. It’s a way to relax the same-origin policy, which is used for security reasons and prevents you from making requests to a domain that’s different from the one you’re currently on.
- **API Authentication** is a process that allows the API to verify the identity of the requester to ensure they have the necessary permissions to perform a certain operation. This is typically done by sending some form of credentials (like an API key or OAuth token) with your request.

______________________________________________________________________


## Related : 

- [[Request And Response From Real API]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-10 11:06 
  
  
   ## Modification date :
   
   Saturday 10th February 2024 11:07:01