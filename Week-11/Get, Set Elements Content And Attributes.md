
### Status: #week-11

### Tags: #EWS  , #Programming 



### innerHTML

The `innerHTML` property sets or returns the HTML content (inner HTML) of an element.

```javascript
let myElement = document.querySelector(".js");
console.log(myElement.innerHTML);
myElement.innerHTML = "Text From <span>Main.js</span> File";
```

### textContent

The `textContent` property sets or returns the text content of the specified node, and all its descendants.

```javascript
console.log(myElement.textContent);
myElement.textContent = "Text From <span>Main.js</span> File";
```

### Change Attributes Directly

You can directly change the attributes of an element like `src`, `alt`, `title`, `id`, `className`.

```javascript
document.images[0].src = "https://google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";
document.images[0].id = "pic";
document.images[0].className = "img";
```

### Change Attributes With Methods

You can use `getAttribute` method to get the value of the specified attribute. You can use `setAttribute` method to add the specified attribute to an element, and gives it the specified value.

```javascript
let myLink = document.querySelector(".link");
console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));
myLink.setAttribute("href", "https://twitter.com");
myLink.setAttribute("title", "Twitter");
```

### Search

`innerText` property sets or returns the text content of the specified node, and all its descendants. If you set the `innerText` property, any child nodes are removed and replaced by a single Text node containing the specified string.

This code demonstrates various ways to get and set elements’ content and attributes in the DOM using JavaScript. It then logs the selected elements or their properties to the console. Remember, the indices are 0-based, so `document.images[0]` refers to the first image in the document. Let me know if you have any other questions! 😊


______________________________________________________________________


## Related : 

- [[What Is DOM - And Select Elements]].

## Reference: 

1.  [[DOM]].


---

  ## Creation date: 
  
  2023-12-28 18:34 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 18:34:31