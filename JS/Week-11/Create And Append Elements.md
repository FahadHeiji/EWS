
### Status: #week-11

### Tags: #EWS  , #Programming 


### createElement

The `createElement` method creates an Element Node with the specified name.

```javascript
let myElement = document.createElement("div");
```

### createAttribute

The `createAttribute` method creates an Attribute Node with the specified name.

```javascript
let myAttr = document.createAttribute("data-custom");
myElement.setAttributeNode(myAttr);
myElement.setAttribute("data-test", "Testing");
```

### createTextNode

The `createTextNode` method creates a Text Node with the specified text.

```javascript
let myText = document.createTextNode("Product One");
myElement.appendChild(myText);
```

### createComment

The `createComment` method creates a Comment Node with the specified text.

```javascript
let myComment = document.createComment("This Is Div");
myElement.appendChild(myComment);
```

### appendChild

The `appendChild` method appends a node as the last child of a node.

```javascript
document.body.appendChild(myElement);
```

This code demonstrates various ways to create and append elements in the DOM using JavaScript. It creates a new `div` element with a class name, two data attributes, a comment, and a text node, and then appends this new element to the body of the document.

______________________________________________________________________


## Related : 

- [[Check Attributes And Examples]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 18:46 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 18:48:13