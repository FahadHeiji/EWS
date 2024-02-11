
### Status: #week-11

### Tags: #EWS  , #Programming 




### children

The `children` property returns a live HTMLCollection which contains all of the child elements of the element.

```javascript
console.log(myElement.children);
console.log(myElement.children[0]);
```

### childNodes

The `childNodes` property returns a live NodeList that contains all child nodes of the element.

```javascript
console.log(myElement.childNodes);
console.log(myElement.childNodes[0]);
```

### firstChild

The `firstChild` property returns the first child node of an element as a Node object.

```javascript
console.log(myElement.firstChild);
```

### lastChild

The `lastChild` property returns the last child node of an element as a Node object.

```javascript
console.log(myElement.lastChild);
```

### firstElementChild

The `firstElementChild` property returns the first child element of an element.

```javascript
console.log(myElement.firstElementChild);
```

### lastElementChild

The `lastElementChild` property returns the last child element of an element.

```javascript
console.log(myElement.lastElementChild);
```

This code demonstrates various ways to deal with children in the DOM using JavaScript. It then logs the selected elements or their properties to the console. Remember, the indices are 0-based, so `myElement.children[0]` refers to the first child element of `myElement`.


______________________________________________________________________


## Related : 

- [[Create And Append Elements]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 18:52 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 18:54:40