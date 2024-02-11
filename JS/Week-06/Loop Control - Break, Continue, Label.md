
### Status: #week-06

### Tags: #EWS  , #Programming 


Sure, here are the notes from your code:

1. **Loop Control**: Loop control statements change the execution from its normal sequence. JavaScript supports the following control statements:
    
    - **Break**: The `break` statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.
    - **Continue**: The `continue` statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.
    - **Label**: A label provides a statement with an identifier that lets you refer to it elsewhere in your program.
2. **Example**: Your provided code is an example of loop control:
    

```javascript
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "Black"];

mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] === "Green") {
      break mainLoop;
    }
  }
}
```

In this example:

- `mainLoop` and `nestedLoop` are labels for the outer and inner `for` loops, respectively.
- The `break mainLoop;` statement inside the `if` condition breaks out of the `mainLoop` (the outer loop) when the color is “Green”. This demonstrates the use of a labeled `break` statement to control the flow of the program.
- Without the label `mainLoop`, the `break` statement would only terminate the inner loop (`nestedLoop`). With the label, it terminates the outer loop instead. This is an example of how labels can be used to modify the flow control of a program.

______________________________________________________________________


## Related : 

- [[Break]].
- [[Continue]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-14 13:20 
  
  
   ## Modification date :
   
   Thursday 14th December 2023 13:20:25