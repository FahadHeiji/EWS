
### Status: #week-11

### Tags: #EWS  , #Programming 


### click

The `click` method simulates a mouse click on an element.

### focus

The `focus` method sets focus on the specified element, if it can be focused.

```javascript
let two = document.querySelector(".two");
window.onload = function () {
  two.focus();
};
```

### blur

The `blur` method removes focus from the specified element, if it can be focused. The `onblur` event occurs when an object loses focus.

```javascript
let one = document.querySelector(".one");
one.onblur = function () {
  document.links[0].click();
};
```

This code demonstrates various ways to simulate events in the DOM using JavaScript. It sets focus on the element with class “two” when the window loads, and simulates a click on the first link in the document when the element with class “one” loses focus. 

______________________________________________________________________


## Related : 

- [[DOM Events]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 18:59 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 19:00:49