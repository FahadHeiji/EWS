
### Status: #week-11

### Tags: #EWS  , #Programming 


## DOM [Check Attributes]

### Element.attributes

The `attributes` property returns a live collection of all attribute nodes registered to the specified node. It is a `NamedNodeMap`, not an `Array`, so it has no `Array` methods and the `Node` objects’ indexes may differ among browsers.

```javascript
console.log(document.getElementsByTagName("p")[0].attributes);
```

### Element.hasAttribute

The `hasAttribute` method returns a Boolean value indicating whether the specified element has the specified attribute or not.

```javascript
let myP = document.getElementsByTagName("p")[0];
if (myP.hasAttribute("data-src")) {
  // ...
}
```

### Element.hasAttributes

The `hasAttributes` method returns a Boolean value indicating whether the specified element has any attributes or not.

```javascript
if (myP.hasAttributes()) {
  console.log(`Has Attributes`);
}
if (document.getElementsByTagName("div")[0].hasAttributes()) {
  console.log(`Has Attributes`);
} else {
  console.log(`Div Has No Attributes`);
}
```

### Element.removeAttribute

The `removeAttribute` method removes the attribute with the specified name from the element.

```javascript
if (myP.getAttribute("data-src") === "") {
  myP.removeAttribute("data-src");
}
```

### Element.setAttribute

The `setAttribute` method adds the specified attribute to an element, and gives it the specified value. If the specified attribute already exists, only the value is set/changed.

```javascript
myP.setAttribute("data-src", "New Value");
```

This code demonstrates various ways to check and manipulate attributes in the DOM using JavaScript. It then logs the selected elements or their properties to the console. Remember, the indices are 0-based, so `document.getElementsByTagName("p")[0]` refers to the first `p` tag element in the document. 


______________________________________________________________________


## Related : 

- [[Get, Set Elements Content And Attributes]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 18:42 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 18:42:30