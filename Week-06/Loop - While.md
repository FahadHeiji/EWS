
### Status: #week-06

### Tags: #EWS  , #Programming 


Sure, here are the notes from your code:

1. **While Loop**: The `while` loop is a control flow statement that allows code to be executed repeatedly based on a given boolean condition. The `while` loop can be thought of as a repeating `if` statement.
    
2. **Example**: Your provided code is an example of a `while` loop:
    

```javascript
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let index = 0;

while (index < products.length) {
  console.log(products[index]);
  index += 1;
}
```

In this example:

- `products` is an array of product names, and `index` is a counter variable initialized to `0`.
- The `while` loop continues as long as `index` is less than the length of the `products` array.
- Inside the loop, the current product is logged to the console, and then `index` is incremented by `1`.
- This loop will print each product to the console. After all products have been printed, `index` will be equal to `products.length`, so the loop ends.

This is a common pattern for iterating over an array or collection in JavaScript when you don’t know in advance how many times the loop needs to iterate. The `while` loop checks the condition before each iteration, so if the condition is initially `false`, the loop body may not be executed at all. In contrast, the `do...while` loop checks the condition after each iteration, so the loop body is always executed at least once.

______________________________________________________________________


## Related : 

- [[Loop - For And Concept Of Loop]].
- [[While Loop]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-14 14:30 
  
  
   ## Modification date :
   
   Thursday 14th December 2023 14:30:52