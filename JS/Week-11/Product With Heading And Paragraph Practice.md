
### Status: #week-11

### Tags: #EWS  , #Programming 


### Practice Product With Heading And Paragraph

This code creates a new `div` element with a class name “product”, a heading, and a paragraph, and then appends this new element to the body of the document.

```javascript
let myMainElement = document.createElement("div"); // Create a new div element
let myHeading = document.createElement("h2"); // Create a new h2 element
let myParagraph = document.createElement("p"); // Create a new p element

let myHeadingText = document.createTextNode("Product Title"); // Create a new text node for the heading
let myParagraphText = document.createTextNode("Product Description"); // Create a new text node for the paragraph

// Add Heading Text
myHeading.appendChild(myHeadingText);

// Add Heading To Main Element
myMainElement.appendChild(myHeading);

// Add Paragraph Text
myParagraph.appendChild(myParagraphText);

// Add Paragraph To Main Element
myMainElement.appendChild(myParagraph);

myMainElement.className = "product"; // Add a class name to the div element

document.body.appendChild(myMainElement); // Append the new div element to the body of the document
```

This is a simple way to dynamically create and add new elements to the DOM using JavaScript. 


______________________________________________________________________


## Related : 

- [[Create And Append Elements]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 18:49 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 18:49:14