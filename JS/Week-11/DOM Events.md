
### Status: #week-11

### Tags: #EWS  , #Programming 


### Use Events On HTML

You can use events directly in your HTML elements by adding them as attributes. For example, `<button onclick="myFunction()">Click me</button>`.

### Use Events On JS

You can also use events in your JavaScript code. Here are some examples:

#### onclick

The `onclick` event occurs when the user clicks on an element.

#### oncontextmenu

The `oncontextmenu` event occurs when the user right-clicks on an element to open the context menu.

#### onmouseenter

The `onmouseenter` event occurs when the mouse pointer is moved onto an element.

#### onmouseleave

The `onmouseleave` event occurs when the mouse pointer is moved out of an element.

```javascript
let myBtn = document.getElementById("btn");
myBtn.onmouseleave = function () {
  console.log("Clicked");
};
```

#### onload

The `onload` event occurs when an object has been loaded.

#### onscroll

The `onscroll` event occurs when an element’s scrollbar is being scrolled.

#### onresize

The `onresize` event occurs when the browser window has been resized.

```javascript
window.onresize = function () {
  console.log("Scroll");
};
```

#### onfocus

The `onfocus` event occurs when an element gets focus.

#### onblur

The `onblur` event occurs when an element loses focus.

#### onsubmit

The `onsubmit` event occurs when a form is submitted.

This code demonstrates various ways to use events in the DOM using JavaScript. It then logs the selected elements or their properties to the console. 


______________________________________________________________________


## Related : 

- [[What Is DOM - And Select Elements]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 18:55 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 18:55:41