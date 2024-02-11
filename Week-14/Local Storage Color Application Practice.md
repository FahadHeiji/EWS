
### Status: #week-14

### Tags: #EWS  , #Programming 


This code demonstrates the use of the **Browser Object Model (BOM)** and **Local Storage** in JavaScript to change the background color of a webpage based on user interaction. It also includes the HTML structure and CSS styling for the webpage. The JavaScript code listens for click events on list items, each representing a different color. When a list item is clicked, its associated color is stored in Local Storage and applied as the background color of a div on the webpage. If a color is already stored in Local Storage when the page loads, that color is applied as the background color of the div, and the corresponding list item is highlighted.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Learn JavaScript</title>
    <link rel="stylesheet" href="main.css" />
    <style>
      /* CSS code */
    </style>
  </head>
  <body>
    <ul>
      <li class="active" data-color="red"></li>
      <li data-color="green"></li>
      <li data-color="blue"></li>
      <li data-color="black"></li>
    </ul>
    <div class="experiment"></div>
    <script src="main.js"></script>
  </body>
</html>
```

```javascript
/*
  BOM [Browser Object Model]
  Local Storage Practice
*/

let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  // If There Is Color In Local Storage
  // [1] Add Color To Div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  // [2] Remove Active Class From All Lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // [3] Add Active Class To Current Color
  document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color);
    // Remove Active Class From all Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // Add Active Class To Current Element
    e.currentTarget.classList.add("active");
    // Add Current Color To Local Storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    // Change Div Background Color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
```



______________________________________________________________________


## Related : 

- [[Local Storage]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-11 13:18 
  
  
   ## Modification date :
   
   Thursday 11th January 2024 13:18:04