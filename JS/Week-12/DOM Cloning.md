
### Status: #week-11

### Tags: #EWS  , #Programming 


### cloneNode(Deep)

The `cloneNode()` method creates a copy of a node, and returns the clone. The cloned node contains all the attributes and their values of the original node. By passing `true` as an argument, it does a deep clone and includes all the child nodes as well.

```javascript
let myP = document.querySelector("p").cloneNode(true); // Clone the first p element
let myDiv = document.querySelector("div"); // Select the first div element

myP.id = `${myP.id}-clone`; // Change the id of the cloned p element

myDiv.appendChild(myP); // Append the cloned p element to the div
```

This code demonstrates how to clone an element in the DOM using JavaScript. It clones the first `p` element in the document, changes its id, and then appends this cloned element to the first `div` element in the document.

______________________________________________________________________


## Related : 

- [[Create And Append Elements]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 19:09 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 19:10:36