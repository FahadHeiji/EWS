
### Status: #week-07

### Tags: #EWS  , #Programming 





# Function

## Return
The `return` statement ends function execution and specifies a value to be returned to the function caller. If the `return` statement is without an expression, the function returns `undefined`.

## Automatic Semicolon Insertion [No Line Terminator Allowed]
JavaScript has a feature known as Automatic Semicolon Insertion (ASI) where it automatically inserts semicolons after most lines. However, there are certain places where it's not allowed, such as between the `return` keyword and the expression to return.

## Interrupting
A function execution can be interrupted by the `return` statement. Once a `return` statement is encountered, the function stops executing and returns the specified value.

## Practical Example
Here's a practical example of a function that uses a loop, a conditional statement, and the `return` statement:

```javascript
function generate(start, end) {
  for (let i = start; i <= end; i++) {
    if (i === 15) {
      return `Interrupting`;
    }
    console.log(i);
  }
}

generate(10, 20);
````

In this example, `generate` is a user-defined function that takes two parameters: `start` and `end`. It generates a list of numbers from `start` to `end`, but if the number is 15, it interrupts the loop and returns the string ‘Interrupting’.

______________________________________________________________________


## Related : 

- [[Function Advanced Examples]].

## Reference: 

1.  


---

  ## Creation date: 
  
  <%tp.file.creation_date()%> 
  
  
   ## Modification date :
   
   <%tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss")%>