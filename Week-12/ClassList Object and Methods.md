
### Status: #week-11

### Tags: #EWS  , #Programming 


### classList

The `classList` property returns the class name(s) of an element, as a DOMTokenList object.

```javascript
console.log(element.classList);
console.log(typeof element.classList);
```

### length

The `length` property returns the number of classes in the list.

### contains

The `contains()` method checks if specified class value exists in class list.

```javascript
console.log(element.classList.contains("osama"));
console.log(element.classList.contains("show"));
```

### item(index)

The `item()` method returns the class value at the specified index in the list.

```javascript
console.log(element.classList.item("3"));
```

### add

The `add()` method adds one or more class names to an element. If the specified class already exist, the class will not be added.

### remove

The `remove()` method removes one or more class names from an element. Note: Removing a class that does not exist, does NOT throw an error.

### toggle

The `toggle()` method toggles between a class name for an element. The first parameter removes the specified class from an element, and returns false. If the class does not exist, it is added to the element, and the return value is true.

```javascript
element.onclick = function () {
  element.classList.toggle("show");
};
```

This code demonstrates various ways to manipulate the class list of an element in the DOM using JavaScript. It then logs the selected elements or their properties to the console.

______________________________________________________________________


## Related : 

- [[Get, Set Elements Content And Attributes]].
- [[Create And Append Elements]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 19:01 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 19:02:20