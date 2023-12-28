
### Status: #week-11

### Tags: #EWS  , #Programming 


### nextSibling

The `nextSibling` property returns the next node at the same node tree level.

```javascript
console.log(span.nextSibling);
```

### previousSibling

The `previousSibling` property returns the previous node at the same node tree level.

```javascript
console.log(span.previousSibling);
```

### nextElementSibling

The `nextElementSibling` property returns the element immediately following the specified one in its parent’s children list, or `null` if the specified element is the last one in the list.

```javascript
console.log(span.nextElementSibling);
```

### previousElementSibling

The `previousElementSibling` property returns the element immediately preceding the specified one in its parent’s children list, or `null` if the specified element is the first one in the list.

```javascript
console.log(span.previousElementSibling);
```

### parentElement

The `parentElement` property returns the parent element of the specified element.

```javascript
console.log(span.parentElement);
span.onclick = function () {
  span.parentElement.remove();
}
```

This code demonstrates various ways to traverse the DOM using JavaScript. It then logs the selected elements or their properties to the console. When the element with class “two” is clicked, its parent element is removed from the DOM. 

______________________________________________________________________


## Related : 

- [[Deal With Childrens]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 19:07 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 19:08:35