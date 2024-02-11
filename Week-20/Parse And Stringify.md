
### Status: #week-20

### Tags: #EWS  , #Programming 


[`JSON.parse()` and `JSON.stringify()` are two important methods in JavaScript for dealing with JSON data](https://www.digitalocean.com/community/tutorials/js-json-parse-stringify)[1](https://www.digitalocean.com/community/tutorials/js-json-parse-stringify)[2](https://www.geeksforgeeks.org/what-is-difference-between-json-parse-and-json-stringify-methods-in-javascript/).

1. [**JSON.parse()**: This method takes a JSON string and transforms it into a JavaScript object](https://www.digitalocean.com/community/tutorials/js-json-parse-stringify)[1](https://www.digitalocean.com/community/tutorials/js-json-parse-stringify). Here’s an example:
    
    ```javascript
    let userStr = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';
    let userObj = JSON.parse(userStr);
    console.log(userObj); // Output: {name: 'Sammy', email: 'sammy@example.com', plan: 'Pro'}
    ```
    
    [`JSON.parse()` can also take a function as a second argument that can transform the object values before they are returned](https://www.digitalocean.com/community/tutorials/js-json-parse-stringify)[1](https://www.digitalocean.com/community/tutorials/js-json-parse-stringify).
    
2. [**JSON.stringify()**: This method takes a JavaScript object and transforms it into a JSON string](https://www.digitalocean.com/community/tutorials/js-json-parse-stringify)[1](https://www.digitalocean.com/community/tutorials/js-json-parse-stringify). Here’s an example:
    
    ```javascript
    let userObj = { name: "Sammy", email: "sammy@example.com", plan: "Pro" };
    let userStr = JSON.stringify(userObj);
    console.log(userStr); // Output: {"name":"Sammy","email":"sammy@example.com","plan":"Pro"}
    ```
    
    `JSON.stringify()` can take two additional arguments. The first one is a replacer function that can be used to filter out values. [The second is a String or Number value to use as a space in the returned string](https://www.digitalocean.com/community/tutorials/js-json-parse-stringify)[1](https://www.digitalocean.com/community/tutorials/js-json-parse-stringify).
    

These methods are useful for storing and transporting data. When sending data to a web server, the data has to be a string. `JSON.stringify()` can take a JavaScript object and prepare it to be sent to the server. [When receiving the data from a web server, the data is a string`JSON.parse()` can take that string and work with it as a JavaScript object](https://www.digitalocean.com/community/tutorials/js-json-parse-stringify)[2](https://www.geeksforgeeks.org/what-is-difference-between-json-parse-and-json-stringify-methods-in-javascript/).

______________________________________________________________________


## Related : 

- [[JSON Syntax And Compare With JS Object]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-10 09:55 
  
  
   ## Modification date :
   
   Saturday 10th February 2024 09:55:46