
### Status: #week-13

### Tags: #EWS  , #Programming 



## Scrolling Properties and Methods
- `scrollX` (Alias `PageXOffset`): This property returns the number of pixels that the document is currently scrolled horizontally. This is an alias for `PageXOffset`.
- `scrollY` (Alias `PageYOffset`): This property returns the number of pixels that the document is currently scrolled vertically. This is an alias for `PageYOffset`.

## Practice: Scroll To Top
- This practice involves creating a button that appears when the user scrolls down a certain amount, and when clicked, smoothly scrolls the user back to the top of the page.

## Example

```javascript
// console.log(window.scrollX === window.pageXOffset);

let btn = document.querySelector("button");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

````



______________________________________________________________________


## Related : 

- 

## Reference: 

1.  


---

  ## Creation date: 
  
  <%tp.file.creation_date()%> 
  
  
   ## Modification date :
   
   <%tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss")%>