
### Status: #week-06

### Tags: #EWS  , #Programming 


## My Example:

```JS
let Phones = [["iPhone 12 Mini", "899.99$"], ["iPhone 12", "999.99$"], ["iPhone 12 Pro", "1199.99$"], ["iPhone 12 Pro Max", "1299.99$"], ["Samsung S21", "999.99$"], ["Samsung S21 Ultra", "1299.99$"], ["Realme 11", "399.99$"], ["Realme 11 Pro", "299.99$"]];

  

let Company = ["Apple", "Samsung", "Realme"];

  

let showPhones = 8;

  

for (let i = 0; i < showPhones; i++) {

    document.write(`<div>`);

  

    document.write(`<h3>${"#".repeat(10)}</h3>`);

    document.write(`<h2>${Phones[i][0]}</h2>`);

    document.write(`<h3>${"#".repeat(10)}</h3>`);

    if (Phones[i][0].includes("iPhone")) {

        document.write(`<p>${Company[Company.indexOf("Apple")]}</p>`);

    };

    if (Phones[i][0].includes("Samsung")) {

        document.write(`<p>${Company[Company.indexOf("Samsung")]}</p>`);

    }

    if (Phones[i][0].includes("Realme")) {

        document.write(`<p>${Company[Company.indexOf("Realme")]}</p>`);

    }

    document.write(`<p>${Phones[i][1]}</p>`);

    document.write(`<h3>${"#".repeat(10)}</h3>`);

    document.write(`</div>`);

}
````

## Example 02:

1. **Products Practice**: This is a simple JavaScript code that uses arrays, loops, and the `document.write()` method to display a list of products and their colors on a webpage.
    
2. **Example**: Your provided code is an example of this:
    

```javascript
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors = ["Red", "Green", "Blue"];
let showCount = 3;

document.write(`<h1>Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
  for (let j = 0; j < colors.length; j++) {
    document.write(`<p>${colors[j]}</p>`);
  }
  document.write(`<p>${colors.join(" | ")}</p>`);
  document.write(`</div>`);
}
```

In this example:

- `products` is an array of product names, `colors` is an array of color names, and `showCount` is the number of products to display.
- The `document.write()` method is used to write HTML expressions or JavaScript code to a document. The `<h1>` tag is used to display the main heading.
- The outer `for` loop iterates over the `products` array up to `showCount` times. For each product, it creates a new `<div>` element, displays the product name in a `<h3>` element, and then iterates over the `colors` array.
- The inner `for` loop displays each color in a `<p>` element.
- After displaying all the colors for a product, it creates a `<p>` element that contains all the colors separated by " | " using the `join()` method.
- Finally, it closes the `<div>` element. This loop will create a separate `<div>` for each product, containing the product name and a list of colors.

This code is a good example of how you can use JavaScript to dynamically generate HTML content based on data stored in JavaScript variables. It’s a common pattern in web development, especially in applications that display lists of items (like products in an online store).

______________________________________________________________________


## Related : 

- [[Looping On Sequences]].
- [[Console Methods And Styling And Web-API]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-14 13:55 
  
  
   ## Modification date :
   
   Thursday 14th December 2023 13:55:21