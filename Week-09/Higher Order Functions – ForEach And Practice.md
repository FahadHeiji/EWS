
### Status: #week-09

### Tags: #EWS  , #Programming 


- **forEach**: The `forEach()` method in JavaScript executes a provided function once for each array element. It does not return anything (undefined).
    
    - **Syntax**: `forEach(callBackFunction(Element, Index, Array) { }, thisArg)`
        
        - `Element`: The current element being processed in the array.
        - `Index`: The index of the current element being processed in the array.
        - `Array`: The current array.
    - **Note**: A `break` statement will not break the loop in a `forEach()` method.
        
    - **Example**: This code uses the `forEach()` method to add an `onclick` event to each `li` element. When an `li` element is clicked, it removes the “active” class from all `li` elements, adds the “active” class to the clicked `li` element, and hides all `div` elements.
        
        ```javascript
        let allLis = document.querySelectorAll("ul li");
        let allDivs = document.querySelectorAll(".content div");
        
        allLis.forEach(function (ele) {
          ele.onclick = function () {
            // Remove Active Class From All Elements
            allLis.forEach(function (ele) {
              ele.classList.remove("active");
            });
            // Add Active Class To This Element
            this.classList.add("active");
            // Hide All Divs
            allDivs.forEach(function (ele) {
              ele.style.display = "none";
            });
          };
        });
        ```
        



______________________________________________________________________


## Related : 

- [[Higher Order Functions – Map]].
- [[Higher Order Functions – Filter]].
- [[Higher Order Functions – Reduce]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 17:52 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 17:53:01