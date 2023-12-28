
### Status: #week-06

### Tags: #EWS  , #Programming 


Sure, here are the notes from your code:

1. **Advanced For Loop**: This is an example of an advanced use of the `for` loop in JavaScript. In this case, the initialization, condition, and final-expression are all omitted, resulting in an infinite loop. However, control statements inside the loop can still determine when the loop exits.
    
2. **Example**: Your provided code is an example of an advanced `for` loop:
    

```javascript
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let i = 0;

for (;;) {
  console.log(products[i]);
  i++;
  if (i === products.length) break;
}
```

In this example:

- `products` is an array of strings, and `i` is a counter variable initialized to `0`.
- The `for (;;)` statement creates an infinite loop. There’s no condition to check before each loop iteration, so the loop will continue indefinitely unless it’s broken by a `break` statement.
- Inside the loop, the current product is logged to the console, the counter `i` is incremented, and then a check is made to see if `i` is equal to the length of the `products` array. If it is, the `break` statement is executed, which terminates the loop.
- This loop will print each product to the console. After all products have been printed, `i` will be equal to `products.length`, so the loop ends. This is an example of controlling the flow of an infinite loop.

______________________________________________________________________


## Related : 

- [[Loop - For And Concept Of Loop]].
- [[Loop Control - Break, Continue, Label]].


## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-14 13:28 
  
  
   ## Modification date :
   
   Thursday 14th December 2023 13:28:54