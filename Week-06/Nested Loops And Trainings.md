
### Status: #week-06

### Tags: #EWS  , #Programming 



1. **Nested Loops**: A nested loop is a loop within a loop. The inner loop will be executed one time for each iteration of the outer loop.
    
2. **Example**: Your provided code is an example of nested loops:
    

```javascript
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "Black"];
let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(15));
  console.log(`# ${products[i]}`);
  console.log("#".repeat(15));
  console.log("Colors: ");
  for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
  }
  console.log("Models: ");
  for (let k = 0; k < models.length; k++) {
    console.log(`- ${models[k]}`);
  }
}
```

In this example:

- There are three arrays: `products`, `colors`, and `models`.
- The outer `for` loop iterates over each element in the `products` array.
- Inside the outer loop, there are two inner loops. The first inner loop iterates over each element in the `colors` array, and the second inner loop iterates over each element in the `models` array.
- For each product, the code prints a list of colors and a list of models. This results in every possible combination of product, color, and model being printed to the console.

______________________________________________________________________


## Related : 

- 

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-14 13:15 
  
  
   ## Modification date :
   
   Thursday 14th December 2023 13:16:55