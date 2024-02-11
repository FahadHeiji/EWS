
### Status: #week-11

### Tags: #EWS  , #Programming 


### style

The `style` property is used to get as well as set inline style of an element.

```javascript
let element = document.getElementById("my-div");
element.style.color = "red";
element.style.fontWeight = "bold";
```

### cssText

The `cssText` property sets or returns the contents of a CSS declaration block (everything inside {}).

```javascript
element.style.cssText = "font-weight: bold; color: green; opacity: 0.9";
```

### removeProperty(propertyName)

The `removeProperty()` method removes a property from a CSS style declaration.

```javascript
element.style.removeProperty("color");
document.styleSheets[0].rules[0].style.removeProperty("line-height");
```

### setProperty(propertyName, value, priority)

The `setProperty()` method sets a new value for a property on a CSS style declaration.

```javascript
element.style.setProperty("font-size", "40px", "important");
document.styleSheets[0].rules[0].style.setProperty("background-color", "red", "important");
```

This code demonstrates various ways to manipulate the CSS of an element in the DOM using JavaScript. It then logs the selected elements or their properties to the console.

______________________________________________________________________


## Related : 

- [[Get, Set Elements Content And Attributes]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 19:03 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 19:03:24