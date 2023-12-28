
### Status: #week-11

### Tags: #EWS  , #Programming 


### Validate Form Practice

This code validates a form by checking if the username and age fields are not empty. The username must also be 10 characters or less.

```javascript
let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

document.forms[0].onsubmit = function (e) {
  let userValid = false;
  let ageValid = false;

  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
  }

  if (ageInput.value !== "") {
    ageValid = true;
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
};
```

### Prevent Default

The `preventDefault` method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when you want to stop a form submission from refreshing the page.

```javascript
document.links[0].onclick = function (event) {
  console.log(event);
  event.preventDefault();
};
```

This code prevents the default action of the first link in the document (which is to navigate to the link’s href) and logs the event object to the console instead. 

______________________________________________________________________


## Related : 

- [[DOM Events]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 18:56 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 18:56:23