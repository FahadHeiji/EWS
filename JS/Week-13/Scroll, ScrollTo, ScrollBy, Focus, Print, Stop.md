
### Status: #week-13

### Tags: #EWS  , #Programming 


## Window Methods

- `stop()`: This method stops window loading.
- `print()`: This method opens the print dialog to print the current page.
- `focus()`: This method sets focus on the current window.

## Scrolling Methods

- `scrollTo(x, y || Options)`: This method scrolls the document to the specified coordinates (`x`, `y`). It can also accept an options object with `left`, `top`, and `behavior` properties.
- `scroll(x, y || Options)`: This method is an alias for `scrollTo()`.
- `scrollBy(x, y || Options)`: This method scrolls the document by the specified number of pixels (`x`, `y`). It can also accept an options object with `left`, `top`, and `behavior` properties.

## Examples

```javascript
// let myNewWindow = window.open("https://google.com", "", "width=500,height=500");

// window.scrollTo({
//   left: 500,
//   top: 200,
//   behavior: "smooth"
// });
````

These notes cover the basics of the Window methods and scrolling methods in the Browser Object Model (BOM) and provide examples of how to use them in JavaScript. Remember, these methods are useful for managing browser windows and controlling the scroll behavior of the document. 



______________________________________________________________________


## Related : 

- [[What Is BOM]].
- [[Window History Object]].
- [[Window Location Object]].

## Reference: 

1.  


---

  ## Creation date: 
  
  <%tp.file.creation_date()%> 
  
  
   ## Modification date :
   
   <%tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss")%>