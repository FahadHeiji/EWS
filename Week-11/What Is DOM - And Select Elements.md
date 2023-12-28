
### Status: #week-11

### Tags: #EWS  , #Programming 


## DOM

- **What Is DOM**: DOM stands for Document Object Model. It’s a programming interface for web documents. It represents the structure of a document and allows programs to manipulate the document’s structure, style, and content.
- **DOM Selectors**: These are methods used to select elements in a DOM.

### Find Element By ID

This uses the `getElementById` method to select an element by its ID.

```javascript
let myIdElement = document.getElementById("my-div");
console.log(myIdElement);
```

### Find Element By Tag Name

This uses the `getElementsByTagName` method to select elements by their tag name.

```javascript
let myTagElements = document.getElementsByTagName("p");
console.log(myTagElements[1]);
```

### Find Element By Class Name

This uses the `getElementsByClassName` method to select elements by their class name.

```javascript
let myClassElement = document.getElementsByClassName("my-span");
console.log(myClassElement[1]);
```

### Find Element By CSS Selectors

This uses the `querySelector` and `querySelectorAll` methods to select elements by their CSS selectors.

```javascript
let myQueryElement = document.querySelector(".my-span");
let myQueryAllElement = document.querySelectorAll(".my-span");
console.log(myQueryElement);
console.log(myQueryAllElement[1]);
```

### Find Element By Collection

This refers to selecting elements by their collections such as ‘title’, ‘body’, ‘images’, ‘forms’, ‘links’.

```javascript
console.log(document.title);
console.log(document.body);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);
```

This code demonstrates various ways to select elements in the DOM using JavaScript. It then logs the selected elements or their properties to the console. Remember, the indices are 0-based, so `myTagElements[1]` refers to the second `p` tag element in the document, not the first. Similarly, `document.forms[0]` refers to the first form in the document.

______________________________________________________________________


## Related : 

- [[DOM]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 18:29 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 18:29:39