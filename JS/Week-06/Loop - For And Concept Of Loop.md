
### Status: #week-06

### Tags: #EWS  , #Programming 


![For loop](https://www.bing.com/th?id=OSK.b1bd9242d750a646307ebcb867a93edd&pid=cdx&w=320&h=189&c=7&rs=1)

![](https://www.bing.com/th?id=OSK.b1bd9242d750a646307ebcb867a93edd&pid=cdx&w=92&h=189&c=7)

1. **Loop**: A loop is a programming construct that allows you to execute a block of code repeatedly based on a condition.
    
2. **For Loop**: The `for` loop is one of the most common types of loops in JavaScript. It has the following structure:
    

```javascript
for ([1] [2] [3]) {
  // Block Of Code
}
```

Where:

- `[1]` is the **initialization**. This is where you declare and initialize your loop variable. It’s executed once before the loop starts.
- `[2]` is the **condition**. This is a boolean expression that is checked before each iteration of the loop. If it evaluates to `true`, the loop continues; if `false`, the loop ends.
- `[3]` is the **final-expression** or **update**. This is executed at the end of each loop iteration, typically to update the loop variable.

3. **Example**: Your provided code is an example of a `for` loop:

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

In this example:

- `let i = 0` is the initialization. The variable `i` is declared and initialized to `0`.
- `i < 10` is the condition. The loop will continue as long as `i` is less than `10`.
- `i++` is the final-expression. After each loop iteration, `i` is incremented by `1`.
- `console.log(i);` is the block of code that is executed in each loop iteration. It prints the current value of `i` to the console.

This loop will print the numbers `0` through `9` to the console. After `i` reaches `10`, the condition `i < 10` is no longer true, so the loop ends.

______________________________________________________________________


## Related : 

- [[For Loops]].

## Reference: 

1.  


---

  ## Creation date: 
  
  <%tp.file.creation_date()%> 
  
  
   ## Modification date :
   
   <%tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss")%>