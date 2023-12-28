
### Status: #week-06

### Tags: #EWS  , #Programming 



1. **Do/While Loop**: The `do/while` loop is a variant of the `while` loop. This loop will execute the block of code once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
    
2. **Example**: Your provided code is an example of a `do/while` loop:
    

```javascript
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let i = 0;

do {
  console.log(i);
  i++;
} while (false);

console.log(i);
```

In this example:

- `products` is an array of product names, and `i` is a counter variable initialized to `0`.
- The `do/while` loop executes the block of code once, then checks the condition. If the condition is `true`, the loop continues; if `false`, the loop ends.
- Inside the loop, the current value of `i` is logged to the console, and then `i` is incremented by `1`.
- The condition for this loop is `false`, so after the first iteration, the loop ends.
- After the loop, `console.log(i);` prints the value of `i` to the console, which will be `1` because `i` was incremented once inside the loop.

This is a common pattern for ensuring that a block of code runs at least once, but possibly more times if a certain condition is met. However, in this specific example, because the condition is `false`, the loop only runs once. If you wanted the loop to run multiple times, you could use a condition that evaluates to `true` under certain circumstances. For example, you could check if `i` is less than the length of the `products` array. This would print each product to the console, just like in the `while` loop example.


______________________________________________________________________


## Related : 

- [[Loop - While]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-14 15:56 
  
  
   ## Modification date :
   
   Thursday 14th December 2023 15:56:50