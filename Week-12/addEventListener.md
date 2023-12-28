
### Status: #week-11

### Tags: #EWS  , #Programming 


### addEventListener

The `addEventListener()` method attaches an event handler to the specified element. This method is used to register one or more event listeners on a single target.

```javascript
myP.addEventListener("click", function () {
  console.log("Message From OnClick 1 Event");
});
```

### Use Without On

You can use the `addEventListener()` method without the “on” prefix for the event.

```javascript
myP.addEventListener("click", one);
myP.addEventListener("click", two);
```

### Attach Multiple Events

You can attach multiple events to a single element.

```javascript
myP.onclick = one;
myP.onclick = two;
```

### Error Test

If you pass a string to the `addEventListener()` method instead of a function, it will throw an error.

```javascript
myP.addEventListener("click", "String"); // Error
```

### Capture & Bubbling JavaScript

Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event.

```javascript
document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    console.log("Iam Cloned");
  }
});
```

### removeEventListener

The `removeEventListener()` method removes an event handler that has been attached with the `addEventListener()` method.

This code demonstrates various ways to add event listeners in the DOM using JavaScript. It then logs the selected elements or their properties to the console. 

______________________________________________________________________


## Related : 

- [[Create And Append Elements]].
- [[DOM Cloning]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 19:10 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 19:11:38