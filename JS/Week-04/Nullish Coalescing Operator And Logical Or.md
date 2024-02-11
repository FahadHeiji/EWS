
### Status: #week-04

### Tags: #EWS  , #Programming 


Sure, here are the notes on JavaScript Nullish Coalescing Operator and Logical OR Operator with examples:

## JavaScript Nullish Coalescing Operator (??)

The nullish coalescing operator (`??`) is a logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined`, and otherwise returns its left-hand side operand.

### Examples

```javascript
let foo;

console.log(foo ?? "default string"); // Output: "default string"

foo = "Hello, world!";
console.log(foo ?? "default string"); // Output: "Hello, world!"
```

## JavaScript Logical OR Operator (||)

The logical OR operator (`||`) returns the first truthy value. If both operands are falsy, it returns the last operand.

### Examples

```javascript
let foo;

console.log(foo || "default string"); // Output: "default string"

foo = "Hello, world!";
console.log(foo || "default string"); // Output: "Hello, world!"

foo = 0;
console.log(foo || "default string"); // Output: "default string"
```

In the last example, even though `foo` is not `null` or `undefined`, the OR operator (`||`) considers `0` as a falsy value, so it returns the right-hand side operand. This is a key difference between the nullish coalescing operator (`??`) and the logical OR operator (`||`). The nullish coalescing operator only checks for `null` or `undefined`, not any other falsy values.

______________________________________________________________________


## Related : 

- [[Logical Operators]].

## Reference: 

1.  


---

  ## Creation date: 
  
  <%tp.file.creation_date()%> 
  
  
   ## Modification date :
   
   <%tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss")%>